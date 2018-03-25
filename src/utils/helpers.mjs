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
