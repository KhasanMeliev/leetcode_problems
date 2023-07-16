var minimumAbsDifference = function (arr) {
  let res = [];
  arr = arr.sort((a, b) => a - b);
  let min = arr[1] - arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] < min) {
      min = arr[i + 1] - arr[i];
      res = [];
    }
    if (arr[i + 1] - arr[i] == min) res.push([arr[i], arr[i + 1]]);
  }
  return res;
};
console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]));
console.log(minimumAbsDifference([40, 11, 26, 27, -20]));
