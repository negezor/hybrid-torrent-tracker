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

* [__computed](_contexts_requests_connection_.connectionrequestcontext.md#__computed)
* [send](_contexts_requests_connection_.connectionrequestcontext.md#send)
* [toJSON](_contexts_requests_connection_.connectionrequestcontext.md#tojson)

## Constructors

###  constructor

\+ **new ConnectionRequestContext**(`options`: [IRequestContextOptions](../interfaces/_contexts_requests_context_.irequestcontextoptions.md)): *[ConnectionRequestContext](_contexts_requests_connection_.connectionrequestcontext.md)*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[constructor](_contexts_requests_context_.requestcontext.md#constructor)*

Defined in contexts/requests/context.ts:20

**Parameters:**

Name | Type |
------ | ------ |
`options` | [IRequestContextOptions](../interfaces/_contexts_requests_context_.irequestcontextoptions.md) |

**Returns:** *[ConnectionRequestContext](_contexts_requests_connection_.connectionrequestcontext.md)*

## Properties

###  action

• **action**: *[TrackerAction](../enums/_constants_.trackeraction.md)* =  TrackerAction.CONNECT

*Implementation of [IConnectionRequestContext](../interfaces/_interfaces_.iconnectionrequestcontext.md).[action](../interfaces/_interfaces_.iconnectionrequestcontext.md#action)*

*Overrides [RequestContext](_contexts_requests_context_.requestcontext.md).[action](_contexts_requests_context_.requestcontext.md#action)*

Defined in contexts/requests/connection.ts:12

___

### `Protected` connection

• **connection**: *[ConnectionContextUnion](../modules/_interfaces_.md#connectioncontextunion)*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[connection](_contexts_requests_context_.requestcontext.md#protected-connection)*

Defined in contexts/requests/context.ts:18

___

### `Protected` payload

• **payload**: *[IConnectionRequestPayload](../interfaces/_interfaces_.iconnectionrequestpayload.md)*

*Overrides [RequestContext](_contexts_requests_context_.requestcontext.md).[payload](_contexts_requests_context_.requestcontext.md#protected-payload)*

Defined in contexts/requests/connection.ts:17

___

###  response

• **response**: *[ConnectionRequestContextSendOptions](../modules/_interfaces_.md#connectionrequestcontextsendoptions)*

Defined in contexts/requests/connection.ts:15

___

###  source

• **source**: *[RequestSource](../enums/_constants_.requestsource.md)*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[source](_contexts_requests_context_.requestcontext.md#source)*

Defined in contexts/requests/context.ts:16

## Accessors

###  connectionId

• **get connectionId**(): *bigint*

Defined in contexts/requests/connection.ts:19

**Returns:** *bigint*

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

Defined in contexts/requests/connection.ts:33

Returns the custom data

**Returns:** *object*

___

###  send

▸ **send**(`payload`: [ConnectionRequestContextSendOptions](../modules/_interfaces_.md#connectionrequestcontextsendoptions)): *Promise‹void›*

*Implementation of [IConnectionRequestContext](../interfaces/_interfaces_.iconnectionrequestcontext.md)*

Defined in contexts/requests/connection.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [ConnectionRequestContextSendOptions](../modules/_interfaces_.md#connectionrequestcontextsendoptions) |

**Returns:** *Promise‹void›*

___

###  toJSON

▸ **toJSON**(): *object*

*Inherited from [RequestContext](_contexts_requests_context_.requestcontext.md).[toJSON](_contexts_requests_context_.requestcontext.md#tojson)*

Defined in contexts/requests/context.ts:60

Returns data for JSON

**Returns:** *object*
