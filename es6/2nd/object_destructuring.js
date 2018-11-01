const someObject = {
	numberProp: 200,
	booleanProp: true,
	stringProp: "어떤속성"
};
let {stringProp, a=10, b=20} = someObject;
console.log(stringProp, a, b);
// 다른 이름으로
let {stringProp: str, a:x=10, b:y=20} = someObject;
console.log(str, x, y);

