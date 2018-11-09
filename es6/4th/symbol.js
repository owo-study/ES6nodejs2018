const sym = Symbol();
console.log( sym );
const sym2 = Symbol("심볼값이 아니라 설명");
console.log( sym2 );
console.log( Symbol("hi") == Symbol("hi") );
