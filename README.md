<p align="center"><img src="https://raw.githubusercontent.com/negezor/hybrid-torrent-tracker/master/logo.svg?sanitize=true"></p>
<p align="center">
<a href="https://github.com/negezor/hybrid-torrent-tracker/actions/workflows/tests.yml"><img src="https://img.shields.io/github/actions/workflow/status/negezor/hybrid-torrent-tracker/tests.yml?style=flat-square" alt="Build Status"></a>
<a href="https://www.npmjs.com/package/hybrid-torrent-tracker"><img src="https://img.shields.io/npm/v/hybrid-torrent-tracker.svg?style=flat-square" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/hybrid-torrent-tracker"><img src="https://img.shields.io/npm/dt/hybrid-torrent-tracker.svg?style=flat-square" alt="NPM downloads"></a>
</p>

> **Hybrid-Torrent-Tracker** - This is a torrent tracker for [Node.js](https://nodejs.org) with HTTP and UDP support based middleware.

| 📖 [Documentation](docs/) |
|---------------------------|

## Features
1. **Reliable.** The library is written in **TypeScript** and covered by tests.
2. **Modern.** The library comes with native ESM support
3. **Powerful**. User-friendly interface for query processing (middleware)

## Installation
> **[Node.js](https://nodejs.org/) 20.0.0 or newer is required**

- **Using `npm`** (recommended)
	```shell
	npm i hybrid-torrent-tracker
	```
- **Using `Yarn`**
  ```shell
  yarn add hybrid-torrent-tracker
  ```
- **Using `pnpm`**
  ```shell
  pnpm add hybrid-torrent-tracker
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
