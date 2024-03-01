/* Count frequency of each element in the array
Problem statement: Given an array, we have found the number of occurrences of each element in the array. */

function countFreq(n,arr) {
    let obj= {};
    for(let i=0;i<n;i++){
        if(!obj[arr[i]]) obj[arr[i]]=0;
        obj[arr[i]] = Number(obj[arr[i]]) + 1; 
    }
    return Object.values(obj);

};
let a= [10,5,10,15,10,5];
console.log(countFreq(a.length,a));