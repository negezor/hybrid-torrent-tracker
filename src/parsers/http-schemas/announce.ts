import { IncorrectRequestError } from '../../errors';
import { AnnouncePeerSimultaneously, AnnounceEvent } from '../../constants';
import { binaryToHex } from '../../helpers';

const allowAnnounceEvents: string[] = [...Object.values(AnnounceEvent)];

export const httpAnnounceSchema = {
	info_hash: (infoHash: string): string => {
		if (typeof infoHash !== 'string' || infoHash.length !== 20) {
			throw new IncorrectRequestError({
				message: 'Invalid info_hash',
				code: 'INVALID_PARAMETER'
			});
		}

		return binaryToHex(infoHash);
	},
	peer_id: (peerId: string): string => {
		if (typeof peerId !== 'string' || peerId.length !== 20) {
			throw new IncorrectRequestError({
				message: 'Invalid peer_id',
				code: 'INVALID_PARAMETER'
			});
		}

		return binaryToHex(peerId);
	},

	port: (rawPort: string): number => {
		const port = Number(rawPort);

		if (Number.isNaN(port) || (port < 0 || port > 65535)) {
			throw new IncorrectRequestError({
				message: 'Invalid port',
				code: 'INVALID_PARAMETER'
			});
		}

		return port;
	},

	uploaded: (rawUploaded: string): bigint => {
		try {
			return BigInt(rawUploaded);
		} catch (error) {
			return 0n;
		}
	},
	downloaded: (rawDownloaded: string): bigint => {
		try {
			return BigInt(rawDownloaded);
		} catch (error) {
			return 0n;
		}
	},
	left: (rawLeft: string): bigint => {
		try {
			return BigInt(rawLeft);
		} catch (error) {
			return 0n;
		}
	},

	compact: (rawCompact: string): number => {
		const compact = Number(rawCompact);

		return !Number.isNaN(compact)
			? compact
			: 0;
	},

	no_peer_id: (rawNoPeerId: string): number => {
		const noPeerId = Number(rawNoPeerId);

		return !Number.isNaN(noPeerId)
			? noPeerId
			: 0;
	},

	event: (rawEvent: AnnounceEvent): AnnounceEvent => (
		allowAnnounceEvents.includes(rawEvent)
			? rawEvent
			: AnnounceEvent.UPDATE
	),

	numwant: (rawNumwant: string): number => {
		const numwant = Number(rawNumwant);

		return !Number.isNaN(numwant)
			? numwant
			: AnnouncePeerSimultaneously.DEFAULT;
	}
};
