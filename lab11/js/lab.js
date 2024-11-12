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


// index.js - A JavaScript/jQuert script which will get a value from an input field and outputs a modified version.

// Requirements: jQuery must be loaded for this script to work.
// Author: Donovan S-M
// Date: 2024

// Constants
function sortString (inputString) {
  return inputString.split('').sort().join('');
  
};

// click listener for button
$("#submit").click(function(){
  // get value of input field
  const userName = $("#user-name").val();
  // now let's sort it
  userNameSorted = sortString(userName);
  // append a new div to our output div
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});
