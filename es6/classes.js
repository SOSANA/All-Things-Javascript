/**
 * ES6 classes are nothing more than a syntactic sugar over the existing
 * prototype-based inheritance in JavaScript. As long as you remember that fact,
 * the class keyword will not seem like a foreign concept to you.
 *
 * ref: http://www.2ality.com/2015/02/es6-classes-final.html
 */

 // ES6
 class Box {
   constructor(length, width) {
     this.length = length;
     this.width = width;
   }
   calculateArea() {
     return this.length * this.width;
   }
 }

 let box = new Box(2, 2);

 box.calculateArea(); // 4

 // ES5
function Box(length, width) {
  this.length = length;
  this.width = width;
}

Box.prototype.calculateArea = function() {
  return this.length * this.width;
}

var box = new Box(2, 2);

box.calculateArea(); // 4

/**
 * With ES6 classes you can now use extends to create a subclass from an
 * existing class:
 */

 // ES6
 class MyComponent extends React.Component {
   // Now MyComponent contains all React component methods
   // such as componentDidMount(), render() and etc.
 }

 // ES5
 var MyComponent = React.createClass({
   // Now MyComponent contains all React component methods
   // such as componentDidMount(), render() and etc.
 })
