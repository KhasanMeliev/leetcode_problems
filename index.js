var splitNum = function (num) {
  num = num
    .toString()
    .split("")
    .map((s) => Number(s));

  let even = [];
  let odd = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 == 0) even.push(num[i]);
    else odd.push(num[i]);
  }
  // if (even.length === 0) {
  //   return odd.reduce((a, b) => a + b, 0);
  // }
  // if (odd.length === 0) {
  //   return even.reduce((a, b) => a + b, 0);
  // } else {
  //   return parseInt(even.sort().join("")) + parseInt(odd.sort().join(""));
  // }
  return parseInt(even);
};
console.log(splitNum(100001));
