const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const countDigits = (number) => {
  const numberString = Math.abs(number).toString();
  return numberString.length;
};

const maxDigits = (numbers) => {
  let max = -Infinity;
  for (const value of numbers) {
    max = Math.max(max, countDigits(value));
  }

  return max;
};

const radixSort = (numbers) => {
  const maxDigitCount = maxDigits(numbers);

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < numbers.length; i++) {
      const digit = getDigit(numbers[i], k);
      digitBuckets[digit].push(numbers[i]);
    }
    numbers = [].concat(...digitBuckets);
  }

  return numbers;
};

console.log(radixSort([34, 678, 1, 983, 5524, 7, 23]));
