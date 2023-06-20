var intersect = function (nums1, nums2) {
  let arr = [];
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      arr.push(nums1[i]); 
    }
  }
  return [...new Set(arr)];
};

console.log(intersect([1, 2, 2, 1], [1, 2]));
