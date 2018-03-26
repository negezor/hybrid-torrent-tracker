import { promisify } from 'util';

export default class UDPContext {
	/**
	 * Constructor
	 *
	 * @param {Object} params
	 */
	constructor({ socket, socketSend, remoteInfo }) {
		this.socket = socket;
		this.remoteInfo = remoteInfo;

		this.socketSend = socketSend;
	}

	/**
	 * Send response
	 *
	 * @param {Buffer} body
	 * @param {Object} options
	 *
	 * @return {Promise}
	 */
	async send(body, { statusCode = 200 }) {
		const { port, address } = this.remoteInfo;

		await this.response.socketSend(body, 0, body.length, port, address);
	}
}
