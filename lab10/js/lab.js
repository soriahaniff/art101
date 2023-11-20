//lab.js - This simple JavaScript/jQuery script appends new elements to an output div
// jQuery must be loaded for this script to work.
// Author: Soriah Aniff <saniff.edu>
// Date: November 15th 2023


function generateRandomText() {
  const text = "hello how are you doing I haven't seen you in such a long time I am currently living in downtown Santa Cruz, with two cats, and two roomates.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}

// click listener for button
$("#make-convo").click(function(){
  // get new fake dialogue
const newText = generateRandomText();

// append a new div to our output div
$("#output").append('<div class="text"><p>' + newText +'</p></div>');
});

//add the click handler for second button
$('#my-button').click(function() {
  var name = $("#input").val();
  console.log("Your input:", inputValue);
});
