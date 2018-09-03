/* eslint-disable */
import { IncorrectRequestError } from '../../errors';

import { trackerActions, announceEvents } from '../../utils/constants';

/**
 * Creates an interface for the middleware
 *
 * @param {Object} options
 *
 * @return {Function}
 */
export default (options) => {
	const test = 1;

	return async (request, next) => {
		throw new IncorrectRequestError({
			message: 'Invalid event'
		});
	};
};
