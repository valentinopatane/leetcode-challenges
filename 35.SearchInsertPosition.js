// ** ------------------------ 35. Search Insert Position

// Given a sorted array of distinct integers and a target value,
// return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.

// ** ------------------------

const searchInsert = (nums, target) => {
    if (nums.includes(target)) return nums.indexOf(target);
    nums.push(target);
    nums.sort((a, b) => a - b);
    return nums.indexOf(target);
};

searchInsert([1, 3, 5, 6], 5);
