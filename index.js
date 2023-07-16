var minimumAbsDifference = function (arr) {
  let res = [];
  arr = arr.sort((a, b) => a - b);
  let min = [];
  for (let i = 0; i <= arr.length; i++) {
    min.push(arr[i + 1] - arr[i]);
    if (arr[i] < arr[i + 1] && arr[i + 1] - arr[i] === Math.min(...min)) {
      res.push([arr[i], arr[i + 1]]);
    }
  }
  return Math.min(...min);
};
console.log(minimumAbsDifference([1, 3, 6, 10, 15]));
console.log(minimumAbsDifference([40, 11, 26, 27, -20]));
// -20,11,26,27,40
