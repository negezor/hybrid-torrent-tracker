[hybrid-torrent-tracker](../README.md) › ["parsers/http"](_parsers_http_.md)

# External module: "parsers/http"

## Index

### Functions

* [announceResponse](_parsers_http_.md#const-announceresponse)
* [errorResponse](_parsers_http_.md#const-errorresponse)
* [parseAnnounceRequest](_parsers_http_.md#const-parseannouncerequest)
* [parseScrapeRequest](_parsers_http_.md#const-parsescraperequest)
* [scrapeResponse](_parsers_http_.md#const-scraperesponse)
* [toBufferResponse](_parsers_http_.md#const-tobufferresponse)

## Functions

### `Const` announceResponse

▸ **announceResponse**(`__namedParameters`: object): *Buffer*

Defined in parsers/http.ts:40

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`compact` | number | 1 |
`complete` | number | - |
`incomplete` | number | - |
`interval` | number | - |
`peers` | object[] |  [] |

**Returns:** *Buffer*

___

### `Const` errorResponse

▸ **errorResponse**(`__namedParameters`: object): *Buffer*

Defined in parsers/http.ts:99

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`message` | string |

**Returns:** *Buffer*

___

### `Const` parseAnnounceRequest

▸ **parseAnnounceRequest**(`connection`: [IHTTPConnectionContext](../interfaces/_interfaces_.ihttpconnectioncontext.md)): *[IAnnounceRequestPayload](../interfaces/_interfaces_.iannouncerequestpayload.md)*

Defined in parsers/http.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`connection` | [IHTTPConnectionContext](../interfaces/_interfaces_.ihttpconnectioncontext.md) |

**Returns:** *[IAnnounceRequestPayload](../interfaces/_interfaces_.iannouncerequestpayload.md)*

___

### `Const` parseScrapeRequest

▸ **parseScrapeRequest**(`connection`: [IHTTPConnectionContext](../interfaces/_interfaces_.ihttpconnectioncontext.md)): *[IScrapeRequestPayload](../interfaces/_interfaces_.iscraperequestpayload.md)*

Defined in parsers/http.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`connection` | [IHTTPConnectionContext](../interfaces/_interfaces_.ihttpconnectioncontext.md) |

**Returns:** *[IScrapeRequestPayload](../interfaces/_interfaces_.iscraperequestpayload.md)*

___

### `Const` scrapeResponse

▸ **scrapeResponse**(`__namedParameters`: object): *Buffer*

Defined in parsers/http.ts:80

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`files` | object[] |  [] |
`interval` | number | - |

**Returns:** *Buffer*

___

### `Const` toBufferResponse

▸ **toBufferResponse**(`payload`: [HTTPResponseUnion](_interfaces_.md#httpresponseunion), `action`: [TrackerAction](../enums/_constants_.trackeraction.md)): *Buffer*

Defined in parsers/http.ts:107

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [HTTPResponseUnion](_interfaces_.md#httpresponseunion) |
`action` | [TrackerAction](../enums/_constants_.trackeraction.md) |

**Returns:** *Buffer*
