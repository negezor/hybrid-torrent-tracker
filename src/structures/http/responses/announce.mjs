import { encode } from 'bencode';

import Response from './response';

import {
	hexToBinary,

	ipv4PeersToCompact,
	ipv6PeersToCompact
} from '../../../utils/helpers';

export default class AnnounceResponse extends Response {
	/**
	 * Returns the string for the response
	 *
	 * @param {Object} params
	 *
	 * @return {string}
	 */
	static toString({
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
}
