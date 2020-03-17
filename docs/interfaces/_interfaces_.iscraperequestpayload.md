[hybrid-torrent-tracker](../README.md) › ["interfaces"](../modules/_interfaces_.md) › [IScrapeRequestPayload](_interfaces_.iscraperequestpayload.md)

# Interface: IScrapeRequestPayload

## Hierarchy

* **IScrapeRequestPayload**

## Index

### Properties

* [info_hash](_interfaces_.iscraperequestpayload.md#info_hash)
* [transaction_id](_interfaces_.iscraperequestpayload.md#optional-transaction_id)

## Properties

###  info_hash

• **info_hash**: *string[]*

*Defined in [src/interfaces.ts:453](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/interfaces.ts#L453)*

Returns 20-byte SHA1 hash of the value of the info key from the metainfo file

___

### `Optional` transaction_id

• **transaction_id**? : *undefined | number*

*Defined in [src/interfaces.ts:458](https://github.com/negezor/hybrid-torrent-tracker/blob/c8824be/src/interfaces.ts#L458)*

Returns the transaction ID
