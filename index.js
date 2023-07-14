var findSubarrays = function (nums) {
  let sums = [];
  if (nums.length <= 2) {
    return false;
  }
  for (let i = 0; i < nums.length; i++) {
    sums.push(nums[i] + nums[i + 1]);
  }
  sums = sums.filter((i) => {
    return !Number.isNaN(i);
  });
  return [...new Set(sums)].length === 1 ? true : false;
};

console.log(findSubarrays([1, 2, 3, 2, 1]));
