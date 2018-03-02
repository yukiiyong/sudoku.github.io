const Toolkit = require('./toolkit.js')
const Generator = require('./generator.js')

function checkArray(array) {
	//检查数组，如果数组中存在0或者重复数字，该位置置为false

	const length = array.length
	const marks = new Array(length)

	marks.fill(true)

	for(let i = 0; i < length; i ++) {
	//先检查mark数组中对应的元素是否为false，是则跳过，再检查数组元素是否有效，无效跳过
	//再向后检查数组是否重读
		if(!marks[i]) {
			continue
		}
		let v = array[i]
		if(!v) {
			marks[i] = false
			continue
		}

		for(let n = i + 1; n < length; n++) {
			if(array[n] === v) {
				marks[i] = marks[n] = false			
			}
		}
	}

	return marks
}
//输入9*9 二维数组，对martix 进行检查，检查是否成功以及marks
class Checker {
	constructor(martix) {
		this._martix = martix
		this._martixMarks = Toolkit.martix.makeMartix(true)
	}
	get martixMarks() {
		return this._martixMarks
	}
	get isSuccess() {
		return this._success
	}
	check() {
		this.checkRows()
		this.checkCols()
		this.checkBoxes()

		this._success = this._martixMarks.every(row => row.every(mark => mark))
		return this._success
	}
	checkRows() {
		for(let rowIndex = 0; rowIndex < 9; rowIndex++) {
			const row = this._martix[rowIndex]
			const marks = checkArray(row)

			for(let colIndex = 0; colIndex < marks.length; colIndex++){
				if(!marks[colIndex]) {
					this._martixMarks[rowIndex][colIndex] = false
				}
			}
		}
	}
	checkCols() {
		for(colIndex = 0; colIndex < 9; colIndex++) {
			const col = []
			for(let rowIndex = 0; rowIndex < 9; rowIndex++) {
				col[rowIndex] =this._martix[rowIndex][colIndex]
			}

			const marks = checkArray(col)

			for(let rowIndex = 0; rowIndex < 9; rowIndex++) {
				if(!marks[rowIndex]) {
					this._martixMarks[rowIndex][colIndex] = false
				}
			}
		}
	}

	checkBoxes() {
		for(let boxIndex = 0; boxIndex < 9; boxIndex++) {
			const box = Toolkit.box.getBoxCells(this._martix, boxIndex)
			const marks = checkArray(box)

			for(let cellIndex = 0; cellIndex < 9; cellIndex++ ) {
				if(!marks[cellIndex]) {
					const {rowIndex, colIndex} = Toolkit.box.convertFromBoxIndex(boxIndex, cellIndex)
					this._martixMarks[rowIndex][colIndex] = false
				}
			}
		}
	}
}

module.exports = Checker