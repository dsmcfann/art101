

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

// index.js - Another JavaScript/jQuery script that appends new elements to an output div.

// Requirements: jQuery must be loaded for this script to work.
// Author: Donovan S-M
// Date: 2024




// helper function that generates some fake dialogue. Code from Wes Modes 2023, with some changes.

function generateRandomText() {
  const text = "Yénillor mornë tulintë i quettar. Tercáno Nuruva. Hlasta! Quetis Ilfirimain. Hlasta! Quetis Ilfirimain: Corma turien te Corma tuvien Corma tultien te Huinessë nutien. Tercáno Nuruva. Tuvien Corma tultien te Huinessë nutien Corma turien te Corma.";
  const min = 2
  const max = 100
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;

// random starting index to which slices the elvish.

  const randStart = Math.floor (Math.random() * (text.length - randLen +1));

// generate the random text.
  return text.slice(randStart, randStart + randLen);

};



// okay, click listener for button.
// Special thanks to Mason and Phinhas for the help in making this work. Their specific contributions are listed.

$("#button").click(function() {
  // this function selects an element and the value of the element. then, an if statement that if the inputText is anything, it runs the code.
  inputText = document.getElementById('meTalk').value;
  if (inputText != "") {
    // create new dialogue
    const newText = generateRandomText();
    // append a new div to the output div
    $("#output").append($('#meTalk').val());
    setTimeout(function() {
      $("#output").append('<div class = "text"><p>' + newText + '</p></div>');
    }, 1000);
    // clears the input box. Mason and Phinhas helped me with this!
    $('#meTalk').val('');
  }
  else {
    alert("The wizard's voice echoes in your head, sneering: 'Nothing? You give me nothing? I pity you who refuses to live.'");
  }
  
});

// this is very silly, but this is a function that monitors the number of divs created on the page.
// the idea is that if you make more than 10, it will give you an alert and toggleClass.

// function. checks the div count everytime we click.
$("#button").click(function() {
// counts the number of divs.
 var spellsCast = $('div.text').length;
 // logging the results.
 console.log('Number of spells cast: ' + spellsCast);
 // if number of divs equals or is above a certain number... 
 if (spellsCast > 2) {
  // alert (whatever!)
  alert ("You should have been very careful with touching a wizards spellbook. As the final spell appears on the page, the room as you know it begins to fade away.");
  // remove all paragraph text from webpage.
  $("p").remove();
    // toggleClass of the minor section to be different.
  $(".minor-section").toggleClass("run").append("<b> <i> RUNRUNRUNRUNRUNRUNRUNRUNRUNRUN!! <b> <i>");

 };
});