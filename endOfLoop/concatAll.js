/**
 * - using concatAll
 * - running it on a nested array and we can use this common pattern with
 * 	 concatAll() and abstract it into a useful function
 */

var exchanges = [
  [
    { symbol: "XFX", price: 240.22, volume: 23432 },
    { symbol: "TNZ", price: 332.19, volume: 234 }
  ],
  [
    { symbol: "JXJ", price: 120.22, volume: 5323 },
    { symbol: "NYN", price: 88.47, volume: 98275 }
  ]
];

// unlike map, forEach and filter methods this doesn't exist on the array so
// we will add it, you run it on a nested array and return a new array with the
// flatten results of that new array
// can only be used on arrays with two or more dimensions
Array.prototype.concatAll = function() {
  var results = [];

  this.forEach(function(subArray) {
    subArray.forEach(function(item) {
      results.push(item);
    });
  });

  return results;
};

// using our concatAll method
var stocks = exchanges.concatAll();
stocks.forEach(function (stock) {
  console.log(JSON.stringify(stock));
});

console.log('-------------------');
// logging all the stocks in the exchanges
// which does the same as our concatAll method we created
exchanges.forEach(function(exchange) {
  exchange.forEach(function(stock) {
    console.log(JSON.stringify(stock));
  })
});
