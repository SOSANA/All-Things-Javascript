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
 * Classical Vs Prototypal Inheritance:
 *  - Inheritance
 *    - one object gets access to the properites and methods of another object.
 *  - Classical Inheritance
 *    - commonly use in classical programming such as java, c++, php, etc
 *    - considered verbose, uses friend, protected, private, interface
 *  - Protypal Inheritance
 *    - Simple, flexible, extensible and easy to understand
 *    - two patterns of prototypal inheritance
 *        - prototypal pattern of prototypal inheritance
 *        - the constructor pattern of prototypal inheritance
 *    - there are two ways of creating objects using prototypal inheritance
 *        - create a brand new object.
 *        - clone an existing object and extend it
 *  - good explanation found here:
 *    http://stackoverflow.com/questions/2800964/benefits-of-prototypal-inheritance-over-classical
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
 *  	ex: ./theSecretLifeOfObjects.js
 *
 * Function Constructors:
 *  - a normal function that is used to construct objects
 *  - the 'this' variable points to a new empty object, and that object is returned from the
 *    function automatically
 */
