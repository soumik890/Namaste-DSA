//Time and Space complexities

// Linear Search
// TIme Complexty of linear search is n
// Time Complexity of binary search is log n

// const removeDuplicates = (array) => {
//   let map = {};

//   for (item of array) {
//     if (map[item] >= 0) {
//       map[item] = map[item] + 1;
//     } else {
//       map[item] = 1;
//     }
//   }

//   return Object.keys(map);
// };

var removeDuplicates = function (nums) {
  let map = {};

  for (item of nums) {
    if (map[item] >= 0) {
      map[item] = map[item] + 1;
    } else {
      map[item] = 1;
    }
  }
  nums=Object.keys(map).map(Number)

  return nums;
};

var removeDuplicates2 = function (nums) {
  if (nums.length === 0) return 0;

  let k = 1; 

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i]; 
      k++;
    }
  }

  return k;
};

var removeDuplicates3 = function (nums) {
  return [...new Set(nums)].length;
};

var removeDuplicates4 = function (nums) {
  let unique = [...new Set(nums)]; // extract unique values

  for (let i = 0; i < unique.length; i++) {
    nums[i] = unique[i]; // overwrite nums in-place
  }
  console.log(nums);
  return unique.length;
};

console.log(removeDuplicates4([1, 1, 2]));
