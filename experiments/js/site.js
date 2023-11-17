// index.js - purpose and description here
// Author: Your Name
// Date:


console.log("Javascript is working!");

$("#my-button").click(function(){
  console.log("Button Clicked");
  var name = prompt("what is your name?");
  console.log("prompt returned= " + name);
  newText = "hello " + name + "!";
  $("#title").html(newText);
});
