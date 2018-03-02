/*
* @Author: yuki
* @Date:   2018-02-28 01:42:27
* @Last Modified by:   yuki
* @Last Modified time: 2018-03-02 13:42:30
*/
const Generator = require('./generator.js')

class Sudoku {
	constructor() {
		const generator = new Generator()
		generator.generate()
		this._solutionMartix = generator.martix
	}

	make(level = 5) {
		this.puzzleMartix = this._solutionMartix.map(row => {
			return row.map(cell => Math.random() * 9 < level ? 0 : cell)
		})
	}
}

module.exports = Sudoku