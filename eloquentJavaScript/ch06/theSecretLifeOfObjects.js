/**
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

rabbit.speak('I am alive.');
console.log('---------------------');
