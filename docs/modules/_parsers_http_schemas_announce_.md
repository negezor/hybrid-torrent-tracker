[hybrid-torrent-tracker](../README.md) › ["parsers/http-schemas/announce"](_parsers_http_schemas_announce_.md)

# Module: "parsers/http-schemas/announce"

## Index

### Variables

* [allowAnnounceEvents](_parsers_http_schemas_announce_.md#const-allowannounceevents)

### Object literals

* [httpAnnounceSchema](_parsers_http_schemas_announce_.md#const-httpannounceschema)

## Variables

### `Const` allowAnnounceEvents

• **allowAnnounceEvents**: *string[]* = [...Object.values(AnnounceEvent)]

*Defined in [src/parsers/http-schemas/announce.ts:5](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/http-schemas/announce.ts#L5)*

## Object literals

### `Const` httpAnnounceSchema

### ▪ **httpAnnounceSchema**: *object*

*Defined in [src/parsers/http-schemas/announce.ts:7](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/http-schemas/announce.ts#L7)*

###  compact

▸ **compact**(`rawCompact`: string): *number*

*Defined in [src/parsers/http-schemas/announce.ts:66](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/http-schemas/announce.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`rawCompact` | string |

**Returns:** *number*

###  downloaded

▸ **downloaded**(`rawDownloaded`: string): *bigint*

*Defined in [src/parsers/http-schemas/announce.ts:51](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/http-schemas/announce.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`rawDownloaded` | string |

**Returns:** *bigint*

###  event

▸ **event**(`rawEvent`: [AnnounceEvent](../enums/_constants_.announceevent.md)): *[AnnounceEvent](../enums/_constants_.announceevent.md)*

*Defined in [src/parsers/http-schemas/announce.ts:83](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/http-schemas/announce.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`rawEvent` | [AnnounceEvent](../enums/_constants_.announceevent.md) |

**Returns:** *[AnnounceEvent](../enums/_constants_.announceevent.md)*

###  info_hash

▸ **info_hash**(`infoHash`: string): *string*

*Defined in [src/parsers/http-schemas/announce.ts:9](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/http-schemas/announce.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`infoHash` | string |

**Returns:** *string*

###  left

▸ **left**(`rawLeft`: string): *bigint*

*Defined in [src/parsers/http-schemas/announce.ts:58](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/http-schemas/announce.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`rawLeft` | string |

**Returns:** *bigint*

###  no_peer_id

▸ **no_peer_id**(`rawNoPeerId`: string): *number*

*Defined in [src/parsers/http-schemas/announce.ts:75](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/http-schemas/announce.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`rawNoPeerId` | string |

**Returns:** *number*

###  numwant

▸ **numwant**(`rawNumwant`: string): *number*

*Defined in [src/parsers/http-schemas/announce.ts:89](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/http-schemas/announce.ts#L89)*

**Parameters:**

Name | Type |
------ | ------ |
`rawNumwant` | string |

**Returns:** *number*

###  peer_id

▸ **peer_id**(`peerId`: string): *string*

*Defined in [src/parsers/http-schemas/announce.ts:20](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/http-schemas/announce.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`peerId` | string |

**Returns:** *string*

###  port

▸ **port**(`rawPort`: string): *number*

*Defined in [src/parsers/http-schemas/announce.ts:31](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/http-schemas/announce.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`rawPort` | string |

**Returns:** *number*

###  uploaded

▸ **uploaded**(`rawUploaded`: string): *bigint*

*Defined in [src/parsers/http-schemas/announce.ts:44](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/http-schemas/announce.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`rawUploaded` | string |

**Returns:** *bigint*
