var countNegatives = function (grid) {
  let merged = [].concat.apply([], grid);
  let count = 0;
  for (let i = 0; i < merged.length; i++) {
    if (merged[i] < 0) {
      count++;
    }
  }
  return count;
};

console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);
