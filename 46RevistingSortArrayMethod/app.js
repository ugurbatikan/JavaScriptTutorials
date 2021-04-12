const prices = [400.50, 3000, 99.99, 35.99, 12.0, 9500];

prices.sort();
// [12, 3000, 35.99, 400.5, 9500, 99.99]

//arr.sort(compareFunc(a, b))
// - If compareFunc(a, b) returns less than 0
// -- Sort a before b
// - If compareFunc(a, b) returns 0
// -- Leave a and b unchanged with respect to each other
// - If compareFunc(a, b) returns greater than 0
// -- Sort b before a

const ascSort = prices.sort((a, b) => a - b); // smallest to largest
// [12, 35.99, 99.99, 400.5, 3000, 9500]
const descSort = prices.sort((a, b) => b - a); // largest to smallest
// [9500, 3000, 400.5, 9.99, 35.99, 12]

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
const book2 = books.sort((a, b) => a.rating - b.rating);
const book3 = books.sort((a, b) => b.rating - a.rating);

