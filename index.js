var firstPalindrome = function (words) {
  let palindromes = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i] === words[i].toString().split("").reverse().join("")) {
      palindromes.push(words[i]);
    }
  }
  return palindromes.length > 0 ? palindromes[0] : "";
};
