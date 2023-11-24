//lab.js - This simple JavaScript/jQuery script appends new elements to an output div
// jQuery must be loaded for this script to work.
// Author: Soriah Aniff <saniff.edu>
// Date: November 22nd 2023




console.log("Welcome to UCSC, the college of magic");

function sortingHat(name){

  var length = name.length
  var remainder = length % 4
  var house

  if (remainder == 0){
    house = "Griffindor";
  }
else if (remainder == 1) {
  house = "Ravenclaw";
}
else if (remainder == 2) {
  house = "ya mama";
}
else {
  house = "Slitherin";
}
return house;
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p>After careful consideration, the hat has sorted you into " + house + "</p>"; 
  document.getElementById("output").innerHTML = newText;
})