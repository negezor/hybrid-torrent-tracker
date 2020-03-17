[hybrid-torrent-tracker](../README.md) › ["interfaces"](../modules/_interfaces_.md) › [IUDPConnectionContext](_interfaces_.iudpconnectioncontext.md)

# Interface: IUDPConnectionContext

Basic UDP connection information

## Hierarchy

* [IConnectionContext](_interfaces_.iconnectioncontext.md)

  ↳ **IUDPConnectionContext**

## Implemented by

* [UDPConnectionContext](../classes/_contexts_connections_udp_.udpconnectioncontext.md)

## Index

### Properties

* [ip](_interfaces_.iudpconnectioncontext.md#ip)
* [port](_interfaces_.iudpconnectioncontext.md#port)
* [sent](_interfaces_.iudpconnectioncontext.md#sent)

### Methods

* [send](_interfaces_.iudpconnectioncontext.md#send)

## Properties

###  ip

• **ip**: *string*

*Defined in [src/interfaces.ts:136](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/interfaces.ts#L136)*

Returns the connection ip addres

___

###  port

• **port**: *number*

*Defined in [src/interfaces.ts:141](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/interfaces.ts#L141)*

Returns the connection port

___

###  sent

• **sent**: *boolean*

*Inherited from [IConnectionContext](_interfaces_.iconnectioncontext.md).[sent](_interfaces_.iconnectioncontext.md#sent)*

*Defined in [src/interfaces.ts:98](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/interfaces.ts#L98)*

Has an answer been sent

## Methods

###  send

▸ **send**(`payload`: [UDPResponseUnion](../modules/_interfaces_.md#udpresponseunion), `options`: object): *Promise‹void›*

*Defined in [src/interfaces.ts:146](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/interfaces.ts#L146)*

Sends a response

**Parameters:**

▪ **payload**: *[UDPResponseUnion](../modules/_interfaces_.md#udpresponseunion)*

▪ **options**: *object*

Name | Type |
------ | ------ |
`action` | [TrackerAction](../enums/_constants_.trackeraction.md) |

**Returns:** *Promise‹void›*
