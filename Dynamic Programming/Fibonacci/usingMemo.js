const fibonacci = (n, memo = []) => {
  if (memo[n] !== undefined) return memo[n];

  if (n === 0 || n === 1) return 1;

  let res = fibonacci(n - 2, memo) + fibonacci(n - 1, memo);
  memo[n] = res;
  return res;
};

const start = performance.now();
console.log(fibonacci(40));
const end = performance.now();
console.log(`Task took ${end - start} ms`);
