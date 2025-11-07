const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter first number: ", function(num1) {
rl.question("Enter operator (+, -, *, /, %): ", function(op) {
rl.question("Enter second number: ", function(num2) {
let a = Number(num1);
let b = Number(num2);
let result;

if(op === "+") {
result = a + b;
} else if(op === "-") {
result = a - b;
} else if(op === "*") {
result = a * b;
} else if(op === "/") {
if(b !== 0) {
result = a / b;
} else {
result = "Cannot divide by zero";
}
} else if(op === "%") {
result = a % b;
} else {
result = "Invalid operator";
};
console.log("Result:", result);
rl.close();
});
});
});

