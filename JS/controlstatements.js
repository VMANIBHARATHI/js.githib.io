// for loop

// syntax- for (statement 1 ; statement 2 ; statement 3){}

let x;

for (x = 2; x <= 4; x++) {
    console.log("Value of x:" + x);
}
    
// while loop
// Syntax-while (condition) {}

let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}

// do-while 
// syntax - do {   } while (condition);

let num = 1;
do {
  console.log(num);
  num++;
} while (num <= 5);

// for each loop
// Syntax-- array.forEach(callback(element, index, arr), thisValue);

const arr = [1, 2, 3, 4, 5];

arr.forEach((item) => {
    console.log(item);
});

// If statement

const d = 5;
 
if (d > 0) {
    console.log("The number is positive.");
};

// if else statement

let  b= 10;

if (b > 0)
	console.log("true");
else
	console.log("falsee");

// switch statement
let a = 5;
 
switch (a) {
    case 0:
        console.log("Number is 0.");
        break;
    case 1:
        console.log("Nuber is 1.");
        break;
    case 2:
        console.log("Number is 2.");
        break;
    default:
        console.log("Number is greater than 2.");
};

// else if statement

let c = 0;

if (c > 0) {
    console.log("c is positive.");
} else if (c < 0) {
    console.log("c is negative.");
} else {
    console.log("c is zero.");
};

