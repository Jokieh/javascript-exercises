const convertToCelsius = function(n) {

  n = (n - 32) * 5 / 9;

  return parseFloat(n.toFixed(1));

};

const convertToFahrenheit = function(n) {

  n = 1.8 * n + 32;

  return parseFloat(n.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
