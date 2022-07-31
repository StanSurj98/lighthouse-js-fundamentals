
// this is to learn how to use basic if statements in multiple blocks
const raining = false;
const cold = true;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");



// this is showing how to use if... else in one block

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}



// learning to use if, else if, else in one code block
const temperature = 41;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!"); 
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");


// using if and logical operators && || ! together
const isCitizen = true;
let age = 26;

if (isCitizen && age > 18) { // checks to see if BOTH conditions MUST evaluate to true
  console.log("You are eligible to vote!");
}

if (temperature < -40 || temperature > 40) { // checks to see if EITHER conditions evaluate to true
  console.log("Maybe going outside isn't such a great idea...");
}

// the NOT operator - "if 'raining' is FALSE print the console"
if (!raining) {
  console.log("Leave your umbrella at home!");
}