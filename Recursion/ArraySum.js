const arraySum = (arr) => {
  if (arr.length > 0) {
    let initial = arr[0];
    let remaing = arr.slice(1);

    return initial + arraySum(remaing);
  } else {
    return 0;
  }
};
let arr = [1, 2, 3, 4, 5];

const arraySum2 = (n) => {
  if (n == 0) return arr[n];

  return arr[n] + arraySum2(n - 1);
};

console.log(arraySum([1, 2, 3, 4, 5]));
console.log(arraySum2(arr.length - 1));
