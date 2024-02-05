/* Functions - Take this coding challenge to test your coding skills to



-define a function

-pass arguments by value to a function

-pass arguments by reference to a function



This coding challenge is organized in the following way:



First line of input reads an integer to select the coding challenge:



-Reading value '1' selects the coding-challenge 1 ( tests the ability to define a function and pass arguments by value.)



-Reading value '2' selects the coding challenge 2 (tests the ability to pass arguments by reference to a function)



Coding Challenge -1

Define a function named "Maximum" that accepts two integers (pass by value) as arguments and returns the greatest of the two arguments.



Coding Challenge -2


Define a function named "Swap" that accepts two integers (pass by reference) as arguments and swaps their value. */


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function swap(a,b){
    let temp = b;
    b=a;
    a=temp;
}

function max(a,b){
    return a<b?a:b;
}

function main(ch,a,b) {
    switch(ch){
        case 1 : swap(a,b); console.log(a,b); break;

        case 2 : return max(a,b);
    }
}

console.log(main(1,2,3))
