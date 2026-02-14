// F(n)= F(n-1)+F(n-2)

//iterative approach
const fibbonacci = (n) => {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    let item = fib[i - 1] + fib[i - 2];
    fib.push(item);
  }
  console.log(fib);
  return fib[n];
};

//recursive approach
const recursiveFibonacci = (n) => {
  if (n <= 0) return n;
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};

console.log(fibbonacci(0));

console.log(recursiveFibonacci(0));
