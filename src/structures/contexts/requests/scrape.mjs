import RequestContext from './context';

import { trackerActions } from '../../../utils/constants';

/**
 * Request scrape
 *
 * @see https://wiki.theory.org/index.php/BitTorrentSpecification#Tracker_.27scrape.27_Convention
 */
export default class ScrapeRequestContext extends RequestContext {
	/**
	 * Returns the name of the current action
	 *
	 * @return {string}
	 */
	get action() {
		return trackerActions.SCRAPE;
	}

	/**
	 * Returns 20-byte SHA1 hash of the value of the info key from the metainfo file
	 *
	 * @return {string[]}
	 */
	get infoHashes() {
		return this.payload.info_hash;
	}
}
