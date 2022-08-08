// define function range
// The function takes 3 integer parameters: start, end, and step.
// The function should return an array of numbers from start to end counting by step.
// ------------------------------------------------------------------------------------ 
// The function should return an empty array [] if given incorrect parameters, such as: 
// 1. start, end, or step being undefined
// 2. start being greater than end
// 3. step being 0, or negative

const range = function (start, end, step) {
  if (start === undefined || start > end || step === 0 || step < 0) {
    return [];
  }

  let validCount = [];
  
  let index = start;
  while (index <= end) {
    validCount.push(index);
    index = index + step;
  }

  return validCount;

}

console.log(range(10, 50, 2));
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));


