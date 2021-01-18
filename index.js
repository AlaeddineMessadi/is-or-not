/**
 * @file index.js
 * @copyright Alaeddine Messadi
 */

module.exports = {
  isBoolean: (arg) => typeof arg === 'boolean',
  isNotBoolean: (arg) => typeof arg !== 'boolean',
  isNumber: (arg) => typeof arg === 'number',
  isNotNumber: (arg) => typeof arg !== 'number',
  isString: (arg) => typeof arg === 'string',
  isNotString: (arg) => typeof arg !== 'string',
  isNull: (arg) => arg === null,
  isNotNull: (arg) => arg !== null,
  isUndefined: (arg) => typeof arg === 'undefined',
  isNotUndefined: (arg) => typeof arg !== 'undefined',
};
