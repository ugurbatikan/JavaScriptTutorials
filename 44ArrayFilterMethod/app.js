// Creates a new array with all elements that pass the 
// test implemented by the provided function
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const oddNums = nums.filter(n => {
  return n % 2 !== 0; // our callback returns true or false
  //if it returns true, n is added to the filtered array
}); // [9, 7, 5, 3, 1]

const smallNums = nums.filter(n => n < 5);
// [4, 3, 2, 1, 0]

const evenNums = nums.filter(n => n % 2 === 0);
//[0, 2, 4, 6, 8]

const person = [{
  name: 'Ugur',
  surname: 'Batikan',
  age: 30
},
{
  name: 'Mert',
  surname: 'Batikan',
  age: 30
},
{
  name: 'Tutku',
  surname: 'Ince',
  age: 30
},
{
  name: 'Can',
  surname: 'Batikan',
  age: 13
}];

const equalSur = person.filter(n => {
  if(n.surname === 'Batikan'){
    return n.surname;
  }
});

const bigAge = person.filter( n => n.age >= 20);


const books = [{
  title: 'Good Omens',
  authors: ['Terry Prachet', 'Neil Gaiman'],
  rating: 1.5
},
{
  title: 'Bone: The Complete Edition',
authors: ['Jeff Smith'],
rating: 2.5
},
{
  title: 'Good Omens',
  authors: ['Terry Prachet', 'Neil Gaiman'],
  rating: 4.5
},
{
  title: 'Good Omens',
  authors: ['Terry Prachet', 'Neil Gaiman'],
  rating: 6.5
},
{
  title: 'Good Omens',
  authors: ['Terry Prachet', 'Neil Gaiman'],
  rating: 7.5
}
]

const goodBook = books.filter(b => b.rating >= 3.0);
const sameName = books.filter(b => b.title.indexOf('Good Omens') === 0);
