[hybrid-torrent-tracker](../README.md) › ["contexts/connections/udp"](../modules/_contexts_connections_udp_.md) › [UDPConnectionContext](_contexts_connections_udp_.udpconnectioncontext.md)

# Class: UDPConnectionContext

## Hierarchy

* [ConnectionContext](_contexts_connections_context_.connectioncontext.md)

  ↳ **UDPConnectionContext**

## Implements

* [IConnectionContext](../interfaces/_interfaces_.iconnectioncontext.md)
* [IUDPConnectionContext](../interfaces/_interfaces_.iudpconnectioncontext.md)

## Index

### Constructors

* [constructor](_contexts_connections_udp_.udpconnectioncontext.md#constructor)

### Properties

* [remoteInfo](_contexts_connections_udp_.udpconnectioncontext.md#protected-remoteinfo)
* [sent](_contexts_connections_udp_.udpconnectioncontext.md#sent)
* [socket](_contexts_connections_udp_.udpconnectioncontext.md#protected-socket)

### Accessors

* [ip](_contexts_connections_udp_.udpconnectioncontext.md#ip)
* [port](_contexts_connections_udp_.udpconnectioncontext.md#port)

### Methods

* [__computed](_contexts_connections_udp_.udpconnectioncontext.md#__computed)
* [send](_contexts_connections_udp_.udpconnectioncontext.md#send)

## Constructors

###  constructor

\+ **new UDPConnectionContext**(`options`: [IUDPConnectionContextOptions](../interfaces/_contexts_connections_udp_.iudpconnectioncontextoptions.md)): *[UDPConnectionContext](_contexts_connections_udp_.udpconnectioncontext.md)*

Defined in contexts/connections/udp.ts:22

**Parameters:**

Name | Type |
------ | ------ |
`options` | [IUDPConnectionContextOptions](../interfaces/_contexts_connections_udp_.iudpconnectioncontextoptions.md) |

**Returns:** *[UDPConnectionContext](_contexts_connections_udp_.udpconnectioncontext.md)*

## Properties

### `Protected` remoteInfo

• **remoteInfo**: *RemoteInfo*

Defined in contexts/connections/udp.ts:22

___

###  sent

• **sent**: *boolean* = false

*Implementation of [IUDPConnectionContext](../interfaces/_interfaces_.iudpconnectioncontext.md).[sent](../interfaces/_interfaces_.iudpconnectioncontext.md#sent)*

*Overrides [ConnectionContext](_contexts_connections_context_.connectioncontext.md).[sent](_contexts_connections_context_.connectioncontext.md#sent)*

Defined in contexts/connections/udp.ts:18

___

### `Protected` socket

• **socket**: *Socket*

Defined in contexts/connections/udp.ts:20

## Accessors

###  ip

• **get ip**(): *string*

Defined in contexts/connections/udp.ts:31

**Returns:** *string*

___

###  port

• **get port**(): *number*

Defined in contexts/connections/udp.ts:35

**Returns:** *number*

## Methods

###  __computed

▸ **__computed**(`depth`: any, `options`: Record‹string, any›): *string*

Defined in contexts/connections/udp.ts:66

Custom inspect object

**Parameters:**

Name | Type |
------ | ------ |
`depth` | any |
`options` | Record‹string, any› |

**Returns:** *string*

___

###  send

▸ **send**(`payload`: [UDPResponseUnion](../modules/_interfaces_.md#udpresponseunion), `options`: object): *Promise‹void›*

Defined in contexts/connections/udp.ts:39

**Parameters:**

▪ **payload**: *[UDPResponseUnion](../modules/_interfaces_.md#udpresponseunion)*

▪ **options**: *object*

Name | Type |
------ | ------ |
`action` | [TrackerAction](../enums/_constants_.trackeraction.md) |

**Returns:** *Promise‹void›*
