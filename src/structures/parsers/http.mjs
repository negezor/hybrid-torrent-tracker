import { encode } from 'bencode';
import { TrackerError, IncorrectRequestError } from '../../errors';

import {
	decodeQueryString,
	simpleSchemaValidate,

	binaryToHex,
	hexToBinary,

	ipv4PeersToCompact,
	ipv6PeersToCompact
} from '../../utils/helpers';
import {
	announceEvents,
	trackerActions,

	DEFAULT_ANNOUNCE_PEERS
} from '../../utils/constants';

const allowAnnounceEvents = [...Object.values(announceEvents)];

const schemaAnnounce = {
	info_hash: (infoHash) => {
		if (typeof infoHash !== 'string' || infoHash.length !== 20) {
			throw new IncorrectRequestError({
				message: 'Invalid info_hash'
			});
		}

		return binaryToHex(infoHash);
	},
	peer_id: (peerId) => {
		if (typeof peerId !== 'string' || peerId.length !== 20) {
			throw new IncorrectRequestError({
				message: 'Invalid peer_id'
			});
		}

		return binaryToHex(peerId);
	},

	port: (port) => {
		port = Number(port);

		if (Number.isNaN(port) || (port < 0 || port > 65535)) {
			throw new IncorrectRequestError({
				message: 'Invalid port'
			});
		}

		return port;
	},

	uploaded: (uploaded) => {
		uploaded = Number(uploaded);

		return !Number.isNaN(uploaded)
			? uploaded
			: 0;
	},
	downloaded: (downloaded) => {
		downloaded = Number(downloaded);

		return !Number.isNaN(downloaded)
			? downloaded
			: 0;
	},
	left: (left) => {
		left = Number(left);

		return !Number.isNaN(left)
			? left
			: Infinity;
	},

	compact: (compact) => {
		compact = Number(compact);

		return !Number.isNaN(compact)
			? compact
			: 0;
	},

	event: event => (
		allowAnnounceEvents.includes(event)
			? event
			: announceEvents.UPDATE
	),

	numwant: (numwant) => {
		numwant = Number(numwant);

		return !Number.isNaN(numwant)
			? numwant
			: DEFAULT_ANNOUNCE_PEERS;
	}
};

const schemaScrape = {
	info_hash: (infoHashes) => {
		if (!infoHashes) {
			return [];
		}

		if (!Array.isArray(infoHashes)) {
			infoHashes = [infoHashes];
		}

		return infoHashes.map((binaryInfoHash) => {
			if (typeof binaryInfoHash !== 'string' || binaryInfoHash.length !== 20) {
				throw new IncorrectRequestError({
					message: 'Invalid info_hash'
				});
			}

			return binaryToHex(binaryInfoHash);
		});
	}
};

export default class HTTPParser {
	static parseRequest(connection) {
		const [path, rawQuery] = connection.getUrl().split('?');

		const request = decodeQueryString(rawQuery);

		if (path.startsWith('/announce')) {
			return simpleSchemaValidate({ action: trackerActions.ANNOUNCE, ...request }, schemaAnnounce);
		}

		if (path.startsWith('/scrape')) {
			return simpleSchemaValidate({ action: trackerActions.SCRAPE, ...request }, schemaScrape);
		}

		throw new IncorrectRequestError({
			message: 'Invalid action in HTTP'
		});
	}

	static toStringResponse(payload, { action }) {
		if (action === trackerActions.ANNOUNCE) {
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

	static responseAnnounce({
		interval,
		complete,
		incomplete,
		compact = 1,
		peers = []
	}) {
		const response = {
			complete,
			incomplete,
			interval,
		};

		if (compact === 1) {
			response.peers = ipv4PeersToCompact(peers);
			response.peers6 = ipv6PeersToCompact(peers);
		} else if (compact === 0) {
			response.peers = peers.map(peer => ({
				'peer id': hexToBinary(peer.peerId),
				ip: peer.ip,
				port: peer.port
			}));
		}

		return encode(response);
	}

	static responseScrape({
		interval,
		files = []
	}) {
		const response = {
			files: {},
			flags: {
				min_request_interval: interval
			}
		};

		Object.assign(response.files, ...files.map(file => ({
			[hexToBinary(file.infoHash)]: {
				complete: file.complete || 0,
				incomplete: file.incomplete || 0,
				downloaded: file.downloaded || 0
			}
		})));

		return encode(response);
	}

	static responseError({ message }) {
		return encode({
			'failure reason': message
		});
	}
}
