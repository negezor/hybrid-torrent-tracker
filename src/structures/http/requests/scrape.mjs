import Request from './request';
import { IncorrectRequestError } from '../../../errors';

import { binaryToHex } from '../../../utils/helpers';
import { trackerActions } from '../../../utils/constants';

export default class ScrapeRequest extends Request {
	/**
	 * Constructor
	 *
	 * @param {HTTPContext} context
	 * @param {Object}      query
	 */
	constructor(context, query) {
		super(context, query);

		this.action = trackerActions.SCRAPE;

		let infoHashes = query.info_hash;

		if (!infoHashes) {
			this.infoHashes = [];

			return;
		}

		if (!Array.isArray(infoHashes)) {
			infoHashes = [infoHashes];
		}

		this.infoHashes = infoHashes.map((binaryInfoHash) => {
			if (typeof binaryInfoHash !== 'string' || binaryInfoHash.length !== 20) {
				throw new IncorrectRequestError({
					message: 'Invalid info_hash'
				});
			}

			return binaryToHex(binaryInfoHash);
		});
	}
}
