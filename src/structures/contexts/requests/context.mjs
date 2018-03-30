export default class RequestContext {
	/**
	 * Constructor
	 *
	 * @param {ConnectionRequest} connection
	 * @param {Object}            payload
	 * @param {Object}            options
	 */
	constructor(connection, payload, options) {
		this.connection = connection;
		this.payload = payload;
		this.options = options;

		/* Where did the context come from */
		this.source = options.source;

		this.response = {};
	}

	/**
	 * Checks that the response is sent
	 *
	 * @return {boolean}
	 */
	isSent() {
		return this.connection.sent;
	}

	/**
	 * Sends a response
	 *
	 * @param {Object} payload
	 * @param {Object} options
	 *
	 * @return {Promise}
	 */
	send(payload, options = {}) {
		return this.connection.send(payload, {
			action: this.action,

			...options
		});
	}

	/**
	 * Returns the connection ID (only UDP)
	 *
	 * @return {?Buffer}
	 */
	get connectionId() {
		return this.payload.connection_id || null;
	}

	/**
	 * Returns the transaction ID (only UDP)
	 *
	 * @return {?number}
	 */
	get transactionId() {
		return this.payload.transaction_id || null;
	}
}
