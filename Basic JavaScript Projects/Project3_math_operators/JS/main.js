function additionFunction() {
  var addition = 2 + 2;
  document.getElementById("Math").innerHTML = addition;
}
// addition function

function subtraction_Function() {
  var Subtraction = 10 - 4;
  document.getElementById("Subtraction").innerHTML = Subtraction;
}
//subtraction function

function multiplication() {
  var simple_Math = 9 * 5;
  document.getElementById("Multiplication").innerHTML = simple_Math;
}
//multiplication function

function division() {
  var simple_math2 = 45 / 9;
  document.getElementById("Division").innerHTML =  simple_math2; 
}
//division function

function multipleFunctions() {
  var simple_math3 = (5+6) * 4 * 10 - 40;
  document.getElementById("multipleFunctions").innerHTML = simple_math3;
}
//multiple functions

function modulus_Operator() {
  var simple_math4 = 32 % 5;
  document.getElementById("modulusFunction").innerHTML = simple_math4;
}
//shows remainder

function negation_Operator() {
  var x = 25;
  document.getElementById("Negotiator").innerHTML = -x;
}
//shows opposite

var Z = 5;
Z++;
document.write(Z);
//increases by 1

var Y = 8;
Y--;
document.write(Y);
//decreases by 1

window.alert(Math.random() * 10000);
