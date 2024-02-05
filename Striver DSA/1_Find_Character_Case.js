/* Problem statement
Write a program that takes a character as input and prints 1, 0, or -1 according to the following rules.



1, if the character is an uppercase alphabet (A - Z).
0, if the character is a lowercase alphabet (a - z).
-1, if the character is not an alphabet. */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkChar(char){
    if (char >= 65 && char <= 90) {
        return 1;
    } else if (char >= 97 && char <= 122) {
        return 0;
    } else {
        return -1;
    }
}

function main() {
    rl.question('Input The Char: ', function (charString) {
        if (!charString) {
            console.log("Invalid input");
            rl.close();
            return;
        }

        let resultValue = checkChar(charString.charCodeAt(0));
        console.log(resultValue);

        rl.close();
    });
}

console.log(main())
