[hybrid-torrent-tracker](../README.md) › ["servers/web"](../modules/_servers_web_.md) › [WebServer](_servers_web_.webserver.md)

# Class: WebServer

## Hierarchy

* **WebServer**

## Index

### Constructors

* [constructor](_servers_web_.webserver.md#constructor)

### Properties

* [app](_servers_web_.webserver.md#protected-app)
* [options](_servers_web_.webserver.md#protected-options)
* [stack](_servers_web_.webserver.md#protected-stack)

### Methods

* [chain](_servers_web_.webserver.md#protected-chain)
* [listen](_servers_web_.webserver.md#listen)
* [use](_servers_web_.webserver.md#use)

## Constructors

###  constructor

\+ **new WebServer**(`options`: [IWebServerOptions](../interfaces/_servers_web_.iwebserveroptions.md)): *[WebServer](_servers_web_.webserver.md)*

Defined in servers/web.ts:29

**Parameters:**

Name | Type |
------ | ------ |
`options` | [IWebServerOptions](../interfaces/_servers_web_.iwebserveroptions.md) |

**Returns:** *[WebServer](_servers_web_.webserver.md)*

## Properties

### `Protected` app

• **app**: *TemplatedApp*

Defined in servers/web.ts:25

___

### `Protected` options

• **options**: *Required‹[IWebServerOptions](../interfaces/_servers_web_.iwebserveroptions.md)›*

Defined in servers/web.ts:23

___

### `Protected` stack

• **stack**: *Middleware‹[RequestContext](_contexts_requests_context_.requestcontext.md)›[]* =  []

Defined in servers/web.ts:27

## Methods

### `Protected` chain

▸ **chain**(): *void*

Defined in servers/web.ts:29

**Returns:** *void*

___

###  listen

▸ **listen**(): *Promise‹void›*

Defined in servers/web.ts:157

Starts HTTP listening

**Returns:** *Promise‹void›*

___

###  use

▸ **use**(`middlewares`: Middleware‹[RequestContext](_contexts_requests_context_.requestcontext.md)›[]): *this*

Defined in servers/web.ts:146

Added middleware

**Parameters:**

Name | Type |
------ | ------ |
`middlewares` | Middleware‹[RequestContext](_contexts_requests_context_.requestcontext.md)›[] |

**Returns:** *this*
