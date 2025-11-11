import { inspectCustomData, TrackerAction } from '../../constants';
import { copyParams } from '../../helpers';
import type {
    ConnectionRequestContextSendOptions,
    IConnectionRequestContext,
    IConnectionRequestPayload,
} from '../../interfaces';
import { RequestContext } from './context';

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
        // @ts-expect-error
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
