/**
 * showing the use of 'this' in global object when invoking a function
 */

function a() {
  console.log(this);
  this.newvariable = 'hello';
}

var b = function() {
  console.log(this);
}

a();

console.log(newvariable);

b();

var c = {
  name: 'The c object',
  log: function() {
    // this prevents unintended error for using 'this', es6 introduces let to fix this pattern
    // some people use 'that' instead of 'self'
    var self = this;
    
    this.name = 'Updated c object';
    console.log(self);
    
    var setname = function(newname) {
      self.name = newname;
    }
    setname('Updated again! The c object');
    console.log(self);
  }
}
console.log(c.name);
c.log();
console.log(c.name);