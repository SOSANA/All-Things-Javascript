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
 *
 * .call():
 *  - unlike the bind method, call doesn't make a copy it actually executes or invokes it and
 *  	decides what the "this" variable is
 *
 * Methods:
 *  - are simply properties that hold function values
 *  - Usually a method needs to do something with the object it was called on. When a function is
 *  	called as a method—looked up as a property and immediately called, as in object.method()—the
 *  	special variable this in its body will point to the object that it was called on
 */

/* eslint-disable */
'use strict';

// Methods are simply properties that hold function values. This is a simple method
var rabbit = {};
rabbit.speak = function(line) {
  console.log('The rabbit says "' + line + '"');
};

rabbit.speak('I am alive.'); // The rabbit says "I am alive."
console.log('---------------------');

// The code uses the 'this' keyword to output the type of rabbit that is speaking
function speak(line) {
  console.log('The ' + this.type + ' rabbit says "' + line + '"'); // jshint ignore:line
}

var whiteRabbit = { type: 'white', speak: speak };
var fatRabbit = { type: 'fat', speak: speak };
whiteRabbit.speak('Oh my ears and whiskers, ' + 'how late its getting!');
// The white rabbit says "Oh my ears and whiskers, how late its getting!"
fatRabbit.speak('I could sure use a carrot right now.');
// The fat rabbit says "I could sure use a carrot right now."
console.log('---------------------');

// Recall that the 'apply' and 'bind' methods both take a first argument that can be used to
// simulate method calls. This first argument is in fact used to give a value to 'this'
// There is a method similar to apply, called call. It also calls the function it is a method
// of but takes its arguments normally, rather than as an array. Like 'apply' and 'bind', 'call'
// can be passed a specific this value
speak.apply(fatRabbit, ['Burb!']); // The fat rabbit says "Burb!"
speak.call({type: 'old'}, 'oh my'); // The old rabbit says "oh my"
console.log('---------------------');
