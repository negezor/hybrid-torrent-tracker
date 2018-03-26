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
	constructor(trackerOptions = {}) {
		this.options = { ...defaultTrackerOptions, ...trackerOptions };

		this.httpServer = new HTTPServer(this.options.http);
		this.udpServer = new UDPServer(this.options.udp);
	}

	/**
	 * Added middleware
	 *
	 * @param {Function} handler
	 *
	 * @return {this}
	 */
	use(middleware) {
		this.httpServer.use(middleware);
		this.udpServer.use(middleware);

		return this;
	}

	/**
	 * Starts listening
	 *
	 * @return {Promise}
	 */
	listen() {
		return Promise.all([
			this.httpServer.listen(),
			this.udpServer.listen()
		]);
	}
}
