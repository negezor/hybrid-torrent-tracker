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

*Defined in [src/servers/web.ts:31](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/servers/web.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [IWebServerOptions](../interfaces/_servers_web_.iwebserveroptions.md) |

**Returns:** *[WebServer](_servers_web_.webserver.md)*

## Properties

### `Protected` app

• **app**: *TemplatedApp*

*Defined in [src/servers/web.ts:26](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/servers/web.ts#L26)*

___

### `Protected` options

• **options**: *Required‹[IWebServerOptions](../interfaces/_servers_web_.iwebserveroptions.md)›*

*Defined in [src/servers/web.ts:24](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/servers/web.ts#L24)*

___

### `Protected` stack

• **stack**: *Middleware‹[RequestContext](_contexts_requests_context_.requestcontext.md)›[]* = []

*Defined in [src/servers/web.ts:28](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/servers/web.ts#L28)*

## Methods

### `Protected` chain

▸ **chain**(): *void*

*Defined in [src/servers/web.ts:31](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/servers/web.ts#L31)*

**Returns:** *void*

___

###  listen

▸ **listen**(): *Promise‹void›*

*Defined in [src/servers/web.ts:159](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/servers/web.ts#L159)*

Starts HTTP listening

**Returns:** *Promise‹void›*

___

###  use

▸ **use**(`middlewares`: Middleware‹[RequestContext](_contexts_requests_context_.requestcontext.md)›[]): *this*

*Defined in [src/servers/web.ts:148](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/servers/web.ts#L148)*

Added middleware

**Parameters:**

Name | Type |
------ | ------ |
`middlewares` | Middleware‹[RequestContext](_contexts_requests_context_.requestcontext.md)›[] |

**Returns:** *this*
