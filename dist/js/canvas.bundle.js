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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Wave.js":
/*!************************!*\
  !*** ./src/js/Wave.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Wave = function () {
    function Wave(c, config, width, height) {
        _classCallCheck(this, Wave);

        this.config = config;
        this.c = c;
        this.width = width;
        this.height = height;
        this.inc = this.config.frequency;
        this.math = this.config.definingFunctions;
    }

    _createClass(Wave, [{
        key: 'draw',
        value: function draw() {
            this.c.beginPath();

            if (this.config.hasOwnProperty('continuationPath') && this.config.continuationPath) {
                for (var i = this.width; i > 0; i--) {
                    this.c.lineTo(i, this.config.y + this.getFormula(i));
                }
            } else {
                for (var _i = 0; _i < this.width; _i++) {
                    this.c.lineTo(_i, this.config.y + this.getFormula(_i));
                }

                this.c.lineTo(this.width, 0);
                this.c.lineTo(0, 0);
            }

            this.fill();
            this.inc += this.config.frequency;
        }
    }, {
        key: 'fill',
        value: function fill() {
            this.createShadow(40, 10, 10, 'rgba(10,90,54,0.3)');
            this.createGradient();

            this.c.fill();
        }
    }, {
        key: 'createGradient',
        value: function createGradient() {
            var x0 = void 0,
                y0 = void 0,
                x1 = void 0,
                y1 = void 0;
            if (this.config.hasOwnProperty('gradientPath')) {
                x0 = this.config.gradientPath[0] * this.width;
                y0 = this.config.gradientPath[1] * this.height;
                x1 = this.config.gradientPath[2] * this.width;
                y1 = this.config.gradientPath[3] * this.height;
            } else {
                x0 = 0;y0 = 0;
                x1 = this.width;
                y1 = this.height;
            }

            var gr = this.c.createLinearGradient(x0, y0, x1, y1);

            gr.addColorStop(0, this.createColor(this.config.stops[0]));
            gr.addColorStop(0.25, this.createColor(this.config.stops[1]));
            gr.addColorStop(0.5, this.createColor(this.config.stops[2]));
            gr.addColorStop(1, this.createColor(this.config.stops[3]));

            this.c.fillStyle = gr;
        }
    }, {
        key: 'getFormula',
        value: function getFormula(i) {
            var config = _extends({}, this.config);

            var func = i * config.length;
            var funcByCurve = func / config.curveIndex;
            var curve = Math.sin(func + this.inc) / Math.PI * config.curveIndex * config.amplitude - config.lean;

            if (config.hasOwnProperty('useAdditionForDefiningFunctions') && config.useAdditionForDefiningFunctions) {
                return curve * this.math[0](funcByCurve) * this.math[1](funcByCurve + config.curveIndex2) + i / config.incline;
            }
            return curve * this.math[0](funcByCurve) * this.math[1](funcByCurve * config.curveIndex2) + i / config.incline;
        }
    }, {
        key: 'createColor',
        value: function createColor(colorObj) {
            var r = colorObj.r,
                g = colorObj.g,
                b = colorObj.b;

            return 'rgb(' + r + ', ' + (g + Math.sin(this.inc)) + ', ' + b + ')';
        }
    }, {
        key: 'createShadow',
        value: function createShadow(blur, offsetX, offsetY, color) {
            this.c.shadowBlur = blur;
            this.c.shadowOffsetX = offsetX;
            this.c.shadowOffsetY = offsetY;
            this.c.shadowColor = color;
        }
    }]);

    return Wave;
}();

exports.default = Wave;

/***/ }),

/***/ "./src/js/Waves.js":
/*!*************************!*\
  !*** ./src/js/Waves.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(/*! ./config */ "./src/js/config.js");

var _Wave = __webpack_require__(/*! ./Wave */ "./src/js/Wave.js");

var _Wave2 = _interopRequireDefault(_Wave);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Waves = function () {
    function Waves(canvas) {
        _classCallCheck(this, Waves);

        this.canvas = canvas;
        this.c = this.canvas.getContext('2d');
        this.applySettings();

        this.waves = this.createWaves();

        this.launch = this.launch.bind(this);
        this.launch();
    }

    _createClass(Waves, [{
        key: "launch",
        value: function launch() {
            requestAnimationFrame(this.launch);

            var x = _config.canvasConfig.x,
                y = _config.canvasConfig.y,
                deg = _config.canvasConfig.deg;


            this.canvas.style.transform = "translate(" + x + "px, " + y + "px) rotate(" + deg + "deg)";
            this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);

            for (var i = 0; i < this.waves.length; i++) {
                if (i === 3) {
                    this.waves[i].inc += this.waves[i].config.frequency;
                    break;
                }
                this.waves[i].draw();
                if (i === 2) {
                    this.waves[i + 1].draw();
                }
            }
        }
    }, {
        key: "createWaves",
        value: function createWaves() {
            var wavesArray = [];
            for (var i = 0; i < _config.waves.length; i++) {
                var wave = new _Wave2.default(this.c, _config.waves[i], this.canvas.width, this.canvas.height);
                wavesArray.push(wave);
            }
            return wavesArray;
        }
    }, {
        key: "applySettings",
        value: function applySettings() {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight + 100;
        }
    }]);

    return Waves;
}();

