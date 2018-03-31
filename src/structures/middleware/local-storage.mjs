import { IncorrectRequestError } from '../../servers';

import { announceEvents } from '../../utils/constants';

/**
 * Creates a local tracker with ram cache
 *
 * @param {Object} options
 *
 * @return {Function}
 */
export default (options = {}) => {
	const { torrents = new Map() } = options;

	return async (context, next) => {
		if (context.isScrape) {
			let { infoHashes } = context;
			if (infoHashes.length === 0) {
				infoHashes = [...torrents.keys()];
			}

			context.response.files = infoHashes.map((infoHash) => {
				if (!torrents.has(infoHash)) {
					return { infoHash };
				}

				const info = torrents.get(infoHash);

				return {
					infoHash,

					complete: info.complete,
					incomplete: info.incomplete,
					downloaded: info.complete
				};
			});
		} else if (context.isAnnounce) {
			if (!context.isAnnounce) {
				await next();

				return;
			}

			const { infoHash, peerId, event } = context;

			if (!torrents.has(infoHash)) {
				torrents.set(infoHash, {
					complete: 0,
					incomplete: 0,

					peers: new Map()
				});
			}

			const torrent = torrents.get(infoHash);

			const { peers } = torrent;

			const hasPeer = peers.has(peerId);
			const peer = peers.get(peerId);

			if (!hasPeer && [announceEvents.UPDATE, announceEvents.STARTED].includes(event)) {
				if (context.left === 0) {
					torrent.complete += 1;
				} else {
					torrent.incomplete += 1;
				}

				peers.set(peerId, {
					type: context.type,
					complete: context.left === 0,

					ip: context.ip,
					port: context.port
				});
			} else if (!peer.complete && event === announceEvents.COMPLETED) {
				torrent.complete += 1;
				torrent.incomplete -= 1;

				peer.complete = true;
			} else if ([announceEvents.UPDATE, announceEvents.STOPPED].includes(event)) {
				if (peer.complete) {
					torrent.complete -= 1;
				} else {
					torrent.incomplete -= 1;
				}

				if (event === announceEvents.STOPPED) {
					peers.delete(peerId);
				}
			} else {
				throw new IncorrectRequestError({
					message: 'Invalid event'
				});
			}

			Object.assign(context.response, {
				complete: torrent.complete,
				incomplete: torrent.incomplete,

				/* TODO: Make random */
				peers: [...peers.entries()].map(([peerClientId, info]) => ({
					peerId: peerClientId,

					ip: info.ip,
					port: info.port
				}))
			});
		}

		await next();
	};
};
