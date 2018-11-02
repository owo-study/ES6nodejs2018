const arr = ["a", "b", "c"];
const obj = { a:1, b:2, c:3 };

for (const key in arr) {
	console.log(key, arr[key]);
}
for (const key in obj) {
	console.log(key, obj[key]);
}

