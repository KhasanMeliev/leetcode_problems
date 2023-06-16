var buyChoco = function (prices, money) {
  prices = prices.sort((a, b) => a - b);
  let sum = prices[0] + prices[1];
  if (sum > money) {
    return money;
  } else {
    return money - sum;
  }
};

console.log(buyChoco([98, 54, 6, 34, 66, 63, 52, 39], 62));
