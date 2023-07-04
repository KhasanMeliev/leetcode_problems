var vowelStrings = function (words, queries) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  let result = [];
  let answer = [];
  for (let i = 0; i < queries.length; i++) {
    result.push(words.slice(queries[i][0], queries[i][1] + 1));
  }
  // for (let j = 0; j < result.length; j++) {
  // if (result[j].join(" ").includes(words[j])) {
  //   answer.push(result[j]);
  // } else {
  //   answer.push(0);
  // }
  // };
  // return answer;

 
};
console.log(
  vowelStrings(
    ["aba", "bcb", "ece", "aa", "e"],
    [
      [0, 2],
      [1, 4],
      [1, 1],
    ]
  )
);
// console.log(
//   vowelStrings(
//     ["a", "e", "i"],
//     [
//       [0, 2],
//       [0, 1],
//       [2, 2],
//     ]
//   )
// );
