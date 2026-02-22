// -> [4,3,2,1] -> [1,2,3,4]
// for n size array

// const bubble = (arr) => {
//   for (let i = 0; i < arr.length + 2; i++) {
//     if (arr[i] > arr[i + 1]) {
//       let temp1 = arr[i + 1];
//       let temp2 = arr[i];
//       arr[i] = temp1;
//       arr[i + 1] = temp2;
//     }
//   }
//   return arr;
// };

const bubble = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let isSwapped = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return arr;
};

console.log(bubble([4, 3, 2, 1]));
