import Request from './request';
import { IncorrectRequestError } from '../../../errors';

const INFO_HASH_BYTES = 20;

export default class ScrapeRequest extends Request {
	/**
	 * Constructor
	 *
	 * @param {Buffer} message
	 * @param {Object} options
	 */
	constructor(message, options) {
		super(message, options);

		if ((message.length - 16) % INFO_HASH_BYTES !== 0) {
			throw new IncorrectRequestError({
				message: 'invalid scrape message'
			});
		}

		const infoHashes = [];

		const length = (message.length - 16) / INFO_HASH_BYTES;

		for (let i = 0; i < length; i += 1) {
			const bytesOffset = i * INFO_HASH_BYTES;

			const infoHash = message.slice(16 + bytesOffset, 36 + bytesOffset).toString('hex');

			infoHashes.push(infoHash);
		}

		this.infoHashes = infoHashes;
	}
}
