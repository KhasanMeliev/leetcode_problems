var isSumEqual = function (firstWord, secondWord, targetWord) {
  let nums = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
  };
  let first = [];
  let second = [];
  let third = [];
  let max = Math.max(firstWord.length, secondWord.length, targetWord.length);
  for (let i = 0; i < max; i++) {
    first.push(nums[firstWord[i]]);
    second.push(nums[secondWord[i]]);
    third.push(nums[targetWord[i]]);
  }

  return (
    parseInt(first.join("")) + parseInt(second.join("")) ===
    parseInt(third.join(""))
  );
};
console.log(isSumEqual("d", "b", "aaaaae"));
