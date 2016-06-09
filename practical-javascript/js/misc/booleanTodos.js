/**
 * - boolean:
 * 		- true or false
 * - basic example of creating todo object
 * - showing two ways of creating objects via object literal and function constructor
 * - Action Items:
 * 		[ ] todoList.addTodo should add objects
 * 		[ ] todoList.changeTodo should change the todoText property
 * 		[ ] todoList.toggleCompleted should change the completed property
 */

/* eslint-disable */
'use strict';

// using object literal
// it should store the todos array on an object
var todoList1 = {
  todos1: ['item 1', 'item 2', 'item 3'],
  // it should have a displayTodos method
  displayTodos1: function() {
    console.log('My todos:', this.todos1);
  },
  // it should have a addTodo method
  addTodo: function(input) {
    this.todos1.push(input);
    this.displayTodos1();
  },
  // it should have a changeTodo method
  changeTodo: function(pos, val) {
    this.todos1[pos] = val;
    this.displayTodos1();
  },
  // it should have a deleteTodo method
  deleteTodo: function(start, deleteCount) {
    this.todos1.splice(start, deleteCount);
    this.displayTodos1();
  }
};
console.log('This is our object Literal todo list:');
console.log('-----------------------');
console.log('This is our displayTodos():');
todoList1.displayTodos1(); // My todos: [ 'item 1', 'item 2', 'item 3' ]
console.log('This is our addTodo():');
todoList1.addTodo('new todo'); // My todos: [ 'item 1', 'item 2', 'item 3', 'new todo' ]
console.log('This is our changeTodo():');
todoList1.changeTodo(0, 'changed'); // My todos: [ 'changed', 'item 2', 'item 3', 'new todo' ]
console.log('This is our deleteTodo():');
todoList1.deleteTodo(0, 1); // My todos: [ 'item 2', 'item 3', 'new todo' ]
console.log('-----------------------');
console.log('-----------------------');



// using function constructor
// it should store the todos array on an object
function TodoList(todos) {
  this.todos = todos;
}
// it should have a displayTodos method
TodoList.prototype.displayTodos = function() {
  console.log('My todos:', this.todos);
};
// it should have a addTodo method
TodoList.prototype.addTodo = function(input) {
  this.todos.push(input);
  this.displayTodos();
};
// it should have a changeTodo method
TodoList.prototype.changeTodo = function(pos, val) {
  this.todos[pos] = val;
  this.displayTodos();
};
// it should have a deleteTodo method
TodoList.prototype.deleteTodo = function(start, deleteCount) {
  this.todos.splice(start, deleteCount);
  this.displayTodos();
};

// lets reassign it to myTodoList and inherit from TodoList
var myTodoList = new TodoList(['item 1', 'item 2', 'item 3']);

console.log('This is our function constructor todo list:');
console.log('-----------------------');
console.log('This is our displayTodos():');
myTodoList.displayTodos(); // My todos: [ 'item 1', 'item 2', 'item 3' ]
console.log('This is our addTodo():');
myTodoList.addTodo('new todo'); // My todos: [ 'item 1', 'item 2', 'item 3', 'new todo' ]
console.log('This is our changeTodo():');
myTodoList.changeTodo(0, 'changed'); // My todos: [ 'changed', 'item 2', 'item 3', 'new todo' ]
console.log('This is our deleteTodo():');
myTodoList.deleteTodo(0, 1); // My todos: [ 'item 2', 'item 3', 'new todo' ]
