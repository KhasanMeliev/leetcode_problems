var chunk = function (arr, size) {
  let chunkedArr = [];
  let i = 0;
  while (i < arr.length) {
    chunkedArr.push(arr.slice(i, i + size));
    i += size;
  }
  return chunkedArr;
};
console.log(chunk([1, 2, 3, 4, 5, 6], 3));
