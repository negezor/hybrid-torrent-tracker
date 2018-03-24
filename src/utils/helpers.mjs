/* eslint-disable import/prefer-default-export */

/**
 * Delay N-ms
 *
 * @param {number} delayed
 *
 * @return {Promise}
 */
export const delay = delayed => (
	new Promise(resolve => setTimeout(resolve, delayed))
);
