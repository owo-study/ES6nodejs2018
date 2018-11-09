const sym = Symbol("심볼 속성");
let obj = {
    number : 1 ,
    [ "prop" + 1 ] : false,
    [sym] : "안녕 심볼"
};
console.log(obj);
for (const key in obj){
    console.log( obj[key] );
}
console.log( JSON.stringify(obj) );
