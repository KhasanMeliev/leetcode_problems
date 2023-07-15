var countTriples = function (n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      const square = Math.sqrt(i * i + j * j);
      if (Number.isInteger(square) && square <= n) count++;
    }
  }
  return count;
};

console.log(countTriples(5));
