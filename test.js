const util = require('./index');

test('isBoolean', () => {
  expect(util.isBoolean(true)).toBe(true);
});