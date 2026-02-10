const missingNumber = (nums) => {
  let n = nums.length;
  let totalSum = (n * (n + 1)) / 2;
  // console.log(totalSum);

  let partialSum = 0;

  for (let i = 0; i < nums.length; i++) {
    partialSum = partialSum + nums[i];
  }

  return totalSum - partialSum;
};

console.log(missingNumber([3, 0, 1]));
