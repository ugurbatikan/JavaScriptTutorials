// ARGUMENTS
//we can also write functions that accept inputs, called arguments

function hello(person){
    console.log(`Hi, ${person}!`);
}
hello('Ugur');
hello('Tom');

function rollDie(){
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`rolled : ${roll}`);
}
function throwDice(numRolls){
    for(let i = 0; i < numRolls; i++){
        rollDie(); 
    }
}
