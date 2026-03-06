const swap = (array, index1, index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
};

const pivot = (array, start = 0, right = array.length - 1) => {
  const pivot = array[start];
  let swapIndex = start;  

  for (let i = start + 1; i < array.length; i++) {
    if (pivot > array[i]) {
      swapIndex++;
      swap(array, swapIndex, i);
    }
  }

  swap(array, start, swapIndex);
  return swapIndex;
};

const quickSort = (array, left = 0, right = array.length - 1) => {
  if (left < right) {
    const pivotIndex = pivot(array, left, right);

    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
};

console.log(quickSort([7, 2, 8, 3, 9, 4, 6, 1]));
