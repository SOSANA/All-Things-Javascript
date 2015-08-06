/**
 * the primitive string was automatically convert to a string object
 * all strings every where have access to this string prototype
 */
String.prototype.isLengthGreaterThan = function(limit) {
  return this.length > limit;
}

console.log("John".isLengthGreaterThan(3));

Number.prototype.isPositive = function() {
  return this > 0;
}

var a = new Number(3);

console.log(a.isPositive());

/**
 * Dangerous Aside: Arrays and for..in showing problems you could have
 * Be carefull! Don't use for..in with arrays, use a standard for loop
 */
// this could be from a library or something you created
Array.prototype.myCustomFeature = 'cool!';


var arr = ['John', 'Jane', 'Jim'];

for (var prop in arr) {
  console.log(prop + ': ' + arr[prop]); // 0, 1, 2 is the property names
}

