var numUniqueEmails = function (emails) {
  let arr = emails.map((email) => {
    const kuchukcha = email.indexOf("@");
    const plus = email.indexOf("+");
    if (plus > -1 && plus < kuchukcha) {
      return email.substring(0, plus) + email.substring(kuchukcha);
    } else {
      return email;
    }
  });
  for (let i = 0; i < arr.length; i++) {
    arr = arr.map(
      (str) =>
        str.slice(0, str.indexOf("@")).replace(/\./g, "") +
        str.slice(str.indexOf("@"), str.length)
    );
    return [...new Set(arr)].length;
  }
};
console.log(
  numUniqueEmails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"])
);
