import { encode } from 'bencode';

import Response from './response';

import { hexToBinary } from '../../../utils/helpers';

export default class ScrapeResponse extends Response {
	/**
	 * Returns the string for the response
	 *
	 * @param {Object} params
	 *
	 * @return {string}
	 */
	static toString({
		interval,
		files = []
	}) {
		const response = {
			files: {},
			flags: {
				min_request_interval: interval
			}
		};

		Object.assign(response.files, ...files.map(file => ({
			[hexToBinary(file.infoHash)]: {
				complete: file.complete || 0,
				incomplete: file.incomplete || 0,
				downloaded: file.downloaded || 0
			}
		})));

		return encode(response);
	}
}
