/**
 * - loops:
 * 		- used for iteration over arrays
 * - basic example of using for loops
 * - Action Items:
 * 		[X] .displayTodos should show .todoText
 * 		[X] .displayTodos should tell you if .todos is empty
 * 		[X] .displayTodos should show .completed
 */

/* eslint-disable */
'use strict';

// our object literal
var todoList1 = {
  todos: [],
  displayTodos: function() {
    var ArrayLength = this.todos.length;
    if (ArrayLength === 0) {
      console.log('Your todo list is empty!');
    } else {
      console.log('My Todos:');
      for (var i = 0; i < ArrayLength; i++) {
        if (this.todos[i].completed === true) {
          console.log('[X]', this.todos[i].todoText);
        } else {
            console.log('[ ]', this.todos[i].todoText);
        }
      }
    }
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
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  deleteTodo: function(start, deleteCount) {
    this.todos.splice(start, deleteCount);
    this.displayTodos();
  }
};
console.log('Using a Object Literal Todo List:');
console.log('-----------------------');
console.log('This is our empty displayTodos() array:');
todoList1.displayTodos(); // Your todo list is empty!
console.log('-----------------------');
console.log('This is our addTodo():');
todoList1.addTodo('first');
// My Todos:
// first
todoList1.addTodo('second');
// My Todos:
// first
// second
todoList1.addTodo('third');
// My Todos:
// first
// second
// third
console.log('-----------------------');
console.log('This is our displayTodos():');
todoList1.displayTodos();
console.log('-----------------------');
// My Todos:
// first
// second
// third
console.log('This is our toggleCompleted() turned on:');
todoList1.toggleCompleted(1);
console.log('This is our toggleCompleted() turned off:');
todoList1.toggleCompleted(1);
console.log('-----------------------');
console.log('-----------------------');


// our function constructor
function TodoList(todos) {
  this.todos = todos;
  this.todos = [];
}
TodoList.prototype.displayTodos = function() {
  var ArrayLength = this.todos.length;
  if (ArrayLength === 0) {
    console.log('Your todo list is empty!');
  } else {
    console.log('My Todos:');
    for (var i = 0; i < ArrayLength; i++) {
      if (this.todos[i].completed === true) {
        console.log('[X]', this.todos[i].todoText);
      } else {
          console.log('[ ]', this.todos[i].todoText);
      }
    }
  }
};
TodoList.prototype.addTodo = function(todoText) {
  this.todos.push({
    todoText: todoText,
    completed: false
  });
  this.displayTodos();
};
TodoList.prototype.changeTodo = function(pos, todoText) {
  this.todos[pos].todoText = todoText;
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

console.log('Using a Function Constructor Todo List:');
console.log('-----------------------');
console.log('This is our empty displayTodos() array:');
myTodoList.displayTodos(); // Your todo list is empty!
console.log('-----------------------');
console.log('This is our addTodo():');
myTodoList.addTodo('first');
// My Todos:
// first
myTodoList.addTodo('second');
// My Todos:
// first
// second
myTodoList.addTodo('third');
// My Todos:
// first
// second
// third
console.log('-----------------------');
console.log('This is our displayTodos():');
myTodoList.displayTodos();
console.log('-----------------------');
// My Todos:
// first
// second
// third
console.log('This is our toggleCompleted() turned on:');
myTodoList.toggleCompleted(1);
console.log('This is our toggleCompleted() turned off:');
myTodoList.toggleCompleted(1);
