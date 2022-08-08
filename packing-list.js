const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

/*
console.log("Kitchen stuff to pack:");
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]); // will console.log each element, each index, NOT the entire array
}

console.log(packingList); // this would console the entire array all together
*/

// USING WHILE LOOPS INSTEAD
console.log('Kitchen stuff to pack:');
let i = 0; // we define our index to start at 0
while (i < packingList.length) { // so long as we're at an index within the number or array elements
  console.log(packingList[i]); // we will print that particular indexed element
  i++; // then increment our index to access the next element in the array
}


