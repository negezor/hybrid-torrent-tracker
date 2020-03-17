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

* [[inspect.custom]](_contexts_connections_udp_.udpconnectioncontext.md#[inspect.custom])
* [send](_contexts_connections_udp_.udpconnectioncontext.md#send)

## Constructors

###  constructor

\+ **new UDPConnectionContext**(`options`: [IUDPConnectionContextOptions](../interfaces/_contexts_connections_udp_.iudpconnectioncontextoptions.md)): *[UDPConnectionContext](_contexts_connections_udp_.udpconnectioncontext.md)*

*Defined in [src/contexts/connections/udp.ts:22](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/connections/udp.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [IUDPConnectionContextOptions](../interfaces/_contexts_connections_udp_.iudpconnectioncontextoptions.md) |

**Returns:** *[UDPConnectionContext](_contexts_connections_udp_.udpconnectioncontext.md)*

## Properties

### `Protected` remoteInfo

• **remoteInfo**: *RemoteInfo*

*Defined in [src/contexts/connections/udp.ts:22](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/connections/udp.ts#L22)*

___

###  sent

• **sent**: *boolean* = false

*Implementation of [IUDPConnectionContext](../interfaces/_interfaces_.iudpconnectioncontext.md).[sent](../interfaces/_interfaces_.iudpconnectioncontext.md#sent)*

*Overrides [ConnectionContext](_contexts_connections_context_.connectioncontext.md).[sent](_contexts_connections_context_.connectioncontext.md#sent)*

*Defined in [src/contexts/connections/udp.ts:18](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/connections/udp.ts#L18)*

___

### `Protected` socket

• **socket**: *Socket*

*Defined in [src/contexts/connections/udp.ts:20](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/connections/udp.ts#L20)*

## Accessors

###  ip

• **get ip**(): *string*

*Defined in [src/contexts/connections/udp.ts:31](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/connections/udp.ts#L31)*

**Returns:** *string*

___

###  port

• **get port**(): *number*

*Defined in [src/contexts/connections/udp.ts:35](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/connections/udp.ts#L35)*

**Returns:** *number*

## Methods

###  [inspect.custom]

▸ **[inspect.custom]**(`depth`: any, `options`: Record‹string, any›): *string*

*Defined in [src/contexts/connections/udp.ts:66](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/connections/udp.ts#L66)*

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

*Defined in [src/contexts/connections/udp.ts:39](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/contexts/connections/udp.ts#L39)*

**Parameters:**

▪ **payload**: *[UDPResponseUnion](../modules/_interfaces_.md#udpresponseunion)*

▪ **options**: *object*

Name | Type |
------ | ------ |
`action` | [TrackerAction](../enums/_constants_.trackeraction.md) |

**Returns:** *Promise‹void›*
