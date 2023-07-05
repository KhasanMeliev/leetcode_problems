var kidsWithCandies = function (candies, extraCandies) {
  let result = [];
  let max = Math.max(...candies);
  candies = candies.map((i) => i + extraCandies);
  for (let i = 0; i < candies.length; i++) {
    candies[i] >= max ? result.push(true) : result.push(false);
  }
  return result;
};
