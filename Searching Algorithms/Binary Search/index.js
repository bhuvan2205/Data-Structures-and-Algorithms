const binarySearch = (array, target) => {
  let left = 0;
  let right = array.length;
  let middle = Math.floor((left + right) / 2);

  while (left < right) {
    if (array[middle] === target) {
      return middle;
    } else if (middle < target) {
      left = middle;
    } else {
      right = middle;
    }
    middle = Math.floor((left + right) / 2);
  }

  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 2));
