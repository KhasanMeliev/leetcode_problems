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
{
  // 1859. Sorting the Sentence
  // var sortSentence = function (s) {
  //   let arr = [s]
  //     .toString()
  //     .split(" ")
  //     .reverse()
  //     .map((element, index) => `${element.slice(-1)}${element.slice(0, -1)}`)
  //     .sort();
  //   return arr.map((elem) => elem.slice(1)).join(" ");
  // };
  // console.log(sortSentence("is2 sentence4 This1 a3"));
}
{
  // 2042. Check if Numbers Are Ascending in a Sentence
  // var areNumbersAscending = function (s) {
  //   let nums = s.match(/\d+/g).map((str) => Number(str));
  //   let isIncreasing = true;
  //   for (let i = 0; i < nums.length - 1; i++) {
  //     if (nums[i] >= nums[i + 1]) {
  //       isIncreasing = false;
  //       break;
  //     }
  //   }
  //   return isIncreasing;
  // };
  // console.log(
  //   areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles")
  // );
}
{
  // 2124. Check if All A's Appears Before All B's
  // var checkString = function (s) {
  //   for (let i = 0; i < s.length; i++) {
  //     if (s[i] > s[i + 1]) {
  //       return false;
  //     }
  //   }
  //   return true;
  // };
}
{
  // 1941. Check if All Characters Have Equal Number of Occurrences
  // var areOccurrencesEqual = function (s) {
  //   let map = {};
  //   for (let i of s) {
  //     map[i] = map[i] + 1 || 1;
  //   }
  //   let arr = new Set(Object.values(map));
  //   return arr.size == 1;
  // };
}
{
  // 929. Unique Email Addresses
  // var numUniqueEmails = function (emails) {
  //   let arr = emails.map((email) => {
  //     const kuchukcha = email.indexOf("@");
  //     const plus = email.indexOf("+");
  //     if (plus > -1 && plus < kuchukcha) {
  //       return email.substring(0, plus) + email.substring(kuchukcha);
  //     } else {
  //       return email;
  //     }
  //   });
  //   for (let i = 0; i < arr.length; i++) {
  //     arr = arr.map(
  //       (str) =>
  //         str.slice(0, str.indexOf("@")).replace(/\./g, "") +
  //         str.slice(str.indexOf("@"), str.length)
  //     );
  //     return [...new Set(arr)].length;
  //   }
  // };
  // console.log(
  //   numUniqueEmails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"])
  // );
}
{
  // 1431. Kids With the Greatest Number of Candies
  // var kidsWithCandies = function (candies, extraCandies) {
  //   let result = [];
  //   let max = Math.max(...candies);
  //   candies = candies.map((i) => i + extraCandies);
  //   for (let i = 0; i < candies.length; i++) {
  //     candies[i] >= max ? result.push(true) : result.push(false);
  //   }
  //   return result;
  // };
}
{
  // 137. Single Number II
  // var singleNumber = function (nums) {
  //   nums = nums.sort((a, b) => a - b);
  //   for (let i = 0; i < nums.length; i += 3) {
  //     if (nums[i] !== nums[i + 1]) {
  //       return nums[i];
  //     }
  //   }
  // };
  // console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));
}
{
  // 2446. Determine if Two Events Have Conflict
  // var haveConflict = function (event1, event2) {
  //   return (
  //     (event1[0] <= event2[0] && event2[0] <= event1[1]) ||
  //     (event1[0] <= event2[1] && event2[1] <= event1[1]) ||
  //     (event2[0] <= event1[0] && event1[0] <= event2[1]) ||
  //     (event2[0] <= event1[1] && event1[1] <= event2[1])
  //   );
  // };
  // console.log(haveConflict(["01:15", "02:00"], ["02:00", "03:00"]));
}
{
  // 1913. Maximum Product Difference Between Two Pairs
  // var maxProductDifference = function (nums) {
  //   nums = nums.sort((a, b) => b - a);
  //   return nums[0] * nums[1] - nums[nums.length - 1] * nums[nums.length - 2];
  // };
}
{
  // 1492. The kth Factor of n
  // var kthFactor = function (n, k) {
  //   let divisors = [];
  //   for (let i = 0; i <= n; i++) {
  //     if (n % i == 0) {
  //       divisors.push(i);
  //     }
  //   }
  //   return divisors.length >= k ? divisors[k - 1] : -1;
  // };
}
{
  // 2119. A Number After a Double Reversal
  // var isSameAfterReversals = function (num) {
  //   let reversed = [num].toString().split("").reverse().join("");
  //   let secondReversed = parseInt(reversed);
  //   return (
  //     parseInt(secondReversed.toString().split("").reverse().join("")) === num
  //   );
  // };
  // -----------second way------------------
  // var isSameAfterReversals = function (num) {
  //   if (num == 0 || num % 10 !== 0) {
  //     return true;
  //   }
  //   return false;
  // };
}
{
  // 1281. Subtract the Product and Sum of Digits of an Integer
  // var subtractProductAndSum = function (n) {
  //   let arr = [n]
  //     .toString()
  //     .split("")
  //     .map((str) => Number(str));
  //   let multiply = 1;
  //   let sum = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     multiply = multiply * arr[i];
  //     sum = sum += arr[i];
  //   }
  //   return multiply - sum;
  // };
  // console.log(subtractProductAndSum(234));
}
{
  // 2525. Categorize Box According to Criteria
  // var categorizeBox = function (length, width, height, mass) {
  //   let volume = length * width * height;
  //   let max = Math.max(length, width, height);
  //   let bulky;
  //   let heavy;
  //   if (max >= 10 ** 4) bulky = true;
  //   if (volume >= 10 ** 9) bulky = true;
  //   if (mass >= 100) heavy = true;
  //   if (bulky && heavy) return "Both";
  //   if (!bulky && heavy) return "Heavy";
  //   if (bulky && !heavy) return "Bulky";
  //   else return "Neither";
  // };
  // console.log(categorizeBox(100, 35, 700, 300));
}
{
  // 1528. Shuffle String
  // var restoreString = function (s, indices) {
  //   let str = [];
  //   for (let i = 0; i < s.length; i++) {
  //     str[indices[i]] = s[i];
  //   }
  //   return str.join("");
  // };
  // console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
}
{
  // 2024. Maximize the Confusion of an Exam
  // var maxConsecutiveAnswers = function (answerKey, k) {
  //   let countT = 0;
  //   let countF = 0;
  //   let left = 0;
  //   let ans = 0;
  //   for (let i = 0; i < answerKey.length; i++) {
  //     if (answerKey[i] === "T") countT++;
  //     else countF++;
  //     while (Math.min(countF, countT) > k) {
  //       if (answerKey[left] === "T") countT--;
  //       else countF--;
  //       left++;
  //     }
  //     ans = Math.max(ans, i + 1 - left);
  //   }
  //   return ans;
  // };
  // console.log(maxConsecutiveAnswers("TTFF", 2));
}
{
  // 14. Longest Common Prefix
  // var longestCommonPrefix = function (strs) {
  //   strs = strs.sort();
  //   for (let i = 0; i < strs[0].length; i++) {
  //     if (strs[0][i] !== strs[strs.length - 1][i]) {
  //       return strs[0].substr(0, i);
  //     }
  //   }
  //   return strs[0];
  // };
}
{
  // 2723. Add Two Promises
  // var addTwoPromises = async function (promise1, promise2) {
  //   const [val1, val2] = await Promise.all([promise1, promise2]);
  //   return val1 + val2;
  // };
}
{
  // 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers
  // var minPartitions = function (n) {
  //   return Math.max(...n);
  // };
}
{
  // 2666. Allow One Function Call
  // var once = function (fn) {
  //   let called = false;
  //   return function (...args) {
  //     if (!called) {
  //       called = true;
  //       return fn(...args);
  //     }
  //   };
  // };
}
{
  // 1108. Defanging an IP Address
  // var defangIPaddr = function (address) {
  //   let arr = [address].toString().split("");
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === ".") {
  //       arr[i] = "[.]";
  //     }
  //   }
  //   return arr.join("");
  // };
  // console.log(defangIPaddr("1.1.1.1"));
}
{
  // 890. Find and Replace Pattern
  // var findAndReplacePattern = function (words, pattern) {
  //   let patt = patternn(pattern);
  //   return words.filter((i) => patternn(i) === patt);
  // };
  // const patternn = (str) => {
  //   let result = "";
  //   for (let i = 0; i < str.length; i++) {
  //     result += str.indexOf(str[i]);
  //   }
  //   return result;
  // };
  // console.log(
  //   findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb")
  // );
}
{
  // 1470. Shuffle the Array
  // var shuffle = function (nums, n) {
  //   let first = nums.slice(0, nums.length / 2);
  //   let second = nums.slice(nums.length / 2, nums.length);
  //   let res = [];
  //   for (let i = 0; i < first.length; i++) {
  //     res.push(first[i], second[i]);
  //   }
  //   return res;
  // };
}
{
  // 2011. Final Value of Variable After Performing Operations
  // var finalValueAfterOperations = function (operations) {
  //   let result = [];
  //   for (let i = 0; i < operations.length; i++) {
  //     if (operations[i] === "--X" || operations[i] === "X--") {
  //       result.push(-1);
  //     } else {
  //       result.push(1);
  //     }
  //   }
  //   return result.reduce((a, b) => a + b, 0);
  // };
  // console.log(finalValueAfterOperations(["--X", "X++", "X++"]));
}
{
  // 2629. Function Composition
  // var compose = function (functions) {
  //   return (x) => functions.reduceRight((value, f) => f(value), x);
  // };
}
{
  // 1450. Number of Students Doing Homework at a Given Time
  // var busyStudent = function (startTime, endTime, queryTime) {
  //   let students = [];
  //   let count = 0;
  //   for (let i = 0; i < startTime.length; i++) {
  //     students.push([startTime[i], endTime[i]]);
  //     if (students[i][0] <= queryTime && students[i][1] >= queryTime) {
  //       count++;
  //     }
  //   }
  //   return count;
  // };
  // console.log(busyStudent([4], [4], 5));
}
{
  // 771. Jewels and Stones
  // var numJewelsInStones = function (jewels, stones) {
  //   return stones.split("").filter((letter) => jewels.includes(letter)).length;
  // };
}
{
  // 1137. N-th Tribonacci Number
  // var tribonacci = function (n) {
  //   let result = [0, 1, 1];
  //   for (let i = 3; i <= n; i++) {
  //     result[i] = result[i - 1] + result[i - 2] + result[i - 3];
  //   }
  //   return result[n];
  // };
  // console.log(tribonacci(25));
}
{
  // 1805. Number of Different Integers in a String
  // var numDifferentIntegers = function (word) {
  //   return new Set(word.match(/0(?=\D)|([1-9][0-9]*)|0$/g)).size;
  // };
  // console.log(numDifferentIntegers("a123bc34d8ef34"));
}
{
  // 1460. Make Two Arrays Equal by Reversing Subarrays
  // var canBeEqual = function (target, arr) {
  //   target = target.sort((a, b) => a - b);
  //   arr = arr.sort((a, b) => a - b);
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] !== target[i]) return false;
  //   }
  //   return true;
  // };
  // console.log(canBeEqual([1, 23, 4], [4, 3, 12]));
}
{
  // 2441. Largest Positive Integer That Exists With Its Negative
  // var findMaxK = function (nums) {
  //   let positive = nums.filter((elem) => elem > 0).sort((a, b) => a - b);
  //   let negative = nums.filter((elem) => elem < 0).sort((a, b) => b - a);
  //   let ans = [];
  //   for (let i = 0; i <= positive.length; i++) {
  //     if (negative.includes(-Math.abs(positive[i]))) {
  //       ans.push(positive[i]);
  //     }
  //   }
  //   return ans.length >= 1 ? Math.max(...ans) : -1;
  // };
  // console.log(findMaxK([-10, 8, 6, 7, -2, -3]));
}
{
  // 2185. Counting Words With a Given Prefix
  // var prefixCount = function (words, pref) {
  //   let count = 0;
  //   for (let i = 0; i < words.length; i++) {
  //     if (words[i].slice(0, pref.length) === pref) {
  //       count++;
  //     }
  //   }
  //   return count;
  // };
  // console.log(prefixCount(["pay", "attention", "practice", "attend"], "at"));
}
{
  // 1539. Kth Missing Positive Number
  // var findKthPositive = function (arr, k) {
  //   let missingIntegers = [];
  //   for (let i = 1; i < arr.length + k + 2; i++) {
  //     if (!arr.includes(i)) {
  //       missingIntegers.push(i);
  //     }
  //   }
  //   return missingIntegers[k - 1];
  // };
  // console.log(findKthPositive([2, 3, 4, 7, 11], 5));
}
{
  // 2255. Count Prefixes of a Given String
  // var countPrefixes = function (words, s) {
  //   let arr = [];
  //   for (let i = 0; i < words.length; i++) {
  //     if (words[i] === s.slice(0, words[i].length)) {
  //       arr.push(words[i]);
  //     }
  //   }
  //   return arr.length;
  // };
  // console.log(countPrefixes(["a", "b", "c", "ab", "bc", "abc"], "abc"));
}
{
  // 2000. Reverse Prefix of Word
  // var reversePrefix = function (word, ch) {
  //   if (!word.includes(ch)) {
  //     return word;
  //   }
  //   return (
  //     ch +
  //     [word.slice(0, word.indexOf(ch))].toString().split("").reverse().join("") +
  //     word.slice(word.indexOf(ch) + 1, word.length)
  //   );
  // };
  // console.log(reversePrefix("abcdefd", "d"));
}
{
  // 283. Move Zeroes
  // var moveZeroes = function (nums) {
  //   let count = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] === 0) {
  //       count++;
  //     } else {
  //       [nums[i - count], nums[i]] = [nums[i], nums[i - count]];
  //     }
  //   }
  //   return nums;
  // };
}
{
  // 2460. Apply Operations to an Array
  // var applyOperations = function (nums) {
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] === nums[i + 1]) {
  //       nums[i] = nums[i] * 2;
  //       nums[i + 1] = 0;
  //     }
  //   }
  //   let zero = nums.filter((i) => i === 0);
  //   const unZero = nums.filter((i) => i !== 0);
  //   return unZero.concat(zero);
  // };
}
{
  // 219. Contains Duplicate II
  // var containsNearbyDuplicate = function (nums, k) {
  //   for (let i = 0; i <= nums.length - 1; i++) {
  //     let j = nums.length - 1;
  //     while (i < j) {
  //       if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
  //         return true;
  //       }
  //       j--;
  //     }
  //   }
  //   return false;
  // };
}
{
  // 389. Find the Difference
  // var findTheDifference = function (s, t) {
  //   for (let letter of s) {
  //     t = t.replace(letter, "");
  //   }
  //   return t;
  // };
  // console.log(findTheDifference("abcd", "abcde"));
}
{
  // 434. Number of Segments in a String
  // var countSegments = function (s) {
  //   if (s.trim().length === 0) {
  //     return 0;
  //   }
  //   return s
  //     .toString()
  //     .split(" ")
  //     .filter((i) => i !== "").length;
  // };
  // console.log(
  //   countSegments("Of all the gin joints in all the towns in all the world,   ")
  // );
}
{
  // 844. Backspace String Compare
  // const func = (str) => {
  //   let output = [];
  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i] === "#") {
  //       output.pop();
  //     } else {
  //       output.push(str[i]);
  //     }
  //   }
  //   return output.join("");
  // };
  // var backspaceCompare = function (s, t) {
  //   return func(s) === func(t);
  // };
  // console.log(backspaceCompare("a#c", "b"));
}

