/* Given two sorted arrays of size n and m respectively, find their union. The Union of two arrays can be defined 
as the common and distinct elements in the two arrays. Return the elements in sorted order. */

function findUnion(arr1, arr2)
{
    let n =arr1.length;
    let unionSet = new Set();
    if(arr2.length > n) n = arr2.length;
    for(let i=0; i<n; i++){
        arr1[i] && unionSet.add(arr1[i]);
        arr2[i] && unionSet.add(arr2[i]);
    }
    return Array.from(unionSet);
}

let arr1= [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 6, 7,9];

console.log(findUnion(arr1, arr2));


/* Given two sorted arrays of size n and m respectively, find their intersaction. */


function findIntersaction(arr1, arr2)
{
    let elementCount = {};
    let intersection = [];

    for (let i = 0; i < arr1.length; i++) {
        elementCount[arr1[i]] = (elementCount[arr1[i]] || 0) + 1;
    }

    for (let j = 0; j < arr2.length; j++) {
        if (elementCount[arr2[j]]) {
            intersection.push(arr2[j]);
            elementCount[arr2[j]]--; 
        }
    }

    return intersection;
}

let arr3= [1, 2, 3, 4, 5];
let arr4 = [1, 2, 3, 6, 7,9];

console.log(findUnion(arr3, arr4));