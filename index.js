var firstMissingPositive = function (nums) {
  nums = nums.filter((i) => !(i <= 0));
  nums.sort((a, b) => a - b);
  nums = [...new Set(nums)];
  if (nums.length === 1) {
    return nums[0] > 1 || nums[0] === 0 || nums[0] < 1 ? 1 : 2;
  }
  if (nums.length === 0) {
    return 1;
  }
  let biggest = nums[nums.length - 1];
  let newArr = [];
  let isEqual = true;
  let missing = 0;
  for (let i = 1; i <= biggest; i++) {
    newArr.push(i);
  }
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== newArr[j]) {
      isEqual = false;
      missing = j;
      break;
    }
  }
  if (isEqual) {
    return nums[nums.length - 1] + 1;
  } else {
    return missing + 1;
  }
};

console.log(firstMissingPositive([1, 2, 0]));
