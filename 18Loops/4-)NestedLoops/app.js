// Nested Loops
let str = 'LOL';
for(let i = 0; i <= 4; i++){
    console.log('Outer : ' + i);
    for(let j = 0; j < str.length; j++){
        console.log('Inner : ' + str[j]);
    }
}

// 2nd Nested Loops Example
/* for(let i = 1; i <= 5; i++){
    console.log('OUTER LOOP : ' , i);
    for(let j = 10; j >= 0; j -= 2){
        console.log('1ST INNER LOOP :' , j);
        for (let x = 20; x >= 0; x -=5){
            console.log('2ND INNER LOOP :' , x);
        }
    }
} */
const gameBoard = [
    [ 4, 32, 8, 4],
    [ 64, 8, 32, 2],
    [ 8, 32, 16, 4],
    [ 2, 8, 4, 2]
];
    let totalScore = 0 ;
for(let i = 0; i < gameBoard.length; i++){
    let row = gameBoard[i];
    console.log('ROW : ' , row);
   
   for(let j = 0; j< row.length; j++){
       console.log('ROW ELEMENTS : ' , row[j]);
    }
    let sumRow = 0;
   
    for(let x = 0 ; x < row.length; x++){
       
    sumRow += row[x];   
    totalScore += row[x];
  
    }
    console.log('SUM OFF ROW ELEMENTS : ' , sumRow );

  

}
console.log('---------------------------------------')
   
console.log('TOTAL SUM : ' , totalScore);

