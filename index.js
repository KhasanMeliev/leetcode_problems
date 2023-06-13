var reverseList = function (head) {
  const reversedArray = [];
  for (let i = head.length - 1; i >= 0; i--) {
    const valueAtIndex = head[i];
    reversedArray.push(valueAtIndex);
  }
  return reversedArray;
};
console.log(reverseList([1, 2, 3, 4]));
