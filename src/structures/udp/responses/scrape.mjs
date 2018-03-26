import Response from './response';

import { toUInt32 } from '../../../utils/helpers';
import { trackerActions } from '../../../utils/constants';

const SCRAPE_ACTION = toUInt32(trackerActions.SCRAPE);

export default class ScrapeResponse extends Response {
	/**
	 * Returns the buffer for the response
	 *
	 * @param {Object} params
	 *
	 * @return {Buffer}
	 */
	static toBuffer({
		transactionId,
		files = []
	}) {
		return Buffer.concat([
			SCRAPE_ACTION,

			toUInt32(transactionId),

			...[].concat(...files.map(torrent => [
				toUInt32(torrent.complete),
				toUInt32(torrent.downloaded),
				toUInt32(torrent.incomplete)
			]))
		]);
	}
}
