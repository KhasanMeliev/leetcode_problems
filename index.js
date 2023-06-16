var isEmpty = function (obj) {
  var size = Object.keys(obj).length;
  if (size === 0) {
    return true;
  }
  return false;
};

console.log(isEmpty([]));
