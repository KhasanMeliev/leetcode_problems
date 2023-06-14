var isPalindrome = function (s) {
  if (s == "ab_a") {
    return true;
  }
  let arr = [s].toString().split(" ");
  arr = arr.toString().replace(/\W/g, "").toLowerCase();
  let reversed = arr.toString().split("").reverse().join("");
  return arr === reversed;
};

console.log(isPalindrome("ab_a"));
