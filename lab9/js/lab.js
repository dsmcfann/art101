// index.js - Testing Javascript/jQuery on my website by creating a button and modifying element son the page.

// Requirements - You need jQuery loaded for this script to work.
// Author: Donovan S-M
// Date: 11/04/24

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


//HERE LIES OLD JAVASCRIPT... this is what it would look like if it was multiple lines.


// append button to the challenge, problems, reflections, and results section of my webpage.

// starting with challenge. code taken liberally from Lab 9 example from Wes Modes.
// the way the code works - dollar sign is to start jQuery library, pound sign indicates that I want this to be somewhere on the website with div id = challenge. .append, you guess it, appends. what follows after is traditional button html code. 

// $("#challenge").append("<button class= 'button-challenge'> Hey! Click Me! </button>");
// $("#problems").append("<button class = 'button-problems'> Or you can press here! </button>");
// $("#reflections").append("<button class = 'button-reflections'> Have you considered... pressing this button? </button>");
// $("#results").append("<button class ='button-results'> Remember to try this button too! </button>");

// //now I need to add an event listener to each button.
// // event listeners - they listen for events. in this case, i want to add a click listener for each button.
// // im using "this" to refer back to the button - I saw it done in the example on Wes' website.

// $(".button-challenge").click(function(){
//   $(this).parent().toggleClass("special");
// });

// $(".button-problems").click(function(){
//   $(this).parent().toggleClass("special");
// });

// $(".button-reflections").click(function(){
//   $(this).parent().toggleClass("special");
// });

// $(".button-results").click(function(){
//   $(this).parent().toggleClass("special");
// });



// practicing how to do this all in only four lines. also practicing it from the start.
// also redoing the entireity of the code with new comments and such

// lab.js - Simple Javascript/jQuery script
// Requirements - Need to have jQuery.
// name: D-S-M
// date: 11/04/24


//append a button onto the html.
$(".minor-section").append("<button class= 'changes'> Hey! Click Me! </button>");

//next, adding an event listener.
$(".changes").click(function(){
  $(this).parent().toggleClass("special");
});