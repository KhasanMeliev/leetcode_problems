var averageValue = function (nums) {
  let divisible = [];
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] % 3 === 0) {
      divisible.push(nums[i]);
    }
  }

  divisible.shift();
  divisible.pop();
  return divisible.length >= 2
    ? divisible.reduce((a, b) => a + b, 0) / divisible.length
    : 0;
};
console.log(averageValue([1, 9, 10]));
