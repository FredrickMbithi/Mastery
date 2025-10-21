// Part 3: Functions - My Reusable Code Blocks
// Functions are like my own custom tools. I create them once and use them everywhere!
// Function Declaration
function greetStudent(name) {
    console.log("Hello, " + name + "! Welcome to ALX!");
}
// Calling the function
greetStudent("Alice");  //output: Hello, Alice! Welcome to ALX!
greetStudent("Bob");    //output: Hello, Bob! Welcome to ALX!

// Parameters vs Arguments - I Need to Know the Difference!

// Parameters: Variables in the function definition (placeholders)
// Arguments: Actual values I pass when calling the function

function multiply(a, b) {  // a and b are PARAMETERS
    return a * b;
}

let result = multiply(5, 3);  // 5 and 3 are ARGUMENTS
console.log(result);  // Output: 15

// Return Values - Getting Results Back
function calculateArea(length, width) {
    return length * width;
}

let roomArea = calculateArea(10, 5);
console.log("Room area: " + roomArea + " sq meters");  // 50 sq meters

//Important: Code after return doesn't execute - the function stops there!
//Function Without Return
function displayMessage(message) {
    console.log(message);
    // No return statement - returns undefined
}

let result = displayMessage("Hello!");  // Prints: Hello!
console.log(result);  // undefined