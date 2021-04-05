function makeBetweenFunc(min,max){
  return function(val){
    return val >= min && val <= max;
  }
}
const inAgeRange = makeBetweenFunc(18, 100);
inAgeRange(17); // false
inAgeRange(68); // true

function multiplyBy(num){
  return function(numVal){
    return numVal * num;
  }
}
const triple = multiplyBy(3);
console.log(triple(5)); //15
const double = multiplyBy(2);
console.log(double(8)); //16

function makeEqual(x,y){
   return function(equalVal){
   return equalVal === x || equalVal === y; 
}
}

const ageIs = makeEqual(12,9);
console.log(ageIs(3)); // false
console.log(ageIs(12)); // true
console.log(ageIs(9));  // true

