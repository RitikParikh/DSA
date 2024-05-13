//*________________________________________________________________
//* Programming Question :  Sort of Array
//*________________________________________________________________

//? Q: Write a function sort an array of numbers in an ascending order.
//todo Constraints:
//? The function should take an array of numbers as input
//? The function shouldreturn a  new array with the numbers sorted in ascending order.
//? The original array should remain unchanges
//? You are not allowed to use the built-in sort() method.

const sortArray = (arr)=>{
    return arr.sort((a,b)=> a-b);
 }
 
 console.log(sortArray([1,232,1,23,4,54]));
 