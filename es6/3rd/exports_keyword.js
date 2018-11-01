// var exports = module.exports가 있다고 생각
const moduleVar1 = "hungry";
const moduleVar2 = "tired";
const moduleFunc1 = () => "save";
const moduleFunc2 = () => "me!";
module.exports.moVar1 = moduleVar1;
module.exports.moFunc1 = moduleFunc1;
exports.moVar2 = moduleVar2;
exports.moFunc2 = moduleFunc2;

console.log( module.exports === exports );
module.exports = {
	moVar1: moduleVar1,
	moVar2: moduleVar2,
	moFunc1: moduleFunc1,
	moFunc2: moduleFunc2
};
exports = { moVar4: "리터럴로 새로 오브젝트가 정의됨" };
console.log( module.exports === exports );

exports = module.exports; // recover?
exports.moVar3 = "cold";

// exports_keywod_import.js에서 import