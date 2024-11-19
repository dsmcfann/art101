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

// index.js - A classic in the world of computer programming, this is FizzBuzz.
// Note: Will need jQuery to run.
// Author: Donovan Sayegh-McFann
// Date: 11/18/24


// function (name, and start of function crap)
$("#testingTime").click(function () {
  let oneLongString = ""
  // create a for loop which counts from 1-200, going up by 1
  for (let i=1; i <=200; i++) {
    //  if - multiple of 3 and 7 and 5 (105), 
    if (i%105 === 0) {
      // FizzBuzzBoom
      console.log("FizzBuzzBoom!");
      oneLongString += " FizzBuzzBoom! <br>";

    }
    // else if - number a multiple of 7 and 3 (21),
    else if (i%21 ===0) {
      // Fizz Boom
      console.log("FizzBoom!");
      oneLongString += " FizzBoom! <br>";

    }
    // else if - number a multiple of 5 and 7 (35), 
    else if (i%35 === 0) {
      console.log("BuzzBoom!");
      oneLongString += " BuzzBoom! <br>";

    }
    // else if - number a multiple of 3 and 5 (15) 
    else if (i%15=== 0) {
      console.log("FizzBuzz!");
      oneLongString += " FizzBuzz! <br>";

    }
    // else if number is a multiple of 3, 
    else if (i%3 === 0) {
      console.log("Fizz!");
      oneLongString += " Fizz! <br>";

    }
    // else if, number is a multiple of 5,
    else if (i%5 === 0) {
      console.log ("Buzz!");
      oneLongString += " Buzz! <br>";

    }
    // else if the number is a multiple of 7, 
    else if (i%7===0){
      console.log ("Boom!");
      oneLongString += " Boom! <br>";

    }
    // else, print the other numbers
    else {
      console.log(i);
      oneLongString += i + "<br>";
    };
  };

  $("#output").html(oneLongString);
});



