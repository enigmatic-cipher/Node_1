//Sum of Number

class Func {
	constructor (a, b) {
		this.a = a
		this.b = b
	}
	getSum() {
		return this.a + this.b
	}
}

let x = new Func (1, 2);
console.log(x.getSum())
