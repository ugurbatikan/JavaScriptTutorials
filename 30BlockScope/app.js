//Block scope
/* let radius = 8;
if(radius > 8){
  const PI = 3.14;
 
  let circ = 2 * PI * radius;
  
}
console.log(radius); // 8
// PI & circ are scoped to the BLOCK
 console.log(PI); // NOT DEFINED
console.log(circ); // NOT DEFINED  */

/* if(true) {
  const animal = 'dog';
  console.log(animal); // dog

}
console.log(animal); // NOT DEFINED */

/* if(true) {
  var animal = 'dog';
  console.log(animal); // dog

}
console.log(animal); // // dog */

/* let animals = ['parrot', 'cat', 'bear'];
var i = 10;
for(var i = 0; i < animals.length; i++){
  console.log(i, animals[i]);
}
console.log('i = ', i); */

/* let animals = ['parrot', 'cat', 'bear'];
var i = 10;
for(let i = 0; i < animals.length; i++){
  console.log(i, animals[i]);
}

console.log('i = ', i); // 10 */

/* let animals = ['parrot', 'cat', 'bear'];
//var i = 10;
for(let i = 0; i < animals.length; i++){
  console.log(i, animals[i]);
}

console.log('i = ', i); // i is NOT DEFINED */

//Double array
//[1,2,3]
//[2,4,6]
/* function doubleArr(arr) {
  const result = [];
  for(let num of arr){
    var double = num * 2;
    result.push(double);
  }   
  console.log(double); //8
  return result;

} */

/* function doubleArr(arr) {
  const result = [];
  for(let num of arr){
    let double = num * 2;
    result.push(double);
  }   
  console.log(double); //NOT DEFINED
  return result;

} */
function doubleArr(arr) {
  const result = [];
  let double;
  for(let num of arr){
     double = num * 2;
    result.push(double);
  }   
  console.log(double); //8
  return result;

}