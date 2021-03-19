// Push and Pops

// push add to end
const mamalAnimals = ['cow' , 'dolphin', 'cat', 'dog'];
console.log(mamalAnimals);
mamalAnimals.push ('mouse', 'bat');
console.log(mamalAnimals);

// pop remove to end

let evenNumbers = [2,4,6,7];
console.log(evenNumbers);

// Shift remove from start
let number = [1,2,3];
number.shift();
number.shift();

//Unshift add to start
number.unshift(-3,-2,-1,0);
console.log(number);


// More Methods

// concat --> merge arrays
const array1 = ['a','b','c'];
const array2 = ['d','e','f'];
console.log(array1.concat(array2));
console.log(array2.concat(array1));


const letters = ['a','b','c'];
const alphaNumeric = letters.concat([1,2,5]);
console.log(alphaNumeric);
const names = ['tutku','ugur','mert'];
const namesandSurnames = names.concat('İnce',1,2,['Batıkan','Batıkan']); 
console.log(namesandSurnames);


//includes --> Look for value But not AVALIABLE IN IE!!
let phones = ['sony', 'samsung', 'Nokia','haylaou'];
console.log(phones.includes('sony')); 
console.log(phones.includes('samsung',4));
console.log(phones.includes('samsung',1));

//İndex of  --> jsut like str index of
console.log(phones.indexOf('Nokia'));
console.log(phones.indexOf('haylaou'));
console.log(phones.indexOf('Nokia', 1));

//reverse --> reverses an array
console.log(phones.reverse());

//join --> Creates a string from an array
console.log(phones.join('-'));

//slice --> copy portion of an array

let animals = ['shark','whale', 'dolphin','tiger','ant'];
let swimmers = animals.slice(0,3);
let memeli = animals.slice(0,4);
let test = animals.slice(-3,-1);
let test2 = animals.slice(-4,-2);
let test3 = animals.slice(0,-1);

//splice --> remove/replace elements
//splice (startIdx,deletecount,itemsToInsert)
let myFish = ['Paul','Gergoe','angel','crown'];
    let removed = myFish.splice(1,0,'Jane','Angela');
    const months = ['Jan','March','April'];
    //insert index 1
    months.splice(1,0,'Feb');
    console.log(months);
    //replace 1 element at index 4
    months.splice(4,1,'May');
    console.log(months);
    months.splice(1,3,'alo','deneme');
    console.log(months);
    let arrayElements = [2,4,6,8,10,11,13,15];
    
    let arrayDeleteElements = arrayElements.splice(5,0,12,14,16);
    arrayElements.splice(8,3);

//sort --> sorts an array 
//You can correctly sort just STRINGS but u can use for COMPARE NUMBERS
let alphabet = ['C','G','A','D','E','F','H','B'];
alphabet.sort();
let nums = [2,45,1,3,9,999,1000,21,3,5];
nums.sort();


//COMPARE NUMBERS WITH SORT
let digitNumbers = [2,5,3,1,4];
digitNumbers.sort();

