// When this function is given an array and a value, 
// it should return the index of the last time the value occurs in the array. 
// If the value never occurs, the function should return -1.
// Example:
// lastIndexOf([ 0, 1, 4, 1, 2 ], 1);	--> 3
// lastIndexOf([ 5, 5, 5 ], 5);	--> 2
// lastIndexOf([], 3); --> -1

const arrayOfNums = [0, 1, 2, 3, 4, 0];
const anotherArrayOfNums = [50, 1234, 1608, 3, 50, 2345, 64, 50, 2345234, 2345, 1234]

// define 2 parameters of the array we're given, and the item we're finding the last index it appears in

const lastIndexOf = function (array, toFind) { 
  // I could technically loop backwards and find the first iteration of the element in question
  for (let index = array.length - 1; index >= 0; index--) { // this lets us start looping at the last index of the array
    if (array[index] === toFind) { // if the element at said index strictly equals our toFind value...
      return index; // we will return that index number of that element
    }
  }
  return -1;
}



console.log(lastIndexOf([0, 1, 2, 4, 0, 5], 0)); // should return 5
console.log(lastIndexOf([], 50)); // should return -1
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);