/* 283. Move Zeroes
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array. 

*/

function moveZeroes(nums){
    let j=0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]!==0){
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        }
    }
    return nums;
}

console.log(moveZeroes([0,1,2,3,4,0,0,1,1]));