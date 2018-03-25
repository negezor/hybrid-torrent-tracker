import createDebug from 'debug';

import http from 'http';
import { promisify } from 'util';

import { defaultHTTPServerOptions } from '../utils/constants';

const debug = createDebug('hybrid-torrent-tracker:http-server');

export default class HTTPServer {
	/**
	 * Constructor
	 *
	 * @param {Object} options
	 */
	constructor(options = {}) {
		this.options = { ...defaultHTTPServerOptions, ...options };

		this.httpServer = this.options.httpServer;
	}

	/**
	 * Starts http listening
	 *
	 * @return {Promise}
	 */
	async listen() {
		if (this.httpServer === null) {
			this.httpServer = http.createServer();
		}

		const { httpServer } = this;
		const { port, host } = this.options;

		const listen = promisify(httpServer.listen).bind(httpServer);

		await listen(port, host);

		debug(`listens on port: ${port}, host: ${host}`);
	}
}
