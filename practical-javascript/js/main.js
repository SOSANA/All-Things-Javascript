/* eslint-disable */
'use strict';

/**
 * - Thinking In Code:
 * 		- thinking about the .toggleAll method with Todos
 * - Action Items:
 * 		[X] .toggleAll: if everything's true, make everything false
 * 		[X] .toggleAll: Otherwise, make everything true
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
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    // get number of commpleted todos
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }

    // if everything's true, make everything false
    if (completedTodos === totalTodos) {
      // make everything false
      for (var j = 0; j < totalTodos; j++) {
        this.todos[j].completed = false;
      }
      // otherwise make everything true
    } else {
      for (var k = 0; k < totalTodos; k++) {
        this.todos[k].completed = true;
      }
    }

    this.displayTodos();
  },
  deleteTodo: function(start, deleteCount) {
    this.todos.splice(start, deleteCount);
    this.displayTodos();
  }
};
