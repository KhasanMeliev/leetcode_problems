var categorizeBox = function (length, width, height, mass) {
  let volume = length * width * height;
  let max = Math.max(length, width, height);
  let bulky;
  let heavy;
  if (max >= 10 ** 4) bulky = true;
  if (volume >= 10 ** 9) bulky = true;
  if (mass >= 100) heavy = true;
  if (bulky && heavy) return "Both";
  if (!bulky && heavy) return "Heavy";
  if (bulky && !heavy) return "Bulky";
  else return "Neither";
};
console.log(categorizeBox(100, 35, 700, 300));
