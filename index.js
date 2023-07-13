function totalMoney(n) {
  const k = Math.floor(n / 7);
  const x = n % 7;
  return (7 * k * (k + 7)) / 2 + (x * (2 * k + x + 1)) / 2;
}
console.log(totalMoney(20));
