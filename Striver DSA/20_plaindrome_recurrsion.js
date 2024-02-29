/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise. */


function checkPlaindrome(s,i) {
    if(i >= s.length/2) return true;
    if(s[i] != s[s.length-i-1]) return false;
    return checkPlaindrome(s,i+1);
}
function isPalindrome(s) {
    let str = s.toLowerCase();
    let pattern = /[^a-z0-9]/g;
    str =  str.replace(pattern, '');
    console.log(str);
    return checkPlaindrome(str,0);
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));