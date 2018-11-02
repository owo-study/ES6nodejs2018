function someFunc() {
    // ...
    setTimeout(function(){
        console.log( this );
    }, 1000);
}
