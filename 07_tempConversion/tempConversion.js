const convertToCelsius = function(value) {
  return Number(((value - 32) / 1.8000).toFixed(1));
};

const convertToFahrenheit = function(value) {
  return Number((value * 1.8000 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
