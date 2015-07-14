/**
 * chart in operator-precedence-in-javascript.pdf and see what order the operator
 * execution will happen in this case multiplication has a precedence of 14 and
 * addition has a precedence of 13, so the multiplication will be done first than
 */
/*
var a = 3 + 4 * 5;
console.log(a);
*/

/**
 * this example shows the associativity of having the same operator taken from the
 * operator. If you look in chart on operator-precedence-in-javascript.pdf there is
 * a column showing associativity either left associativity or right associativity.
 * In this case its a right associativity which means it excutes from the right side
 * which would be b=c before a=b in the statement a = b= c; shown below. It will call
 * b to c operator which is 4 and than return a = 4 operator will be called. So a 
 * will be set to 4
 */
var a = 3, b = 3, c = 4;
// statement
a = b = c;

console.log(a);
console.log(b);
console.log(c);