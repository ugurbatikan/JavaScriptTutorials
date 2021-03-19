const movieReviews = {
    Arrival                 : 9.5,
    Alien                   : 9,
    Amelie                  : 8,
    'In Brugers'            : 9,
    Amadeus                 : 10,
    'Kill Bill'             : 8,
    'Little Miss Sunshine'  : 8.5,
    Coraline                : 7.5
};

// MovieReviews are not iterable!!!!
/* for(let x of movieReviews){
    console.log(x); 
} */
//We can use Object.keys(movieReviews) & Object.values(movieReviews)

for(let movie of Object.keys(movieReviews)){
    console.log(movie, movieReviews[movie]);
}

const ratings = Object.values(movieReviews);
let total = 0;
for(let r of ratings){
    total += r;
}
let avg = total / ratings.length;
console.log(avg);
console.log(total);