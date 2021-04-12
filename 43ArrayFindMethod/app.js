// returns the value of the first element in the array that satisfies
// the provided testing function
let movies = [
  'Lord of the Rings',
  'Scream',
  'Saw',
  'Mr & Mrs Smith',
  'Mrs DoubthFire '   
];
let movie = movies.find(movie => {
  return movie.includes('Rings'); // Lord of the Rings
});

let movie2 = movies.find(m => m.indexOf('Mrs') === 0);

let nums = [1, 2, 3, 4, 5,6];
let num = nums.find( x => {
  return x % 5 === 0;
});

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

const goodBook = books.find(b => b.rating >= 7);