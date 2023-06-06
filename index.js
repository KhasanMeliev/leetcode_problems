var fibGenerator = function (n) {
  let curr = 0;
  let prev = 1;
  let nextTerm;
  let array = [];
  if (n < 1) {
    return 1;
  } else {
    for (let i = 1; i <= n; i++) {
      array.push(curr);
      nextTerm = curr + prev;
      curr = prev;
      prev = nextTerm;
    }
  }
  return array;
};
fibGenerator(5);
