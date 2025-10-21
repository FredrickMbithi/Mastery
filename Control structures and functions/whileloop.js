// while Loop - When I Don't Know How Many Times
// Keeps going as long as the condition is true:
// let count = 1;

// while (count <= 5) {
//     console.log("Count is: " + count);
//     count++; // Don't forget this or infinite loop!
// }
//Warning: I must make sure the condition eventually becomes false, or I'll create an infinite loop that crashes my browser!

// do...while Loop - Execute At Least Once
// Runs the code block first, then checks the condition:
let num = 1;

do {
    console.log("Number: " + num);
    num++;
} while (num <= 5);
