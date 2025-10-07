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

const readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var secretNumber = Math.floor(Math.random() * 10) + 1;
var guess = 0;  
var attempts = 0;

console.log("Guess the number between 1 and 10");

rl.on("line", function(input) {
  guess = Number(input); 
  attempts++;

  if (guess < 1 || guess > 10 || isNaN(guess)) {
    console.log("Please enter a number between 1 and 10");
  } 
  else if (guess === secretNumber) {
    console.log("Correct! You guessed the number in " + attempts + " attempts.");
    rl.close();
  } 
  else if (guess < secretNumber) {
    console.log("Too low! Try again.");
  } 
  else if (guess > secretNumber) {
    console.log("Too high! Try again.");
  }
});

rl.on("close", function() {
  console.log("Game over.Thanks for playing");
  process.exit(0);
});
