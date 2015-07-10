/**
 *
 * Syntax parser:
 *  - a program that reads your code and determines what it does and if its grammer is valid
 *  - someone else wrote a program to translate it for the computer, ex: a compiler
 *
 * Lexical Environment:
 *  - where something sits physically in the code your write
 *  - 'lexical' means 'having to do with words or grammar'. A lexical environment exists in
 *    programming languages in which where you write something is important
 *
 * Execution Context:
 *  - a wrapper (javascript engine) to help manage the code that is running.
 *  - there are lots of lexical environments. Which one is currently running is managed via
 *    execution contexts. It can contain things beyond what you've written in your code
 *  - the javascript engine creates a global object and creates a special variable for you 
 *    called 'this'
 *
 * Name Value Pairs:
 *  - a name which maps to a unique value
 *  - the name may be defined more than once, but only can have one calue in any given context
 *  - That value may be more name/value pairs
 *  - example var address = '100 main street';
 *  	'address' is the name and '100 main street' is the value
 *
 * Object:
 * 	- a collection of name value pairs
 * 	= the simplest definition when talking about javascript
 *  - example is address and apartment is a collection of name value pairs
 *  	address:
 *  	{
 *  		street: 'Main',
 *  		number: 100
 *  		apartment:
 *  		{
 *  			floor: 3,
 *  			number: 301
 *  		}
 *  	}
 */
