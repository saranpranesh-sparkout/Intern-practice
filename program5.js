
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    return "Error: Division by zero!";
  }
  return a / b;
};
const modulus = (a, b) => a % b;
console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));
console.log("Multiplication:", multiply(10, 5));
console.log("Division:", divide(10, 5));
console.log("Modulus:", modulus(10, 5));
