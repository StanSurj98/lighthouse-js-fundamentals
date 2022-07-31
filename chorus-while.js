const chorus = "Let's dance!";

/*
let repeat = 0;
while (repeat < 10) {
  console.log(chorus);
  repeat++;
}

console.log("Until the sun comes up!");
*/

// the code below copies the code above, but we are practicing with IF statements INSIDE loops

let repeat = 0;
while (repeat < 10) {
  if (repeat === 5) { // this means that at the 6th iteration, because we start at 0, we will execute the statement
    console.log("Change key"); // once this is displayed, we continue with the loop again
  }
  console.log(chorus); // printing the chorus again for 5x until |while (repeat < 10)| is false
  repeat++;
}

console.log("Until the sun comes up!");