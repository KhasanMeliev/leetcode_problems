var maximumGap = function (nums) {
  if (nums.length < 2) return [];
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length - 1; i++) {
    res.push(nums[i + 1] - nums[i]);
  }
  return res.sort((a, b) => a - b)[res.length - 1];
};

console.log(maximumGap([3, 6, 9, 1]));
