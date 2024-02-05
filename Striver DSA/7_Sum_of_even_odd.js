/* Write a program to input an integer 'n' and print the sum of all its even digits and the sum of all its odd digits separately.



Digits mean numbers, not places! That is, if the given integer is "132456", even digits are 2, 4, and 6, and odd digits are 1, 3, and 5.

Constraints
0<= 'n' <=10000


Example :
Input: 'n' = 132456

Output: 12 9 */


let num =91212536;

let odd = 0, even=0;
while(num > 0){
    let digit = num %10;
    if(num % 2 ===0) even += digit;
    else odd += digit;
     num = Math.floor(num / 10);
}  

console.log(odd, even);