var increasingTriplet = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1] && nums[i + 1] < nums[i + 2]) {
      return true;
    }
  }
  return false;
};
console.log(increasingTriplet([20, 100, 10, 12, 5, 13]));

