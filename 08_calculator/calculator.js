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

const multiply = function(...args) {
  for( let i = 0; i < args.length; i++){
    if(i == 0){
      let product = args[i];
    } else {
      product *= args[i];
    }
  }
  return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function() {
	
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
