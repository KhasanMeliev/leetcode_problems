var countWords = function (words1, words2) {
  let count = 0;
  let no;
  no = words1.filter((elem, index) => {
    return words1.indexOf(elem) !== index;
  });
  delete words1[no];
  return words1;
};

console.log(
  countWords(
    ["leetcode", "is", "amazing", "as", "is", "as"],
    ["amazing", "leetcode", "is"]
  )
);
