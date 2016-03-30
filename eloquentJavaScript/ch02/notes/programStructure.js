/**
 * Expressions:
 *  - A fragment of code that produces a value ex: 22 or "psychoanalysis"
 *  - An expression between parentheses is also an expression, as is a binary operator
 *  	applied to two expressions or a unary operator applied to one
 * Statements:
 *  - A statement stands on its own and amounts to something only if it affects the
 * 	  world. It could display something on the screen that counts as changing the world
 * 	  or it could change the internal state of the machine in a way that will affect the
 * 	  statements that come after it. These changes are called side effects
 *  - every statement that needs a semicolon will always be terminated by one
 * Variables:
 *  - holds internal state to catch and hold values
 *  - its a special key word
 *  - imagine variables as tentacles, rather than boxes. They do not contain values,
 *  	they grasp them, two variables can refer to the same value
 * Keywords and Reserved words:
 *  - Words with a special meaning and may not be used as variable names
 *  	ex: break, case, catch, class, const, continue, debugger, default, delete, do,
 *  			else, enum, export, extends, false, finally, for, function, if, implements,
 *  			import, in, instanceof, interface, let, new, null, package, private, protected,
 *  			public, return, static, super, switch, this, throw, true, try, typeof, var,
 *  			void, while, with, yield
 * The environment:
 *  - The collection of variables and their values that exist at a given time
 *  - When a program starts up, this environment is not empty. It always  contains
 *  	variables that are part of the language standard, and most of the time, it has
 *  	variables that provide ways to interact with the surrounding system. For example, in
 *  	a browser, there are variables and functions to inspect and influence the currently
 *  	loaded website and to read mouse and keyboard input.
 * Functions:
 *  - is a piece of program wrapped in a value ex: alert(), console.log(), prompt()
 *  - Executing a function is called invoking, calling, or applying it
 *  - You can call a function by putting parentheses after an expression that produces a
 *    function value. Values given to functions are called arguments
 * Control flow:
 *  - When your program contains more than one statement, the statements are executed,
 *  	predictably, from top to bottom
 * Conditional execution:
 *  - choose between two different routes based on a Boolean value
 *  - is written with the if keyword in JavaScript. In the simple case, we just want some
 *  	code to be executed if, and only if, a certain condition holds
 *  - ex: if, while, do, for loops
 */
