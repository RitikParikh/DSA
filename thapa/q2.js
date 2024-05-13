//*________________________________________________________________
//* Programming Question : Hash tag generator
//*________________________________________________________________

//? Q: Write a function genrateHash that generates the hash tag from a givin input string. the hash tag should constructed as follows:
//? The input string should be converted to hash tag format, where each word is capitalized and concatenated togather without spaces
//? If the length of the input string is grater than 280 characters or if the input string is empty or conatin only whitespaces, the function should return false
//? Otherwise, the function should return the generated has tag prefixed with #.


const genrateHash = (str)=>{
    if(str.trim().length === 0 || str.length > 280) return false;
     const words = str.split(" ");
     return words.reduce((acc, word)=>{
        return acc + (word.charAt(0)).toUpperCase() + word.substr(1,word.length)
     },"#");
     
}

console.log(genrateHash("my name is ritik parikh"));
