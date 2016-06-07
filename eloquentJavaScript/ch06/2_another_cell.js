/**
 * Another cell:
 *  - Implement a cell type named 'StretchCell(inner, width, height)' that conforms to the table cell interface described
 *  	earlier in the chapter. It should wrap another cell (like UnderlinedCell does) and ensure that the resulting cell
 *  	has at least the given 'width' and 'height', even if the inner cell would naturally be smaller
 *
 * Hints:
 *  - You’ll have to store all three constructor arguments in the instance object. The 'minWidth' and 'minHeight' methods
 *  	should call through to the corresponding methods in the inner cell but ensure that no number less than the given
 *  	size is returned (possibly using 'Math.max')
 *  - Don’t forget to add a 'draw' method that simply forwards the call to the inner cell
 */

/* eslint-disable */
'use strict';

// Repeat function that will be used in TextCell.prototype.draw to add padding. repeat(), which builds
// a string whose value is the 'string' argument repeated 'times' number of times
function repeat(string, times) {
  var result = '';
  for (var i = 0; i < times; i++) {
    result += string;
  }
  return result;
}

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

// Store inner, width, and height on the StretchCell object
function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}
StretchCell.prototype.minWidth = function() {
  return Math.max(this.width, this.inner.minWidth());
};
StretchCell.prototype.minHeight = function() {
  return Math.max(this.height, this.inner.minHeight());
};
StretchCell.prototype.draw = function (width, height) {
  return this.inner.draw(width, height);
};

var sc = new StretchCell(new TextCell('abc'), 1, 2);
console.log(sc.minWidth()); // 3
console.log(sc.minHeight()); // 2
// In the call below, the inner cell only has one line of content, but width (the second argument is 2),
// so the output adds a second element the the array, which is just a blank line.
console.log(sc.draw(3, 2)); // [ 'abc', '   ' ]
