// binary search can be applied to sorted arrays only

// [1, 2, 3, 4, 5]

const binary = (arr, target) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middle = Math.floor((leftIndex + rightIndex) / 2);
    if (target == arr[middle]) {
      return middle;
    } else if (target < arr[middle]) {
      rightIndex = middle - 1;
    } else {
      leftIndex = middle + 1;
    }
  }
  return -1;
};

console.log(binary([1, 2, 3, 4, 5], 5));
