import { IncorrectRequestError } from '../../errors';
import { binaryToHex } from '../../helpers';

export const httpScrapeSchema = {
	// eslint-disable-next-line @typescript-eslint/camelcase
	info_hash: (rawInfoHashes: string | string[]): string[] => {
		if (!rawInfoHashes) {
			return [];
		}

		const infoHashes = Array.isArray(rawInfoHashes)
			? rawInfoHashes
			: [rawInfoHashes];

		return infoHashes.map((binaryInfoHash): string => {
			if (typeof binaryInfoHash !== 'string' || binaryInfoHash.length !== 20) {
				throw new IncorrectRequestError({
					message: 'Invalid info_hash',
					code: 'INVALID_PARAMETER'
				});
			}

			return binaryToHex(binaryInfoHash);
		});
	}
};
