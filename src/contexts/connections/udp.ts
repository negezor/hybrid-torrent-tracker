import { Socket, RemoteInfo } from 'dgram';
import { inspect } from 'util';

import { IUDPConnectionContext, UDPResponseUnion } from '../../interfaces';

import ConnectionContext from './context';
import { UDPParser } from '../../parsers';
import { TrackerAction } from '../../constants';

export interface IUDPConnectionContextOptions {
	socket: Socket;
	remoteInfo: RemoteInfo;
}

export default class UDPConnectionContext
	extends ConnectionContext
	implements IUDPConnectionContext {
	public sent = false;

	protected socket: Socket;

	protected remoteInfo: RemoteInfo;

	public constructor(options: IUDPConnectionContextOptions) {
		super();

		this.socket = options.socket;
		this.remoteInfo = options.remoteInfo;
	}

	public get ip(): string {
		return this.remoteInfo.address;
	}

	public get port(): number {
		return this.remoteInfo.port;
	}

	public send(
		payload: UDPResponseUnion,
		options: {
			action: TrackerAction;
		}
	): Promise<void> {
		return new Promise((resolve, reject): void => {
			const message = UDPParser.toBufferResponse(payload, options.action);

			this.socket.send(message, 0, message.length, this.port, this.ip, (error): void => {
				if (error) {
					reject(error);

					return;
				}

				this.sent = true;

				resolve();
			});
		});
	}

	/**
	 * Custom inspect object
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public [inspect.custom](depth: any, options: Record<string, any>): string {
		const { name } = this.constructor;
		const { sent, ip, port } = this;

		const payload = {
			sent,
			ip,
			port
		};

		return `${options.stylize(name, 'special')} ${inspect(payload, options)}`;
	}
}
