let a = 0;
let b = 0;
let operation = "none";
let displayArr = [];
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
const display = document.querySelector(".display");
const btn0 = document.querySelector("#btn0");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");
const btnDiv = document.querySelector("#btnDiv");
const btnMult = document.querySelector("#btnMult");
const btnSub = document.querySelector("#btnSub");
const btnPlus = document.querySelector("#btnPlus");
const btnEqual = document.querySelector("#btnEqual");
const btnClear = document.querySelector("#btnClear");

btnClear.addEventListener("click", () => {
  displayArr = [];
  displayNumbers(displayArr);
});
btnEqual.addEventListener("click", () => {
  console.log("you pressed Equal");
});
btnPlus.addEventListener("click", () => {
  console.log("you pressed plus");
});
btnSub.addEventListener("click", () => {
  console.log("you pressed sub");
});
btnMult.addEventListener("click", () => {
console.log("you pressed mult");
});
btnDiv.addEventListener("click", () => {
  console.log("you pressed div");
});
btn0.addEventListener("click", () => {
  displayArr.push(0);
  displayNumbers(displayArr);
});
btn1.addEventListener("click", () => {
  displayArr.push(1);
  displayNumbers(displayArr);
});
btn2.addEventListener("click", () => {
  displayArr.push(2);
  displayNumbers(displayArr);
});
btn3.addEventListener("click", () => {
  displayArr.push(3);
  displayNumbers(displayArr);
});
btn4.addEventListener("click", () => {
  displayArr.push(4);
  displayNumbers(displayArr);
});
btn5.addEventListener("click", () => {
  displayArr.push(5);
  displayNumbers(displayArr);
});
btn6.addEventListener("click", () => {
  displayArr.push(6);
  displayNumbers(displayArr);
});
btn7.addEventListener("click", () => {
  displayArr.push(7);
  displayNumbers(displayArr);
});
btn8.addEventListener("click", () => {
  displayArr.push(8);
  displayNumbers(displayArr);
});
btn9.addEventListener("click", () => {
  displayArr.push(9);
  displayNumbers(displayArr);

});

const displayNumbers = function (displayArr) {
  let tmpVar = displayArr.join("");
  display.textContent = tmpVar;
};

