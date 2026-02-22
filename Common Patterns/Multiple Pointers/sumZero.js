// Find the first pair of element that addition should give zero from given array

const array = [-3, -2, -1, 0, 1, 2, 4];

const sumZero = (array) => {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const sum = array[left] + array[right];
    if (sum === 0) return true;
    else if (sum > 0) right--;
    else left++;
  }
  return false;
};

console.log(sumZero(array));
