import { RequestContext } from './context';

import { IConnectionRequestContext, IConnectionRequestPayload, ConnectionRequestContextSendOptions } from '../../interfaces';

import { copyParams } from '../../helpers';
import { TrackerAction, inspectCustomData } from '../../constants';

export class ConnectionRequestContext
	extends RequestContext <
	TrackerAction.CONNECT,
	IConnectionRequestPayload,
	ConnectionRequestContextSendOptions
	> implements IConnectionRequestContext {
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
