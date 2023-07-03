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
{
  // 2215. Find the Difference of Two Arrays
  // var findDifference = function (nums1, nums2) {
  //   nums1 = new Set(nums1);
  //   nums2 = new Set(nums2);
  //   for (let elem of nums1) {
  //     if (nums2.has(elem)) {
  //       nums1.delete(elem);
  //     }
  //     nums2.delete(elem);
  //   }
  //   return [Array.from(nums1), Array.from(nums2)];
  // };
  // console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));
}
{
  // 349. Intersection of Two Arrays
  // var intersection = function (nums1, nums2) {
  //   let arr = [];
  //   for (let i = 0; i < nums1.length; i++) {
  //     if (nums2.includes(nums1[i])) {
  //       arr.push(nums1[i]);
  //     }
  //   }
  //   return [...new Set(arr)];
  // };
  // console.log(intersection([1, 2, 2, 1], [1, 2]));
}
{
  // 1704. Determine if String Halves Are Alike
  // var halvesAreAlike = function (s) {
  //   let arr = [s].toString().split("");
  //   let first = arr.slice(0, arr.length / 2);
  //   let second = arr.slice(arr.length / 2);
  //   let count1 = first.filter((letter) => "aeiouAEIOU".includes(letter)).length;
  //   let count2 = second.filter((letter) => "aeiouAEIOU".includes(letter)).length;
  //   return count1 == count2;
  // };
  // console.log(halvesAreAlike("Uo"));
}
{
  // 387. First Unique Character in a String
  // var firstUniqChar = function (s) {
  //   for (let i = 0; i < s.length; i++) {
  //     if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
  //       return i;
  //     }
  //   }
  //   return -1;
  // };
  // console.log(firstUniqChar("loveleetcode"));
}
{
  // 1732. Find the Highest Altitude
  // var largestAltitude = function (gain) {
  //   let t = [0];
  //   let sum = 0;
  //   for (let i = 0; i < gain.length; i++) {
  //     sum += gain[i];
  //     t.push(sum);
  //   }
  //   return Math.max.apply(Math, t);
  // };
  // console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));
}
{
  // 1662. Check If Two String Arrays are Equivalent
  // var arrayStringsAreEqual = function (word1, word2) {
  //   let first = [word1.flat().join("")];
  //   let second = [word2.flat().join("")];
  //   for (let i = 0; i < first.length; i++) {
  //     return first[i] === second[i];
  //   }
  // };
  // console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefgs"]));
}
{
  // 1684. Count the Number of Consistent Strings
  // var countConsistentStrings = function (allowed, words) {
  //   return words.filter((elem) => {
  //     return elem.split("").every((i) => allowed.split("").includes(i));
  //   }).length;
  // };
  // console.log(
  //   countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"])
  // );
}
{
  // 1678. Goal Parser Interpretation
  // var interpret = function (command) {
  //   return command.replaceAll(/\(\)/g, "o").replaceAll(/\(al\)/g, "al");
  // };
  // console.log(interpret("G()()()()(al)"));
}
{
  // 1903. Largest Odd Number in String
  // var largestOddNumber = function (num) {
  //   for (let i = num.length; i >= 0; i--) {
  //     if (num[i] % 2 === 1) {
  //       return num.slice(0, i + 1);
  //     }
  //   }
  //   return "";
  // };
  // console.log(largestOddNumber("486379402"));
}
{
  // 2264. Largest 3-Same-Digit Number in String
  // var largestGoodInteger = function (num) {
  //   let digits = [
  //     "000",
  //     "111",
  //     "222",
  //     "333",
  //     "444",
  //     "555",
  //     "666",
  //     "777",
  //     "888",
  //     "999",
  //   ];
  //   let uniqueDigits = [];
  //   let nums = [num].toString().split("").join("");
  //   for (let i = 0; i < digits.length; i++) {
  //     if (nums.includes(digits[i])) {
  //       uniqueDigits.push(digits[i]);
  //     }
  //   }
  //   return uniqueDigits.length === 1 || uniqueDigits.length === 0
  //     ? uniqueDigits.join("")
  //     : String(Math.max.apply(Math, uniqueDigits));
  // };
  // console.log(largestGoodInteger("42352338"));
}
{
  // 1961. Check If String Is a Prefix of Array
  // var isPrefixString = function (s, words) {
  //   let str2 = "";
  //   for (let i = 0; i < words.length; i++) {
  //     str2 += words[i];
  //     if (str2 === s) {
  //       return true;
  //     }
  //   }
  //   return false;
  // };
  // console.log(isPrefixString("cccc", ["cccccccccc"]));
}
{
  // 1979. Find Greatest Common Divisor of Array
  // var findGCD = function (nums) {
  //   nums.sort((a, b) => a - b);
  //   let min = nums[0];
  //   let max = nums[nums.length - 1];
  //   let divisor = 0;
  //   for (let i = 1; i <= min && i <= max; i++) {
  //     if (min % i == 0 && max % i == 0) {
  //       divisor = i;
  //     }
  //   }
  //   return divisor;
  // };
  // console.log(findGCD([3, 3]));
}
{
  // 2413. Smallest Even Multiple
  // var smallestEvenMultiple = function (n) {
  //   let len = n * 2;
  //   for (let i = 2; i <= len; i++) {
  //     if (i % 2 == 0 && i % n == 0) {
  //       return i;
  //     }
  //   }
  // };
  // console.log(smallestEvenMultiple(5));
  //----------Second Way
  // var smallestEvenMultiple = function (n) {
  //   return n % 2 === 0 ? n : n * 2;
  // };
  // console.log(smallestEvenMultiple(5));
}
{
  // 2351. First Letter to Appear Twice
  // var repeatedCharacter = function (s) {
  //   for (let i = 0; i < s.length; i++) {
  //     for (let j = 0; j < i; j++) {
  //       if (s[i] === s[j]) {
  //         return s[i];
  //       }
  //     }
  //   }
  // };
  // console.log(repeatedCharacter("abccbaacz"));
}
{
  // 2239. Find Closest Number to Zero
  // var findClosestNumber = function (nums) {
  //   let closest = nums[0];
  //   for (let i = 0; i < nums.length; i++) {
  //     if (
  //       Math.abs(nums[i]) < Math.abs(closest) ||
  //       (Math.abs(nums[i]) === Math.abs(closest) && nums[i] > 0)
  //     ) {
  //       closest = nums[i];
  //     }
  //   }
  //   return closest;
  // };
  // console.log(findClosestNumber([-4, -2]));
}
{
  // 744. Find Smallest Letter Greater Than Target
  // var nextGreatestLetter = function (letters, target) {
  //   let res = letters.filter((i) => i !== target);
  //   letters.sort((a, b) => a - b);
  //   let greater = letters.filter((i) => i > target).sort((a, b) => a - b);
  //   for (let i = 0; i < letters.length; i++) {
  //     if (greater.length !== 0) {
  //       return greater[0];
  //     }
  //     return letters[0];
  //   }
  //   return greater;
  // };
  // console.log(nextGreatestLetter(["x", "x", "y", "y"], "z"));
}
{
  // 2678. Number of Senior Citizens
  // var countSeniors = function (details) {
  //   let ages = [];
  //   for (let i = 0; i < details.length; i++) {
  //     ages.push(details[i][11].concat(details[i][12]));
  //   }
  //   return ages.map((str) => Number(str)).filter((i) => i > 60).length;
  // };
  // console.log(
  //   countSeniors(["7868190130M7522", "5303914400F9211", "9273338290F4010"])
  // );
}
{
  // 2605. Form Smallest Number From Two Digit Arrays
  // var minNumber = function (nums1, nums2) {
  //   let smallest = [];
  //   for (let i = 0; i < nums1.length; i++) {
  //     if (nums2.includes(nums1[i])) {
  //       smallest.push(nums1[i]);
  //     }
  //   }
  //   if (smallest.length > 0) {
  //     return Math.min.apply(Math, smallest);
  //   }
  //   let sNums1 = Math.min.apply(Math, nums1);
  //   let sNums2 = Math.min.apply(Math, nums2);
  //   return parseInt(
  //     sNums1 < sNums2 ? sNums1 + "" + sNums2 : sNums2 + "" + sNums1
  //   );
  // };
  // console.log(minNumber([1, 3, 7], [4, 5]));
}
{
  // 2553. Separate the Digits in an Array
  // var separateDigits = function (nums) {
  //   let s = [];
  //   return nums
  //     .toString()
  //     .split("")
  //     .map((s) => Number(s))
  //     .filter(function (value) {
  //       return !Number.isNaN(value);
  //     });
  // };
  // console.log(separateDigits([13, 25, 83, 77]));
}
{
  // 682. Baseball Game
  // var calPoints = function (ops) {
  //   let arr = [];
  //   for (let i = 0; i < ops.length; i++) {
  //     if (ops[i] === "C") {
  //       arr.pop();
  //     } else if (ops[i] === "D") {
  //       arr.push(arr[arr.length - 1] * 2);
  //     } else if (ops[i] === "+") {
  //       arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  //     } else {
  //       arr.push(parseInt(ops[i]));
  //     }
  //   }
  //   return arr.reduce((a, b) => a + b, 0);
  // };
  // console.log(calPoints(["5", "2", "C", "D", "+"]));
}
{
  // 575. Distribute Candies
  // var distributeCandies = function (candyType) {
  //   let half = Math.floor(candyType.length / 2);
  //   let duplicated = Array.from(new Set(candyType));
  //   return duplicated.length > half ? half : duplicated.length;
  // };
  // console.log(distributeCandies([1, 1, 1, 1, 2, 2, 2, 3, 3, 3]));
}
{
  // 2677. Chunk Array
  // var chunk = function (arr, size) {
  //   let chunkedArr = [];
  //   let i = 0;
  //   while (i < arr.length) {
  //     chunkedArr.push(arr.slice(i, i + size));
  //     i += size;
  //   }
  //   return chunkedArr;
  // };
  // console.log(chunk([1, 2, 3, 4, 5, 6], 3));
}
{
  // 944. Delete Columns to Make Sorted
  // var minDeletionSize = function (strs) {
  //   let count = 0;
  //   for (let i = 0; i < strs[0].length; i++) {
  //     let str = "";
  //     for (let j = 0; j < strs.length; j++) {
  //       str += strs[j][i];
  //     }
  //     let res = str.split("").sort().join("") === str;
  //     if (!res) {
  //       count += 1;
  //     }
  //   }
  //   return count;
  // };
  // console.log(minDeletionSize(["cba", "daf", "ghi"]));
}
{
  // 976. Largest Perimeter Triangle
  // var largestPerimeter = function (nums) {
  //   nums.sort((a, b) => b - a);
  //   for (let i = 0; i < nums.length - 2; i++) {
  //     let a = nums[i];
  //     let b = nums[i + 1];
  //     let c = nums[i + 2];
  //     if (a < b + c) {
  //       return a + b + c;
  //     }
  //   }
  //   return 0;
  // };
  // console.log(largestPerimeter([1, 2, 1, 10]));
}
{
  // 989. Add to Array-Form of Integer
  // var addToArrayForm = function (num, k) {
  //   let sum = BigInt(num.join("")) + BigInt(k);
  //   return sum
  //     .toString()
  //     .split("")
  //     .map((str) => Number(str));
  // };
  // console.log(
  //   addToArrayForm(
  //     [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3],
  //     516
  //   )
  // );
}
{
  // 1550. Three Consecutive Odds
  // var threeConsecutiveOdds = function (arr) {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] % 2 == 1 && arr[i + 1] % 2 == 1 && arr[i + 2] % 2 === 1) {
  //       return true;
  //     }
  //   }
  //   return false;
  // };
  // console.log(threeConsecutiveOdds([2, 6, 4, 1]));
  // console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]));
}
{
  // 2455. Average Value of Even Numbers That Are Divisible by Three
  // var averageValue = function (nums) {
  //   let divisors = [];
  //   nums = nums.filter((i) => i % 2 == 0);
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] % 3 == 0) {
  //       divisors.push(nums[i]);
  //     }
  //   }
  //   return divisors.length > 0
  //     ? Math.floor(divisors.reduce((a, b) => a + b, 0) / divisors.length)
  //     : 0;
  // };
  // console.log(
  //   averageValue([
  //     94, 65, 82, 40, 79, 74, 92, 84, 37, 19, 16, 85, 20, 79, 25, 89, 55, 67, 84,
  //     3, 79, 38, 16, 44, 2, 54, 58, 94, 69, 71, 14, 24, 13, 21,
  //   ])
  // );
}
{
  // 88. Merge Sorted Array
  // var merge = function (nums1, m, nums2, n) {
  //   for (let i = m, j = 0; j < n; i++, j++) {
  //     nums1[i] = nums2[j];
  //   }
  //   return nums1.sort((a, b) => a - b);
  // };
}
{
  // 1337. The K Weakest Rows in a Matrix
  // var kWeakestRows = function (mat, k) {
  //   return mat
  //     .map((e, i) => [i, e.reduce((a, b) => a + b, 0)])
  //     .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]))
  //     .map((x) => x[0])
  //     .slice(0, k);
  // };
}
{
  // 1331. Rank Transform of an Array
  // var arrayRankTransform = function (arr) {
  //   let sortedArr = Array.from(new Set(arr)).sort((a, b) => a - b);
  //   return arr.map((i) => sortedArr.indexOf(i) + 1);
  // };
}
{
  // 2089. Find Target Indices After Sorting Array
  // var targetIndices = function (nums, target) {
  //   nums.sort((a, b) => a - b);
  //   let arr = [];
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] === target) {
  //       arr.push(i);
  //     }
  //   }
  //   return arr;
  // };
}
{
  // 34. Find First and Last Position of Element in Sorted Array
  // var searchRange = function (nums, target) {
  //   nums.sort((a, b) => a - b);
  //   let arr = [];
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] === target) {
  //       arr.push(i);
  //     }
  //   }
  //   if (arr.length == 1) {
  //     return [arr, arr].flat();
  //   } else if (arr.length > 2) {
  //     return [arr[0], arr[arr.length - 1]];
  //   }
  //   return arr.length > 1 ? arr : [-1, -1];
  // };
  // console.log(searchRange([3, 3, 3], 3));
}
{
  // 912. Sort an Array
  // var sortArray = function (nums) {
  //   return nums.sort((a, b) => a - b);
  // };
  // console.log(sortArray([5, 2, 3, 1]));
}
{
  // 506. Relative Ranks
  // var findRelativeRanks = function (score) {
  //   let sorted = [...score].sort((a, b) => b - a);
  //   let medals = ["Gold Medal", "Silver Medal", "Bronze Medal"];
  //   let result = sorted.reduce((ranks, point, i) => {
  //     ranks[point] = medals[i] || `${i + 1}`;
  //     return ranks;
  //   }, {});
  //   return score.map((s) => result[s]);
  // };
  // console.log(findRelativeRanks([5, 4, 3, 2, 1]));
}
{
  // 189. Rotate Array
  // var rotate = function (nums, k) {
  //   if (k === nums.length) return nums;
  //   else if (k > nums.length) k = k % nums.length;
  //   for (let i = 0; i < k; i++) {
  //     nums.unshift(nums.pop());
  //   }
  //   return nums;
  // };
  // console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
}
{
  // 2729. Check if The Number is Fascinating
  // var isFascinating = function (n) {
  //   let arr = [n, 2 * n, 3 * n].join("");
  //   return [...arr].sort((a, b) => a - b).join("") === "123456789";
  // };
  // console.log(isFascinating(192));
}
{
  // 49. Group Anagrams
  // var groupAnagrams = function (strs) {
  //   let obj = {};
  //   for (let i = 0; i < strs.length; i++) {
  //     let sorted = strs[i].split("").sort().join("");
  //     if (obj[sorted]) {
  //       obj[sorted].push(strs[i]);
  //     } else {
  //       obj[sorted] = [strs[i]];
  //     }
  //   }
  //   return Object.values(obj);
  // };
  // console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
}
{
  // 3. Longest Substring Without Repeating Characters
  // var lengthOfLongestSubstring = function (s) {
  //   const map = {};
  //   let front = 0;
  //   let back = 0;
  //   let maxLength = 0;
  //   for (front; front < s.length; front++) {
  //     const exist = map[s[front]];
  //     if (exist !== undefined && back <= exist) {
  //       back = exist + 1;
  //     }
  //     map[s[front]] = front;
  //     maxLength = Math.max(front - back + 1, maxLength);
  //   }
  //   return maxLength;
  // };
  // console.log(lengthOfLongestSubstring("pwwkew"));
}
{
  // 168. Excel Sheet Column Title
  // var convertToTitle = (columnNumber) => {
  //   let str = "";
  //   while (columnNumber > 0) {
  //     columnNumber--;
  //     str += String.fromCharCode((columnNumber % 26) + 65);
  //     columnNumber = Math.floor(columnNumber / 26);
  //   }
  //   return str.split("").reverse().join("");
  // };
  // console.log(convertToTitle(28));
}
{
  // 171. Excel Sheet Column Number
  // var titleToNumber = (columnTitle) => {
  //   let sum = 0;
  //   let index = 1;
  //   for (let i = columnTitle.length - 1; i >= 0; i--) {
  //     sum += index * (columnTitle[i].charCodeAt() - 64);
  //     index *= 26;
  //   }
  //   return sum;
  // };
  // console.log(titleToNumber("AB"));
}
{
  // 709. To Lower Case
  // var toLowerCase = function (s) {
  //   return s.toLowerCase();
  // };
  // console.log(toLowerCase("Hello"));
}
{
  // 2129. Capitalize the Title
  // var capitalizeTitle = function (title) {
  //   let res = title
  //     .split(" ")
  //     .map((i) => {
  //       return i.length <= 2
  //         ? i.toLowerCase()
  //         : i[0].toUpperCase() + i.slice(1).toLowerCase();
  //     })
  //     .join(" ");
  //   return res;
  // };
  // console.log(capitalizeTitle("First leTTeR of EACH Word"));
}
{
  // 520. Detect Capital
  // var detectCapitalUse = function (word) {
  //   if (
  //     word === word.toUpperCase() ||
  //     word === word.toLowerCase() ||
  //     (word[0] === word[0].toUpperCase() &&
  //       word.slice(1) === word.slice(1).toLowerCase())
  //   ) {
  //     return true;
  //   }
  //   return false;
  // };
}
{
  // 415. Add Strings
  // var addStrings = function (num1, num2) {
  //   let n1 = BigInt(num1);
  //   let n2 = BigInt(num2);
  //   let sum = n1 + n2;
  //   return sum.toString();
  // };
  // console.log(addStrings("11", "123"));
}
{
  // 43. Multiply Strings
  // var multiply = function (num1, num2) {
  //   let n1 = BigInt(num1);
  //   let n2 = BigInt(num2);
  //   let sum = n1 * n2;
  //   return sum.toString();
  // };
  // console.log(multiply("11", "123"));
}
{
  // 557. Reverse Words in a String III
  // var reverseWords = function (s) {
  //   let str = s.split(" ");
  //   let newArr = [];
  //   for (let i = 0; i < str.length; i++) {
  //     newArr.push(str[i].split("").reverse().join(""));
  //   }
  //   return newArr.join(" ");
  // };
  // console.log(reverseWords("Let's take LeetCode contest"));
}

