let arr = [4, 5, 3, 2, 1, 9, 7, 10];

const search = (item, array) => {
  for (let i = 0; i < array.length; i++) {
    if (item == array[i]) {
      return i;
    }
  }
  return -1;
};

console.log(search(13, arr));

let arr2 = [1, 2, 3, 8, 9, -23, -45, -12, -13];

const negetiveNumbersCount = (array) => {
  let negetiveCount = 0;
  let negetiveArray = [];
  for (item of array) {
    if (item < 0) {
      negetiveCount++;
      negetiveArray.push(item);
    }
  }
  return `the total negetive count is ${negetiveCount} and negetive array is ${negetiveArray}`;
};

console.log(negetiveNumbersCount(arr2));
