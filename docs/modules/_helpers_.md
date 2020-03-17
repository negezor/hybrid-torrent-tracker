[hybrid-torrent-tracker](../README.md) › ["helpers"](_helpers_.md)

# Module: "helpers"

## Index

### Type aliases

* [ParseSchemaReturn](_helpers_.md#parseschemareturn)

### Variables

* [ipv4Re](_helpers_.md#const-ipv4re)
* [ipv6Re](_helpers_.md#const-ipv6re)

### Functions

* [binaryToHex](_helpers_.md#const-binarytohex)
* [copyParams](_helpers_.md#const-copyparams)
* [decodeQueryString](_helpers_.md#const-decodequerystring)
* [getQueryFromURL](_helpers_.md#const-getqueryfromurl)
* [hexToBinary](_helpers_.md#const-hextobinary)
* [intToIPv4](_helpers_.md#const-inttoipv4)
* [ipv4PeersToCompact](_helpers_.md#const-ipv4peerstocompact)
* [ipv6PeersToCompact](_helpers_.md#const-ipv6peerstocompact)
* [parseBySchema](_helpers_.md#const-parsebyschema)
* [toUInt32](_helpers_.md#const-touint32)
* [toUInt64](_helpers_.md#const-touint64)

## Type aliases

###  ParseSchemaReturn

Ƭ **ParseSchemaReturn**: *object*

*Defined in [src/helpers.ts:97](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/helpers.ts#L97)*

#### Type declaration:

## Variables

### `Const` ipv4Re

• **ipv4Re**: *RegExp‹›* = /^[\d.]+$/

*Defined in [src/helpers.ts:43](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/helpers.ts#L43)*

The regular expression checks a string for IPv4

___

### `Const` ipv6Re

• **ipv6Re**: *RegExp‹›* = /^[\da-fA-F:]+$/

*Defined in [src/helpers.ts:56](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/helpers.ts#L56)*

The regular expression checks a string for IPv6

## Functions

### `Const` binaryToHex

▸ **binaryToHex**(`binary`: string): *string*

*Defined in [src/helpers.ts:9](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/helpers.ts#L9)*

Binary to hex

**Parameters:**

Name | Type |
------ | ------ |
`binary` | string |

**Returns:** *string*

___

### `Const` copyParams

▸ **copyParams**<**T**, **K**>(`params`: T, `properties`: K[]): *Pick‹T, K›*

*Defined in [src/helpers.ts:120](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/helpers.ts#L120)*

Copies object params to new object

**Type parameters:**

▪ **T**

▪ **K**: *keyof T*

**Parameters:**

Name | Type |
------ | ------ |
`params` | T |
`properties` | K[] |

**Returns:** *Pick‹T, K›*

___

### `Const` decodeQueryString

▸ **decodeQueryString**(`query`: string): *ReturnType‹typeof parseQueryString›*

*Defined in [src/helpers.ts:23](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/helpers.ts#L23)*

Decode query string bittorrent

**Parameters:**

Name | Type |
------ | ------ |
`query` | string |

**Returns:** *ReturnType‹typeof parseQueryString›*

___

### `Const` getQueryFromURL

▸ **getQueryFromURL**(`url`: string): *ReturnType‹typeof decodeQueryString›*

*Defined in [src/helpers.ts:32](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/helpers.ts#L32)*

Returns decoded query from URL

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *ReturnType‹typeof decodeQueryString›*

___

### `Const` hexToBinary

▸ **hexToBinary**(`hex`: string): *string*

*Defined in [src/helpers.ts:16](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/helpers.ts#L16)*

Hex to binary

**Parameters:**

Name | Type |
------ | ------ |
`hex` | string |

**Returns:** *string*

___

### `Const` intToIPv4

▸ **intToIPv4**(`ipInt`: number): *string*

*Defined in [src/helpers.ts:91](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/helpers.ts#L91)*

Converts number to IPv4

**Parameters:**

Name | Type |
------ | ------ |
`ipInt` | number |

**Returns:** *string*

___

### `Const` ipv4PeersToCompact

▸ **ipv4PeersToCompact**(`peers`: object[]): *Buffer*

*Defined in [src/helpers.ts:45](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/helpers.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`peers` | object[] |

**Returns:** *Buffer*

___

### `Const` ipv6PeersToCompact

▸ **ipv6PeersToCompact**(`peers`: object[]): *Buffer*

*Defined in [src/helpers.ts:58](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/helpers.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`peers` | object[] |

**Returns:** *Buffer*

___

### `Const` parseBySchema

▸ **parseBySchema**<**T**>(`schema`: T, `payload`: Partial‹[ParseSchemaReturn](_helpers_.md#parseschemareturn)‹T››): *[ParseSchemaReturn](_helpers_.md#parseschemareturn)‹T›*

*Defined in [src/helpers.ts:101](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/helpers.ts#L101)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`schema` | T |
`payload` | Partial‹[ParseSchemaReturn](_helpers_.md#parseschemareturn)‹T›› |

**Returns:** *[ParseSchemaReturn](_helpers_.md#parseschemareturn)‹T›*

___

### `Const` toUInt32

▸ **toUInt32**(`num`: number): *Buffer*

*Defined in [src/helpers.ts:69](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/helpers.ts#L69)*

Returns buffer UInt32

**Parameters:**

Name | Type |
------ | ------ |
`num` | number |

**Returns:** *Buffer*

___

### `Const` toUInt64

▸ **toUInt64**(`num`: bigint): *Buffer*

*Defined in [src/helpers.ts:80](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/helpers.ts#L80)*

Returns buffer UInt64

**Parameters:**

Name | Type |
------ | ------ |
`num` | bigint |

**Returns:** *Buffer*
