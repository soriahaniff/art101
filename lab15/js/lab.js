//lab.js - This simple JavaScript/jQuery script appends new elements to an output div
// jQuery must be loaded for this script to work.
// Author: Soriah Aniff <saniff.edu>
// Date: December 1st 2023
console.log("javascipt is working");

const ENDPOINT =
"https://api.agify.io";


// attach an event listener
$("#action").click(function(){
//ajax this shit
// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: ENDPOINT,

    // The data to send (will be converted to a query string)
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",

    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log(results);
// extract the name
     nameText= results.name; 
     $("#input").append("<p>" + nameText + "</p>" ); 
// extract the age
    ageText= results.age;
    $("#output").append("<p>" + ageText + "</p>"); 
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})
})
