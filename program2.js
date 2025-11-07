var x = 10;
if(true){
    var x = 20; 
    console.log("Inside if with var:", x); 
}
console.log("Outside if with var:", x); 

let y = 10;
if(true){
    let y = 20; 
    console.log("Inside if with let:", y); 
}

console.log("Outside if with let:", y); 
const z = 5;
console.log("Constant z:", z);
console.log("5" + 5);   
console.log("5" - 2);   
console.log("5" * "2"); 
console.log(true + 1);  

let strNum = "123";
let num = Number(strNum);  
console.log(num + 1);      

let val = 100;
let strVal = String(val);  
console.log(strVal + 1); 



