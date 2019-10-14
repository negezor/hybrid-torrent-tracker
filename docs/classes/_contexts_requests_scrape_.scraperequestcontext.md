[hybrid-torrent-tracker](../README.md) › ["contexts/requests/scrape"](../modules/_contexts_requests_scrape_.md) › [ScrapeRequestContext](_contexts_requests_scrape_.scraperequestcontext.md)

# Class: ScrapeRequestContext

## Hierarchy

* [RequestContext](_contexts_requests_context_.requestcontext.md)

  ↳ **ScrapeRequestContext**

## Implements

* [IRequestContext](../interfaces/_interfaces_.irequestcontext.md)
* [IScrapeRequestContext](../interfaces/_interfaces_.iscraperequestcontext.md)

## Index

### Constructors

* [constructor](_contexts_requests_scrape_.scraperequestcontext.md#constructor)

### Properties

* [action](_contexts_requests_scrape_.scraperequestcontext.md#action)
* [connection](_contexts_requests_scrape_.scraperequestcontext.md#protected-connection)
* [payload](_contexts_requests_scrape_.scraperequestcontext.md#protected-payload)
* [response](_contexts_requests_scrape_.scraperequestcontext.md#response)
* [source](_contexts_requests_scrape_.scraperequestcontext.md#source)

### Accessors

* [infoHashes](_contexts_requests_scrape_.scraperequestcontext.md#infohashes)
* [isAnnounce](_contexts_requests_scrape_.scraperequestcontext.md#isannounce)
* [isConnect](_contexts_requests_scrape_.scraperequestcontext.md#isconnect)
* [isScrape](_contexts_requests_scrape_.scraperequestcontext.md#isscrape)
* [isSourceHTTP](_contexts_requests_scrape_.scraperequestcontext.md#issourcehttp)
* [isSourceUDP](_contexts_requests_scrape_.scraperequestcontext.md#issourceudp)
* [sent](_contexts_requests_scrape_.scraperequestcontext.md#sent)
* [transactionId](_contexts_requests_scrape_.scraperequestcontext.md#transactionid)

### Methods

* [__computed](_contexts_requests_scrape_.scraperequestcontext.md#__computed)
* [send](_contexts_requests_scrape_.scraperequestcontext.md#send)
* [toJSON](_contexts_requests_scrape_.scraperequestcontext.md#tojson)

## Constructors

###  constructor

\+ **new ScrapeRequestContext**(`options`: [IRequestContextOptions](../interfaces/_contexts_requests_context_.irequestcontextoptions.md)): *[ScrapeRequestContext](_contexts_requests_scrape_.scraperequestcontext.md)*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[constructor](_contexts_requests_context_.requestcontext.md#constructor)*

Defined in contexts/requests/context.ts:20

**Parameters:**

Name | Type |
------ | ------ |
`options` | [IRequestContextOptions](../interfaces/_contexts_requests_context_.irequestcontextoptions.md) |

**Returns:** *[ScrapeRequestContext](_contexts_requests_scrape_.scraperequestcontext.md)*

## Properties

###  action

• **action**: *[TrackerAction](../enums/_constants_.trackeraction.md)* =  TrackerAction.SCRAPE

*Implementation of [IScrapeRequestContext](../interfaces/_interfaces_.iscraperequestcontext.md).[action](../interfaces/_interfaces_.iscraperequestcontext.md#action)*

*Overrides [RequestContext](_contexts_requests_context_.requestcontext.md).[action](_contexts_requests_context_.requestcontext.md#action)*

Defined in contexts/requests/scrape.ts:12

___

### `Protected` connection

• **connection**: *[ConnectionContextUnion](../modules/_interfaces_.md#connectioncontextunion)*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[connection](_contexts_requests_context_.requestcontext.md#protected-connection)*

Defined in contexts/requests/context.ts:18

___

### `Protected` payload

• **payload**: *[IScrapeRequestPayload](../interfaces/_interfaces_.iscraperequestpayload.md)*

*Overrides [RequestContext](_contexts_requests_context_.requestcontext.md).[payload](_contexts_requests_context_.requestcontext.md#protected-payload)*

Defined in contexts/requests/scrape.ts:17

___

###  response

• **response**: *[ScrapeRequestContextSendOptions](../modules/_interfaces_.md#scraperequestcontextsendoptions)*

Defined in contexts/requests/scrape.ts:15

___

###  source

• **source**: *[RequestSource](../enums/_constants_.requestsource.md)*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[source](_contexts_requests_context_.requestcontext.md#source)*

Defined in contexts/requests/context.ts:16

## Accessors

###  infoHashes

• **get infoHashes**(): *string[]*

Defined in contexts/requests/scrape.ts:19

**Returns:** *string[]*

___

###  isAnnounce

• **get isAnnounce**(): *boolean*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[isAnnounce](_contexts_requests_context_.requestcontext.md#isannounce)*

Defined in contexts/requests/context.ts:32

**Returns:** *boolean*

___

###  isConnect

• **get isConnect**(): *boolean*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[isConnect](_contexts_requests_context_.requestcontext.md#isconnect)*

Defined in contexts/requests/context.ts:28

**Returns:** *boolean*

___

###  isScrape

• **get isScrape**(): *boolean*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[isScrape](_contexts_requests_context_.requestcontext.md#isscrape)*

Defined in contexts/requests/context.ts:36

**Returns:** *boolean*

___

###  isSourceHTTP

• **get isSourceHTTP**(): *boolean*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[isSourceHTTP](_contexts_requests_context_.requestcontext.md#issourcehttp)*

Defined in contexts/requests/context.ts:40

**Returns:** *boolean*

___

###  isSourceUDP

• **get isSourceUDP**(): *boolean*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[isSourceUDP](_contexts_requests_context_.requestcontext.md#issourceudp)*

Defined in contexts/requests/context.ts:44

**Returns:** *boolean*

___

###  sent

• **get sent**(): *boolean*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[sent](_contexts_requests_context_.requestcontext.md#sent)*

Defined in contexts/requests/context.ts:48

**Returns:** *boolean*

___

###  transactionId

• **get transactionId**(): *number*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[transactionId](_contexts_requests_context_.requestcontext.md#transactionid)*

Defined in contexts/requests/context.ts:52

**Returns:** *number*

## Methods

###  __computed

▸ **__computed**(): *object*

*Overrides [RequestContext](_contexts_requests_context_.requestcontext.md).[__computed](_contexts_requests_context_.requestcontext.md#__computed)*

Defined in contexts/requests/scrape.ts:33

Returns the custom data

**Returns:** *object*

___

###  send

▸ **send**(`payload`: [ScrapeRequestContextSendOptions](../modules/_interfaces_.md#scraperequestcontextsendoptions)): *Promise‹void›*

*Implementation of [IScrapeRequestContext](../interfaces/_interfaces_.iscraperequestcontext.md)*

Defined in contexts/requests/scrape.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [ScrapeRequestContextSendOptions](../modules/_interfaces_.md#scraperequestcontextsendoptions) |

**Returns:** *Promise‹void›*

___

###  toJSON

▸ **toJSON**(): *object*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[toJSON](_contexts_requests_context_.requestcontext.md#tojson)*

Defined in contexts/requests/context.ts:60

Returns data for JSON

**Returns:** *object*
