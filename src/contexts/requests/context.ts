import { inspectable } from 'inspectable';

import { IRequestContext, RequestPayloadUnion, ConnectionContextUnion } from '../../interfaces';

import { TrackerAction, RequestSource, inspectCustomData } from '../../constants';

export interface IRequestContextOptions {
	connection: ConnectionContextUnion;
	payload: RequestPayloadUnion;
	source: RequestSource;
}

export class RequestContext<
	P extends RequestPayloadUnion = RequestPayloadUnion,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	R extends Record<string, any> = Record<string, any>
> implements IRequestContext {
	public source: RequestSource;

	protected connection!: ConnectionContextUnion;

	protected payload!: P;

	public response: R = {} as R;

	public constructor(options: IRequestContextOptions) {
		this.connection = options.connection;
		this.payload = options.payload as P;
		this.source = options.source;
	}

	// eslint-disable-next-line class-methods-use-this
	public get action(): TrackerAction {
		throw new Error('Property "action" not implemented');
	}

	public get isConnect(): boolean {
		return this.action === TrackerAction.CONNECT;
	}

	public get isAnnounce(): boolean {
		return this.action === TrackerAction.ANNOUNCE;
	}

	public get isScrape(): boolean {
		return this.action === TrackerAction.SCRAPE;
	}

	public get isSourceHTTP(): boolean {
		return this.source === RequestSource.HTTP;
	}

	public get isSourceUDP(): boolean {
		return this.source === RequestSource.UDP;
	}

	public get sent(): boolean {
		return this.connection.sent;
	}

	public get transactionId(): number {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		return this.payload.transaction_id!;
	}

	/**
	 * Returns data for JSON
	 */
	public toJSON(): object {
		return {
			...this[inspectCustomData](),

			action: this.action,
			source: this.source,
			connection: this.connection
		};
	}

	/**
	 * Returns the custom data
	 */
	public [inspectCustomData](): object {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { ...payload } = this;

		return payload;
	}
}

inspectable(RequestContext, {
	serialize: payload => ({
		...payload[inspectCustomData](),

		action: payload.action,
		source: payload.source,
		// @ts-ignore
		connection: payload.connection
	})
});
