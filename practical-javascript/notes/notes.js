/**
 * Action Items aka 'Project Requirements':
 *  - a common practice in the real world is to break down tasks into small junks
 *  - it helps with not getting lost and side tracked
 *  - makes it easy to see if our app is working the way we want it to working
 *  - works great when having a team of developers collaborating together
 *  - ex: ./v1Requirements.md, .js/misc/
 *  	- Action Items:
 * 			 [X] it should store the todos array on an object
 * 		 	 [X] it should have a displayTodos method
 * 		   [X] it should have a addTodo method
 * 		   [X] it should have a changeTodo method
 * 		   [X] it should have a deleteTodo method
 *
 * Javascript data types:
 * 	- Objects (can be as complex as you want)
 * 	 	- {} // todoList, arrays, functions
 * 	- Primitives (building blocks)
 * 		- String    // 'look at my srting'
 * 		- Number    // 1, 2, 3
 * 		- Boolean   // true, false
 * 		- Undefined // value that hasn't been set
 * 		- Null      // 'nothing'
 *  - object comparisions completely different than compairing Primitives
 *  	- when compairing objects in js the are referred 'Object references' that hold
 *  		memory address for every object created
 *  	- ex: ./objectComparisons.png
 *
 * Debugging:
 *  Break Points:
 * 	 - several ways to add break points
 * 	 	 - manually add debugger; in your code
 * 	 	 - using break points in dev tools
 *   - can 'pause' your program at a perticular point in your code and allows you to step through
 *   	 it line by line to have a deeper understanding of what is happening
 *   - this 'pause' is called your 'break points' because it stops your code at that moment
 *  DOM Break Points:
 *   - can add 'dom break points' by right clicking on elements and viewing source, it will apply
 *   	 a blue dot indicating your break point. You can apply three types of break points from the
 *  	 parent element:
 *  	 - subtree modifications: this will break when any child element is added, removed, or
 *   		 moved ex: li
 *  	 - attributes modifications: if an attribute on this element changes it will break there
 *  		 ex: id changes
 *  	 - node removal: the program will break when an element is removed ex: ul
 *  Event Listener Break Points:
 *   - another way to add break points in your program is by listening for certain events by
 *   	 clicking on the 'Event Listener Break Points' tab in your dev tools and selecting the type
 *   	 of events ex: Mouse/click
 */
