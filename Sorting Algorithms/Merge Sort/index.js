const swap = (array, index1, index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
};

const merge = (array1, array2) => {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      result.push(array1[i]);
      i++;
    } else {
      result.push(array2[j]);
      j++;
    }
  }

  while (i < array1.length) {
    result.push(array1[i]);
    i++;
  }

  while (j < array2.length) {
    result.push(array2[j]);
    j++;
  }

  return result;
};

const mergeSort = (array) => {
  console.log("Array", array);
  if (array.length <= 1) return array;

  const middle = Math.floor(array.length / 2);

  let left = mergeSort(array.slice(0, middle));
  let right = mergeSort(array.slice(middle));

  console.log("left", left, "right", right);

  return merge(left, right);
};

console.log(mergeSort([4, 5, 2, 1, 5, 6, 8]));
