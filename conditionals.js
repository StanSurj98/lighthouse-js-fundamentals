
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

//whichSchool conditionals exercise on Compass

const whichSchool = function (age) {
  if (age < 13) {
    return "Elementary School"; // important to use RETURN keyword to then return what it evaluates
  } else if (age >= 13 && age <= 18) {
    return "Secondary School"; // if we just did console.log("Secondary School"), it would return nothing but only reach our developer console
  } else {
    return "Lighthouse Labs"; // the reason being is that on a live site we would get undefined but on the developer console we would see the log
  }
}
console.log("I am 14, which school should I go to?")
whichSchool(14); // this is correct and would calculate the function and return what we want, but it won't show on our console
console.log(whichSchool(14)); // this allows us to SEE the word "Secondary School" on our developer console only
