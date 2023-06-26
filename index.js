var averageValue = function (nums) {
  let divisors = [];
  nums = nums.filter((i) => i % 2 == 0);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3 == 0) {
      divisors.push(nums[i]);
    }
  }
  return divisors.length > 0
    ? Math.floor(divisors.reduce((a, b) => a + b, 0) / divisors.length)
    : 0;
};
console.log(
  averageValue([
    94, 65, 82, 40, 79, 74, 92, 84, 37, 19, 16, 85, 20, 79, 25, 89, 55, 67, 84,
    3, 79, 38, 16, 44, 2, 54, 58, 94, 69, 71, 14, 24, 13, 21,
  ])
);
