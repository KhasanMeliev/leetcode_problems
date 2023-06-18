var countDigits = function (num) {
  let arr = [num]
    .toString()
    .split("")
    .map((str) => Number(str));
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (num % arr[i] === 0) {
      sum += 1;
      continue;
    }
  }
  return sum;
};

console.log(countDigits(1248));
