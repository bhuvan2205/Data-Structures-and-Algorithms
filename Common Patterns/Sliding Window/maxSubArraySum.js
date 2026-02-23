const array = [51, 25, 43, 53, 23, 74, 66, 34, 56];

// Naive approach - O(n^2)

// const maxSubArraySum = (array, length) => {
//   if (length > array.length) {
//     return null;
//   }

//   let max = -Infinity;

//   for (let i = 0; i < array.length - length + 1; i++) {
//     let temp = 0;
//     for (let j = 0; j < length; j++) {
//       temp = temp + array[i + j];
//     }

//     if (temp > max) {
//       max = temp;
//     }
//   }

//   return max;
// };

const maxSubArraySum = (array, length) => {
  if (length > array.length) return 0;

  let max = 0;
  let temp = 0;

  for (let i = 0; i < length; i++) {
    max += array[i];
  }

  temp = max;

  for (let j = length; j < array.length; j++) {
    temp = temp - [array[j - length]] + array[j];
    max = Math.max(max, temp);
  }

  console.log("Max", max);
};

maxSubArraySum(array, 3);
