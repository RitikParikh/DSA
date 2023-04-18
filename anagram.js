// Given two strings. The task is to check whether the given strings are anagrams of each other or not. 

// An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, “abcd” and “dabc” are an anagram of each other.

// Examples:

// Input: str1 = “listen”  str2 = “silent”
// Output: “Anagram”
// Explanation: All characters of “listen” and “silent” are the same.


// Input: str1 = “gram”  str2 = “arm”
// Output: “Not Anagram"

const slowFunc = (str1, str2) =>{
    let obj={}, total=0;
    if(str1.length !== str2.length) return `String is not anagram!`;

    for(let i=0; i< str1.length; i++){
        if(!obj[str1[i]]) obj[str1[i]] = 1; 
        else obj[str1[i]] = obj[str1[i]] + 1;
        total++;
    }
    for(let j=0; j< str2.length; j++){
        if(obj[str2[j]]) {
            obj[str2[j]] = obj[str2[j]] - 1;
            total--;
        }
    }
    if(total == 0) return "str is anagram"
    else return "str not anagram" 
}

const fastFunc = (str1, str2) =>{
    if(str1.length !== str2.length) return `String is not anagram!`;
  
    const charCount = new Map();
    let total = 0;
    
    // Iterate over first string and update character count
    for(const char of str1){
      const count = charCount.get(char) || 0;
      charCount.set(char, count + 1);
      total++;
    }
    
    // Iterate over second string and decrement character count
    for(const char of str2){
      const count = charCount.get(char) || 0;
      if(count === 0) return "str not anagram";
      charCount.set(char, count - 1);
      total--;
    }
  
    if(total == 0) return "str is anagram";
    else return "str not anagram";
  }
  
  const newFastFunc = (str1, str2) =>{
    if (str1.length !== str2.length) return `String is not anagram!`;
    
    const charCount ={};
    for (let i = 0; i < str1.length; i++) {
        charCount[str1[i]] = (charCount[str1[i]] || 0) + 1;
    }
    for (let i = 0; i < str2.length; i++) {
        if (!charCount[str2[i]]) return "str not anagram";
            charCount[str2[i]]--;
    }
    return "str is anagram";
}

function anjaliFunc(val1, val2){
    if(val1.length != val2.length) return "Doesn't match";
    for(let i=0; i<val1.length; i++){
        if(!val2.includes(val1[i])) return "Doesn't match"
    }
    return "match"
}
  
  

const s1= "liisten", s2="siplent";
const startSlow = new Date();
console.log(slowFunc(s1,s2));
const endSlow = new Date();
console.log(`Slow O(n^2) and space O(n) finished in ${endSlow-startSlow} ms.`);

const startFast = new Date();
console.log(fastFunc(s1,s2));
const endFast = new Date();
console.log(`Fast O(n) and space O(n) finished in ${endFast-startFast} ms.`);

const startNewFast = new Date();
console.log(newFastFunc(s1,s2));
const endNewFast = new Date();
console.log(`Fast O(n) and space O(n) finished in ${endNewFast-startNewFast} ms.`);

const anjali = new Date();
console.log(anjaliFunc(s1,s2));
const anjaliFast = new Date();
console.log(`Fast O(n) and space O(n) finished in ${anjaliFast-anjali} ms.`);