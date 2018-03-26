import createDebug from 'debug';
import Middleware from 'middleware-io';

import dgram from 'dgram';
import { promisify } from 'util';

import UDPContext from '../structures/udp/context';
import { IncorrectRequestError } from '../errors';
import {
	Request,

	ConnectionRequest,
	AnnounceRequest,
	ScrapeRequest
} from '../structures/udp/requests';
import {
	ConnectionResponse,
	AnnounceResponse,
	ScrapeResponse,
	ErrorResponse
} from '../structures/udp/responses';

import { defaultUDPServerOptions, trackerActions, UDP_PROTOCOL_ID } from '../utils/constants';

const debug = createDebug('hybrid-torrent-tracker:udp-server');

/**
 * Returns request object
 *
 * @param {UDPContext} context
 * @param {Buffer}     message
 * @param {Object}     remoteInfo
 *
 * @return {Request}
 */
const getRequest = (context, message, remoteInfo) => {
	const options = Request.parseMetadata(message, remoteInfo);

	const { action } = options;

	switch (action) {
	case trackerActions.CONNECT: {
		if (!UDP_PROTOCOL_ID.equals(options.connectionId)) {
			throw new IncorrectRequestError({
				message: 'Received packet with invalid protocol ID'
			});
		}

		return new ConnectionRequest(context, message, options);
	}

	case trackerActions.ANNOUNCE: {
		return new AnnounceRequest(context, message, options);
	}

	case trackerActions.SCRAPE: {
		return new ScrapeRequest(context, message, options);
	}

	default: {
		throw new IncorrectRequestError({
			message: `Invalid action in UDP packet: ${action}`
		});
	}
	}
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
			async (request, next) => {
				debug('UDP request', request);

				await next();

				if (request.context.sent) {
					return;
				}

				const {
					context,
					response,
					action,
					transactionId
				} = request;

				if (trackerActions.CONNECT === action) {
					await context.send(ConnectionResponse.toBuffer({
						connectionId: request.connectionId,
						transactionId
					}));
				} else if (trackerActions.ANNOUNCE === action) {
					await context.send(AnnounceResponse.toBuffer({
						interval: this.options.interval,
						incomplete: response.incomplete,
						complete: response.complete,
						peers: response.peers,
						transactionId
					}));
				} else if (trackerActions.SCRAPE === action) {
					await context.send(ScrapeResponse.toBuffer({
						files: response.files,
						transactionId
					}));
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

			const context = new UDPContext({
				remoteInfo,

				socket: isIPv4
					? this.udp4Socket
					: this.udp6Socket,
				socketSend: isIPv4
					? this.sendUdp4
					: this.sendUdp6
			});

			try {
				const request = getRequest(context, message);

				await this.middleware.run(request);
			} catch (error) {
				try {
					await context.send(ErrorResponse.toBuffer({
						message: error.message
					}));
				} catch (responseError) {
					// eslint-disable-next-line no-console
					console.error('Response error:', responseError);
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
	 * @param {Function} handler
	 *
	 * @return {this}
	 */
	use(middleware) {
		this.middleware.use(middleware);

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
