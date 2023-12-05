const binary_search = (n) => {
  if (n < 2) {
    return n;
  }
  let res = 0;
  let left = 1;
  let right = Math.floor(n / 2);
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sqr = mid ** 2;
    if (sqr == n) {
      return mid;
    } else if (sqr < n) {
      left = mid + 1;
      res = mid;
    } else {
      right = mid - 1;
    }
  }
  return res;
};

console.log(binary_search(25837283728738));
