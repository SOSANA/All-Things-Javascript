/**
 * .apply():
 *  - similar to the call method, invokes the function and lets you set the 'this' keyword but only difference
 *  	is it wants an array of parameters
 *  - see ex: /call-apply-bind
 *
 * .bind():
 *  - does not invoke the function, it creates a copy of the function and you can tell it what the "this"
 *  	variable is
 *  - The bind method, which all functions have, creates a new function that will call the original function
 *  	but with some of the arguments already fixed
 *  - The first argument, is used for method calls
 *  - see ex: /call-apply-bind
 *
 * .call():
 *  - unlike the bind method , call doesn't make a copy it actually executes or invokes it and decides what
 *  	the "this" variable is
 *  - see ex: /call-apply-bind
 *
 * Arguments:
 *  - the parameters or arguments you pass to a function
 *  - javascript gives you a keyword of the same name which contains them all
 *  - in es6 arguments will become deprecated, can still be used but will
 *    not be the most efficent way ex: refer to /d8-arguments folder
 *    function greet(firstname, lastname, language, ...other)
 *
 * By Reference vs By Value:
 *  - in both cases we are talking about variables
 *    - by reference
 *      - all objects are by reference
 *      - instead of getting a new location in memory it points to the same location in memory
 *        space (address).
 *      - important to understand that all objects interact by reference when setting or passing
 *        to a function
 *      - refer to byValue.png slide in /notes and /d6b-by-value-by-reference folder
 *    - by value
 *      - all primitive types (number, boolean, string) are by value
 *      - refer to /d6b-by-value-by-reference folder
 *
 * Callback Function:
 *  - a function you give to another function, to be run when the other function is finished
 *  - so the function you call (ex: invoke), 'calls back' by calling the function you gave it when it
 *    finishes
 *  - the functions that are passed into higher order functions
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
 * Closures:
 *  - are a feature of the javascript programming language, this just happens
 *  - the js engine will always make sure that what ever function you are running that it will
 *    have access to the variables its suppose to have access too and that its scope is intact
 *  - when you run a function it works the way it suppose too
 *  -  the js engine creates the closure, you don't make the closure
 *  - ex: see folder /d_17-function-factories /d_18-closures-and-callbacks d_20-functional-programming
 *
 * Composability:
 *  - known as "composition" refers to function composition (not to be confused
 *  	with object composition) is an act or mechanism to combine simple functions
 *  	to build more complicated ones. Like the usual composition of functions in
 *  	mathematics, the result of each function is passed as the argument of the
 *  	next, and the result of the last one is the result of the whole.
 *  - Higher-order functions start to shine when you need to compose functions.
 *  	ex: code that finds the average age for men and for women in the data set
 *  - Putting bits and pieces togather, so that a meaning can be made out of it
 *  - comes at at cost due to 'inefficiency'.
 *    - Function calls in JavaScript are costly compared to simple loop bodies.
 *    - Abstractions add layers between the raw things the computer is doing and
 *    	the concepts we are working with and thus cause the machine to perform
 *    	more work.
 *    - This is not an iron law—there are programming languages that have better
 *    	support for building abstractions without adding inefficiencies, and even
 *    	in JavaScript, an experienced programmer can find ways to write abstract
 *    	code that is still fast. But it is a problem that comes up a lot
 *    - Fortunately, most computers are insanely fast. If you are processing a
 *    	modest set of data or doing something that has to happen only on a human
 *    	time scale (say, every time the user clicks a button), then it does not
 *    	matter whether you wrote a pretty solution that takes half a millisecond
 *    	or a super-optimized solution that takes a tenth of a millisecon
 *    - It is helpful to roughly keep track of how often a piece of your program
 *    	is going to run. If you have a loop inside a loop (either directly or
 *    	through the outer loop calling a function that ends up performing the
 *    	inner loop), the code inside the inner loop will end up running N×M times,
 *    	where N is the number of times the outer loop repeats and M is the number
 *    	of times the inner loop repeats within each iteration of the outer loop.
 *    	If that inner loop contains another loop that makes P rounds, its body
 *    	will run M×N×P times, and so on. This can add up to large numbers, and
 *    	when a program is slow, the problem can often be traced to only a small
 *    	part of the code, which sits inside an inner loop
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
 *  - The standard properties in Object.prototype are all 'nonenumerable', which is why they do not show up in such
 *  	a for/in loop. It is possible to define our own 'nonenumerable properties' by using the 'Object.defineProperty'
 *  	function, which allows us to control the type of property we are creating
 *  - src: https://developer.mozilla.org/en/docs/Web/JavaScript/Enumerability_and_ownership_of_properties
 *  - ex: ./theSecretLifeOfObjects.js
 *
 * First Class Functions:
 * 	- everything you can do with other types such as objects, strings, numbers, and booleans
 * 		you can do with functions
 * 	- assign variables to have a value thats a function
 *  - pass functions around as parameters to other functions
 *  - create functions on the fly with a kind of literal syntax
 *
 * Functions:
 * 	- functions are objects
 * 	- it resides in memory
 * 	- its a special type of a object.
 * 	- It has all the features of a normal object and has other special properties
 * 	- you can attach properties and methods to a function
 * 	- you can attach primitive types, Objects (name value pairs), and functions
 * 	- has hidden special properties, two of the important ones:
 * 		- name: optional, can be anonymous
 * 		- code: where the actual lines of code that you have written sit, the code that you
 * 						write gets placed into a special property of the function object. The code that
 * 						you write is one of those properties you are adding on to it. Whats special is
 * 						that its invocable, meaning you can say run this code sitting on this property
 * 						and that is when the entire excution context creation happens.
 *  - you have to think of a function as an object who's code happens to be one of the
 *  	properties of that object. There are other things that the function can have attached to
 *  	it, and other things the function can do, it can be moved around, copied, and given to
 *  	other elements or other areas of your code. Just like any objects, value, string and
 *  	number
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
 * Function currying:
 * 	- creating a copy of a function but with some preset parameters
 * 	- very useful in mathematical situations
 * 	- a really good usage for bind()
 * 	- ex: see folder /d_19-call-apply-bind
 *
 * Function Expression & Expressions:
 *  - a unit of code that results in a value
 *  - puts it into a variable and sets it to undefined before executing the code, once it
 *    starts executing the code and assigns the anonymous function to the variable
 *  - it doesn't have to save to a value inside a variable
 *  - ex: a = 3, 1 + 2, a = { greeting: 'hi' } refer to .../d6-function-expressions
 *
 * Function Factory:
 *  - a function that returns or makes other things for you
 *
 * Function Statement & Statements:
 *  - just does the work, does not provide a value
 *  - puts the function statement into memory and it gets hoisted, creates function before
 *    executing the code
 *  - ex: refer to .../d6-function-expressions
 *
 * Higher-order functions:
 *  - functions that accept other functions
 *  - enhance the behavior of other functions
 * 	- Functions that operate on other functions, either by taking them as arguments or by returning them
 * 	- If you have already accepted the fact that functions are regular values, there is nothing
 * 		particularly remarkable about the fact that such functions exist. The term comes from mathematics,
 * 		where the distinction between functions and other values is taken more seriously.
 *  - Higher-order functions allow us to abstract over actions, not just values. They come in several forms
 *  - ex:
 *  	- you can have functions that change other functions
 *  	- You can even write functions that provide new types of control flow
 *  	- Passing along arguments, which wraps its argument in another function
 *
 * Immediately-Invoked Function Expression (IIFE):
 *  - execuding a function after we create it
 *  - invoking function express immediately with parentheses after and passing parameter
 *  - when you want a function expression instead of a normal function statement. You put the
 *    function inside the parentheses
 *  - ex: see folder /d_14-iif-es and /d_15-iif-es-and-safe-code
 *    - this is classic example of an IIFE
 *      var firstName = 'Johnny';
 *      (function (name) {
          var greeting = 'Inside IIFE: Hello';
          console.log(greeting + ' ' + name);
        }(firstName));
 *
 * Methods:
 *  - are simply properties that hold function values
 *  - Usually a method needs to do something with the object it was called on. When a function is
 *  	called as a method—looked up as a property and immediately called, as in object.method()—the
 *  	special variable this in its body will point to the object that it was called on
 *
 * Mutate:
 *  - to change something
 *  - "immutable" means it can't be changed.
 *
 * Namespace:
 *  - a container (just a holder) for variables and functions.
 *  - Typically to keep variables and functions with same name separate
 *
 * Objects And Functions:
 *  - objects are collections of name value pairs. A set of values that are given names
 *  - an object can have properties and methods. The following could be sitting off or
 *    connected to an object:
 *    - Primitive Property: This is called a property (primitive types) ex: boolean,
 *      number, or string
 *    - Object "property": Can have another object connected to it (as child so to speak)
 *      this is also considered a property. Remember we said the value could be another
 *      name value pair collection or that is another object
 *    - Function "method": objects can contain functions. In these cases the function is
 *      calling a mehthod when its sitting on a object, its connected to a object
 *  - objects sit in memory and the core object will have some sort of address in your
 *    computers memory. It will have references to these different properties and methods
 *    which are also sitting in your computers memory. The object has references address in
 *    space, a spot, where these different methods and properties live
 *  - Think about an object as sitting in memory and than having references to other things
 *    sitting memory that are connected it. It knows where its different properites and
 *    methods are: that is primitives, objects, and functions that make up the object
 *
 * Object Literal:
 *  - ex: var person = { firstname: 'John', lastname: 'Doe' }; refer to .../d2-object-literals
 *
 * Objects And The Dot:
 *  - the dot is a operator (a function) and it takes two parameters ex: person.firstname
 *  - always use the dot operator over the computed member access operator []. see the
 *    d1-objects-and-the-dot folder for more info
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
 *
 * Predicate functions:
 *  - is a function that returns true or false based on some condition. In this problem, we’re using
 *  	isNaN(testValue), which returns true if testValue is NaN (remember this means not a number),
 *  	and false otherwise
 *  - ex: arrays/showSome.js and arrays/showEvery.js
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
 * Recursion:
 *  - Recursion is an important programming technique. It is used to have a function call itself
 *    from within itself. One example is the calculation of factorials. The factorial of 0 is
 *    defined specifically to be 1. The factorials of larger numbers are calculated by multiplying
 *    1 * 2 * ..., incrementing by 1 until you reach the number for which you are calculating the
 *    factorial.
 *  - ex: url ref https://msdn.microsoft.com/library/wwbyhkx4
 */
