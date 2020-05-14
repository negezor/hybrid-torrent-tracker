export interface ITrackerErrorOptions {
	code: string;
	message: string;
}

/**
 * General error class
 */
export class TrackerError extends Error {
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
	public toJSON(): Pick<this, keyof this> {
		const json = {} as Pick<this, keyof this>;

		for (const key of Object.getOwnPropertyNames(this)) {
			json[key as keyof this] = this[key as keyof this];
		}

		return json;
	}
}
