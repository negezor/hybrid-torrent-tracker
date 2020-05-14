import { RequestContext } from './context';

import { IScrapeRequestContext, IScrapeRequestPayload, ScrapeRequestContextSendOptions } from '../../interfaces';

import { copyParams } from '../../helpers';
import { TrackerAction, inspectCustomData } from '../../constants';

export class ScrapeRequestContext
	extends RequestContext <
	TrackerAction.SCRAPE,
	IScrapeRequestPayload,
	ScrapeRequestContextSendOptions
	> implements IScrapeRequestContext {
	public get infoHashes(): string[] {
		return this.payload.info_hash;
	}

	public send(payload: ScrapeRequestContextSendOptions): Promise<void> {
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
			'infoHashes'
		]);
	}
}
