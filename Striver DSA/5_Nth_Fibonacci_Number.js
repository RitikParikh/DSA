/* The n-th term of Fibonacci series F(n), where F(n) is a function, is calculated using the following formula -

    F(n) = F(n - 1) + F(n - 2), 
    Where, F(1) = 1, F(2) = 1


Provided 'n' you have to find out the n-th Fibonacci Number. Handle edges cases like when 'n' = 1 or 'n' = 2 by using conditionals like if else and return what's expected.

"Indexing is start from 1"


Example :
Input: 6

Output: 8

Explanation: The number is ‘6’ so we have to find the “6th” Fibonacci number.
So by using the given formula of the Fibonacci series, we get the series:    
[ 1, 1, 2, 3, 5, 8, 13, 21]
So the “6th” element is “8” hence we get the output. */

function fib(num){
    if(num<=0) return "Give a Positive Number";
    if(num<=2) return 1;
    let res = 1, lastDidgit =1;
    for(let i=3;i<=num;i++){
        let temp = res;
        res = res +lastDidgit;
        lastDidgit = temp;
    }
    return res;
}

console.log(fib(6));