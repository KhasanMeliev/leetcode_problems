var convertTemperature = function (celsius) {
  let kelvin = 273.15 + celsius;
  let fahrenheit = celsius * 1.8 + 32;
  let arr = [kelvin.toFixed(5), fahrenheit.toFixed(5)];
  return arr;
};

console.log(convertTemperature(36.5));
