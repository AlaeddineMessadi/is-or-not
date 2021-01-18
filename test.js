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
