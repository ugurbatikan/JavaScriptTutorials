// Creates a new array with the results of calling a
// callback on every element in the array
const text = ['hello', 'ugur'];
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const caps = text.map(function(t){
  //console.log(t.toUpperCase());
  return t.toUpperCase().split('').join('.');
})

const double = nums.map(function(n){
/*  console.log(n * 2); */
return n * 2; 
})

const isEven = nums.map(function(e){
  return{
    value: e,
    isEven: e % 2 === 0
  }
})


const books = [{
  title: 'Good Omens',
  authors:['Terry Pratchett', 'Neil Gaiman'],
  rating: 4.3
},
{
  title: 'Cerrah',
  authors: 'Tess Gerritsen',
  rating: 5.0
},
{
  title: 'Psikiyatrist',
  authors: ['Wulf Dorn', 'Elizabeth Dorn'],
  rating: 3.5
}  
]

const bookDetails = books.map(function (b) {
  return{
    title: b.title,
    rating: b.rating
  }
})