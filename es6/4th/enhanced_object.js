const number = 34;
function randInt(x=100) {
    return Math.round( Math.random()*x + 1 );
}

let obj = {
    number, 
    // number: number,

    say(...param) {
        console.log( param.length );
    },
    // say: function(param) {
    //     console.log( param );
    // }

    [ `int${ randInt() }value` ] : "hello"
};

console.log( obj );
