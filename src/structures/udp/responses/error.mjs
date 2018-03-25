import Response from './response';

import { toUInt32 } from '../../../utils/helpers';
import { trackerActions } from '../../../utils/constants';

const ERROR_ACTION = toUInt32(trackerActions.ERROR);

export default class ErrorResponse extends Response {
	/**
	 * Returns the buffer for the response
	 *
	 * @param {Object} params
	 *
	 * @return {Buffer}
	 */
	static toBuffer({ transactionId, failureReason }) {
		return Buffer.concat([
			ERROR_ACTION,

			toUInt32(transactionId || 0),
			Buffer.from(String(failureReason))
		]);
	}
}
