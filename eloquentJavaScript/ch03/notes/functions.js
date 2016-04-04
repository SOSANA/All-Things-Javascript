/**
 * src: Chapter 3 - Functions
 * Defining a function:
 *  - A "function definition" is just a regular variable definition where the value
 *    given to the variable happens to be a function. For example, the following
 *    code defines the variable square to refer to a function that produces the
 *    square of a given number:
 *    var square = function(x) {
 *      return x * x;
 *    };
 *    console.log(square(12)); // 144
 *  - A function is created by an expression that starts with the keyword function
 *  	which contains the statements that are to be executed when the function is
 *  	called. The function body must always be wrapped in braces, even when it
 *  	consists of only a single statement (as in the previous example)
 *  - A function can have multiple parameters or no parameters at all
 *  - Some functions produce a value, such as the examples power and square, and
 *  	some don’t, such as ex: makeNoise, which produces only a side effect. A return
 *  	statement determines the value the function returns. When control comes across
 *  	such a statement, it immediately jumps out of the current function and gives
 *  	the returned value to the code that called the function. The return keyword
 *  	without an expression after it will cause the function to return undefined
 * Parameters and scopes:
 *  - A key aspect in understanding functions is understanding local scopes
 *  - Parameters and variables declared inside a function are local to the function,
 *  	re-created every time the function is called, and not visible from the outside.
 *  	Functions declared inside another function have access to the outer function’s
 *  	local scope
 *  - The parameters to a function behave like regular variables, but their initial
 *    values are given by the caller of the function, not the code in the function
 *    itself. ex: console.log(square(12)); // 144
 *  - An important property of functions is that the variables created inside of them,
 *  	including their parameters, are local to the function. This means, for example,
 *    that variable inside a function will be newly created every time the function is
 *    called, and these separate incarnations do not interfere with each other.
 *  - This “localness” of variables applies only to the parameters and to variables
 *  	declared with the var keyword inside the function body. Variables declared outside
 *   	of any function are called global, because they are visible throughout the program.
 *  - It is possible to access such variables from inside a function, as long as you
 *  	haven’t declared a local variable with the same name
 *  - This behavior helps prevent accidental interference between functions
 * Nested scope:
 *  - Functions can be created inside other functions, producing several degrees of
 *  	locality
 *  - each local scope can also see all the local scopes that contain it. The set of
 *  	variables visible inside a function is determined by the place of that function in
 *  	the program text. All variables from blocks around a function’s definition are
 *  	visible—meaning both those in function bodies that enclose it and those at the top
 *   	level of the program. This approach to variable visibility is called "lexical scoping".
 *  - in JavaScript, functions are the only things that create a new scope
 *  - The next version of JavaScript will introduce a "let" keyword, which works like var but
 *  	creates a variable that is local to the enclosing block, not the enclosing function
 * Functions as values:
 *  - Function variables usually simply act as names for a specific piece of the program. Such
 *  	a variable is defined once and never changed. This makes it easy to start confusing the
 *  	function and its name. But the two are different. A function value can do all the things
 *  	that other values can do, you can use it in arbitrary expressions, not just call it. It
 *  	is possible to store a function value in a new place, pass it as an argument to a function,
 *  	and so on. Similarly, a variable that holds a function is still just a regular variable
 *  	and can be assigned a new value
 * Declaration notation:
 *  - There is a slightly shorter way to say “ var square = function… ”. The function keyword can
 *  	also be used at the start of a statement, as in the following:
 *  	function square(x) {
 *  		return x * x ;
 *  	}
 *  - This is called a "function declaration". The statement defines the variable square and points
 *  	it at the given function
 *  - function declaration are not a part top-to-bottom flow of control. They are conceptually moved
 *  	to the top of their scope and can be used by all the code in that scope. This is sometimes
 *  	useful because it gives us the freedom to order code in a way that seems meaningful, without
 *  	worrying about having to define all functions above their first use.
 * The call stack:
 *  - The place where the computer stores this context is the call stack. Every time a function is
 *  	called, the current context is put on top of this “stack”. When the function returns, it
 *  	removes the top context from the stack and uses it to continue execution. Storing this stack
 *  	requires space in the computer’s memory. When the stack grows too big, the computer will fail
 *  	with a message like “out of stack space” or “too much recursion”.
 * Optional Arguments:
 *  - JavaScript is extremely broad-minded about the number of arguments you pass to a function. If
 *  	you pass too many, the extra ones are ignored. If you pass too few, the missing parameters
 *  	simply get assigned the value undefined. The downside of this is that it is possible and
 *  	likely, even that you’ll accidentally pass the wrong number of arguments to functions and no
 *  	one will tell you about it. The upside is that this behavior can be used to have a function
 *  	take “optional” arguments
 * Closure:
 *  - the js engine will always make sure that what ever function you are running that it will
 *    have access to the variables its suppose to have access too and that its scope is intact
 *  - when you run a function it works the way it suppose too
 *  - the js engine creates the closure, you don't make the closure
 *  - being able to reference a specific instance of local variables in an enclosing function is
 *  	called closure. A function that “closes over” some local variables is called a "closure".
 *   	This behavior not only frees you from having to worry about lifetimes of variables but also
 *   	allows for some creative use of function values.
 *  - The ability to treat functions as values, combined with the fact that local variables are
 *  	“re-created” every time a function is called.
 *  - A good mental model is to think of the function keyword as “freezing” the code in its body
 *  	and wrapping it into a package (the function value). So when you read return
 *   	function(...) {...} , think of it as returning a handle to a piece of computation, frozen
 *   	for later use. In the example, multiplier returns a frozen chunk of code that gets stored in
 *   	the twice variable. The last line then calls the value in this variable, causing the frozen
 *   	code ( return number * factor; ) to be activated. It still has access to the factor variable
 *   	from the multiplier call that created it, and in addition it gets access to the argument
 *   	passed when unfreezing it, 5, through its number parameter.
 * Recursion:
 *  - is an important programming technique. It is used to have a function call itself from within
 *  	itself. A function that calls itself is called "recursive"
 *  - It is perfectly okay for a function to call itself, as long as it takes care not to overflow
 *  	the stack
 *  - The function calls itself multiple times with different arguments to achieve the repeated
 *  	multiplication. But this implementation has one important problem: in typical JavaScript
 *   	implementations, it’s about 10 times slower than the looping version. Running through a simple
 *   	loop is a lot cheaper than calling a function multiple times.
 *  - One example of recursion is the calculation of factorials. The factorial of 0 is defined
 *  	specifically to be 1. The factorials of larger numbers are calculated by
 *  	multiplying 1 * 2 * ..., incrementing by 1 until you reach the number for which you are
 *  	calculating the factorial.
 * Growing functions:
 *  - two more or less natural ways for functions to be introduced into programs.
 *  	Code reuse (code duplication) or functionality that you haven't written yet
 *  - How difficult it is to find a good name for a function is a good indication of how clear a
 *  	concept it is that you’re trying to wrap
 * Functions and side effects:
 *  - Functions can be roughly divided into those that are called for their side effects and those
 *  	that are called for their return value
 *  - Functions that create values are easier to combine in new ways than functions that directly
 *  	perform side effects
 *  - A "pure function" is a specific kind of value-producing function that not only has no side
 *  	effects but also doesn’t rely on side effects from other code.
 *  	ex: it doesn’t read global variables that are occasionally changed by other code.
 *  	A pure function has the pleasant property that, when called with the same arguments, it
 *  	always produces the same value (and doesn’t do anything else). This makes it easy to reason
 *  	about. A call to such a function can be mentally substituted by its result, without changing
 *  	the meaning of the code. When you are not sure that a pure function is working correctly, you
 *  	can test it by simply calling it, and know that if it works in that context, it will work in
 *  	any context.
 *  - "Nonpure functions" might return different values based on all kinds of factors and have side
 *  	effects that might be hard to test and think about.
 */
