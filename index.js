var triangleNumber = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (triangle(nums[i], nums[j], nums[k])) {
          count++;
        }
      }
    }
  }
  return count;
};
const triangle = (a, b, c) => {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  }
  return false;
};
console.log(triangleNumber([24, 3, 82, 22, 35, 84, 19]));
