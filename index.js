var reverseVowels = function (s) {
  let arr = [];
  let vowels = "aeiou".split("");
  for (let i = 0; i <= s.length; i++) {
    if (s.includes(vowels[i])) {
      arr.push(vowels[i]);
    }
  }
  arr = arr.reverse();
  for (let j = 0; j <= s.length; j++) {
    if (s.includes(vowels[j])) {
      
    }
  }
  return s;
};
console.log(reverseVowels("hello"));
