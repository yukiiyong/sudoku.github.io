class PopupNumber {
	constructor($panel) {
		//$panel 是弹出面板的容器
		this._$panel = $panel.hide().removeClass("hidden")

		this._$panel.on("click", "span", e => {
			//span是弹出面板的格子，cell是九宫格的格子
			const $cell = this._$targetCell
			const $span = $(e.target)

			if($span.hasClass("mark1")) {
				if($cell.hasClass("mark1")) {
					$cell.removeClass("mark1")
				} else {
					$cell.removeClass("mark2")
					$cell.addClass("mark1")
				}
				this._$panel.hide()
				return
			}

			if($span.hasClass("mark2")) {
				if($cell.hasClass("mark2")) {
					$cell.removeClass("mark2")
				} else {
					$cell.removeClass("mark1")
					$cell.addClass("mark2")
				}
				this._$panel.hide()
				return 
			}

			if($span.hasClass("empty")) {
				$cell.text(0)
					.addClass("empty")
					.removeClass("mark1")
					.removeClass("mark2")
				this._$panel.hide()
				return
			}

			$cell.text($span.text()).removeClass("empty")

			this._$panel.hide()
		})
	}

	popup($cell) {
		this._$targetCell = $cell
		const {left, top} = $cell.position()
		this._$panel.css({
			left: left>($(document.body).width()*0.625) ? `${left-125}px`:`${left}px`,
			top: `${top}px`
		}).show()
	}
}

module.exports = PopupNumber