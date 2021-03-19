// INTERNET EXPLORER NOT SUPPORT!
// A nice and easy way for iterating over arrays (or other iterable objects)
// For of
/* for ( varaible of iterable){
    statement
} */

let animals = ['Tiger', 'Cat', 'Dog', 'Mouse', 'Lion'];
for(let i = 0; i < animals.length; i++){
    console.log(animals[i]);
}
console.log('----------FOR OF EXAMPLE--------');
// for of example

for(let anim of animals){
    console.log(anim);
}

for(let char of 'javascript tutorials'){
    console.log(char.toUpperCase());
}