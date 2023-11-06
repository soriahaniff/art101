// index.js - purpose and description here
// Author: Soriah Aniff <saniff.edu>
// Date: october 27th 2023

function cupCake (x){  
  var results = (x * 3 == 24) 
  return results; 
}

//test function 
console.log("is 6 even?", cupCake(6));
console.log("is 8 even?", cupCake(8));

array = [2, 8, 39, 71, 92, 553, 321, 55]
console.log("My array, array");

var result = array.map(cupCake);
//should return [false, true, false, false, false, false, false, false]

var result = array.map(function(x){
  return x + 3;  
})
//should return [5, 11, 42, 74, 95, 556, 324, 58]
console.log("array added by 3:", results); 