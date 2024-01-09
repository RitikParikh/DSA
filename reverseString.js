//Given string to reverse string.

const slowFunc = (str) =>{
    let reverse= "";
    for(let i=str.length-1; i>=0;i--){
        reverse += str[i];
    }
    return reverse;
}

const fastFunc = (str) =>{
    const reversedArray = [];
    for (let i = str.length - 1; i >= 0; i--) {
        reversedArray.push(str[i]);
    }
    return reversedArray.join('');
  }

const s1= "liisten";
const startSlow = new Date();
console.log(slowFunc(s1));
const endSlow = new Date();
console.log(`Slow O(n^2) and space O(n) finished in ${endSlow-startSlow} ms.`);

const startFast = new Date();
console.log(fastFunc(s1));
const endFast = new Date();
console.log(`Fast O(n) and space O(n) finished in ${endFast-startFast} ms.`);

/* Time Complexity:

The time complexity of the for loop is O(n), where n is the length of the input string str.
The join operation has a time complexity of O(m), where m is the total number of characters in the reversed array.
Since both operations (loop and join) are sequential, the overall time complexity is O(n + m). In practice, the join operation is often considered O(n), as it involves creating a new string with all the characters.
Therefore, the overall time complexity is O(n).

Space Complexity:

The space complexity is determined by the space used by the additional array (reversedArray) and any temporary variables.
The space used by the array is O(n), where n is the length of the input string.
Other variables used in the loop have constant space requirements.
Therefore, the overall space complexity is O(n). */