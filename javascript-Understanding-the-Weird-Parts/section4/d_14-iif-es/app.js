/**
 * working with "Immediately-Invoked Function Expression" (IIFEs)
 * try to understand we are just executing code on the fly, just 
 * execuding a function after we create it 
 */
// function statement
function greet(name) {
  console.log('Hello ' + name);
}
greet('Joquini');


// using a function expression
var greetFunc = function(name) {
  console.log('Hello ' + name);
};
greetFunc('Jody');

// using an Immediately-Invoked Function Expression (IIFE)
// invoking function express immediately with parentheses after and 
// passing parameter
var greeting = function(name) {
  return 'Hello ' + name;
}('Jakob');

console.log(greeting);

var firstName = 'Johnny';
// this is when you want a function expression instead of a normal function 
// statement. You put the function inside the parentheses. After you can
// invoke using parentheses. We are creating a function and running it all at 
// the same time, We are tricking the javascript engine by using parentheses
// ****This is classic example of an IIFE****
(function (name) {
  
  var greeting = 'Inside IIFE: Hello';
  console.log(greeting + ' ' + name);
  
}(firstName)); // IIFE
// or could also do it this way, no right way, use the way that makes most 
// sense to you
//})(firstName); // IIFE