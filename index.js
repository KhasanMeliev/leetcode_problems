var shuffle = function (nums, n) {
  let first = nums.slice(0, nums.length / 2);
  let second = nums.slice(nums.length / 2, nums.length);
  let res = [];
  for (let i = 0; i < first.length; i++) {
    res.push(first[i], second[i]);
  }
  return res;
};
console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
