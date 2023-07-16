var sumFourDivisors = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 2;
    let currArr = [1, nums[i]];
    for (let j = 2; j < nums[i]; j++) {
      if (nums[i] % j == 0) {
        count++;
        currArr.push(j);
      }
      if (count > 4) break;
    }
    if (count === 4) result.push(...currArr);
  }
  return result.reduce((a, b) => a + b, 0);
};

console.log(sumFourDivisors([21, 4, 7]));
