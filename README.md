# IsOrNot

## Description

[github]: https://github.com/AlaeddineMessadi/is-or-not
[documentation]: https://alaeddinemessadi.github.io/is-or-not/index.html

A Set of `is` and `isNot` functions in JavaScript checking and testing on objects and types

## Install

```bash
$ yarn add is-or-not
```

or

```bash
$ npm install is-or-not
```

## Usage

```javascript
const utils = require("is-or-not");

utils.isNull(null); // type is null => true
utils.isNull(undefined); // type is undefined => false
utils.isNotNull(["🦄", "🐶", "🐼"]); // type is array => false
utils.isNotNull(null); // type is null => false

/** ... */

utils.isString("Hello World!"); // Type is String => true
utils.isNotString(["🐶", "🦄"]); // type is array => false

/** ... */

utils.isPrimitive("Primitive type?"); // type is String => true
utils.isNotPrimitive("Not primitive type?"); // type is String => fale
```

## Documentation

[documentation]: https://alaeddinemessadi.github.io/is-or-not/index.html "Documetation Page"

- isArray
- isBoolean
- isDate
- isEmpty
- isError
- isFunction
- isNotArray
- isNotBoolean
- isNotDate
- isNotError
- isNotFunction
- isNotNull
- isNotNullOrUndefined
- isNotNumber
- isNotObject
- isNotPrimitive
- isNotRegExp
- isNotString
- isNotSymbol
- isNotUndefined
- isNullisNullOrUndefined
- isNumber
- isObject
- isPrimitive
- isRegExp
- isString
- isSymbol
- isUndefined

## Contribution

Clone the Github Repository

```bash
$ git clone git@github.com:AlaeddineMessadi/utils-is.git
```

All functions' implementations are in the `index.js` file.

Tests are defined in the `test.js` file

#### Running tests

```bash
$ yarn test
// or
$ yarn test:watch
```

or with npm

```bash
$ npm run test
or
$ npm run test:watch
```
