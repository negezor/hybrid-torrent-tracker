import { RequestContext } from './context';

import { IConnectionRequestContext, IConnectionRequestPayload, ConnectionRequestContextSendOptions } from '../../interfaces';

import { copyParams } from '../../helpers';
import { TrackerAction, inspectCustomData } from '../../constants';

export class ConnectionRequestContext
	extends RequestContext
	implements IConnectionRequestContext {
	// @ts-ignore
	public action = TrackerAction.CONNECT;

	// @ts-ignore
	public response!: ConnectionRequestContextSendOptions = {};

	protected payload!: IConnectionRequestPayload;

	public get connectionId(): bigint {
		return this.payload.connection_id;
	}

	public send(payload: ConnectionRequestContextSendOptions): Promise<void> {
		// @ts-ignore
		return this.connection.send(payload, {
			action: this.action
		});
	}

	/**
	 * Returns the custom data
	 */
	public [inspectCustomData](): object {
		return copyParams(this, [
			'connectionId'
		]);
	}
}
