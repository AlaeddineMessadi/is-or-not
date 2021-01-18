/* global test, expect */
/* eslint no-undef: "error" */

const util = require('./index');

test('isBoolean', () => {
  expect(util.isBoolean(true)).toBe(true);
  expect(util.isBoolean(1)).toBe(false);
});

test('isNotBoolean', () => {
  expect(util.isNotBoolean(true)).toBe(true);
  expect(util.isNotBoolean(1)).toBe(false);
});
