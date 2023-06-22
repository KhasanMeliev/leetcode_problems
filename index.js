var findGCD = function (nums) {
  
  nums.sort((a, b) => a - b);
  let min = nums[0];
  let max = nums[nums.length - 1];
  let divisor = 0;
  for (let i = 1; i <= min && i <= max; i++) {
    if (min % i == 0 && max % i == 0) {
      divisor = i;
    }
  }
  return divisor;
};
console.log(findGCD([3, 3]));
