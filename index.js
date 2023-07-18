var isPerfectSquare = function (num) {
  if (num == 1) return true;
  for (let i = 0; i < num; i++) {
    if (i * i == num) {
      return true;
    }
  }
  return false;
};

console.log(isPerfectSquare(16));
