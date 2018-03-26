import { toUInt32 } from './helpers';

/**
 * The protocol ID of the UDP
 *
 * @type {Buffer}
 */
export const UDP_PROTOCOL_ID = Buffer.concat([toUInt32(0x417), toUInt32(0x27101980)]);

/**
 * The default value is the number of peers
 *
 * @type {number}
 */
export const DEFAULT_ANNOUNCE_PEERS = 50;

/**
 * The max value is the number of peers
 *
 * @type {number}
 */
export const MAX_ANNOUNCE_PEERS = 82;

/**
 * The regular expression checks a string for IPv4
 *
 * @type {RegExp}
 */
export const IPV4_REGEX = /^[\d.]+$/;

/**
 * The regular expression checks a string for IPv6
 *
 * @type {RegExp}
 */
export const IPV6_REGEX = /^[\da-fA-F:]+$/;

/**
 * A regular expression that removes mapped IPv6
 *
 * @type {RegExp}
 */
export const REMOVE_IPV4_MAPPED_IPV6_REGEX = /^::ffff:/;

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
	host: null,

	/* 10 min */
	interval: 10 * 60e3
};

/**
 * Default HTTP server options
 *
 * @type {Object}
 */
export const defaultHTTPServerOptions = {
	httpServer: null,

	port: 80,
	host: null,

	/* 10 min */
	interval: 10 * 60e3
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
