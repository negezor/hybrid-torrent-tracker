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
			: connection.remoteAddress;

		return ip.replace(REMOVE_IPV4_MAPPED_IPV6_REGEX, '');
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
	send(body, { statusCode = 200 }) {
		if (this.sent) {
			throw new Error('Response sent!');
		}

		this.response.statusCode = statusCode;

		return new Promise((resolve, reject) => {
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
}
