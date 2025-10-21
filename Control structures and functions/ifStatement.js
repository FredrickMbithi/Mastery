// Part 1: Conditional Statements - Making Decisions
// if Statement - The Basic Decision Maker

let temperature = 30;

// if (temperature > 25) {
//     console.log("it's hot outside!")
// }

// if...else - Two Choices
let age = 20;

// if (age >= 18) {
//     console.log("I can vote!");
// } else {
//     console.log("I'm too young to vote yet.");
// }

// if...else if...else - Multiple Choices
// let score = 85;

// if (score >= 90) {
//     console.log("Grade: A - Excellent!");
// } else if (score >= 80) {
//     console.log("Grade: B -Great job!");
// } else if (score >= 70) {
//     console.log("Grader: C - Good work!");
// } else {
//     console.log("Grader: F - Need to study more.");
// }

// switch Statement - Many Specific Cases
// Perfect when I have many specific values to check:
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the work week!");
        break;
    case "Friday":
        console.log("Almost weekend!");
        break
    case "saturday":
        console.log("Weekend vibes!");
        break;
    default:
        console.log("Just another day...")
}

//Important: I must use break to stop execution, or it will "fall through" to the next case!