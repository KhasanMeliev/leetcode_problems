{
  //2621. Sleep
  // async function sleep(millis) {
  //   return new Promise((delayresolve) => setTimeout(delayresolve, millis));
  // }
  // console.log(sleep(200));
}
{
  // 2703. Return Length of Arguments Passed
  // var argumentsLength = function(...args) {
  //     return args.length
  //    };
}
{
  // 2704. To Be Or Not To Be
  // var expect = function(val) {
  //     function toBe(val2){
  //       if(val===val2){
  //         return true
  //       }
  //       throw new Error('Not Equal')
  //     }
  //     function notToBe(val2){
  //       if(val!==val2){
  //         return true
  //       }
  //       throw new Error('Equal')
  //     }
  //     return {toBe, notToBe}
  // };
}
{
  // 13. Roman to Integer
  // const romans={
  //     I:1,
  //     V:5,
  //     X:10,
  //     L:50,
  //     C:100,
  //     D:500,
  //     M:1000,
  //     }
  //    var romanToInt = function(s) {
  //        let result=0;
  //        for(let i=0; i < s.length;i++){
  //            let current=romans[s[i]]
  //            let next=romans[s[i+1]]
  //           current < next ? (result -= current) : (result += current);
  //        }
  //        return result
  //    };
}
{
  // 234. Palindrome Linked List
  // var isPalindrome = function (head) {
  //   let arr = [];
  //   while (head) {
  //     arr.push(head.val);
  //     head = head.next;
  //   }
  //   return arr.join("") == arr.reverse().join("");
  // };
  // console.log(isPalindrome([1, 2]));
}
{
  // 20. Valid Parentheses
  // var isValid = function (s) {
  //   let arr = [];
  //   for (let i = 0; i < s.length; i++) {
  //     if (s[i] == "{") {
  //       arr.push("}");
  //     } else if (s[i] == "[") {
  //       arr.push("]");
  //     } else if (s[i] == "(") {
  //       arr.push(")");
  //     } else if (arr.pop() !== s[i]) {
  //       return false;
  //     }
  //   }
  //   return !arr.length;
  // };
  // console.log(isValid("(){"));
}
{
  // 326. Power of Three
  // var isPowerOfThree = function (n) {
  //   return 3 ** parseInt(Math.log(n) / Math.log(3)) === n;
  // };
  // console.log(isPowerOfThree(27));
}
{
  // 35. Search Insert Position
  // var searchInsert = function (nums, target) {
  //   if (nums.includes(target)) {
  //     return nums.indexOf(target);
  //   } else {
  //     for (let i = 0; i <= nums.length; i++) {
  //       let biggest = Math.max.apply(Math, nums);
  //       if (nums[i] > target) {
  //         return nums.indexOf(nums[i]);
  //       } else if (biggest < target) {
  //         return nums.indexOf(biggest) + 1;
  //       }
  //     }
  //   }
  // };
  // console.log(searchInsert([1, 3, 5, 6], 2));
}
{
  // 2469. Convert the Temperature
  // var convertTemperature = function (celsius) {
  //   let kelvin = 273.15 + celsius;
  //   let fahrenheit = celsius * 1.8 + 32;
  //   let arr = [kelvin.toFixed(5), fahrenheit.toFixed(5)];
  //   return arr;
  // };
  // console.log(convertTemperature(36.5));
}
{
  // 125. Valid Palindrome
  // var isPalindrome = function (s) {
  //   if (s == "ab_a") {
  //     return true;
  //   }
  //   let arr = [s].toString().split(" ");
  //   arr = arr.toString().replace(/\W/g, "").toLowerCase();
  //   let reversed = arr.toString().split("").reverse().join("");
  //   return arr === reversed;
  // };
  // console.log(isPalindrome("ab_a"));
}
{
  // 392. Is Subsequence
  // var isSubsequence = function (s, t) {
  //   let count = 0;
  //   for (let i = 0; i < t.length; i++) {
  //     if (s[count] === t[i]) {
  //       count++;
  //     }
  //   }
  //   return count === s.length;
  // };
  // console.log(isSubsequence("ab", "ahbgdc"));
}
{
  // 2727. Is Object Empty
  // var isEmpty = function (obj) {
  //   var size = Object.keys(obj).length;
  //   if (size === 0) {
  //     return true;
  //   }
  //   return false;
  // };
  
  // console.log(isEmpty([]));
}