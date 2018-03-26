import { inspect } from 'util';

import { REMOVE_IPV4_MAPPED_IPV6_REGEX } from '../../utils/constants';

export default class HTTPContext {
	/**
	 * Constructor
	 *
	 * @param {Object} params
	 */
	constructor({ request, response }) {
		this.request = request;
		this.response = response;

		this.sent = false;
		this.trustProxy = false;
	}

	/**
	 * Returns the IPv4 addres
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
	 * Returns the current URL path
	 *
	 * @return {string}
	 */
	getUrl() {
		return this.request.url;
	}

	/**
	 * Send response
	 *
	 * @param {mixed}  body
	 * @param {Object} options
	 *
	 * @return {Promise}
	 */
	send(body, { statusCode = 200 } = {}) {
		if (this.sent) {
			throw new Error('Response sent!');
		}

		return new Promise((resolve, reject) => {
			this.response.statusCode = statusCode;
			this.response.end(body, (error) => {
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
