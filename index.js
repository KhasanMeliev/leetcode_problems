var groupAnagrams = function (strs) {
  let obj = {};
  for (let i = 0; i < strs.length; i++) {
    let sorted = strs[i].split("").sort().join("");
    if (obj[sorted]) {
      obj[sorted].push(strs[i]);
    } else {
      obj[sorted] = [strs[i]];
    }
  }
  return Object.values(obj);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
