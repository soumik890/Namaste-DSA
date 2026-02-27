const insertion = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (arr[j - 1] > arr[j]) {
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      j--;
    }
  }
  return arr;
};

console.log(insertion([7, 4, 3, 5, 1, 2]));
