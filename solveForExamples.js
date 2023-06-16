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
{
  // 2733. Neither Minimum nor Maximum
  // var findNonMinOrMax = function (nums) {
  //   if (nums.length < 3) {
  //     return -1;
  //   }
  //   let sorted = nums.sort((a, b) => a - b);
  //   return sorted[1];
  // };
  // console.log(findNonMinOrMax([2, 4, 25]));
}

{
  // 414. Third Maximum Number
  // var thirdMax = function (nums) {
  //   nums = [...new Set(nums)];
  //   let result = nums.sort((a, b) => b - a);
  //   if (result.length < 3) {
  //     return result[0];
  //   }
  //   return result[2];
  // };
  // console.log(thirdMax([2, 3, 3, 1]));
}
{
  // 215. Kth Largest Element in an Array
  // var findKthLargest = function (nums, k) {
  //   let s = k - 1;
  //   nums = nums.sort((a, b) => b - a);
  //   return nums[s];
  // };
  // console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
}
{
  // 905. Sort Array By Parity
  // var sortArrayByParity = function (nums) {
  //   let newArr = [];
  //   for (let i = 0; i < nums.length; i++) {
  //     nums[i] % 2 == 0 ? newArr.unshift(nums[i]) : newArr.push(nums[i]);
  //   }
  //   return newArr;
  // };
  // console.log(sortArrayByParity([3, 1, 2, 4]));
}
{
  // 2164. Sort Even and Odd Indices Independently
  // var sortEvenOdd = function (nums) {
  //   let even = [];
  //   let odd = [];
  //   let result = [];
  //   for (let i = 0; i < nums.length; i++) {
  //     if (i % 2 == 0) {
  //       even.push(nums[i]);
  //     } else {
  //       odd.push(nums[i]);
  //     }
  //   }
  //   even.sort((a, b) => a - b);
  //   odd.sort((a, b) => b - a);
  //   for (let j = 0; j < nums.length / 2; j++) {
  //     if (even[j]) {
  //       result.push(even[j]);
  //     }
  //     if (odd[j]) {
  //       result.push(odd[j]);
  //     }
  //   }
  //   return result;
  // };
  // console.log(sortEvenOdd([4, 1, 2, 3]));
}
{
  // 2231. Largest Number After Digit Swaps by Parity
  // var largestInteger = function (num) {
  //   let nums = [num]
  //     .toString()
  //     .split("")
  //     .map((str) => Number(str));
  //   let even = [];
  //   let odd = [];
  //   for (i = 0; i < nums.length; i++) {
  //     nums[i] % 2 == 0 ? even.push(nums[i]) : odd.push(nums[i]);
  //   }
  //   odd.sort((a, b) => a - b);
  //   even.sort((a, b) => a - b);
  //   const largest = [];
  //   for (let i = 0; i < nums.length; i++) {
  //     nums[i] % 2 == 0 ? largest.push(even.pop()) : largest.push(odd.pop());
  //   }
  //   return largest.join("");
  // };
  // console.log(largestInteger(1234));
}
{
  // 747. Largest Number At Least Twice of Others
  // var dominantIndex = function (nums) {
  //   let arr = [];
  //   for (let i = 0; i < nums.length; i++) {
  //     arr.push(nums[i]);
  //   }
  //   arr = arr.sort((a, b) => b - a);
  //   if (arr[0] / 2 >= arr[1]) {
  //     return nums.indexOf(arr[0]);
  //   }
  //   return -1;
  // };
  // console.log(dominantIndex([0, 0, 0, 1]));
}

{
  // 2154. Keep Multiplying Found Values by Two
  // var findFinalValue = function (nums, original) {
  //   while (nums.includes(original)) {
  //     original *= 2;
  //   }
  //   return original;
  // };
  // console.log(findFinalValue([5, 3, 6, 1, 12], 3));
}

{
  // 2706. Buy Two Chocolates
  // var buyChoco = function (prices, money) {
  //   prices = prices.sort((a, b) => a - b);
  //   let sum = prices[0] + prices[1];
  //   if (sum > money) {
  //     return money;
  //   } else {
  //     return money - sum;
  //   }
  // };
  // console.log(buyChoco([98, 54, 6, 34, 66, 63, 52, 39], 62));
}
