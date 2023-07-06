var isSameAfterReversals = function (num) {
  if (num == 0 || num % 10 !== 0) {
    return true;
  }
  return false;
};

console.log(isSameAfterReversals(526));
console.log(isSameAfterReversals(1800));
