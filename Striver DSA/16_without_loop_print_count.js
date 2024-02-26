/* You are given an integer ‘n’.
Your task is to return an array containing integers from 1 to ‘n’ (in increasing order) without using loops. */


const rec =(n,count=1)=>{
    console.log(count);
    if(count === n){
       return true; 
    }
    count++;
    return rec(n,count);
}

rec(30);