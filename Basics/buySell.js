const maxProfit = function (prices) {
  let lowestPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - lowestPrice > maxProfit) {
      maxProfit = prices[i] - lowestPrice;
    }

    if (prices[i] < lowestPrice) {
      lowestPrice = prices[i];
    }
  }

  return maxProfit;
};

console.log(maxProfit([7, 6, 4, 3, 1]));
