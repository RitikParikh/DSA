/* Given an array arr[] sorted in ascending order of size N and an integer K. Check if K is present in the array or not. using O(log n) */

function searchInSorted(arr, k){
    const mid = Math.floor(arr.length / 2);
    console.log(arr[mid]);
    if(arr[mid] === k){
        return true;
    }
    else if(arr.length>1 && arr[mid] > k){
        return searchInSorted(arr.splice(0,mid),k);
    }
    else if(arr.length>1 && arr[mid] < k){
        return searchInSorted(arr.splice(mid,arr.length-1),k);
    }
    else return false;
}

console.log(searchInSorted([1,2,3,4,5,6,7,8,9,11,13,15,18], 11));