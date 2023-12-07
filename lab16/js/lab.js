//lab.js - This simple JavaScript/jQuery script appends new elements to an output div
// jQuery must be loaded for this script to work.
// Author: Soriah Aniff <saniff.edu>
// Date: December 1st 2023
console.log("javascipt is working");

// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/info.0.json",
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
    success: function(comicObj) {
        // do stuff
        console.log(comicObj);
        const alt= comicObj.alt;
        const title= comicObj.title;
        const imageURL = comicObj.img;
        // jquery output 
        $("#output").append("<h2>" + title + "</h2>");
        $("#output").append("<img src= '" + imageURL + "' />");
        $("#output").append("<p>" + alt + "<p>")
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})