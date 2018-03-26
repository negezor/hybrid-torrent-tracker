import createDebug from 'debug';

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

import { toUInt32 } from '../utils/helpers';
import { defaultUDPServerOptions, trackerActions, UDP_PROTOCOL_ID } from '../utils/constants';

const debug = createDebug('hybrid-torrent-tracker:udp-server');

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

		/* Testing */
		this.onMessageParseRequest = (message, remoteInfo) => {
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

			const options = Request.parseMetadata(message, remoteInfo);

			const { action } = options;

			if (trackerActions.CONNECT === action) {
				if (!UDP_PROTOCOL_ID.equals(options.connectionId)) {
					throw new IncorrectRequestError({
						message: 'Received packet with invalid protocol ID'
					});
				}

				return new ConnectionRequest(context, message, options);
			} else if (trackerActions.ANNOUNCE === action) {
				return new AnnounceRequest(context, message, options);
			} else if (trackerActions.SCRAPE === action) {
				return new ScrapeRequest(context, message, options);
			}

			throw new IncorrectRequestError({
				message: `Invalid action in UDP packet: ${action}`
			});
		};

		/* Testing */
		this.onMessage = (message, remoteInfo) => {
			const request = this.onMessageParseRequest(message, remoteInfo);

			debug('UDP request', request);

			const response = (() => {
				switch (request.action) {
				case trackerActions.CONNECT: {
					return ConnectionResponse.toBuffer({
						transactionId: request.transactionId,
						connectionId: request.connectionId
					});
				}

				case trackerActions.ANNOUNCE: {
					return AnnounceResponse.toBuffer({
						transactionId: request.transactionId,
						announceInterval: Math.ceil(10 * 60),
						leechers: 0,
						seeders: 0,
						peers: []
					});
				}

				case trackerActions.SCRAPE: {
					return ScrapeResponse.toBuffer({
						transactionId: request.transactionId,
						torrentStats: []
					});
				}

				case trackerActions.ERROR: {
					return ErrorResponse.toBuffer({
						transactionId: request.transactionId,
						failureReason: 'Unknown'
					});
				}

				default: {
					throw new Error(`Action not implemented: ${request.action}`);
				}
				}
			})();

			request.context.send(response)
				.then(() => debug('Response for UDP', response));
		};

		// eslint-disable-next-line
		this.onError = error => console.log('onError', error);
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
