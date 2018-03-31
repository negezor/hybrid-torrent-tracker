hybrid-torrent-tracker - This is a torrent tracker for [Node.js](https://nodejs.org) with HTTP and UDP support based middleware.

## Features
- User-friendly interface for query processing (middleware)
- Predictable abstraction

## Installation
**[Node.js](https://nodejs.org/) 9.0.0 or newer is required**  

### Yarn
Recommended
```shell
yarn add hybrid-torrent-tracker
```

### NPM
```shell
npm install hybrid-torrent-tracker --save
```

## Example usage

```js
import Tracker, { createLocalStorage } from 'hybrid-torrent-tracker';

const tracker = new Tracker({
	http: {
		port: 6881
	},
	udp: {
		port: 6881
	}
});

tracker.use(createLocalStorage());

async function run() {
	await tracker.listen();

	console.log('Tracker listens');
}

run().catch(console.error); // async/await "sugar"
```

## Debug
Set environment `DEBUG=hybrid-torrent-tracker:*`
