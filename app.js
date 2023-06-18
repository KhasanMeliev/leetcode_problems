/**
 * @param {number} n
 *
 * @returns {string}
 */
function solve(n) {
  const ones = [
    "",
    "bir",
    "ikki",
    "uch",
    "to'rt",
    "besh",
    "olti",
    "yetti",
    "sakkiz",
    "to'qqiz",
  ];
  const tens = [
    "",
    "",
    "yigirma",
    "o'ttiz",
    "qirq",
    "ellik",
    "oltmish",
    "yetmish",
    "sakson",
    "to'qson",
  ];
  const hundred = "yuz";
  const thousand = "ming";
  const million = "million";
  const billion = "milliard";

  if (n < 0 || n > 999999999) {
    return "Invalid input";
  }

  if (n === 0) {
    return ones[0];
  }

  let result = "";

  if (Math.floor(n / 1000000000) > 0) {
    result += solve(Math.floor(n / 1000000000)) + " " + billion + " ";
    n %= 1000000000;
  }

  if (Math.floor(n / 1000000) > 0) {
    result += solve(Math.floor(n / 1000000)) + " " + million + " ";
    n %= 1000000;
  }

  if (Math.floor(n / 1000) > 0) {
    result += solve(Math.floor(n / 1000)) + " " + thousand + " ";
    n %= 1000;
  }

  if (Math.floor(n / 100) > 0) {
    result += ones[Math.floor(n / 100)] + " " + hundred + " ";
    n %= 100;
  }

  if (n > 0) {
    if (result != "") {
      result += " ";
    }
    if (n < 10) {
      result = result.trim() + " " + ones[n];
    } else if (n < 20) {
      result = result.trim() + "" + "o'n " + ones[n % 10];
    } else {
      result = result.trim() + " " + tens[Math.floor(n / 10)];

      if (n % 10 > 0) {
        result += " " + ones[n % 10];
      }
    }
  }

  return result;
}

console.log(solve(17));
