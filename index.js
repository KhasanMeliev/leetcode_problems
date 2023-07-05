var sortColors = function (nums) {
  let nol = [];
  let one = [];
  let two = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      nol.push(nums[i]);
    } else if (nums[i] == 1) {
      one.push(nums[i]);
    } else {
      two.push(nums[i]);
    }
  }

  return [nol, one, two].flat();
};
console.log(sortColors([2, 0, 2, 1, 1, 0]));
