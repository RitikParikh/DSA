/* Print all Divisors of a given Number
Problem Statement: Given a number, print all the divisors of the number. A divisor is a number that gives the remainder as zero when divided. */

function printDivisorsOptimal(n){
    for(let i=0;i<=Math.sqrt(n);i++){
        if(n % i == 0){
            console.log(i);
            if(i!=n/i) console.log(n/i);
        }
    }
}

printDivisorsOptimal(36);