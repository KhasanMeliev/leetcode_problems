var firstPalindrome = function (words) {
  let palindromes = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i] === words[i].split("").reverse().join("")) {
      palindromes.push(words[i]);
    }
  }
  return palindromes[0];
};

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));
