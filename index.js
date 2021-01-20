/* eslint-disable no-void */

/**
 * is_isNot
 *
 * Javascript type testing library
 *
 * @file index.js
 * @copyright Alaeddine Messadi (https://almessadi.com)
 * @license MIT
 */

module.exports = {
  isBoolean: (arg) => typeof arg === 'boolean',
  isNotBoolean: (arg) => typeof arg !== 'boolean',
  isNumber: (arg) => typeof arg === 'number',
  isNotNumber: (arg) => typeof arg !== 'number',
  isString: (arg) => typeof arg === 'string',
  isNotString: (arg) => typeof arg !== 'string',
  isSymbol: (arg) => typeof arg === 'symbol',
  isNotSymbol: (arg) => typeof arg !== 'symbol',
  isNull: (arg) => arg === null,
  isNotNull: (arg) => arg !== null,
  isUndefined: (arg) => typeof arg === 'undefined' && arg === void 0,
  isNotUndefined: (arg) => typeof arg !== 'undefined',
  isNullOrUndefined: (arg) => arg == null,
  isNotNullOrUndefined: (arg) => arg != null,
  isArray: (arg) => ((Array.isArray) ? Array.isArray(arg) : Object.prototype.toString.call(arg) === '[object Array]'),
  isNotArray: (arg) => ((Array.isArray) ? Array.isArray(arg) === false : Object.prototype.toString.call(arg) !== '[object Array]'),
  isObject: (arg) => typeof arg === 'object' && arg !== null,
  isNotObject: (arg) => typeof arg !== 'object',
  isPrimitive: (arg) => (arg === null || typeof arg === 'string' || typeof arg === 'number' || typeof arg === 'boolean' || typeof arg === 'symbol' || typeof arg === 'undefined'),
  isNotPrimitive: (arg) => (arg !== null && typeof arg !== 'string' && typeof arg !== 'number' && typeof arg !== 'boolean' && typeof arg !== 'symbol' && typeof arg !== 'undefined'),
  isError: (arg) => Object.prototype.toString.call(arg) === '[object Error]' || arg instanceof Error,
  isNotError: (arg) => Object.prototype.toString.call(arg) !== '[object Error]' || !(arg instanceof Error),
  isDate: (arg) => Object.prototype.toString.call(arg) === '[object Date]',
  isNotDate: (arg) => Object.prototype.toString.call(arg) !== '[object Date]',
  isFunction: (arg) => typeof arg === 'function',
  isNotFunction: (arg) => typeof arg !== 'function',
  isRegExp: (arg) => Object.prototype.toString.call(arg) === '[object RegExp]',
  isNotRegExp: (arg) => Object.prototype.toString.call(arg) !== '[object RegExp]',
};
