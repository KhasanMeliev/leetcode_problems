var delNodes = function (root, to_delete) {
  let arr = [];
  for (let i = 0; i < root.length; i++) {
    if (root[i] !== to_delete[i]) {
      arr.push(root);
    } else {
      return -1;
    }
  }
  return arr;
};
console.log(delNodes([1, 2, 3, 4, 5, 6, 7], [3, 5]));
