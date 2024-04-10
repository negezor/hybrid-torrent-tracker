import { inspectable } from 'inspectable';

import type { RemoteInfo, Socket } from 'node:dgram';

import type { IUDPConnectionContext, UDPResponseUnion } from '../../interfaces';

import type { TrackerAction } from '../../constants';
import { UDPParser } from '../../parsers';
import { ConnectionContext } from './context';

export interface IUDPConnectionContextOptions {
    socket: Socket;
    remoteInfo: RemoteInfo;
}

export class UDPConnectionContext extends ConnectionContext implements IUDPConnectionContext {
    protected socket: Socket;

    protected remoteInfo: RemoteInfo;

    public constructor(options: IUDPConnectionContextOptions) {
        super();

        this.socket = options.socket;
        this.remoteInfo = options.remoteInfo;
    }

    public get ip(): string {
        return this.remoteInfo.address;
    }

    public get port(): number {
        return this.remoteInfo.port;
    }

    public send(
        payload: UDPResponseUnion,
        options: {
            action: TrackerAction;
        },
    ): Promise<void> {
        return new Promise((resolve, reject): void => {
            const message = UDPParser.toBufferResponse(payload, options.action);

            this.socket.send(message, 0, message.length, this.port, this.ip, (error): void => {
                if (error) {
                    reject(error);

                    return;
                }

                this.sent = true;

                resolve();
            });
        });
    }
}

inspectable(UDPConnectionContext, {
    serialize: ({ sent, ip, port }) => ({
        sent,
        ip,
        port,
    }),
});
