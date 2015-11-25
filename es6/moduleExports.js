/**
 * ref: http://www.2ality.com/2014/09/es6-modules-final.html
 * ref: http://www.sitepoint.com/understanding-es6-modules/
 */
// ES6
function Add(x) {
  return x + x;
}

export default Add;

// ES5
function Add(x) {
  return x + x;
}

module.exports = Add;
