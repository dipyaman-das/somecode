// with function return string
// let greet = () => {
//   return `Hello world`;
// };

// console.log(greet(), typeof greet());
//with function return undefine

// let fun = () => {
//   console.log("hello World 2");
// };
// fun();
// console.log (typeof(fun()))

// let mySet = new Set(
//   [102, 101, 107, 108, { name: "soham", num: "001511201108" }],
//   () => {
//     console.log("hello world");
//   }
// );
// console.log(mySet);
// console.log(mySet.has(108));

// let obj = {
//   car: "maruti 800",
//   speed: 80,
//   location: "kolkata",
// };

// console.log(obj());

console.log('first');


//* javascript arrow function
// let dim = (a, b) => {
//   return a + b;
// }
// let newDim = dim(3, 4);
// console.log(newDim);

// let obj = {
//   name: 'dipyaman Das',
//   rollNumb: parseInt('001511201107'),
//   class: 'B2-1',
//   regNumb: 131793
// }
// console.log(obj);

function makeFunc() {
  const name = 'Mozila';
  function displayName() {
    console.log(name);
  }
  return displayName;
}
// makeFunc();
const myFunc = makeFunc();
myFunc();

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}
const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

function f(a, b, c) {
  m = ['1', '2', '3'];
  a = 3;
  b[0] = 'X';
  c.first = false;

}

var x = 4;
var y = ['A', 'B', 'C'];
var z = { first: true };

f(z, y, z);
console.log(x, y, z);
