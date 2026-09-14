const fibTable = (n) => {
  if (n === 0 || n === 1) return 1;

  const fibNums = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 2] + fibNums[i - 1];
  }

  return fibNums[n];
};

const start = performance.now();
console.log(fibTable(40));
const end = performance.now();
console.log(`Task took ${end - start} ms`);
