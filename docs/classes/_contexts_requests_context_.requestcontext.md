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

* [__computed](_contexts_requests_context_.requestcontext.md#__computed)
* [toJSON](_contexts_requests_context_.requestcontext.md#tojson)

## Constructors

###  constructor

\+ **new RequestContext**(`options`: [IRequestContextOptions](../interfaces/_contexts_requests_context_.irequestcontextoptions.md)): *[RequestContext](_contexts_requests_context_.requestcontext.md)*

Defined in contexts/requests/context.ts:20

**Parameters:**

Name | Type |
------ | ------ |
`options` | [IRequestContextOptions](../interfaces/_contexts_requests_context_.irequestcontextoptions.md) |

**Returns:** *[RequestContext](_contexts_requests_context_.requestcontext.md)*

## Properties

###  action

• **action**: *[TrackerAction](../enums/_constants_.trackeraction.md)*

*Implementation of [IRequestContext](../interfaces/_interfaces_.irequestcontext.md).[action](../interfaces/_interfaces_.irequestcontext.md#action)*

Defined in contexts/requests/context.ts:14

___

### `Protected` connection

• **connection**: *[ConnectionContextUnion](../modules/_interfaces_.md#connectioncontextunion)*

Defined in contexts/requests/context.ts:18

___

### `Protected` payload

• **payload**: *[RequestPayloadUnion](../modules/_interfaces_.md#requestpayloadunion)*

Defined in contexts/requests/context.ts:20

___

###  source

• **source**: *[RequestSource](../enums/_constants_.requestsource.md)*

Defined in contexts/requests/context.ts:16

## Accessors

###  isAnnounce

• **get isAnnounce**(): *boolean*

Defined in contexts/requests/context.ts:32

**Returns:** *boolean*

___

###  isConnect

• **get isConnect**(): *boolean*

Defined in contexts/requests/context.ts:28

**Returns:** *boolean*

___

###  isScrape

• **get isScrape**(): *boolean*

Defined in contexts/requests/context.ts:36

**Returns:** *boolean*

___

###  isSourceHTTP

• **get isSourceHTTP**(): *boolean*

Defined in contexts/requests/context.ts:40

**Returns:** *boolean*

___

###  isSourceUDP

• **get isSourceUDP**(): *boolean*

Defined in contexts/requests/context.ts:44

**Returns:** *boolean*

___

###  sent

• **get sent**(): *boolean*

Defined in contexts/requests/context.ts:48

**Returns:** *boolean*

___

###  transactionId

• **get transactionId**(): *number*

Defined in contexts/requests/context.ts:52

**Returns:** *number*

## Methods

###  __computed

▸ **__computed**(): *object*

Defined in contexts/requests/context.ts:73

Returns the custom data

**Returns:** *object*

___

###  toJSON

▸ **toJSON**(): *object*

Defined in contexts/requests/context.ts:60

Returns data for JSON

**Returns:** *object*
