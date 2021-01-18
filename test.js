/* global test, expect, describe */
/* eslint no-undef: "error" */

const util = require('./index');

describe('Boolean type', () => {
  test('isBoolean', () => {
    expect(util.isBoolean(true)).toBe(true);
    expect(util.isBoolean(1)).toBe(false);
  });

  test('isNotBoolean', () => {
    expect(util.isNotBoolean('true')).toBe(true);
    expect(util.isNotBoolean(false)).toBe(false);
  });
});

describe('Number type', () => {
  test('isNumber', () => {
    expect(util.isNumber(1)).toBe(true);
    expect(util.isNumber('1')).toBe(false);
  });

  test('isNotNumber', () => {
    expect(util.isNotNumber('1')).toBe(true);
    expect(util.isNotNumber(1)).toBe(false);
  });
});

describe('String type', () => {
  test('isString', () => {
    expect(util.isString('1')).toBe(true);
    expect(util.isString(1)).toBe(false);
  });

  test('isNotString', () => {
    expect(util.isNotString(1)).toBe(true);
    expect(util.isNotString('1')).toBe(false);
  });
});

describe('Undefined type and Null', () => {
  const varNull = null;
  let varUndefined;
  const varValue = 0;

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
