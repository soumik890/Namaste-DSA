const merge = (left, right) => {
  let i = 0;
  let j = 0;
  let result = [];

  while (left.length > i && right.length > j) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  console.log(left, right, "left, right");
  console.log(result, "result", i, j);
  console.log(
    [...result, ...left.slice(i), ...right.slice(j)],
    "[...result, ...left.slice(i), ...right.slice(j)]",
    i,
    j,
  );

  return [...result, ...left.slice(i), ...right.slice(j)];
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

console.log(mergeSort([7, 8, 4, 6, 1, 5, 3, 2, 0]));
