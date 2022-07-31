// Loopy Lighthouse Project
/*
we are going to be printing the numbers 100-200
if the number is divisible by 3 -> num % 3 === 0 , we will print "Loopy"
if the number is divisible by 4 -> num % 4 === 0 , we will print "Lighthouse"
if divisible by both 3 & 4 -> num % 3 === 0 && num % 4 === 0, we will print "LoopyLighthouse"
*/ 

for (let x = 100; x <= 200; x++) { // we will start at 100, so long as it is <= 200 (since we want to print 200 also), we will execute loop
  if (x % 3 === 0 && x % 4 === 0) { // this checks for whether num is divisible by both
    console.log("LoopyLighthouse"); // will print this if so
  } else if (x % 3 === 0) { // checks if divisible by 3
    console.log("Loopy");
  } else if (x % 4 === 0) { // checks if divisible by 4
    console.log("Lighthouse");
  } else { // if not divisible by all, THEN we print just the number
    console.log(x); 
  }
}



