import { IncorrectRequestError } from '../../../errors';

import { requestTypes, REMOVE_IPV4_MAPPED_IPV6_REGEX } from '../../../utils/constants';

export default class Request {
	/**
	 * Constructor
	 *
	 * @param {HTTPContext} context
	 * @param {Object}      query
	 */
	constructor(context, query) {
		this.context = context;

		this.type = requestTypes.HTTP;

		this.response = {};
	}
}
