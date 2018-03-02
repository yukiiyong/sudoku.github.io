/*
* @Author: yuki
* @Date:   2018-02-28 01:50:09
* @Last Modified by:   yuki
* @Last Modified time: 2018-03-02 15:45:50
*/
const Toolkit = require('../core/toolkit.js')
const Generator = require('../core/generator.js')
const Sudoku = require('../core/sudoku.js')
const Checker = require('../core/checker.js')

class Grid {
	constructor(container) {
		this._$container = container
	}

	build(level) {
		const sudoku = new Sudoku()
		sudoku.make(level)
		const martix = sudoku.puzzleMartix

		const rowGroupClasses = ["row_g_top", "row_g_middle", "row_g_bottom"]
		const colGroupClasses = ["col_g_left", "col_g_center", "col_g_right"]

		const $cells = martix.map(rowValues => rowValues.map((cellValue, colIndex) => {
			return $("<span>")
					.addClass(colGroupClasses[colIndex % 3])
					.addClass(cellValue ? "fixed":"empty")
					.text(cellValue)
		}))

		const $divArray = $cells.map(($spanArray, rowIndex) => {
			return $("<div>")
					  .addClass("row")
					  .addClass(rowGroupClasses[rowIndex % 3])
					  .append($spanArray)
		})
		this._$container.append($divArray)
	}

	layout() { //布局，设置宽高
		const width = $("span:first",this._$container).width()
		$("span", this._$container)
					.height(width)
					.css({
						"line-height": `${width}px`,
						"font-size": width < 32 ? `${width / 2}px`:''
					})

	}

	bindPopup(popupNumber) {
		//使用事件代理，因为span可能没有，但container一直存在
		this._$container.on("click","span",e => {
			const $cells = $(e.target)
			if($cells.hasClass("fixed")) {
				return 
			}
			popupNumber.popup($cells)
		})
	}

	check() {
		const $rows = this._$container.children()
		const data = $rows.map((rowIndex, div) => {
			return $(div).children().map((colIndex, span) => parseInt($(span).text()))
		}).toArray()
		.map($data => $data.toArray())

		const checker = new Checker(data)
		if(checker.check()) {
			return true
		}
		const marks = checker.martixMarks
		this._$container.children()
					.each((rowIndex, div) => {
						$(div).children().each((colIndex, span) => {
							const $span = $(span)
							if($span.is(".fixed") || marks[rowIndex][colIndex]) {
								$span.removeClass("error")
							} else {
								$span.addClass("error")
							}
						})
					})
	}
	//重置一开始的状态
	reset() {
		this._$container.find("span:not(.fixed)")
				.removeClass("error mark1 mark2")
				.text(0)
				.addClass("empty")
	}
	clear() {
		this._$container.find("span.error").removeClass("error")
	}

	rebuild(level) {
		this._$container.empty()
		this.build(level)
		this.layout()
	}
}
module.exports = Grid