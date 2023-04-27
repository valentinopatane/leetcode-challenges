// ** ------------------------1480. Running Sum of 1d Array

// Given an array nums.
// We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// ** ------------------------

var runningSum = function (nums) {
    let aux = 0;
    const newAr = [];
    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        aux += currentNum;
        newAr.push(aux);
    }
    return newAr;
};
