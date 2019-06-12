class Fraction {
	constructor(dec) {

	}

	html() {
		return `<sup>1</sup><sub>2</sub>`;
	}

	nums() {
		return [1, [1, 2]];
	}
}
module.exports = Fraction;

convert(1.25)

function convert(dec) {
	let array = [];
	array.push(Number(dec.toFixed(0)));
	let firstNum = array[0];
	let val = dec - firstNum;

	for (let x in val) {

	}
	console.log(dec)
	let regex = /\.\d*/

	array.push(reduce(100, 25))
	console.log(array);
	
}

function reduce(over, under) {
	let array = [];
	for (let x = 0; x < over; x++) {
		if (over % x === 0 && under % x === 0) {
			array.push(x);
		}
	}
	let newArray = []
	let arrayVal = array.pop();
	under = under / arrayVal;
	over = over / arrayVal;
	newArray.push(under);
	newArray.push(over);
	

	return newArray;
}