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

* [[inspect.custom]](_contexts_connections_http_.httpconnectioncontext.md#[inspect.custom])
* [send](_contexts_connections_http_.httpconnectioncontext.md#send)

## Constructors

###  constructor

\+ **new HTTPConnectionContext**(`options`: [IHTTPConnectionContextOptions](../interfaces/_contexts_connections_http_.ihttpconnectioncontextoptions.md)): *[HTTPConnectionContext](_contexts_connections_http_.httpconnectioncontext.md)*

*Defined in [src/contexts/connections/http.ts:29](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/connections/http.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [IHTTPConnectionContextOptions](../interfaces/_contexts_connections_http_.ihttpconnectioncontextoptions.md) |

**Returns:** *[HTTPConnectionContext](_contexts_connections_http_.httpconnectioncontext.md)*

## Properties

###  aborted

• **aborted**: *boolean* = false

*Implementation of [IHTTPConnectionContext](../interfaces/_interfaces_.ihttpconnectioncontext.md).[aborted](../interfaces/_interfaces_.ihttpconnectioncontext.md#aborted)*

*Defined in [src/contexts/connections/http.ts:23](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/connections/http.ts#L23)*

___

### `Protected` request

• **request**: *HttpRequest*

*Defined in [src/contexts/connections/http.ts:25](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/connections/http.ts#L25)*

___

### `Protected` response

• **response**: *HttpResponse*

*Defined in [src/contexts/connections/http.ts:27](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/connections/http.ts#L27)*

___

###  sent

• **sent**: *boolean* = false

*Implementation of [IHTTPConnectionContext](../interfaces/_interfaces_.ihttpconnectioncontext.md).[sent](../interfaces/_interfaces_.ihttpconnectioncontext.md#sent)*

*Inherited from [ConnectionContext](_contexts_connections_context_.connectioncontext.md).[sent](_contexts_connections_context_.connectioncontext.md#sent)*

*Defined in [src/contexts/connections/context.ts:4](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/connections/context.ts#L4)*

___

### `Protected` trustProxy

• **trustProxy**: *boolean*

*Defined in [src/contexts/connections/http.ts:29](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/connections/http.ts#L29)*

## Accessors

###  ip

• **get ip**(): *string*

*Defined in [src/contexts/connections/http.ts:44](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/connections/http.ts#L44)*

**Returns:** *string*

___

###  url

• **get url**(): *string*

*Defined in [src/contexts/connections/http.ts:54](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/connections/http.ts#L54)*

**Returns:** *string*

## Methods

###  [inspect.custom]

▸ **[inspect.custom]**(`depth`: any, `options`: Record‹string, any›): *string*

*Defined in [src/contexts/connections/http.ts:92](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/connections/http.ts#L92)*

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

*Defined in [src/contexts/connections/http.ts:58](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/connections/http.ts#L58)*

**Parameters:**

▪ **payload**: *[HTTPResponseUnion](../modules/_interfaces_.md#httpresponseunion)*

▪ **options**: *object*

Name | Type |
------ | ------ |
`action` | [TrackerAction](../enums/_constants_.trackeraction.md) |
`statusCode?` | undefined &#124; number |

**Returns:** *Promise‹void›*
