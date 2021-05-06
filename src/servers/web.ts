import { App, TemplatedApp } from 'uWebSockets.js';
import { Middleware, compose, noopNext } from 'middleware-io';

// eslint-disable-next-line import/named
import { HTTPParser } from '../parsers';
import { RequestSource, TrackerAction } from '../constants';
import {
	HTTPConnectionContext,
	ScrapeRequestContext,
	AnnounceRequestContext,
	RequestContext
} from '../contexts';
import { IncorrectRequestError } from '../errors';
import { IHTTPAnnounceResponse, IHTTPScrapeResponse } from '../interfaces';

export interface IWebServerOptions {
	host: string;
	port: number;
	interval?: number;
	trustProxy?: boolean;
}

export class WebServer {
	protected options: Required<IWebServerOptions>;

	protected app: TemplatedApp;

	protected stack: Middleware<RequestContext>[] = [];

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	protected chain: Middleware<RequestContext> = (): void => {};

	public constructor(options: IWebServerOptions) {
		this.options = {
			trustProxy: false,
			// 2 min
			interval: 120,

			...options
		};

		this.app = App();

		const handleRequest = async (
			action: TrackerAction,
			connection: HTTPConnectionContext
		): Promise<void> => {
			try {
				const context = action === TrackerAction.ANNOUNCE
					? new AnnounceRequestContext({
						connection,

						payload: HTTPParser.parseAnnounceRequest(connection),
						source: RequestSource.HTTP
					})
					: new ScrapeRequestContext({
						connection,

						payload: HTTPParser.parseScrapeRequest(connection),
						source: RequestSource.HTTP
					});

				await this.chain(context, noopNext);

				if (context.sent) {
					return;
				}

				if (context instanceof AnnounceRequestContext) {
					const response = context.response as IHTTPAnnounceResponse;

					await context.send({
						incomplete: response.incomplete,
						complete: response.complete,
						interval: this.options.interval,
						peers: response.peers,
						compact: context.compact
					});

					return;
				}

				if (context instanceof ScrapeRequestContext) {
					const response = context.response as IHTTPScrapeResponse;

					await context.send({
						files: response.files,
						interval: this.options.interval
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
								message: contextError.message
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

		this.app
			.get('/announce', (response, request): void => {
				const connection = new HTTPConnectionContext({
					request,
					response,

					trustProxy: this.options.trustProxy
				});

				handleRequest(TrackerAction.ANNOUNCE, connection);
			})
			.get('/:passkey/announce', (response, request): void => {
				const connection = new HTTPConnectionContext({
					request,
					response,

					trustProxy: this.options.trustProxy
				});

				handleRequest(TrackerAction.ANNOUNCE, connection);
			})
			.get('/:passkey/scrape', (response, request): void => {
				const connection = new HTTPConnectionContext({
					request,
					response,

					trustProxy: this.options.trustProxy
				});

				handleRequest(TrackerAction.SCRAPE, connection);
			})
			.get('/scrape', (response, request): void => {
				const connection = new HTTPConnectionContext({
					request,
					response,

					trustProxy: this.options.trustProxy
				});

				handleRequest(TrackerAction.SCRAPE, connection);
			});
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
	 * Starts HTTP listening
	 */
	public listen(): Promise<void> {
		return new Promise((resolve, reject): void => {
			this.app.listen(this.options.host, this.options.port, (listenSocket): void => {
				if (listenSocket) {
					resolve();

					return;
				}

				reject(new Error('Failed to start http server'));
			});
		});
	}
}
