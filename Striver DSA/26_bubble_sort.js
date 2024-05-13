/* const bubbleSort = (arr)=>{
    outerloop : for(let i=0; i<arr.length;i++){
        let isSwap = false;
        for(let j=0;j < arr.length-i-1;j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                isSwap=true
            }
        }
        if(!isSwap) break outerloop;
    }
    return arr;
 };
 
 let arr =[43,431,2,54,1,7,76,23,44];
 let arr1 =[1,2,3,4,5,6,7];
 console.log(bubbleSort(arr));
 console.log(bubbleSort(arr1));
  */

 const bubbleSort = (arr)=>{
    outerloop : for(let i=0; i< arr.length ;i++){
        let isSwap = false;
        for(let j=0; j< arr.length-i-1;j++){
            if(arr[j]> arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                isSwap = true;
            }
        }
        if(!isSwap) break outerloop;
    }
    return arr
 };
 
 let arr =[43,431,2,54,1,7,76,23,44];
 let arr1 =[1,2,3,4,5,6,7];
 console.log(bubbleSort(arr));
 console.log(bubbleSort(arr1));
 