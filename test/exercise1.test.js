const multiply = require('../src/exercise1.js').multiply;

describe('multiply without arithmetic operator', () => {
  test('two positive numbers', () => {
    expect(multiply(4, 2)).toBe(8);
  });
  test('two negative numbers', () => {
    expect(multiply(-5, -3)).toBe(15);
  });
  test('the first parameter positive and the second negative', () => {
    expect(multiply(2, -9)).toBe(-18);
  });
  test('two first parameter negative and the second positive', () => {
    expect(multiply(-2, 3)).toBe(-6);
  });
});
