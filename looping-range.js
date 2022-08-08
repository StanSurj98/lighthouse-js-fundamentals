// define function range
// The function takes 3 integer parameters: start, end, and step.
// The function should return an array of numbers from start to end counting by step.
// ------------------------------------------------------------------------------------ 
// The function should return an empty array [] if given incorrect parameters, such as: 
// 1. start, end, or step being undefined
// 2. start being greater than end
// 3. step being 0, or negative

const range = function (start, end, step) {
  // I'm going to start by adding the conditionals that we DO NOT want
  if (start === undefined || start > end || step === 0 || step < 0) { 
    return []; // I want the code to stop and return an empty array if such conditionals are met
  }
  // creating a LET array so that I can add things to it later
  let validCount = []; // I'm creating an empty array that I will eventually push the correct numbers into
  
  // the code below will be a while loop 
  while (start <= end) { // want the loop to run so long as our current number is < the end
    validCount.push(start); // will push the numbers into the empty variable
    start = start + step; // once that is done, we will increment the number by our specific step parameter
  }

  return validCount; // at the end of the function I want to see a return of the new array we made

}

console.log(range(10, 50, 2));
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(10, 2, -1)); // should be undefined

