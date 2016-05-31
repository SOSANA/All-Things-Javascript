/**
 * .apply():
 *  - similar to the call method, invokes the function and lets you set the 'this' keyword but only
 *  	difference is it wants an array of parameters
 *
 * .bind():
 *  - does not invoke the function, it creates a copy of the function and you can tell it what the "this"
 *  	variable is
 *  - The bind method, which all functions have, creates a new function that will call the original function
 *  	but with some of the arguments already fixed
 *  - The first argument, is used for method calls
 *
 * .call():
 *  - unlike the bind method, call doesn't make a copy it actually executes or invokes it and
 *  	decides what the "this" variable is
 */

/* eslint-disable */
'use strict';

var person = {
  firstname: 'Jon',
  lastname: 'Doe',
  getFullName: function() {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
};

// working with bind method which creates a copy of a function and binds the 'this'
// varable to whatever you pass to the parameter
var logName = function(lang1, lang2) {

  console.log('Logged: ' + this.getFullName());
  console.log('Arugments: ' + lang1 + ' ' + lang2);
  console.log('--------------');
// another way to apply bind method to a funciton expression
}.bind(person);

logName('en', 'es'); // no need to use bind as its alreay assigned to function

// bind method returns a new function and makes a copy of the logName function. The bind method sets up this
// new copy so that when its execution context is created, the js engine sees that it was created with  the
// this bind method and and sets up some things in the background so when it see's what is the 'this' variable,
// it says it must be referencing what ever it was passed to the bind method
// so when the js engine see's 'this' it will be the person object
var logPersonName = logName.bind(person); // another way to bind
logPersonName('en', 'es'); // en es
logPersonName('en'); //  en undefined


// doesn't make a copy, invokes it and decides what the "this" variable is
logName.call(person, 'en', 'es');

// same as call, but wants an array of parameters
logName.apply(person, ['en', 'es']);


// here's our function expression that executes on the fly
(function(lang1, lang2) {

  console.log('Logged: ' + this.getFullName());
  console.log('Arugments: ' + lang1 + ' ' + lang2);
  console.log('This is invoked on the fly!!!');
  console.log('--------------');
// another way to apply the "apply" method to a function expression
}.apply(person, ['es', 'en']));


// function borrowing
var person2 = {
  firstname: 'Jane',
  lastname: 'Doe'
};

// setting the "this" variable to person2 object
// you can grab methods from other objects and use them long as they have similar names so the function works
console.log(person.getFullName.apply(person2));

// function currying
function multiply(a,b) {
  return a*b;
}

// creating a copy of the multiply and giving bind parameters gives it permanent values when the copy is made
// the variable 'a' will always be a 2
// what we have done is said 'bind' give us a copy of the multiply function, where the this variable is setup
// and put a permanent value of 2 for the first parameter 'a'
var multiplyByTwo = multiply.bind(this, 2);

// multiplyByTwo variable above is the same as creating this function below where we permanently set a to 2
/**
function multiplyByTwo(b) {
  var a = 2;
  return a*b;
}
**/

// this will end up as the second parameter 'b'
console.log(multiplyByTwo(4));

var multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(4));
