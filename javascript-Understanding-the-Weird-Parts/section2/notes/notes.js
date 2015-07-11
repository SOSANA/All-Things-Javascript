/**
 * Execution Context:
 *  - a wrapper (javascript engine) to help manage the code that is running.
 *  - there are lots of lexical environments. Which one is currently running is managed via
 *    execution contexts. It can contain things beyond what you've written in your code
 *  - the javascript engine creates a global object and creates a special variable for you 
 *    called 'this' or 'window' which are both equal
 *  - the execution context is created in two phases: 
 *      - The first phase is called the "creation phase"
 *        - in this phase we have the "Global Object", "this", and "Outer Environment"
 *        - sets up the memory space so when the code begins executing those things are 
 *          ready to start executing
 *        - in this creation phase as the parser runs through the code and set up what you 
 *          have written for translation, it recognizes where you created variables and 
 *          where you have created functions. Its in this step the memory phase sets up
 *          "Hoisting". +
 *        - Hoisting is JavaScript's default behavior of moving declarations to the top. In 
 *          JavaScript, a variable can be declared after it has been used. In other words; 
 *          a variable can be used before it has been declared. Hoisting is JavaScript's 
 *          default behavior of moving all declarations to the top of the current scope (to 
 *          the top of the current script or the current function).The functions and variables 
 *          exist in memory. So when the code begins to execute line by line it can access 
 *          them. With variables its a little bit different. All variables are initial set to 
 *          undefined
 *      - The second phase is called the "execution phase"
 *        - in the execution phase we already have the "creation phase" setup
 *        - runs your code line by line, interpeting it, converting it, compiling it, executing
 *          it on the computer into something the computer can understand line by line
 * Global:
 *  - "Not Inside a Function"
 * 
 * Invocation:
 *  - is Running A function, otherwised refer'd to calling a function, run a function or invoking 
 *    a function
 *  - in javascript, by using parenthesis (), example: a()
 *   
 * Lexical Environment:
 *  - where something sits physically in the code your write
 *  - 'lexical' means 'having to do with words or grammar'. A lexical environment exists in
 *    programming languages in which where you write something is important
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
 * 
 * Single Threaded:
 *  - one command at a time
 *  - under the hood of the browser, maybe not
 * 
 * Synchronous:
 *  - one at a time, one line of code being excuted in order that it appears
 * 
 * Syntax parser:
 *  - a program that reads your code and determines what it does and if its grammer is valid
 *  - someone else wrote a program to translate it for the computer, ex: a compiler
 * 
 * Undefined:
 *  - is a special keyword, its a special value in javascript
 *  - happens when we never set the value ex: var a;
 */
