const sayHello = function (name) {
  console.log("Hello, " + name);
}

sayHello("Stanley"); 
// must commit to git here 

const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole("Angela");


// this is a return function, will return the value as we want it, but we won't see it in 
// the console until we console.log it outside the function when we invoke it
const returnSayHello = function (name) {
  return "Hello, " + name; 
}


const greeting = returnSayHello('Stan');

console.log(greeting); // notice how we must console.log it outside of the function body



