import { toUInt32 } from './helpers';

/**
 * The ID of the UDP Protocol
 *
 * @type {Buffer}
 */
export const UDP_PROTOCOL_ID = Buffer.concat([toUInt32(0x417), toUInt32(0x27101980)]);

export const DEFAULT_ANNOUNCE_PEERS = 50;
export const MAX_ANNOUNCE_PEERS = 82;

/**
 * Default tracker options
 *
 * @type {Object}
 */
export const defaultTrackerOptions = {
	http: {},
	udp: {}
};

/**
 * Default UDP server options
 *
 * @type {Object}
 */
export const defaultUDPServerOptions = {
	udp4Socket: null,
	udp6Socket: null,

	port: 80,
	host: null
};

/**
 * Default HTTP server options
 *
 * @type {Object}
 */
export const defaultHTTPServerOptions = {
	httpServer: null,

	port: 80,
	host: null
};

/**
 * Action list UDP
 *
 * @type {Object}
 */
export const trackerActions = {
	CONNECT: 0,
	ANNOUNCE: 1,
	SCRAPE: 2,
	ERROR: 3
};

/**
 * Request types
 *
 * @type {Object}
 */
export const requestTypes = {
	HTTP: 'http',
	UDP: 'udp'
};

/**
 * Events list UDP
 *
 * @type {Object}
 */
export const udpEvents = {
	UPDATE: 'update',
	COMPLETED: 'completed',
	STARTED: 'started',
	STOPPED: 'stopped'
};

/**
 * Events ids list UDP
 *
 * @type {Object}
 */
export const udpEventsIds = {
	0: udpEvents.UPDATE,
	1: udpEvents.COMPLETED,
	2: udpEvents.STARTED,
	3: udpEvents.STOPPED
};
