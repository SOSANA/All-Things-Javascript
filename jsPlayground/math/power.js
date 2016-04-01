/**
 * Powers and Exponents. A power is the product of multiplying a number by itself. Usually, a
 * power is represented with a base number and an exponent. The base number tells what number
 * is being multiplied.
 */

/*eslint-disable */
 var power = function (base, exponent) {
   var result = 1;

   for (var count = 0; count < exponent; count++) {
     result *= base;
   }
   return result;
 };

 console.log(power(2,10));
