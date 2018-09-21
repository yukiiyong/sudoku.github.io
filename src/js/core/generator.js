/*
* @Author: yuki
* @Date:   2018-02-27 23:59:27
* @Last Modified by:   yuki
* @Last Modified time: 2018-03-02 15:08:46
*/
const Toolkit = require('./toolkit.js')

class Generator {
	generate() {
		while(!this.internalGenerate()) {
		}
	}

	internalGenerate() {
		this.martix = Toolkit.martix.makeMartix()
		//生成一个数字顺序排列的方阵，然后每一行数字打乱顺序
		this.orders = Toolkit.martix.makeMartix()
						.map(row => row.map((v, i) => i))
						.map(row => Toolkit.martix.shuffle(row))
		for(let i = 1; i <=9; i++){
			//先对每一行填完数字，然后再继续填下一个数字
			if(!this.fillNum(i)) {
				return false
			}
		}
		return true
	}

	fillNum(n) {
		//填充数字n 第二个参数是行序号
		return this.fillRow(n, 0) 
	}

	fillRow(n, rowIndex) {
		if(rowIndex > 8) {
			//填完宫格标识
			return true
		}

		//取行
		const rows = this.martix[rowIndex]
		const order = this.orders[rowIndex]

		for(let i = 0; i < 9; i++) {
			//取列数
			const colIndex = order[i]

			if(rows[colIndex]) {
				continue
			}

			if(!Toolkit.martix.checkFillable(this.martix, n, rowIndex, colIndex)) {
				continue
			}

			rows[colIndex] = n
			//填完则进行下一行判断
			if(!this.fillRow(n, rowIndex + 1)) {
				rows[colIndex] = 0 
				continue
			}
			return true 
		}
		return false
	}

}

module.exports = Generator
