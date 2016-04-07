/**
 * Computing correlation with Phi coefficient:
 *  - src: https://en.wikipedia.org/wiki/Phi_coefficient
 *  - For binary (Boolean) variables, the phi coefficient ( ϕ ) provides a good measure
 *  	of correlation and is relatively easy to compute. To compute ϕ , we need a table n
 *  	that contains the number of times the various combinations of the two variables
 *  	were observed.
 *  - ϕ can be computed using the following formula, where n refers to the table:
 *  	ϕ = n11n00 - n10n01 / √ n1•n0•n•1n•0
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

 /*eslint-disable */
 // We can represent a two-by-two table in JavaScript with a four-element array ([76, 9, 4, 1]).
 // The flat array is simple and makes the expressions that access the table pleasantly short.
 // We’ll interpret the indices to the array as two-bit binary number.
function phi(table) {
  return ( table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
      (table[0] + table[1]) *
      (table[1] + table[3]) *
      (table[0] + table[2])
    );
  }
  console.log(phi([ 76 , 9 , 4 , 1 ])); // → 0.068599434
