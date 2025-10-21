// Getting user input
let userName = prompt("What's your name?");
let userAge = prompt("How old are you?");

// Calculating birth year
let currentYear = new Date().getFullYear();  // Gets 2025
let yearOfBirth = currentYear - userAge;

// Showing the result
alert(`Hello ${userName}! You were born in ${yearOfBirth}`);