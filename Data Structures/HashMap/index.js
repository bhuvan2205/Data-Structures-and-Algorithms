const hashFunction = (key, size = 10) => {
  let total = 0;
  const PRIME = 31;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    const char = key[i];
    const value = char.charCodeAt(0);
    total = (total * PRIME + value) % size;
  }

  return total;
};

console.log(hashFunction("red"));
console.log(hashFunction("blue"));
console.log(hashFunction("pink"));
console.log(hashFunction("violet"));
