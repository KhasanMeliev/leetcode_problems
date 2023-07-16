var minimumCost = function (cost) {
  cost = cost.sort((a, b) => b - a);
  return cost.reduce((sum, curr, ind) => sum + (ind % 3 == 2 ? 0 : curr), 0);
};
console.log(minimumCost([6, 5, 7, 9, 2, 2]));
