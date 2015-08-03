/**
 * Arguments:
 *  - the parameters or arguments you pass to a function
 *  - javascript gives you a keyword of the same name which contains them all
 *  - in es6 arguments will become deprecated, can still be used but will
 *    not be the most efficent way ex: refer to /d8-arguments folder
 *    function greet(firstname, lastname, language, ...other)
 *
 * .apply():
 *  - similar to the call method, invokes the function and lets you set the 'this' keyword but only difference
 *  	is it wants an array of parameters
 *  - see folder ex: /d_19-call-apply-bind
 *
 * .bind():
 *  - does not invoke the function, it creates a copy of the function and you can tell it what the "this"
 *  	variable is
 *  - see folder ex: /d_19-call-apply-bind
 *
 * .call():
 *  - unlike the bind method ,call doesn't make a copy it actually executes or invokes it and decides what
 *  	the "this" variable is
 *  - see folder ex: /d_19-call-apply-bind
 *
 * Callback Function:
 *  - a function you give to another function, to be run when the other function is finished
 *  - so the function you call (ex: invoke), 'calls back' by calling the function you gave it when it
 *    finishes
 *
 * Closures:
 *  - are a feature of the javascript programming language, this just happens
 *  - the js engine will always make sure that what ever function you are running that it will
 *    have access to the variables its suppose to have access too and that its scope is intact
 *  - when you run a function it works the way it suppose too
 *  -  the js engine creates the closure, you don't make the closure
 *  - ex: see folder /d_17-function-factories /d_18-closures-and-callbacks d_20-functional-programming
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
 *  	number.
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
 * White Space:
 *  - invisible characters that create literal 'space' in your written code
 *  - carriage returns, tabs, spaces
 */
