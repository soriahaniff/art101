// index.js - purpose and description here
// Author: Soriah Aniff <saniff.edu>
// Date: october 27th 2023


// "Challange" button first in first div
$(".section1").append("<button id='button-challenge'>Challenge</button>");


$("#button-challenge").click(function(){
 $(".section1").css("background-color", "green");
 console.log("Don't click me!!");
});

// Click listener for Challenge
$("#button-problems").click(function(){
  $(".section1").toggleClass("special");
 });
 
 
 // "problems" button first in second div
$(".section2").append("<button id='button-problems'>Problems</button>");


$("#button-problems").click(function(){
 $(".section2").css("background-color", "yellow");
 console.log("stop it...");
});

// Click listener for Problems
$("#button-problems").click(function(){
  $(".section2").toggleClass("special");
 });
 

// "results" button first in first div
$(".section3").append("<button id='button-results'>Results</button>");


$("#button-results").click(function(){
 $(".section3").css("background-color", "red");
 console.log("I said no");
});

// Click listener for Challenge
$("#button-results").click(function(){
  $(".section3").toggleClass("special");
 });