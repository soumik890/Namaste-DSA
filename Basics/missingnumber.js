const missingNumber = (nums) => {
  const consecutiveArray = [...Array(nums.length+1).keys()];


  for (let i = 0; i < consecutiveArray.length; i++) {
    if (!nums.includes(consecutiveArray[i])) {
      return consecutiveArray[i];
    }
  }
};

console.log(missingNumber([3, 0, 1]));
