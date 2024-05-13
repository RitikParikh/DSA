/* Problem statement
You are given a number ’n’.
Find the number of digits of ‘n’ that evenly divide ‘n’.

Note:
A digit evenly divides ‘n’ if it leaves no remainder when dividing ‘n’.

Example:
Input: ‘n’ = 336

Output: 3 */

/* let num =33621;
let x = num, count=0;
while(x!=0){
    x=Math.floor(x/10);
    count++;
}  
console.log(count); */


/* let num =17;
let x = num, count=0;
while(x!=0){
    let digit=Math.floor(x%10);
    if(num%digit==0){
        count++;
    }
    x=Math.floor(x/10);
}  
console.log(count);
 */

/* let num = 100
let logNUmn = Math.log10(num);
console.log(logNUmn+1) */