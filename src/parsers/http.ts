import { encode } from 'bencode';

import {
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

	// eslint-disable-next-line @typescript-eslint/camelcase
	request_string: connection.url
});

export const parseScrapeRequest = (
	connection: IHTTPConnectionContext
): IScrapeRequestPayload => (
	parseBySchema(httpScrapeSchema, getQueryFromURL(connection.url))
);

export const announceResponse = ({
	interval,
	complete,
	incomplete,
	compact = 1,
	peers = []
}: IHTTPAnnounceResponse): Buffer => {
	// @ts-ignore
	const response: {
		complete: number;
		incomplete: number;
		interval: number;
		peers: Buffer | {
			'peer id': string;
			ip: string;
			port: number;
		}[];
		peers6?: Buffer;
	} = {
		complete,
		incomplete,
		interval
	};

	if (compact === 1) {
		response.peers = ipv4PeersToCompact(peers);
		response.peers6 = ipv6PeersToCompact(peers);
	} else if (compact === 0) {
		// @ts-ignore
		response.peers = peers.map((peer): object => ({
			// @ts-ignore
			'peer id': hexToBinary(peer.peerId),
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
		files: Object.assign({}, ...files.map((file): object => ({
			[hexToBinary(file.infoHash)]: {
				complete: file.complete || 0n,
				incomplete: file.incomplete || 0n,
				downloaded: file.downloaded || 0n
			}
		}))),
		flags: {
			// eslint-disable-next-line @typescript-eslint/camelcase
			min_request_interval: interval
		}
	})
);

export const errorResponse = ({
	message
}: IHTTPErrorResponse): Buffer => (
	encode({
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
