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
 *
 * enumerable/non-enumerable:
 *  - All properties that we create by simply assigning to them are 'enumerable'. Enumerable properties are
 *  	those properties whose internal [[Enumerable]] flag is set to true, which is the default for properties
 *  	created via simple assignment or via a property initializer (properties defined via Object.defineProperty
 *  	and such default [[Enumerable]] to false).
 *  - Enumerable properties show up in for...in loops unless the property's name is a Symbol. Ownership of
 *  	properties is determined by whether the property belongs to the object directly and not to its prototype
 *  	chain. Properties of an object can also be retrieved in total
 *  -	There are a number of built-in means of detecting, iterating/enumerating, and retrieving object properties,
 *  	with the chart on MDN showing which are available to use
 *  - The standard properties in Object.prototype are all 'non-enumerable', which is why they do not show up in such
 *  	a for/in loop. It is possible to define our own 'non-enumerable properties' by using the 'Object.defineProperty'
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

/* eslint-disable */
'use strict';

// 'Methods' are simply properties that hold function values. This is a simple method
var rabbit = {};
rabbit.speak = function(line) {
  console.log('The rabbit says "' + line + '"');
};

console.log('Working with Methods:');
rabbit.speak('I am alive.'); // The rabbit says "I am alive."

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
console.log('Working with this variable using .apply(), .call(), and .bind() methods:');
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
console.log('Working with Prototypes:');
console.log(empty.toString); // function toString(){…}
console.log(empty.toString()); // [object Object]
// So who is the prototype of that empty object? It is the great ancestral prototype, the entity
// behind almost all objects, Object.prototype. The Object.getPrototypeOf function returns the
// prototype of an object
console.log(Object.getPrototypeOf({}) === Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype)); // null
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
// The proto rabbit acts as a container for the properties that are shared by all rabbits. An
// individual rabbit object, like the killer rabbit, contains properties that apply only to
// itself—in this case its type—and derives shared properties from its prototype
var killerRabbit1 = Object.create(protoRabbit);
killerRabbit1.type = 'killer';
console.log('Working with Object.create() to create an object with specific prototype:');
killerRabbit1.speak('SKREEE!');
console.log('---------------------');


// 'Function Constructors' is a more convenient way to create objects that derive from some shared
// prototype. It is a convention to capitalize the names of constructors so that they are easily
// distinguished from other functions
function Rabbit(type) {
  this.type = type;
}

// In JavaScript, calling a function with the 'new' keyword in front of it causes it to be treated
// as a 'constructor'
var killerRabbit = new Rabbit('killer');
var blackRabbit = new Rabbit('black');
console.log('Working with Function Constructors:');
console.log(killerRabbit.type); // killer
console.log(blackRabbit.type); // black
// Constructors (in fact, all functions) automatically get a property named prototype, which by
// default holds a plain, empty object that derives from Object.prototype. Every instance created
// with this constructor will have this object as its prototype. So to add a 'speak method' to
// rabbits created with the Rabbit constructor, we can simply do this
Rabbit.prototype.speak = function(line) {
  console.log('The ' + this.type + ' rabbit says "' + line + '"');
};
blackRabbit.speak('Doom...'); // The black rabbit says "Doom..."

// Overriding derived properties. When you add a property to an object, whether it is present in the
// prototype or not, the property is added to the object itself, which will henceforth have it as its
// own property. If there is a property by the same name in the prototype, this property will no longer
// affect the object. The prototype itself is not changed. The Rabbit and Object prototypes lie behind
// killerRabbit as a kind of backdrop, where properties that are not found in the object itself can be
// looked up. Overriding properties that exist in a prototype is often a useful thing to do. As the
// rabbit teeth example shows, it can be used to express exceptional properties in instances of a more
// generic class of objects, while letting the nonexceptional objects simply take a standard value from
// their prototype
Rabbit.prototype.teeth = 'small';
console.log(killerRabbit.teeth); // small
killerRabbit.teeth = 'long, sharp, and bloody';
console.log(killerRabbit.teeth); // long, sharp, and bloody
console.log(blackRabbit.teeth); // small
console.log(Rabbit.prototype.teeth); // small
// Overriding properties is also used to give the standard function and array prototypes a different
// toString method than the basic object prototype. Calling toString on an array gives a result similar
// to calling .join(",") on it—it puts commas between the values in the array
console.log(Array.prototype.toString === Object.prototype.toString); // false
console.log([1, 2].toString()); // 1,2
//  Directly calling Object.prototype.toString with an array produces a different string. That function
//  doesn’t know about arrays, so it simply puts the word “object” and the name of the type between
//  square brackets
console.log(Object.prototype.toString.call([1, 2])); // [object Array]

// A prototype can be used at any time to add new properties and methods to all
// objects based on it. For example, it might become necessary for our rabbits to dance
Rabbit.prototype.dance = function() {
  console.log('The ' + this.type + ' rabbit dances a jig.');
};
killerRabbit.dance(); // The killer rabbit dances a jig.
console.log('---------------------');


