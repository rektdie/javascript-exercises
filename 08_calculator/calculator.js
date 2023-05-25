const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let sum = 0;
	for (num of array) {
    sum += num;
  }
  return sum;
};

const multiply = function(array) {
  let result = 1;
  for (num of array){
    result *= num;
  }
  return result;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(x) {
  let result = 1;
	for (let i = 1; i <= x; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
