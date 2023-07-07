var countPrefixes = function (words, s) {
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i] === s.slice(0, words[i].length)) {
      arr.push(words[i]);
    }
  }
  return arr.length;
};

console.log(countPrefixes(["a", "b", "c", "ab", "bc", "abc"], "abc"));
