/* Check if a number is prime or not
Problem Statement: Given a number, check whether it is prime or not. A prime number is a natural number that is only divisible by 1 and by itself. */

function findPrime(n){
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}

console.log(findPrime(37));