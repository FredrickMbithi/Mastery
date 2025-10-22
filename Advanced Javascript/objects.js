// Part 2: Objects - Organizing Related Data
// What Are Objects?
// Objects store data as key-value pairs. Perfect for representing real-world things!

// Creating an object
let student = {
    name: "John Doe",
    age: 22,
    course: "Front-End Development",
    isActive: true,
    grades: [85, 90, 88]
};

// Accessing properties
console.log(student.name);        // John Doe (dot notation)
console.log(student["age"]);      // 22 (bracket notation)

// Adding/Modifying properties
student.email = "john@alx.com";   // Add new property
student.age = 23;                 // Modify existing

// Deleting properties
delete student.isActive;

// Objects with Methods
let calculator = {
    num1: 10,
    num2: 5,
    add: function() {
        return this.num1 + this.num2;
    },
    multiply: function() {
        return this.num1 * this.num2;
    }
};

console.log(calculator.add());       // 15
console.log(calculator.multiply());  // 50