var halvesAreAlike = function (s) {
  let arr = [s].toString().split("");
  let first = arr.slice(0, arr.length / 2);
  let second = arr.slice(arr.length / 2);
  let count1 = first.filter((letter) => "aeiouAEIOU".includes(letter)).length;
  let count2 = second.filter((letter) => "aeiouAEIOU".includes(letter)).length;
  return count1 == count2;
};

console.log(halvesAreAlike("Uo"));
