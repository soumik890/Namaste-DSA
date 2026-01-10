const moveZeros = (nums) => {
  let numsSet = nums.filter((item) => item != 0);


  for (let i = 0; i < nums.length; i++) {
    if (numsSet[i]) {
      nums[i] = numsSet[i];
    } else {
      nums[i] = 0;
    }
  }

  console.log(nums);
};

moveZeros([0, 1, 0, 3, 12]);
