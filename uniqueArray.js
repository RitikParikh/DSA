const uniqueSlow = (array) => {
	const newArray = [];
	
	for(let i=0;i< array.length; i++){
		const ele = array[i];
		if(!newArray.includes(ele)){
			newArray.push(ele);
		}
	}
	return newArray;
}

const uniqueFast = (array) => {
	const onlyUnique = new Set();
	
	for(let i=0;i< array.length; i++){
		onlyUnique.add(array[i]);
	}
	return Array.from(onlyUnique);
}

const uniqueNewFast = (array) => {
	const onlyUnique = {};
	
	for(let i=0;i< array.length; i++){
		onlyUnique[array[i]] = array[i];
	}
	return Object.values(onlyUnique);
}

const randomArray = [];
for(let i=0; i< 1000000; i++){
	randomArray.push(Math.floor(Math.random() * 100));
}

const startSlow = new Date();
console.log(uniqueSlow(randomArray));
const endSlow = new Date();
console.log(`Slow O(n^2) and space O(n) finished in ${endSlow-startSlow} ms.`);

const startFast = new Date();
console.log(uniqueFast(randomArray));
const endFast = new Date();
console.log(`Fast O(n) and space O(n) finished in ${endFast-startFast} ms.`);

const startNewFast = new Date();
console.log(uniqueNewFast(randomArray));
const endNewFast = new Date();
console.log(`NewFast O(n) and space O(n) finished in ${endNewFast-startNewFast} ms.`);