var sortEvenOdd = function (nums) {
  let even = [];
  let odd = [];
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 == 0) {
      even.push(nums[i]);
    } else {
      odd.push(nums[i]);
    }
  }
  even.sort((a, b) => a - b);
  odd.sort((a, b) => b - a);
  for (let j = 0; j < nums.length / 2; j++) {
    if (even[j]) {
      result.push(even[j]);
    }
    if (odd[j]) {
      result.push(odd[j]);
    }
  }
  return result;
};

console.log(sortEvenOdd([4, 1, 2, 3]));
