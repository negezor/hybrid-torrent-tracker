import { RequestContext } from './context';

import type {
    ConnectionRequestContextSendOptions,
    IConnectionRequestContext,
    IConnectionRequestPayload,
} from '../../interfaces';

import { TrackerAction, inspectCustomData } from '../../constants';
import { copyParams } from '../../helpers';

export class ConnectionRequestContext
    extends RequestContext<IConnectionRequestPayload, ConnectionRequestContextSendOptions>
    implements IConnectionRequestContext
{
    public get action(): TrackerAction.CONNECT {
        return TrackerAction.CONNECT;
    }

    public get connectionId(): bigint {
        return this.payload.connection_id;
    }

    public send(payload: ConnectionRequestContextSendOptions): Promise<void> {
        // @ts-ignore
        return this.connection.send(payload, {
            action: this.action,
        });
    }

    /**
     * Returns the custom data
     */
    public [inspectCustomData](): object {
        return copyParams(this, ['connectionId']);
    }
}
