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

{
  // 2652. Sum Multiples
  // var sumOfMultiples = function (n) {
  //   let sum = 0;
  //   for (let i = 0; i <= n; i++) {
  //     if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
  //       sum = sum + i;
  //     }
  //   }
  //   return sum;
  // };
  // console.log(sumOfMultiples(10));
}

{
  // 273. Integer to English Words
  // var numberToWords = function (num) {
  //   const ones = [
  //     "",
  //     "One",
  //     "Two",
  //     "Three",
  //     "Four",
  //     "Five",
  //     "Six",
  //     "Seven",
  //     "Eight",
  //     "Nine",
  //   ];
  //   const oxiriTeen = [
  //     "Ten",
  //     "Eleven",
  //     "Twelve",
  //     "Thirteen",
  //     "Fourteen",
  //     "Fifteen",
  //     "Sixteen",
  //     "Seventeen",
  //     "Eighteen",
  //     "Nineteen",
  //   ];
  //   const tens = [
  //     "",
  //     "",
  //     "Twenty",
  //     "Thirty",
  //     "Forty",
  //     "Fifty",
  //     "Sixty",
  //     "Seventy",
  //     "Eighty",
  //     "Ninety",
  //   ];
  //   const hundred = "Hundred";
  //   const thousand = "Thousand";
  //   const million = "Million";
  //   const billion = "Billion";
  //   let result = "";
  //   if (num < 0) {
  //     return "No Negative number!";
  //   }
  //   if (num === 0) {
  //     return "Zero";
  //   }
  //   if (Math.floor(num / 1000000000) > 0) {
  //     result += numberToWords(Math.floor(num / 1000000000)) + " " + billion + " ";
  //     num %= 1000000000;
  //   }
  //   if (Math.floor(num / 1000000) > 0) {
  //     result += numberToWords(Math.floor(num / 1000000)) + " " + million + " ";
  //     num %= 1000000;
  //   }
  //   if (Math.floor(num / 1000) > 0) {
  //     result += numberToWords(Math.floor(num / 1000)) + " " + thousand + " ";
  //     num %= 1000;
  //   }
  //   if (Math.floor(num / 100) > 0) {
  //     result += numberToWords(Math.floor(num / 100)) + " " + hundred + "";
  //     num %= 100;
  //   }
  //   if (num > 0) {
  //     if (result != "") {
  //       result += " ";
  //     }
  //     if (num < 10) {
  //       result = result.trim() + " " + ones[num];
  //     } else if (num < 20) {
  //       result = result.trim() + " " + oxiriTeen[num % 10];
  //     } else {
  //       result = result.trim() + " " + tens[Math.floor(num / 10)];
  //       if (num % 10 > 0) {
  //         result += " " + ones[num % 10];
  //       }
  //     }
  //   }
  //   return result.trim();
  // };
  // console.log(numberToWords(1099));
}

// {
//   50. Pow(x, n)
//   var myPow = function (x, n) {
//     return Math.pow(x, n).toFixed(5);
//   };
//   console.log(myPow(2.0, 10));
// }

{
  // 27. Remove Element
  // var removeElement = function (nums, val) {
  //   let res = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] !== val) {
  //       nums[res] = nums[i];
  //       res++;
  //     }
  //   }
  //   return res;
  // };
  // console.log(removeElement([3, 2, 2, 3], 3));
}

{
  // 12. Integer to Roman
  // var intToRoman = function (num) {
  //   const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  //   const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  //   const hundreds = [
  //     "",
  //     "C",
  //     "CC",
  //     "CCC",
  //     "CD",
  //     "D",
  //     "DC",
  //     "DCC",
  //     "DCCC",
  //     "CM",
  //   ];
  //   const thousands = ["", "M", "MM", "MMM"];
  //   let result =
  //     thousands[Math.floor(num / 1000)] +
  //     hundreds[Math.floor((num % 1000) / 100)] +
  //     tens[Math.floor((num % 100) / 10)] +
  //     ones[num % 10];
  //   return result;
  // };
  // console.log(intToRoman(1994));
}

{
  // 263. Ugly Number
  // var isUgly = function (n) {
  //   if (n == 1) {
  //     return true;
  //   }
  //   let chances = [2, 3, 5];
  //   for (let i = 0; i <= chances.length; i++) {
  //     while (n && n % chances[i] === 0) {
  //       n = Math.floor(n / chances[i]);
  //     }
  //   }
  //   return n == 1;
  // };
  // console.log(isUgly(15));
}
{
  // 507. Perfect Number
  // var checkPerfectNumber = function (num) {
  //   let arr = [];
  //   for (let i = 0; i < num; i++) {
  //     if (num % i == 0) {
  //       arr.push(i);
  //     }
  //   }
  //   return arr.reduce((a, b) => a + b, 0) === num;
  // };
  // console.log(checkPerfectNumber(28));
}

{
  // 728. Self Dividing Numbers
  // var selfDividingNumbers = function (left, right) {
  //   let arr = [];
  //   let arr2 = [];
  //   for (let j = left; j <= right; j++) {
  //     arr = [];
  //     let splited = j
  //       .toString()
  //       .split("")
  //       .map((str) => {
  //         return Number(str);
  //       });
  //     for (let i = 0; i < splited.length; i++) {
  //       if (j % splited[i] === 0) {
  //         arr.push(splited[i]);
  //         if (arr.length === splited.length) {
  //           arr2.push(j);
  //         }
  //       }
  //     }
  //   }
  //   return arr2;
  // };
  // console.log(selfDividingNumbers(47, 85));
}

