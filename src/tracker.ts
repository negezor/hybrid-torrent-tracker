import type { Middleware } from 'middleware-io';

import type { AnnounceRequestContext, ConnectionRequestContext, ScrapeRequestContext } from './contexts';
import { UDPServer, WebServer } from './servers';
import type { IUDPServerOptions } from './servers/udp';
import type { IWebServerOptions } from './servers/web';

type TorrentTrackerMiddleware = Middleware<ConnectionRequestContext | ScrapeRequestContext | AnnounceRequestContext>;

export type ServerOptions<K, T> = {
    kind: K;
} & T;

export interface ITorrentTrackerOptions {
    servers: (ServerOptions<'udp', IUDPServerOptions> | ServerOptions<'web', IWebServerOptions>)[];
}

export class TorrentTracker {
    protected servers: (UDPServer | WebServer)[] = [];

    protected stack: TorrentTrackerMiddleware[] = [];

    public constructor(options: ITorrentTrackerOptions) {
        for (const { kind, ...serverOptions } of options.servers) {
            if (kind === 'udp') {
                this.servers.push(new UDPServer(serverOptions));

                continue;
            }

            if (kind === 'web') {
                this.servers.push(new WebServer(serverOptions));

                continue;
            }

            throw new Error('Unsupported torrent server');
        }
    }

    public use(middleware: TorrentTrackerMiddleware): this {
        this.stack.push(middleware);

        return this;
    }

    public async listen(): Promise<void> {
        await Promise.all(
            this.servers.map((server): Promise<void> => {
                // @ts-ignore
                server.use(this.stack);

                return server.listen();
            }),
        );
    }
}
