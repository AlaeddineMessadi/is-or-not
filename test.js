/* global test, expect, describe */
/* eslint no-undef: "error" */

const util = require('./index');

describe('Checking types', () => {
  const varNull = null;
  let varUndefined;
  const varValue = 0;
  const varBoolean = true;
  const varSymbol = Symbol('foo');
  const varNumber = 256;
  const varString = 'Hello World!';
  const varArray = [1, 2, 3];
  const varObject = { a: 'a' };
  const varError = new Error();
  const varDate = new Date();

  describe('Boolean type', () => {
    test('isBoolean', () => {
      expect(util.isBoolean(varBoolean)).toBe(true);
      expect(util.isBoolean(varNumber)).toBe(false);
      expect(util.isBoolean(varString)).toBe(false);
      expect(util.isBoolean(varSymbol)).toBe(false);
      expect(util.isBoolean(varNull)).toBe(false);
    });

    test('isNotBoolean', () => {
      expect(util.isNotBoolean(varString)).toBe(true);
      expect(util.isNotBoolean(varNumber)).toBe(true);
      expect(util.isNotBoolean(varSymbol)).toBe(true);
      expect(util.isNotBoolean(varUndefined)).toBe(true);
      expect(util.isNotBoolean(varBoolean)).toBe(false);
    });
  });

  describe('Number type', () => {
    test('isNumber', () => {
      expect(util.isNumber(varNumber)).toBe(true);
      expect(util.isNumber(varString)).toBe(false);
      expect(util.isNumber(varSymbol)).toBe(false);
      expect(util.isNumber(varNull)).toBe(false);
      expect(util.isNumber(varUndefined)).toBe(false);
    });

    test('isNotNumber', () => {
      expect(util.isNotNumber(varSymbol)).toBe(true);
      expect(util.isNotNumber(varString)).toBe(true);
      expect(util.isNotNumber(varBoolean)).toBe(true);
      expect(util.isNotNumber(varNumber)).toBe(false);
    });
  });

  describe('String type', () => {
    test('isString', () => {
      expect(util.isString(varString)).toBe(true);
      expect(util.isString(varNumber)).toBe(false);
      expect(util.isString(varSymbol)).toBe(false);
      expect(util.isString(varUndefined)).toBe(false);
      expect(util.isString(varBoolean)).toBe(false);
    });

    test('isNotString', () => {
      expect(util.isNotString(varNumber)).toBe(true);
      expect(util.isNotString(varNull)).toBe(true);
      expect(util.isNotString(varString)).toBe(false);
    });
  });

  describe('Symbol type', () => {
    test('isSymbol', () => {
      expect(util.isSymbol(varSymbol)).toBe(true);
      expect(util.isSymbol(varString)).toBe(false);
      expect(util.isSymbol(varNumber)).toBe(false);
      expect(util.isSymbol(varBoolean)).toBe(false);
    });

    test('isNotSymbol', () => {
      expect(util.isNotSymbol(varBoolean)).toBe(true);
      expect(util.isNotSymbol(varString)).toBe(true);
      expect(util.isNotSymbol(varUndefined)).toBe(true);
      expect(util.isNotSymbol(varSymbol)).toBe(false);
    });
  });

  describe('Undefined type and Null', () => {
    test('isUndefined', () => {
      expect(util.isUndefined(varUndefined)).toBe(true);
      expect(util.isUndefined(varNull)).toBe(false);
      expect(util.isUndefined(varValue)).toBe(false);
    });

    test('isNotUndefined', () => {
      expect(util.isNotUndefined(varUndefined)).toBe(false);
      expect(util.isNotUndefined(varNull)).toBe(true);
      expect(util.isNotUndefined(varValue)).toBe(true);
    });

    // test for Null
    test('isNull', () => {
      expect(util.isNull(varNull)).toBe(true);
      expect(util.isNull(varUndefined)).toBe(false);
      expect(util.isNull(varValue)).toBe(false);
    });

    test('isNotNull', () => {
      expect(util.isNotNull(varNull)).toBe(false);
      expect(util.isNotNull(varUndefined)).toBe(true);
      expect(util.isNotNull(varValue)).toBe(true);
    });
  });

  describe('Array type', () => {
    test('isArray', () => {
      expect(util.isArray(varArray)).toBe(true);
      expect(util.isArray(varString)).toBe(false);
      expect(util.isArray(varSymbol)).toBe(false);
      expect(util.isArray(varNull)).toBe(false);
      expect(util.isArray(varUndefined)).toBe(false);
    });

    test('isNotArray', () => {
      expect(util.isNotArray(varSymbol)).toBe(true);
      expect(util.isNotArray(varString)).toBe(true);
      expect(util.isNotArray(varBoolean)).toBe(true);
      expect(util.isNotArray(varUndefined)).toBe(true);
      expect(util.isNotArray(varArray)).toBe(false);
    });
  });

  describe('Primitive types', () => {
    test('isPrimitive', () => {
      expect(util.isPrimitive(varBoolean)).toBe(true);
      expect(util.isPrimitive(varString)).toBe(true);
      expect(util.isPrimitive(varNumber)).toBe(true);
      expect(util.isPrimitive(varSymbol)).toBe(true);
      expect(util.isPrimitive(varNull)).toBe(true);
      expect(util.isPrimitive(varUndefined)).toBe(true);
      expect(util.isPrimitive(varArray)).toBe(false);
    });

    test('isNotPrimitive', () => {
      expect(util.isNotPrimitive(varString)).toBe(false);
      expect(util.isNotPrimitive(varBoolean)).toBe(false);
      expect(util.isNotPrimitive(varSymbol)).toBe(false);
      expect(util.isNotPrimitive(varUndefined)).toBe(false);
      expect(util.isNotPrimitive(varNull)).toBe(false);
      expect(util.isNotPrimitive(varArray)).toBe(true);
    });
  });

  describe('Object type', () => {
    test('isObject', () => {
      expect(util.isObject(varArray)).toBe(true);
      expect(util.isObject(varObject)).toBe(true);
      expect(util.isObject(varString)).toBe(false);
      expect(util.isObject(varSymbol)).toBe(false);
      expect(util.isObject(varNull)).toBe(false);
      expect(util.isObject(varUndefined)).toBe(false);
    });

    test('isNotObject', () => {
      expect(util.isNotObject(varSymbol)).toBe(true);
      expect(util.isNotObject(varString)).toBe(true);
      expect(util.isNotObject(varBoolean)).toBe(true);
      expect(util.isNotObject(varUndefined)).toBe(true);
      expect(util.isNotObject(varObject)).toBe(false);
      expect(util.isNotObject(varArray)).toBe(false);
    });
  });

  describe('Error type', () => {
    test('isObject', () => {
      expect(util.isError(varError)).toBe(true);
      expect(util.isError(varObject)).toBe(false);
      expect(util.isError(varString)).toBe(false);
      expect(util.isError(varNull)).toBe(false);
      expect(util.isError(varUndefined)).toBe(false);
    });

    test('isNotObject', () => {
      expect(util.isNotError(varSymbol)).toBe(true);
      expect(util.isNotError(varUndefined)).toBe(true);
      expect(util.isNotError(varString)).toBe(true);
      expect(util.isNotError(varError)).toBe(false);
    });
  });

  describe('Date type', () => {
    test('isDate', () => {
      expect(util.isDate(varDate)).toBe(true);
      expect(util.isDate(varObject)).toBe(false);
      expect(util.isDate(varString)).toBe(false);
      expect(util.isDate(varNull)).toBe(false);
      expect(util.isDate(varError)).toBe(false);
    });

    test('isNotDate', () => {
      expect(util.isNotDate(varSymbol)).toBe(true);
      expect(util.isNotDate(varUndefined)).toBe(true);
      expect(util.isNotDate(varString)).toBe(true);
      expect(util.isNotDate(varDate)).toBe(false);
    });
  });
});
