// index.js - purpose and description here
// Author: Soriah Aniff <saniff.edu>
// Date: october 27th 2023

// sortcupcake - a function that takes user input and sorts the letters of their name
// of their name

function sortUserName() {
  var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  console.log("userName=", userName);
  //split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  // join array back to string 
  var nameSorted = nameArraySort.join ('');
  console.log("nameSorted =", nameSorted);
  // userName. toLower(). split(""). sort(). join("")
  return nameSorted;
}

//output
document.writeln("oh hey, I've fixed your name: ",
  sortUserName(), "</br>"); 