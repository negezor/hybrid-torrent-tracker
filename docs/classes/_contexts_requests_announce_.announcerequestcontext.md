[hybrid-torrent-tracker](../README.md) › ["contexts/requests/announce"](../modules/_contexts_requests_announce_.md) › [AnnounceRequestContext](_contexts_requests_announce_.announcerequestcontext.md)

# Class: AnnounceRequestContext

## Hierarchy

* [RequestContext](_contexts_requests_context_.requestcontext.md)

  ↳ **AnnounceRequestContext**

## Implements

* [IRequestContext](../interfaces/_interfaces_.irequestcontext.md)
* [IAnnounceRequestContext](../interfaces/_interfaces_.iannouncerequestcontext.md)

## Index

### Constructors

* [constructor](_contexts_requests_announce_.announcerequestcontext.md#constructor)

### Properties

* [action](_contexts_requests_announce_.announcerequestcontext.md#action)
* [connection](_contexts_requests_announce_.announcerequestcontext.md#protected-connection)
* [payload](_contexts_requests_announce_.announcerequestcontext.md#protected-payload)
* [response](_contexts_requests_announce_.announcerequestcontext.md#response)
* [source](_contexts_requests_announce_.announcerequestcontext.md#source)

### Accessors

* [compact](_contexts_requests_announce_.announcerequestcontext.md#compact)
* [downloaded](_contexts_requests_announce_.announcerequestcontext.md#downloaded)
* [event](_contexts_requests_announce_.announcerequestcontext.md#event)
* [infoHash](_contexts_requests_announce_.announcerequestcontext.md#infohash)
* [ip](_contexts_requests_announce_.announcerequestcontext.md#ip)
* [isAnnounce](_contexts_requests_announce_.announcerequestcontext.md#isannounce)
* [isCompact](_contexts_requests_announce_.announcerequestcontext.md#iscompact)
* [isConnect](_contexts_requests_announce_.announcerequestcontext.md#isconnect)
* [isScrape](_contexts_requests_announce_.announcerequestcontext.md#isscrape)
* [isSourceHTTP](_contexts_requests_announce_.announcerequestcontext.md#issourcehttp)
* [isSourceUDP](_contexts_requests_announce_.announcerequestcontext.md#issourceudp)
* [key](_contexts_requests_announce_.announcerequestcontext.md#key)
* [left](_contexts_requests_announce_.announcerequestcontext.md#left)
* [noPeerId](_contexts_requests_announce_.announcerequestcontext.md#nopeerid)
* [numwant](_contexts_requests_announce_.announcerequestcontext.md#numwant)
* [peerId](_contexts_requests_announce_.announcerequestcontext.md#peerid)
* [port](_contexts_requests_announce_.announcerequestcontext.md#port)
* [requestPath](_contexts_requests_announce_.announcerequestcontext.md#requestpath)
* [sent](_contexts_requests_announce_.announcerequestcontext.md#sent)
* [trackerId](_contexts_requests_announce_.announcerequestcontext.md#trackerid)
* [transactionId](_contexts_requests_announce_.announcerequestcontext.md#transactionid)
* [uploaded](_contexts_requests_announce_.announcerequestcontext.md#uploaded)

### Methods

* [[inspect.custom]](_contexts_requests_announce_.announcerequestcontext.md#[inspect.custom])
* [[inspectCustomData]](_contexts_requests_announce_.announcerequestcontext.md#[inspectcustomdata])
* [send](_contexts_requests_announce_.announcerequestcontext.md#send)
* [toJSON](_contexts_requests_announce_.announcerequestcontext.md#tojson)

## Constructors

###  constructor

\+ **new AnnounceRequestContext**(`options`: [IRequestContextOptions](../interfaces/_contexts_requests_context_.irequestcontextoptions.md)): *[AnnounceRequestContext](_contexts_requests_announce_.announcerequestcontext.md)*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[constructor](_contexts_requests_context_.requestcontext.md#constructor)*

*Defined in [src/contexts/requests/context.ts:20](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/context.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [IRequestContextOptions](../interfaces/_contexts_requests_context_.irequestcontextoptions.md) |

**Returns:** *[AnnounceRequestContext](_contexts_requests_announce_.announcerequestcontext.md)*

## Properties

###  action

• **action**: *[TrackerAction](../enums/_constants_.trackeraction.md)* = TrackerAction.ANNOUNCE

*Implementation of [IAnnounceRequestContext](../interfaces/_interfaces_.iannouncerequestcontext.md).[action](../interfaces/_interfaces_.iannouncerequestcontext.md#action)*

*Overrides [RequestContext](_contexts_requests_context_.requestcontext.md).[action](_contexts_requests_context_.requestcontext.md#action)*

*Defined in [src/contexts/requests/announce.ts:18](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/announce.ts#L18)*

___

### `Protected` connection

• **connection**: *[ConnectionContextUnion](../modules/_interfaces_.md#connectioncontextunion)*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[connection](_contexts_requests_context_.requestcontext.md#protected-connection)*

*Defined in [src/contexts/requests/context.ts:18](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/context.ts#L18)*

___

### `Protected` payload

• **payload**: *[IAnnounceRequestPayload](../interfaces/_interfaces_.iannouncerequestpayload.md)*

*Overrides [RequestContext](_contexts_requests_context_.requestcontext.md).[payload](_contexts_requests_context_.requestcontext.md#protected-payload)*

*Defined in [src/contexts/requests/announce.ts:23](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/announce.ts#L23)*

___

###  response

• **response**: *[AnnounceRequestContextSendOptions](../modules/_interfaces_.md#announcerequestcontextsendoptions)*

*Defined in [src/contexts/requests/announce.ts:21](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/announce.ts#L21)*

___

###  source

• **source**: *[RequestSource](../enums/_constants_.requestsource.md)*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[source](_contexts_requests_context_.requestcontext.md#source)*

*Defined in [src/contexts/requests/context.ts:16](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/context.ts#L16)*

## Accessors

###  compact

• **get compact**(): *number*

*Defined in [src/contexts/requests/announce.ts:66](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/announce.ts#L66)*

**Returns:** *number*

___

###  downloaded

• **get downloaded**(): *bigint*

*Defined in [src/contexts/requests/announce.ts:50](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/announce.ts#L50)*

**Returns:** *bigint*

___

###  event

• **get event**(): *[AnnounceEvent](../enums/_constants_.announceevent.md)*

*Defined in [src/contexts/requests/announce.ts:76](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/announce.ts#L76)*

**Returns:** *[AnnounceEvent](../enums/_constants_.announceevent.md)*

___

###  infoHash

• **get infoHash**(): *string*

*Defined in [src/contexts/requests/announce.ts:29](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/announce.ts#L29)*

**Returns:** *string*

___

###  ip

• **get ip**(): *string*

*Defined in [src/contexts/requests/announce.ts:80](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/announce.ts#L80)*

**Returns:** *string*

___

###  isAnnounce

• **get isAnnounce**(): *boolean*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[isAnnounce](_contexts_requests_context_.requestcontext.md#isannounce)*

*Defined in [src/contexts/requests/context.ts:32](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/context.ts#L32)*

**Returns:** *boolean*

___

###  isCompact

• **get isCompact**(): *boolean*

*Defined in [src/contexts/requests/announce.ts:25](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/announce.ts#L25)*

**Returns:** *boolean*

___

###  isConnect

• **get isConnect**(): *boolean*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[isConnect](_contexts_requests_context_.requestcontext.md#isconnect)*

*Defined in [src/contexts/requests/context.ts:28](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/context.ts#L28)*

**Returns:** *boolean*

___

###  isScrape

• **get isScrape**(): *boolean*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[isScrape](_contexts_requests_context_.requestcontext.md#isscrape)*

*Defined in [src/contexts/requests/context.ts:36](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/context.ts#L36)*

**Returns:** *boolean*

___

###  isSourceHTTP

• **get isSourceHTTP**(): *boolean*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[isSourceHTTP](_contexts_requests_context_.requestcontext.md#issourcehttp)*

*Defined in [src/contexts/requests/context.ts:40](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/context.ts#L40)*

**Returns:** *boolean*

___

###  isSourceUDP

• **get isSourceUDP**(): *boolean*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[isSourceUDP](_contexts_requests_context_.requestcontext.md#issourceudp)*

*Defined in [src/contexts/requests/context.ts:44](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/context.ts#L44)*

**Returns:** *boolean*

___

###  key

• **get key**(): *string | number | undefined*

*Defined in [src/contexts/requests/announce.ts:92](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/announce.ts#L92)*

**Returns:** *string | number | undefined*

___

###  left

• **get left**(): *bigint*

*Defined in [src/contexts/requests/announce.ts:58](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/announce.ts#L58)*

**Returns:** *bigint*

___

###  noPeerId

• **get noPeerId**(): *number*

*Defined in [src/contexts/requests/announce.ts:70](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/announce.ts#L70)*

**Returns:** *number*

___

###  numwant

• **get numwant**(): *number*

*Defined in [src/contexts/requests/announce.ts:85](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/announce.ts#L85)*

**Returns:** *number*

___

###  peerId

• **get peerId**(): *string*

*Defined in [src/contexts/requests/announce.ts:33](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/announce.ts#L33)*

**Returns:** *string*

___

###  port

• **get port**(): *number*

*Defined in [src/contexts/requests/announce.ts:37](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/announce.ts#L37)*

**Returns:** *number*

___

###  requestPath

• **get requestPath**(): *string | undefined*

*Defined in [src/contexts/requests/announce.ts:100](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/announce.ts#L100)*

**Returns:** *string | undefined*

___

###  sent

• **get sent**(): *boolean*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[sent](_contexts_requests_context_.requestcontext.md#sent)*

*Defined in [src/contexts/requests/context.ts:48](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/context.ts#L48)*

**Returns:** *boolean*

___

###  trackerId

• **get trackerId**(): *string | number | undefined*

*Defined in [src/contexts/requests/announce.ts:96](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/announce.ts#L96)*

**Returns:** *string | number | undefined*

___

###  transactionId

• **get transactionId**(): *number*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[transactionId](_contexts_requests_context_.requestcontext.md#transactionid)*

*Defined in [src/contexts/requests/context.ts:52](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/context.ts#L52)*

**Returns:** *number*

___

###  uploaded

• **get uploaded**(): *bigint*

*Defined in [src/contexts/requests/announce.ts:42](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/announce.ts#L42)*

**Returns:** *bigint*

## Methods

###  [inspect.custom]

▸ **[inspect.custom]**(`depth`: number, `options`: Record‹string, any›): *string*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[[inspect.custom]](_contexts_requests_context_.requestcontext.md#[inspect.custom])*

*Defined in [src/contexts/requests/context.ts:84](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/context.ts#L84)*

Custom inspect object

**Parameters:**

Name | Type |
------ | ------ |
`depth` | number |
`options` | Record‹string, any› |

**Returns:** *string*

___

###  [inspectCustomData]

▸ **[inspectCustomData]**(): *object*

*Overrides [RequestContext](_contexts_requests_context_.requestcontext.md).[[inspectCustomData]](_contexts_requests_context_.requestcontext.md#[inspectcustomdata])*

*Defined in [src/contexts/requests/announce.ts:114](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/announce.ts#L114)*

Returns the custom data

**Returns:** *object*

___

###  send

▸ **send**(`payload`: [AnnounceRequestContextSendOptions](../modules/_interfaces_.md#announcerequestcontextsendoptions)): *Promise‹void›*

*Implementation of [IAnnounceRequestContext](../interfaces/_interfaces_.iannouncerequestcontext.md)*

*Defined in [src/contexts/requests/announce.ts:104](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/announce.ts#L104)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [AnnounceRequestContextSendOptions](../modules/_interfaces_.md#announcerequestcontextsendoptions) |

**Returns:** *Promise‹void›*

___

###  toJSON

▸ **toJSON**(): *object*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[toJSON](_contexts_requests_context_.requestcontext.md#tojson)*

*Defined in [src/contexts/requests/context.ts:60](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/context.ts#L60)*

Returns data for JSON

**Returns:** *object*
