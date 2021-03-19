// Break
const target = Math.floor(Math.random() * 20);
let guess = Math.floor(Math.random() * 20);
while(true){
    if(target === guess) break;
    console.log(`Target : ${target} Guess: ${guess}`);
    guess = Math.floor(Math.random() * 20);
    if(target !== guess){
        console.log('TRY AGAIN!');
    }
}
console.log('YOU WİN!');
