var reverseWords = function (s) {
  let str = s.split(" ");
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    newArr.push(str[i].split("").reverse().join(""));
  }
  return newArr.join(" ");
};
console.log(reverseWords("Let's take LeetCode contest"));
