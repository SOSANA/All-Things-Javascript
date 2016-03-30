/**
 * Values:
 *  - six basic types of values in JavaScript:
 *  	- numbers, strings, Booleans, objects, functions, and undefined values
 *
 * Numbers:
 *  - uses a fixed number of bits, namely 64 of them, to store a single number value
 *  - important to be aware of calculations with fractional numbers and treat
 *  	fractional digital numbers as approximations, not as precise values, ex: pi
 *  - Special Numbers:
 *    - The first two special numbers are Infinity and -Infinity, which represent
 *    	the positive and negative infinities. Infinity - 1 is still Infinity, and so
 *    	on. Don’t put too much trust in infinity-based computation. It isn’t
 *    	mathematically solid
 *    - our next special number is NaN. NaN stands for “not a number”, even though it
 *    	is a value of the number type
 * Strings:
 *  - Almost anything can be put between quotes, and JavaScript will make a string
 *  	value out of it
 *  - whenever a backslash (“\”) is found inside quoted text, it indicates that the
 *  	character after it has a special meaning. This is called escaping the character.
 *  	A quote that is preceded by a backslash will not end the string but be part of
 *  	it. When an “n” character occurs after a backslash, it is interpreted as a
 *  	newline. Similarly, a “t” after a backslash means a tab character.
 *  	ex: "This is the first line\nAnd this is the second"
 *  - Strings cannot be divided, multiplied, or subtracted, but the + operator can be
 *  	used to concatenate them, ex: "con" + "cat" + "e" + "nate"
 * Booleans:
 *  - value that distinguishes between true and false
 *  - comparison operators ex: ( == , != , === , !== , < , > , <= , >= )
 *  - logical operators can be applied to boolean values, JavaScript supports three
 *  	and (&&), or (||), and not (!)
 * Undefined:
 *  - There are two special values, written null and undefined, that are used to denote
 *  	the absence of a meaningful value. They are themselves values, but they carry no
 *  	information.
 *  - The difference in meaning between undefined and null is an accident of JavaScript’s
 *  	design, and it doesn’t matter most of the time. In the cases where you actually
 *  	have to concern yourself with these values, I recommend treating them as
 *  	interchangeable
 * Coercion:
 *  - quietly convert that value to the type it wants, using a set of rules that often
 *  	aren’t what you want or expect.
 *  - ex: console.log('5' == 5);; // → true
 *  - use strict equality ex: console.log('5' === 5);
 *
 * You can combine and transform values with operators:
 * 	binary operators:
 * 	 - Operators that use two values
 *   - for arithmetic ( + , - , * , / , and % )
 *     - you might not immediately recognize % symbol has it is used to represent
 *       the remainder operation
 *   - string concatenation ( + )
 *   - comparison ( == , != , === , !== , < , > , <= , >= )
 *   - logic ( && , || )
 * 	unary operators:
 * 	 - Operators that use one value
 * 	 - Not all operators are symbols. Some are written as words. One example is the
 * 	 	 typeof operator, which produces a string value naming the type of the value
 * 	 	 you give it, ex: console.log( typeof 4.5 ) // → number
 * 	 	 console.log( typeof "x" ) // → string
 *   - ex: using '-' to negate a number, using '!' to negate logically, and 'typeof'
 *   	 to find a value’s type
 *  ternary operator:
 *   - also called conditional operator
 *   - value on the left of the question mark “picks” which of the other two values
 *   	 will come out. When it is true, the middle value is chosen, and when it is
 *   	 false, the value on the right comes out
 *   - ( ?: ) to pick one of two values based on a third value.
 *   	 ex: console.log( true ? 1 : 2 ); // → 1
 *
 */
