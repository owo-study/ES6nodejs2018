function randInt(x=100) {
    return Math.round( Math.random()*x + 1 );
}
let myFirstPromise = new Promise( (resolve, reject) => {  
    // 시간이 걸리는 비동기 작업인걸로 칩시다...
    setTimeout( () => { 
        const randNo = randInt();
        if ( randNo%2 == 1 ){ // 홀수가 나오면 성공
            resolve("성공!");
        }else{
            reject("오류!");
        }
    }, 1000 ); 
});

myFirstPromise.then( (message) => {
    console.log(message);
}).catch( (err)=>{
    console.log(err);
});