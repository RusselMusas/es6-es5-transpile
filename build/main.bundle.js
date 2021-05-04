/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
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

document.getElementById('calcBtn').addEventListener('click', function () {
  var principal = document.getElementById("principal").value;
  var years = document.getElementById("years").value;
  var rate = document.getElementById("rate").value;
  var mortgage = new Mortgage(principal, years, rate);
  document.getElementById("monthlyPayment").innerHTML = mortgage.monthlyPayment.toFixed(2);
  document.getElementById("monthlyRate").innerHTML = (rate / 12).toFixed(2);
  var html = "";
  mortgage.amortization.forEach(function (year, index) {
    return html += "\n        <tr>\n            <td>".concat(index + 1, "</td>\n            <td class=\"currency\">").concat(Math.round(year.principalY), "</td>\n            <td class=\"stretch\">\n                <div class=\"flex\">\n                    <div class=\"bar principal\"\n                         style=\"flex:").concat(year.principalY, ";-webkit-flex:").concat(year.principalY, "\">\n                    </div>\n                    <div class=\"bar interest\"\n                         style=\"flex:").concat(year.interestY, ";-webkit-flex:").concat(year.interestY, "\">\n                    </div>\n                </div>\n            </td>\n            <td class=\"currency left\">").concat(Math.round(year.interestY), "</td>\n            <td class=\"currency\">").concat(Math.round(year.balance), "</td>\n        </tr>\n    ");
  });
  document.getElementById("amortization").innerHTML = html;
});
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map