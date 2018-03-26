import createDebug from 'debug';
import Middleware from 'middleware-io';

import http from 'http';
import { promisify } from 'util';

import HTTPContext from '../structures/http/context';
import { IncorrectRequestError } from '../errors';
import {
	AnnounceResponse,
	ScrapeResponse,
	ErrorResponse
} from '../structures/http/responses';
import {
	Request,

	AnnounceRequest,
	ScrapeRequest
} from '../structures/http/requests';

import { decodeQueryString } from '../utils/helpers';
import { defaultHTTPServerOptions, trackerActions } from '../utils/constants';

const debug = createDebug('hybrid-torrent-tracker:http-server');

/**
 * Returns request object
 *
 * @param {UDPContext} context
 * @param {Buffer}     message
 *
 * @return {Request}
 */
const getRequest = (context) => {
	const [path, rawQuery] = context.getUrl().split('?');

	const query = decodeQueryString(rawQuery);

	switch (path) {
	case '/announce': {
		return new AnnounceRequest(context, query);
	}

	case '/scrape': {
		return new ScrapeRequest(context, query);
	}

	default: {
		throw new IncorrectRequestError({
			message: 'Invalid action in HTTP'
		});
	}
	}
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
			async (request, next) => {
				debug('HTTP request', request);

				await next();

				if (request.context.sent) {
					return;
				}

				const { context, response, action } = request;

				if (trackerActions.ANNOUNCE === action) {
					await context.send(AnnounceResponse.toString({
						interval: this.options.interval,
						complete: response.complete,
						incomplete: response.incomplete,
						compact: request.compact,
						peers: response.peers
					}));
				} else if (trackerActions.SCRAPE === action) {
					await context.send(ScrapeResponse.toString({
						interval: this.options.interval,
						files: response.files
					}));
				} else {
					throw new IncorrectRequestError({
						message: 'Internal server error'
					});
				}
			}
		]);

		this.onRequest = async (req, res) => {
			const context = new HTTPContext({
				request: req,
				response: res
			});

			try {
				const request = getRequest(context);

				await this.middleware.run(request);
			} catch (error) {
				try {
					await context.send(ErrorResponse.toString({
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
		if (this.httpServer === null) {
			this.httpServer = http.createServer();
		}

		this.httpServer.on('request', (req, res) => {
			if (res.headersSent) {
				return;
			}

			this.onRequest(req, res);
		});

		const { httpServer } = this;
		const { port, host } = this.options;

		const listen = promisify(httpServer.listen).bind(httpServer);

		await listen(port, host);

		debug(`listens on port: ${port}, host: ${host}`);
	}
}
