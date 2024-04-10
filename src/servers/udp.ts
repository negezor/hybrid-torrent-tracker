import createDebug from 'debug';
import { type Middleware, compose, noopNext } from 'middleware-io';

import { promisify } from 'node:util';
import { type BindOptions, type Socket, createSocket } from 'node:dgram';

// eslint-disable-next-line import/named
import { UDPParser } from '../parsers';
import {
	UDPConnectionContext,
	ConnectionRequestContext,
	AnnounceRequestContext,
	ScrapeRequestContext,
	type RequestContext
} from '../contexts';

import { RequestSource, TrackerAction } from '../constants';
import { IncorrectRequestError } from '../errors';
import type { IUDPRequestHeaders } from '../parsers/udp';
import type { IUDPAnnounceResponse, IUDPScrapeResponse } from '../interfaces';

const debug = createDebug('hybrid-torrent-tracker:udp-server');

export interface IUDPServerOptions {
	port: number;
	host: string;
	interval?: number;
}

export class UDPServer {
	protected options: Required<IUDPServerOptions>;

	protected udp4Socket: Socket;

	protected udp6Socket: Socket;

	protected stack: Middleware<RequestContext>[] = [];

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	protected chain: Middleware<RequestContext> = (): void => {};

	public constructor(options: IUDPServerOptions) {
		this.options = {
			// 2 min
			interval: 120,

			...options
		};

		this.udp4Socket = createSocket({
			type: 'udp4',
			reuseAddr: true
		});

		this.udp6Socket = createSocket({
			type: 'udp6',
			reuseAddr: true
		});

		const handleRequest = async ({
			action,
			connection,
			message,
			headers
		}: {
			action: TrackerAction;
			connection: UDPConnectionContext;
			message: Buffer;
			headers: IUDPRequestHeaders;
		}): Promise<void> => {
			try {
				let context: RequestContext;
				if (action === TrackerAction.CONNECT) {
					context = new ConnectionRequestContext({
						connection,

						payload: UDPParser.parseConnectionRequest(
							message,
							headers
						),
						source: RequestSource.UDP
					});
				} else if (action === TrackerAction.ANNOUNCE) {
					context = new AnnounceRequestContext({
						connection,

						payload: UDPParser.parseAnnounceRequest(
							message,
							headers
						),
						source: RequestSource.UDP
					});
				} else if (action === TrackerAction.SCRAPE) {
					context = new ScrapeRequestContext({
						connection,

						payload: UDPParser.parseScrapeRequest(
							message,
							headers
						),
						source: RequestSource.UDP
					});
				} else {
					throw new IncorrectRequestError({
						message: 'Invalid action',
						code: 'INVALID_REQUEST'
					});
				}

				await this.chain(context, noopNext);

				if (context.sent) {
					return;
				}

				const { transactionId } = context;

				if (context instanceof ConnectionRequestContext) {
					// const response = context.response as IUDPConnectionResponse;

					await context.send({
						transactionId,

						connectionId: context.connectionId
					});

					return;
				}

				if (context instanceof AnnounceRequestContext) {
					const response = context.response as IUDPAnnounceResponse;

					await context.send({
						transactionId,

						incomplete: response.incomplete,
						complete: response.complete,
						interval: this.options.interval,
						peers: response.peers
					});

					return;
				}

				if (context instanceof ScrapeRequestContext) {
					const response = context.response as IUDPScrapeResponse;

					await context.send({
						transactionId,

						files: response.files
					});

					return;
				}

				throw new IncorrectRequestError({
					message: 'Internal server error',
					code: 'INTERNAL_SERVER_ERROR'
				});
			} catch (contextError) {
				if (!connection.sent) {
					try {
						await connection.send(
							{
								transactionId: headers.transaction_id,
								message: (contextError as Error).message
							},
							{
								action: TrackerAction.ERROR
							}
						);
					} catch (responseError) {
						// eslint-disable-next-line no-console
						console.error('Response error:', responseError);
					}
				}

				if (!(contextError instanceof IncorrectRequestError)) {
					// eslint-disable-next-line no-console
					console.error('Some error:', contextError);
				}
			}
		};

		for (const socket of [this.udp4Socket, this.udp6Socket]) {
			socket.on('error', (error): void => {
				// eslint-disable-next-line no-console
				console.log('Socket error', error);
			});

			// eslint-disable-next-line no-loop-func
			socket.on('message', async (message, remoteInfo): Promise<void> => {
				const connection = new UDPConnectionContext({
					remoteInfo,
					socket
				});

				try {
					const headers = UDPParser.parseRequestHeaders(message);

					const { action } = headers;

					await handleRequest({
						action,
						connection,
						message,
						headers
					});
				} catch (error) {
					await connection.send(
						{
							transactionId: 0,
							message: 'Bad request'
						},
						{
							action: TrackerAction.ERROR
						}
					);
				}
			});
		}
	}

	/**
	 * Added middleware
	 */
	public use(middlewares: Middleware<RequestContext>[]): this {
		this.stack.push(...middlewares);

		this.chain = compose(this.stack);

		return this;
	}

	/**
	 * Starts UDP listening
	 */
	public async listen(): Promise<void> {
		const { port, host: address } = this.options;

		const sockets = [
			this.udp4Socket
			// this.udp6Socket
		];

		await Promise.all(sockets.map(socket => (
			promisify<BindOptions>(socket.bind).call(socket, { address, port })
		)));

		debug(`listens on port: ${port}, host: ${address}`);
	}
}
