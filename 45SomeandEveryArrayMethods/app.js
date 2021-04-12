// SOME

// Smillar to every, but returns true if
//ANY of the array elements pass the test function

const words = ['dog', 'dig', 'log', 'bag', 'wag', 'cupcake'];
// Are there any words longer than 4 characters?
const longFour = words.some(word =>{
  return word.length > 4; // true
})
//Do any word start with 'Z'?
const startZ = words.some(word => word[0] === 'Z'); // false
//Do any word contain 'cake'?
const cake = words.some(word => word.includes('cake')); // true

//EVERY

// test whether all elements in the array pass the provided function
// It returns a boolean value.

const words2 = ['dog', 'dig', 'dug', 'wag'];
const sameLength = words2.every(w => {
  return w.length === 3; // true 
})

const firstSame = words2.every(w => w[0] === 'd'); // false

let lastSame = words2.every(w =>{
   return  w[w.length -1] === 'g';
  
  

}) // true