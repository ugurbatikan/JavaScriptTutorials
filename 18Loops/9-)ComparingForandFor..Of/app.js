// its  advantage of use to for of EXAMPLE
// Magic Square all rows and columns sum equal to same number
let magicSquare = [
    [ 2, 7, 6 ],
    [ 9, 5, 1],
    [ 4, 3, 8]
];
// nested loops
for(let i = 0; i < magicSquare.length; i++){
    let row = magicSquare[i];
    let sum = 0;
    for(let j = 0; j < row.length; j++){
        sum += row[j];
    }
    console.log(`${row} summed to ${sum}`);
}

//Same example with  for of
// its advantage of use to for of
console.log('----- FOR OF EXAMPLE -----');
for(let row of magicSquare){
    let sum = 0;
    for(let num of row){
        sum += num;
    }
    console.log(`${row} summed to ${sum}`);
}
 
// its NOT advantage of use to for of EXAMPLE

let word1 = [ 'mail', 'milk', 'bath', 'black'];
let word2 = [ 'box', 'shake', 'tub', 'berry'];

for(let i = 0; i < word1.length; i++){
    console.log(` ${word1[i]} ${word2[i]} `);
}

// for of
