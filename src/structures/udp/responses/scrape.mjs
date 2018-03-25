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
		torrentStats = []
	}) {
		return Buffer.concat([
			SCRAPE_ACTION,

			toUInt32(transactionId),

			...[].concat(...torrentStats.map(torrent => [
				toUInt32(torrent.seeders),
				toUInt32(torrent.downloaded),
				toUInt32(torrent.leechers)
			]))
		]);
	}
}
