const checkOdd = (array) => {
  if (array.length === 0) return;

  const el = array.pop();

  if (el % 2 != 0) {
    console.log("Odd exists!");
    return;
  }

  checkOdd(array);
};

checkOdd([10, 20, 30, 40, 50]);
