//Genellikle arraylerde const kullanılır.
//Bunun sebebi : 
//Const sabit olarak tanımlar istenir ıse arrayin içi  metoddlar ile değiştirilebilir.
//Fakat aynı isimdeki aray farklı şekilde tanımlanamaz.
// örnek oalrak;
const myEggs = ['brown','Yellow'];
myEggs.push('Black');
myEggs[0] = 'Green';
console.log(myEggs);
myEggs = ['blue','pink'],
console.log(myEggs); // Uncaught type error: Assignment to constant varaible
