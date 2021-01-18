/* global test, expect */
/* eslint no-undef: "error" */

const util = require('./index');

test('isBoolean', () => {
  expect(util.isBoolean(true)).toBe(true);
});
