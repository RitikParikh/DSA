function secondLargest(arr){

    let large = -Infinity;
    let secondLarge = -Infinity;
    let arrlength = Math.floor(arr.length/2)
    for(let i=1;i<=arrlength; i++){

        function indexCall(index){
            if(arr[index] && arr[index]> large){
                secondLarge = large;
                large = arr[index];
            }else if (arr[index] > secondLarge && arr[index] !== large) {
                secondLarge = arr[index];
            }    
        }
        indexCall(i);
        indexCall(i+arrlength);
        
    }
    return secondLarge;
}

console.log(secondLargest([100,3,35,67,14,1167,33,112]));