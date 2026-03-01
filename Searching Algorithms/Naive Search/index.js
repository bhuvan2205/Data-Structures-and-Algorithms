const naiveSearch = (string, subString) => {
  let count = 0;
  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < subString.length; j++) {
      if (subString[j] != string[i + j]) {
        break;
      }
      if (j === subString.length - 1) {
        count++;
      }
    }
  }
  console.log(count);
};

naiveSearch("This is my logger", "my");
