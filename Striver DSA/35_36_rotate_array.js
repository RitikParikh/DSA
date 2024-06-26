// 189. Rotate Array
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

/* Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 

Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105
 

Follow up:

Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
Could you do it in-place with O(1) extra space? */

/* function rotate(nums, k) {
    while(k>0){
        nums.unshift(nums.pop());
        k--;
    }
    return nums;    
};

console.log(rotate([1,2,3,4,5,6,7], 3)); */
// by one place
function rotateOne(nums) {
    const n = nums.length;
    const temp = nums[0];
    for(let i=0;i<n-1;i++){
        nums[i] = nums[i+1];
    }
    nums[n-1] = temp;
    return nums;
};  

// by k place
console.log(rotateOne([1,2,3,4,5,6,7]));

function rotate(nums, k) {
    const n = nums.length;
    k = n % k;
    
    function reverse(start, end){
        while(start <  end){
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }
    reverse(0, n-1);
    reverse(0, k-1);
    reverse(k, n-1);
    return nums;
};  

console.log(rotate([1,2,3,4,5,6,7], 3));