/**
 * - walking through a slightly more involved example in an attempt to give you a better idea what
 * 	 polymorphism, as well as object-oriented programming in general, looks like. The project is this:
 * 	 we will write a program that, given an array of arrays of table cells, builds up a string that
 * 	 contains a nicely laid out table—meaning that the columns are straight and the rows are aligned
 * - The way our table-building system will work is that the builder function will ask each cell how
 * 	 wide and high it wants to be and then use this information to determine the width of the columns
 * 	 and the height of the rows. The builder function will then ask the cells to draw themselves at the
 * 	 correct size and assemble the results into a single string
 * - The layout program will communicate with the cell objects through a well-defined interface. That
 * 	 way, the types of cells that the program supports is not fixed in advance. We can add new cell
 * 	 styles later—for example, underlined cells for table headers—and if they support our interface,
 * 	 they will just work, without requiring changes to the layout program
 * - This is the interface:
 *    - minHeight() returns a number indicating the minimum height this cell requires (in lines)
 *    - minWidth() returns a number indicating this cell’s minimum width (in characters
 *    - draw(width, height) returns an array of length height, which contains a series of strings that
 *    	are each width characters wide. This represents the content of the cell
 * - we're going make heavy use of higher-order array methods in this example since it lends itself well
 * 	 to that approach
 *
 * Summary:
 *  - So objects are more complicated than initially portrayed below. They have prototypes, which are other
 *  	objects, and will act as if they have properties they don’t have as long as the prototype has that property.
 *  	Simple objects have Object.prototype as their prototype.
 *  - 'Constructors', which are functions whose names usually start with a capital letter, can be used with the new
 *  	operator to create new objects. The 'new' object’s prototype will be the object found in the prototype property
 *    of the constructor function. You can make good use of this by putting the properties that all values of a given
 *    type share into their prototype. The 'instanceof' operator can, given an object and a constructor, tell you whether
 *    that object is an instance of that constructor.
 *  - One useful thing to do with objects is to specify an 'interface' for them and tell everybody that they are supposed
 *  	to talk to your object only through that interface. The rest of the details that make up your object are now
 *    'encapsulated', hidden behind the interface.
 *  - Once you are talking in terms of 'interfaces', who says that only one kind of object may implement this interface?
 *  	Having different objects expose the same interface and then writing code that works on any object with the interface
 *    is called 'polymorphism'. It is very useful.
 *  - When implementing multiple 'types' that differ in only some details, it can be helpful to simply make the prototype
 *  	of your new type derive from the 'prototype' of your old type and have your new 'constructor' call the old one. This
 *  	gives you an object type similar to the old type but for which you can add and override properties as you see fit
 */

/* eslint-disable */
'use strict';

// The first part of the program computes arrays of minimum column widths and row heights for a grid of cells.
// The rows variable will hold an array of arrays, with each inner array representing a row of cells:
// Returns an array of row heights, one for each row
function rowHeights(rows) {
  // Transform each row
  return rows.map(function(row) {
    // Reduce row to a single number, the height of the tallest cell
    return row.reduce(function(max, cell) {
      // Return max or the height of the current cell, whichever is larger
      return Math.max(max, cell.minHeight());
    }, 0);
  });
}

// Returns array of minimum column widths, one for each column
function colWidths(rows) {
  // Transform each column by looking at each cell in the first row of the table.
  // An underscore means the argument will not be used
  return rows[0].map(function(_, i) {
    // Reduce each column to a single number, the width of the widest column. Do this by returning max or the
    // width of cell row[i], whichever is larger. By looking at row[i] in every row, you will be able to look
    // at every cell in column i
    return rows.reduce(function(max, row) {
      return Math.max(max, row[i].minWidth());
    }, 0);
  });
}

// Here’s the code to draw a table:
// // Given an array of rows, draws a table
function drawTable(rows) {
  // Get an array of heights for each row
  var heights = rowHeights(rows);
  // Get an array of widths for each column
  var widths = colWidths(rows);

  // extracts lines that should appear next to each other from an array of blocks and joins
  // them with a space character to create a one-character gap between the table’s columns
  function drawLine(blocks, lineNo) {
    // Get a particular line across all blocks in a row, joined by ' '
    return blocks.map(function(block) {
      return block[lineNo];
    }).join(' ');
  }

  // Function for drawing a single row
  function drawRow(row, rowNum) {
    // Turn a single row into blocks
    var blocks = row.map(function(cell, colNum) {
      return cell.draw(widths[colNum], heights[rowNum]);
    });
    // For each line of content in a block, return a string that goes across all blocks
    return blocks[0].map(function(_, lineNo) {
      return drawLine(blocks, lineNo);
    // Take each line of content, and join them into a single string separated by newlines.
    // This is a full row
    }).join('\n');
  }

  // Draw each row and join with newlines
  return rows.map(drawRow).join('\n');
}



