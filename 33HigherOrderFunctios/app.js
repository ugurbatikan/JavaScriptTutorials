function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

const operations = [add, subtract, multiply, divide];

for(let func of operations) {
  let result = func(30, 5);
  console.log(result);
}
const thing = {
  doSomething : multiply
}