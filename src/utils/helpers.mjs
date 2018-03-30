import string2compact from 'string2compact';

import querystring from 'querystring';

import { IPV4_REGEX, IPV6_REGEX } from './constants';

/**
 * Delay N-ms
 *
 * @param {number} delayed
 *
 * @return {Promise}
 */
export const delay = delayed => (
	new Promise(resolve => setTimeout(resolve, delayed))
);

/**
 * Assign default options
 *
 * @param {Object} defaultOptions
 * @param {Object} options
 *
 * @return {Object}
 */
export const assignDefaultOptions = (defaultOptions, options) => (
	Object.assign({}, defaultOptions, ...[...Object.entries(options)].map(([key, value]) => ({
		[key]: typeof value === 'object'
			? Object.assign(defaultOptions[key], value)
			: value
	})))
);

/**
 * Returns buffer UInt32
 *
 * @param {number} num
 *
 * @return {Buffer}
 */
export const toUInt32 = (num) => {
	const buffer = Buffer.alloc(4);

	buffer.writeUInt32BE(num, 0);

	return buffer;
};

const TWO_PWR_32 = (1 << 16) * 2;

/**
 * Return the closest floating-point representation to the buffer value
 *
 * @param {Buffer} buffer
 *
 * @return {number}
 */
export const fromUInt64 = (buffer) => {
	const high = buffer.readUInt32BE(0) | 0;
	const low = buffer.readUInt32BE(4) | 0;

	const lowUnsigned = low >= 0
		? low
		: TWO_PWR_32 + low;

	return (high * TWO_PWR_32) + lowUnsigned;
};

/**
 * Buffer to string ip
 *
 * @param {Buffer} buffer
 *
 * @return {string}
 */
export const bufferToStringIp = (buffer) => {
	if (buffer.length === 4) {
		const results = [];

		for (let i = 0; i < buffer.length; i += 1) {
			results.push(buffer[i]);
		}

		return results.join('.');
	}

	if (buffer.length === 16) {
		const results = [];

		for (let i = 0; i < buffer.length; i += 2) {
			results.push(buffer.readUInt16BE(i).toString(16));
		}

		return results
			.join(':')
			.replace(/(^|:)0(:0)*:0(:|$)/, '$1::$3')
			.replace(/:{3,4}/, '::');
	}

	return null;
};

/**
 * Binary to hex
 *
 * @param {string} str
 *
 * @return {string}
 */
export const binaryToHex = binary => Buffer.from(String(binary), 'binary').toString('hex');

/**
 * Hex to binary
 *
 * @param {string} str
 *
 * @return {string}
 */
export const hexToBinary = hex => Buffer.from(String(hex), 'hex').toString('binary');

/**
 * Decode query string bittorrent
 *
 * @param {string} query
 *
 * @return {Object}
 */
export const decodeQueryString = query => (
	querystring.parse(query, null, null, {
		decodeURIComponent: unescape
	})
);

/**
 * Decode query string bittorrent
 *
 * @param {string} query
 *
 * @return {Object}
 */
export const encodeQueryString = query => (
	querystring.stringify(query, null, null, {
		encodeURIComponent: escape
	})
		// `escape` doesn't encode the characters @*/+ so we do it manually
		.replace(/[@*/+]/g, char => `%${char.charCodeAt(0).toString(16).toUpperCase()}`)
);

export const ipv4PeersToCompact = peers => (
	string2compact(peers
		.filter(peer => IPV4_REGEX.test(peer.ip))
		.map(peer => `${peer.ip}:${peer.port}`))
);

export const ipv6PeersToCompact = peers => (
	string2compact(peers
		.filter(peer => IPV6_REGEX.test(peer.ip))
		.map(peer => `[${peer.ip}]:${peer.port}`))
);

export const simpleSchemaValidate = (payload, schema) => {
	for (const [key, value] of Object.entries(schema)) {
		payload[key] = value(payload[key], payload);
	}

	return payload;
};
