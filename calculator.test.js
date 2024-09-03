const Calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  const calculator = new Calculator();
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtracts 5 - 2 to equal 3', () => {
  const calculator = new Calculator();
  expect(calculator.subtract(5, 2)).toBe(3);
});

test('multiplies 3 * 4 to equal 12', () => {
  const calculator = new Calculator();
  expect(calculator.multiply(3, 4)).toBe(12);
});

test('divides 10 / 2 to equal 5', () => {
  const calculator = new Calculator();
  expect(calculator.divide(10, 2)).toBe(5);
});

test('throws error when dividing by zero', () => {
  const calculator = new Calculator();
  expect(() => calculator.divide(10, 0)).toThrow("Division by zero is not allowed.");
});
