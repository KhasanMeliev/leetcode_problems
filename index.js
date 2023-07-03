var areOccurrencesEqual = function (s) {
  let map = {};
  for (let i of s) {
    map[i] = map[i] + 1 || 1;
  }
  let arr = new Set(Object.values(map));
  return arr.size == 1;
};

console.log(areOccurrencesEqual("aaabb"));
