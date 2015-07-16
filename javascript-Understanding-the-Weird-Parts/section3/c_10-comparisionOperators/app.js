/**
 * example showing equality and strict equality comparisons and sameness 
 */

// if you look at the order of associativity (3 < 2 < 1), the 3 < 2 gets executed first which becomes 
// a false, the false gets coerced into a 0, and than the javascript engine executes 0 < 1 which 
// returns true
console.log(3 < 2 < 1); // true
// you can use the built in number function and see what it coerced
console.log(Number(false)); // returns a 0
// coerce a string to a number
console.log(Number("3"));

// example of Equality "... == ..." vs Strict Equality "... === ..."
var cat = 0;
var dog = false;
// using equality
if (cat == dog) {
  console.log('they are equal!');
} else {
  console.log('Nope, not equal.');
}
// using strict equality
if (cat === dog) {
  console.log('they are equal!');
} else {
  console.log('Nope, not equal.');
}

// equallity
var a = 3 == 3; // returns true
var b = "3" == 3; // returns true
var c = false == 0; // returns true
var d = null == 0; // returns false
var e = null < 1; // returns true 
var f = "" == 0; // returns true
var g = "" == false; // returns true
// strict equality
var h = 3 === 3; // returns true
var i = "3" === "3"; // returns true
var j = "3" === 3; // returns false
var k = false === 0; // returns false
var l = null === 0; // returns false
var m = null < 1; // returns true 
var n = "" === 0; // returns false
var o = "" === false; // returns false
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k);
console.log(l);
console.log(m);
console.log(n);
console.log(o);