// index.js - Learning Even More Javascript
// Author: Donovan S-M
// Date: 10-23-24

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


//arrays

const myTransport = ["bus", " car", " bike", " walk"];

//objects
myMainRide = {
  make: "Honda",
  model: "Fit",
  color: "Yellow",
  year: 2016,
  age: function () {
      return 2024 - year;
  }
}

//printing my things out aka output

document.writeln("How I Get Around: " + myTransport, "<br");
// look below! JSON is how we are able to write an object to the document
document.writeln("The DonoMobile: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>")