/**
 * .apply():
 *  - similar to the call method, invokes the function and lets you set the 'this' keyword but only
 *  	difference is it wants an array of parameters
 *
 * .bind():
 *  - does not invoke the function, it creates a copy of the function and you can tell it what the
 *    "this" variable is
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
};

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
