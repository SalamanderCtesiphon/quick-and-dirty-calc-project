let a = 0;
let b = 0;
let operation = "none";



const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const multiply = function(a, b) {
  return a * b;
};

const divide = function(a, b) {
  return a / b;
};

const operate = function(a, b, operation) {
  if(operation === "add") {
    return add(a, b);
  } else if(operation === "subtract") {
    return subtract(a, b);
  } else if(operation === "multiply") {
    return multiply(a, b);
  } else if(operation === "divide") {
    return divide(a, b);
  } else {
    return 0;
  }

};
