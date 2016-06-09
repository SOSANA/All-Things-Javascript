/**
 * - boolean:
 * 		- true or false
 * - basic example of using boolean values
 * - Action Items:
 * 		[ ] todoList.addTodo should add objects
 * 		[ ] todoList.changeTodo should change the todoText property
 * 		[ ] todoList.toggleCompleted should change the completed property
 */

/* eslint-disable */
'use strict';

var todoList1 = {
  todos1: [],
  displayTodos1: function(todos1) {
    console.log('My todos:', this.todos1);
  },
  addTodo: function(todoText) {
    this.todos1.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos1();
  },
  changeTodo: function(pos, val) {
    this.todos1[pos] = val;
    this.displayTodos1();
  },
  deleteTodo: function(start, deleteCount) {
    this.todos1.splice(start, deleteCount);
    this.displayTodos1();
  }
};
console.log('This is our object Literal todo list:');
console.log('-----------------------');
console.log('This is our displayTodos():');
todoList1.displayTodos1(['item 1', 'item 2', 'item 3']); // My todos: [ 'item 1', 'item 2', 'item 3' ]
console.log('This is our addTodo():');
todoList1.addTodo('new todo'); // My todos: [ 'item 1', 'item 2', 'item 3', 'new todo' ]
console.log('This is our changeTodo():');
todoList1.changeTodo(0, 'changed'); // My todos: [ 'changed', 'item 2', 'item 3', 'new todo' ]
console.log('This is our deleteTodo():');
todoList1.deleteTodo(0, 1); // My todos: [ 'item 2', 'item 3', 'new todo' ]
console.log('-----------------------');
console.log('-----------------------');


function TodoList(todos) {
  this.todos = todos;
}
TodoList.prototype.displayTodos = function() {
  console.log('My todos:', this.todos);
};
TodoList.prototype.addTodo = function(input) {
  this.todos.push(input);
  this.displayTodos();
};
TodoList.prototype.changeTodo = function(pos, val) {
  this.todos[pos] = val;
  this.displayTodos();
};
TodoList.prototype.deleteTodo = function(start, deleteCount) {
  this.todos.splice(start, deleteCount);
  this.displayTodos();
};

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
