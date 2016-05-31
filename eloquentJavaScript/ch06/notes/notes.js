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
 *    function automatically. The constructor will have its 'this' variable bound to a fresh object, and
 *    unless it explicitly returns another object value, this new object will be returned from the call
 *  - In JavaScript, calling a function with the 'new' keyword in front of it causes it to be treated
 *  	as a constructor. An object created with 'new' is said to be an instance of its constructor
 *  - Constructors (in fact, all functions) automatically get a property named prototype, which by
 *  	default holds a plain, empty object that derives from Object.prototype. Every instance created with
 *  	this constructor will have this object as its prototype
 *  - It is important to note the distinction between the way a prototype is associated with a constructor
 *  	(through its prototype property) and the way objects have a prototype (which can be retrieved with
 *  	Object.getPrototypeOf). The actual prototype of a constructor is Function.prototype since constructors
 *  	are functions. Its prototype property will be the prototype of instances created through it but is not
 *  	its own prototype
 *
 * enumerable/nonenumerable:
 *  - All properties that we create by simply assigning to them are 'enumerable'. Enumerable properties are
 *  	those properties whose internal [[Enumerable]] flag is set to true, which is the default for properties
 *  	created via simple assignment or via a property initializer (properties defined via Object.defineProperty
 *  	and such default [[Enumerable]] to false).
 *  - Enumerable properties show up in for...in loops unless the property's name is a Symbol. Ownership of
 *  	properties is determined by whether the property belongs to the object directly and not to its prototype
 *  	chain. Properties of an object can also be retrieved in total
 *  -	There are a number of built-in means of detecting, iterating/enumerating, and retrieving object properties,
 *  	with the chart on MDN showing which are available to use
 *  - The standard properties in Object.prototype are all 'nonenumerable', which is why they do not show up in such
 *  	a for/in loop. It is possible to define our own 'nonenumerable properties' by using the 'Object.defineProperty'
 *  	function, which allows us to control the type of property we are creating
 *  - src: https://developer.mozilla.org/en/docs/Web/JavaScript/Enumerability_and_ownership_of_properties
 *  - ex: ./theSecretLifeOfObjects.js
 *
 * Polymorphism:
 *  - is one of the tenets of Object Oriented Programming (OOP). It is the practice of designing objects to share
 *  	behaviors and to be able to override shared behaviors with specific ones.
 *  - takes advantage of inheritance in order to make this happen
 *  - In OOP everything is considered to be modeled as an object. This abstraction can be taken all the way down to
 *  	nuts and bolts for a car, or as broad as simple a car type with a year, make, and model
 *  - ex:
 *  	 - To have a polymorphic car scenario there would be the base car type, and then there would subclasses which
 *  	 	 would inherit from car and provide their own behaviors on top of the basic behaviors a car would have.
 *  	 - a subclass could be TowTruck which would still have a year make and model, but might also have some extra
 *  	 	 behaviors and properties which could be as basic as a flag for IsTowing to as complicated as the specifics
 *  	 	 of the lift
 *  	 - ./theSecretLifeOfObjects.js
 */
