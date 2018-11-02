function varDefined() {
    for(var i=0; i<5; i++){
        // ...
    }
    console.log("varDefine's i=", i);
}
varDefined();

function letDefined() {
    for(let i=0; i<5; i++){
        // ...
    }
    console.log("letDefined's i=", i); // error
}
letDefined();
