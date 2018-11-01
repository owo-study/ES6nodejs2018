const myModule = require("./exports_keyword.js");
console.log( `i'm ${myModule.moVar1} & ${myModule.moVar2} & ${myModule.moVar3} & ${myModule.moVar4}` );
console.log( myModule.moFunc1() , myModule.moFunc2() );