exports.default = Waves;

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Waves = __webpack_require__(/*! ./Waves */ "./src/js/Waves.js");

var _Waves2 = _interopRequireDefault(_Waves);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = document.getElementById('canvas'); // import Gradient from './Gradient';
// import GuiHelper from './gui';
// import { waves, canvasConfig } from './config';

var waves2 = new _Waves2.default(canvas);
// const c = canvas.getContext('2d');
//
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight + 100;
//
// let folders = GuiHelper.create(waves);
//
// let increments = [];
//
// for (let wave of waves) {
//     increments.push(wave.frequency);
// }
//
// // c.translate(canvas.width / 2, canvas.height / 2);
// // c.rotate(30 * Math.PI / 180);
// // c.translate(-210, -200);
// // c.translate(-canvas.width / 2, -canvas.height / 2,);
// // c.translate(340, -340);
//
// function animate() {
//     requestAnimationFrame(animate);
//     canvas.style.transform = `translate(${canvasConfig.x}px, ${canvasConfig.y}px) rotate(${canvasConfig.deg}deg)`;
//     c.clearRect(0, 0, canvas.width, canvas.height);
//
//     for (let j = 0; j < waves.length; j++) {
//         if (j === 3) {
//             increments[j] += waves[j].frequency;
//             break;
//         }
//         c.beginPath();
//         c.moveTo(0, canvas.height / 2);
//         for (let i = 0; i < canvas.width; i++) {
//             let func = i * waves[j].length;
//             let funcByCurve = func / waves[j].curveIndex;
//             let mainPattern = Math.sin(func + increments[j]) / Math.PI * waves[j].curveIndex * waves[j].amplitude - waves[j].lean;
//
//             // bottom wave
//             if (j === 0) {
//                 c.lineTo(i,
//                     waves[j].y + mainPattern * Math.cos(funcByCurve) * Math.cos(funcByCurve * waves[j].curveIndex2) + i / 3
//                     // waves[j].y + Math.sin(func) * waves[j].amplitude - i / waves[j].lean
//                 );
//             } else if (j === 1) { // middle wave
//                 c.lineTo(i,
//                     // waves[j].y + mainPattern * Math.sin(funcByCurve) * Math.sin(funcByCurve * waves[j].curveIndex2)
//                     // waves[j].y + Math.sin(func) * waves[j].amplitude - i / waves[j].lean
//                     waves[j].y + mainPattern * Math.cos(funcByCurve) * Math.sin(funcByCurve + waves[j].curveIndex2) + i / 5
//                     );
//             } else if (j === 2) { // top wave
//                 c.lineTo(i,
//                     // waves[j].y + mainPattern * Math.sin(funcByCurve) * Math.sin(funcByCurve * waves[j].curveIndex2)
//                     // waves[j].y + Math.sin(func) * waves[j].amplitude - i / waves[j].lean
//                     // waves[j].y + Math.sin(func+ increments[j]) / Math.PI * waves[j].curveIndex * waves[j].amplitude - waves[j].lean + i / 25
//                     waves[j].y + mainPattern * Math.sin(funcByCurve) * Math.cos(funcByCurve * waves[j].curveIndex2) + i / 25
//                 );
//             } else {
//                 c.lineTo(i,
//                     waves[j].y + mainPattern * Math.sin(funcByCurve) * Math.cos(funcByCurve * waves[j].curveIndex2)
//                 );
//             }
//         }
//         if (j === 2) {
//             for (let i = canvas.width; i > 0; i--) {
//                 let func = i * waves[j + 1].length;
//                 let funcByCurve = func / waves[j + 1].curveIndex;
//                 let mainPattern = Math.sin(func + increments[j + 1]) / Math.PI* waves[j + 1].curveIndex * waves[j + 1].amplitude - waves[j + 1].lean;
//                 c.lineTo(i,
//                     // waves[j + 1].y + mainPattern * Math.sin(funcByCurve) * Math.sin(funcByCurve * waves[j + 1].curveIndex2)
//                     waves[j + 1].y + mainPattern * Math.sin(funcByCurve) * Math.sin(funcByCurve * waves[j + 1].curveIndex2) + i / -20
//                 );
//             }
//         } else {
//             c.lineTo(canvas.width, 0);
//             c.lineTo(0, 0);
//             // c.shadowColor = 'transparent';
//         }
//         c.shadowBlur = 40;
//         c.shadowOffsetY = 10;
//         c.shadowOffsetX = 10;
//         c.shadowColor = 'rgba(10,90,54,0.3)';
//         // c.stroke();
//         let gr;
//         if (j === 0) {
//             gr = c.createLinearGradient(canvas.width / 2, 0 , canvas.width / 2, canvas.height);
//         } else if (j === 1) {
//             gr = c.createLinearGradient(0, canvas.height / 5, canvas.width, canvas.height * 3);
//         } else if (j === 2) {
//             gr = c.createLinearGradient(canvas.width , canvas.height / 10, canvas.width / 5, canvas.height );
//         } else {
//             gr = c.createLinearGradient(0, 0, canvas.width, canvas.height);
//         }
//         gr.addColorStop(0, `rgb(${waves[j].stops[0].r}, ${waves[j].stops[0].g + Math.sin(increments[j]) * 10}, ${waves[j].stops[0].b})`);
//         gr.addColorStop(0.25, `rgb(${waves[j].stops[1].r}, ${waves[j].stops[1].g + Math.sin(increments[j]) * 10}, ${waves[j].stops[1].b})`);
//         gr.addColorStop(0.5, `rgb(${waves[j].stops[2].r}, ${waves[j].stops[2].g + Math.sin(increments[j]) * 10}, ${waves[j].stops[2].b})`);
//         gr.addColorStop(1, `rgb(${waves[j].stops[3].r}, ${waves[j].stops[3].g + Math.sin(increments[j]) * 10}, ${waves[j].stops[3].b})`);
//         c.fillStyle = gr;
//         c.fill();
//         // gradients[1].updateStops();
//         // gradients[1].draw();
//
//         increments[j] += waves[j].frequency;
//     }
// }
// animate();

