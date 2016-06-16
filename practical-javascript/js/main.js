/* eslint-disable */
'use strict';

// creating a object for our data and logic
var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(pos, todoText) {
    this.todos[pos].todoText = todoText;
  },
  toggleCompleted: function(pos) {
    var todo = this.todos[pos];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }

    if (completedTodos === totalTodos) {
      for (var j = 0; j < totalTodos; j++) {
        this.todos[j].completed = false;
      }
    } else {
      for (var k = 0; k < totalTodos; k++) {
        this.todos[k].completed = true;
      }
    }
  },
  deleteTodo: function(pos) {
    // splice takes two arguments, a starting position and deleteCount
    this.todos.splice(pos, 1);
  }
};

// creating an object for our event handlers soley for user interactions
var handlers = { // jshint ignore:line
  addTodo: function() {
    // get access to addTodoTextInput element
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    // applys input value to our todoList
    todoList.addTodo(addTodoTextInput.value);
    // clears input field after we click button
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    // get access to elements
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    // note how we add valueAsNumber for our attribute type
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    // clears input field after we click button
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  }
};

// creating an object for only what the view looks like
// doesn't have any logic, it doesn't change any data in the app
var view = { // jshint ignore:line
  displayTodos: function() {
    // grabbing a reference to ul element
    var todosUl = document.querySelector('ul');
    // making sure our for loop starts at 0 everytime so we set innerHTML
    // to nothing before we start entering for loop
    todosUl.innerHTML = '';
    // creating a li element for each todoText in the todos array
    for (var i = 0; i < todoList.todos.length; i++) {
      // creating a todoText li element
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';

      if (todo.completed === true) {
        todoTextWithCompletion = '[x] ' + todo.todoText;
      } else {
        todoTextWithCompletion = '[ ] ' + todo.todoText;
      }

      // there is a text property on these elements and setting it to another value
      todoLi.textContent = todoTextWithCompletion;
      // appending child element to our selector
      todosUl.appendChild(todoLi);
    }
  }
};


/*
// get access to element buttons
var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');

// adding event listeners
displayTodosButton.addEventListener('click', function() {
  todoList.displayTodos();
});

toggleAllButton.addEventListener('click', function() {
  todoList.toggleAll();
});
 */