// writing a constructor for cells that contain text, which implements the interface for table cells.
// The constructor splits a string into an array of lines using the string method split, which cuts
// up a string at every occurrence of its argument and returns an array of the pieces. The minWidth
// method finds the maximum line width in this array:
// Repeat function that will be used in TextCell.prototype.draw to add padding. repeat(), which builds
// a string whose value is the 'string' argument repeated 'times' number of times
function repeat(string, times) {
  var result = '';
  for (var i = 0; i < times; i++) {
    result += string;
  }
  return result;
}

// our constructor
function TextCell(text) {
  // Split text into an array based on newlines
  this.text = text.split('\n');
}
// our new methods for our constructor
TextCell.prototype.minWidth = function() {
  // Get minWidth for a cell by checking the length of each line of content
  return this.text.reduce(function (width, line) {
    return Math.max(width, line.length);
  }, 0);
};
TextCell.prototype.minHeight = function() {
  return this.text.length;
};

// The draw method uses repeat() to add “padding” to lines so that they all have the required length.
TextCell.prototype.draw = function(width, height) {
  // Builds cell with padding
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || '';
    result.push(line + repeat(' ', width - line.length));
  }
  return result;
};

// Let’s try everything we’ve written so far by building up a 5 × 5 checkerboard:
// Creates an array of rows where each row is an array of TextCell objects.
var rows = [];
for (var i = 0; i < 5; i++) {
   var row = [];
   for (var j = 0; j < 5; j++) {
     if ((j + i) % 2 === 0){
       row.push(new TextCell('##'));
     } else {
       row.push(new TextCell('  '));
     }
   }
   rows.push(row);
}

// Pass rows to drawTable to output checkerboard to the console.
console.log(drawTable(rows));
console.log('---------------------');

// We will want to highlight the top row, which contains the column names, by
// underlining the cells with a series of dash characters. No problem—we simply
// write a cell type that handles underlining
var MOUNTAINS = [
  {name: 'Kilimanjaro', height: 5895, country: 'Tanzania'},
  {name: 'Everest', height: 8848, country: 'Nepal'},
  {name: 'Mount Fuji', height: 3776, country: 'Japan'},
  {name: 'Mont Blanc', height: 4808, country: 'Italy/France'},
  {name: 'Vaalserberg', height: 323, country: 'Netherlands'},
  {name: 'Denali', height: 6168, country: 'United States'},
  {name: 'Popocatepetl', height: 5465, country: 'Mexico'}
];

// The inner parameter is a TextCell() object
function UnderlinedCell(inner) {
  this.inner = inner;
}
UnderlinedCell.prototype.minWidth = function() {
  // minWidth() works the same as it does for TextCell()
  return this.inner.minWidth();
};
UnderlinedCell.prototype.minHeight = function() {
  // Add 1 to account for the underline, which is just some dashes
  return this.inner.minHeight() + 1;
};
UnderlinedCell.prototype.draw = function(width, height) {
  // When drawing the inner cell, subtract 1 from height since the inner cell doesn’t have dashes
  return this.inner.draw(width, height - 1)
  // Add the dashes in!
  .concat([repeat('-', width)]);
};

// 'Inheritance': Inheriting from TextCell() but rather than padding the lines on the right side, it pads them on the left side
// We could simply write a whole new constructor with all three methods in its prototype. But prototypes may themselves have
// prototypes, and this allows us to do something clever. We reuse the constructor and the minHeight and minWidth methods from
// the regular TextCell. An RTextCell is now basically equivalent to a TextCell, except that its draw method contains a different
// function. This pattern is called inheritance. It allows us to build slightly different data types from existing data types with
// relatively little work. Typically, the new constructor will call the old constructor (using the call method in order to be able
// to give it the new object as its this value). Once this constructor has been called, we can assume that all the fields that the
// old object type is supposed to contain have been added. We arrange for the constructor’s prototype to derive from the old prototype
// so that instances of this type will also have access to the properties in that prototype. Finally, we can override some of these
// properties by adding them to our new prototype
function RTextCell(text) {
  TextCell.call(this, text);
}
RTextCell.prototype = Object.create(TextCell.prototype);
RTextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || '';
    result.push(repeat(' ', width - line.length) + line);
  }
  return result;
};

