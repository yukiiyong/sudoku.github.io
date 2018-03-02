/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var martixToolkit = {
  shuffle: function shuffle(array) {
    var endIndex = array.length - 2;

    for (var i = 0; i <= endIndex; i++) {
      var j = i + Math.floor(Math.random() * (array.length - i));
      var t = array[i];
      array[i] = array[j];
      array[j] = t; //[array[i], array[j]] = [array[j], array[i]]
    }

    return array;
  },
  makeRow: function makeRow() {
    var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var array = new Array(9);
    array.fill(v);
    return array;
  },
  makeMartix: function makeMartix() {
    var _this = this;

    var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return Array.from({
      length: 9
    }).map(function () {
      return _this.makeRow(v);
    }); // return Array.from({length: 9},() => {makeRow(v)})
  },
  //检查某个格子是否存在数值n，存在则返回false
  checkFillable: function checkFillable(martix, n, rowIndex, colIndex) {
    var row = martix[rowIndex];
    var column = this.makeRow().map(function (v, index) {
      return martix[index][colIndex];
    });

    var _boxToolkit$convertTo = boxToolkit.convertToBoxIndex(rowIndex, colIndex),
        boxIndex = _boxToolkit$convertTo.boxIndex;

    var box = boxToolkit.getBoxCells(martix, boxIndex);

    for (var i = 0; i < 9; i++) {
      if (row[i] === n || column[i] === n || box[i] === n) {
        return false;
      }
    }

    return true;
  }
};
var boxToolkit = {
  convertToBoxIndex: function convertToBoxIndex(rowIndex, colIndex) {
    return {
      boxIndex: Math.floor(rowIndex / 3) * 3 + Math.floor(colIndex / 3),
      cellIndex: rowIndex % 3 * 3 + colIndex % 3
    };
  },
  convertFromBoxIndex: function convertFromBoxIndex(boxIndex, cellIndex) {
    return {
      rowIndex: Math.floor(boxIndex / 3) * 3 + Math.floor(cellIndex / 3),
      colIndex: boxIndex % 3 * 3 + cellIndex % 3
    };
  },
  getBoxCells: function getBoxCells(martix, boxIndex) {
    var startRowIndex = Math.floor(boxIndex / 3) * 3;
    var startColIndex = boxIndex % 3 * 3;
    var result = [];

    for (var cellIndex = 0; cellIndex < 9; cellIndex++) {
      var rowIndex = startRowIndex + Math.floor(cellIndex / 3);
      var colIndex = startColIndex + cellIndex % 3;
      result.push(martix[rowIndex][colIndex]);
    }

    return result;
  }
};

