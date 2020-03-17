[hybrid-torrent-tracker](../README.md) › ["contexts/requests/context"](../modules/_contexts_requests_context_.md) › [RequestContext](_contexts_requests_context_.requestcontext.md)

# Class: RequestContext

## Hierarchy

* **RequestContext**

  ↳ [AnnounceRequestContext](_contexts_requests_announce_.announcerequestcontext.md)

  ↳ [ConnectionRequestContext](_contexts_requests_connection_.connectionrequestcontext.md)

  ↳ [ScrapeRequestContext](_contexts_requests_scrape_.scraperequestcontext.md)

## Implements

* [IRequestContext](../interfaces/_interfaces_.irequestcontext.md)

## Index

### Constructors

* [constructor](_contexts_requests_context_.requestcontext.md#constructor)

### Properties

* [action](_contexts_requests_context_.requestcontext.md#action)
* [connection](_contexts_requests_context_.requestcontext.md#protected-connection)
* [payload](_contexts_requests_context_.requestcontext.md#protected-payload)
* [source](_contexts_requests_context_.requestcontext.md#source)

### Accessors

* [isAnnounce](_contexts_requests_context_.requestcontext.md#isannounce)
* [isConnect](_contexts_requests_context_.requestcontext.md#isconnect)
* [isScrape](_contexts_requests_context_.requestcontext.md#isscrape)
* [isSourceHTTP](_contexts_requests_context_.requestcontext.md#issourcehttp)
* [isSourceUDP](_contexts_requests_context_.requestcontext.md#issourceudp)
* [sent](_contexts_requests_context_.requestcontext.md#sent)
* [transactionId](_contexts_requests_context_.requestcontext.md#transactionid)

### Methods

* [[inspect.custom]](_contexts_requests_context_.requestcontext.md#[inspect.custom])
* [[inspectCustomData]](_contexts_requests_context_.requestcontext.md#[inspectcustomdata])
* [toJSON](_contexts_requests_context_.requestcontext.md#tojson)

## Constructors

###  constructor

\+ **new RequestContext**(`options`: [IRequestContextOptions](../interfaces/_contexts_requests_context_.irequestcontextoptions.md)): *[RequestContext](_contexts_requests_context_.requestcontext.md)*

*Defined in [src/contexts/requests/context.ts:20](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/context.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [IRequestContextOptions](../interfaces/_contexts_requests_context_.irequestcontextoptions.md) |

**Returns:** *[RequestContext](_contexts_requests_context_.requestcontext.md)*

## Properties

###  action

• **action**: *[TrackerAction](../enums/_constants_.trackeraction.md)*

*Implementation of [IRequestContext](../interfaces/_interfaces_.irequestcontext.md).[action](../interfaces/_interfaces_.irequestcontext.md#action)*

*Defined in [src/contexts/requests/context.ts:14](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/context.ts#L14)*

___

### `Protected` connection

• **connection**: *[ConnectionContextUnion](../modules/_interfaces_.md#connectioncontextunion)*

*Defined in [src/contexts/requests/context.ts:18](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/context.ts#L18)*

___

### `Protected` payload

• **payload**: *[RequestPayloadUnion](../modules/_interfaces_.md#requestpayloadunion)*

*Defined in [src/contexts/requests/context.ts:20](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/context.ts#L20)*

___

###  source

• **source**: *[RequestSource](../enums/_constants_.requestsource.md)*

*Defined in [src/contexts/requests/context.ts:16](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/context.ts#L16)*

## Accessors

###  isAnnounce

• **get isAnnounce**(): *boolean*

*Defined in [src/contexts/requests/context.ts:32](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/context.ts#L32)*

**Returns:** *boolean*

___

###  isConnect

• **get isConnect**(): *boolean*

*Defined in [src/contexts/requests/context.ts:28](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/context.ts#L28)*

**Returns:** *boolean*

___

###  isScrape

• **get isScrape**(): *boolean*

*Defined in [src/contexts/requests/context.ts:36](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/context.ts#L36)*

**Returns:** *boolean*

___

###  isSourceHTTP

• **get isSourceHTTP**(): *boolean*

*Defined in [src/contexts/requests/context.ts:40](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/context.ts#L40)*

**Returns:** *boolean*

___

###  isSourceUDP

• **get isSourceUDP**(): *boolean*

*Defined in [src/contexts/requests/context.ts:44](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/context.ts#L44)*

**Returns:** *boolean*

___

###  sent

• **get sent**(): *boolean*

*Defined in [src/contexts/requests/context.ts:48](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/context.ts#L48)*

**Returns:** *boolean*

___

###  transactionId

• **get transactionId**(): *number*

*Defined in [src/contexts/requests/context.ts:52](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/context.ts#L52)*

**Returns:** *number*

## Methods

###  [inspect.custom]

▸ **[inspect.custom]**(`depth`: number, `options`: Record‹string, any›): *string*

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

*Defined in [src/contexts/requests/context.ts:73](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/context.ts#L73)*

Returns the custom data

**Returns:** *object*

___

###  toJSON

▸ **toJSON**(): *object*

*Defined in [src/contexts/requests/context.ts:60](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/context.ts#L60)*

Returns data for JSON

**Returns:** *object*
