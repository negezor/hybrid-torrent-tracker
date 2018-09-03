import createDebug from 'debug';
import Middleware from 'middleware-io';

import { IncorrectRequestError } from '../errors';
import { HTTPParser } from '../structures/parsers';
import {
	HTTPConnectionContext,

	AnnounceRequestContext,
	ScrapeRequestContext
} from '../structures/contexts';

import {
	defaultHTTPServerOptions,

	trackerActions,
	requestTypes
} from '../utils/constants';

const debug = createDebug('hybrid-torrent-tracker:http-server');

const requestContexts = {
	[trackerActions.ANNOUNCE]: AnnounceRequestContext,
	[trackerActions.SCRAPE]: ScrapeRequestContext,
};

export default class HTTPServer {
	/**
	 * Constructor
	 *
	 * @param {Object} options
	 */
	constructor(serverOptions = {}) {
		this.options = { ...defaultHTTPServerOptions, ...serverOptions };

		this.httpServer = this.options.httpServer;

		this.middleware = new Middleware([
			async (context, next) => {
				debug('HTTP request', context);

				await next();

				if (context.isSent()) {
					return;
				}

				const { action, response } = context;

				if (trackerActions.ANNOUNCE === action) {
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
						files: response.files
					});
				}

				throw new IncorrectRequestError({
					message: 'Internal server error'
				});
			}
		]);

		this.onRequest = async (request, response) => {
			const connection = new HTTPConnectionContext({ request, response });

			try {
				const payload = HTTPParser.parseRequest(connection);

				const RequestContext = requestContexts[payload.action];

				const context = new RequestContext(connection, payload, {
					source: requestTypes.HTTP,
					trustProxy: this.options.trustProxy
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
		this.httpServer.on('request', (req, res) => {
			if (res.headersSent) {
				return;
			}

			this.onRequest(req, res);
		});

		const { port, host } = this.options;

		debug(`listens on port: ${port}, host: ${host}`);
	}
}
