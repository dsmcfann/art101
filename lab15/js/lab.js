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


// index.js - purpose and description here
// Author: Your Name
// Date:
 
$("#activate").click(function() {
  $.ajax({
  // The URL for the request (from the api docs)
  url: "https://www.dnd5eapi.co/api/spells/contact-other-plane",
  // The data to send (will be converted to a query string)
  // Whether this is a POST or GET request
  type: "GET",
  // The type of data we expect back
  dataType : "json",

      // What do we do when the api call is successful
    //   all the action goes in here
    success: function(result) {
      // do stuff
      console.log(result);
      $("#output").append("<p> As you <i> click </i> the sigil, a red light begins to glow around you. Suddenly, a great pain splitting your entire body. Your eyes roll involuntarily to the back of your head, and you become witness to the threads that make up the universe..." + "<br> <br>" + JSON.stringify(result.name) + "<br>" + JSON.stringify(result.desc) + "<br>" + "</p>");
  },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
      // do stuff
      console.log("Error:", textStatus, errorThrown);
      $("#output").append("<p> You touch the sigil. You immediately explode into ten thousand pieces, because the API databank broke and no one was there to fix it. Sorry! </p>")
  },
  })})