module.exports =
/*#__PURE__*/
function () {
  function toolkit() {
    _classCallCheck(this, toolkit);
  }

  _createClass(toolkit, null, [{
    key: "martix",
    get: function get() {
      return martixToolkit;
    }
  }, {
    key: "box",
    get: function get() {
      return boxToolkit;
    }
  }]);

  return toolkit;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
* @Author: yuki
* @Date:   2018-02-27 23:59:27
* @Last Modified by:   yuki
* @Last Modified time: 2018-03-02 15:08:46
*/
var Toolkit = __webpack_require__(0);

var Generator =
/*#__PURE__*/
function () {
  function Generator() {
    _classCallCheck(this, Generator);
  }

  _createClass(Generator, [{
    key: "generate",
    value: function generate() {
      while (!this.internalGenerate()) {}
    }
  }, {
    key: "internalGenerate",
    value: function internalGenerate() {
      this.martix = Toolkit.martix.makeMartix();
      this.orders = Toolkit.martix.makeMartix().map(function (row) {
        return row.map(function (v, i) {
          return i;
        });
      }).map(function (row) {
        return Toolkit.martix.shuffle(row);
      });

      for (var i = 1; i <= 9; i++) {
        //先对每一行填完数字，然后再继续填下一个数字
        if (!this.fillNum(i)) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "fillNum",
    value: function fillNum(n) {
      return this.fillRow(n, 0);
    }
  }, {
    key: "fillRow",
    value: function fillRow(n, rowIndex) {
      if (rowIndex > 8) {
        //填完宫格标识
        return true;
      } //取行


      var rows = this.martix[rowIndex];
      var order = this.orders[rowIndex];

      for (var i = 0; i < 9; i++) {
        var colIndex = order[i];

        if (rows[colIndex]) {
          continue;
        }

        if (!Toolkit.martix.checkFillable(this.martix, n, rowIndex, colIndex)) {
          continue;
        }

        rows[colIndex] = n;

        if (!this.fillRow(n, rowIndex + 1)) {
          rows[colIndex] = 0;
          continue;
        }

        return true;
      }

      return false;
    }
  }]);

  return Generator;
}();

module.exports = Generator;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Grid = __webpack_require__(3);

var PopupNumbers = __webpack_require__(6);

var grid = new Grid($('#container'));
$("#submit").click(function () {
  $("#container").empty();
  var level = $("#level").val();
  grid.build(level);
  grid.layout();
});
var popupNumbers = new PopupNumbers($("#popupNumbers"));
grid.bindPopup(popupNumbers);
$("#check").on("click", function (e) {
  if (grid.check()) {
    alert("success");
  }
});
$("#reset").on("click", function (e) {
  grid.reset();
});
$("#clear").on("click", function (e) {
  grid.clear();
});
$("#rebuild").on("click", function (e) {
  grid.rebuild($("#level").val());
});
console.log("gulp watch");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
* @Author: yuki
* @Date:   2018-02-28 01:50:09
* @Last Modified by:   yuki
* @Last Modified time: 2018-03-02 15:45:50
*/
var Toolkit = __webpack_require__(0);

var Generator = __webpack_require__(1);

var Sudoku = __webpack_require__(4);

var Checker = __webpack_require__(5);

var Grid =
/*#__PURE__*/
function () {
  function Grid(container) {
    _classCallCheck(this, Grid);

    this._$container = container;
  }

  _createClass(Grid, [{
    key: "build",
    value: function build(level) {
      var sudoku = new Sudoku();
      sudoku.make(level);
      var martix = sudoku.puzzleMartix;
      var rowGroupClasses = ["row_g_top", "row_g_middle", "row_g_bottom"];
      var colGroupClasses = ["col_g_left", "col_g_center", "col_g_right"];
      var $cells = martix.map(function (rowValues) {
        return rowValues.map(function (cellValue, colIndex) {
          return $("<span>").addClass(colGroupClasses[colIndex % 3]).addClass(cellValue ? "fixed" : "empty").text(cellValue);
        });
      });
      var $divArray = $cells.map(function ($spanArray, rowIndex) {
        return $("<div>").addClass("row").addClass(rowGroupClasses[rowIndex % 3]).append($spanArray);
      });

      this._$container.append($divArray);
    }
  }, {
    key: "layout",
    value: function layout() {
      //布局，设置宽高
      var width = $("span:first", this._$container).width();
      $("span", this._$container).height(width).css({
        "line-height": "".concat(width, "px"),
        "font-size": width < 32 ? "".concat(width / 2, "px") : ''
      });
    }
  }, {
    key: "bindPopup",
    value: function bindPopup(popupNumber) {
      //使用事件代理，因为span可能没有，但container一直存在
      this._$container.on("click", "span", function (e) {
        var $cells = $(e.target);

        if ($cells.hasClass("fixed")) {
          return;
        }

        popupNumber.popup($cells);
      });
    }
  }, {
    key: "check",
    value: function check() {
      var $rows = this._$container.children();

      var data = $rows.map(function (rowIndex, div) {
        return $(div).children().map(function (colIndex, span) {
          return parseInt($(span).text());
        });
      }).toArray().map(function ($data) {
        return $data.toArray();
      });
      var checker = new Checker(data);

      if (checker.check()) {
        return true;
      }

      var marks = checker.martixMarks;

      this._$container.children().each(function (rowIndex, div) {
        $(div).children().each(function (colIndex, span) {
          var $span = $(span);

          if ($span.is(".fixed") || marks[rowIndex][colIndex]) {
            $span.removeClass("error");
          } else {
            $span.addClass("error");
          }
        });
      });
    } //重置一开始的状态

  }, {
    key: "reset",
    value: function reset() {
      this._$container.find("span:not(.fixed)").removeClass("error mark1 mark2").text(0).addClass("empty");
    }
  }, {
    key: "clear",
    value: function clear() {
      this._$container.find("span.error").removeClass("error");
    }
  }, {
    key: "rebuild",
    value: function rebuild(level) {
      this._$container.empty();

      this.build(level);
      this.layout();
    }
  }]);

  return Grid;
}();

module.exports = Grid;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
* @Author: yuki
* @Date:   2018-02-28 01:42:27
* @Last Modified by:   yuki
* @Last Modified time: 2018-03-02 13:42:30
*/
var Generator = __webpack_require__(1);

var Sudoku =
/*#__PURE__*/
function () {
  function Sudoku() {
    _classCallCheck(this, Sudoku);

    var generator = new Generator();
    generator.generate();
    this._solutionMartix = generator.martix;
  }

  _createClass(Sudoku, [{
    key: "make",
    value: function make() {
      var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
      this.puzzleMartix = this._solutionMartix.map(function (row) {
        return row.map(function (cell) {
          return Math.random() * 9 < level ? 0 : cell;
        });
      });
    }
  }]);

  return Sudoku;
}();

module.exports = Sudoku;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Toolkit = __webpack_require__(0);

var Generator = __webpack_require__(1);

function checkArray(array) {
  //检查数组，如果数组中存在0或者重复数字，该位置置为false
  var length = array.length;
  var marks = new Array(length);
  marks.fill(true);

  for (var i = 0; i < length; i++) {
    //先检查mark数组中对应的元素是否为false，是则跳过，再检查数组元素是否有效，无效跳过
    //再向后检查数组是否重读
    if (!marks[i]) {
      continue;
    }

    var v = array[i];

    if (!v) {
      marks[i] = false;
      continue;
    }

    for (var n = i + 1; n < length; n++) {
      if (array[n] === v) {
        marks[i] = marks[n] = false;
      }
    }
  }

  return marks;
} //输入9*9 二维数组，对martix 进行检查，检查是否成功以及marks


var Checker =
/*#__PURE__*/
function () {
  function Checker(martix) {
    _classCallCheck(this, Checker);

    this._martix = martix;
    this._martixMarks = Toolkit.martix.makeMartix(true);
  }

  _createClass(Checker, [{
    key: "check",
    value: function check() {
      this.checkRows();
      this.checkCols();
      this.checkBoxes();
      this._success = this._martixMarks.every(function (row) {
        return row.every(function (mark) {
          return mark;
        });
      });
      return this._success;
    }
  }, {
    key: "checkRows",
    value: function checkRows() {
      for (var rowIndex = 0; rowIndex < 9; rowIndex++) {
        var row = this._martix[rowIndex];
        var marks = checkArray(row);

        for (var _colIndex = 0; _colIndex < marks.length; _colIndex++) {
          if (!marks[_colIndex]) {
            this._martixMarks[rowIndex][_colIndex] = false;
          }
        }
      }
    }
  }, {
    key: "checkCols",
    value: function checkCols() {
      for (colIndex = 0; colIndex < 9; colIndex++) {
        var col = [];

        for (var rowIndex = 0; rowIndex < 9; rowIndex++) {
          col[rowIndex] = this._martix[rowIndex][colIndex];
        }

        var marks = checkArray(col);

        for (var _rowIndex = 0; _rowIndex < 9; _rowIndex++) {
          if (!marks[_rowIndex]) {
            this._martixMarks[_rowIndex][colIndex] = false;
          }
        }
      }
    }
  }, {
    key: "checkBoxes",
    value: function checkBoxes() {
      for (var boxIndex = 0; boxIndex < 9; boxIndex++) {
        var box = Toolkit.box.getBoxCells(this._martix, boxIndex);
        var marks = checkArray(box);

        for (var cellIndex = 0; cellIndex < 9; cellIndex++) {
          if (!marks[cellIndex]) {
            var _Toolkit$box$convertF = Toolkit.box.convertFromBoxIndex(boxIndex, cellIndex),
                rowIndex = _Toolkit$box$convertF.rowIndex,
                _colIndex2 = _Toolkit$box$convertF.colIndex;

            this._martixMarks[rowIndex][_colIndex2] = false;
          }
        }
      }
    }
  }, {
    key: "martixMarks",
    get: function get() {
      return this._martixMarks;
    }
  }, {
    key: "isSuccess",
    get: function get() {
      return this._success;
    }
  }]);

  return Checker;
}();

module.exports = Checker;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PopupNumber =
/*#__PURE__*/
function () {
  function PopupNumber($panel) {
    var _this = this;

    _classCallCheck(this, PopupNumber);

    //$panel 是弹出面板的容器
    this._$panel = $panel.hide().removeClass("hidden");

    this._$panel.on("click", "span", function (e) {
      //span是弹出面板的格子，cell是九宫格的格子
      var $cell = _this._$targetCell;
      var $span = $(e.target);

      if ($span.hasClass("mark1")) {
        if ($cell.hasClass("mark1")) {
          $cell.removeClass("mark1");
        } else {
          $cell.removeClass("mark2");
          $cell.addClass("mark1");
        }

        _this._$panel.hide();

        return;
      }

      if ($span.hasClass("mark2")) {
        if ($cell.hasClass("mark2")) {
          $cell.removeClass("mark2");
        } else {
          $cell.removeClass("mark1");
          $cell.addClass("mark2");
        }

        _this._$panel.hide();

        return;
      }

      if ($span.hasClass("empty")) {
        $cell.text(0).addClass("empty").removeClass("mark1").removeClass("mark2");

        _this._$panel.hide();

        return;
      }

      $cell.text($span.text()).removeClass("empty");

      _this._$panel.hide();
    });
  }

  _createClass(PopupNumber, [{
    key: "popup",
    value: function popup($cell) {
      this._$targetCell = $cell;

      var _$cell$position = $cell.position(),
          left = _$cell$position.left,
          top = _$cell$position.top;

      this._$panel.css({
        left: left > $(document.body).width() * 0.625 ? "".concat(left - 125, "px") : "".concat(left, "px"),
        top: "".concat(top, "px")
      }).show();
    }
  }]);

  return PopupNumber;
}();

module.exports = PopupNumber;

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map