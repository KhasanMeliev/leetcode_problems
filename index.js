var vowelStrings = function (words, left, right) {
  let vowels = ["a", "e", "i", "o", "u"];
  let arr = words.slice(left, right + 1);
  let count = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === vowels[i] && arr[i][j] === vowels[i]) {
        count.push(arr[i]);
      }
    }
  }
  return count;
};

console.log(vowelStrings(["hey", "aeo", "mu", "ooo", "artro"], 1, 4));
