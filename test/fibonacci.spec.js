import { fib } from '../src/fibonacci';

describe('fibonacci sequence with recursion', () => {
  test('n=1', () => {
    expect(fib(1)).toBe(0);
  });
  test('n=3', () => {
    expect(fib(3)).toBe(1);
  });
  test('n=5', () => {
    expect(fib(5)).toBe(3);
  });
  test('n=19', () => {
    expect(fib(20)).toBe(4181);
  });
});
