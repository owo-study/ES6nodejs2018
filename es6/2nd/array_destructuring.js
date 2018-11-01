const someArray = [1, 2, 3, 4, 5, 6];
let [one, two, ...numbers] = someArray;
console.log(one, two, numbers.length);

let [a, b, c=10] = [1,2];
console.log(a, b, c);

let [x, , , y] = [1, 2, 3, 4];
console.log(x, y);

let first = 1;
let second = 2;
console.log(first, second);
[first, second] = [second, first];
console.log(first, second);
