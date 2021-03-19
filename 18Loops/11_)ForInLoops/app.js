// LOOP OVER THE KEYS IN AN OBJECT!!
/* For In Loops
for (variable in object){
    statement
} */

const movieRatings = {
    avatar         :    3.1,
    dieHard        :    2.1,
    harryPotter    :    4.3,
    lordOfTheRings :    5.0 
};


for(let prop in movieRatings){
    console.log(prop);
    console.log(movieRatings[prop]);
}
let total = 0;
for(let prop in movieRatings){
    total += movieRatings[prop];
}
console.log(`My Films IMDB's Total Points : ${total}`);