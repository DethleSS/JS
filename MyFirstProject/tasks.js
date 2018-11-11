let mylib = require("./mylib");

let tasks = [];
tasks.push(()=>{
	let arrtest = [];
	var b = 1;
	mylib.pushArray(arrtest, 10, (value)=>
	{
		b += 2;
		return b;
	})
	console.log(arrtest);
});


module.exports.tasks = tasks;