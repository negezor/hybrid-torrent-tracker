import { promisify, inspect } from 'util';

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

		this.sent = false;
	}

	/**
	 * Send response
	 *
	 * @param {Buffer} body
	 * @param {Object} options
	 *
	 * @return {Promise}
	 */
	async send(body) {
		const { port, address } = this.remoteInfo;

		await this.socketSend(body, 0, body.length, port, address);

		this.sent = true;
	}

	/**
	 * Custom inspect object
	 *
	 * @param {?number} depth
	 * @param {Object}  options
	 *
	 * @return {string}
	 */
	[inspect.custom](depth, options) {
		const { name } = this.constructor;
		const { sent, remoteInfo } = this;

		const payload = { sent, remoteInfo };

		return `${options.stylize(name, 'special')} ${inspect(payload, options)}`;
	}
}
