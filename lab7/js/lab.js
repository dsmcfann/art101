// index.js - Testing Out Some Functions
// Author: Donovan S-M
// Date: 10/28/24

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

// Function is called,  will ask user to input a userName.
function askTravelName () {
  var firstPrompt = alert ("You have approached the edges of the Farnwood Forest. Rising from the center of the forest, towering over the treeline, you see the last known hiding place of the Wizard Donovan, the Tower of Despair. Do you enter?")
  var travelName = window.prompt ("You have found another vestige of the Wizard Donovan. Ghostly and pale, it whispers in your ear and asks for your name...");
  console.log("travelName =", travelName);
  // take the travelName string and make it into an array. taken from Wes.
  var tNameArray = travelName.split('');
  console.log("tNameArray =", tNameArray)
  //time to sort the array! 
  var tNameArraySort =  tNameArray.sort();
  console.log("tNameArraySort =", tNameArraySort);
  // this array is transitioned back into a string. it does this through the .join array method, which creates and returns a new string from the elements in an array
  // it will be separated either by commas or whatever  i choose to use as a separator string
  var tNameSorted = tNameArraySort.join('');
  console.log("tNameSorted =", tNameSorted);
  // I followed the code showed by Wes. He put the var and the the console log in two lines, and so shall I!
    // hypotehtically though I could have written the following to be one line:
    // userName.toLower().split("").sort().join("")
   return tNameSorted;
}


// output

document.writeln("Now, your new name shall be " + askTravelName() + "!'")

//future donovan - consider putting javascript function outside of main - that way it can be called upon later.