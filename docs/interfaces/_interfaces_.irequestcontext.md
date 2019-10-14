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

Defined in interfaces.ts:183

Current action

___

###  isAnnounce

• **isAnnounce**: *boolean*

Defined in interfaces.ts:163

The current action is "announce"

___

###  isConnect

• **isConnect**: *boolean*

Defined in interfaces.ts:158

The current action is "connect"

___

###  isScrape

• **isScrape**: *boolean*

Defined in interfaces.ts:168

The current action is "scrape"

___

###  isSourceHTTP

• **isSourceHTTP**: *boolean*

Defined in interfaces.ts:173

The request source is HTTP

___

###  isSourceUDP

• **isSourceUDP**: *boolean*

Defined in interfaces.ts:178

The request source is UDP

___

###  sent

• **sent**: *boolean*

Defined in interfaces.ts:188

Has an answer been sent
