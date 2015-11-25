/**
 * The only difference between the two is that var is scoped to the nearest
 * function block and let is scoped to the nearest enclosing block - which could
 * be a function, a for-loop or an if-statement block.
 *
 * Basically, let is block scoped, var is function scoped.
 *
 * ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 */

 var a = 5;
 var b = 10;

 if (a === 5) {
   let a = 4; // The scope is inside the if-block
   var b = 1; // The scope is inside the function

   console.log(a);  // 4
   console.log(b);  // 1
 }

 console.log(a); // 5
 console.log(b); // 1


/**
 * Every function expression above creates its own this scope. Without binding
 * this we would not be able to call this.setState in the example above, because
 * this would have been undefined.
 *
 * Alternatively, we could have assigned this to a variable, e.g. var self = this
 * and then used self.setState instead of this.setState inside the closures to
 * get around this classic JavaScript problem.
 */

 // ES5
 $.ajax({ type: 'POST', url: '/api/characters', data: { name: name, gender: gender } })
  .done(function(data) {
    this.setState({ helpBlock: data.message });
  }.bind(this))
  .fail(function(jqXhr) {
    this.setState({ helpBlock: jqXhr.responseJSON.message });
  }.bind(this))
  .always(function() {
    this.setState({ name: '', gender: '' });
  }.bind(this));

  /**
   * n equivalent ES6 code using fat arrow functions which preserve the original
   * this value:
   */

  // ES6
   $.ajax({ type: 'POST', url: '/api/characters', data: { name: name, gender: gender } })
     .done((data) => {
       this.setState({ helpBlock: data.message });
     })
     .fail((jqXhr) => {
       this.setState({ helpBlock: jqXhr.responseJSON.message });
     })
     .always(() => {
       this.setState({ name: '', gender: '' });
     });
