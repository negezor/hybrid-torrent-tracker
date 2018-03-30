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
 * Default UDP server options
 *
 * @type {Object}
 */
export const defaultUDPServerOptions = {
	enabled: true,

	udp4Socket: null,
	udp6Socket: null,

	port: 80,
	host: null,

	/* 2 min */
	interval: 2 * 60e3
};

/**
 * Default HTTP server options
 *
 * @type {Object}
 */
export const defaultHTTPServerOptions = {
	enabled: true,

	httpServer: null,

	port: 80,
	host: null,
	trustProxy: false,

	/* 2 min */
	interval: 2 * 60e3
};

/**
 * Default WebSocket server options
 *
 * @type {Object}
 */
export const defaultWebSocketServerOptions = {
	enabled: false,

	httpServer: null,

	port: 80,
	host: null,
	trustProxy: false,

	/* 2 min */
	interval: 2 * 60e3
};

/**
 * Default tracker options
 *
 * @type {Object}
 */
export const defaultTrackerOptions = {
	udp: defaultUDPServerOptions,
	http: defaultHTTPServerOptions,
	websocket: defaultWebSocketServerOptions
};

/**
 * Request types
 *
 * @type {Object}
 */
export const requestTypes = {
	WEBSOCKET: 'websocket',
	HTTP: 'http',
	UDP: 'udp'
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
 * Events list announce
 *
 * @type {Object}
 */
export const announceEvents = {
	UPDATE: 'update',
	COMPLETED: 'completed',
	STARTED: 'started',
	STOPPED: 'stopped'
};

/**
 * Events announce ids list UDP
 *
 * @type {Object}
 */
export const udpAnnounceEventsIds = {
	0: announceEvents.UPDATE,
	1: announceEvents.COMPLETED,
	2: announceEvents.STARTED,
	3: announceEvents.STOPPED
};
