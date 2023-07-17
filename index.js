var findJudge = function (n, trust) {
  let arr = [];
  for (let i = 0; i < trust.length; i++) {
    if (trust.length === 1 && trust[1] === n) {
      arr.push(trust[0]);
    }
    if (trust[i][1] === n) {
      arr.push(true);
    }
  }
  return arr.length === trust.length ? n : -1;
};
console.log(
  findJudge(4, [
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [4, 3],
  ])
);
