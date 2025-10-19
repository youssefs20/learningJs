'use strict';
/************23.Scoping*******************/
//#region Scoping

/*
function calcAge(birthyear) {
	const age = 2025 - birthyear;
	function printAge() {
		let output = `your are ${age}, born in ${birthyear}`;
		console.log(output);

		if (birthyear >= 1981 && birthyear <= 1996) {
			const str = `you're a millenial, ${firstname}`;
			console.log(str);

			function add(a, b) {
				return a + b; // undefined outside in strict mode
			}
		}
	}
	printAge();
	return age;
}
const firstname = "joe";
calcAge(2002);
*/

//#endregion Scoping

/****24.Hoisting*******/

//#region Hoisting

/*  

console.log(me);
console.log(job);
console.log(year);

var me= "joe";
let job = "swe";
const year = 1991; 


console.log(addDec1(1, 2));

function addDec1(a, b) {
	return a + b;
}
const addExpr = function (a, b) {
	return a + b;
};
const addArrow = (a, b) => a + b;



console.log(this); // global (window)

const calcAge = function (birthyear) {
    console.log(2025 - birthyear);
    console.log(this); //undefined
};
console.log(2002);

const calcAgeArrow = birthyear => {
    console.log(2025 - birthyear);
    console.log(this);
};
calcAgeArrow(2002); // window
*/

//#endregion

/*******25.Regular vs arrow functions***********/

//#region regular and arrow

/*  
const joe = {
    fName: 'joe',
    year: 2002,
    calcAge: function () {
        console.log(this);
        console.log(2025 - this.year);
    },

    greet: () => console.log(`hey ${this.fName}`),
};
jonas.greet();
//Hey undefined
*/
//#endregion

/********26.Primitive types vs Objects****************/

//#region primitive and objects

/*  
// primitive
let lName = 'sameh';
let oldlName = lName;
lName = 'mohamed';
console.log(lName, oldlName);
// reference
const jess = {
    fName: 'yasmin',
    lName: 'tarek',
    age: 23,
};

const marriedjess = jess;
marriedjess.lName = 'sameh';
console.log('before marriage:', jess);
console.log('after', marriedjess);

console.log('----------------------');

const jess2 = {
    fName: 'yasmin',
    lName: 'tarek',
    age: 23,
    fam: ['yara', 'lol'],
};
const jessCopy = Object.assign({}, jess2);
jessCopy.lName = 'goodman';


jessCopy.fam.push('mary');
jessCopy.fam.push('john');

console.log('before marriage:', jess2);
console.log('after', jessCopy);

*/
//#endregion
