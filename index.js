var findMaxConsecutiveOnes = function (nums) {
  let biggest = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!nums.includes(1)) {
      return 0;
    }
    if (nums[i] === nums[i + 1] && nums[i] !== 0) {
      count++;
    } else {
      count++;
      biggest = Math.max(count, biggest);
      count = 0;
    }
  }
  return biggest;
};
console.log(findMaxConsecutiveOnes([1, 0, 0, 1]));
