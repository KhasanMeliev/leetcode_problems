var distributeCandies = function (candyType) {
  let half = Math.floor(candyType.length / 2);
  let duplicated = Array.from(new Set(candyType));
  return duplicated.length > half ? half : duplicated.length;
};
console.log(distributeCandies([1, 1, 1, 1, 2, 2, 2, 3, 3, 3]));
