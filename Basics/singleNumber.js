const singleNumber = (nums) => {
  let numsObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (numsObj[nums[i]]) {
      numsObj[nums[i]] = numsObj[nums[i]] + 1;
    } else {
      numsObj[nums[i]] = 1;
    }
  }

  for (item of Object.keys(numsObj)) {
    if (numsObj[item] === 1) {
      return item;
    }
  }
};

console.log(singleNumber([3, 3, 1, 1, 4]));

//XOR Approach

const xorApproach = (nums) => {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }

  return xor;
};


console.log(xorApproach([3, 3, 1, 1, 4]));
