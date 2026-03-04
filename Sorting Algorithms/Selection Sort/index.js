const swap = (array, index1, index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
};

const selectionSort = (array) => {
  const len = array.length;
  for (let i = 0; i < len; i++) {
    let lowest = i;
    for (j = i + 1; j < len; j++) {
      if (array[j] < array[lowest]) {
        lowest = j;
      }
    }
    if (i != lowest) {
      swap(array, i, lowest);
    }
  }
  return array;
};

console.log(selectionSort([4, 9, 7, 1, 5, 3, 2, 7, 8]));
