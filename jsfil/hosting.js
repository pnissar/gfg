console.log(o);
var o = 4;
var v = () => {
  console.log("hello");
};
v();
v = "we";
console.log(v);
// Call back
const add = (a, b) => a + b;
const op = (a, r, add) => console.log(add(a, r));
op(1, 2, add);
// Hof
const v1 = () => {
  let ab = 5;
  return function () {
    return "nkero";
  };
};
console.log(v1()());
const v2 = () => {
  let ab = 5;
 return ()=> {
    return "nkero";
  };
};
console.log(v2()());
const v3 = () => {
  let ab = 5;
  return function () {
 console.log("helsijiei");
  };
};
v3()()