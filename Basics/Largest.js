let arr = [-23, -45, -56, -67, -89, -12, -34, -98];
let arr2 = [10, 10, 5, 8, 7];

const largestNumber = (arr) => {
  let largest = -Infinity;
  for (item of arr) {
    if (item > largest) {
      largest = item;
    }
  }
  return largest;
};

const smallestNumber = (arr) => {
  let smallest = Infinity;
  for (item of arr) {
    if (item < smallest) {
      smallest = item;
    }
  }
  return smallest;
};

const secondLargest = (array) => {
  let arr = [...new Set(array)]; //filter repeated entries
  if (arr.length < 2) return "Array must contain two elements";
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (item of arr) {
    if (item > largest) {
      secondLargest = largest;
      largest = item;
    }
    if (item > secondLargest && item < largest) {
      secondLargest = item;
    }
  }
  return secondLargest;
};

// console.log("largest", largestNumber(arr));
// console.log("smallest", smallestNumber(arr));
console.log("secondlargest", secondLargest(arr2));
