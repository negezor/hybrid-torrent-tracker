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

Defined in interfaces.ts:136

Returns the connection ip addres

___

###  port

• **port**: *number*

Defined in interfaces.ts:141

Returns the connection port

___

###  sent

• **sent**: *boolean*

*Inherited from [IConnectionContext](_interfaces_.iconnectioncontext.md).[sent](_interfaces_.iconnectioncontext.md#sent)*

Defined in interfaces.ts:98

Has an answer been sent

## Methods

###  send

▸ **send**(`payload`: [UDPResponseUnion](../modules/_interfaces_.md#udpresponseunion), `options`: object): *Promise‹void›*

Defined in interfaces.ts:146

Sends a response

**Parameters:**

▪ **payload**: *[UDPResponseUnion](../modules/_interfaces_.md#udpresponseunion)*

▪ **options**: *object*

Name | Type |
------ | ------ |
`action` | [TrackerAction](../enums/_constants_.trackeraction.md) |

**Returns:** *Promise‹void›*
