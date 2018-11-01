let libFunc =
    require("./destructuring_export.js").moduleFunc;
console.log( libFunc() );
let { moduleFunc:mf, moduleVar2:mv } =
    require("./destructuring_export.js");
console.log( mf() );
console.log( mv );