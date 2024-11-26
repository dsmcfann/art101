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
  url: "https://pokeapi.co/api/v2/pokedex/2/",
  // The data to send (will be converted to a query string)
  data: { 
          // here is where any data required by the api 
          //   goes (check the api docs)
  },
  // Whether this is a POST or GET request
  type: "GET",
  // The type of data we expect back
  dataType : "json",

      // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
      // do stuff
      console.log(data);
      $("#output").append("<h1>" + JSON.stringify(data.pokemon_entries));
  },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
      // do stuff
      console.log("Error:", textStatus, errorThrown);
  },
  })})