// 'Prototype interference' can cause problems due to JavaScript distinguishing between enumerable and
// non-enumerable properties. You will see below that All properties that we create by simply assigning
// to them are enumerable. The standard properties in Object.prototype are all non-enumerable, which is
// why they do not show up in such a for/in loop.
// Built-in properties are non-enumerable. A plain object {} has only inherited non-enumerable properties
// (toString etc). A plain array has one own non-enumerable property length and many inherited ones
var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}
storePhi('pizza', 0.069);
storePhi('touched tree', -0.081);
console.log('Working with Prototype interference that can cause problems due to JavaScript' + '\n' +
'distinguishing between enumerable and non-enumerable properties:');

// We can iterate over all phi values in the object using a for/in loop and test whether a name is in
// there using the regular in operator. But unfortunately, the object’s prototype gets in the way
// notice that 'toString' did not show when logging to console but shows up below
Object.prototype.nonsense = 'hi';
// All properties that we create by simply assigning to them are enumerable. The standard properties
// in Object.prototype are all non-enumerable, which is why they do not show up in such a for/in loop
for (var name in map) {
  console.log(name);
}
// pizza
// touched tree
// nonsense

// in operator and for..in loop are different. The in operator considers own and inherited
// properties and both enumerable and non-enumerable properties. for...in loops only enumerable
// properties from own and inherited properties.
// This is wrong. There is no event called 'nonsense' in our data set
console.log('nonsense' in map); // true
// This is wrong. There is no event called 'toString' in our data set
console.log('toString' in map); // true
// Delete the problematic property again
delete Object.prototype.nonsense;

// It is possible to define our own non-enumerable properties by using the Object.defineProperty
// function, which allows us to control the type of property we are creating
Object.defineProperty(Object.prototype, 'hiddenNonsense', { enumerable: false, value: 'hi'});
for (var name in map) {
  console.log(name);
}
// pizza
// touched tree

// So now the property is there, but it won’t show up in a loop. That’s good
console.log(map.hiddenNonsense); // hi

// we still have the problem with the regular in operator claiming that the Object.prototype
// properties exist in our object. For that, we can use the object’s 'hasOwnProperty' method
// This method tells us whether the object itself has the property, without looking at its
// prototypes. This is often a more useful piece of information than what the in operator
// gives us
console.log(map.hasOwnProperty('toString')); // false

// When you are worried that someone (some other code you loaded into your program) might have
// messed with the base object prototype, its recommend you write your for/in loops like this
for (var name in map) {
  if (map.hasOwnProperty(name)) {
    console.log(name + ' is ' + true);
    // pizza is true
    // touched tree is true
  }
}
console.log('---------------------');


// Prototype-less objects What if someone registered the name hasOwnProperty in our map object
// and set it to the value 42? Now the call to map.hasOwnProperty will try to call the local
// property, which holds a number, not a function. In such a case, prototypes just get in the
// way, and we would actually prefer to have objects without prototypes. We saw the
// Object.create function, which allows us to create an object with a specific prototype.
// You are allowed to pass null as the prototype to create a fresh object with no prototype.
// For objects like map, where the properties could be anything, this is exactly what we want.
var map = Object.create(null);
map.pizza = 0.069;
// We no longer need the 'hasOwnProperty' kludge because all the properties the object has are
// its own properties. Now we can safely use for/in loops, no matter what people have been doing
// to Object.prototype.
console.log('look below: ');
console.log('toString' in map); // false
console.log('pizza' in map); // true
console.log('---------------------');

/**
 * 'Polymorphism' is the practice of designing objects to share behaviors and to be able to override
 * shared behaviors with specific ones. Polymorphism takes advantage of inheritance in order
 * to make this happen.
 *  - In OOP everything is considered to be modeled as an object. This abstraction can be taken all
 *  	the way down to nuts and bolts for a car, or as broad as simple a car type with a year, make,
 *  	and model
 *  - To have a polymorphic car scenario there would be the base car type, and then there would
 *  	subclasses which would inherit from car and provide their own behaviors on top of the basic
 *  	behaviors a car would have. For example, a subclass could be TowTruck which would still have a
 *  	year make and model, but might also have some extra behaviors and properties which could be as
 *  	basic as a flag for IsTowing to as complicated as the specifics of the lift
 *  - Below we show an example of people and employees, all employees are people, but all people
 *    are not employees. Which is to say that people will be the super class, and employee the sub
 *    class. People may have ages and weights, but they do not have salaries. Employees are people so
 *    they will inherently have an age and weight, but also because they are employees they will have
 *    a salary
 */
console.log('Working with Polymorphism:');
// we will first write out the super class (Person)
function Person(age, weight) {
  this.age = age;
  this.weight = weight;
}

// we will give Person the ability to share their information
Person.prototype.getInfo = function() {
  return 'I am ' + this.age + ' years old ' + 'and I weigh ' + this.weight + ' lbs.';
};

// Next we wish to have a subclass of Person, Employee
function Employee(age, weight, salary) {
  this.age = age;
  this.weight = weight;
  this.salary = salary;
}

Employee.prototype = new Person();

// And we will override the behavior of getInfo by defining one which is more fitting to an Employee
Employee.prototype.getInfo = function() {
  return 'I am ' + this.age + ' years old ' + 'and I weigh ' + this.weight + ' lbs ' + 'and earn ' + this.salary + ' dollars a year.';
};

var person = new Person(50, 150);
var employee = new Employee(43, 210, 50000);
console.log(person.getInfo());
console.log(employee.getInfo());
