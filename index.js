var countConsistentStrings = function (allowed, words) {
  return words.filter((elem) => {
    return elem.split("").every((i) => allowed.split("").includes(i));
  }).length;
};

console.log(
  countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"])
);
