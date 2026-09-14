const fibonacci = (n) => {
  if (n === 0 || n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
};

const start = performance.now();
console.log(fibonacci(40));
const end = performance.now();
console.log(`Task took ${end - start} ms`);
