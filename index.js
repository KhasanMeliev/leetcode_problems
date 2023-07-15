var twoCitySchedCost = function (costs) {
  costs = costs.sort((a, b) => b[0] - b[1] - (a[0] - a[1]));
  let len = costs.length;
  let minCost = 0;
  for (let i = 0; i < len / 2; i++) {
    minCost += costs[i][1];
  }
  for (let i = len / 2; i < len; i++) {
    minCost += costs[i][0];
  }
  return minCost;
};
console.log(
  twoCitySchedCost([
    [10, 20],
    [30, 200],
    [400, 50],
    [30, 20],
  ])
);
