import { inspect } from 'util';

import { TrackerError } from '../../../errors';

import ConnectionContext from './context';
import { HTTPParser } from '../../parsers';

import { REMOVE_IPV4_MAPPED_IPV6_REGEX } from '../../../utils/constants';

export default class HTTPConnectionContext extends ConnectionContext {
	/**
	 * Constructor
	 *
	 * @param {Object} params
	 */
	constructor({ request, response, trustProxy = false }) {
		super();

		this.request = request;
		this.response = response;

		this.trustProxy = trustProxy;

		this.sent = false;
	}

	/**
	 * Returns the connection ip addres
	 *
	 * @return {string}
	 */
	getIp() {
		const { headers, connection } = this.request;

		const ip = this.trustProxy
			? headers['x-forwarded-for'] || connection.remoteAddress
			: connection.remoteAddress.replace(REMOVE_IPV4_MAPPED_IPV6_REGEX, '');

		return ip;
	}

	/**
	 * Returns the connection port
	 *
	 * @return {number}
	 */
	getPort() {
		return this.request.remoteAddress.remotePort;
	}

	/**
	 * Returns the current URL path
	 *
	 * @return {string}
	 */
	getUrl() {
		return this.request.url;
	}

	/**
	 * Sends a response
	 *
	 * @param {Object} payload
	 * @param {Object} options
	 *
	 * @return {Promise}
	 */
	send(payload, options) {
		return new Promise((resolve, reject) => {
			if (this.sent) {
				throw new TrackerError({
					message: 'Response sent!'
				});
			}

			const message = HTTPParser.toStringResponse(payload, options);

			this.response.statusCode = options.statusCode || 200;
			this.response.end(message, (error) => {
				if (error) {
					reject(error);
					return;
				}

				this.sent = true;

				resolve();
			});
		});
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
		const { sent } = this;

		const payload = { sent };

		return `${options.stylize(name, 'special')} ${inspect(payload, options)}`;
	}
}
