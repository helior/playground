var [a, , b] = [1,2,3];
console.log(a,b);

function f(x, ...y) {
  // y is an Array
  return x * y.length;
}
console.log(f(3, "hello", true) == 6);

function f(x, y, z) {
  return x + y + z;
}
// Pass each elem of array as argument
console.log(f(...[1,2,3]) == 6);

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x; // 1
y; // 2
z; // { a: 3, b: 4 }
