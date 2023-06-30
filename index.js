var titleToNumber = (columnTitle) => {
  let sum = 0;
  let index = 1;
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    sum += index * (columnTitle[i].charCodeAt() - 64);
    index *= 26;
  }
  return sum;
};

console.log(titleToNumber("AB"));
