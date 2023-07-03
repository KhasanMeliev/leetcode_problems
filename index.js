var sortSentence = function (s) {
  let arr = [s]
    .toString()
    .split(" ")
    .reverse()
    .map((element, index) => `${element.slice(-1)}${element.slice(0, -1)}`)
    .sort();

  return arr.map((elem) => elem.slice(1)).join(" ");
};
console.log(sortSentence("is2 sentence4 This1 a3"));
