import { inspectable } from 'inspectable';
import type { HttpRequest, HttpResponse } from 'uWebSockets.js';

import { STATUS_CODES } from 'node:http';

import { TrackerError } from '../../errors';
import type { IHTTPConnectionContext, HTTPResponseUnion } from '../../interfaces';

import { ConnectionContext } from './context';
// eslint-disable-next-line import/named
import { HTTPParser } from '../../parsers';
import type { TrackerAction } from '../../constants';

export interface IHTTPConnectionContextOptions {
	request: HttpRequest;
	response: HttpResponse;

	trustProxy: boolean;
}

export class HTTPConnectionContext
	extends ConnectionContext
	implements IHTTPConnectionContext {
	public aborted = false;

	protected request: HttpRequest;

	protected response: HttpResponse;

	protected trustProxy: boolean;

	public constructor(options: IHTTPConnectionContextOptions) {
		super();

		this.request = options.request;
		this.response = options.response;

		this.trustProxy = options.trustProxy;

		this.response.onAborted((): void => {
			this.aborted = true;
		});
	}

	public get ip(): string {
		const xForwardedFor = this.request.getHeader('x-forwarded-for');

		if (this.trustProxy && xForwardedFor) {
			return xForwardedFor;
		}

		return (new Uint8Array(this.response.getRemoteAddress())).join('.');
	}

	public get url(): string {
		return `${this.request.getUrl()}?${this.request.getQuery()}`;
	}

	public get passkey(): string | undefined {
		return this.request.getParameter(0);
	}

	public send(
		payload: HTTPResponseUnion,
		options: {
			action: TrackerAction;
			statusCode?: number;
		}
	): Promise<void> {
		return new Promise((resolve, reject): void => {
			if (this.sent) {
				reject(new TrackerError({
					message: 'Response already sent',
					code: 'RESPONSE_ALREADY_SENT'
				}));

				return;
			}

			const message = HTTPParser.toBufferResponse(payload, options.action);

			const { statusCode = 200 } = options;

			this.response.writeStatus(`${statusCode} ${STATUS_CODES[statusCode]}`);
			this.response.end(message);

			this.sent = true;

			resolve();
		});
	}
}

inspectable(HTTPConnectionContext, {
	serialize: ({ sent, ip, url }) => ({
		sent,
		ip,
		url
	})
});
