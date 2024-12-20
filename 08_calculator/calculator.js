const add = function(a,b){
  return a + b;
}

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  summed = arr.reduce((sum, curr) => sum + curr, 0);
  return summed;
};

const multiply = function(arr) {
  return arr.reduce((prod, curr) => prod * curr, 1);

};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let prod = 1;
  for (let i = a; i > 0; i--){
    prod *= i;
  }
  return prod;
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
