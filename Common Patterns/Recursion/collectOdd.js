const collectOdd = (array) => {
  let result = [];

  const helper = (arr) => {
    if (arr.length === 0) return;

    const el = arr[0];
    if (el % 2 !== 0) {
      result.push(el);
    }

    helper(arr.slice(1));
  };

  helper(array);
  console.log(result);
};

collectOdd([1, 2, 3, 4, 5]);
