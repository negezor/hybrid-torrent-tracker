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

* [__@toStringTag](_errors_incorrect_request_.incorrectrequesterror.md#__@tostringtag)

### Methods

* [toJSON](_errors_incorrect_request_.incorrectrequesterror.md#tojson)

## Constructors

###  constructor

\+ **new IncorrectRequestError**(`__namedParameters`: object): *[IncorrectRequestError](_errors_incorrect_request_.incorrectrequesterror.md)*

*Inherited from [TrackerError](_errors_error_.trackererror.md).[constructor](_errors_error_.trackererror.md#constructor)*

Defined in errors/error.ts:16

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

Defined in errors/error.ts:16

Error code

___

###  message

• **message**: *string*

*Inherited from void*

Defined in /mnt/c/Users/negezor/projects/hybrid-torrent-tracker/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:974

___

###  name

• **name**: *string*

*Inherited from void*

Defined in /mnt/c/Users/negezor/projects/hybrid-torrent-tracker/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:973

___

### `Optional` stack

• **stack**? : *undefined | string*

*Inherited from void*

*Overrides void*

Defined in /mnt/c/Users/negezor/projects/hybrid-torrent-tracker/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:975

## Accessors

###  __@toStringTag

• **get __@toStringTag**(): *string*

*Inherited from [TrackerError](_errors_error_.trackererror.md).[__@toStringTag](_errors_error_.trackererror.md#__@tostringtag)*

Defined in errors/error.ts:34

Returns custom tag

**Returns:** *string*

## Methods

###  toJSON

▸ **toJSON**(): *[CopiedError](../modules/_errors_error_.md#copiederror)*

*Inherited from [TrackerError](_errors_error_.trackererror.md).[toJSON](_errors_error_.trackererror.md#tojson)*

Defined in errors/error.ts:41

Returns property for json

**Returns:** *[CopiedError](../modules/_errors_error_.md#copiederror)*
