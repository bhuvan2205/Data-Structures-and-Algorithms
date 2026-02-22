// Anagram - a word or phrase that is made by arranging the letters of another word or phrase in a different order.

// '', '' -> true
// 'ab', 'ba' -> true
// 'aab', 'abb' -> false

const str1 = "abcd";
const str2 = "bca";

const checkAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const lookup = {};

  for (const value of str1) {
    lookup[value] = (lookup[value] || 0) + 1;
  }

  for (const value of str2) {
    if (!lookup[value]) {
      return false;
    }
    lookup[value]--;
  }

  return true;
};

const isAnagram = checkAnagram(str1, str2);
console.log(isAnagram);
