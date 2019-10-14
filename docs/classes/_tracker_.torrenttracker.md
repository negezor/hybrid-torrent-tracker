[hybrid-torrent-tracker](../README.md) › ["tracker"](../modules/_tracker_.md) › [TorrentTracker](_tracker_.torrenttracker.md)

# Class: TorrentTracker

## Hierarchy

* **TorrentTracker**

## Index

### Constructors

* [constructor](_tracker_.torrenttracker.md#constructor)

### Properties

* [servers](_tracker_.torrenttracker.md#protected-servers)
* [stack](_tracker_.torrenttracker.md#protected-stack)

### Methods

* [listen](_tracker_.torrenttracker.md#listen)
* [use](_tracker_.torrenttracker.md#use)

## Constructors

###  constructor

\+ **new TorrentTracker**(`options`: [ITorrentTrackerOptions](../interfaces/_tracker_.itorrenttrackeroptions.md)): *[TorrentTracker](_tracker_.torrenttracker.md)*

Defined in tracker.ts:32

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ITorrentTrackerOptions](../interfaces/_tracker_.itorrenttrackeroptions.md) |

**Returns:** *[TorrentTracker](_tracker_.torrenttracker.md)*

## Properties

### `Protected` servers

• **servers**: *[WebServer](_servers_web_.webserver.md) | [UDPServer](_servers_udp_.udpserver.md)[]* =  []

Defined in tracker.ts:30

___

### `Protected` stack

• **stack**: *[TorrentTrackerMiddleware](../modules/_tracker_.md#torrenttrackermiddleware)[]* =  []

Defined in tracker.ts:32

## Methods

###  listen

▸ **listen**(): *Promise‹void›*

Defined in tracker.ts:58

**Returns:** *Promise‹void›*

___

###  use

▸ **use**(`middleware`: [TorrentTrackerMiddleware](../modules/_tracker_.md#torrenttrackermiddleware)): *this*

Defined in tracker.ts:52

**Parameters:**

Name | Type |
------ | ------ |
`middleware` | [TorrentTrackerMiddleware](../modules/_tracker_.md#torrenttrackermiddleware) |

**Returns:** *this*
