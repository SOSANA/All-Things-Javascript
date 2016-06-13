/**
 * - function:
 *    - a receipe for creating things
 * - this is a basic example of creating todo functions
 * - Action Items:
 * 		[X] it should have a function to display todos
 * 		[X] it should have a function to add todos
 * 		[X] it should have a function to change todos
 * 		[X] it should have a function to delete todos
 */

/* eslint-disable */
'use strict';

var todos = ['item 1', 'item 2', 'item 3'];

// it should have a function to display todos
function displayTodos() {
  console.log('My todos:', todos);
}

console.log('This is our displayTodos():');
displayTodos(); // My todos: [ 'item 1', 'item 2', 'item 3' ]
console.log('-----------------------');


// it should have a function to add todos
function addTodo(input) {
  todos.push(input);
  displayTodos();
}

console.log('This is our addTodo():');
addTodo('new todo'); // My todos: [ 'item 1', 'item 2', 'item 3', 'new todo' ]
console.log('-----------------------');


// it should have a function to change todos
function changeTodo(pos, val) {
  todos[pos] = val;
  displayTodos();
}

console.log('This is our changeTodo():');
changeTodo(0, 'changed'); // My todos: [ 'changed', 'item 2', 'item 3', 'new todo' ]
console.log('-----------------------');

// it should have a function to delete todos
function deleteTodo(start, deleteCount) {
  todos.splice(start, deleteCount);
  displayTodos();
}

console.log('This is our deleteTodo():');
deleteTodo(0, 1); // My todos: [ 'item 2', 'item 3', 'new todo' ]
console.log('-----------------------');
