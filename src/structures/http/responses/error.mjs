import { encode } from 'bencode';

import Response from './response';

export default class ErrorResponse extends Response {
	/**
	 * Returns the string for the response
	 *
	 * @param {Object} params
	 *
	 * @return {string}
	 */
	static toString({ message }) {
		return encode({
			'failure reason': message
		});
	}
}
