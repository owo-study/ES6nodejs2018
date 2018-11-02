const sym1 = Symbol("foo");
const sym2 = Symbol("foo");

let obj = {};
obj[sym1] = "foo";
obj[sym2] = "foo";

console.log(obj);

console.log("hello " + sym1);
