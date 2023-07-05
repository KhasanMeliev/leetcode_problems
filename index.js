var kthFactor = function (n, k) {
  let divisors = [];
  for (let i = 0; i <= n; i++) {
    if (n % i == 0) {
      divisors.push(i);
    }
  }
  return divisors.length >= k ? divisors[k - 1] : -1;
};

console.log(kthFactor(7, 2));
