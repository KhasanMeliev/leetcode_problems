var findSubsequences = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= nums[i + 1]) {
      result.push([nums[i], nums[i]]);
    }
  }
  return result;
};
console.log(findSubsequences([4, 6, 7, 7]));
