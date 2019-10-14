[hybrid-torrent-tracker](../README.md) › ["contexts/connections/http"](../modules/_contexts_connections_http_.md) › [HTTPConnectionContext](_contexts_connections_http_.httpconnectioncontext.md)

# Class: HTTPConnectionContext

## Hierarchy

* [ConnectionContext](_contexts_connections_context_.connectioncontext.md)

  ↳ **HTTPConnectionContext**

## Implements

* [IConnectionContext](../interfaces/_interfaces_.iconnectioncontext.md)
* [IHTTPConnectionContext](../interfaces/_interfaces_.ihttpconnectioncontext.md)

## Index

### Constructors

* [constructor](_contexts_connections_http_.httpconnectioncontext.md#constructor)

### Properties

* [aborted](_contexts_connections_http_.httpconnectioncontext.md#aborted)
* [request](_contexts_connections_http_.httpconnectioncontext.md#protected-request)
* [response](_contexts_connections_http_.httpconnectioncontext.md#protected-response)
* [sent](_contexts_connections_http_.httpconnectioncontext.md#sent)
* [trustProxy](_contexts_connections_http_.httpconnectioncontext.md#protected-trustproxy)

### Accessors

* [ip](_contexts_connections_http_.httpconnectioncontext.md#ip)
* [url](_contexts_connections_http_.httpconnectioncontext.md#url)

### Methods

* [__computed](_contexts_connections_http_.httpconnectioncontext.md#__computed)
* [send](_contexts_connections_http_.httpconnectioncontext.md#send)

## Constructors

###  constructor

\+ **new HTTPConnectionContext**(`options`: [IHTTPConnectionContextOptions](../interfaces/_contexts_connections_http_.ihttpconnectioncontextoptions.md)): *[HTTPConnectionContext](_contexts_connections_http_.httpconnectioncontext.md)*

Defined in contexts/connections/http.ts:29

**Parameters:**

Name | Type |
------ | ------ |
`options` | [IHTTPConnectionContextOptions](../interfaces/_contexts_connections_http_.ihttpconnectioncontextoptions.md) |

**Returns:** *[HTTPConnectionContext](_contexts_connections_http_.httpconnectioncontext.md)*

## Properties

###  aborted

• **aborted**: *boolean* = false

*Implementation of [IHTTPConnectionContext](../interfaces/_interfaces_.ihttpconnectioncontext.md).[aborted](../interfaces/_interfaces_.ihttpconnectioncontext.md#aborted)*

Defined in contexts/connections/http.ts:23

___

### `Protected` request

• **request**: *HttpRequest*

Defined in contexts/connections/http.ts:25

___

### `Protected` response

• **response**: *HttpResponse*

Defined in contexts/connections/http.ts:27

___

###  sent

• **sent**: *boolean* = false

*Implementation of [IHTTPConnectionContext](../interfaces/_interfaces_.ihttpconnectioncontext.md).[sent](../interfaces/_interfaces_.ihttpconnectioncontext.md#sent)*

*Inherited from [ConnectionContext](_contexts_connections_context_.connectioncontext.md).[sent](_contexts_connections_context_.connectioncontext.md#sent)*

Defined in contexts/connections/context.ts:4

___

### `Protected` trustProxy

• **trustProxy**: *boolean*

Defined in contexts/connections/http.ts:29

## Accessors

###  ip

• **get ip**(): *string*

Defined in contexts/connections/http.ts:44

**Returns:** *string*

___

###  url

• **get url**(): *string*

Defined in contexts/connections/http.ts:54

**Returns:** *string*

## Methods

###  __computed

▸ **__computed**(`depth`: any, `options`: Record‹string, any›): *string*

Defined in contexts/connections/http.ts:92

Custom inspect object

**Parameters:**

Name | Type |
------ | ------ |
`depth` | any |
`options` | Record‹string, any› |

**Returns:** *string*

___

###  send

▸ **send**(`payload`: [HTTPResponseUnion](../modules/_interfaces_.md#httpresponseunion), `options`: object): *Promise‹void›*

Defined in contexts/connections/http.ts:58

**Parameters:**

▪ **payload**: *[HTTPResponseUnion](../modules/_interfaces_.md#httpresponseunion)*

▪ **options**: *object*

Name | Type |
------ | ------ |
`action` | TrackerAction |
`statusCode?` | undefined &#124; number |

**Returns:** *Promise‹void›*
