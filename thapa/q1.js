//*________________________________________________________________
//* Programming Question : Longest word in string
//*________________________________________________________________

//? Q: Write a function findLongestWord that takes a string as input and returns the longest word in the string. If there are multiple longest words, return first one encountered



const findLongestWord = (str)=>{
    if(str.trim().length === 0) return false;
     const words = str.split(" ");
    /*const sortesWords = words.sort((a, b)=> a.length -b.length);
    return sortesWords.at(-1); */
    return words.reduce((acc, word)=>{
        return word.length > acc.length ? word : acc;
    },"");
}

console.log(findLongestWord("Which the logest word in javascript at the functiont"));