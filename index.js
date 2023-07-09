var applyOperations = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = nums[i] * 2;
      nums[i + 1] = 0;
    }
  }
  let zero = nums.filter((i) => i === 0);
  const unZero = nums.filter((i) => i !== 0);
  return unZero.concat(zero);
};

console.log(applyOperations([1, 2, 2, 1, 1, 0]));
