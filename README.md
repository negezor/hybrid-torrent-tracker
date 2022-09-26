hybrid-torrent-tracker - This is a torrent tracker for [Node.js](https://nodejs.org) with HTTP and UDP support based middleware.

| 📖 [Documentation](docs/) |
|---------------------------|

## Features
- User-friendly interface for query processing (middleware)
- Predictable abstraction

## Installation
**[Node.js](https://nodejs.org/) 12.0.0 or newer is required**  

### NPM
Recommended
```shell
npm install hybrid-torrent-tracker
```

### Yarn
```shell
yarn add hybrid-torrent-tracker
```

## Example usage

```js
import { TorrentTracker } from 'hybrid-torrent-tracker';

const tracker = new TorrentTracker({
	http: {
		port: 6881
	},
	udp: {
		port: 6881
	}
});

tracker.use((context, next) => {
	// Your logic
});

async function run() {
	await tracker.listen();

	console.log('Torrent tracker started');
}

run().catch(console.error);
```

## Debug
Set environment `DEBUG=hybrid-torrent-tracker:*`
