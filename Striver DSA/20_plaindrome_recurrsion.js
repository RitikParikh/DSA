/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise. */


function isPalindrome(s,i=0) {
    if(i >= s.length/2) return true;
    if(s[i] != s[s.length-i-1]) return false;
    return isPalindrome(s,i+1);
};

console.log(isPalindrome("chromeewwmorhc"));