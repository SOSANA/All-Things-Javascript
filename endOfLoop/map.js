/**
 * - using map method
 * - will not only work on memory in an array but also works on data that arrives
 * 	 asynchronously over time
 */

// 'getStockSymbols' function, job is to get an array of stocks, pull out the symbol from
// each one of those stocks and put all the symbols in an array and then return it
function getStockSymbols(stocks) {
  return stocks.map(function(stock) {
    return stock.symbol;
  });
}

// array map method is similar to forEach method that accepts a function, we are
// going to call this a projection function. The job of this projection function
// is to transform the item in the array into something else
// when we defined this map function we were actually just over riding the map function
// that is already on the array which will gets us the same value as using map method
/*
Array.prototype.map = function(projection) {
  // need an array to store the results
  var results = [];
  // this closure is going to accept each item in the array
  this.forEach(function(item) {
    results.push(projection(item));
  });

  return results;
}
*/
var symbols = getStockSymbols([
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 },
]);

console.log(JSON.stringify(symbols));