{
  // 2390. Removing Stars From a String
  // const removeStars = (s) => {
  //   let output = [];
  //   for (let i = 0; i < s.length; i++) {
  //     if (s[i] === "*") {
  //       output.pop();
  //     } else {
  //       output.push(s[i]);
  //     }
  //   }
  //   return output.join("");
  // };
}
{
  // 1436. Destination City
  // var destCity = function (paths) {
  //   let dest = paths[0][1];
  //   for (let i = 0; i < paths.length; i++) {
  //     if (paths[i][0] === dest) {
  //       dest = paths[i][1];
  //       i = 0;
  //     }
  //   }
  //   return dest;
  // };
}
{
  // 1491. Average Salary Excluding the Minimum and Maximum Salary
  // var average = function (salary) {
  //   let sorted = salary.sort((a, b) => a - b);
  //   sorted.pop();
  //   sorted.shift();
  //   return (sorted.reduce((a, b) => a + b) / sorted.length).toFixed(5);
  // };
}
{
  // 1893. Check if All the Integers in a Range Are Covered
}
{
  // 1768. Merge Strings Alternately
  // var mergeAlternately = function (word1, word2) {
  //   let arr = [];
  //   let big = Math.max(word1.length, word2.length);
  //   for (let i = 0; i < big; i++) {
  //     arr.push(word1[i], word2[i]);
  //   }
  //   return arr.filter((i) => i !== undefined).join("");
  // };
  // console.log(mergeAlternately("abc", "pqr"));
}
{
  // 2645. Minimum Additions to Make Valid String
  // var addMinimum = function (word) {
  //   let count = 0;
  //   word = word.toString().split("");
  //   let last = word[word.length - 1];
  //   if (word[0] === "a") count += 0;
  //   if (word[0] === "b") count += 1;
  //   if (word[0] === "c") count += 2;
  //   if (last === "a") count += 2;
  //   if (last === "b") count += 1;
  //   if (last === "c") count += 0;
  //   for (let i = 0; i < word.length; i++) {
  //     if (word[i] === "a") {
  //       if (word[i + 1] === "b") count += 0;
  //       if (word[i + 1] === "c") count += 1;
  //       if (word[i + 1] === "a") count += 2;
  //     }
  //     if (word[i] === "b") {
  //       if (word[i + 1] === "b") count += 2;
  //       if (word[i + 1] === "c") count += 0;
  //       if (word[i + 1] === "a") count += 1;
  //     }
  //     if (word[i] === "c") {
  //       if (word[i + 1] === "b") count += 1;
  //       if (word[i + 1] === "c") count += 2;
  //       if (word[i + 1] === "a") count += 0;
  //     }
  //   }
  //   return count;
  // };
}
{
  // 1736. Latest Time by Replacing Hidden Digits
  // var maximumTime = function (time) {
  //   time = time.split("");
  //   if (time[0] === "?") time[0] = time[1] > 3 ? "1" : "2";
  //   if (time[1] === "?") time[1] = time[0] == 2 ? "3" : "9";
  //   if (time[3] === "?") time[3] = "5";
  //   if (time[4] === "?") time[4] = "9";
  //   return time.join("");
  // };
}
{
  // 2496. Maximum Value of a String in an Array
  // var maximumValue = function (strs) {
  //   let result = [];
  //   let max = 0;
  //   for (let i = 0; i < strs.length; i++) {
  //     if (/^[a-zA-Z]+$/.test(strs[i])) {
  //       result.push(strs[i].length);
  //     } else if (/^\d+$/.test(strs[i])) {
  //       result.push(parseInt(strs[i]));
  //     } else {
  //       result.push(strs[i].length);
  //     }
  //   }
  //   return Math.max(...result);
  // };
}
{
  // 2032. Two Out of Three
  // var twoOutOfThree = function (nums1, nums2, nums3) {
  //   let result = [];
  //   for (let i = 0; i <= 100; i++) {
  //     if (
  //       (nums1.includes(i) && nums2.includes(i)) ||
  //       (nums1.includes(i) && nums3.includes(i)) ||
  //       (nums2.includes(i) && nums3.includes(i))
  //     ) {
  //       result.push(i);
  //     }
  //   }
  //   return result;
  // };
}
{
  // 2206. Divide Array Into Equal Pairs
  // var divideArray = function (nums) {
  //   nums = nums.sort((a, b) => a - b);
  //   for (let i = 0; i < nums.length - 1; i += 2) {
  //     if (nums[i] !== nums[i + 1]) {
  //       return false;
  //     }
  //   }
  //   return true;
  // };
  // console.log(divideArray([3, 2, 3, 2, 2, 2]));
}
{
  // 1780. Check if Number is a Sum of Powers of Three
  // var checkPowersOfThree = function (n) {
  //   return !n.toString(3).includes(2);
  // };
}
{
  // 1360. Number of Days Between Two Dates
  // var daysBetweenDates = function (date1, date2) {
  //   return (
  //     Math.abs(new Date(date1).getTime() - new Date(date2).getTime()) /
  //     (1000 * 60 * 60 * 24)
  //   );
  // };
}
{
  // 1995. Count Special Quadruplets
  // var countQuadruplets = function (nums) {
  //   let count = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       for (let k = j + 1; k < nums.length; k++) {
  //         for (let l = k + 1; l < nums.length; l++) {
  //           if (nums[i] + nums[j] + nums[k] == nums[l]) {
  //             count++;
  //           }
  //         }
  //       }
  //     }
  //   }
  //   return count;
  // };
  // console.log(countQuadruplets([1, 1, 1, 3, 5]));
}
{
  // 1534. Count Good Triplets
  // var countGoodTriplets = function (arr, a, b, c) {
  //   let count = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = i + 1; j < arr.length; j++) {
  //       if (Math.abs(arr[i] - arr[j]) > a) continue;
  //       for (let k = j + 1; k < arr.length; k++) {
  //         if (Math.abs(arr[j] - arr[k]) > b) continue;
  //         if (Math.abs(arr[i] - arr[k]) <= c) count++;
  //       }
  //     }
  //   }
  //   return count;
  // };
}
{
  // 2475. Number of Unequal Triplets in Array
  // var unequalTriplets = function (nums) {
  //   let count = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       for (let k = j + 1; k < nums.length; k++) {
  //         if (nums[i] !== nums[j] && nums[i] !== nums[k] && nums[j] !== nums[k]) {
  //           count++;
  //         }
  //       }
  //     }
  //   }
  //   return count;
  // };
}
{
  // 2367. Number of Arithmetic Triplets
  // var arithmeticTriplets = function (nums, diff) {
  //   let count = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       for (let k = j + 1; k < nums.length; k++) {
  //         if (nums[j] - nums[i] == diff && nums[k] - nums[j] == diff) count++;
  //       }
  //     }
  //   }
  //   return count;
  // };
}
{
  // 1925. Count Square Sum Triples
  // var countTriples = function (n) {
  //   let count = 0;
  //   for (let i = 1; i <= n; i++) {
  //     for (let j = 1; j <= n; j++) {
  //       for (let k = 1; k <= n; k++) {
  //         if (Math.pow(i, 2) + Math.pow(j, 2) == Math.pow(k, 2)) {
  //           count++;
  //         }
  //       }
  //     }
  //   }
  //   return count;
  // };
}
{
  // 1029. Two City Scheduling
  // var twoCitySchedCost = function (costs) {
  //   costs = costs.sort((a, b) => b[0] - b[1] - (a[0] - a[1]));
  //   let len = costs.length;
  //   let minCost = 0;
  //   for (let i = 0; i < len / 2; i++) {
  //     minCost += costs[i][1];
  //   }
  //   for (let i = len / 2; i < len; i++) {
  //     minCost += costs[i][0];
  //   }
  //   return minCost;
  // };
}
{
  // 1313. Decompress Run-Length Encoded List
  // var decompressRLElist = function (nums) {
  //   let result = [];
  //   const splited = nums.reduce((acc, curr, index) => {
  //     if (index % 2 === 0) {
  //       acc.push([curr]);
  //     } else {
  //       acc[acc.length - 1].push(curr);
  //     }
  //     return acc;
  //   }, []);
  //   for (let i = 0; i < splited.length; i++) {
  //     result.push(Array(splited[i][0]).fill(splited[i][1]));
  //   }
  //   return result.flat();
  // };
  // -----second way---------------
  // var decompressRLElist = function (nums) {
  //   let result = [];
  //   for (let i = 0; i < nums.length; i += 2) {
  //     for (let j = 0; j < nums[i]; j++) {
  //       result.push(nums[i + 1]);
  //     }
  //   }
  //   return result;
  // };
  // console.log(decompressRLElist([1, 2, 3, 4]));
}
{
  // 1184. Distance Between Bus Stops
  // var distanceBetweenBusStops = function (distance, start, destination) {
  //   let totalDistance = distance.reduce((a, b) => a + b, 0);
  //   let clockWiseDistance = 0;
  //   let begin = Math.min(start, destination);
  //   let finish = Math.max(start, destination);
  //   for (let i = begin; i < finish; i++) {
  //     clockWiseDistance += distance[i];
  //   }
  //   return Math.min(clockWiseDistance, totalDistance - clockWiseDistance);
  // };
}
{
  // 1200. Minimum Absolute Difference
  // var minimumAbsDifference = function (arr) {
  //   let res = [];
  //   arr = arr.sort((a, b) => a - b);
  //   let min = arr[1] - arr[0];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i + 1] - arr[i] < min) {
  //       min = arr[i + 1] - arr[i];
  //       res = [];
  //     }
  //     if (arr[i + 1] - arr[i] == min) res.push([arr[i], arr[i + 1]]);
  //   }
  //   return res;
  // };
}
{
  // 1390. Four Divisors
  // var sumFourDivisors = function (nums) {
  //   let result = [];
  //   for (let i = 0; i < nums.length; i++) {
  //     let count = 2;
  //     let currArr = [1, nums[i]];
  //     for (let j = 2; j < nums[i]; j++) {
  //       if (nums[i] % j == 0) {
  //         count++;
  //         currArr.push(j);
  //       }
  //       if (count > 4) break;
  //     }
  //     if (count === 4) result.push(...currArr);
  //   }
  //   return result.reduce((a, b) => a + b, 0);
  // };
  // console.log(sumFourDivisors([21, 4, 7]));
}
{
  // 371. Sum of Two Integers
  // var getSum = function (a, b) {
  //   const nums = [a, b];
  //   return nums.reduce((a, b) => a + b, 0);
  // };
}
{
  // 479. Largest Palindrome Product
  // var largestPalindrome = function (n) {
  //   return [0, 9, 987, 123, 597, 677, 1218, 877, 475][n];
  // };
}
{
  // 611. Valid Triangle Number
  //   var triangleNumber = function (nums) {
  //     let count = 0;
  //     for (let i = 0; i < nums.length; i++) {
  //       for (let j = i + 1; j < nums.length; j++) {
  //         for (let k = j + 1; k < nums.length; k++) {
  //           if (triangle(nums[i], nums[j], nums[k])) {
  //             count++;
  //           }
  //         }
  //       }
  //     }
  //     return count;
  //   };
  //   const triangle = (a, b, c) => {
  //     if (a + b > c && a + c > b && b + c > a) {
  //       return true;
  //     }
  //     return false;
  //   };
  //   console.log(triangleNumber([24, 3, 82, 22, 35, 84, 19]));
}
{
  // 633. Sum of Square Numbers
  // var judgeSquareSum = function (c) {
  //   for (let i = 0; i < Math.sqrt(c); i++) {
  //     const b = Math.sqrt(c - i * i);
  //     if ((b ^ 0) == b) return true;
  //   }
  //   return false;
  // };
  // console.log(judgeSquareSum(4));
}
{
  // 367. Valid Perfect Square
  // var isPerfectSquare = function (num) {
  //   if (num == 1) return true;
  //   for (let i = 0; i < num; i++) {
  //     if (i * i == num) {
  //       return true;
  //     }
  //   }
  //   return false;
  // };
  // console.log(isPerfectSquare(16));
}
{
  // 1967. Number of Strings That Appear as Substrings in Word
  // var numOfStrings = function (patterns, word) {
  //   let count = 0;
  //   for (let ptrn of patterns) {
  //     if (word.includes(ptrn)) count++;
  //   }
  //   return count;
  // };
}
