/**
 * Write a program that creates a string that represents an 8×8 grid, using newline
 * characters to separate lines. At each position of the grid there is either a space
 * or a “#” character. The characters should form a chess board. Passing this string to
 * console.log should show something like this:
 *
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 *
 * When you have a program that generates this pattern, define a variable size = 8 and
 * change the program so that it works for any size , outputting a grid of the given width
 * and height.
 */

var chessBoard = function () {
  // assign our board size to a variable
  var size = 8;
  // assign our board variable to empty string
  var board = '';

  // iterate though string 8 times with line break
  for (var y = 0; y < size; y++) {
    // on each iteration create 4 spaces and 4 hash's before new line break
    for (var x = 0; x < size; x++) {
      // if first iteration has no remainders create space or create hash
      if ((x + y) % 2 === 0) {
        board += ' ';
      } else {
        board += '#';
      }
    }

    // after each iteration create line break
    board += '\n';
}
    // log board to console
    console.log(board);
};

chessBoard();
