var countSeniors = function (details) {
  let ages = [];
  let jins = ["M", "F"];
  for (let i = 0; i < details.length; i++) {
    ages.push(details[i][11].concat(details[i][12]));
  }
  return ages.map((str) => Number(str)).filter((i) => i > 60).length;
};

console.log(
  countSeniors(["7868190130M7522", "5303914400F9211", "9273338290F4010"])
);
