var getSum = function (a, b) {
  const nums = [a, b];
  return nums.reduce((a, b) => a + b, 0);
};

console.log(getSum(2, 3));
