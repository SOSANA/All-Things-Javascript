/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	(function webpackMissingModule() { throw new Error("Cannot find module \"node_modules/.bin/nodemon\""); }());


/***/ },
/* 1 */
/***/ function(module, exports) {

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


/***/ },
/* 2 */
/***/ function(module, exports) {

	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports) {

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
		console.log('Using a Object Literal Todo List:');
		console.log('-----------------------');
		console.log('This is our addTodo():');
		// adding new todos
		todoList1.addTodo('first');
		todoList1.addTodo('second');
		todoList1.addTodo('third');
		console.log('-----------------------');
		// toggling all our todos to completed
		console.log('This is our toggleCompleted() turned on:');
		todoList1.toggleCompleted(0);
		todoList1.toggleCompleted(1);
		todoList1.toggleCompleted(2);
		console.log('-----------------------');
		// turns all todos false if true
		console.log('This is our toggleAll() if all Todos are true make everything false:');
		todoList1.toggleAll();
		console.log('This is our toggleAll() if all Todos are false make everything true:');
		todoList1.toggleAll();
		console.log('This is our toggleAll() if all Todos are true make everything false:');
		todoList1.toggleAll();
		console.log('-----------------------');
		console.log('if one or more completed toggleCompleted() will turn all to true:');
		todoList1.toggleCompleted(0);
		todoList1.toggleCompleted(1);
		todoList1.toggleAll();
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
		TodoList.prototype.toggleAll = function() {
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
		};
		TodoList.prototype.deleteTodo = function(start, deleteCount) {
		  this.todos.splice(start, deleteCount);
		  this.displayTodos();
		};

		var myTodoList = new TodoList();

		console.log('Using a Function Constructor Todo List:');
		console.log('-----------------------');
		// adding new todos
		console.log('This is our addTodo():');
		myTodoList.addTodo('first');
		myTodoList.addTodo('second');
		myTodoList.addTodo('third');
		console.log('-----------------------');
		// toggling all our todos to completed
		console.log('This is our toggleCompleted() turned on:');
		myTodoList.toggleCompleted(0);
		myTodoList.toggleCompleted(1);
		myTodoList.toggleCompleted(2);
		console.log('-----------------------');
		// turns all todos false if true
		console.log('This is our toggleAll() if all Todos are true make everything false:');
		myTodoList.toggleAll();
		console.log('This is our toggleAll() if all Todos are false make everything true:');
		myTodoList.toggleAll();
		console.log('This is our toggleAll() if all Todos are true make everything false:');
		myTodoList.toggleAll();
		console.log('-----------------------');
		console.log('if one or more completed toggleCompleted() will turn all to true:');
		myTodoList.toggleCompleted(0);
		myTodoList.toggleCompleted(1);
		myTodoList.toggleAll();
		console.log('-----------------------');
		console.log('-----------------------');


	/***/ }
	/******/ ]);

/***/ }
/******/ ]);