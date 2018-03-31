import WebSocket from 'ws';
import createDebug from 'debug';
import Middleware from 'middleware-io';

import { promisify } from 'util';

import { IncorrectRequestError } from '../errors';

import {
	HTTPConnectionContext,

	AnnounceRequestContext,
	ScrapeRequestContext
} from '../structures/contexts';

import {
	defaultWebSocketServerOptions,
	trackerActions,

	REMOVE_IPV4_MAPPED_IPV6_RE
} from '../utils/constants';

const debug = createDebug('hybrid-torrent-tracker:websocket-server');

const requestContexts = {
	[trackerActions.ANNOUNCE]: AnnounceRequestContext,
	[trackerActions.SCRAPE]: ScrapeRequestContext,
};

export default class WebSocketServer {
	/**
	 * Constructor
	 *
	 * @param {Object} options
	 */
	constructor(serverOptions = {}) {
		this.options = { ...defaultWebSocketServerOptions, ...serverOptions };

		this.httpServer = this.options.httpServer;

		this.sockets = new Map();

		this.middleware = new Middleware([
			async (context, next) => {
				debug('WebSocket request', context);

				await next();

				if (context.isSent()) {
					return;
				}

				const { action, response } = context;

				if (trackerActions.ANNOUNCE === action) {
					if (context.offers.length !== 0) {
						//
					}

					await context.send({
						interval: this.options.interval,
						complete: response.complete,
						incomplete: response.incomplete,
						compact: context.compact,
						peers: response.peers
					});
				} else if (trackerActions.SCRAPE === action) {
					await context.send({
						interval: this.options.interval,
						complete: response.complete,
						incomplete: response.incomplete,
						compact: context.compact,
						peers: response.peers
					});
				} else {
					throw new IncorrectRequestError({
						message: 'Internal server error'
					});
				}
			}
		]);

		const { trustProxy } = this.options;

		this.onConnection = (socket, { headers }) => {
			const state = {
				ip:	trustProxy
					// eslint-disable-next-line no-underscore-dangle
					? socket.headers['x-forwarded-for'] || socket._socket.remoteAddress
					// eslint-disable-next-line no-underscore-dangle
					: socket._socket.remoteAddress.replace(REMOVE_IPV4_MAPPED_IPV6_RE, ''),
				// eslint-disable-next-line no-underscore-dangle
				port: socket._socket.remotePort,
				headers,

				peerId: null,
				destroyed: false,
			};

			const socketSend = promisify(socket.send).bind(socket);

			const onSocketClose = async (error) => {
				if (state.destroyed || !state.peerId) {
					return;
				}

				state.destroyed = true;

				//
			};

			const onSocketMessage = async (message) => {
				const context = new HTTPConnectionContext({ socket, socketSend });

				try {
					// TODO: Make it

					await this.middleware.run(context);
				} catch (error) {
					if (!(error instanceof IncorrectRequestError)) {
						// eslint-disable-next-line no-console
						console.error('Some error:', error);
					}
				}
			};

			socket.on('error', onSocketClose);
			socket.on('close', onSocketClose);
			socket.on('message', onSocketMessage);
		};

		// eslint-disable-next-line
		this.onError = error => console.log('WebSocket error', error);
	}

	/**
	 * Added middleware
	 *
	 * @param {Function} middlewares
	 *
	 * @return {this}
	 */
	use(middlewares) {
		this.middleware.use(...middlewares);

		return this;
	}

	/**
	 * Starts http listening
	 *
	 * @return {Promise}
	 */
	async listen() {
		this.webSocketServer = new WebSocket({
			server: this.httpServer,
			perMessageDeflate: false,
			clientTracking: false
		});

		this.webSocketServer.on('error', this.onError);
		this.webSocketServer.on('connection', this.onConnection);

		const { port, host } = this.options;

		debug(`listens on port: ${port}, host: ${host}`);
	}
}