{
  //   Find Maximum Number of String Pairs
  //   var maximumNumberOfStringPairs = function(words) {
  //     const len = words.length
  //     const s = words.map((w) => w.split("").sort().join(""));
  //     return len - new Set(s).size
  // };
}
{
  // 1309. Decrypt String from Alphabet to Integer Mapping
  // var decrypt = (str) => String.fromCharCode(parseInt(str) + 96);
  // var freqAlphabets = function (s) {
  //   let text = "";
  //   for (let i = 0; i < s.length; i++) {
  //     if (s[i + 2] === "#") {
  //       text += decrypt(s[i++] + s[i++]);
  //     } else {
  //       text += decrypt(s[i]);
  //     }
  //   }
  //   return text;
  // };
  // console.log(freqAlphabets("1326#"));
}
{
  // 1880. Check if Word Equals Summation of Two Words
  //   var isSumEqual = function (firstWord, secondWord, targetWord) {
  //     let nums = {
  //       a: 0,
  //       b: 1,
  //       c: 2,
  //       d: 3,
  //       e: 4,
  //       f: 5,
  //       g: 6,
  //       h: 7,
  //       i: 8,
  //       j: 9,
  //     };
  //     let first = [];
  //     let second = [];
  //     let third = [];
  //     let max = Math.max(firstWord.length, secondWord.length, targetWord.length);
  //     for (let i = 0; i < max; i++) {
  //       first.push(nums[firstWord[i]]);
  //       second.push(nums[secondWord[i]]);
  //       third.push(nums[targetWord[i]]);
  //     }
  //     return (
  //       parseInt(first.join("")) + parseInt(second.join("")) ===
  //       parseInt(third.join(""))
  //     );
  //   };
  //   console.log(isSumEqual("d", "b", "aaaaae"));
}
