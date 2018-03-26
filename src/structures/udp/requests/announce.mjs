import Request from './request';
import { IncorrectRequestError } from '../../../errors';

import { fromUInt64, bufferToStringIp } from '../../../utils/helpers';
import {
	udpEventsIds,

	DEFAULT_ANNOUNCE_PEERS,
	MAX_ANNOUNCE_PEERS
} from '../../../utils/constants';

export default class AnnounceRequest extends Request {
	/**
	 * Constructor
	 *
	 * @param {UDPContext} context
	 * @param {Buffer}     message
	 * @param {Object}     options
	 */
	constructor(context, message, options) {
		super(context, message, options);

		/* 20 bytes */
		this.infoHash = message.slice(16, 36).toString('hex');
		/* 20 bytes */
		this.peerId = message.slice(36, 56).toString('hex');

		/* 64 bytes */
		this.downloaded = fromUInt64(message.slice(56, 64));
		/* 64 bytes */
		this.left = fromUInt64(message.slice(64, 72));
		/* 64 bytes */
		this.uploaded = fromUInt64(message.slice(72, 80));

		/* 32 bytes */
		this.event = udpEventsIds[message.readUInt32BE(80)];

		if (!this.event) {
			throw new IncorrectRequestError({
				message: 'Invalid event'
			});
		}

		/* 32 bytes */
		const ip = message.readUInt32BE(84);

		this.ip = ip
			? bufferToStringIp(ip)
			: this.context.remoteInfo.address;

		/* 32 bytes */
		this.key = message.readUInt32BE(88);

		/* 32 bytes */
		this.numwant = Math.min(
			message.readUInt32BE(92) || DEFAULT_ANNOUNCE_PEERS,
			MAX_ANNOUNCE_PEERS
		);

		/* 16 bytes */
		this.port = message.readUInt16BE(96);
	}
}
