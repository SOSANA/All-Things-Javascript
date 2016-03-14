/**
 * - chaining the map and filter array to pull only the stock symbol with value
 * 	 of the stock that is greater or equal to 150.00
 */
var stocks = [
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 },
];

var filteredStockSymbols =
  stocks.
    filter(function (stock) {
      return stock.price >= 150.00;
    }).
    map(function (stock) {
      return stock.symbol;
    });

filteredStockSymbols.forEach(function (symbol) {
  console.log(symbol);
});

// grabbing the volume of the stock which value is greater or equal to 150.00
console.log('-------------------');
var filteredStockVolume =
  stocks.
    filter(function (stock) {
      return stock.price >= 150.00;
    }).
    map(function (stock) {
      return stock.volume;
    });

filteredStockVolume.forEach(function (symbol) {
  console.log(symbol);
});
