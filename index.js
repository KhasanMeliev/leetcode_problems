var isPalindrome = function (head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr.join("") == arr.reverse().join("");
};
console.log(isPalindrome([1, 2]));
