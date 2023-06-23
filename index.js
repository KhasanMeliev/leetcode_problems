var nextGreatestLetter = function (letters, target) {
  let res = letters.filter((i) => i !== target);
  letters.sort((a, b) => a - b);
  let greater = letters.filter((i) => i > target).sort((a, b) => a - b);
  for (let i = 0; i < letters.length; i++) {
    if (greater.length !== 0) {
      return greater[0];
    }
    return letters[0];
  }

  return greater;
};
console.log(nextGreatestLetter(["x", "x", "y", "y"], "z"));
