/**
 * Function Constructors:
 *  - a normal function that is used to construct objects
 *  - the 'this' variable points to a new empty object, and that object is returned from the
 *    function automatically
 * 
 * Method Chaining:
 *  - calling one method after another, and each method affects the parent object.
 *  - so obj.method1().method2() where both methods end up with a 'this' variable pointing at 'obj'
 *    ex: see section 8
 * 
 * PolyFill:
 *  - code that adds a feature which the engine may lack
 * 
 * Prototype:
 *  - all functions have a property called prototype that starts out as an empty object
 *  - always use captial letter ex: function Person(firstname, lastname) {};
 *  - prototype property is used only by the "new" operator. Make sure to always use "new"
 *    assigning prototypes to objects as it will come back undefined
 *  - understand the difference of using "new" and built-in functions
 *    ex: var b = new Number(3); // creating a new object
 *        var c = Numnber(3); // calling the function and getting an object back
 *  - allows access to all objects just once, rather than every object taking up memory space
 *    and getting a copy for every object ex: if you have a 1000 Person Objects with getFullName 
 *    methods you will have a 1000 getFullName methods taking up memory space rather than having
 *    a prototype you will only have need one method
 * 
 * Syntactic Sugar:
 *  - a different way to type something that doesn't change how it works under the hood
 * 
 * Transpile:
 *  - convert the syntax of one programming language, to another
 *  - in this case languages that don't really ever run anywhere, but instead are processed by 
 *    'transpilers' that generate JavaScript. ex: (babel.js, typescript.js, etc)
 *  - refer to hear for a list of features for ES6: https://github.com/lukehoban/es6features
 */
