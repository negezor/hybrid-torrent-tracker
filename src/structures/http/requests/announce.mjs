import Request from './request';
import { IncorrectRequestError } from '../../../errors';

import {
	trackerActions,
	announceEvents,

	IPV6_REGEX,

	DEFAULT_ANNOUNCE_PEERS,
	MAX_ANNOUNCE_PEERS
} from '../../../utils/constants';

export default class AnnounceRequest extends Request {
	/**
	 * Constructor
	 *
	 * @param {HTTPContext} context
	 * @param {Object}      query
	 */
	constructor(context, query) {
		super(context, query);

		this.action = trackerActions.ANNOUNCE;

		const infoHash = query.info_hash;

		if (typeof infoHash !== 'string' || infoHash.length !== 20) {
			throw new IncorrectRequestError({
				message: 'Invalid info_hash'
			});
		}

		this.infoHash = infoHash;

		const peerId = query.peer_id;

		if (typeof peerId !== 'string' || peerId.length !== 20) {
			throw new IncorrectRequestError({
				message: 'Invalid peer_id'
			});
		}

		this.peerId = peerId;

		const port = Number(query.port);

		if (Number.isNaN(port)) {
			throw new IncorrectRequestError({
				message: 'Invalid port'
			});
		}

		this.port = port;

		let left = Number(query.left);

		if (Number.isNaN(left)) {
			left = Infinity;
		}

		this.left = left;

		let event = announceEvents[query.event];

		if (!event) {
			event = announceEvents.UPDATE;
		}

		this.event = event;

		let compact = Number(query.compact);

		if (Number.isNaN(compact)) {
			compact = 0;
		}

		this.compact = compact;

		let numwant = Number(query.numwant);

		if (Number.isNaN(numwant)) {
			numwant = DEFAULT_ANNOUNCE_PEERS;
		}

		this.numwant = Math.min(numwant, MAX_ANNOUNCE_PEERS);

		this.ip = this.context.getIp();
		this.addres = IPV6_REGEX.test(this.ip)
			? `[${this.ip}]`
			: `${this.ip}:${this.port}`;
	}
}
