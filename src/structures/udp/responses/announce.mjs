import string2compact from 'string2compact';

import Response from './response';

import { toUInt32 } from '../../../utils/helpers';
import { trackerActions } from '../../../utils/constants';

const ANNOUNCE_ACTION = toUInt32(trackerActions.ANNOUNCE);

export default class AnnounceResponse extends Response {
	/**
	 * Returns the buffer for the response
	 *
	 * @param {Object} params
	 *
	 * @return {Buffer}
	 */
	static toBuffer({
		transactionId,
		announceInterval,
		leechers,
		seeders,
		peers = []
	}) {
		return Buffer.concat([
			ANNOUNCE_ACTION,

			toUInt32(transactionId),
			toUInt32(announceInterval),
			toUInt32(leechers),
			toUInt32(seeders),

			string2compact(peers.map(({ ip, port }) => `${ip}:${port}`))
		]);
	}
}