{
  // 2520. Count the Digits That Divide a Number
  // var countDigits = function (num) {
  //   let arr = [num]
  //     .toString()
  //     .split("")
  //     .map((str) => Number(str));
  //   let sum = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (num % arr[i] === 0) {
  //       sum += 1;
  //       continue;
  //     }
  //   }
  //   return sum;
  // };
  // console.log(countDigits(1248));
}
{
  //   2695. Array Wrapper
  //   var ArrayWrapper = function (nums) {
  //     this.nums = nums;
  //   };
  //   ArrayWrapper.prototype.valueOf = function () {
  //     return this.nums.reduce((a, b) => a + b, 0);
  //   };
  //   ArrayWrapper.prototype.toString = function () {
  //     return "[" + this.nums.toString() + "]";
  //   };
  //   var wrapper = new ArrayWrapper([1, 2, 3, 4, 5]);
  // console.log(wrapper.valueOf())
}
{
  // 179. Largest Number
  // var largestNumber = function (nums) {
  //   nums.sort((a, b) => {
  //     let first = a.toString();
  //     let second = b.toString();
  //     return parseInt(first + second) > parseInt(second + first) ? -1 : 1;
  //   });
  //   if (nums[0] == 0) {
  //     return "0";
  //   }
  //   return nums.join("");
  // };
  // console.log(largestNumber([10, 5, 9]));
}
{
  // 287. Find the Duplicate Number
  // var findDuplicate = function (nums) {
  //   nums.sort((a, b) => a - b);
  //   for (let i = 0; i < nums.length - 1; i++) {
  //     if (nums[i] == nums[i + 1]) {
  //       return nums[i];
  //     }
  //   }
  //   return -1;
  // };
  // console.log(findDuplicate([3, 1, 3, 4, 2]));
}
{
  // 41. First Missing Positive
  // var firstMissingPositive = function (nums) {
  //   let min = 1;
  //   nums.sort((a, b) => a - b);
  //   for (let i = 0; i < nums.length; i++) {
  //     if (min === nums[i]) {
  //       min++;
  //     }
  //   }
  //   return min;
  // };
  // console.log(firstMissingPositive([1, 2, 4]));
}

{
  // 448. Find All Numbers Disappeared in an Array
  // var findDisappearedNumbers = function (nums) {
  //   let max = nums.length;
  //   let arr = [...new Set(nums)];
  //   let missedNums = [];
  //   for (let i = 1; i <= max; i++) {
  //     if (!arr.includes(i)) {
  //       missedNums.push(i);
  //     }
  //   }
  //   return missedNums;
  // };
  // console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
}
{
  // 442. Find All Duplicates in an Array
  // var findDuplicates = function (nums) {
  //   nums.sort((a, b) => a - b);
  //   return nums.filter((item, index) => nums.indexOf(item) !== index);
  // };
  // console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
}
{
  // 4. Median of Two Sorted Arrays
  // var findMedianSortedArrays = function (nums1, nums2) {
  //   let merged = nums1.concat(nums2);
  //   merged.sort((a, b) => {
  //     return a - b;
  //   });
  //   let len = merged.length;
  //   if (len % 2 === 0) {
  //     return ((merged[len / 2 - 1] + merged[len / 2]) / 2).toFixed(5);
  //   } else {
  //     return merged[(len - 1) / 2].toFixed(5);
  //   }
  // };
  // console.log(findMedianSortedArrays([1, 3], [2, 4]));
}

{
  // 628. Maximum Product of Three Numbers
  // var maximumProduct = function (nums) {
  //   nums.sort((a, b) => b - a);
  //   return Math.max(
  //     nums[0] * nums[1] * nums[2],
  //     nums[nums.length - 1] * nums[nums.length - 2] * nums[0]
  //   );
  // };
  // console.log(maximumProduct([1, 2, 3, 4]));
  // console.log(maximumProduct([1, 2, 3]));
}
{
  // 674. Longest Continuous Increasing Subsequence
  // var findLengthOfLCIS = function (nums) {
  //   let count = 1;
  //   let max = 1;
  //   for (let i = 0; i < nums.length - 1; i++) {
  //     if (nums[i] < nums[i + 1]) count++;
  //     else count = 1;
  //     max = Math.max(count, max);
  //   }
  //   return max;
  // };
  // console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));
}
{
  // 977. Squares of a Sorted Array
  // var sortedSquares = function (nums) {
  //   let positive = nums.map((min) => Math.abs(min));
  //   positive.sort((a, b) => a - b);
  //   return positive.map((i) => i ** 2);
  // };
  // console.log(sortedSquares([-4, -1, 0, 3, 10]));
}
{
  // 1351. Count Negative Numbers in a Sorted Matrix
  // var countNegatives = function (grid) {
  //   let merged = [].concat.apply([], grid);
  //   let count = 0;
  //   for (let i = 0; i < merged.length; i++) {
  //     if (merged[i] < 0) {
  //       count++;
  //     }
  //   }
  //   return count;
  // };
  // console.log(
  //   countNegatives([
  //     [4, 3, 2, -1],
  //     [3, 2, 1, -1],
  //     [1, 1, -1, -2],
  //     [-1, -1, -2, -3],
  //   ])
  // );
}
{
  // 2529. Maximum Count of Positive Integer and Negative Integer
  // var maximumCount = function (nums) {
  //   let pos = 0;
  //   let neg = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] < 0) {
  //       neg++;
  //     }
  //     if (nums[i] > 0) {
  //       pos++;
  //     }
  //   }
  //   return pos > neg ? pos : neg;
  // };
  // console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2]));
}
{
  // 1295. Find Numbers with Even Number of Digits
  // var findNumbers = function (nums) {
  //   let count = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i].toString().length % 2 == 0) {
  //       count++;
  //     }
  //   }
  //   return count;
  // };
  // console.log(findNumbers([12, 345, 2, 6, 7896]));
}
