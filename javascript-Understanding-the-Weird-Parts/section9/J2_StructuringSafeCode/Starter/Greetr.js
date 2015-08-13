/**
 * using IIFE to apply structure around the code your about to write and
 * is now safe inside of your function to be used by anybody
 */
(function(global, $){
  // a function that creates an object
  var Greetr = function(firstName, lastName, language) {
    // return new empty object
    return new Greetr.init(firstName, lastName, language);
  }
  
  // empty object for now, here is were we'll put any methods that we 
  // want to use inside our object that is returned from Greetr
  Greetr.prototype = {};
  
  // a function constructor that builds properties sets its value if you pass 
  // something into your object otherwise set some defaults
  Greetr.init = function(firstName, lastName, language) {
    // setting the this variable to self so it points to the empty object created by
    // the "new" operator on line 9
    var self = this;
    // setting up properties with defaults
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';
  }
  // this sets up where objects that are created are pointing at
  // we want all objects created with the Greetr.init = function(...) {..} to be pointed 
  // to Greetr.prototype = {};
  // any objects created with this function "Greetr.init.prototype" should point here
  // "Greetr.prototype"
  // now we can cleanly put methods in our Greetr.prototype above
  Greetr.init.prototype = Greetr.prototype;
  // now we want to expose your Greetr to the outside world, we want to attach it to our
  // global object so we can call this function from anywhere. We also want to use alias
  // $ sign. on the global object global.Greetr and global.G$ will point to our function
  // Greetr above
    global.Greetr = global.G$ = Greetr;
  // passing in your global and jQuery object
}(window, jQuery))