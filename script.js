// Data types
// numbers
var a = 16;
var b = 7.5;

// strings
var firstname = "Mani";
var lastName = "bharathi";

// boolean
var x = true;
var y = false;

// undefined
var x;

// null
var number = null;

// Variables
// Var- Function scope(redeclare & reassign)

var b = 10;
var c = 12;
var d = b + c;

console.log(b);
console.log(c);
console.log(d);

// Let - block scope( can nott declare but reassign)
 
function let(){
    let a=10;
    console.log(a);
    a=20
    console.log(a);
}
let();

// Const - block scope( can not redeclare and reassign)

const a = "Variables"
console.log(a);

const b = 400;
console.log(b);

//  synchronous func 

console.log("Variables");
console.log(" Data types");
console.log("javascript");

// asynghronous func

console.log("Hi");

setTimeout(() => {
    console.log("bye");
}, 2000);

console.log("End");
