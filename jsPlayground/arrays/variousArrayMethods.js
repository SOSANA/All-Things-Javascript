/**
 * push():
 *  - can be used to add values to the end of the array
 * pop():
 *  - can be use to remove values at the end of the array
 * join():
 *  - an array of strings can be 'flattened' to a single string
 *  - the argument given to join() deteremines the text that is glued between array
 *  	elements
 * shift();
 *  - removes element from the start of the array
 * unshift():
 *  - adds element to the start of array
 *
 * splice():
 * 	- changes the content of an array by removing existing elements and/or adding
 * 	 	new elements
 *  - when given a start and deleteCount as its first two parameters, any parameters after this will
 * 	 	be added to the end of the array
 */

 /* eslint-disable */
// example of using push(), join(), and pop()
var mack = [];
mack.push('Mack');
mack.push('the', 'knife');
console.log(mack); // [ 'Mack', 'the', 'knife' ]
console.log(mack.join(' ')); // Mack the knife
console.log(mack.pop()); // knife
console.log(mack); // [ 'Mack', 'the' ]
console.log('-------------------');

// example using push(), shift(), and unshift()
var todoList = [];
function rememberTo(task) {
  todoList.push(task);
}
function whatIsNext() {
  // removes first element of the array
  return todoList.shift();
}
function urgentlyRememberTo(task) {
  // adds new element to the front of the array
  todoList.unshift(task);
}
rememberTo('go for a jog');
rememberTo('throw out garbage');
rememberTo('clean bathroom');
console.log(todoList); // [ 'go for a jog', 'throw out garbage', 'clean bathroom' ]
console.log('-------------------');
console.log(whatIsNext()); // go for a jog
console.log(todoList); // [ 'throw out garbage', 'clean bathroom' ]
console.log('-------------------');
urgentlyRememberTo('take kids to doctors');
console.log(todoList); // [ 'take kids to doctors', 'throw out garbage', 'clean bathroom' ]
console.log('-------------------');

// example of using splice()
var arrayNumExample = [4, 3, 2, 1, 1, 2, 3, 4];
// first argument in splice is starting index, second argument is the deleteCount, any
// arguments past this second arguments are added to the end of the array
arrayNumExample.splice(4,4, -1,-2,"mouse");
console.log(arrayNumExample); // [ 4, 3, 2, 1, -1, -2, 'mouse' ]
