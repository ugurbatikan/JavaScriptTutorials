//There is another syntax we can use to define functions
const square = function (num) {
  return num * num;
}
square(7); // 49

function add(x, y) {
  return x + y;
}

let sumNum = function(x, y) {
  return x + y;
}
add(2,3); //5
sumNum(2,3);//5

const product = function multiply(x, y) {
  return x * y;
}
product(5,6); // 30
multiply(5,6);// NOT DEFINED