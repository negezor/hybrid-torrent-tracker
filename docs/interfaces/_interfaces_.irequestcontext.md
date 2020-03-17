[hybrid-torrent-tracker](../README.md) › ["interfaces"](../modules/_interfaces_.md) › [IRequestContext](_interfaces_.irequestcontext.md)

# Interface: IRequestContext

## Hierarchy

* **IRequestContext**

  ↳ [IAnnounceRequestContext](_interfaces_.iannouncerequestcontext.md)

  ↳ [IConnectionRequestContext](_interfaces_.iconnectionrequestcontext.md)

  ↳ [IScrapeRequestContext](_interfaces_.iscraperequestcontext.md)

## Implemented by

* [AnnounceRequestContext](../classes/_contexts_requests_announce_.announcerequestcontext.md)
* [ConnectionRequestContext](../classes/_contexts_requests_connection_.connectionrequestcontext.md)
* [RequestContext](../classes/_contexts_requests_context_.requestcontext.md)
* [ScrapeRequestContext](../classes/_contexts_requests_scrape_.scraperequestcontext.md)

## Index

### Properties

* [action](_interfaces_.irequestcontext.md#action)
* [isAnnounce](_interfaces_.irequestcontext.md#isannounce)
* [isConnect](_interfaces_.irequestcontext.md#isconnect)
* [isScrape](_interfaces_.irequestcontext.md#isscrape)
* [isSourceHTTP](_interfaces_.irequestcontext.md#issourcehttp)
* [isSourceUDP](_interfaces_.irequestcontext.md#issourceudp)
* [sent](_interfaces_.irequestcontext.md#sent)

## Properties

###  action

• **action**: *[TrackerAction](../enums/_constants_.trackeraction.md)*

*Defined in [src/interfaces.ts:183](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/interfaces.ts#L183)*

Current action

___

###  isAnnounce

• **isAnnounce**: *boolean*

*Defined in [src/interfaces.ts:163](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/interfaces.ts#L163)*

The current action is "announce"

___

###  isConnect

• **isConnect**: *boolean*

*Defined in [src/interfaces.ts:158](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/interfaces.ts#L158)*

The current action is "connect"

___

###  isScrape

• **isScrape**: *boolean*

*Defined in [src/interfaces.ts:168](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/interfaces.ts#L168)*

The current action is "scrape"

___

###  isSourceHTTP

• **isSourceHTTP**: *boolean*

*Defined in [src/interfaces.ts:173](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/interfaces.ts#L173)*

The request source is HTTP

___

###  isSourceUDP

• **isSourceUDP**: *boolean*

*Defined in [src/interfaces.ts:178](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/interfaces.ts#L178)*

The request source is UDP

___

###  sent

• **sent**: *boolean*

*Defined in [src/interfaces.ts:188](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/interfaces.ts#L188)*

Has an answer been sent
