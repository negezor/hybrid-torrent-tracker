[hybrid-torrent-tracker](../README.md) › ["contexts/requests/connection"](../modules/_contexts_requests_connection_.md) › [ConnectionRequestContext](_contexts_requests_connection_.connectionrequestcontext.md)

# Class: ConnectionRequestContext

## Hierarchy

* [RequestContext](_contexts_requests_context_.requestcontext.md)

  ↳ **ConnectionRequestContext**

## Implements

* [IRequestContext](../interfaces/_interfaces_.irequestcontext.md)
* [IConnectionRequestContext](../interfaces/_interfaces_.iconnectionrequestcontext.md)

## Index

### Constructors

* [constructor](_contexts_requests_connection_.connectionrequestcontext.md#constructor)

### Properties

* [action](_contexts_requests_connection_.connectionrequestcontext.md#action)
* [connection](_contexts_requests_connection_.connectionrequestcontext.md#protected-connection)
* [payload](_contexts_requests_connection_.connectionrequestcontext.md#protected-payload)
* [response](_contexts_requests_connection_.connectionrequestcontext.md#response)
* [source](_contexts_requests_connection_.connectionrequestcontext.md#source)

### Accessors

* [connectionId](_contexts_requests_connection_.connectionrequestcontext.md#connectionid)
* [isAnnounce](_contexts_requests_connection_.connectionrequestcontext.md#isannounce)
* [isConnect](_contexts_requests_connection_.connectionrequestcontext.md#isconnect)
* [isScrape](_contexts_requests_connection_.connectionrequestcontext.md#isscrape)
* [isSourceHTTP](_contexts_requests_connection_.connectionrequestcontext.md#issourcehttp)
* [isSourceUDP](_contexts_requests_connection_.connectionrequestcontext.md#issourceudp)
* [sent](_contexts_requests_connection_.connectionrequestcontext.md#sent)
* [transactionId](_contexts_requests_connection_.connectionrequestcontext.md#transactionid)

### Methods

* [[inspect.custom]](_contexts_requests_connection_.connectionrequestcontext.md#[inspect.custom])
* [[inspectCustomData]](_contexts_requests_connection_.connectionrequestcontext.md#[inspectcustomdata])
* [send](_contexts_requests_connection_.connectionrequestcontext.md#send)
* [toJSON](_contexts_requests_connection_.connectionrequestcontext.md#tojson)

## Constructors

###  constructor

\+ **new ConnectionRequestContext**(`options`: [IRequestContextOptions](../interfaces/_contexts_requests_context_.irequestcontextoptions.md)): *[ConnectionRequestContext](_contexts_requests_connection_.connectionrequestcontext.md)*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[constructor](_contexts_requests_context_.requestcontext.md#constructor)*

*Defined in [src/contexts/requests/context.ts:20](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/context.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [IRequestContextOptions](../interfaces/_contexts_requests_context_.irequestcontextoptions.md) |

**Returns:** *[ConnectionRequestContext](_contexts_requests_connection_.connectionrequestcontext.md)*

## Properties

###  action

• **action**: *[TrackerAction](../enums/_constants_.trackeraction.md)* = TrackerAction.CONNECT

*Implementation of [IConnectionRequestContext](../interfaces/_interfaces_.iconnectionrequestcontext.md).[action](../interfaces/_interfaces_.iconnectionrequestcontext.md#action)*

*Overrides [RequestContext](_contexts_requests_context_.requestcontext.md).[action](_contexts_requests_context_.requestcontext.md#action)*

*Defined in [src/contexts/requests/connection.ts:12](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/connection.ts#L12)*

___

### `Protected` connection

• **connection**: *[ConnectionContextUnion](../modules/_interfaces_.md#connectioncontextunion)*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[connection](_contexts_requests_context_.requestcontext.md#protected-connection)*

*Defined in [src/contexts/requests/context.ts:18](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/context.ts#L18)*

___

### `Protected` payload

• **payload**: *[IConnectionRequestPayload](../interfaces/_interfaces_.iconnectionrequestpayload.md)*

*Overrides [RequestContext](_contexts_requests_context_.requestcontext.md).[payload](_contexts_requests_context_.requestcontext.md#protected-payload)*

*Defined in [src/contexts/requests/connection.ts:17](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/connection.ts#L17)*

___

###  response

• **response**: *[ConnectionRequestContextSendOptions](../modules/_interfaces_.md#connectionrequestcontextsendoptions)*

*Defined in [src/contexts/requests/connection.ts:15](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/connection.ts#L15)*

___

###  source

• **source**: *[RequestSource](../enums/_constants_.requestsource.md)*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[source](_contexts_requests_context_.requestcontext.md#source)*

*Defined in [src/contexts/requests/context.ts:16](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/context.ts#L16)*

## Accessors

###  connectionId

• **get connectionId**(): *bigint*

*Defined in [src/contexts/requests/connection.ts:19](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/connection.ts#L19)*

**Returns:** *bigint*

___

###  isAnnounce

• **get isAnnounce**(): *boolean*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[isAnnounce](_contexts_requests_context_.requestcontext.md#isannounce)*

*Defined in [src/contexts/requests/context.ts:32](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/context.ts#L32)*

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

###  sent

• **get sent**(): *boolean*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[sent](_contexts_requests_context_.requestcontext.md#sent)*

*Defined in [src/contexts/requests/context.ts:48](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/context.ts#L48)*

**Returns:** *boolean*

___

###  transactionId

• **get transactionId**(): *number*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[transactionId](_contexts_requests_context_.requestcontext.md#transactionid)*

*Defined in [src/contexts/requests/context.ts:52](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/context.ts#L52)*

**Returns:** *number*

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

*Defined in [src/contexts/requests/connection.ts:33](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/connection.ts#L33)*

Returns the custom data

**Returns:** *object*

___

###  send

▸ **send**(`payload`: [ConnectionRequestContextSendOptions](../modules/_interfaces_.md#connectionrequestcontextsendoptions)): *Promise‹void›*

*Implementation of [IConnectionRequestContext](../interfaces/_interfaces_.iconnectionrequestcontext.md)*

*Defined in [src/contexts/requests/connection.ts:23](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/connection.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [ConnectionRequestContextSendOptions](../modules/_interfaces_.md#connectionrequestcontextsendoptions) |

**Returns:** *Promise‹void›*

___

###  toJSON

▸ **toJSON**(): *object*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[toJSON](_contexts_requests_context_.requestcontext.md#tojson)*

*Defined in [src/contexts/requests/context.ts:60](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/requests/context.ts#L60)*

Returns data for JSON

**Returns:** *object*
