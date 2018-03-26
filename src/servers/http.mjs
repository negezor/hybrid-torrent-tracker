import createDebug from 'debug';

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

export default class HTTPServer {
	/**
	 * Constructor
	 *
	 * @param {Object} options
	 */
	constructor(serverOptions = {}) {
		this.options = { ...defaultHTTPServerOptions, ...serverOptions };

		this.httpServer = this.options.httpServer;

		this.onRequestParse = (request, response) => {
			const context = new HTTPContext({
				request,
				response
			});

			const [path, rawQuery] = context.getUrl().split('?');

			const query = decodeQueryString(rawQuery);

			if (path === '/announce') {
				return new AnnounceRequest(context, query);
			} else if (path === '/scrape') {
				return new ScrapeRequest(context, query);
			}

			throw new IncorrectRequestError({
				message: 'Invalid action in HTTP'
			});
		};

		this.onRequest = (req, res) => {
			if (req.url.startsWith('/favicon.ico')) {
				return;
			}

			const request = this.onRequestParse(req, res);

			debug('HTTP Request', request);

			const response = (() => {
				switch (request.action) {
				case trackerActions.ANNOUNCE: {
					return AnnounceResponse.toString({
						interval: 600,
						complete: 0,
						incomplete: 0,
						peers: []
					});
				}

				case trackerActions.SCRAPE: {
					return ScrapeResponse.toString({
						interval: 600
					});
				}

				default:
					throw new Error(`Action not implemented: ${request.action}`);
				}
			})();

			request.context.send(response)
				.then(() => debug('Response for UDP', response));
		};
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
