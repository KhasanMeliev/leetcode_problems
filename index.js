var vowelStrings = function (words, left, right) {
  let vowels = ["a", "e", "i", "o", "u"];
  let arr = words.slice(left, right + 1);
  let count = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === vowels[i] && arr[i][j] === vowels[i]) {
        count.push(arr[i]);
      }
    }
  }
  return count;
};

console.log(vowelStrings(["hey", "aeo", "mu", "ooo", "artro"], 1, 4));
  var findErrorNums = function (nums) {
    let max = Math.max(...nums);
    let realNums = [];
    let res = [];
    for (let i = 1; i <= max; i++) {
      realNums.push(i);
    }
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
          res.unshift(nums[i]);
        }
      }
      if (!nums.includes(realNums[i])) {
        res.push(realNums[i]);
      }
    }
    if (res.includes(undefined)) {
      res.pop();
      res.push(max + 1);
    }
    return res;
  };

console.log(findErrorNums([1, 5, 3, 2, 2, 7, 6, 4, 8, 9]));
console.log(findErrorNums([3, 2, 2]));
console.log(findErrorNums([1, 2, 2, 4]));
console.log(findErrorNums([1, 1]));
// [1,2,2,4] = [1,2,3,4]
// [1,2,2] = [1,2,3]
// [2,2] = [2,1]
// [1,1] = [1,2]
// [3,2,2] = [2,1]
