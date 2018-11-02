// 변수 호이스트
console.log(hoistVariable);
var hoistVariable = "hoist Variable";

// 함수 호이스트
hoistFunc();
function hoistFunc(){
    console.log('hoist Function!');
}
