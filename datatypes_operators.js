// Exercise 1: Numbers

number = 31;
myFloat = 31.5;

sum = number + myFloat;
difference = number - myFloat;
product = number * myFloat;
quotient = number / myFloat;
exponent = number ** myFloat;
modulus = number % myFloat;

console.log("Sum:", sum, "Difference:", difference, "Product:", product, "Quotient:", quotient, "Exponent:", exponent, "Modulus:", modulus);

// Exercise 2: Boolean and Operators
// Number: 1

let isEqual = (2 == "2"); 
let isStrictEqual = (2 === "2");
let isNotEqual = (2 != 3);
let isStrictNotEqual = (2 !== 3);
let isGreaterThan = (2 > 1);
let isLessThan = (2 < 3);
let isGreaterThanOrEqual = (2 >= 2);
let isLessThanOrEqual = (2 <= 3);

console.log("Is Equal:", isEqual, "Is Strictly Equal:", isStrictEqual, "Is Not Equal:", isNotEqual, "Is Strictly Not Equal:", isStrictNotEqual, "Is Greater Than:", isGreaterThan, "Is Less Than:", isLessThan, "Is Greater Than or Equal:", isGreaterThanOrEqual, "Is Less Than or Equal:", isLessThanOrEqual);

// Number: 2

let x = 8;
let y = 12;

isGreaterThan = (x > y);
console.log("Is Greater Than:", isGreaterThan);
isLessThan = (x < y);
console.log("Is Less Than:", isLessThan);
isGreaterThanOrEqual = (x >= y);
console.log("Is Greater Than or Equal:", isGreaterThanOrEqual);
isLessThanOrEqual = (x <= y);
console.log("Is Less Than or Equal:", isLessThanOrEqual);

// Number: 3

let a = true;
let b = false;

let andOperator = (a && b);
console.log("AND Operator:", andOperator);
let orOperator = (a || b);
console.log("OR Operator:", orOperator);
let notOperator = !a;
console.log("NOT Operator:", notOperator);

// Number: 4

let p = 10; 

p += 5; // p = p + 5
console.log("p after += 5:", p); // Answer: 15
p -= 3; // p = p - 3
console.log("p after -= 3:", p); // Answer: 12
p *= 2; // p = p * 2
console.log("p after *= 2:", p); // Answer: 24
p /= 4; // p = p / 4
console.log("p after /= 4:", p); // Answer: 6
p %= 3; // p = p % 3
console.log("p after %= 3:", p); // Answer: 0