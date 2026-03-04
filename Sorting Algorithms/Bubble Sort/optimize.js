const swap = (array, index1, index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
};

const bubbleSort = (array) => {
  const len = array.length;

  for (let i = len; i > 0; i--) {
    let noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
      noSwap = false;
    }
    if (noSwap) {
      break;
    }
  }

  return array;
};

console.log(bubbleSort([23, 65, 82, 34, 15, 43]));
