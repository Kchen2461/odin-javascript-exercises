const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
	return nums.reduce((sum, item) => sum + item, 0);
};

const multiply = function(nums) {
  return nums.reduce((product, element) => {return product * element});
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {

  if (num === 0) {
    return 1;
  }

	let total = 1;

  for (let i = num; i > 0; i--) {
    total *= i;
  }

  return total;
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
