/* eslint-disable no-prototype-builtins */
/* eslint-disable no-void */

/**
 * isNot
 *
 * Javascript type testing library
 *
 * @file index.js
 * @copyright Alaeddine Messadi (https://almessadi.com)
 * @license MIT
 */

/**
 * Declare utils
 */
const utils = {};

/**
 * @constructor
 * @name isBoolean
 * @description Check if a given argument is type Boolean
 * @function
 * @param {*} arg value to be test
 * @returns {Boolean} return true when value is type boolean
 */
utils.isBoolean = (arg) => typeof arg === 'boolean';

/**
 * @name isNotBoolean
 * @description Check if a given argument is type Boolean
 * @function
 * @param {*} arg value to be test
 * @returns {Boolean} return true when value is not type boolean
 */
utils.isNotBoolean = (arg) => typeof arg !== 'boolean';

/**
 * @name isNumber
 * @description Check if a given argument is type 'boolean'
 * @function
 * @param {*} arg value to be test
 * @returns {Boolean} return true when value is type Boolean
 */
utils.isNumber = (arg) => typeof arg === 'number';

/**
 * @name isNotNumber
 * @description Check if a given argument is not type 'boolean'
 * @function
 * @param {*} arg value to be test
 * @returns {Boolean} return true when value is not type Boolean
 */
utils.isNotNumber = (arg) => typeof arg !== 'number';

/**
 * @name isString
 * @description Check if a given argument is type 'string'
 * @function
 * @param {*} arg value to be test
 * @returns {Boolean} return true when value is type String
 */
utils.isString = (arg) => typeof arg === 'string';

/**
 * @name isNotString
 * @description Check if a given argument is not type 'string'
 * @function
 * @param {*} arg value to be test
 * @returns {Boolean} return true when value is not type String
 */
utils.isNotString = (arg) => typeof arg !== 'string';

/**
 * @name isSymbol
 * @description Check if a given argument is not type 'Symbol'
 * @function
 * @param {*} arg value to be test
 * @returns {Boolean} return true when value is not type Symbol
 */
utils.isSymbol = (arg) => typeof arg === 'symbol';

/**
 * @name isNotSymbol
 * @description Check if a given argument is not type 'Symbol'
 * @function
 * @param {*} arg value to be test
 * @returns {Boolean} return true when value is not type Symbol
 */
utils.isNotSymbol = (arg) => typeof arg !== 'symbol';

/**
 * @name isNull
 * @description Check if a given argument is not type 'null'
 * @function
 * @param {*} arg value to be test
 * @returns {Boolean} return true when value is not type Null
 */
utils.isNull = (arg) => arg === null;

/**
 * @name isNotNull
 * @description Check if a given argument is not type 'null'
 * @function
 * @param {*} arg value to be test
 * @returns {Boolean} return true when value is not type Null
 */
utils.isNotNull = (arg) => arg !== null;

/**
 * @name isUndefined
 * @description Check if a given argument is not type 'undefined'
 * @function
 * @param {*} arg value to be test
 * @returns {Boolean} return true when value is not type Undefined
 */
utils.isUndefined = (arg) => typeof arg === 'undefined' && arg === void 0;

/**
 * @name isNotUndefined
 * @description Check if a given argument is not type 'undefined'
 * @function
 * @param {*} arg value to be test
 * @returns {Boolean} return true when value is not type Undefined
 */
utils.isNotUndefined = (arg) => typeof arg !== 'undefined';

/**
 * @name isNullOrUndefined
 * @description Check if a given argument is null or undefined
 * @function
 * @param {*} arg value to be test
 * @returns {Boolean} return true when value is null or undefined
 */
utils.isNullOrUndefined = (arg) => arg == null;

/**
 * @name isNotNullOrUndefined
 * @description Check if a given argument is not null or undefined
 * @function
 * @param {*} arg value to be test
 * @returns {Boolean} return true when value is not null or undefined
 */
utils.isNotNullOrUndefined = (arg) => arg != null;

/**
 * @name isArray
 * @description Check if a given argument is type Array
 * @function
 * @param {*} arg value to be test
 * @returns {Boolean} return true when value is type Array
 */
utils.isArray = (arg) => ((Array.isArray) ? Array.isArray(arg) : Object.prototype.toString.call(arg) === '[object Array]');

/**
 * @name isNotArray
 * @description Check if a given argument is not type 'Array'
 * @function
 * @param {*} arg value to be test
 * @returns {Boolean} return true when value is not type Array
 */
utils.isNotArray = (arg) => ((Array.isArray) ? Array.isArray(arg) === false : Object.prototype.toString.call(arg) !== '[object Array]');

