// Callback function
// Calls the function once per element in the array

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
nums.forEach(function (n){
  console.log(n * n);
  //81, 64, 49, 36, 25, 16, 9, 4, 1
});

nums.forEach(function (el){
  if(el % 2 === 0){
    console.log('2 ye tam bölünenler: ', el);
    //8, 6, 4, 2
  }
});

function printTriple(num){
  console.log(`${num} * 3 = `, num * 3);
}
nums.forEach(printTriple);

nums.forEach(function(z, idx){
  console.log(z,'index:', idx);
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
/* books.forEach(function(book){
  console.log(book.title.toUpperCase());
}) */

/* for(let book of books){
  console.log(book.title.toUpperCase());
} */
/* for(let i = 0; i <= books.length; i++){
  console.log(books[i].title.toUpperCase());
} */

