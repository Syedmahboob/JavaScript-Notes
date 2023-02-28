// var
var a = 20;
console.log(a);

//var global scope
var v = "Hello";

function Check() {
  console.log(v);
}
Check();
console.log(v);

// can be accessed within the function

function f() {
  var b = "Hello"; // It can be accessible anywhere
  console.log(b); // within this function
}
f();

// console.log(b);      // B cannot be accessible
//because outside of function

// ------------------------------------------------------------------------------------------------//

//let
let b = 10;
console.log(b);

// let b = "i cannot b re-declared";
// console.log(b);

b = "i can be reassigned";

console.log(b);

//global scope
let c = 10;
if (c == 10) {
  let i = "hi";
  console.log(c);
}
// console.log(i);

//-------------------------------------------------------------------------------------------------//

//const
const k = 3.14;
console.log(k);

// const k = "cannot be reassign nor re-declared"

//------------------------------------------------------------------------------------------------//
