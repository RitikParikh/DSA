//*________________________________________________________________
//* Programming Question : Count Occurrences of characters 
//*________________________________________________________________

//? Q: Write a function countChar that takes two parameters: a string and a character to count, The function should return the number of times the the spcified character appears in the string in the string.

//todo Constraints:
//? The function should return be case-sensitive.
//? The function should handle both lowercase and uppercase characters
//? The character parameter can be any priciple ASSCII character (the function should accept any character that is part of the ASCII character set and is printable).


const countChar = (str, char)=>{
    let count = 0;
    char = char.toLowerCase();
    /* for(let strChar of str.toLowerCase()){
        if(strChar === char) count ++;
    } */
    let count1 = str.toLowerCase().split("").filter((strChar)=> strChar === char)
    return count1.length;     
}

console.log(countChar("MissISSippi", "I")); //output : 4
