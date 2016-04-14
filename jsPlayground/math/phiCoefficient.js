/**
 * Computing correlation with Phi coefficient:
 *  - src: https://en.wikipedia.org/wiki/Phi_coefficient
 *  - For binary (Boolean) variables, the phi coefficient ( ϕ ) provides a good measure
 *  	of correlation and is relatively easy to compute. To compute ϕ , we need a table n
 *  	that contains the number of times the various combinations of the two variables
 *  	were observed.
 *  - ϕ can be computed using the following formula, where n refers to the table:
 *  	ϕ = n11n00 - n10n01 / √ n1•n0•n•1n•0
 *
 * 		Ex:
 * 	  ---------------------------------------------------
 * 		| No pizza, no squirrel 76 | pizza, no squirrel 9 |
 * 		|--------------------------|----------------------|
 * 		| No pizza, squirrel 4     | pizza, squirrel 1    |
 * 		---------------------------------------------------
 *
 *  	The notation n 01 indicates the number of measurements where the first variable
 *   	(squirrelness) is false (0) and the second variable (pizza) is true (1). In this
 *    example, n 01 is 9. The value n 1• refers to the sum of all measurements where the
 *    first variable is true, which is 5 in the example table. Likewise, n •0 refers to
 *    the sum of the measurements where the second variable is false. So for the pizza
 *    table, the part above the division line (the dividend) would be 1×76 - 4×9 = 40,
 *    and the part below it (the divisor) would be the square root of 5×85×10×80, or
 *    √340000. This comes out to ϕ ≈ 0.069, which is tiny. Eating pizza does not appear to
 *    have influence on the transformations.
 */

 /* eslint-disable */
 // We can represent a two-by-two table in JavaScript with a four-element array ([76, 9, 4, 1]).
 // The flat array is simple and makes the expressions that access the table pleasantly short.
 // We’ll interpret the indices to the array as two-bit binary number.
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
      (table[0] + table[1]) *
      (table[1] + table[3]) *
      (table[0] + table[2])
    );
}
console.log(phi([ 76 , 9 , 4 , 1 ])); // 0.068599434
console.log('-------------');


/**
 * The table is trying to record all the different possible outcomes from the if statements.
 *  - You get 0 if there's no event, and there's no squirrel.
 *  - You get 1 if there's an event but no squirrel.
 *  - You get 2 if there's no event, but there is a squirrel.
 *  - you get 3 if there is an event, and a squirrel.
 * You then increment one of four different positions in the table variable index based results.
 * You can basically think of index as keeping track of all possible states.
 * Since you're iterating over a journal with i, you're trying to keep track of what's happening.
 *
 * Note:
 * - checkout /All-Things-Javascript/eloquentJavaScript/ch04/weresquirrel/
 */

 var JOURNAL = [
   {"events":["carrot","exercise","weekend"],"squirrel":false},
   {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
   {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
   {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
   {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
   {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
   {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
   {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
   {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
   {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
 ];

// check to see if event exists
function hasEvent(event, entry) {
  return entry.events.indexOf(event) !== -1;
}

// record all possible outcomes and place values by index
function tableFor(event, journal) {
  var table = [0, 0, 0, 0];

  for (var i = 0; i < journal.length; i++) {
    var entry = journal[i];
    // You get index 0 if there's no event, and there's no squirrel.
    var index = 0;
    // You get index 1 if there's an event but no squirrel.
    if (hasEvent(event, entry)) {
      index += 1;
    }

    if (entry.squirrel) {
      index += 2;
    }

    table[index] += 1;
  }
  return table;
}
console.log(tableFor('pizza', JOURNAL));
console.log('-------------');
