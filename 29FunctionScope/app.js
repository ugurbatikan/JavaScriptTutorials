//--GOALS--
//Understand scope
//Write higher order functions
//Pass functions ass callbacks

//Scope
//Variable 'visibility'
//The location where a variable is defined dictates where we have access to that variable

/* function helpMe() {
  let msg = "I am on Fire";
  return msg; // "I am on Fire"
}
//afer the scope
msg; // not defined
console.log(helpMe()); */
  //We can same variable name differnt scopes
let bird = 'mandarin duck';
const birdSound = 'aggrrh';
function birdWatch() {
  let bird = 'golden pheasant';
  const birdSound = 'ceyyk';
  console.log(bird, birdSound);
}
console.log(bird, birdSound);
birdWatch();