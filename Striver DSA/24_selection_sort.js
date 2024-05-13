/* Selection Sort */
//Select minimum value and make in beginning
/* const selectionSort = (arr)=>{
    for(let i=0; i< arr.length;i++){
        let min = i;
        for(let j=i+1; j< arr.length-1;j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        let temp= arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
};

let arr =[43,431,2,54,1,7,76,23,44];
console.log(selectionSort(arr)); */

const selectionSort = (arr)=>{
   for(let i=0;i< arr.length;i++){
     let min = i;
     for(let j=i+1;j<arr.length;j++){
        if(arr[j]< arr[min]){
            min =j;
        }
        
     }
     let temp = arr[i];
     arr[i] = arr[min];
     arr[min] = temp;
   }
   return arr
};

let arr =[43,431,2,54,1,7,76,23,44];
console.log(selectionSort(arr));