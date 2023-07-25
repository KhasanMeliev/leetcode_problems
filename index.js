var findErrorNums = function (nums) {
  let max = Math.max(...nums);
  let realNums = [];
  let res = [];
  let a = [];
  for (let i = 1; i <= max; i++) {
    realNums.push(i);
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        res.push(nums[i]);
      }
    }
  }
  for (let i = 0; i < realNums.length; i++) {
    if (!nums.includes(realNums[i])) {
      res.push(realNums[i]);
    }
  }
  return res;
};

console.log(findErrorNums([3, 2, 3, 4, 6, 5]));
console.log(findErrorNums([3, 2, 2]));
console.log(findErrorNums([1, 1]));
// [1,2,2,4] = [1,2,3,4]
// [1,2,2] = [1,2,3]
// [2,2] = [2,1]
// [1,1] = [1,2]
// [3,2,2] = [2,1]
