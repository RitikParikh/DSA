/* 
1752 Check if Array Is Sorted and Rotated

Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated som including zero). Otherwise, return false.

There may be duplicates in the original array.

Note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], where % is the modulo operation. */

function check(nums) {
    let numsLength = nums.length;
    let count = 0;
    for(let i=0; i<nums.length;i++){
        if(nums[i] > nums[(i+1) % numsLength]) count++;
        if(count > 1) return false
    }   
    return true;
}