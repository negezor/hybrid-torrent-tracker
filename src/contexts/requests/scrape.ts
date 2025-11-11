import { inspectCustomData, TrackerAction } from '../../constants';
import { copyParams } from '../../helpers';
import type { IScrapeRequestContext, IScrapeRequestPayload, ScrapeRequestContextSendOptions } from '../../interfaces';
import { RequestContext } from './context';

export class ScrapeRequestContext
    extends RequestContext<IScrapeRequestPayload, ScrapeRequestContextSendOptions>
    implements IScrapeRequestContext
{
    public get action(): TrackerAction.SCRAPE {
        return TrackerAction.SCRAPE;
    }

    public get infoHashes(): string[] {
        return this.payload.info_hash;
    }

    public get passkey(): string | undefined {
        return this.payload.passkey;
    }

    public send(payload: ScrapeRequestContextSendOptions): Promise<void> {
        // @ts-expect-error
        return this.connection.send(payload, {
            action: this.action,
        });
    }

    /**
     * Returns the custom data
     */
    public [inspectCustomData](): object {
        return copyParams(this, ['infoHashes', 'passkey']);
    }
}
