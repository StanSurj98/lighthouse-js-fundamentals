
// returns a boolean to see if the below is true or false
const isEven = function (num) {
  return num % 2 === 0;
}

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven); // will evaluate to true
console.log(elevenIsEven); // will evaluate to false

// here below we learn that we don't need to assign our function to a variable to console them
// in fact we can just console them directly outside the function body and invoke the function

console.log(isEven(10));
console.log(isEven(11));
// important to note that console.log() itself IS a preset Javascript function

// git commit and push all the work here when you have wifi - Aug 2, 2022, 2:19pm