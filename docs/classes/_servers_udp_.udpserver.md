[hybrid-torrent-tracker](../README.md) › ["servers/udp"](../modules/_servers_udp_.md) › [UDPServer](_servers_udp_.udpserver.md)

# Class: UDPServer

## Hierarchy

* **UDPServer**

## Index

### Constructors

* [constructor](_servers_udp_.udpserver.md#constructor)

### Properties

* [options](_servers_udp_.udpserver.md#protected-options)
* [stack](_servers_udp_.udpserver.md#protected-stack)
* [udp4Socket](_servers_udp_.udpserver.md#protected-udp4socket)
* [udp6Socket](_servers_udp_.udpserver.md#protected-udp6socket)

### Methods

* [chain](_servers_udp_.udpserver.md#protected-chain)
* [listen](_servers_udp_.udpserver.md#listen)
* [use](_servers_udp_.udpserver.md#use)

## Constructors

###  constructor

\+ **new UDPServer**(`options`: [IUDPServerOptions](../interfaces/_servers_udp_.iudpserveroptions.md)): *[UDPServer](_servers_udp_.udpserver.md)*

*Defined in [src/servers/udp.ts:40](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/servers/udp.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [IUDPServerOptions](../interfaces/_servers_udp_.iudpserveroptions.md) |

**Returns:** *[UDPServer](_servers_udp_.udpserver.md)*

## Properties

### `Protected` options

• **options**: *Required‹[IUDPServerOptions](../interfaces/_servers_udp_.iudpserveroptions.md)›*

*Defined in [src/servers/udp.ts:31](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/servers/udp.ts#L31)*

___

### `Protected` stack

• **stack**: *Middleware‹[RequestContext](_contexts_requests_context_.requestcontext.md)›[]* = []

*Defined in [src/servers/udp.ts:37](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/servers/udp.ts#L37)*

___

### `Protected` udp4Socket

• **udp4Socket**: *Socket*

*Defined in [src/servers/udp.ts:33](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/servers/udp.ts#L33)*

___

### `Protected` udp6Socket

• **udp6Socket**: *Socket*

*Defined in [src/servers/udp.ts:35](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/servers/udp.ts#L35)*

## Methods

### `Protected` chain

▸ **chain**(): *void*

*Defined in [src/servers/udp.ts:40](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/servers/udp.ts#L40)*

**Returns:** *void*

___

###  listen

▸ **listen**(): *Promise‹void›*

*Defined in [src/servers/udp.ts:239](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/servers/udp.ts#L239)*

Starts UDP listening

**Returns:** *Promise‹void›*

___

###  use

▸ **use**(`middlewares`: Middleware‹[RequestContext](_contexts_requests_context_.requestcontext.md)›[]): *this*

*Defined in [src/servers/udp.ts:228](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/servers/udp.ts#L228)*

Added middleware

**Parameters:**

Name | Type |
------ | ------ |
`middlewares` | Middleware‹[RequestContext](_contexts_requests_context_.requestcontext.md)›[] |

**Returns:** *this*