// Having an underlining mechanism, we can now write a function that builds up a grid of cells from our data set
function dataTable(data) {
  // The standard 'Object.keys' function returns an array of property names in an object. The top row of the table
  // must contain underlined cells that give the names of the columns. Below that, the values of all the objects
  // in the data set appear as normal cells—we extract them by mapping over the 'keys' array so that we are sure
  // that the order of the cells is the same in every row
  // Get keys from object. keys will be equal to [‘name’, ‘height’, ‘country’]
  var keys = Object.keys(data[0]);
  // Create an array of UnderlinedCell objects for each key
  var headers = keys.map(function(name) {
    return new UnderlinedCell(new TextCell(name));
  });
  // Build an array of TextCell objects for each mountain in data
  var body = data.map(function(row) {
    return keys.map(function(name) {
      // this was slightly adjusted to use RTextCell for cells whose value is a number
      var value = row[name];
      if (typeof value === 'number') {
        return new RTextCell(String(value));
      } else {
        return new TextCell(String(value));
      }
    });
  });
  return [headers].concat(body);
}
// The resulting table resembles the example shown before, except
// that it does not right-align the numbers in the height column
console.log(drawTable(dataTable(MOUNTAINS)));
console.log('---------------------');


// 'Getters and setters': Another way of thinking about this is that getters and setters prevent users of an interface
// from unknowingly creating messy situations. If there are any checks or updates that need to happen with a setter for
// example, you should account for that in your setter method so that users of your interface don’t have to think about
// it. From a user’s perspective, they just want to use a setter to change a value, they don’t want to worry about all
// of the potential side effects that might cause. When specifying an interface, it is possible to include properties
// that are not methods. We could have defined minHeight and minWidth to simply hold numbers. But that’d have required
// us to compute them in the constructor, which adds code there that isn’t strictly relevant to constructing the object.
// It would cause problems if, for example, the inner cell of an underlined cell was changed, at which point the size of
// the underlined cell should also change. Rather than directly access a simple value property, they’d use getSomething
// and setSomething methods to read and write the property. This approach has the downside that you will end up
// writing—and reading—a lot of additional methods. Fortunately, JavaScript provides a technique that gets us the best of
// both worlds. We can specify properties that, from the outside, look like normal properties but secretly have methods
// associated with them
var pile = {
  elements: ['eggshell', 'orange peel', 'worm'],
  get height() {
    return this.elements.length;
  },
  set height(value) {
    console.log('Ignoring attempt to set height to', value);
  }
};
console.log(pile.height); // 3
pile.height = 100; // Ignoring attempt to set height to 100
console.log('---------------------');

// In object literal, the 'get' or 'set' notation for properties allows you to specify a function to be run when the
// property is read or written. You can also add such a property to an existing object, for example a prototype, using the
// 'Object.defineProperty' function (which we previously used to create nonenumerable properties)
Object.defineProperty(TextCell.prototype, 'heightProp', {
  get: function() { return this.text.length; },
  // You can use a similar set property, in the object passed to defineProperty, to specify a setter method.
  // When a getter but no setter is defined, writing to the property is simply ignored
  set: function() { return this.text.length; }
});

var cell = new TextCell('no\nway');
console.log(cell.heightProp); // 2
cell.heightProp = 100;
console.log(cell.heightProp); // 2
console.log('---------------------');


/**
 * 'Inheritance' is a fundamental part of the object-oriented tradition, alongside encapsulation and polymorphism. But while
 * the latter two are now generally regarded as wonderful ideas, inheritance is somewhat controversial. The main reason for
 * this is that it is often confused with polymorphism, sold as a more powerful tool than it really is, and subsequently
 * overused in all kinds of ugly ways. Whereas encapsulation and polymorphism can be used to separate pieces of code from
 * each other, reducing the tangledness of the overall program, inheritance fundamentally ties types together, creating more
 * tangle. You can have polymorphism without inheritance, as we saw. I am not going to tell you to avoid inheritance entirely—I
 * use it regularly in my own programs. But you should see it as a slightly dodgy trick that can help you define new types with
 * little code, not as a grand principle of code organization. A preferable way to extend types is through composition, such as
 * how UnderlinedCell builds on another cell object by simply storing it in a property and forwarding method calls to it in its
 * own methods
 */


// The instanceof operator: t is occasionally useful to know whether an object was derived from a specific constructor. For this,
// JavaScript provides a binary operator called instanceof
console.log(new RTextCell('A') instanceof RTextCell); // true
console.log(new RTextCell('A') instanceof TextCell); // true
console.log(new TextCell('A') instanceof RTextCell); // false
console.log([1] instanceof Array); // true
