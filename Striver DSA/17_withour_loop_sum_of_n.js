/* Problem statement
You are given an integer ‘n’.



Your task is determining the sum of the first ‘n’ natural numbers and returning it.



Example:
Input: ‘n’ = 3

Output: 6 */

const rec = (n,sum=0)=>{
    if(n==0) return sum;
    sum = sum + n;
    n--;
    return rec(n,sum);
}

console.log(rec(5,0));