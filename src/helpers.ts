import { isIPv4, isIPv6 } from 'node:net';
import { parse as parseQueryString } from 'node:querystring';
// @ts-ignore
import string2compact from 'string2compact';

/**
 * Binary to hex
 */
export const binaryToHex = (binary: string): string => Buffer.from(String(binary), 'binary').toString('hex');

/**
 * Hex to binary
 */
export const hexToBinary = (hex: string): string => Buffer.from(String(hex), 'hex').toString('binary');

/**
 * Decode query string bittorrent
 */
export const decodeQueryString = (query: string): ReturnType<typeof parseQueryString> =>
    parseQueryString(query, undefined, undefined, {
        decodeURIComponent: unescape,
    });

/**
 * Returns decoded query from URL
 */
export const getQueryFromURL = (url: string): ReturnType<typeof decodeQueryString> =>
    decodeQueryString(url.substring(url.indexOf('?') + 1));

/**
 * The regular expression checks a string for IPv4
 */
export const ipv4Re = /^[\d.]+$/;

export const ipv4PeersToCompact = (peers: { ip: string; port: number }[]): Buffer =>
    string2compact(peers.filter((peer): boolean => isIPv4(peer.ip)).map((peer): string => `${peer.ip}:${peer.port}`));

/**
 * The regular expression checks a string for IPv6
 */
export const ipv6Re = /^[\da-fA-F:]+$/;

export const ipv6PeersToCompact = (peers: { ip: string; port: number }[]): Buffer =>
    string2compact(peers.filter((peer): boolean => isIPv6(peer.ip)).map((peer): string => `[${peer.ip}]:${peer.port}`));

/**
 * Returns buffer UInt32
 */
export const toUInt32 = (num: number): Buffer => {
    const buffer = Buffer.alloc(4);

    buffer.writeUInt32BE(num, 0);

    return buffer;
};

/**
 * Returns buffer UInt64
 */
export const toUInt64 = (num: bigint): Buffer => {
    const buffer = Buffer.alloc(8);

    buffer.writeBigUInt64BE(num, 0);

    return buffer;
};

/**
 * Converts number to IPv4
 */
export const intToIPv4 = (ipInt: number): string =>
    `${ipInt >>> 24}.${(ipInt >> 16) & 255}.${(ipInt >> 8) & 255}.${ipInt & 255}`;

// biome-ignore lint/suspicious/noExplicitAny: schema can be anything
type ParseSchemaReturn<T extends Record<string, any>> = {
    [P in keyof T]: ReturnType<T[P]>;
};

// biome-ignore lint/suspicious/noExplicitAny: schema can be anything
export const parseBySchema = <T extends Record<string, any>>(
    schema: T,
    payload: Partial<ParseSchemaReturn<T>>,
): ParseSchemaReturn<T> => {
    const transformed = {} as ParseSchemaReturn<T>;

    for (const [key, value] of Object.entries(schema)) {
        transformed[key as keyof T] = value(payload[key as keyof T]);
    }

    return transformed;
};

/**
 * Copies object params to new object
 */
export const copyParams = <T, K extends keyof T>(params: T, properties: K[]): Pick<T, K> => {
    const copies = {} as Pick<T, K>;

    for (const property of properties) {
        copies[property] = params[property];
    }

    return copies;
};
