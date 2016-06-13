/**
 * - boolean:
 * 		- true or false
 * - basic example of using boolean values
 * - Action Items:
 * 		[X] todoList.addTodo should add objects
 * 		[X] todoList.changeTodo should change the todoText property
 * 		[X] todoList.toggleCompleted should change the completed property
 */

/* eslint-disable */
'use strict';

// our object literal
var todoList1 = {
  todos: [],
  displayTodos: function() {
    console.log('My todos:', this.todos);
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(pos, todoText) {
    this.todos[pos].todoText = todoText;
    this.displayTodos();
  },
  toggleCompleted: function(pos) {
    var todo = this.todos[pos];
    // flips completed to true if false and false if true
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  deleteTodo: function(start, deleteCount) {
    this.todos.splice(start, deleteCount);
    this.displayTodos();
  }
};
console.log('This is our object Literal todo list:');
console.log('-----------------------');
console.log('This is our addTodo():');
todoList1.addTodo('item 1'); // My todos: [ { todoText: 'new todo', completed: false } ]
todoList1.addTodo('item 2'); // My todos: [ { todoText: 'item 1', completed: false }, { todoText: 'item 2', completed: false } ]
todoList1.addTodo('item 3'); // My todos: [ { todoText: 'item 1', completed: false }, { todoText: 'item 2', completed: false }, ... ]
console.log('-----------------------');
console.log('This is our changeTodo():');
todoList1.changeTodo(0, 'changed'); // My todos: [ { todoText: 'changed', completed: false }, { todoText: 'item 2', completed: true }, ...]
console.log('-----------------------');
console.log('This is our toggleCompleted():');
todoList1.toggleCompleted(1); // My todos: [ { todoText: 'changed', completed: false }, { todoText: 'item 2', completed: false }, ...]
console.log('-----------------------');
console.log('This is our deleteTodo():');
todoList1.deleteTodo(0, 1); // My todos: [ { todoText: 'item 2', completed: false }, { todoText: 'item 3', completed: false } ]
console.log('-----------------------');
console.log('-----------------------');

// our function constructor
function TodoList(todos) {
  this.todos = todos;
  this.todos = [];
}
TodoList.prototype.displayTodos = function() {
  console.log('My todos:', this.todos);
};
TodoList.prototype.addTodo = function(val) {
  this.todos.push({
    todoText: val,
    completed: false
  });
  this.displayTodos();
};
TodoList.prototype.changeTodo = function(pos, val) {
  this.todos[pos].val = val;
  this.displayTodos();
};
TodoList.prototype.toggleCompleted = function(pos) {
  var todo = this.todos[pos];
  // flips completed to true if false and false if true aka changing the opposite
  todo.completed = !todo.completed;
  this.displayTodos();
};
TodoList.prototype.deleteTodo = function(start, deleteCount) {
  this.todos.splice(start, deleteCount);
  this.displayTodos();
};

var myTodoList = new TodoList();

console.log('This is our function constructor todo list:');
console.log('-----------------------');
console.log('This is our addTodo():');
myTodoList.addTodo('item 4'); // My todos: [ { todoText: 'new todo', completed: false } ]
myTodoList.addTodo('item 5'); // My todos: [ { todoText: 'item 4', completed: false }, { todoText: 'item 5', completed: false } ]
myTodoList.addTodo('item 6'); // My todos: [ { todoText: 'item 4', completed: false }, { todoText: 'item 5', completed: false }, ... ]
console.log('-----------------------');
console.log('This is our changeTodo():');
myTodoList.changeTodo(0, 'changed'); // My todos: [ 'changed', 'item 5', 'item 6', 'new todo' ]
console.log('This is our toggleCompleted():');
myTodoList.toggleCompleted(1); // My todos: [ { todoText: 'changed', completed: false }, { todoText: 'item 2', completed: true }, ...]
console.log('-----------------------');
console.log('This is our deleteTodo():');
myTodoList.deleteTodo(0, 1); // My todos: [ { todoText: 'item 5', completed: false }, { todoText: 'item 6', completed: false } ]
