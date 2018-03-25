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
		intervalUpdate,
		incomplete,
		complete,
		peers
	}) {
		return Buffer.concat([
			ANNOUNCE_ACTION,

			toUInt32(transactionId),
			toUInt32(intervalUpdate),
			toUInt32(incomplete),
			toUInt32(complete),
			peers
		]);
	}
}
