[hybrid-torrent-tracker](../README.md) › ["interfaces"](_interfaces_.md)

# External module: "interfaces"

## Index

### Interfaces

* [IAnnounceRequestContext](../interfaces/_interfaces_.iannouncerequestcontext.md)
* [IAnnounceRequestPayload](../interfaces/_interfaces_.iannouncerequestpayload.md)
* [IConnectionContext](../interfaces/_interfaces_.iconnectioncontext.md)
* [IConnectionRequestContext](../interfaces/_interfaces_.iconnectionrequestcontext.md)
* [IConnectionRequestPayload](../interfaces/_interfaces_.iconnectionrequestpayload.md)
* [IHTTPAnnounceResponse](../interfaces/_interfaces_.ihttpannounceresponse.md)
* [IHTTPConnectionContext](../interfaces/_interfaces_.ihttpconnectioncontext.md)
* [IHTTPErrorResponse](../interfaces/_interfaces_.ihttperrorresponse.md)
* [IHTTPScrapeResponse](../interfaces/_interfaces_.ihttpscraperesponse.md)
* [IRequestContext](../interfaces/_interfaces_.irequestcontext.md)
* [IScrapeRequestContext](../interfaces/_interfaces_.iscraperequestcontext.md)
* [IScrapeRequestPayload](../interfaces/_interfaces_.iscraperequestpayload.md)
* [IUDPAnnounceResponse](../interfaces/_interfaces_.iudpannounceresponse.md)
* [IUDPConnectionContext](../interfaces/_interfaces_.iudpconnectioncontext.md)
* [IUDPConnectionResponse](../interfaces/_interfaces_.iudpconnectionresponse.md)
* [IUDPErrorResponse](../interfaces/_interfaces_.iudperrorresponse.md)
* [IUDPScrapeResponse](../interfaces/_interfaces_.iudpscraperesponse.md)

### Type aliases

* [AnnounceRequestContextSendOptions](_interfaces_.md#announcerequestcontextsendoptions)
* [ConnectionContextUnion](_interfaces_.md#connectioncontextunion)
* [ConnectionRequestContextSendOptions](_interfaces_.md#connectionrequestcontextsendoptions)
* [HTTPResponseUnion](_interfaces_.md#httpresponseunion)
* [RequestContextErrorResponse](_interfaces_.md#requestcontexterrorresponse)
* [RequestContextUnion](_interfaces_.md#requestcontextunion)
* [RequestPayloadUnion](_interfaces_.md#requestpayloadunion)
* [ScrapeRequestContextSendOptions](_interfaces_.md#scraperequestcontextsendoptions)
* [UDPResponseUnion](_interfaces_.md#udpresponseunion)

## Type aliases

###  AnnounceRequestContextSendOptions

Ƭ **AnnounceRequestContextSendOptions**: *[IHTTPAnnounceResponse](../interfaces/_interfaces_.ihttpannounceresponse.md) | [IUDPAnnounceResponse](../interfaces/_interfaces_.iudpannounceresponse.md) | [RequestContextErrorResponse](_interfaces_.md#requestcontexterrorresponse)*

Defined in interfaces.ts:193

___

###  ConnectionContextUnion

Ƭ **ConnectionContextUnion**: *[IHTTPConnectionContext](../interfaces/_interfaces_.ihttpconnectioncontext.md) | [IUDPConnectionContext](../interfaces/_interfaces_.iudpconnectioncontext.md)*

Defined in interfaces.ts:152

Contains all connection context types

___

###  ConnectionRequestContextSendOptions

Ƭ **ConnectionRequestContextSendOptions**: *[IUDPConnectionResponse](../interfaces/_interfaces_.iudpconnectionresponse.md) | [RequestContextErrorResponse](_interfaces_.md#requestcontexterrorresponse)*

Defined in interfaces.ts:302

___

###  HTTPResponseUnion

Ƭ **HTTPResponseUnion**: *[IHTTPAnnounceResponse](../interfaces/_interfaces_.ihttpannounceresponse.md) | [IHTTPScrapeResponse](../interfaces/_interfaces_.ihttpscraperesponse.md) | [IHTTPErrorResponse](../interfaces/_interfaces_.ihttperrorresponse.md)*

Defined in interfaces.ts:30

___

###  RequestContextErrorResponse

Ƭ **RequestContextErrorResponse**: *[IHTTPErrorResponse](../interfaces/_interfaces_.ihttperrorresponse.md) | [IUDPErrorResponse](../interfaces/_interfaces_.iudperrorresponse.md)*

Defined in interfaces.ts:191

___

###  RequestContextUnion

Ƭ **RequestContextUnion**: *[IAnnounceRequestContext](../interfaces/_interfaces_.iannouncerequestcontext.md) | [IConnectionRequestContext](../interfaces/_interfaces_.iconnectionrequestcontext.md) | [IScrapeRequestContext](../interfaces/_interfaces_.iscraperequestcontext.md)*

Defined in interfaces.ts:352

Contains all request context types

___

###  RequestPayloadUnion

Ƭ **RequestPayloadUnion**: *[IAnnounceRequestPayload](../interfaces/_interfaces_.iannouncerequestpayload.md) | [IConnectionRequestPayload](../interfaces/_interfaces_.iconnectionrequestpayload.md) | [IScrapeRequestPayload](../interfaces/_interfaces_.iscraperequestpayload.md)*

Defined in interfaces.ts:464

Contains all request payload types

___

###  ScrapeRequestContextSendOptions

Ƭ **ScrapeRequestContextSendOptions**: *[IHTTPScrapeResponse](../interfaces/_interfaces_.ihttpscraperesponse.md) | [IUDPScrapeResponse](../interfaces/_interfaces_.iudpscraperesponse.md) | [RequestContextErrorResponse](_interfaces_.md#requestcontexterrorresponse)*

Defined in interfaces.ts:325

___

###  UDPResponseUnion

Ƭ **UDPResponseUnion**: *[IUDPConnectionResponse](../interfaces/_interfaces_.iudpconnectionresponse.md) | [IUDPAnnounceResponse](../interfaces/_interfaces_.iudpannounceresponse.md) | [IUDPScrapeResponse](../interfaces/_interfaces_.iudpscraperesponse.md) | [IUDPErrorResponse](../interfaces/_interfaces_.iudperrorresponse.md)*

Defined in interfaces.ts:85
