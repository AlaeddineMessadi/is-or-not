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
      expect(util.isNotString(1)).toBe(true);
      expect(util.isNotString('1')).toBe(false);
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
});
