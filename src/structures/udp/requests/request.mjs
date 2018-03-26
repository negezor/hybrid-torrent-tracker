import { IncorrectRequestError } from '../../../errors';
import { requestTypes } from '../../../utils/constants';

export default class Request {
	/**
	 * Constructor
	 *
	 * @param {UDPContext} context
	 * @param {Buffer}     message
	 * @param {Object}     options
	 */
	constructor(context, message, { connectionId, action, transactionId }) {
		this.context = context;

		this.type = requestTypes.UDP;

		this.connectionId = connectionId;
		this.action = action;
		this.transactionId = transactionId;

		this.compact = 1;
	}

	/**
	 * Parser meta data
	 *
	 * @param {Buffer} message
	 * @param {Object} remoteInfo
	 *
	 * @return {Object}
	 */
	static parseMetadata(message) {
		if (message.length < 16) {
			throw new IncorrectRequestError({
				message: 'Received packet is too short'
			});
		}

		return {
			/* 64 bytes */
			connectionId: message.slice(0, 8),

			/* 32 bytes */
			action: message.readUInt32BE(8),
			/* 32 bytes */
			transactionId: message.readUInt32BE(12)
		};
	}
}
