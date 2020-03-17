[hybrid-torrent-tracker](../README.md) › ["errors/incorrect-request"](../modules/_errors_incorrect_request_.md) › [IncorrectRequestError](_errors_incorrect_request_.incorrectrequesterror.md)

# Class: IncorrectRequestError

## Hierarchy

  ↳ [TrackerError](_errors_error_.trackererror.md)

  ↳ **IncorrectRequestError**

## Index

### Constructors

* [constructor](_errors_incorrect_request_.incorrectrequesterror.md#constructor)

### Properties

* [code](_errors_incorrect_request_.incorrectrequesterror.md#code)
* [message](_errors_incorrect_request_.incorrectrequesterror.md#message)
* [name](_errors_incorrect_request_.incorrectrequesterror.md#name)
* [stack](_errors_incorrect_request_.incorrectrequesterror.md#optional-stack)

### Accessors

* [[Symbol.toStringTag]](_errors_incorrect_request_.incorrectrequesterror.md#[symbol.tostringtag])

### Methods

* [toJSON](_errors_incorrect_request_.incorrectrequesterror.md#tojson)

## Constructors

###  constructor

\+ **new IncorrectRequestError**(`__namedParameters`: object): *[IncorrectRequestError](_errors_incorrect_request_.incorrectrequesterror.md)*

*Inherited from [TrackerError](_errors_error_.trackererror.md).[constructor](_errors_error_.trackererror.md#constructor)*

*Defined in [src/errors/error.ts:16](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/errors/error.ts#L16)*

Constructor

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`code` | string |
`message` | string |

**Returns:** *[IncorrectRequestError](_errors_incorrect_request_.incorrectrequesterror.md)*

## Properties

###  code

• **code**: *string*

*Inherited from [TrackerError](_errors_error_.trackererror.md).[code](_errors_error_.trackererror.md#code)*

*Defined in [src/errors/error.ts:16](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/errors/error.ts#L16)*

Error code

___

###  message

• **message**: *string*

*Inherited from [TrackerError](_errors_error_.trackererror.md).[message](_errors_error_.trackererror.md#message)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:974

___

###  name

• **name**: *string*

*Inherited from [TrackerError](_errors_error_.trackererror.md).[name](_errors_error_.trackererror.md#name)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:973

___

### `Optional` stack

• **stack**? : *undefined | string*

*Inherited from [TrackerError](_errors_error_.trackererror.md).[stack](_errors_error_.trackererror.md#optional-stack)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:975

## Accessors

###  [Symbol.toStringTag]

• **get [Symbol.toStringTag]**(): *string*

*Inherited from [TrackerError](_errors_error_.trackererror.md).[[Symbol.toStringTag]](_errors_error_.trackererror.md#[symbol.tostringtag])*

*Defined in [src/errors/error.ts:34](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/errors/error.ts#L34)*

Returns custom tag

**Returns:** *string*

## Methods

###  toJSON

▸ **toJSON**(): *[CopiedError](../modules/_errors_error_.md#copiederror)*

*Inherited from [TrackerError](_errors_error_.trackererror.md).[toJSON](_errors_error_.trackererror.md#tojson)*

*Defined in [src/errors/error.ts:41](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/errors/error.ts#L41)*

Returns property for json

**Returns:** *[CopiedError](../modules/_errors_error_.md#copiederror)*
