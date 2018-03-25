import Response from './response';

import { toUInt32 } from '../../../utils/helpers';
import { trackerActions } from '../../../utils/constants';

const CONNECTION_ACTION = toUInt32(trackerActions.CONNECT);

export default class ConnectionResponse extends Response {
	/**
	 * Returns the buffer for the response
	 *
	 * @param {Object} params
	 *
	 * @return {Buffer}
	 */
	static toBuffer({ transactionId, connectionId }) {
		return Buffer.concat([
			CONNECTION_ACTION,

			toUInt32(transactionId),
			connectionId
		]);
	}
}
