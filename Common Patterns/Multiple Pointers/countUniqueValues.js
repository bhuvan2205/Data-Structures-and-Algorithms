// Count Unique Number from Array

const array = [1, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6];

const countUniqueValues = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return 0;

  let left = 0;
  let right = 1;

//   while (right < arr.length) {
//     if (arr[right - 1] < arr[right]) {
//       left++;
//     }

//     right++;
//   }

  while (right < arr.length) {
    if (arr[left] < arr[right]) {
      left++;
      arr[left] = arr[right];
    }

    right++;
  }
  console.log("unique element", left + 1);
};

countUniqueValues(array);
