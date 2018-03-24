import createDebug from 'debug';

import { defaultTrackerOptions } from './utils/constants';

const debug = createDebug('hybrid-torrent-tracker:tracker');

export default class Tracker {
	/**
	 * Constructor
	 *
	 * @param {Object} options
	 */
	constructor(options = {}) {
		this.options = { ...defaultTrackerOptions, ...options };
	}
}
