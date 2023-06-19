var findLengthOfLCIS = function (nums) {
  let count = 1;
  let max = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) count++;
    else count = 1;
    max = Math.max(count, max);
  }
  return max;
};

console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));
