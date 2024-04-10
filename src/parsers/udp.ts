import { TrackerAction, AnnounceEvent, AnnouncePeerSimultaneously } from '../constants';
import {
	toUInt32,
	toUInt64,
	intToIPv4,
	ipv4PeersToCompact
} from '../helpers';
import { IncorrectRequestError } from '../errors';
import type {
	IConnectionRequestPayload,
	IAnnounceRequestPayload,
	IScrapeRequestPayload,

	IUDPConnectionResponse,
	IUDPAnnounceResponse,
	IUDPScrapeResponse,
	IUDPErrorResponse,

	UDPResponseUnion
} from '../interfaces';

/**
 * Events announce ids list UDP
 */
/* eslint-disable @typescript-eslint/naming-convention */
export const udpAnnounceEvents = {
	0: AnnounceEvent.UPDATE,
	1: AnnounceEvent.COMPLETED,
	2: AnnounceEvent.STARTED,
	3: AnnounceEvent.STOPPED
};
/* eslint-enable @typescript-eslint/naming-convention */

/**
 * Action list UDP
 */
/* eslint-disable @typescript-eslint/naming-convention */
export const udpTrackerActions = {
	0: TrackerAction.CONNECT,
	1: TrackerAction.ANNOUNCE,
	2: TrackerAction.SCRAPE,
	3: TrackerAction.ERROR
};
/* eslint-enable @typescript-eslint/naming-convention */

const CONNECTION_ACTION = toUInt32(0);
const ANNOUNCE_ACTION = toUInt32(1);
const SCRAPE_ACTION = toUInt32(2);
const ERROR_ACTION = toUInt32(3);

const PROTOCOL_ID = 0x41727101980n;

const INFO_HASH_BYTES = 20;

export interface IUDPRequestHeaders {
	connection_id: bigint;
	action: TrackerAction;
	transaction_id: number;
}

export const parseRequestHeaders = (message: Buffer): IUDPRequestHeaders => {
	if (message.length < 16) {
		throw new IncorrectRequestError({
			message: 'Received packet is too short',
			code: 'PACKET_TOO_SHORT'
		});
	}

	return {
		/* 64 bytes (0-8) */
		connection_id: message.readBigUInt64BE(0),

		/* 32 bytes (8-12) */
		action: udpTrackerActions[message.readUInt32BE(8) as keyof typeof udpTrackerActions],

		/* 32 bytes (12-16) */
		transaction_id: message.readUInt32BE(12)
	};
};

export const parseConnectionRequest = (
	message: Buffer,
	headers: IUDPRequestHeaders
): IConnectionRequestPayload => {
	if (headers.connection_id !== PROTOCOL_ID) {
		throw new IncorrectRequestError({
			message: 'Received packet with invalid protocol ID',
			code: 'INVALID_PARAMETER'
		});
	}

	return headers;
};

