[hybrid-torrent-tracker](../README.md) › ["interfaces"](../modules/_interfaces_.md) › [IAnnounceRequestContext](_interfaces_.iannouncerequestcontext.md)

# Interface: IAnnounceRequestContext

Request announce

**`see`** https://wiki.theory.org/index.php/BitTorrentSpecification#Tracker_Request_Parameters

## Hierarchy

* [IRequestContext](_interfaces_.irequestcontext.md)

  ↳ **IAnnounceRequestContext**

## Implemented by

* [AnnounceRequestContext](../classes/_contexts_requests_announce_.announcerequestcontext.md)

## Index

### Properties

* [action](_interfaces_.iannouncerequestcontext.md#action)
* [addres](_interfaces_.iannouncerequestcontext.md#addres)
* [compact](_interfaces_.iannouncerequestcontext.md#compact)
* [downloaded](_interfaces_.iannouncerequestcontext.md#downloaded)
* [event](_interfaces_.iannouncerequestcontext.md#event)
* [infoHash](_interfaces_.iannouncerequestcontext.md#infohash)
* [ip](_interfaces_.iannouncerequestcontext.md#ip)
* [isAnnounce](_interfaces_.iannouncerequestcontext.md#isannounce)
* [isCompact](_interfaces_.iannouncerequestcontext.md#iscompact)
* [isConnect](_interfaces_.iannouncerequestcontext.md#isconnect)
* [isScrape](_interfaces_.iannouncerequestcontext.md#isscrape)
* [isSourceHTTP](_interfaces_.iannouncerequestcontext.md#issourcehttp)
* [isSourceUDP](_interfaces_.iannouncerequestcontext.md#issourceudp)
* [key](_interfaces_.iannouncerequestcontext.md#optional-key)
* [left](_interfaces_.iannouncerequestcontext.md#left)
* [noPeerId](_interfaces_.iannouncerequestcontext.md#nopeerid)
* [numwant](_interfaces_.iannouncerequestcontext.md#numwant)
* [peerId](_interfaces_.iannouncerequestcontext.md#peerid)
* [port](_interfaces_.iannouncerequestcontext.md#port)
* [requestPath](_interfaces_.iannouncerequestcontext.md#optional-requestpath)
* [sent](_interfaces_.iannouncerequestcontext.md#sent)
* [trackerId](_interfaces_.iannouncerequestcontext.md#optional-trackerid)
* [transactionId](_interfaces_.iannouncerequestcontext.md#transactionid)
* [uploaded](_interfaces_.iannouncerequestcontext.md#uploaded)

### Methods

* [send](_interfaces_.iannouncerequestcontext.md#send)

## Properties

###  action

• **action**: *[ANNOUNCE](../enums/_constants_.trackeraction.md#announce)*

*Overrides [IRequestContext](_interfaces_.irequestcontext.md).[action](_interfaces_.irequestcontext.md#action)*

Defined in interfaces.ts:209

___

###  addres

• **addres**: *string*

Defined in interfaces.ts:289

Returns the addres like ip:port

___

###  compact

• **compact**: *number*

Defined in interfaces.ts:244

Returns the indicates that the client accepts a compact response

___

###  downloaded

• **downloaded**: *bigint*

Defined in interfaces.ts:234

Returns the total amount downloaded (since the client sent the 'started' event to the tracker)

___

###  event

• **event**: *[AnnounceEvent](../enums/_constants_.announceevent.md)*

Defined in interfaces.ts:258

Returns be one of started, completed, stopped or update (if empty)
 started: The first request to the tracker must include the event key with this value
 stopped: Must be sent to the tracker if the client is shutting down gracefully
 completed: Must be sent to the tracker when the download completes
 update: This request is one performed at regular intervals.

___

###  infoHash

• **infoHash**: *string*

Defined in interfaces.ts:214

Returns 20-byte SHA1 hash of the value of the info key from the metainfo file

___

###  ip

• **ip**: *string*

Defined in interfaces.ts:264

Returns the true IP address of the client machine,
in dotted quad format or rfc 3513 defined hexed IPv6 address.

___

###  isAnnounce

• **isAnnounce**: *boolean*

*Inherited from [IRequestContext](_interfaces_.irequestcontext.md).[isAnnounce](_interfaces_.irequestcontext.md#isannounce)*

Defined in interfaces.ts:163

The current action is "announce"

___

###  isCompact

• **isCompact**: *boolean*

Defined in interfaces.ts:207

Checks that need a compact answer

___

###  isConnect

• **isConnect**: *boolean*

*Inherited from [IRequestContext](_interfaces_.irequestcontext.md).[isConnect](_interfaces_.irequestcontext.md#isconnect)*

Defined in interfaces.ts:158

The current action is "connect"

___

###  isScrape

• **isScrape**: *boolean*

*Inherited from [IRequestContext](_interfaces_.irequestcontext.md).[isScrape](_interfaces_.irequestcontext.md#isscrape)*

Defined in interfaces.ts:168

The current action is "scrape"

___

###  isSourceHTTP

• **isSourceHTTP**: *boolean*

*Inherited from [IRequestContext](_interfaces_.irequestcontext.md).[isSourceHTTP](_interfaces_.irequestcontext.md#issourcehttp)*

Defined in interfaces.ts:173

The request source is HTTP

___

###  isSourceUDP

• **isSourceUDP**: *boolean*

*Inherited from [IRequestContext](_interfaces_.irequestcontext.md).[isSourceUDP](_interfaces_.irequestcontext.md#issourceudp)*

Defined in interfaces.ts:178

The request source is UDP

___

### `Optional` key

• **key**? : *string | number*

Defined in interfaces.ts:274

Returns the an additional identification that is not shared with any other peers

___

###  left

• **left**: *bigint*

Defined in interfaces.ts:239

Returns the number of bytes this client still has to download

___

###  noPeerId

• **noPeerId**: *number*

Defined in interfaces.ts:249

Returns that the tracker can omit peer id field in peers dictionary

___

###  numwant

• **numwant**: *number*

Defined in interfaces.ts:269

Returns the number of peers that the client would like to receive from the tracker

___

###  peerId

• **peerId**: *string*

Defined in interfaces.ts:219

Returns 20-byte string used as a unique ID for the client, generated by the client at startup

___

###  port

• **port**: *number*

Defined in interfaces.ts:224

Returns the port number that the client is listening on

___

### `Optional` requestPath

• **requestPath**? : *undefined | string*

Defined in interfaces.ts:284

Returns the request path

___

###  sent

• **sent**: *boolean*

*Inherited from [IRequestContext](_interfaces_.irequestcontext.md).[sent](_interfaces_.irequestcontext.md#sent)*

Defined in interfaces.ts:188

Has an answer been sent

___

### `Optional` trackerId

• **trackerId**? : *string | number*

Defined in interfaces.ts:279

Returns the tracker id, if a previous announce contained

___

###  transactionId

• **transactionId**: *number*

Defined in interfaces.ts:294

Returns the transaction ID (only UDP)

___

###  uploaded

• **uploaded**: *bigint*

Defined in interfaces.ts:229

Returns the total amount uploaded (since the client sent the 'started' event to the tracker)

## Methods

###  send

▸ **send**(`payload`: [AnnounceRequestContextSendOptions](../modules/_interfaces_.md#announcerequestcontextsendoptions)): *Promise‹void›*

Defined in interfaces.ts:299

Sends a response

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [AnnounceRequestContextSendOptions](../modules/_interfaces_.md#announcerequestcontextsendoptions) |

**Returns:** *Promise‹void›*
