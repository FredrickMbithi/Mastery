//Essential Array Methods I'm Mastering
let fruits = ["apple", "banana", "orange"];

// Adding elements
fruits.push("mango");        // Add to end → ["apple", "banana", "orange", "mango"]
fruits.unshift("grape");     // Add to start → ["grape", "apple", "banana", "orange", "mango"]

// Removing elements
fruits.pop();                // Remove from end → ["grape", "apple", "banana", "orange"]
fruits.shift();              // Remove from start → ["apple", "banana", "orange"]

// Finding elements
let index = fruits.indexOf("banana");  // Returns 1
let hasMango = fruits.includes("mango");  // Returns false

// Looping through arrays
fruits.forEach(fruit => {
    console.log("I like " + fruit);
});



//Advanced Array Methods
let numbers = [1, 2, 3, 4, 5, 6];

// map - Transform each element
let doubled = numbers.map(num => num * 2);
// [2, 4, 6, 8, 10, 12]

// filter - Keep only elements that pass a test
let evenNumbers = numbers.filter(num => num % 2 === 0);
// [2, 4, 6]

// reduce - Combine all elements into one value
let sum = numbers.reduce((total, num) => total + num, 0);
// 21

// find - Get first element that matches
let firstEven = numbers.find(num => num % 2 === 0);
// 2