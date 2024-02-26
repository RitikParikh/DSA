/* Given an array 'arr' of size 'n'.



Return an array with all the elements placed in reverse order.



Note:
You don’t need to print anything. Just implement the given function.
Example:
Input: n = 6, arr = [5, 7, 8, 1, 6, 3]

Output: [3, 6, 1, 8, 7, 5]

Explanation: After reversing the array, it looks like this [3, 6, 1, 8, 7, 5]. */


const rec = (n,arr,i=0)=>{
    if(i == Math.floor(arr.length/2)){
        return arr;
    }
    [arr[i],arr[n]] = [arr[n],arr[i]];
    n--;
    i++;
    if(n>=0){
        return rec(n,arr,i);
    }
}

let arr = [5, 7, 8, 1, 6, 3,1,55];
console.log(rec(arr.length-1, arr));