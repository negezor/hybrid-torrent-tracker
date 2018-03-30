import createDebug from 'debug';

import { createServer } from 'http';
import { promisify } from 'util';

import { UDPServer, HTTPServer, WebSocketServer } from './servers';

import { assignDefaultOptions } from './utils/helpers';
import { defaultTrackerOptions } from './utils/constants';

const debug = createDebug('hybrid-torrent-tracker:tracker');

/**
 * Starts server
 *
 * @param {Server} server
 * @param {Object} address
 *
 * @return {Promise}
 */
const listenServer = (server, { port, host }) => {
	const listen = promisify(server.listen).bind(server);

	return listen(port, host);
};

export default class Tracker {
	/**
	 * Constructor
	 *
	 * @param {Object} options
	 */
	constructor(trackerOptions = {}) {
		this.options = assignDefaultOptions(defaultTrackerOptions, trackerOptions);

		this.stack = [];
	}

	/**
	 * Added middleware
	 *
	 * @param {Function} handler
	 *
	 * @return {this}
	 */
	use(middleware) {
		this.stack.push(middleware);

		return this;
	}

	/**
	 * Starts listening
	 *
	 * @return {Promise}
	 */
	listen() {
		const { udp, http, websocket } = this.options;

		const promises = [];

		if (udp.enabled) {
			this.udpServer = new UDPServer(udp);

			this.udpServer.use(...this.stack);

			promises.push(this.udpServer.listen());
		}

		let outsideHttpServer = false;
		let outsideWebSocketServer = false;

		if (!http.httpServer) {
			http.httpServer = createServer();
		} else {
			outsideHttpServer = true;
		}

		if (!websocket.httpServer) {
			// eslint-disable-next-line max-len
			if (http.port === websocket.port && ((!http.host && !websocket.host) || http.host === websocket.host)) {
				websocket.httpServer = http.httpServer;

				outsideWebSocketServer = outsideHttpServer;
			} else {
				websocket.httpServer = createServer();
			}
		} else {
			outsideWebSocketServer = true;
		}

		if (websocket.enabled) {
			this.webSocketServer = new WebSocketServer(websocket);

			this.webSocketServer.use(...this.stack);

			promises.push(this.webSocketServer.listen());

			if (!outsideWebSocketServer) {
				promises.push(listenServer(websocket.httpServer, websocket));
			}
		}

		if (http.enabled) {
			this.httpServer = new HTTPServer(http);

			this.httpServer.use(...this.stack);

			promises.push(this.httpServer.listen());

			if (
				(websocket.enabled && http.httpServer !== websocket.httpServer && !outsideHttpServer)
				|| (!websocket.enabled && !outsideHttpServer)
			) {
				promises.push(listenServer(http.httpServer, http));
			}
		}

		return Promise.all(promises);
	}
}
