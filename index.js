/**
 * @file index.js
 * @copyright Alaeddine Messadi (https://almessadi.com)
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
  isUndefined: (arg) => typeof arg === 'undefined',
  isNotUndefined: (arg) => typeof arg !== 'undefined',
  isArray: (arg) => ((Array.isArray) ? Array.isArray(arg) : Object.prototype.toString.call(arg) === '[object Array]'),
  isNotArray: (arg) => ((Array.isArray) ? Array.isArray(arg) === false : Object.prototype.toString.call(arg) !== '[object Array]'),
  isPrimitive: (arg) => (arg === null || typeof arg === 'string' || typeof arg === 'number' || typeof arg === 'boolean' || typeof arg === 'symbol' || typeof arg === 'undefined'),
  isNotPrimitive: (arg) => (arg !== null && typeof arg !== 'string' && typeof arg !== 'number' && typeof arg !== 'boolean' && typeof arg !== 'symbol' && typeof arg !== 'undefined'),
};
