/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/mortgage2.js":
/*!*************************!*\
  !*** ./js/mortgage2.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mortgage": function() { return /* binding */ Mortgage; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Mortgage = /*#__PURE__*/function () {
  function Mortgage(principal, years, rate) {
    _classCallCheck(this, Mortgage);

    this.principal = principal;
    this.years = years;
    this.rate = rate;
  }

  _createClass(Mortgage, [{
    key: "monthlyPayment",
    get: function get() {
      var monthlyRate = this.rate / 100 / 12;
      return this.principal * monthlyRate / (1 - Math.pow(1 / (1 + monthlyRate), this.years * 12));
    }
  }, {
    key: "amortization",
    get: function get() {
      var monthlyPayment = this.monthlyPayment;
      var monthlyRate = this.rate / 100 / 12;
      var balance = this.principal;
      var amortization = [];

      for (var y = 0; y < this.years; y++) {
        var interestY = 0;
        var principalY = 0;

        for (var m = 0; m < 12; m++) {
          var interestM = balance * monthlyRate;
          var principalM = monthlyPayment - interestM;
          interestY = interestY + interestM;
          principalY = principalY + principalM;
          balance = balance - principalM;
        }

        amortization.push({
          principalY: principalY,
          interestY: interestY,
          balance: balance
        });
      }

      return amortization;
    }
  }]);

  return Mortgage;
}();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mortgage2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mortgage2 */ "./js/mortgage2.js");

document.getElementById('calcBtn').addEventListener('click', function () {
  var principal = document.getElementById("principal").value;
  var years = document.getElementById("years").value;
  var rate = document.getElementById("rate").value;
  var mortgage = new _mortgage2__WEBPACK_IMPORTED_MODULE_0__.Mortgage(principal, years, rate);
  document.getElementById("monthlyPayment").innerHTML = mortgage.monthlyPayment.toFixed(2);
  document.getElementById("monthlyRate").innerHTML = (rate / 12).toFixed(2);
  var html = "";
  mortgage.amortization.forEach(function (year, index) {
    return html += "\n        <tr>\n            <td>".concat(index + 1, "</td>\n            <td class=\"currency\">").concat(Math.round(year.principalY), "</td>\n            <td class=\"stretch\">\n                <div class=\"flex\">\n                    <div class=\"bar principal\"\n                         style=\"flex:").concat(year.principalY, ";-webkit-flex:").concat(year.principalY, "\">\n                    </div>\n                    <div class=\"bar interest\"\n                         style=\"flex:").concat(year.interestY, ";-webkit-flex:").concat(year.interestY, "\">\n                    </div>\n                </div>\n            </td>\n            <td class=\"currency left\">").concat(Math.round(year.interestY), "</td>\n            <td class=\"currency\">").concat(Math.round(year.balance), "</td>\n        </tr>\n    ");
  });
  document.getElementById("amortization").innerHTML = html;
});
}();
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map