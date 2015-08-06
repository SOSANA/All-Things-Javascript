// the primitive string was automatically convert to a string object
// all strings every where have access to this string prototype
String.prototype.isLengthGreaterThan = function(limit) {
  return this.length > limit;
}

console.log("John".isLengthGreaterThan(3));

Number.prototype.isPositive = function() {
  return this > 0;
}

var a = new Number(3);

console.log(a.isPositive());