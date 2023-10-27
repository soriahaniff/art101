// index.js - purpose and description here
// Author: Soriah Aniff <saniff.edu>
// Date: october 27th 2023

// Define variables
var mytransport = ["legs", "bus", "bike", "plane"]

// create an object for my main ride
var myMainRide = {
    model: "Ford",
    make: "Bronco",
    color: "Red",
    year: 1966,
   
    age: function () {
      return 2023 - this.year;
    }
}

//output
document.writeln("Getting around: " + mytransport + "<br>");
document.writeln("My Main Ride: <pre>", 
JSON.stringify(myMainRide, null, '\t'), "</pre>");


