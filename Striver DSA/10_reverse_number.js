/* Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1 */


function reverse(num) {
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
    return revNum;
   };

   reverse(12122);