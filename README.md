# IsOrNot

[![Build Status](https://travis-ci.com/AlaeddineMessadi/is-or-not.svg?branch=main)](https://travis-ci.com/AlaeddineMessadi/is-or-not)

## Description

[github](https://github.com/AlaeddineMessadi/is-or-not)

[documentation](https://alaeddinemessadi.github.io/is-or-not/index.html)

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
utils.isNotNull(undefined); // correct it's undefined => true

utils.isNotEmpty(["🦄", "🐶", "🐼"]); // array contain values => true
utils.isNotEmpty([]); // array is empty => false

/** ... */

utils.isString("Hello World!"); // Type is String => true
utils.isNotString(["🐶", "🦄"]); // true because type is array => true

/** ... */

utils.isPrimitive("Primitive type?"); // String is a Primitive type => true
utils.isNotPrimitive("Not primitive type?"); // False because it's a string, primitive => false

/** ... */

utils.isNullOrUndefined("Hello!"); // String is not null or undefined => false
utils.isNullOrUndefined(undefined); // => true

utils.isNotNullOrUndefined("Not primitive type?"); // true it's a string => true
utils.isNotNullOrUndefined(null); // it is null => false

.
.
.
```

## Documentation

[documentation](https://alaeddinemessadi.github.io/is-or-not/index.html)

- [isArray](https://alaeddinemessadi.github.io/is-or-not/global.html#isArray)
- [isBoolean](https://alaeddinemessadi.github.io/is-or-not/global.html#isBoolean)
- [isDate](https://alaeddinemessadi.github.io/is-or-not/global.html#isDate)
- [isEmpty](https://alaeddinemessadi.github.io/is-or-not/global.html#isEmpty)
- [isError](https://alaeddinemessadi.github.io/is-or-not/global.html#isError)
- [isFunction](https://alaeddinemessadi.github.io/is-or-not/global.html#isFunction)
- [isNotArray](https://alaeddinemessadi.github.io/is-or-not/global.html#isNotArray)
- [isNotBoolean](https://alaeddinemessadi.github.io/is-or-not/global.html#isNotBoolean)
- [isNotDate](https://alaeddinemessadi.github.io/is-or-not/global.html#isNotDate)
- [isNotEmpty](https://alaeddinemessadi.github.io/is-or-not/global.html#isNotEmpty)
- [isNotError](https://alaeddinemessadi.github.io/is-or-not/global.html#isNotError)
- [isNotFunction](https://alaeddinemessadi.github.io/is-or-not/global.html#isNotFunction)
- [isNotNull](https://alaeddinemessadi.github.io/is-or-not/global.html#isNotNull)
- [isNotNullOrUndefined](https://alaeddinemessadi.github.io/is-or-not/global.html#isNotNullOrUndefined)
- [isNotNumber](https://alaeddinemessadi.github.io/is-or-not/global.html#isNotNumber)
- [isNotObject](https://alaeddinemessadi.github.io/is-or-not/global.html#isNotObject)
- [isNotPrimitive](https://alaeddinemessadi.github.io/is-or-not/global.html#isNotPrimitive)
- [isNotRegExp](https://alaeddinemessadi.github.io/is-or-not/global.html#isNotRegExp)
- [isNotString](https://alaeddinemessadi.github.io/is-or-not/global.html#isNotString)
- [isNotSymbol](https://alaeddinemessadi.github.io/is-or-not/global.html#isNotSymbol)
- [isNotUndefined](https://alaeddinemessadi.github.io/is-or-not/global.html#isNotUndefined)
- [isNull](https://alaeddinemessadi.github.io/is-or-not/global.html#isNull)
- [isNullOrUndefined](https://alaeddinemessadi.github.io/is-or-not/global.html#isNullOrUndefined)
- [isNumber](https://alaeddinemessadi.github.io/is-or-not/global.html#isNumber)
- [isObject](https://alaeddinemessadi.github.io/is-or-not/global.html#isObject)
- [isPrimitive](https://alaeddinemessadi.github.io/is-or-not/global.html#isPrimitive)
- [isRegExp](https://alaeddinemessadi.github.io/is-or-not/global.html#isRegExp)
- [isString](https://alaeddinemessadi.github.io/is-or-not/global.html#isString)
- [isSymbol](https://alaeddinemessadi.github.io/is-or-not/global.html#isSymbol)
- [isUndefined](https://alaeddinemessadi.github.io/is-or-not/global.html#isUndefined)

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
