// Exercise 1: Temperature Check
// Number: 1

// use math random to rabdomize the temperature between -50 and 50
let temperature = Math.floor(Math.random() * 101) - 50; // Random temperature between -50 and 50
// use if else statement to check the temperature
if (temperature < 0) {
    console.log("It's freezing!");
}
else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold.");
} else if (temperature > 15 && temperature <= 25) {
    console.log("It's mild.");
} else {
    console.log("It's warm.");
}

// Number: 2
// rewrite the above code using switch statement

switch (true) {
    case (temperature < 0):
        console.log("It's freezing!");
        break;
    case (temperature >= 0 && temperature <= 15):
        console.log("It's cold.");
        break;
    case (temperature > 15 && temperature <= 25):
        console.log("It's mild.");
        break;
    default:
        console.log("It's warm.");
}


// Exercise 2: Divisibility Check
// Number: 1
// Write a code using if else statements to check if a number is divisible by 2, 3, or both:
let number = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
// use if else statement to check the number
if (number % 2 === 0 && number % 3 === 0) {
    console.log(number + " is divisible by both 2 and 3.");
}
else if (number % 2 === 0) {
    console.log(number + " is divisible by 2.");
} else if (number % 3 === 0) {
    console.log(number + " is divisible by 3.");
} else {
    console.log(number + " is not divisible by 2 or 3.");
}

// Re-write the code using switch Statements.
switch (true) {
    case (number % 2 === 0 && number % 3 === 0):
        console.log(number + " is divisible by both 2 and 3.");
        break;
    case (number % 2 === 0):
        console.log(number + " is divisible by 2.");
        break;
    case (number % 3 === 0):
        console.log(number + " is divisible by 3.");
        break;
    default:
        console.log(number + " is not divisible by 2 or 3.");
}

// Exercise 3: For loops
// Number: 1
// Print numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// Number: 2
// Print all even numbers between 1 and 20.
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Number: 3
// Calculate the sum of all numbers from 1 to 100 and print the result. Hint: ‘+=’
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum of numbers from 1 to 100:", sum);

// Number: 4
// const numbers = [1, 2, 3, 4, 5]. Given the array of numbers, print each element to the console.
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Number: 5
// const numbers = [3,7, 2, 5, 10, 6]. Given the array of numbers, find and print the largest number.
// #Hint: current value and previous value.
const numbers2 = [3, 7, 2, 5, 10, 6];
let largestNumber = numbers2[0];
for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > largestNumber) {
        largestNumber = numbers2[i];
    }
}
console.log("Largest number:", largestNumber);

// Exercise 4: While loops
// Number: 1
// Print numbers from 1 to 10
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// Number: 2
// Print all even numbers between 1 and 20
i = 1;
while (i <= 20) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

// Number: 3
// Calculate the sum of all numbers from 1 to 100 and print the result.
let sum2 = 0;
i = 1;
while (i <= 100) {
    sum2 += i;
    i++;
}
console.log("Sum of numbers from 1 to 100:", sum2);

// Number: 4
// Print all multiples of 5 less than 50.
i = 5;
while (i < 50) {
    console.log(i);
    i += 5;
}

// Exercise 5: Do-While loops
// Number: 1
// Print numbers from 1 to 10
let j = 1;
do {
    console.log(j);
    j++;
}
while (j <= 10);

// Number: 2
// Calculate the sum of all numbers from 1 to 100 and print the result.
let sum3 = 0;
j = 1;
do {
    sum3 += j;
    j++;
}
while (j <= 100);
console.log("Sum of numbers from 1 to 100:", sum3);

// Number: 3
// Prompt the user to enter a number greater than 10. Keep asking until they enter a valid number.
let userNumber;
do {
    userNumber = parseInt(prompt("Enter a number greater than 10:"));
}
while (userNumber <= 10);
console.log("You entered a valid number:", userNumber);

// Number: 4
// Create a simple guessing game where the user must guess a number between 1 and 10. The game continues until the user guesses the correct number.
let secretNumber = Math.floor(Math.random() * 10) + 1;
let guessedNumber;
do {
    guessedNumber = parseInt(prompt("Guess a number between 1 and 10:"));
    if (guessedNumber < secretNumber) {
        console.log("Too low!");
    } else if (guessedNumber > secretNumber) {
        console.log("Too high!");
    }
}while (guessedNumber !== secretNumber);
console.log("Congratulations! You guessed the correct number:", secretNumber);
