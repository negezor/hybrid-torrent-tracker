import { RequestContext } from './context';

import { IConnectionRequestContext, IConnectionRequestPayload, ConnectionRequestContextSendOptions } from '../../interfaces';

import { copyParams } from '../../helpers';
import { TrackerAction, inspectCustomData } from '../../constants';

export class ConnectionRequestContext
	extends RequestContext <
	IConnectionRequestPayload,
	ConnectionRequestContextSendOptions
	> implements IConnectionRequestContext {
	// eslint-disable-next-line class-methods-use-this
	public get action(): TrackerAction.CONNECT {
		return TrackerAction.CONNECT;
	}

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
