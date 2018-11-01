let moduleVariable = 10;
let moduleFunction = function() {
	return "hello module";
};
// export moduleVariable;
exports.mv = moduleVariable;
// export moduleFunction;
exports.mf = moduleFunction;