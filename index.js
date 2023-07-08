var reversePrefix = function (word, ch) {
  if (!word.includes(ch)) {
    return word;
  }
  return (
    ch +
    [word.slice(0, word.indexOf(ch))].toString().split("").reverse().join("") +
    word.slice(word.indexOf(ch) + 1, word.length)
  );
};
console.log(reversePrefix("abcdefd", "d"));
