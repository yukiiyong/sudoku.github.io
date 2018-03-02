const Grid = require('./ui/grid.js')
const PopupNumbers = require('./ui/popupNumber.js')

const grid = new Grid($('#container'))


$("#submit").click(() => {
	$("#container").empty()
	let level = $("#level").val()
	grid.build(level)
	grid.layout()
})

const popupNumbers = new PopupNumbers($("#popupNumbers"))
grid.bindPopup(popupNumbers)

$("#check").on("click", e => {
	if(grid.check()) {
		alert("success")
	}
})

$("#reset").on("click", e => {
	grid.reset()
})

$("#clear").on("click", e => {
	grid.clear() 
})

$("#rebuild").on("click", e => {
	grid.rebuild($("#level").val())
})

console.log("gulp watch")