//Given Array find maximum number in array.

const slowFunc = (arr) =>{
    let start = 0;
    let end = arr.length-1;
    let lg=null;
    while (start <= end){
        if(arr[start] > lg) lg =arr[start];
        if(arr[end] > lg) lg=arr[end];
        start++;
        end--;
    }
    return lg;
}

const s1= [1,2,3,22,1,300,301,4,34,2,64,34,2];
const startSlow = new Date();
console.log(slowFunc(s1));
const endSlow = new Date();
console.log(`Slow O(n) and space O(1) finished in ${endSlow-startSlow} ms.`);
