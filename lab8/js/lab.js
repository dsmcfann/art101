// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();

//creating an array called someNumbers
const someNumbers = [10, 42, 67, 300, 45]

//creating a function called doSomeCalculations. in the console i expressed the variable as number, here im expressing it as x
function doSomeCalculations (x) {
var results = Math.sqrt(x)
return results;
}

console.log("Hey, what's the square root of this number?", doSomeCalculations(100))
console.log("Hey, what's the square root of this number?", doSomeCalculations(49))
console.log("Hey, what's the square root of this number?", doSomeCalculations(9))

// this shows the results of the someNumbers.map. Hopefully.
console.log(someNumbers.map(function(number) {
var results = number * 3
return results;
}))

//sets a variable called mapResults.
var mapResults = someNumbers.map(doSomeCalculations);

//displays the console.log.
console.log("yo i did some math: ", mapResults)
