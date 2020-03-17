[hybrid-torrent-tracker](../README.md) › ["interfaces"](../modules/_interfaces_.md) › [IScrapeRequestContext](_interfaces_.iscraperequestcontext.md)

# Interface: IScrapeRequestContext

Request scrape

**`see`** https://wiki.theory.org/index.php/BitTorrentSpecification#Tracker_.27scrape.27_Convention

## Hierarchy

* [IRequestContext](_interfaces_.irequestcontext.md)

  ↳ **IScrapeRequestContext**

## Implemented by

* [ScrapeRequestContext](../classes/_contexts_requests_scrape_.scraperequestcontext.md)

## Index

### Properties

* [action](_interfaces_.iscraperequestcontext.md#action)
* [infoHashes](_interfaces_.iscraperequestcontext.md#infohashes)
* [isAnnounce](_interfaces_.iscraperequestcontext.md#isannounce)
* [isConnect](_interfaces_.iscraperequestcontext.md#isconnect)
* [isScrape](_interfaces_.iscraperequestcontext.md#isscrape)
* [isSourceHTTP](_interfaces_.iscraperequestcontext.md#issourcehttp)
* [isSourceUDP](_interfaces_.iscraperequestcontext.md#issourceudp)
* [sent](_interfaces_.iscraperequestcontext.md#sent)

### Methods

* [send](_interfaces_.iscraperequestcontext.md#send)

## Properties

###  action

• **action**: *[SCRAPE](../enums/_constants_.trackeraction.md#scrape)*

*Overrides [IRequestContext](_interfaces_.irequestcontext.md).[action](_interfaces_.irequestcontext.md#action)*

*Defined in [src/interfaces.ts:336](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/interfaces.ts#L336)*

___

###  infoHashes

• **infoHashes**: *string[]*

*Defined in [src/interfaces.ts:341](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/interfaces.ts#L341)*

Returns 20-byte SHA1 hash of the value of the info key from the metainfo file

___

###  isAnnounce

• **isAnnounce**: *boolean*

*Inherited from [IRequestContext](_interfaces_.irequestcontext.md).[isAnnounce](_interfaces_.irequestcontext.md#isannounce)*

*Defined in [src/interfaces.ts:163](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/interfaces.ts#L163)*

The current action is "announce"

___

###  isConnect

• **isConnect**: *boolean*

*Inherited from [IRequestContext](_interfaces_.irequestcontext.md).[isConnect](_interfaces_.irequestcontext.md#isconnect)*

*Defined in [src/interfaces.ts:158](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/interfaces.ts#L158)*

The current action is "connect"

___

###  isScrape

• **isScrape**: *boolean*

*Inherited from [IRequestContext](_interfaces_.irequestcontext.md).[isScrape](_interfaces_.irequestcontext.md#isscrape)*

*Defined in [src/interfaces.ts:168](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/interfaces.ts#L168)*

The current action is "scrape"

___

###  isSourceHTTP

• **isSourceHTTP**: *boolean*

*Inherited from [IRequestContext](_interfaces_.irequestcontext.md).[isSourceHTTP](_interfaces_.irequestcontext.md#issourcehttp)*

*Defined in [src/interfaces.ts:173](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/interfaces.ts#L173)*

The request source is HTTP

___

###  isSourceUDP

• **isSourceUDP**: *boolean*

*Inherited from [IRequestContext](_interfaces_.irequestcontext.md).[isSourceUDP](_interfaces_.irequestcontext.md#issourceudp)*

*Defined in [src/interfaces.ts:178](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/interfaces.ts#L178)*

The request source is UDP

___

###  sent

• **sent**: *boolean*

*Inherited from [IRequestContext](_interfaces_.irequestcontext.md).[sent](_interfaces_.irequestcontext.md#sent)*

*Defined in [src/interfaces.ts:188](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/interfaces.ts#L188)*

Has an answer been sent

## Methods

###  send

▸ **send**(`payload`: [ScrapeRequestContextSendOptions](../modules/_interfaces_.md#scraperequestcontextsendoptions)): *Promise‹void›*

*Defined in [src/interfaces.ts:346](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/interfaces.ts#L346)*

Sends a response

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [ScrapeRequestContextSendOptions](../modules/_interfaces_.md#scraperequestcontextsendoptions) |

**Returns:** *Promise‹void›*
