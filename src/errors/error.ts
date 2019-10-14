// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CopiedError = Record<string, any>;

export interface ITrackerErrorOptions {
	code: string;
	message: string;
}

/**
 * General error class
 */
export default class TrackerError extends Error {
	/**
	 * Error code
	 */
	public code: string;

	/**
	 * Constructor
	 */
	public constructor({ code, message }: ITrackerErrorOptions) {
		super(message);

		this.code = code;
		this.message = message;
		this.name = this.constructor.name;

		Error.captureStackTrace(this, this.constructor);
	}

	/**
	 * Returns custom tag
	 */
	public get [Symbol.toStringTag](): string {
		return this.constructor.name;
	}

	/**
	 * Returns property for json
	 */
	public toJSON(): CopiedError {
		const json: CopiedError = {};

		for (const key of Object.getOwnPropertyNames(this)) {
			// @ts-ignore
			json[key] = this[key];
		}

		return json;
	}
}
