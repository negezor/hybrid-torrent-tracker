import createDebug from 'debug';
import Middleware from 'middleware-io';

import dgram from 'dgram';
import { promisify } from 'util';

import { IncorrectRequestError } from '../errors';
import { UDPParser } from '../structures/parsers';
import {
	UDPConnectionContext,

	ConnectionRequestContext,
	AnnounceRequestContext,
	ScrapeRequestContext
} from '../structures/contexts';

import {
	defaultUDPServerOptions,

	trackerActions,
	requestTypes
} from '../utils/constants';

const debug = createDebug('hybrid-torrent-tracker:udp-server');

const requestContexts = {
	[trackerActions.CONNECT]: ConnectionRequestContext,
	[trackerActions.ANNOUNCE]: AnnounceRequestContext,
	[trackerActions.SCRAPE]: ScrapeRequestContext,
};

export default class UDPServer {
	/**
	 * Constructor
	 *
	 * @param {Object} options
	 */
	constructor(serverOptions = {}) {
		this.options = { ...defaultUDPServerOptions, ...serverOptions };

		this.udp4Socket = this.options.udp4Socket;
		this.udp6Socket = this.options.udp6Socket;

		this.middleware = new Middleware([
			async (context, next) => {
				debug('UDP request', context);

				await next();

				if (context.isSent()) {
					return;
				}

				const {
					action,
					response,
					transactionId
				} = context;

				if (trackerActions.CONNECT === action) {
					await context.send({
						connectionId: context.connectionId,
						transactionId
					});
				} else if (trackerActions.ANNOUNCE === action) {
					await context.send({
						interval: this.options.interval,
						incomplete: response.incomplete,
						complete: response.complete,
						peers: response.peers,
						transactionId
					});
				} else if (trackerActions.SCRAPE === action) {
					await context.send({
						files: response.files,

						transactionId
					});
				} else {
					throw new IncorrectRequestError({
						message: 'Internal server error'
					});
				}
			}
		]);

		// eslint-disable-next-line consistent-return
		this.onMessage = async (message, remoteInfo) => {
			const isIPv4 = remoteInfo.family === 'IPv4';

			const connection = new UDPConnectionContext({
				remoteInfo,

				socket: isIPv4
					? this.udp4Socket
					: this.udp6Socket,
				socketSend: isIPv4
					? this.sendUdp4
					: this.sendUdp6
			});

			try {
				const payload = UDPParser.parseRequest(connection, message);

				const RequestContext = requestContexts[payload.action];

				const context = new RequestContext(connection, payload, {
					source: requestTypes.UDP
				});

				await this.middleware.run(context);
			} catch (error) {
				if (!connection.sent) {
					try {
						await connection.send(
							{
								message: error.message
							},
							{
								action: trackerActions.ERROR
							}
						);
					} catch (responseError) {
						// eslint-disable-next-line no-console
						console.error('Response error:', responseError);
					}
				}

				if (!(error instanceof IncorrectRequestError)) {
					// eslint-disable-next-line no-console
					console.error('Some error:', error);
				}
			}
		};

		// eslint-disable-next-line
		this.onError = error => console.log('Socket error', error);
	}

	/**
	 * Added middleware
	 *
	 * @param {Function} middlewares
	 *
	 * @return {this}
	 */
	use(...middlewares) {
		this.middleware.use(...middlewares);

		return this;
	}

	/**
	 * Starts http listening
	 *
	 * @return {Promise}
	 */
	async listen() {
		if (this.udp4Socket === null) {
			this.udp4Socket = dgram.createSocket({
				type: 'udp4',
				reuseAddr: true
			});
		}

		if (this.udp6Socket === null) {
			this.udp6Socket = dgram.createSocket({
				type: 'udp6',
				reuseAddr: true
			});
		}

		const { udp4Socket, udp6Socket } = this;

		for (const socket of [udp4Socket, udp6Socket]) {
			socket.on('error', this.onError);
			socket.on('message', this.onMessage);
		}

		const listenUdp4 = promisify(udp4Socket.bind).bind(udp4Socket);
		const listenUdp6 = promisify(udp6Socket.bind).bind(udp6Socket);

		this.sendUdp4 = promisify(udp4Socket.send).bind(udp4Socket);
		this.sendUdp6 = promisify(udp6Socket.send).bind(udp6Socket);

		const { port, host } = this.options;

		await Promise.all([
			listenUdp4(port, host),
			listenUdp6(port, host)
		]);

		debug(`listens on port: ${port}, host: ${host}`);
	}
}
