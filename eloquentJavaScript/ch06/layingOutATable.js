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
// Repeat function that will be used in TextCell.prototype.draw to add padding
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
  .concat([repeat('-'), width]);
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
      return new TextCell(String(row[name]));
    });
  });

  return [headers].concat(body);
}
// The resulting table resembles the example shown before, except
// that it does not right-align the numbers in the height column
console.log(drawTable(dataTable(MOUNTAINS)));
console.log('---------------------');
