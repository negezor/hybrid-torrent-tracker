[hybrid-torrent-tracker](../README.md) › ["errors/error"](../modules/_errors_error_.md) › [TrackerError](_errors_error_.trackererror.md)

# Class: TrackerError

General error class

## Hierarchy

* [Error](_errors_error_.trackererror.md#static-error)

  ↳ **TrackerError**

  ↳ [IncorrectRequestError](_errors_incorrect_request_.incorrectrequesterror.md)

## Index

### Constructors

* [constructor](_errors_error_.trackererror.md#constructor)

### Properties

* [code](_errors_error_.trackererror.md#code)
* [message](_errors_error_.trackererror.md#message)
* [name](_errors_error_.trackererror.md#name)
* [stack](_errors_error_.trackererror.md#optional-stack)
* [Error](_errors_error_.trackererror.md#static-error)

### Accessors

* [[Symbol.toStringTag]](_errors_error_.trackererror.md#[symbol.tostringtag])

### Methods

* [toJSON](_errors_error_.trackererror.md#tojson)

## Constructors

###  constructor

\+ **new TrackerError**(`__namedParameters`: object): *[TrackerError](_errors_error_.trackererror.md)*

*Defined in [src/errors/error.ts:16](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/errors/error.ts#L16)*

Constructor

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`code` | string |
`message` | string |

**Returns:** *[TrackerError](_errors_error_.trackererror.md)*

## Properties

###  code

• **code**: *string*

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

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:984

## Accessors

###  [Symbol.toStringTag]

• **get [Symbol.toStringTag]**(): *string*

*Defined in [src/errors/error.ts:34](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/errors/error.ts#L34)*

Returns custom tag

**Returns:** *string*

## Methods

###  toJSON

▸ **toJSON**(): *[CopiedError](../modules/_errors_error_.md#copiederror)*

*Defined in [src/errors/error.ts:41](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/errors/error.ts#L41)*

Returns property for json

**Returns:** *[CopiedError](../modules/_errors_error_.md#copiederror)*