/***/ }),

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var waves = exports.waves = [{
    y: 282,
    length: 0.0018,
    amplitude: 2,
    frequency: 0.003,
    lean: 183,
    curveIndex: 6.2,
    curveIndex2: 12,
    incline: 3,
    stops: [{ r: 36, g: 127, b: 106 }, { r: 17, g: 122, b: 103 }, { r: 26, g: 167, b: 126 }, { r: 27, g: 122, b: 103 }],
    gradientPath: [0.5, 0, 0.5, 0],
    definingFunctions: [Math.cos, Math.cos]
}, {
    y: 560,
    length: 0.014,
    amplitude: 9.1,
    frequency: 0.0077,
    lean: 204,
    curveIndex: 5.7,
    curveIndex2: 2.25,
    incline: 5,
    stops: [{ r: 36, g: 132, b: 109 }, { r: 17, g: 117, b: 98 }, { r: 35, g: 164, b: 131 }, { r: 36, g: 189, b: 119 }],
    gradientPath: [0, 0.2, 1, 3],
    definingFunctions: [Math.cos, Math.sin],
    useAdditionForDefiningFunctions: true
}, {
    y: 582,
    length: 0.0041,
    amplitude: 5,
    frequency: 0.0041,
    lean: 64,
    curveIndex: 9,
    curveIndex2: 20,
    incline: 25,
    stops: [{ r: 60, g: 177, b: 143 }, { r: 60, g: 157, b: 133 }, { r: 36, g: 200, b: 160 }, { r: 35, g: 210, b: 168 }],
    gradientPath: [1, 0.1, 0.2, 1],
    definingFunctions: [Math.sin, Math.cos]
}, {
    y: 498,
    length: 0.006,
    amplitude: 2,
    frequency: 0.0172,
    lean: 58.8,
    curveIndex: 13,
    curveIndex2: 26.9,
    incline: -20,
    stops: [{ r: 36, g: 209, b: 166 }, { r: 27, g: 158, b: 125 }, { r: 102, g: 217, b: 188 }, { r: 14, g: 82, b: 65 }],
    definingFunctions: [Math.sin, Math.sin],
    continuationPath: true
}];

var canvasConfig = exports.canvasConfig = {
    x: 249,
    y: -401,
    deg: 21
};

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map