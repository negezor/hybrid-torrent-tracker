/**
 * Type of request source
 */
export enum RequestSource {
    WEBSOCKET = 'websocket',
    HTTP = 'http',
    UDP = 'udp',
}

/**
 * Tracker event list
 */
export enum TrackerAction {
    CONNECT = 'connect',
    ANNOUNCE = 'announce',
    SCRAPE = 'scrape',
    ERROR = 'error',
}

/**
 * Events list announce
 */
export enum AnnounceEvent {
    UPDATE = 'update',
    COMPLETED = 'completed',
    STARTED = 'started',
    STOPPED = 'stopped',
}

/**
 * Number of simultaneous peers
 */
export enum AnnouncePeerSimultaneously {
    /**
     * The default value is the number of peers
     */
    DEFAULT = 50,

    /**
     * The min value is the number of peers
     */
    MIN = 1,

    /**
     * The max value is the number of peers
     */
    MAX = 82,
}

/**
 * Inspect custom data
 */
export const inspectCustomData = Symbol('inspectCustomData');