/**
 * @name isObject
 * @description Check if a given argument is type 'object'
 * @function
 * @param {*} arg value to be test
 * @returns {Boolean} return true when value is type Object
 */
utils.isObject = (arg) => typeof arg === 'object' && arg !== null;

/**
 * @name isNotObject
 * @description Check if a given argument is not type 'object'
 * @function
 * @param {*} arg value to be test
 * @returns {Boolean} return true when value is not type Object
 */
utils.isNotObject = (arg) => typeof arg !== 'object';

/**
 * @name isPrimitive
 * @description Check if a given argument is a primitive type
 * @function
 * @param {*} arg value to be test
 * @returns {Boolean} return true when value is a primitive type
 */
utils.isPrimitive = (arg) => (arg === null || typeof arg === 'string' || typeof arg === 'number' || typeof arg === 'boolean' || typeof arg === 'symbol' || typeof arg === 'undefined');

/**
 * @name isNotPrimitive
 * @description Check if a given argument is not a primitive type
 * @function
 * @param {*} arg value to be test
 * @returns {Boolean} return true when value is not a primitive type
 */
utils.isNotPrimitive = (arg) => (arg !== null && typeof arg !== 'string' && typeof arg !== 'number' && typeof arg !== 'boolean' && typeof arg !== 'symbol' && typeof arg !== 'undefined');

/**
 * @name isError
 * @description Check if a given argument is Error
 * @function
 * @param {*} arg value to be test
 * @returns {Boolean} return true when value is Error
 */
utils.isError = (arg) => Object.prototype.toString.call(arg) === '[object Error]' || arg instanceof Error;

/**
 * @name isNotError
 * @description Check if a given argument is not Error
 * @function
 * @param {*} arg value to be test
 * @returns {Boolean} return true when value is not an Error
 */
utils.isNotError = (arg) => Object.prototype.toString.call(arg) !== '[object Error]' || !(arg instanceof Error);

/**
 * @name isDate
 * @description Check if a given argument is type 'Date'
 * @function
 * @param {*} arg value to be test
 * @returns {Boolean} return true when value is type Date
 */
utils.isDate = (arg) => Object.prototype.toString.call(arg) === '[object Date]';

/**
 * @name isNotDate
 * @description Check if a given argument is not type 'date'
 * @function
 * @param {*} arg value to be test
 * @returns {Boolean} return true when value is not type Date
 */
utils.isNotDate = (arg) => Object.prototype.toString.call(arg) !== '[object Date]';

/**
 * @name isFunction
 * @description Check if a given argument is type 'function'
 * @function
 * @param {*} arg value to be test
 * @returns {Boolean} return true when value is type Undefined
 */
utils.isFunction = (arg) => typeof arg === 'function';

/**
 * @name isNotFunction
 * @description Check if a given argument is not type 'function'
 * @function
 * @param {*} arg value to be test
 * @returns {Boolean} return true when value is not type Undefined
 */
utils.isNotFunction = (arg) => typeof arg !== 'function';

/**
 * @name isRegExp
 * @description Check if a given argument is type 'RegExp'
 * @function
 * @param {*} arg value to be test
 * @returns {Boolean} return true when value is type RegExp
 */
utils.isRegExp = (arg) => Object.prototype.toString.call(arg) === '[object RegExp]';

/**
 * @name isNotRegExp
 * @description Check if a given argument is not type 'RegExp'
 * @function
 * @param {*} arg value to be test
 * @returns {Boolean} return true when value is not type RegExp
 */
utils.isNotRegExp = (arg) => Object.prototype.toString.call(arg) !== '[object RegExp]';

/**
 * @name isEmpty
 * @description Check if a given argument is Empty
 * @function
 * @param {*} arg value to be test
 * @returns {Boolean} return true when value is Empty
 */
utils.isEmpty = (arg) => {
  if (Object.prototype.toString.call(arg) === '[object Object]') {
    return (Object.keys(arg).length === 0 && arg.constructor === Object);
  }
  return (arg.hasOwnProperty('length') ? arg.length === 0 : false);
};

/**
 * @name isNotEmpty
 * @description Check if a given argument is not Empty
 * @function
 * @param {*} arg value to be test
 * @returns {Boolean} return true when value is not Empty
 */
utils.isNotEmpty = (arg) => {
  if (Object.prototype.toString.call(arg) === '[object Object]') {
    return (Object.keys(arg).length > 0 && arg.constructor === Object);
  }
  return (arg.hasOwnProperty('length') ? arg.length > 0 : false);
};

module.exports = utils;
