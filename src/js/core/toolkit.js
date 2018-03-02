const martixToolkit = {
	shuffle(array) {
		const endIndex = array.length - 2
		for(let i = 0; i <= endIndex; i++) {
			const j = i + Math.floor(Math.random() * (array.length - i))
			let t = array[i]
    		array[i] = array[j]
    		array[j] = t
			//[array[i], array[j]] = [array[j], array[i]]
		}
		return array
	},
	makeRow(v = 0) {
		const array = new Array(9)
		array.fill(v)
		return array
	},
	makeMartix(v = 0) {
		return Array.from({length: 9})
			 .map(() => this.makeRow(v))
		// return Array.from({length: 9},() => {makeRow(v)})

	},
	//检查某个格子是否存在数值n，存在则返回false
	checkFillable(martix, n, rowIndex, colIndex) {
		const row = martix[rowIndex]
		const column = this.makeRow().map((v, index) => martix[index][colIndex])
		const {boxIndex} = boxToolkit.convertToBoxIndex(rowIndex, colIndex)
		const box = boxToolkit.getBoxCells(martix, boxIndex)
		for(let i = 0; i < 9; i++) {
			if(row[i] === n || column[i] === n || box[i] === n) {
				return false
			}
		}
		return true
	}
}

const boxToolkit = {
	convertToBoxIndex(rowIndex, colIndex) {
		return {
			boxIndex: Math.floor(rowIndex / 3) * 3 + Math.floor(colIndex / 3),
			cellIndex: rowIndex % 3 * 3 + colIndex % 3
		}
	},

	convertFromBoxIndex(boxIndex, cellIndex) {
		return {
			rowIndex: Math.floor(boxIndex / 3) * 3  + Math.floor(cellIndex / 3),
			colIndex: boxIndex % 3 * 3+ cellIndex % 3
		}
	},

	getBoxCells(martix, boxIndex) {
		const startRowIndex = Math.floor(boxIndex / 3) * 3
		const startColIndex = boxIndex % 3 * 3
		const result = []
		for(let cellIndex = 0; cellIndex < 9; cellIndex++) {
			const rowIndex = startRowIndex + Math.floor(cellIndex / 3)
			const colIndex = startColIndex + cellIndex % 3
			result.push(martix[rowIndex][colIndex])
		}
		return result
	}
}
module.exports = class toolkit {
	static get martix() {
		return martixToolkit
	}

	static get box() {
		return boxToolkit
	}
}