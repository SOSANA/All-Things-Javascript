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
 *
 * Methods:
 *  - are simply properties that hold function values
 *  - Usually a method needs to do something with the object it was called on. When a function is
 *  	called as a method—looked up as a property and immediately called, as in object.method()—the
 *  	special variable this in its body will point to the object that it was called on
 *
 * Prototypes:
 *  - all functions and arrays have prototype pointing to an object with those function methods
 *  - all functions have a property called prototype that starts out as an empty object
 *  - always use captial letter ex: function Person(firstname, lastname) {};
 *  - prototype property is used only by the "new" operator. Make sure to always use "new"
 *    assigning prototypes to objects as it will come back undefined
 *  - understand the difference of using "new" and built-in functions
 *    ex: var b = new Number(3); // creating a new object
 *        var c = Number(3); // calling the function and getting an object back
 *  - allows access to all objects just once, rather than every object taking up memory space
 *    and getting a copy for every object ex: if you have a 1000 Person Objects with getFullName
 *    methods you will have a 1000 getFullName methods taking up memory space rather than having
 *    a prototype you will only have need one method
 *  - A prototype is another object that is used as a fallback source of properties. When an
 *  	object gets a request for a property that it does not have, its prototype will be searched
 *  	for the property, then the prototype’s prototype, and so on
 *  - The prototype relations of JavaScript objects form a tree-shaped structure, and at the root
 *  	of this structure sits Object.prototype. It provides a few methods that show up in all objects,
 *  	such as toString, which converts an object to a string representation
 *  - Many objects don’t directly have Object.prototype as their prototype, but instead have another
 *  	object, which provides its own default properties. Functions derive from Function.prototype, and
 *  	arrays derive from Array.prototype. The Object.getPrototypeOf function obviously returns the
 *  	prototype of an object
 *  - Such a prototype object will itself have a prototype, often Object.prototype, so that it still
 *  	indirectly provides methods like toString.
 *  - You can use Object.create to create an object with a specific prototype
 *  - the Object.getPrototypeOf function returns the prototype of an object
 */

/* eslint-disable */
'use strict';

// 'Methods' are simply properties that hold function values. This is a simple method
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
var uglyRabbit = speak.bind({type: 'ugly'}, 'Why am I so ugly!');
// remember that .bind() is not invoked, so we invoke it and create a copy of that function
uglyRabbit(); // The ugly rabbit says "Why am I so ugly!"
console.log('---------------------');


// A 'prototype' is another object that is used as a fallback source of properties. When an object
// gets a request for a property that it does not have, its prototype will be searched for the
// property, then the prototype’s prototype, and so on
var empty = {};
console.log(empty.toString); // function toString(){…}
console.log(empty.toString()); // [object Object]
console.log('---------------------');


// So who is the prototype of that empty object? It is the great ancestral prototype, the entity
// behind almost all objects, Object.prototype. The Object.getPrototypeOf function returns the
// prototype of an object
console.log(Object.getPrototypeOf({}) === Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype)); // null
console.log('---------------------');


// The prototype relations of JavaScript objects form a tree-shaped structure, and at the root of
// this structure sits Object.prototype. It provides a few methods that show up in all objects,
// such as toString, which converts an object to a string representation
// Many objects don’t directly have Object.prototype as their prototype, but instead have another
// object, which provides its own default properties. Functions derive from Function.prototype,
// and arrays derive from Array.prototype. The 'Object.getPrototypeOf' function obviously returns
// the prototype of an object
console.log(Object.getPrototypeOf(isNaN) === Function.prototype); // true
console.log(Object.getPrototypeOf([]) === Array.prototype); // true
console.log('---------------------');


// You can use Object.create to create an object with a specific prototype
var protoRabbit = {
  speak: function(line) {
    console.log('The ' + this.type + ' rabbit says "' + line + '"');
  }
};
// The “proto” rabbit acts as a container for the properties that are shared by all rabbits. An
// individual rabbit object, like the killer rabbit, contains properties that apply only to
// itself—in this case its type—and derives shared properties from its prototype
var killerRabbit1 = Object.create(protoRabbit);
killerRabbit1.type = 'killer';
killerRabbit1.speak('SKREEE!');
console.log('---------------------');


// Function Constructors
function Rabbit(type) {
  this.type = type;
}

var killerRabbit = new Rabbit('killer');
var blackRabbit = new Rabbit('black');
console.log(killerRabbit.type); // killer
console.log(blackRabbit.type); // black
