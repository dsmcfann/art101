
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

// index.js - For Lab 12, this code will automatically sort you into a House, Hogwarts style, based on the length of your name.
// Author: Donovan S-M
// Date: 11/14/24

//function returns Gryffindor, Ravenclaw, Slytherin, or Hufflepuff
// depending on length mod 4

function sortingHat(str) {
  len = str.length;
  mod = len % 4
    if (mod === 0) {
      return "Gryffindor"
    }
    else if (mod == 1) {
      return "Ravenclaw"
   }
   else if (mod == 2) {
      return "Slytherin"
    }
    else if (mod == 3) {
      return "Hufflepuff"
    }

}


var myButton = $("#button");
myButton.click(function(){ 
  console.log("This function is working!");
  var name = $("input").val();
  var house = sortingHat(name);
  newText = "<p> The Sorting Hat has sorted you into " + house + "</p>";
  $("#output").html(newText);
})