 //High order fucntions
// Functions that operate on/with other functions. They can
//Accept other functions as arguments
//Return a function

//function callTwice(func) {
  //func();
  //func();
  
//}
function laugh() {
  console.log("HAHAHAHAHAHAHA");
}
//callTwice(laugh); // pass a function as an arg!
//"HAHAHAHAHAHAHA"
//"HAHAHAHAHAHAHA"

//function callFiveTimes(f) {
  //f();
  //f();
  //f();
  //f();
  //f();
//}
function sleep() {
  console.log("ZZZzzZZZZzZzzzzzz....");
}
 
//function sleep() {
  //console.log("ZZZzzZZZZzZzzzzzz....");
//}
function repeatNTimes(action, num) {
  for(let i = 0; i < num; i++){
    action();
  }
}
repeatNTimes(sleep, 13);
repeatNTimes(laugh, 20);

function pickOne(f1,f2) {
  let rand =(Math.random() * 10);
  console.log(rand);
  if(rand < 0.5) {
    f1();
  }else{
    f2();
  }
}