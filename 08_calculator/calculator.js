const add = function(number1, number2) {

  return number1+number2;
	
};

const subtract = function(number1, number2) {

  return number1-number2;
	
};

const sum = function([...numbers]) {

  let sum = 0;

  numbers.forEach(number =>{
    sum += number;
  });

  return sum;
	
};

const multiply = function([...numbers]) {

  let multi = 1;

  numbers.forEach(number => {
    multi *= number;
  });

  return multi;

};

const power = function(number1, number2) {

	return Math.pow(number1, number2);

};

const factorial = function(number) {

  let fact = 1;


  for (let i = 1; i <= number; i++) {

    fact *= i;

  }

  return fact;
	
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
