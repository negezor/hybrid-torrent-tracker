import { encode } from 'bencode';

import type {
	IHTTPConnectionContext,

	IAnnounceRequestPayload,
	IScrapeRequestPayload,

	IHTTPAnnounceResponse,
	IHTTPScrapeResponse,
	IHTTPErrorResponse,

	HTTPResponseUnion
} from '../interfaces';
import {
	parseBySchema,
	getQueryFromURL,
	hexToBinary,
	ipv4PeersToCompact,
	ipv6PeersToCompact
} from '../helpers';
import { httpAnnounceSchema, httpScrapeSchema } from './http-schemas';
import { TrackerAction } from '../constants';

export const parseAnnounceRequest = (
	connection: IHTTPConnectionContext
): IAnnounceRequestPayload => ({
	...parseBySchema(httpAnnounceSchema, getQueryFromURL(connection.url)),

	request_string: connection.url,
	passkey: connection.passkey || undefined
});

export const parseScrapeRequest = (
	connection: IHTTPConnectionContext
): IScrapeRequestPayload => (
	{
		...parseBySchema(httpScrapeSchema, getQueryFromURL(connection.url)),

		passkey: connection.passkey || undefined
	}
);

export const announceResponse = ({
	interval,
	complete,
	incomplete,
	compact = 1,
	peers = []
}: IHTTPAnnounceResponse): Buffer => {
	const response = {
		complete,
		incomplete,
		interval
	} as {
		complete: number;
		incomplete: number;
		interval: number;
		peers: Buffer | {
			// eslint-disable-next-line @typescript-eslint/naming-convention
			'peer id': string;
			ip: string;
			port: number;
		}[];
		peers6?: Buffer;
	};

	if (compact === 1) {
		response.peers = ipv4PeersToCompact(peers);
		response.peers6 = ipv6PeersToCompact(peers);
	} else if (compact === 0) {
		response.peers = peers.map((peer): {
			// eslint-disable-next-line @typescript-eslint/naming-convention
			'peer id': string;
			ip: string;
			port: number;
		} => ({
			// eslint-disable-next-line max-len
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/naming-convention
			// biome-ignore lint/style/noNonNullAssertion: in this case peer id should exist
			'peer id': hexToBinary(peer.peerId!),
			ip: peer.ip,
			port: peer.port
		}));
	}

	return encode(response);
};

export const scrapeResponse = ({
	interval,
	files = []
}: IHTTPScrapeResponse): Buffer => (
	encode({
		files: Object.assign({}, ...files.map((file): Record<string, Record<string, bigint>> => ({
			[hexToBinary(file.infoHash)]: {
				complete: file.complete || 0n,
				incomplete: file.incomplete || 0n,
				downloaded: file.downloaded || 0n
			}
		}))),
		flags: {
			min_request_interval: interval
		}
	})
);

export const errorResponse = ({
	message
}: IHTTPErrorResponse): Buffer => (
	encode({
		// eslint-disable-next-line @typescript-eslint/naming-convention
		'failure reason': message
	})
);

export const toBufferResponse = (
	payload: HTTPResponseUnion,
	action: TrackerAction
): Buffer => {
	if (action === TrackerAction.ANNOUNCE) {
		return announceResponse(payload as IHTTPAnnounceResponse);
	}

	if (action === TrackerAction.SCRAPE) {
		return scrapeResponse(payload as IHTTPScrapeResponse);
	}

	if (action === TrackerAction.ERROR) {
		return errorResponse(payload as IHTTPErrorResponse);
	}

	throw new TypeError(`Unknown action "${action}"`);
};
