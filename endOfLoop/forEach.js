/**
 * - using foreach method
 * - runs asynchronously
 * - accepts a closure and invokes that closure for every item in the array and passes
 *   in that item as an argument to the closure
 * - really convenient if you want to do something to every item in an array
 */

function getStockSymbols(stocks) {
  var symbols = [];
  
  // this works exactly like our for loop
  stocks.forEach(function(stock) {
    symbols.push(stock.symbol);
  })
      
  return symbols;
}

var symbols = getStockSymbols([
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 },
]);

console.log(JSON.stringify(symbols));
