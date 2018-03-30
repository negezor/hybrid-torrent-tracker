import { TrackerError, IncorrectRequestError } from '../../errors';

import { AnnounceRequestContext } from '../contexts';
import {
	toUInt32,
	fromUInt64,
	bufferToStringIp,
	ipv4PeersToCompact
} from '../../utils/helpers';
import {
	trackerActions,
	udpAnnounceEventsIds,

	DEFAULT_ANNOUNCE_PEERS
} from '../../utils/constants';

const INFO_HASH_BYTES = 20;

const CONNECTION_ACTION = toUInt32(trackerActions.CONNECT);
const ANNOUNCE_ACTION = toUInt32(trackerActions.ANNOUNCE);
const SCRAPE_ACTION = toUInt32(trackerActions.SCRAPE);
const ERROR_ACTION = toUInt32(trackerActions.ERROR);

/**
 * The protocol ID of the UDP
 *
 * @type {Buffer}
 */
export const UDP_PROTOCOL_ID = Buffer.concat([toUInt32(0x417), toUInt32(0x27101980)]);

export default class UDPParser {
	static parseRequest(connection, message) {
		if (message.length < 16) {
			throw new IncorrectRequestError({
				message: 'Received packet is too short'
			});
		}

		/* 32 bytes */
		const action = message.readUInt32BE(8);

		const request = {
			/* 64 bytes */
			connection_id: message.slice(0, 8),

			action,

			/* 32 bytes */
			transaction_id: message.readUInt32BE(12)
		};

		if (action === trackerActions.CONNECT) {
			if (!UDP_PROTOCOL_ID.equals(request.connection_id)) {
				throw new IncorrectRequestError({
					message: 'Received packet with invalid protocol ID'
				});
			}
		} else if (action === trackerActions.ANNOUNCE) {
			/* 32 bytes */
			const ip = message.readUInt32BE(84);

			Object.assign(request, {
				/* 20 bytes */
				info_hash: message.slice(16, 36).toString('hex'),
				/* 20 bytes */
				peer_id: message.slice(36, 56).toString('hex'),

				/* 64 bytes */
				downloaded: fromUInt64(message.slice(56, 64)),
				/* 64 bytes */
				left: fromUInt64(message.slice(64, 72)),
				/* 64 bytes */
				uploaded: fromUInt64(message.slice(72, 80)),

				/* 32 bytes */
				event: udpAnnounceEventsIds[message.readUInt32BE(80)],

				ip: ip
					? bufferToStringIp(ip)
					: null,

				/* 32 bytes */
				key: message.readUInt32BE(88),

				numwant: message.readUInt32BE(92) || DEFAULT_ANNOUNCE_PEERS,

				/* 16 bytes */
				port: message.readUInt16BE(96) || null
			});

			if (!request.event) {
				throw new IncorrectRequestError({
					message: 'Invalid event'
				});
			}
		} else if (action === trackerActions.SCRAPE) {
			if ((message.length - 16) % INFO_HASH_BYTES !== 0) {
				throw new IncorrectRequestError({
					message: 'Invalid scrape message'
				});
			}

			const infoHashes = [];

			const length = (message.length - 16) / INFO_HASH_BYTES;

			for (let i = 0; i < length; i += 1) {
				const bytesOffset = i * INFO_HASH_BYTES;

				const infoHash = message.slice(16 + bytesOffset, 36 + bytesOffset).toString('hex');

				infoHashes.push(infoHash);
			}

			request.info_hash = infoHashes;
		} else {
			throw new IncorrectRequestError({
				message: `Invalid action in UDP packet: ${action}`
			});
		}

		return request;
	}

	static toBufferResponse(payload, { action }) {
		if (action === trackerActions.CONNECT) {
			return this.responseConnection(payload);
		} else if (action === trackerActions.ANNOUNCE) {
			return this.responseAnnounce(payload);
		} else if (action === trackerActions.SCRAPE) {
			return this.responseScrape(payload);
		} else if (action === trackerActions.ERROR) {
			return this.responseError(payload);
		}

		throw new TrackerError({
			message: `Invalid response action in UDP packet: ${action}`
		});
	}

	static responseConnection({ transactionId, connectionId }) {
		return Buffer.concat([
			CONNECTION_ACTION,

			toUInt32(transactionId),

			connectionId
		]);
	}

	static responseAnnounce({
		transactionId,

		interval,
		incomplete,
		complete,

		peers = []
	}) {
		return Buffer.concat([
			ANNOUNCE_ACTION,

			toUInt32(transactionId),

			toUInt32(interval),
			toUInt32(incomplete),
			toUInt32(complete),

			ipv4PeersToCompact(peers)
		]);
	}

	static responseScrape({
		transactionId,

		files = []
	}) {
		return Buffer.concat([
			SCRAPE_ACTION,

			toUInt32(transactionId),

			...[].concat(...files.map(torrent => [
				toUInt32(torrent.complete || 0),
				toUInt32(torrent.downloaded || 0),
				toUInt32(torrent.incomplete || 0)
			]))
		]);
	}

	static responseError({ transactionId, failureReason }) {
		return Buffer.concat([
			ERROR_ACTION,

			toUInt32(transactionId || 0),
			Buffer.from(String(failureReason))
		]);
	}
}
