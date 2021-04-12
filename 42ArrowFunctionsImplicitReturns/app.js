/* // All these functions do the same thing

const isEven = function (num) { // regular function expression
  return num % 2 === 0;
}
const isEven = (num) => { //arrow function with parens around param
  return num % 2 === 0;
}
const isEven = num =>{  //no parens around param
  return num % 2 === 0;
}
const isEven = num => ( // implicit retrun
  num % 2 === 0
);
const isEven = num => num %2 === 0; //one linear implicit return

 */
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
//regular function
const doubles1 = nums.map(function (n){
  return n * 2;
});
//Arrow function
const doubles2 = nums.map(n => {
  return n * 2;
});
//Arrow function implicit return
const double3 = nums.map(n => n * 2);

//Regular function
const parityList = nums.map(function (n){
  if(n % 2 === 0){
    return 'even';
  } return 'odd';
});
//arrow function
const parityList2 = nums.map((n) =>(
  n % 2 === 0 ? 'even' : 'odd'
));

const parityList3 = nums.map((n) => n % 2 === 0 ? 'even' : 'odd');

