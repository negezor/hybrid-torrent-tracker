import { RequestContext } from './context';

import type {
    AnnounceRequestContextSendOptions,
    IAnnounceRequestContext,
    IAnnounceRequestPayload,
} from '../../interfaces';

import { AnnounceEvent, AnnouncePeerSimultaneously, TrackerAction, inspectCustomData } from '../../constants';
import { copyParams } from '../../helpers';

export class AnnounceRequestContext
    extends RequestContext<IAnnounceRequestPayload, AnnounceRequestContextSendOptions>
    implements IAnnounceRequestContext
{
    public get action(): TrackerAction.ANNOUNCE {
        return TrackerAction.ANNOUNCE;
    }

    public get isCompact(): boolean {
        return this.compact === 1;
    }

    public get infoHash(): string {
        return this.payload.info_hash;
    }

    public get peerId(): string {
        return this.payload.peer_id;
    }

    public get port(): number {
        // @ts-ignore
        return this.payload.port || this.connection.port;
    }

    public get uploaded(): bigint {
        const { uploaded } = this.payload;

        return uploaded < 0 ? -uploaded : uploaded;
    }

    public get downloaded(): bigint {
        const { downloaded } = this.payload;

        return downloaded < 0 ? -downloaded : downloaded;
    }

    public get left(): bigint {
        const { left } = this.payload;

        return left < 0 ? -left : left;
    }

    public get compact(): number {
        return this.payload.compact || 0;
    }

    public get noPeerId(): number {
        return !this.isCompact ? this.payload.no_peer_id : 0;
    }

    public get event(): AnnounceEvent {
        return this.payload.event || AnnounceEvent.UPDATE;
    }

    public get ip(): string {
        // @ts-ignore
        return this.payload.ip || this.connection.ip;
    }

    public get numwant(): number {
        return Math.min(this.payload.numwant || AnnouncePeerSimultaneously.DEFAULT, AnnouncePeerSimultaneously.MAX);
    }

    public get key(): string | number | undefined {
        return this.payload.key;
    }

    public get trackerId(): string | number | undefined {
        return this.payload.trackerid;
    }

    public get addres(): string {
        return `${this.ip}:${this.port}`;
    }

    public get requestPath(): string | undefined {
        return this.payload.request_string;
    }

    public get passkey(): string | undefined {
        return this.payload.passkey;
    }

    public send(payload: AnnounceRequestContextSendOptions): Promise<void> {
        // @ts-ignore
        return this.connection.send(payload, {
            action: this.action,
        });
    }

    /**
     * Returns the custom data
     */
    public [inspectCustomData](): object {
        return copyParams(this, [
            'event',
            'infoHash',
            'peerId',
            'ip',
            'port',
            'uploaded',
            'downloaded',
            'left',
            'compact',
            'noPeerId',
            'numwant',
            'key',
            'trackerId',
            'requestPath',
            'passkey',
            'isCompact',
        ]);
    }
}
