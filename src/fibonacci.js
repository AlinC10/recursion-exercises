export function fib(n, fibArr = [0, 1]) {
  if (fibArr.length > n) return fibArr[n - 1];

  if (n <= 2) {
    return fibArr[n - 1];
  }

  fibArr.push(fib(n - 1, fibArr) + fib(n - 2, fibArr));

  return fibArr[n - 1];
}
