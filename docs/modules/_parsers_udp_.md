[hybrid-torrent-tracker](../README.md) › ["parsers/udp"](_parsers_udp_.md)

# Module: "parsers/udp"

## Index

### Interfaces

* [IUDPRequestHeaders](../interfaces/_parsers_udp_.iudprequestheaders.md)

### Variables

* [ANNOUNCE_ACTION](_parsers_udp_.md#const-announce_action)
* [CONNECTION_ACTION](_parsers_udp_.md#const-connection_action)
* [ERROR_ACTION](_parsers_udp_.md#const-error_action)
* [INFO_HASH_BYTES](_parsers_udp_.md#const-info_hash_bytes)
* [PROTOCOL_ID](_parsers_udp_.md#const-protocol_id)
* [SCRAPE_ACTION](_parsers_udp_.md#const-scrape_action)

### Functions

* [announceResponse](_parsers_udp_.md#const-announceresponse)
* [connectionResponse](_parsers_udp_.md#const-connectionresponse)
* [errorResponse](_parsers_udp_.md#const-errorresponse)
* [parseAnnounceRequest](_parsers_udp_.md#const-parseannouncerequest)
* [parseConnectionRequest](_parsers_udp_.md#const-parseconnectionrequest)
* [parseRequestHeaders](_parsers_udp_.md#const-parserequestheaders)
* [parseScrapeRequest](_parsers_udp_.md#const-parsescraperequest)
* [scrapeResponse](_parsers_udp_.md#const-scraperesponse)
* [toBufferResponse](_parsers_udp_.md#const-tobufferresponse)

### Object literals

* [udpAnnounceEvents](_parsers_udp_.md#const-udpannounceevents)
* [udpTrackerActions](_parsers_udp_.md#const-udptrackeractions)

## Variables

### `Const` ANNOUNCE_ACTION

• **ANNOUNCE_ACTION**: *Buffer‹›* = toUInt32(1)

*Defined in [src/parsers/udp.ts:43](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/udp.ts#L43)*

___

### `Const` CONNECTION_ACTION

• **CONNECTION_ACTION**: *Buffer‹›* = toUInt32(0)

*Defined in [src/parsers/udp.ts:42](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/udp.ts#L42)*

___

### `Const` ERROR_ACTION

• **ERROR_ACTION**: *Buffer‹›* = toUInt32(3)

*Defined in [src/parsers/udp.ts:45](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/udp.ts#L45)*

___

### `Const` INFO_HASH_BYTES

• **INFO_HASH_BYTES**: *20* = 20

*Defined in [src/parsers/udp.ts:49](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/udp.ts#L49)*

___

### `Const` PROTOCOL_ID

• **PROTOCOL_ID**: *4497486125440n* = 0x41727101980n

*Defined in [src/parsers/udp.ts:47](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/udp.ts#L47)*

___

### `Const` SCRAPE_ACTION

• **SCRAPE_ACTION**: *Buffer‹›* = toUInt32(2)

*Defined in [src/parsers/udp.ts:44](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/udp.ts#L44)*

## Functions

### `Const` announceResponse

▸ **announceResponse**(`__namedParameters`: object): *Buffer*

*Defined in [src/parsers/udp.ts:231](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/udp.ts#L231)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`complete` | number | - |
`incomplete` | number | - |
`interval` | number | - |
`peers` | object[] | [] |
`transactionId` | number | - |

**Returns:** *Buffer*

___

### `Const` connectionResponse

▸ **connectionResponse**(`__namedParameters`: object): *Buffer*

*Defined in [src/parsers/udp.ts:218](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/udp.ts#L218)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`connectionId` | bigint |
`transactionId` | number |

**Returns:** *Buffer*

___

### `Const` errorResponse

▸ **errorResponse**(`__namedParameters`: object): *Buffer*

*Defined in [src/parsers/udp.ts:273](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/udp.ts#L273)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`message` | string |
`transactionId` | number |

**Returns:** *Buffer*

___

### `Const` parseAnnounceRequest

▸ **parseAnnounceRequest**(`message`: Buffer, `headers`: [IUDPRequestHeaders](../interfaces/_parsers_udp_.iudprequestheaders.md)): *[IAnnounceRequestPayload](../interfaces/_interfaces_.iannouncerequestpayload.md)*

*Defined in [src/parsers/udp.ts:94](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/udp.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | Buffer |
`headers` | [IUDPRequestHeaders](../interfaces/_parsers_udp_.iudprequestheaders.md) |

**Returns:** *[IAnnounceRequestPayload](../interfaces/_interfaces_.iannouncerequestpayload.md)*

___

### `Const` parseConnectionRequest

▸ **parseConnectionRequest**(`message`: Buffer, `headers`: [IUDPRequestHeaders](../interfaces/_parsers_udp_.iudprequestheaders.md)): *[IConnectionRequestPayload](../interfaces/_interfaces_.iconnectionrequestpayload.md)*

*Defined in [src/parsers/udp.ts:80](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/udp.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | Buffer |
`headers` | [IUDPRequestHeaders](../interfaces/_parsers_udp_.iudprequestheaders.md) |

**Returns:** *[IConnectionRequestPayload](../interfaces/_interfaces_.iconnectionrequestpayload.md)*

___

### `Const` parseRequestHeaders

▸ **parseRequestHeaders**(`message`: Buffer): *[IUDPRequestHeaders](../interfaces/_parsers_udp_.iudprequestheaders.md)*

*Defined in [src/parsers/udp.ts:57](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/udp.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | Buffer |

**Returns:** *[IUDPRequestHeaders](../interfaces/_parsers_udp_.iudprequestheaders.md)*

___

### `Const` parseScrapeRequest

▸ **parseScrapeRequest**(`message`: Buffer, `headers`: [IUDPRequestHeaders](../interfaces/_parsers_udp_.iudprequestheaders.md)): *[IScrapeRequestPayload](../interfaces/_interfaces_.iscraperequestpayload.md)*

*Defined in [src/parsers/udp.ts:187](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/udp.ts#L187)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | Buffer |
`headers` | [IUDPRequestHeaders](../interfaces/_parsers_udp_.iudprequestheaders.md) |

**Returns:** *[IScrapeRequestPayload](../interfaces/_interfaces_.iscraperequestpayload.md)*

___

### `Const` scrapeResponse

▸ **scrapeResponse**(`__namedParameters`: object): *Buffer*

*Defined in [src/parsers/udp.ts:253](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/udp.ts#L253)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`files` | object[] | [] |
`transactionId` | number | - |

**Returns:** *Buffer*

___

### `Const` toBufferResponse

▸ **toBufferResponse**(`payload`: [UDPResponseUnion](_interfaces_.md#udpresponseunion), `action`: [TrackerAction](../enums/_constants_.trackeraction.md)): *Buffer*

*Defined in [src/parsers/udp.ts:286](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/udp.ts#L286)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [UDPResponseUnion](_interfaces_.md#udpresponseunion) |
`action` | [TrackerAction](../enums/_constants_.trackeraction.md) |

**Returns:** *Buffer*

## Object literals

### `Const` udpAnnounceEvents

### ▪ **udpAnnounceEvents**: *object*

*Defined in [src/parsers/udp.ts:25](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/udp.ts#L25)*

Events announce ids list UDP

###  0

• **0**: *[AnnounceEvent](../enums/_constants_.announceevent.md)* = AnnounceEvent.UPDATE

*Defined in [src/parsers/udp.ts:26](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/udp.ts#L26)*

###  1

• **1**: *[AnnounceEvent](../enums/_constants_.announceevent.md)* = AnnounceEvent.COMPLETED

*Defined in [src/parsers/udp.ts:27](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/udp.ts#L27)*

###  2

• **2**: *[AnnounceEvent](../enums/_constants_.announceevent.md)* = AnnounceEvent.STARTED

*Defined in [src/parsers/udp.ts:28](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/udp.ts#L28)*

###  3

• **3**: *[AnnounceEvent](../enums/_constants_.announceevent.md)* = AnnounceEvent.STOPPED

*Defined in [src/parsers/udp.ts:29](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/udp.ts#L29)*

___

### `Const` udpTrackerActions

### ▪ **udpTrackerActions**: *object*

*Defined in [src/parsers/udp.ts:35](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/udp.ts#L35)*

Action list UDP

###  0

• **0**: *[TrackerAction](../enums/_constants_.trackeraction.md)* = TrackerAction.CONNECT

*Defined in [src/parsers/udp.ts:36](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/udp.ts#L36)*

###  1

• **1**: *[TrackerAction](../enums/_constants_.trackeraction.md)* = TrackerAction.ANNOUNCE

*Defined in [src/parsers/udp.ts:37](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/udp.ts#L37)*

###  2

• **2**: *[TrackerAction](../enums/_constants_.trackeraction.md)* = TrackerAction.SCRAPE

*Defined in [src/parsers/udp.ts:38](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/udp.ts#L38)*

###  3

• **3**: *[TrackerAction](../enums/_constants_.trackeraction.md)* = TrackerAction.ERROR

*Defined in [src/parsers/udp.ts:39](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/parsers/udp.ts#L39)*
