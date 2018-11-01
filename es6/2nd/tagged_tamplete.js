function myTag(strings, a, b) {
	let x = a;
	let y = b;
	let str1 = strings[0];
	let str2 = strings[1];
	console.log( str1 + x + str2 + y ); 
}
let x = 30;
let y = 28;

myTag`x=${ x }, y=${ y }`;