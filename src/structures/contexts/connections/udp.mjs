import { inspect } from 'util';

import ConnectionContext from './context';
import { UDPParser } from '../../parsers';

export default class UDPConnectionContext extends ConnectionContext {
	/**
	 * Constructor
	 *
	 * @param {Object} params
	 */
	constructor({ socket, remoteInfo, socketSend }) {
		super();

		this.socket = socket;
		this.remoteInfo = remoteInfo;

		this.socketSend = socketSend;

		this.sent = false;
	}

	/**
	 * Returns the connection ip addres
	 *
	 * @return {string}
	 */
	getIp() {
		return this.remoteInfo.address;
	}

	/**
	 * Returns the connection port
	 *
	 * @return {number}
	 */
	getPort() {
		return this.remoteInfo.port;
	}

	/**
	 * Sends a response
	 *
	 * @param {Object} payload
	 * @param {Object} options
	 *
	 * @return {Promise}
	 */
	async send(payload, options) {
		const message = UDPParser.toBufferResponse(payload, options);

		const { port, address } = this.remoteInfo;

		await this.socketSend(message, 0, message.length, port, address);

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
