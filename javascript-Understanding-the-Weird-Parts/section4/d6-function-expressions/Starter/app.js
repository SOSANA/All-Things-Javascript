/**
 * This example shows the difference betwen function statement and function expressions 
 */

// this is a function statement
// this puts the code into memory, it gets hoisted during creation phase, does not return 
// a value
function greet() {
  console.log('hi');
}

greet();

// this is a function statement
// this satement results in a object being created and returns a new function object. It puts 
// an variable address into memory that refers to anonymous function
var anonymousGreet = function() {
  console.log('hidy ho');
}

anonymousGreet();

// creating a function statement
function log(a) {
  a();
}

// creating a function on the fly
// when you see this style of syntax you are seeing a expression
log(function(){
  console.log('hidy ho neighbor');
});

// this is if statement itself is example of statement
// inside the parenthese is an expression, returns a value true or false
/*
if (a === 3) {
  
}
*/