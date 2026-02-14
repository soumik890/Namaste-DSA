const oddSum = (arr) => {
  if (arr.length > 0) {
    let remaining = arr.slice(1);
    if (arr[0] % 2 !== 0) {
      return arr[0] + oddSum(remaining);
    } else {
      return 0 + oddSum(remaining);
    }
  } else {
    return 0;
  }
};

console.log(oddSum([5, 2, 0, 3, 6, 7]));
