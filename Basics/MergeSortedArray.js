//Merge to sorted array

const mergeTwoArray = (nums1, m, nums2, n) => {
  let nums1copy = nums1.slice(0, m);
  let nums2copy = nums2.slice(0, n);

  nums1 = [...nums1copy, ...nums2copy].sort();
  console.log(nums1);
};

const mergeArray = (nums1, m, nums2, n) => {
  let nums1copy = nums1.slice(0, m);
  let nums2copy = nums2.slice(0, n);
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (p1 < m && nums1copy[p1] < nums2copy[p2])) {
      nums1[i] = nums1copy[p1];
      p1++;
    } else {
      nums1[i] = nums2copy[p2];
      p2++;
    }
  }

  console.log(nums1);
};

const newMergeArray = (nums1, m, nums2, n) => {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) {
      break;
    }

    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
  console.log(nums1);
};

newMergeArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6, 7], 4);
