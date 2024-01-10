function getConcatenation(nums) {
    // return [...nums,...nums];
    let numlength = nums.length;
    for(let i=0;i<numlength;i++){
        nums.push(nums[i]);
    }
    return nums;
    // let result = [...nums];

    // for (let i = nums.length; i < (nums.length + nums.length); i++) {
    //     result[i] = nums[i - nums.length];
    // }

    // return result;
};

const s1= [1,2,3,22,1,300,301,4,34,2,64,34,2];
const startSlow = new Date();
console.log(getConcatenation(s1));
const endSlow = new Date();
console.log(`Slow O(n) and space O(1) finished in ${endSlow-startSlow} ms.`);
