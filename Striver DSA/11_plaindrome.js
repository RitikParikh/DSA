/* Problem statement
Check whether a given number ’n’ is a palindrome number.

Note :
Palindrome numbers are the numbers that don't change when reversed.
You don’t need to print anything. Just implement the given function.
Example:
Input: 'n' = 51415
Output: true
Explanation: On reversing, 51415 gives 51415. */

function palindrome(num) {
    let revNum =0;
    let x=num;
    const INT_MAX = Math.pow(2, 31) - 1;
       const INT_MIN = -Math.pow(2, 31);
    while(x!=0){
    let digit = Math.floor(x%10);
     if (revNum > INT_MAX / 10 || (revNum === INT_MAX / 10 && digit > 7)) {
               return 0;
           }
           if (revNum < INT_MIN / 10 || (revNum === INT_MIN / 10 && digit < -8)) {
               return 0;
           }
    revNum = revNum*10 + digit;
    x=Math.trunc(x/10);
    }
    return revNum === num;
   };

   console.log(palindrome(121));