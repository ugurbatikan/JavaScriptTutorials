// Callback functions
/* A callback function is a functon passed into another function
as an argument, which is then invoked inside the other function */
/* function callTwice(func){
func();
func();
}
function laugh() {
  console.log("HAHAHAHAHAHAA..");
}
callTwice(laugh); // laugh is callback function pass a function ass an argument
 */

 /*  function goAway() {
  alert("Close this Page!!");
} */
//setTimeout(goAway, 2000); 

/* setTimeout(() => {
  alert("Welcome!!");
}, 5000);

setTimeout(function (){
  alert("ohohohohho...!!");
}, 10000); */

/* const btn = document.querySelector('button');
btn.addEventListener('click',goAway); */

const btn = document.querySelector('button');
btn.addEventListener('click', function(){
  alert("Tıklama demedim mi!!")
})