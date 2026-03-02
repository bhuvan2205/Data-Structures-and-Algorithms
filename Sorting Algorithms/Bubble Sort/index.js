const swap = (array, index1, index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
};

const bubbleSort = (array) => {
  const len = array.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }

  return array;
};

console.log(bubbleSort([34, 23, 47, 54, 67, 21]));