export const parseAnnounceRequest = (
	message: Buffer,
	headers: IUDPRequestHeaders
): IAnnounceRequestPayload => {
	/* 32 bytes (80-84) */
	const event = udpAnnounceEvents[message.readUInt32BE(80) as keyof typeof udpAnnounceEvents];

	if (!event) {
		throw new IncorrectRequestError({
			message: 'Invalid event',
			code: 'INVALID_PARAMETER'
		});
	}

	/* 32 bytes (84-88) */
	const ip = message.readUInt32BE(84);

	const request = {
		/* 20 bytes (16-36) */
		info_hash: message.slice(16, 36).toString('hex'),
		/* 20 bytes (36-56) */
		peer_id: message.slice(36, 56).toString('hex'),

		/* 64 bytes (56-64)  */
		downloaded: message.readBigUInt64BE(56),
		/* 64 bytes (64-72) */
		left: message.readBigUInt64BE(64),
		/* 64 bytes (72-80) */
		uploaded: message.readBigUInt64BE(72),

		/* UDP is always compact */
		compact: 1,

		no_peer_id: 1,

		event,

		ip: ip
			? intToIPv4(ip)
			: undefined,

		/* 32 bytes (88-92) */
		key: message.readUInt32BE(88),

		/* 32 bytes (92-96) */
		numwant: message.readUInt32BE(92) || AnnouncePeerSimultaneously.DEFAULT,

		/* 16 bytes (96-98) */
		port: message.readUInt16BE(96) || undefined
	};

	if (message.length > 98) {
		/* 16 bytes (98-100) */
		const extensionBitMask = message.readUInt16BE(98);
		/* 16 bytes (100-*) */
		const extensionMessage = message.slice(100);

		let length = 0;

		for (let i = 0, bit = 1; i < 16; i += 1, bit *= 2) {
			// eslint-disable-next-line no-bitwise
			if ((bit & extensionBitMask) === 512) {
				break;
			}

			// eslint-disable-next-line no-bitwise
			if ((bit & extensionBitMask) === bit) {
				length += bit;
			}
		}

		const extensions = {
			request_string: extensionMessage.slice(0, length).toString() || undefined
		};

		return {
			...headers,
			...request,
			...extensions
		};
	}

	return {
		...headers,
		...request
	};
};

export const parseScrapeRequest = (
	message: Buffer,
	headers: IUDPRequestHeaders
): IScrapeRequestPayload => {
	if ((message.length - 16) % INFO_HASH_BYTES !== 0) {
		throw new IncorrectRequestError({
			message: 'Invalid scrape message',
			code: 'INVALID_PARAMETER'
		});
	}

	const infoHashes: string[] = [];

	const length = (message.length - 16) / INFO_HASH_BYTES;

	for (let i = 0; i < length; i += 1) {
		const bytesOffset = i * INFO_HASH_BYTES;

		const infoHash = message.slice(16 + bytesOffset, 36 + bytesOffset).toString('hex');

		infoHashes.push(infoHash);
	}

	return {
		...headers,

		info_hash: infoHashes
	};
};

export const connectionResponse = ({
	transactionId,
	connectionId
}: IUDPConnectionResponse): Buffer => (
	Buffer.concat([
		CONNECTION_ACTION,

		toUInt32(transactionId),

		toUInt64(connectionId)
	])
);

export const announceResponse = ({
	transactionId,

	interval,
	incomplete,
	complete,

	peers = []
}: IUDPAnnounceResponse): Buffer => (
	Buffer.concat([
		ANNOUNCE_ACTION,

		toUInt32(transactionId),

		toUInt32(interval),
		toUInt32(incomplete),
		toUInt32(complete),

		ipv4PeersToCompact(peers)
	])
);

export const scrapeResponse = ({
	transactionId,

	files = []
}: IUDPScrapeResponse): Buffer => (
	Buffer.concat([
		SCRAPE_ACTION,

		toUInt32(transactionId),

		...files
			.flatMap((torrent): Buffer[] => ([
				toUInt32(torrent.complete || 0),
				toUInt32(torrent.downloaded || 0),
				toUInt32(torrent.incomplete || 0)
			]))
	])
);

export const errorResponse = ({
	transactionId,

	message
}: IUDPErrorResponse): Buffer => (
	Buffer.concat([
		ERROR_ACTION,

		toUInt32(transactionId || 0),
		Buffer.from(String(message))
	])
);

export const toBufferResponse = (payload: UDPResponseUnion, action: TrackerAction): Buffer => {
	if (action === TrackerAction.CONNECT) {
		return connectionResponse(payload as IUDPConnectionResponse);
	}

	if (action === TrackerAction.ANNOUNCE) {
		return announceResponse(payload as IUDPAnnounceResponse);
	}

	if (action === TrackerAction.SCRAPE) {
		return scrapeResponse(payload as IUDPScrapeResponse);
	}

	if (action === TrackerAction.ERROR) {
		return errorResponse(payload as IUDPErrorResponse);
	}

	throw new TypeError(`Unknown action "${action}"`);
};
