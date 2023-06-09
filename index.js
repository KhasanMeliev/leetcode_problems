var removeElement = function (nums, val) {
  let arrLength = nums.length;
  let removed = nums.filter((e) => e !== val);
  let totalLength = arrLength - removed.length;
  let adding = "_" * totalLength;
  return removed.push();
};
console.log(removeElement([3, 2, 2, 3, 5], 2));
