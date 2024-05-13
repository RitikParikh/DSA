/* Insertion Sort */
//It is maximum to last by adjustent swap
/* const insertionSort = (arr)=>{
    for(let i=0; i< arr.length;i++){
       let j =i;
       while(j > 0 && arr[j] < arr[j-1]){
            let temp = arr[j];
            arr[j] = arr[j-1];;
            arr[j-1]  = temp;
            j--;
       }
    }
    return arr;
};

let arr =[43,431,2,54,1,7,76,23,44];
console.log(insertionSort(arr));
 */

const insertionSort = (arr)=>{
   for(let i=0; i<arr.length;i++){
        let j=i;
        while(j > 0 && arr[j] < arr[j-1]){
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
            j--;
        }
   }
   return arr;
};

let arr =[43,431,2,54,1,7,76,23,44];
console.log(insertionSort(arr));
