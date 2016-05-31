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
// The rows variable will hold an array of arrays, with each inner array representing a row of cells
function rowHeights(rows) {
  return rows.map(function(row) {
    return row.reduce(function(max, cell) {
      return Math.max(max, cell.minHeight());
    }, 0);
  });
}

function colWidths(rows) {
  return rows[0].map(function(_, i) {
    return rows.reduce(function(max, row) {
      return Math.max(max, row[i].minWidth());
    });
  });
}
