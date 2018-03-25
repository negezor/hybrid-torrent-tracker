import createDebug from 'debug';

import { HTTPServer, UDPServer } from './servers';
import { defaultTrackerOptions } from './utils/constants';

const debug = createDebug('hybrid-torrent-tracker:tracker');

export default class Tracker {
	/**
	 * Constructor
	 *
	 * @param {Object} options
	 */
	constructor(options = {}) {
		this.options = { ...defaultTrackerOptions, ...options };

		this.httpServer = null;
	}

	/**
	 * Starts listening
	 *
	 * @return {Promise}
	 */
	async listen() {
		try {
			if (!this.httpServer) {
				this.httpServer = new HTTPServer(this.options.http);
			}

			if (!this.udpServer) {
				this.udpServer = new UDPServer(this.options.udp);
			}

			await Promise.all([
				this.httpServer.listen(),
				this.udpServer.listen()
			]);
		} catch (e) {
			throw e;
		}
	}
}
