const numbers = [9, 3, 12, 11, 40, 28, 5];
console.log(numbers.sort()); // Output: [11, 12, 28, 3, 40, 5, 9] - Incorrect numerical sort

console.log(numbers.sort((a, b) => a - b)); // Output: [3, 5, 9, 11, 12, 28, 40] - Correct numerical sort
