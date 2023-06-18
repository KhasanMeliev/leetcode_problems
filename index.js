var ArrayWrapper = function (nums) {
  this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function () {
  return this.nums.reduce((a, b) => a + b, 0);
};

ArrayWrapper.prototype.toString = function () {
  return "[" + this.nums.toString() + "]";
};
var wrapper = new ArrayWrapper([1, 2, 3, 4, 5]);

console.log(wrapper.toString());
