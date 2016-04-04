/**
 * The previous chapter introduced the standard function Math.min that returns its smallest
 * argument. We can do that ourselves now. Write a function min that takes two arguments and
 * returns their minimum.
 */

 /* eslint-disable */

 function min (a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(min(10, -12)); // -12
console.log(min(1000, 90)); // 90
