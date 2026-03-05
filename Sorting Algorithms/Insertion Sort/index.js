const swap = (array, index1, index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
};

const insertionSort = (array) => {
  const len = array.length;
  for (var i = 1; i < len; i++) {
    let currentValue = array[i];
    for (var j = i - 1; j >= 0 && array[j] > currentValue; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentValue;
  }

  return array;
};

console.log(insertionSort([300, 400, 100, 210]));
