import RequestContext from './context';

import { trackerActions } from '../../../utils/constants';

/**
 * Request connection
 *
 * @see http://www.bittorrent.org/beps/bep_0015.html UDP connections
 */
export default class ConnectionRequestContext extends RequestContext {
	/**
	 * Returns the name of the current action
	 *
	 * @return {string}
	 */
	get action() {
		return trackerActions.CONNECT;
	}
}
