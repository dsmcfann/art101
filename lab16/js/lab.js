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

// index.js - Utilizing a New API 
// Author: Donovan Sayegh-McFann
// Date: 12/02/24


// Define the API endpoint.
// to make the endpoint work, I'm going to be using a proxy I found that allows APIs regardless of CORS.
let endpoint = "https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json";


//on clicking the enter button...
$("#enter").click(function() {
  // removes the button you just pressed.
  $(this).remove();
  // removes the button you did not press.
  $("#leave").remove();

  //AJAX configuration
  $.ajax({

    url: endpoint, // API URL
    method: "GET", // HTTP method
    dataType: "JSON", // Payload type
  success: function(data) { // Success handler
    comicObj = data;
    console.log(comicObj); 


    // add fields to the output.
    //introduces what the "cave" is like
    $("#output").append("<p> It is quiet inside the cave, save for the dripping of water at the cave's entrance. Lighting a torch, your eyes are drawn to intricate images carved on the walls of this place. They seem to tell of strange worlds, of technologies beyond imagining, with a humour whose intricacies seem foreign and strange. One comic in particular catches your eye, with today's date:  </p>");
    //all of the appended API information - comic title, comic, alt text.
    $("#output").append("<h3> Today's XKCD Comic is: " + "</h3>" + "<br>" + "<h2>" + comicObj.title + "<br>" + "</h2>" + "<p title =" + JSON.stringify(comicObj.alt) + ">" + "<img src = " + comicObj.img + ">" );
    // final line of dialogue.
    $("#output").append("<p> You don't understand what it means at all. But, at least you're safe and dry. </p>")
  }, 
  error: function(xhr, status, error) { // Error handler
    console.error("error: no, this doesn't work."); 
  } 
});

});

//if you click the button to brave the rain...
$("#leave").click(function() {
  //removes the button you just clicked.
  $(this).remove();
  //removes the other button.
  $("#enter").remove();

  //tells the story of what happened to you.
  $("#output").append("<p> You choose to press onward through the mountains, your boots squelching as the path under you foot turns to mud.  The rain pelts down, harder and harder. The temperature drops. You feel your body begin to chill, and then freeze. You realize far too late that you have collapsed in the shadow of a large boulder, the elements still battering your tired body. Perhaps it would have been better to find some shelter... </p>" + "<br>")
  $("#output").append("<img src = 'https://imgs.xkcd.com/comics/ultimate_game.png' width = '500'>");
  $("#output").append("<p> You are now <b> <i> dead. </b> </i> Reload the webpage and see if you can beat your fate.")

});


