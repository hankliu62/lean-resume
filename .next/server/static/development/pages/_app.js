module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Carousel/index.js":
/*!**************************************!*\
  !*** ./components/Carousel/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomCarousel; });
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/carousel */ "antd/lib/carousel");
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "./components/Carousel/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var CustomCarousel =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(CustomCarousel, _PureComponent);

  function CustomCarousel() {
    _classCallCheck(this, CustomCarousel);

    return _possibleConstructorReturn(this, _getPrototypeOf(CustomCarousel).apply(this, arguments));
  }

  _createClass(CustomCarousel, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "custom-carousel-container"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_0___default.a, {
        effect: "fade"
      }, children));
    }
  }]);

  return CustomCarousel;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]);



/***/ }),

/***/ "./components/Carousel/index.less":
/*!****************************************!*\
  !*** ./components/Carousel/index.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Footer/index.js":
/*!************************************!*\
  !*** ./components/Footer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.less */ "./components/Footer/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Footer =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Footer, _PureComponent);

  function Footer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Footer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Footer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      var year = new Date().getFullYear();
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
        className: "footer"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "copyright"
      }, _this.$i18n('copyright', year, '沪 ICP 备 XXXXXXX 号')));
    });

    return _this;
  }

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

_defineProperty(Footer, "$i18nPath", 'footer');



/***/ }),

/***/ "./components/Footer/index.less":
/*!**************************************!*\
  !*** ./components/Footer/index.less ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Loading/index.js":
/*!*************************************!*\
  !*** ./components/Loading/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin */ "antd/lib/spin");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "./components/Loading/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./components/Loading/state.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plugins_ReduxEnhance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/plugins/ReduxEnhance */ "./plugins/ReduxEnhance.js");


var _dec,
    _class,
    _class2,
    _temp,
    _this2 = undefined;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Loading = (_dec = Object(_plugins_ReduxEnhance__WEBPACK_IMPORTED_MODULE_5__["connect"])(function (state) {
  return state.loading;
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(Loading, _Component);

  function Loading() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Loading);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Loading)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      maxHeight: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      _this.setState({
        maxHeight: document.body.clientHeight
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      var maxHeight = _this.state.maxHeight;
      var isVisible = _this.props.isVisible;
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default.a, {
        className: "loading",
        style: {
          maxHeight: maxHeight
        },
        size: "large",
        spinning: isVisible
      });
    });

    return _this;
  }

  return Loading;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]), _defineProperty(_class2, "propTypes", {
  isVisible: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
}), _defineProperty(_class2, "show", function () {
  _this2.$dispatch(_state__WEBPACK_IMPORTED_MODULE_2__["show"]());
}), _defineProperty(_class2, "hide", function () {
  _this2.$dispatch(_state__WEBPACK_IMPORTED_MODULE_2__["hide"]());
}), _temp)) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./components/Loading/index.less":
/*!***************************************!*\
  !*** ./components/Loading/index.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Loading/state.js":
/*!*************************************!*\
  !*** ./components/Loading/state.js ***!
  \*************************************/
/*! exports provided: show, hide, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return hide; });
var SHOW = 'loading/SHOW';
var HIDE = 'loading/HIDE';
var show = function show() {
  return {
    type: SHOW
  };
};
var hide = function hide() {
  return {
    type: HIDE
  };
};

var _getInitState = function _getInitState() {
  return {
    showingCount: 0,
    isVisible: false
  };
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _getInitState();
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SHOW:
      return {
        showingCount: state.showingCount + 1,
        isVisible: true
      };

    case HIDE:
      {
        var newState = {
          showingCount: Math.max(state.showingCount - 1, 0),
          isVisible: state.isVisible
        };
        return newState;
      }

    default:
      return state;
  }
});

/***/ }),

/***/ "./components/MessageModal/index.js":
/*!******************************************!*\
  !*** ./components/MessageModal/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MessageModal; });
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal */ "antd/lib/modal");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "./components/MessageModal/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var MessageModal =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(MessageModal, _PureComponent);

  function MessageModal() {
    _classCallCheck(this, MessageModal);

    return _possibleConstructorReturn(this, _getPrototypeOf(MessageModal).apply(this, arguments));
  }

  _createClass(MessageModal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          visible = _this$props.visible,
          children = _this$props.children;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default.a, {
        visible: visible,
        title: title,
        onCancel: this.props.onCancel,
        onOk: this.props.onCancel,
        wrapClassName: "message-modal"
      }, children);
    }
  }]);

  return MessageModal;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]);

_defineProperty(MessageModal, "propTypes", {
  visible: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
});



/***/ }),

/***/ "./components/MessageModal/index.less":
/*!********************************************!*\
  !*** ./components/MessageModal/index.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/QrcodeModal/index.js":
/*!*****************************************!*\
  !*** ./components/QrcodeModal/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QrcodeModal; });
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal */ "antd/lib/modal");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "./components/QrcodeModal/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! qrcode.react */ "qrcode.react");
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_4__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var QrcodeModal =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(QrcodeModal, _PureComponent);

  function QrcodeModal() {
    _classCallCheck(this, QrcodeModal);

    return _possibleConstructorReturn(this, _getPrototypeOf(QrcodeModal).apply(this, arguments));
  }

  _createClass(QrcodeModal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          visible = _this$props.visible,
          content = _this$props.content;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default.a, {
        visible: visible,
        footer: null,
        closable: false,
        width: "270px",
        onCancel: this.props.onCancel,
        wrapClassName: "qrcode-modal"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(qrcode_react__WEBPACK_IMPORTED_MODULE_4___default.a, {
        value: content,
        size: 250
      }));
    }
  }]);

  return QrcodeModal;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]);

_defineProperty(QrcodeModal, "propTypes", {
  visible: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  content: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
});



/***/ }),

/***/ "./components/QrcodeModal/index.less":
/*!*******************************************!*\
  !*** ./components/QrcodeModal/index.less ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Toast/index.js":
/*!***********************************!*\
  !*** ./components/Toast/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toast; });
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_0__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Toast = function Toast() {
  _classCallCheck(this, Toast);
};

_defineProperty(Toast, "Type", {
  INFO: 'info',
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning'
});

_defineProperty(Toast, "show", function (content, type, duration) {
  switch (type) {
    case Toast.Type.INFO:
      antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.info(content, duration);

      break;

    case Toast.Type.SUCCESS:
      antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.success(content, duration);

      break;

    case Toast.Type.WARNING:
      antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.warning(content, duration);

      break;

    default:
      antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.error(content, duration);

  }
});



/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: Carousel, Footer, MessageModal, QrcodeModal, Loading, Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Carousel */ "./components/Carousel/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return _Carousel__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ "./components/Footer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _Footer__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loading */ "./components/Loading/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return _Loading__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _MessageModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MessageModal */ "./components/MessageModal/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageModal", function() { return _MessageModal__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _QrcodeModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QrcodeModal */ "./components/QrcodeModal/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QrcodeModal", function() { return _QrcodeModal__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Toast */ "./components/Toast/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return _Toast__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "./constants/index.js":
/*!****************************!*\
  !*** ./constants/index.js ***!
  \****************************/
/*! exports provided: SocialAccounts, User, Information, Skills, Experiences, Projects, BlogLink, Metas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialAccounts", function() { return SocialAccounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Information", function() { return Information; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skills", function() { return Skills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Experiences", function() { return Experiences; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projects", function() { return Projects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogLink", function() { return BlogLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Metas", function() { return Metas; });
/* eslint-disable max-len */
var SocialAccounts = [{
  type: 'blog',
  icon: '/images/resume/social-accounts/blog.svg',
  link: 'https://hankliu62.github.io/'
}, {
  type: 'github',
  icon: '/images/resume/social-accounts/github.svg',
  link: 'https://github.com/hankliu62'
}, {
  type: 'zhihu',
  icon: '/images/resume/social-accounts/zhihu.svg',
  link: 'https://www.zhihu.com/people/hankliu62/activities'
}, {
  type: 'segmentfault',
  icon: '/images/resume/social-accounts/segmentfault.svg',
  link: 'https://segmentfault.com/u/yizhikewangfeixiangdezhu'
}, {
  type: 'weibo',
  icon: '/images/resume/social-accounts/weibo.svg',
  link: 'https://weibo.com/2769648804/profile'
}];
var User = {
  Name: '刘小聪',
  Signature: '「我们在梦里走过许多路，醒来后却发现自己还在床上。」'
};
var Information = [{
  type: 'birthday',
  value: '1992.06.12'
}, {
  type: 'education',
  value: '湖南商学院 · 计算机科学与技术'
}, {
  type: 'graduation',
  value: '2014年'
}, {
  type: 'email',
  value: '397694072@qq.com'
}, {
  type: 'telephone',
  value: '18521516462'
}, {
  type: 'address',
  value: '上海'
}];
var Skills = [{
  type: 'html5',
  popover: 'HTML',
  percent: 85
}, {
  type: 'css3',
  popover: 'CSS',
  percent: 75
}, {
  type: 'javascript',
  popover: 'Javascript',
  percent: 85
}, {
  type: 'es6',
  popover: 'ES6',
  percent: 80
}, {
  type: 'vue',
  popover: 'Vue',
  percent: 75
}, {
  type: 'react',
  popover: 'React',
  percent: 80
}, {
  type: 'nodejs',
  popover: 'Node',
  percent: 60
}, {
  type: 'golang',
  popover: 'Go',
  percent: 55
}];
var Experiences = [{
  company: '上海忻知信息科技有限公司',
  time: '2018.1 - 2018.11',
  profile: '公司旗下的八爪鱼AI平台是一个智能内容服务平台，主营业务包括帮助内容生产商进行智能分发以及数据分析，同时提供内容决策服务，智能分析用户的需求，零成本解决粉丝获取、粉丝运营以及商业变现等问题。',
  post: '初级软件工程师（前端）',
  works: ['官网构建以及页面内容的实现；', '负责八爪鱼AI前台客户、后台管理平台页面研发；', '负责页面的构建以及网页性能的优化；', '官网SEO的优化；', '小部分后台接口的实现。'],
  image: '/images/resume/experiences/bzy.jpg'
}, {
  company: '美味不用等（上海）信息科技股份有限公司',
  time: '2017.8 - 2017.12',
  profile: '美味不用等(上海)美味不用等是专业的智慧餐饮服务商，通过B端SaaS服务和C端产品，解决餐厅的效率、管理、营销、成本和顾客就餐体验等方面的问题。 ',
  post: '前端开发工程师',
  works: ['商户管理系统页面内容的开发和维护；', '页面通用组件的封装；', '代码以及流程规范化的构建；', '网页性能的优化。'],
  image: '/images/resume/experiences/mwee.jpg'
}, {
  company: '群硕软件开发（上海）有限公司',
  time: '2014.7 - 2017.7',
  profile: '群硕致力于提供广泛的软件开发服务和解决方案服务，综合运用最佳实践和领域知识以及一流开发工具和技术，我们为全球客户提供高附加值软件开发及解决方案服务。 ',
  post: '前端开发工程师',
  works: ['公司旗下产品群脉SCRM前端页面的开发和维护；', '公司旗下服务抱米SOS系统前端页面的开发和维护；', '页面通用组件的封装。'],
  image: '/images/resume/experiences/augmentum.jpg'
}];
var Projects = [{
  name: '八爪鱼·AI',
  company: '上海忻知信息科技有限公司',
  time: '2018.09-2017.10',
  profile: '八爪鱼AI是国内专业的内容服务平台，服务于内容方，帮助合作方解决粉丝运营的难题。',
  duties: ['独立开发，从构建、开发到维护都是独自一人实现;', '由于官网需要支持SEO，在架构上使用轻量级的 React 服务端渲染应用框架Next.js;', '在布局上使用ant-design的响应式栅格布局，在不同的屏幕上都能完美展示网页内容;', '针对移动端使用不同的css和切图，完美兼容移动平台;', 'SEO的优化，通过网页中标签、keywords、description的设置，网站结构布局优化以及网页代码优化，提升 网站的搜索引擎自然排名。'],
  summary: '由于该项目独自一人完成的，所以对于项目的开发流程有了更为深刻的了解，从技术框架的选择到项目初始化的构建的过程中遇到了很多的问题，例如: 为了能让ant-design中的组件按需加载，需要使用 babel-plugin-import 来进行按需加载，由于需要兼容移动端，又引入了 ant-design-mobile UI组件库，对于 babel@7+ 来说，babel-plugin-import 库中的 options 是不能伟数组的，所以导致了当时编译一直报错;由此可见，当我们构建项目的时候，库与库之间依赖的关系，以及版本兼容一定要非常注意，而且对于 eslint 和 stylelint 等 codinglint 的功能一定要在项目初见时加入，不然后面修改起来很麻烦。总的来说的话，让我对项目开发流程又有了深刻的了解，而且还学习的新技术Next.js服务端渲染应用框架。',
  link: 'https://www.bzy.ai/',
  image: '/images/resume/projects/bzy.jpg'
}, {
  name: '商户管理系统',
  company: '美味不用等（上海）信息科技股份有限公司',
  time: '2017.08-2017.12',
  profile: '美味不用等是专业的智慧餐饮服务商，通过我们的产品，解决餐厅的效率、管理、营销、成本和顾客就餐体验等方面的问题。',
  duties: ['使用react +react-router+redux 等技术开发网页页面;', '运用jQuery、Bootstrap等框架库，提高团队开发效率;', '配置 eslint 和 stylelint 等代码检查工具来降低代码的错误率，以及提高代码的一致性;', '封装通用的react组件，提高代码的复用率，减少代码的体积，以及降低copy-paste的出错率;', '优化代码逻辑，利用 webpack 的 code splitting 特性，将各个步骤的代码进行拆分，实现按需加载，减少代 码的体积;', '优化 webpack 配置文件，提高 webpack 构建的速度，减少打包后代码的体积。'],
  summary: '由于该项目是我中途接手的一个项目，由于一开始未使用eslint和stylelint等代码检查工具，在项目开发过程中，很容易出现一些低级的语法错误，而且只有等webpack构建完成，刷新页面才能发觉错误，大大的降低来开发速度，加入代码检查工具后这种现象大大减少，所以对于一个项目来说代码检查是一个必不可少的环节。而且在此次项目中学习来很多webpack的优化策略，加深来对webpack的了解。',
  link: 'http://shop.mwee.cn/',
  image: '/images/resume/projects/mwee.jpg'
}, {
  name: '抱米SOS系统',
  company: '群硕软件开发（上海）有限公司',
  time: '2015.11-2017.07',
  profile: '抱米SOS系统的核心目标就是直观体现最有针对性、影响服务判断的客户维护信息。通过定制化标签，智能筛选搜索和关键业绩概述来清晰的了解您客户的需求，并可跨门店分享',
  duties: ['使用react + redux + sass 等技术实现前台页面；', '封装通用的公共组件，提高代码的复用率；', '通过axios与后台数据进行交互，协调后端同学完成产品的开发。'],
  summary: '这是工作以后的第二个项目，抱米餐厅管理系统网页端前端使用的技术主要是React+Redux+Webpack，React可以说是2015最热门的前端框架之一，React 只是涉及到MVC框架的V(视图)部分，React 更加注重UI的组件化，在一开始写React的时候，最主要的问题是如何来划分component以及状态的传递。随着不断的学习和练习，使我加深了对React的了解，对前端的组件化也有了一定的认识，通过对Redux的学习，使我对前端树形的数据存储结构以及单向数据流有了初步的了解。总的来说，通过抱米项目，使我对React+Redux这种开发方式有了全新的认识。',
  link: 'https://www.baomiding.com/',
  image: '/images/resume/projects/baomi.png'
}, {
  name: '群脉SCRM',
  company: '群硕软件开发（上海）有限公司',
  time: '2014.07-2015.11',
  profile: '群脉SCRM是一个可定制的社会化的客户管理系统，其基本的功能就是通过一系列的社会渠道来与客户建立关系，同时通过一系列的营销活动和优惠来推动游客成为会员，同时增加会员的忠诚度。 ',
  duties: ['使用AngularJs 1.X + CoffeeScript + Sass 等技术后台管理页面;', '使用vue + vue.router 等技术微信h5页面;', '封装通用的directive指令，提高代码的复用率，例如: baidu map directive;', '通过Ajax与后台数据进行交互，与后端工作有效对接。'],
  summary: '这个可以说是我入职以来的第一个项目，刚从学校出来，发现在工作中使用到的技术和当时在学校中学到的知识有很大的区别，所以在项目开始的一段时间里，发现完成组长安排的任务还是有一定的难度，但是那段时间也是自己进步比较快的一段时间，从技术方面来讲，群脉前端使用的是组件化开发的思想，我们前端Js框架使用的是AngularJs加上使用的Javascript的扩展语言CoffeeScript，在CSS方面使用的CSS预处理语言Sass，在代码管理工具使用的是Git，这些新的技术和工具都是在这段时间慢慢熟悉起来。我觉得在这段时间收获最大的就是技术方面的积累，同时也熟悉了前后台分工同时开发的工作流程。',
  link: 'https://www.quncrm.com/',
  image: '/images/resume/projects/qunscrm.jpeg'
}];
var BlogLink = 'https://hankliu62.github.io/';
var Metas = [{
  name: 'renderer',
  content: 'webkit'
}, {
  name: 'viewport',
  content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'
}, {
  name: 'X-UA-Compatible',
  content: 'IE=edge,chrome=1'
}, {
  name: 'format-detection',
  content: 'telephone=no'
}, {
  name: 'format-detection',
  content: 'email=no'
}, {
  name: 'baidu-site-verification',
  content: 'EdvlpBgoG9'
}];

/***/ }),

/***/ "./engine/Engine.js":
/*!**************************!*\
  !*** ./engine/Engine.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Engine; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_Axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/Axios */ "./engine/utils/Axios.js");
/* harmony import */ var _Sessions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sessions */ "./engine/Sessions.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var debug = __webpack_require__(/*! debug */ "debug")('hankliu/Engine'); // eslint-disable-next-line


var _console = console,
    error = _console.error;
var defaultOption = {
  i18n: function i18n() {
    error('i18n is required');
  },
  showToast: function showToast() {
    error('showToast is required');
  },
  showLoading: function showLoading() {
    error('showLoading is required');
  },
  hideLoading: function hideLoading() {
    error('hideLoading is required');
  },
  storage: {
    getItem: function getItem() {
      error('storage.getItem is required');
    },
    setItem: function setItem() {
      error('storage.setItem is required');
    },
    removeItem: function removeItem() {
      error('storage.removeItem is required');
    },
    clear: function clear() {
      error('storage.clear is required');
    }
  }
};

var Engine = function Engine() {
  _classCallCheck(this, Engine);
};

_defineProperty(Engine, "_option", {});

_defineProperty(Engine, "init",
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(option) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            Engine._option = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.merge(defaultOption, option);
            _utils_Axios__WEBPACK_IMPORTED_MODULE_2__["default"].init();
            _context.next = 5;
            return _Sessions__WEBPACK_IMPORTED_MODULE_3__["default"].init(option.params);

          case 5:
            if (option.onInitSuccess) {
              option.onInitSuccess();
            }

            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            debug(_context.t0);

            if (option.onInitFailure) {
              option.onInitFailure(_context.t0);
            }

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 8]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

_defineProperty(Engine, "getApiEndpoint", function () {
  return Engine._option.apiEndpoint;
});

_defineProperty(Engine, "i18n", function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Engine._option.i18n.apply(null, args);
});

_defineProperty(Engine, "showToast", function (options) {
  Engine._option.showToast(options);
});

_defineProperty(Engine, "showLoading", function () {
  Engine._option.showLoading();
});

_defineProperty(Engine, "hideLoading", function () {
  Engine._option.hideLoading();
});

_defineProperty(Engine, "getItem", function (key) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      isTemporary = _ref2.isTemporary;

  return Engine._option.storage.getItem(key, isTemporary);
});

_defineProperty(Engine, "setItem", function (key, value) {
  var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      isTemporary = _ref3.isTemporary;

  return Engine._option.storage.setItem(key, value, isTemporary);
});

_defineProperty(Engine, "removeItem", function (key) {
  var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      isTemporary = _ref4.isTemporary;

  return Engine._option.storage.removeItem(key, isTemporary);
});

_defineProperty(Engine, "clear", function () {
  var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      isTemporary = _ref5.isTemporary;

  return Engine._option.storage.clear(isTemporary);
});



/***/ }),

/***/ "./engine/Sessions.js":
/*!****************************!*\
  !*** ./engine/Sessions.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sessions; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Engine */ "./engine/Engine.js");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Sessions = function Sessions() {
  _classCallCheck(this, Sessions);
};

_defineProperty(Sessions, "_option", {});

_defineProperty(Sessions, "_schema", {
  temporaryToken: {
    isTemporary: true
  },
  token: {},
  language: {},
  profile: {
    isTemporary: true
  },
  partners: {
    isTemporary: true
  }
});

_defineProperty(Sessions, "init",
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(option) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Sessions._restoreOption(option);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

_defineProperty(Sessions, "login", function (auth, remember) {
  if (remember) {
    Sessions._option.token = auth.token;
  } else {
    Sessions._option.temporaryToken = auth.token;
  }

  Sessions._option.profile = auth.profile;
  Sessions._option.partners = auth.partners;
});

_defineProperty(Sessions, "getToken", function () {
  return Sessions._option.token || Sessions._option.temporaryToken;
});

_defineProperty(Sessions, "getProfile", function () {
  return Sessions._option.profile || {};
});

_defineProperty(Sessions, "getPartners", function () {
  return Sessions._option.partners || [];
});

_defineProperty(Sessions, "resetToken", function (token) {
  if (Sessions._option.token) {
    Sessions._option.token = token;
  } else {
    Sessions._option.temporaryToken = token;
  }
});

_defineProperty(Sessions, "resetProfile", function (profile) {
  Sessions._option.profile = profile;
});

_defineProperty(Sessions, "clear", function () {
  Sessions._option.token = undefined;
  Sessions._option.temporaryToken = undefined;
  Sessions._option.partners = undefined;
  _Engine__WEBPACK_IMPORTED_MODULE_1__["default"].logout();
});

_defineProperty(Sessions, "_restoreOption", function (params) {
  var option = {
    $data: {}
  };
  var config = {};

  var _arr = Object.entries(Sessions._schema);

  var _loop = function _loop() {
    var _arr$_i = _slicedToArray(_arr[_i], 2),
        key = _arr$_i[0],
        op = _arr$_i[1];

    Object.defineProperty(option, key, {
      set: function set(newValue) {
        option.$data[key] = newValue;
        _Engine__WEBPACK_IMPORTED_MODULE_1__["default"].setItem(key, newValue, op);
      },
      get: function get() {
        return option.$data[key];
      }
    });
    config[key] = _Engine__WEBPACK_IMPORTED_MODULE_1__["default"].getItem(key, op);
  };

  for (var _i = 0; _i < _arr.length; _i++) {
    _loop();
  }

  Object.assign(option, config, params);
  Sessions._option = option;
});



/***/ }),

/***/ "./engine/index.js":
/*!*************************!*\
  !*** ./engine/index.js ***!
  \*************************/
/*! exports provided: default, Sessions, RouterHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Engine */ "./engine/Engine.js");
/* harmony import */ var _Sessions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sessions */ "./engine/Sessions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sessions", function() { return _Sessions__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _utils_RouterHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/RouterHelper */ "./engine/utils/RouterHelper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterHelper", function() { return _utils_RouterHelper__WEBPACK_IMPORTED_MODULE_2__["default"]; });




/* harmony default export */ __webpack_exports__["default"] = (_Engine__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./engine/utils/Axios.js":
/*!*******************************!*\
  !*** ./engine/utils/Axios.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Axios; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Engine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Engine */ "./engine/Engine.js");
/* harmony import */ var _Sessions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Sessions */ "./engine/Sessions.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var debug = __webpack_require__(/*! debug */ "debug")('bzy-top100-website/Axios');

var Axios = function Axios() {
  _classCallCheck(this, Axios);
};

_defineProperty(Axios, "init", function () {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.interceptors.request.use(function (config) {
    if (!config.ignoreLoading) {
      _Engine__WEBPACK_IMPORTED_MODULE_3__["default"].showLoading();
    }

    var url = config.url;

    if (!/^(https:|http:)?\/\//.test(url)) {
      url = "".concat(_Engine__WEBPACK_IMPORTED_MODULE_3__["default"].getApiEndpoint()).concat(config.url);
    }

    var params = {};
    var headers = {};

    if (_Sessions__WEBPACK_IMPORTED_MODULE_4__["default"].getToken()) {
      headers['grpc-metadata-token'] = _Sessions__WEBPACK_IMPORTED_MODULE_4__["default"].getToken();
    }

    lodash__WEBPACK_IMPORTED_MODULE_2___default.a.merge(config, {
      headers: headers,
      timeout: 60 * 1000,
      url: url,
      params: params
    });

    return config;
  }, Axios.onError);
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.interceptors.response.use(function (response) {
    var _response$config = response.config;
    _response$config = _response$config === void 0 ? {} : _response$config;
    var ignoreLoading = _response$config.ignoreLoading;

    if (!ignoreLoading) {
      _Engine__WEBPACK_IMPORTED_MODULE_3__["default"].hideLoading();
    }

    return response.data;
  }, Axios.onError);

  axios__WEBPACK_IMPORTED_MODULE_1___default.a.getPagedListRecursively =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url) {
      var config,
          allItems,
          params,
          result,
          newAllItems,
          _args = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              config = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
              allItems = _args.length > 2 && _args[2] !== undefined ? _args[2] : [];
              params = config.params || {};
              params.itemIndex = config.params.itemIndex || 1;
              params.perPage = config.params.perPage || 1000;
              _context.next = 7;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url, config);

            case 7:
              result = _context.sent;
              newAllItems = allItems.concat(result.items);

              if (!(result.meta && newAllItems.length < result.meta.totalCount)) {
                _context.next = 13;
                break;
              }

              params.itemIndex += config.params.perPage;

              lodash__WEBPACK_IMPORTED_MODULE_2___default.a.merge(config, {
                params: params
              });

              return _context.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_1___default.a.getPagedListRecursively(url, config, newAllItems));

            case 13:
              return _context.abrupt("return", newAllItems);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
});

_defineProperty(Axios, "onError", function () {
  var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  debug('Response error', "".concat(error), error.response);
  var response = error.response || {};
  var _error$config = error.config;
  _error$config = _error$config === void 0 ? {} : _error$config;
  var ignoreLoading = _error$config.ignoreLoading,
      ignoreToast = _error$config.ignoreToast;

  if (!ignoreLoading) {
    _Engine__WEBPACK_IMPORTED_MODULE_3__["default"].hideLoading();
  }

  switch (response.status) {
    case 401:
      {
        _Sessions__WEBPACK_IMPORTED_MODULE_4__["default"].clear();
        break;
      }

    case 400:
      {
        if (!ignoreToast) {
          var errorMessage = '';

          if (!lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEmpty(response.data.error)) {
            errorMessage = response.data.error;
          } else if (lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEmpty(response.data.errors)) {
            errorMessage = response.data.message;
          } else {
            var firstErrorKey = Object.keys(response.data.errors)[0];
            errorMessage = "".concat(firstErrorKey, ": ").concat(response.data.errors[firstErrorKey]);
          }

          if (errorMessage) {
            _Engine__WEBPACK_IMPORTED_MODULE_3__["default"].showToast(errorMessage);
          }
        }

        break;
      }

    case 404:
      _Engine__WEBPACK_IMPORTED_MODULE_3__["default"].showToast(_Engine__WEBPACK_IMPORTED_MODULE_3__["default"].i18n('request', response.status.toString()));
      break;

    case 500:
      _Engine__WEBPACK_IMPORTED_MODULE_3__["default"].showToast(_Engine__WEBPACK_IMPORTED_MODULE_3__["default"].i18n('request', response.status.toString()));
      break;

    default:
      {
        if (error.message) {
          if (error.message.includes('Network Error')) {
            _Engine__WEBPACK_IMPORTED_MODULE_3__["default"].showToast(_Engine__WEBPACK_IMPORTED_MODULE_3__["default"].i18n('request', 'networkUnavailable'));
          } else if (error.message.includes('timeout')) {
            _Engine__WEBPACK_IMPORTED_MODULE_3__["default"].showToast(_Engine__WEBPACK_IMPORTED_MODULE_3__["default"].i18n('request', 'networkTimeout'));
          }
        }
      }
  }

  return Promise.reject(error);
});



/***/ }),

/***/ "./engine/utils/RouterHelper.js":
/*!**************************************!*\
  !*** ./engine/utils/RouterHelper.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RouterHelper; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var RouterHelper = function RouterHelper() {
  _classCallCheck(this, RouterHelper);
};

_defineProperty(RouterHelper, "buildRouteUrl", function (match, newMatch) {
  var url = newMatch.path || match.path;

  var params = _objectSpread({}, match.params, newMatch.params);

  for (var key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      url = url.replace(new RegExp(":".concat(key, "\\??")), params[key]);
    }
  }

  return url;
});

_defineProperty(RouterHelper, "buildUrlMergeSearchParams", function (url) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(params)) {
    return url;
  }

  var newUrl = url;

  var _arr = Object.entries(params);

  for (var _i = 0; _i < _arr.length; _i++) {
    var _arr$_i = _slicedToArray(_arr[_i], 2),
        key = _arr$_i[0],
        value = _arr$_i[1];

    var reg = new RegExp("(".concat(key, "=.*?)(&|$)"));

    if (value === undefined) {
      // eslint-disable-next-line
      continue;
    }

    if (!reg.test(newUrl)) {
      if (value !== null) {
        newUrl += "".concat(/#.*\?/.test(newUrl) ? '&' : '?').concat(key, "=").concat(value);
      }
    } else {
      var match = reg.exec(newUrl);

      if (value === null) {
        newUrl = newUrl.replace(match[1], '');
      } else {
        newUrl = newUrl.replace(match[1], "".concat(key, "=").concat(value));
      }
    }
  }

  newUrl = newUrl.replace(/(&|\?)$/, '');
  return newUrl;
});

_defineProperty(RouterHelper, "replaceLocationBy", function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = RouterHelper.buildUrlMergeSearchParams(window.location.href, params);
  window.location.replace(url);
});

_defineProperty(RouterHelper, "getQuery", function (searchString) {
  var search = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.trimStart(searchString, '?');

  var params = {};

  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(search)) {
    return params;
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = search.split('&')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;
      var pair = item.split('=');
      params[pair[0]] = decodeURIComponent(pair[1]);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return params;
});

_defineProperty(RouterHelper, "RouterMap", {
  Overview: '/homepage/overview',
  ContactUs: '/homepage/contact',
  Advertising: '/homepage/advertising',
  Cooperation: '/homepage/cooperation'
});



/***/ }),

/***/ "./pages/Blog/index.js":
/*!*****************************!*\
  !*** ./pages/Blog/index.js ***!
  \*****************************/
/*! exports provided: default, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.less */ "./pages/Blog/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/plugins */ "./plugins/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state */ "./pages/Blog/state.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _state__WEBPACK_IMPORTED_MODULE_3__["default"]; });

var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Blog = (_dec = Object(_plugins__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return state.blog;
}, _state__WEBPACK_IMPORTED_MODULE_3__), _dec(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(Blog, _Component);

  function Blog() {
    _classCallCheck(this, Blog);

    return _possibleConstructorReturn(this, _getPrototypeOf(Blog).apply(this, arguments));
  }

  _createClass(Blog, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "blog-container"
      }, "Blog");
    }
  }]);

  return Blog;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"])) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Blog);


/***/ }),

/***/ "./pages/Blog/index.less":
/*!*******************************!*\
  !*** ./pages/Blog/index.less ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/Blog/state.js":
/*!*****************************!*\
  !*** ./pages/Blog/state.js ***!
  \*****************************/
/*! exports provided: setState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setState", function() { return setState; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SET_STATE = 'blog/SET_STATE';
var setState = function setState(state) {
  return {
    type: SET_STATE,
    payload: state
  };
};

var _getInitState = function _getInitState() {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _getInitState();
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_STATE:
      return _objectSpread({}, state, action.payload);

    default:
      return state;
  }
});

/***/ }),

/***/ "./pages/Resume/components/ResumeArticle/index.js":
/*!********************************************************!*\
  !*** ./pages/Resume/components/ResumeArticle/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResumeArticle; });
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.less */ "./pages/Resume/components/ResumeArticle/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/constants */ "./constants/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var ResumeArticle =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ResumeArticle, _PureComponent);

  function ResumeArticle() {
    _classCallCheck(this, ResumeArticle);

    return _possibleConstructorReturn(this, _getPrototypeOf(ResumeArticle).apply(this, arguments));
  }

  _createClass(ResumeArticle, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "resume-article-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "title-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        className: "link-blog",
        href: _constants__WEBPACK_IMPORTED_MODULE_1__["BlogLink"],
        target: "_blank",
        rel: "noopener noreferrer external nofollow"
      }, "\u4E2A\u4EBA\u535A\u5BA2"))));
    }
  }]);

  return ResumeArticle;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]);



/***/ }),

/***/ "./pages/Resume/components/ResumeArticle/index.less":
/*!**********************************************************!*\
  !*** ./pages/Resume/components/ResumeArticle/index.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/Resume/components/ResumeExperience/index.js":
/*!***********************************************************!*\
  !*** ./pages/Resume/components/ResumeExperience/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResumeExperience; });
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/carousel */ "antd/lib/carousel");
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "./pages/Resume/components/ResumeExperience/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/constants */ "./constants/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var ResumeExperience =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ResumeExperience, _PureComponent);

  function ResumeExperience() {
    _classCallCheck(this, ResumeExperience);

    return _possibleConstructorReturn(this, _getPrototypeOf(ResumeExperience).apply(this, arguments));
  }

  _createClass(ResumeExperience, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "resume-experience-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "title-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
        className: "title"
      }, "\u5DE5\u4F5C\u7ECF\u5386")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "experiences-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_0___default.a, {
        className: "experiences-carousel"
      }, _constants__WEBPACK_IMPORTED_MODULE_2__["Experiences"].map(function (experience) {
        var company = experience.company,
            time = experience.time,
            post = experience.post,
            works = experience.works,
            image = experience.image;
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "experience-wrapper",
          key: company
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "experience-item"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "experience-image-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
          className: "company-image",
          src: image,
          alt: "Company"
        })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "experience-content-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h5", {
          className: "company-name"
        }, company), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "company-time"
        }, time), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "company-post"
        }, post), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
          className: "company-works"
        }, works.map(function (work) {
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
            className: "company-work",
            key: work
          }, work);
        })))));
      }))));
    }
  }]);

  return ResumeExperience;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);



/***/ }),

/***/ "./pages/Resume/components/ResumeExperience/index.less":
/*!*************************************************************!*\
  !*** ./pages/Resume/components/ResumeExperience/index.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/Resume/components/ResumeIndex/index.js":
/*!******************************************************!*\
  !*** ./pages/Resume/components/ResumeIndex/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResumeIndex; });
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.less */ "./pages/Resume/components/ResumeIndex/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/constants */ "./constants/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-svg */ "react-svg");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_svg__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var ResumeIndex =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ResumeIndex, _PureComponent);

  function ResumeIndex() {
    _classCallCheck(this, ResumeIndex);

    return _possibleConstructorReturn(this, _getPrototypeOf(ResumeIndex).apply(this, arguments));
  }

  _createClass(ResumeIndex, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "resume-index-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "avatar-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: "/images/resume/avatar.jpg",
        className: "avatar",
        alt: "avatar"
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "name-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "name"
      }, _constants__WEBPACK_IMPORTED_MODULE_1__["User"].Name)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "signature-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "signature"
      }, _constants__WEBPACK_IMPORTED_MODULE_1__["User"].Signature)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "social-accounts-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
        className: "social-accounts"
      }, _constants__WEBPACK_IMPORTED_MODULE_1__["SocialAccounts"].map(function (account) {
        var type = account.type,
            icon = account.icon,
            link = account.link;
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('social-account', "social-account-".concat(type)),
          key: type
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_4___default.a, {
          src: "/images/resume/circle.svg",
          className: "social-account-circle"
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
          className: "account-link",
          href: link,
          target: "_blank",
          rel: "noopener noreferrer external nofollow"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_4___default.a, {
          src: icon
        })));
      }))));
    }
  }]);

  return ResumeIndex;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]);



/***/ }),

/***/ "./pages/Resume/components/ResumeIndex/index.less":
/*!********************************************************!*\
  !*** ./pages/Resume/components/ResumeIndex/index.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/Resume/components/ResumeIntroduction/index.js":
/*!*************************************************************!*\
  !*** ./pages/Resume/components/ResumeIntroduction/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResumeIntroduction; });
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.less */ "./pages/Resume/components/ResumeIntroduction/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-svg */ "react-svg");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/constants */ "./constants/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var ResumeIntroduction =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ResumeIntroduction, _PureComponent);

  function ResumeIntroduction() {
    _classCallCheck(this, ResumeIntroduction);

    return _possibleConstructorReturn(this, _getPrototypeOf(ResumeIntroduction).apply(this, arguments));
  }

  _createClass(ResumeIntroduction, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "resume-introduction-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "title-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "title"
      }, "\u81EA\u6211\u4ECB\u7ECD")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "self-introduction-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
        className: "introductions"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "introduction-item"
      }, "\u5BF9\u524D\u7AEF\u65B9\u9762\u6709\u7740\u6D53\u539A\u7684\u5174\u8DA3\uFF0C\u56DB\u5E74\u6765\u7684\u524D\u7AEF\u5DE5\u4F5C\u7ECF\u9A8C\uFF0C\u4F7F\u6211\u5BF9\u524D\u7AEF\u6280\u672F\u7684\u70ED\u60C5\u9AD8\u6DA8\uFF0C\u5B9E\u6218\u65B9\u9762\u5F97\u5230\u63D0\u5347\uFF0C\u5E0C\u671B\u80FD\u591F\u5728\u524D\u7AEF\u8FD9\u6761\u8DEF\u4E0A\u4E00\u76F4\u8D70\u4E0B\u53BB\uFF1B"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "introduction-item"
      }, "\u505A\u4EBA\u8BDA\u4FE1\uFF0C\u505A\u4E8B\u8E0F\u5B9E\uFF0C\u6027\u683C\u6709\u70B9\u5185\u5411\uFF0C\u5374\u662F\u4E00\u540D\u5178\u578B\u7684\u5B9E\u5E72\u6D3E\uFF1B"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "introduction-item"
      }, "\u6709\u8F83\u5F3A\u7684\u52A8\u624B\u80FD\u529B\uFF0C\u9002\u5E94\u529B\u5F3A\uFF0C\u5728\u5DE5\u4F5C\u548C\u4E1A\u4F59\u65F6\u95F4\u4E2D\uFF0C\u4E0D\u65AD\u63D0\u9AD8\u81EA\u5DF1\uFF0C\u9002\u5E94\u5DE5\u4F5C\u7684\u9700\u8981\uFF1B"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "introduction-item"
      }, "\u5BF9\u5DE5\u4F5C\u8BA4\u771F\u8D1F\u8D23\uFF0C\u5C31\u662F\u505A\u597D\u81EA\u5DF1\u7684\u672C\u804C\u5DE5\u4F5C\uFF0C\u5728\u89C4\u5B9A\u7684\u65F6\u95F4\u5185\u4FDD\u8D28\u4FDD\u91CF\u7684\u5B8C\u6210\u4EFB\u52A1\uFF1B"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "introduction-item"
      }, "\u5B66\u4E60\u80FD\u529B\u5F3A\uFF0C\u524D\u7AEF\u6280\u672F\u4E3B\u8981\u5728\u4E8E\u81EA\u5B66\u3002"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "self-information-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "information-items"
      }, _constants__WEBPACK_IMPORTED_MODULE_3__["Information"].map(function (info) {
        var type = info.type,
            value = info.value;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          className: "information-item",
          key: type
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_2___default.a, {
          src: "/images/resume/information/".concat(type, ".svg"),
          className: "information-item-icon"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "information-item-data"
        }, value));
      }))));
    }
  }]);

  return ResumeIntroduction;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./pages/Resume/components/ResumeIntroduction/index.less":
/*!***************************************************************!*\
  !*** ./pages/Resume/components/ResumeIntroduction/index.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/Resume/components/ResumeProject/index.js":
/*!********************************************************!*\
  !*** ./pages/Resume/components/ResumeProject/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResumeProject; });
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/carousel */ "antd/lib/carousel");
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ "./pages/Resume/components/ResumeProject/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/constants */ "./constants/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components */ "./components/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var ResumeProject =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ResumeProject, _PureComponent);

  function ResumeProject() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ResumeProject);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ResumeProject)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isVisibleQr: false,
      qrValue: '',
      isVisibleSummary: false,
      summary: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onOpenVisibleQr", function (qrValue) {
      _this.setState({
        isVisibleQr: true,
        qrValue: qrValue
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onCloseVisibleQr", function () {
      _this.setState({
        isVisibleQr: false,
        qrValue: ''
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onOpenVisibleSummary", function (summary) {
      _this.setState({
        isVisibleSummary: true,
        summary: summary
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onCloseVisibleSummary", function () {
      _this.setState({
        isVisibleSummary: false,
        summary: ''
      });
    });

    return _this;
  }

  _createClass(ResumeProject, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          isVisibleQr = _this$state.isVisibleQr,
          qrValue = _this$state.qrValue,
          isVisibleSummary = _this$state.isVisibleSummary,
          summary = _this$state.summary;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "resume-project-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "title-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        className: "title"
      }, "\u9879\u76EE\u7ECF\u5386")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "projects-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_0___default.a, {
        className: "projects-carousel"
      }, _constants__WEBPACK_IMPORTED_MODULE_3__["Projects"].map(function (project) {
        var name = project.name,
            company = project.company,
            link = project.link,
            time = project.time,
            image = project.image,
            duties = project.duties,
            profile = project.profile,
            projectSummary = project.summary;
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project-wrapper",
          key: company
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project-item-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project-item"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project-image-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          className: "project-image",
          src: image,
          alt: "Project"
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project-content-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", {
          className: "project-name"
        }, "".concat(name, "(").concat(company, ")")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project-time"
        }, time), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project-profile",
          title: "profile"
        }, profile), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
          className: "project-duties"
        }, duties.map(function (duty) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
            className: "project-duty",
            key: duty
          }, duty);
        })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
          className: "project-actions-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
          className: "project-action"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          className: "project-link",
          href: link,
          target: "_blank",
          rel: "noopener noreferrer external nofollow"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
          type: "link"
        }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
          className: "project-action"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
          type: "qrcode",
          onClick: function onClick() {
            _this2.onOpenVisibleQr(link);
          }
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
          className: "project-action"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
          type: "file-text",
          onClick: function onClick() {
            _this2.onOpenVisibleSummary(projectSummary);
          }
        })))));
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["QrcodeModal"], {
        visible: isVisibleQr,
        content: qrValue,
        onCancel: this.onCloseVisibleQr
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["MessageModal"], {
        visible: isVisibleSummary,
        onCancel: this.onCloseVisibleSummary,
        title: "\u9879\u76EE\u603B\u7ED3"
      }, summary));
    }
  }]);

  return ResumeProject;
}(react__WEBPACK_IMPORTED_MODULE_5__["PureComponent"]);



/***/ }),

/***/ "./pages/Resume/components/ResumeProject/index.less":
/*!**********************************************************!*\
  !*** ./pages/Resume/components/ResumeProject/index.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/Resume/components/ResumeSkill/index.js":
/*!******************************************************!*\
  !*** ./pages/Resume/components/ResumeSkill/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResumeSkill; });
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/popover */ "antd/lib/popover");
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/progress */ "antd/lib/progress");
/* harmony import */ var antd_lib_progress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_progress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ "./pages/Resume/components/ResumeSkill/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/constants */ "./constants/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var ResumeSkill =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ResumeSkill, _PureComponent);

  function ResumeSkill() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ResumeSkill);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ResumeSkill)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderSkillPopover", function (popover, percent) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "skill-popover-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h5", {
        className: "skill-popover-title"
      }, popover), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "skill-popover-progress"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_progress__WEBPACK_IMPORTED_MODULE_1___default.a, {
        percent: percent,
        showInfo: false,
        strokeColor: "#00b38a",
        strokeWidth: 12
      })));
    });

    return _this;
  }

  _createClass(ResumeSkill, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "resume-skill-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "title-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
        className: "title"
      }, "\u6280\u80FD")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "skills-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
        className: "skills"
      }, _constants__WEBPACK_IMPORTED_MODULE_3__["Skills"].map(function (skill) {
        var type = skill.type,
            popover = skill.popover,
            percent = skill.percent;
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
          className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('skill', "skill-".concat(type)),
          key: type
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_popover__WEBPACK_IMPORTED_MODULE_0___default.a, {
          placement: "top",
          overlayClassName: "skill-popover",
          content: _this2.renderSkillPopover(popover, percent)
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "skill-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
          src: "/images/resume/skills/".concat(type, ".svg"),
          alt: ""
        }))));
      }))));
    }
  }]);

  return ResumeSkill;
}(react__WEBPACK_IMPORTED_MODULE_4__["PureComponent"]);



/***/ }),

/***/ "./pages/Resume/components/ResumeSkill/index.less":
/*!********************************************************!*\
  !*** ./pages/Resume/components/ResumeSkill/index.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/Resume/components/index.js":
/*!******************************************!*\
  !*** ./pages/Resume/components/index.js ***!
  \******************************************/
/*! exports provided: ResumeArticle, ResumeExperience, ResumeIndex, ResumeIntroduction, ResumeProject, ResumeSkill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResumeArticle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResumeArticle */ "./pages/Resume/components/ResumeArticle/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResumeArticle", function() { return _ResumeArticle__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ResumeExperience__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResumeExperience */ "./pages/Resume/components/ResumeExperience/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResumeExperience", function() { return _ResumeExperience__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ResumeIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResumeIndex */ "./pages/Resume/components/ResumeIndex/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResumeIndex", function() { return _ResumeIndex__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ResumeIntroduction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ResumeIntroduction */ "./pages/Resume/components/ResumeIntroduction/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResumeIntroduction", function() { return _ResumeIntroduction__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ResumeProject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ResumeProject */ "./pages/Resume/components/ResumeProject/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResumeProject", function() { return _ResumeProject__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _ResumeSkill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ResumeSkill */ "./pages/Resume/components/ResumeSkill/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResumeSkill", function() { return _ResumeSkill__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "./pages/Resume/index.js":
/*!*******************************!*\
  !*** ./pages/Resume/index.js ***!
  \*******************************/
/*! exports provided: default, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.less */ "./pages/Resume/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/plugins */ "./plugins/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./pages/Resume/components/index.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state */ "./pages/Resume/state.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _state__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fullpage_react_fullpage_dist_react_fullpage_commonjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullpage/react-fullpage/dist/react-fullpage-commonjs */ "@fullpage/react-fullpage/dist/react-fullpage-commonjs");
/* harmony import */ var _fullpage_react_fullpage_dist_react_fullpage_commonjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fullpage_react_fullpage_dist_react_fullpage_commonjs__WEBPACK_IMPORTED_MODULE_6__);
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






 // eslint-disable-next-line


var options = {
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  anchors: ['resume-index', 'resume-introduction', 'resume-skill', 'resume-experience', 'resume-project', 'resume-article'],
  navigationTooltips: ['简介', '自我介绍', '技能', '工作经历', '项目经验', '个人博客'],
  scrollBar: false,
  navigation: true,
  verticalAlign: false,
  paddingTop: '30px',
  paddingBottom: '30px',
  arrowNavigation: true
};
var Resume = (_dec = Object(_plugins__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return state.blog;
}, _state__WEBPACK_IMPORTED_MODULE_4__), _dec(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(Resume, _Component);

  function Resume() {
    _classCallCheck(this, Resume);

    return _possibleConstructorReturn(this, _getPrototypeOf(Resume).apply(this, arguments));
  }

  _createClass(Resume, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "resume-container"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", null, "\u5218\u5C0F\u806A - \u5218\u5C0F\u806A\u7684\u4E2A\u4EBA\u7B80\u5386 | Web\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08 | Front-end Web Developer"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
        name: "keywords",
        content: "\u5218\u5C0F\u806A,\u4E2A\u4EBA\u7B80\u5386,web\u524D\u7AEF,\u5DE5\u7A0B\u5E08,\u5218\u5C0F\u806A\u7684\u4E2A\u4EBA\u7B80\u5386,frontend,web,developer,job,vue,react"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
        name: "description",
        content: "\u7CBE\u901A\u524D\u7AEF\uFF0C\u6D89\u730E\u540E\u7AEF\uFF0C\u5BF9\u524D\u7AEF\u6709\u7740\u6D53\u539A\u7684\u5174\u8DA3\uFF1B\u5E0C\u671B\u80FD\u591F\u5728\u524D\u7AEF\u8FD9\u6761\u8DEF\u4E0A\u4E00\u76F4\u8D70\u4E0B\u53BB\u3002"
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fullpage_react_fullpage_dist_react_fullpage_commonjs__WEBPACK_IMPORTED_MODULE_6___default.a, _extends({}, options, {
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fullpage_react_fullpage_dist_react_fullpage_commonjs__WEBPACK_IMPORTED_MODULE_6___default.a.Wrapper, {
            className: "resume-section-container"
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: "section resume-section resume-section-index"
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["ResumeIndex"], null)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: "section resume-section resume-section-introduction"
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["ResumeIntroduction"], null)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: "section resume-section resume-section-skill"
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["ResumeSkill"], null)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: "section resume-section resume-section-experience"
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["ResumeExperience"], null)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: "section resume-section resume-section-project"
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["ResumeProject"], null)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: "section resume-section resume-section-article"
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["ResumeArticle"], null)));
        }
      })));
    }
  }]);

  return Resume;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"])) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Resume);


/***/ }),

/***/ "./pages/Resume/index.less":
/*!*********************************!*\
  !*** ./pages/Resume/index.less ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/Resume/state.js":
/*!*******************************!*\
  !*** ./pages/Resume/state.js ***!
  \*******************************/
/*! exports provided: setState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setState", function() { return setState; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SET_STATE = 'resume/SET_STATE';
var setState = function setState(state) {
  return {
    type: SET_STATE,
    payload: state
  };
};

var _getInitState = function _getInitState() {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _getInitState();
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_STATE:
      return _objectSpread({}, state, action.payload);

    default:
      return state;
  }
});

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_locale_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/locale-provider */ "antd/lib/locale-provider");
/* harmony import */ var antd_lib_locale_provider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/pages/index.less */ "./pages/index.less");
/* harmony import */ var _pages_index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_index_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/polyfill */ "@babel/polyfill");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/constants */ "./constants/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components */ "./components/index.js");
/* harmony import */ var _components_Loading_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/Loading/state */ "./components/Loading/state.js");
/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/engine */ "./engine/index.js");
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/resources */ "./resources/index.js");
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_resources__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _plugins_ReduxEnhance__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/plugins/ReduxEnhance */ "./plugins/ReduxEnhance.js");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/plugins */ "./plugins/index.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var redux_pagan__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! redux-pagan */ "redux-pagan");
/* harmony import */ var redux_pagan__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(redux_pagan__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var antd_lib_locale_provider_zh_CN__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! antd/lib/locale-provider/zh_CN */ "antd/lib/locale-provider/zh_CN");
/* harmony import */ var antd_lib_locale_provider_zh_CN__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_zh_CN__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _Blog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Blog */ "./pages/Blog/index.js");
/* harmony import */ var _Resume__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Resume */ "./pages/Resume/index.js");



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

























var reducer = Object(redux__WEBPACK_IMPORTED_MODULE_12__["combineReducers"])({
  i18n: redux_pagan__WEBPACK_IMPORTED_MODULE_19__["i18n"],
  loading: _components_Loading_state__WEBPACK_IMPORTED_MODULE_6__["default"],
  blog: _Blog__WEBPACK_IMPORTED_MODULE_24__["reducer"],
  resume: _Resume__WEBPACK_IMPORTED_MODULE_25__["reducer"]
});

var makeStore = function makeStore() {
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_12__["createStore"])(reducer, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_22__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_12__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_20___default.a, Object(redux_logger__WEBPACK_IMPORTED_MODULE_18__["createLogger"])({
    predicate: function predicate() {
      return process.env.ENV !== 'production';
    }
  }))));
  _plugins_ReduxEnhance__WEBPACK_IMPORTED_MODULE_9__["init"](store, _resources__WEBPACK_IMPORTED_MODULE_8___default.a);
  return store;
};

var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MyApp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MyApp)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isReady: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      try {
        _engine__WEBPACK_IMPORTED_MODULE_7__["default"].init({
          storage: new _plugins__WEBPACK_IMPORTED_MODULE_10__["Storage"]({
            scope: 'hankliu'
          }),
          onInitSuccess: _this.onInitSuccess,
          showLoading: _components__WEBPACK_IMPORTED_MODULE_5__["Loading"].show,
          showToast: _components__WEBPACK_IMPORTED_MODULE_5__["Toast"].show,
          hideLoading: _components__WEBPACK_IMPORTED_MODULE_5__["Loading"].hide,
          onLogout: _this.onLogout
        });
      } catch (error) {
        // eslint-disable-next-line
        console.error(error);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onInitSuccess", function () {
      _this.setState({
        isReady: true
      });
    });

    return _this;
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store,
          router = _this$props.router;

      next_router__WEBPACK_IMPORTED_MODULE_17___default.a.onRouteChangeStart = function () {
        nprogress__WEBPACK_IMPORTED_MODULE_14___default.a.start();
      };

      next_router__WEBPACK_IMPORTED_MODULE_17___default.a.onRouteChangeComplete = function () {
        nprogress__WEBPACK_IMPORTED_MODULE_14___default.a.done();
      };

      next_router__WEBPACK_IMPORTED_MODULE_17___default.a.onRouteChangeError = function () {
        nprogress__WEBPACK_IMPORTED_MODULE_14___default.a.done();
      };

      return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_locale_provider__WEBPACK_IMPORTED_MODULE_1___default.a, {
        locale: antd_lib_locale_provider_zh_CN__WEBPACK_IMPORTED_MODULE_23___default.a
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_15__["Provider"], {
        store: store
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_11__["Container"], null, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_13___default.a, null, _constants__WEBPACK_IMPORTED_MODULE_4__["Metas"].map(function (_ref) {
        var name = _ref.name,
            content = _ref.content;
        return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("meta", {
          name: name,
          content: content,
          key: name
        });
      }), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("script", {
        src: "/scripts/baidu.statistics.min.js",
        type: "text/javascript"
      })), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(Component, _extends({}, pageProps, {
        router: router
      })), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Loading"], null))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
        var Component, ctx, pageProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref2.Component, ctx = _ref2.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_11___default.a);

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_21___default()(makeStore)(Object(next_router__WEBPACK_IMPORTED_MODULE_17__["withRouter"])(MyApp)));

/***/ }),

/***/ "./pages/index.less":
/*!**************************!*\
  !*** ./pages/index.less ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./plugins/Platform.js":
/*!*****************************!*\
  !*** ./plugins/Platform.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Platform; });
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "eventemitter3");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Platform = function Platform() {
  _classCallCheck(this, Platform);
};

_defineProperty(Platform, "_eventEmitter", new eventemitter3__WEBPACK_IMPORTED_MODULE_0___default.a());

_defineProperty(Platform, "Event", {
  SIDE_MENU_COLLAPSED: 'SIDE_MENU_COLLAPSED'
});

_defineProperty(Platform, "_mediaQueryListHandles", []);

_defineProperty(Platform, "isServer", function () {
  return typeof window === 'undefined';
});

_defineProperty(Platform, "setPageTitle", function (title) {
  if (Platform.isServer()) {
    return;
  }

  document.title = title;
});

_defineProperty(Platform, "getUrl", function () {
  return Platform.isServer() ? '' : window.location.href.replace(window.location.hash, '');
});

_defineProperty(Platform, "getHref", function () {
  return Platform.isServer() ? '' : window.location.href;
});

_defineProperty(Platform, "getUrlOrigin", function () {
  return Platform.isServer() ? '' : window.location.origin;
});

_defineProperty(Platform, "isDebugJSSDK", function () {
  return Platform.isServer() ? false : /DEBUG_JS_SDK/.test(window.location.hash);
});

_defineProperty(Platform, "isWechat", function () {
  return Platform.isServer() ? false : /MicroMessenger/.test(window.navigator.userAgent);
});

_defineProperty(Platform, "getSignatureUrl", function () {
  return Platform.isServer() ? '' : "".concat(Platform.getUrlOrigin(), "/v1/api/wechat/getJsConfig");
});

_defineProperty(Platform, "isBuildRelease", function () {
  return "development" === 'production';
});

_defineProperty(Platform, "isEnvProduction", function () {
  return process.env.ENV === 'production';
});

_defineProperty(Platform, "clientWidth", function () {
  return Platform.isServer() ? 0 : window.document.body.clientWidth;
});

_defineProperty(Platform, "isMobile", function () {
  return Platform.isServer() ? false : /Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent);
});

_defineProperty(Platform, "isWebkit", function () {
  return Platform.isServer() ? false : /webkit/i.test(window.navigator.userAgent);
});

_defineProperty(Platform, "emit", function (eventType, collapsed) {
  Platform._eventEmitter.emit(eventType, collapsed);
});

_defineProperty(Platform, "addCollapsedListener", function (eventType, listener) {
  Platform._eventEmitter.addListener(eventType, listener);
});

_defineProperty(Platform, "removeCollapsedListener", function (eventType, listener) {
  Platform._eventEmitter.removeListener(eventType, listener);
});

_defineProperty(Platform, "addWindowMatchMediaListeners", function (mediaQueryStrings, listener) {
  if (Platform.isServer()) {
    return;
  }

  var mediaQueryLists = [];

  lodash__WEBPACK_IMPORTED_MODULE_1___default.a.forEach(mediaQueryStrings, function (mediaQueryString) {
    var mediaQueryList = window.matchMedia(mediaQueryString);
    mediaQueryList.addListener(listener);
    mediaQueryLists.push(mediaQueryList);
  });

  Platform._mediaQueryListHandles.push({
    listener: listener,
    mediaQueryLists: mediaQueryLists
  });
});

_defineProperty(Platform, "removeWindowMatchMediaListeners", function (listener) {
  if (Platform.isServer()) {
    return;
  }

  var handles = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.remove(Platform._mediaQueryListHandles, function (mediaQueryListHandle) {
    return mediaQueryListHandle.listener === listener;
  });

  lodash__WEBPACK_IMPORTED_MODULE_1___default.a.forEach(handles, function (handle) {
    lodash__WEBPACK_IMPORTED_MODULE_1___default.a.forEach(handle.mediaQueryLists, function (mediaQueryList) {
      mediaQueryList.removeListener(listener);
    });
  });
});

_defineProperty(Platform, "isChildOf", function (child, parent) {
  if (child.parentNode === parent) {
    return true;
  }

  if (child.parentNode === null) {
    return false;
  }

  return Element.isChildOf(child.parentNode, parent);
});



/***/ }),

/***/ "./plugins/ReduxEnhance.js":
/*!*********************************!*\
  !*** ./plugins/ReduxEnhance.js ***!
  \*********************************/
/*! exports provided: init, loadLang, getLang, connect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLang", function() { return loadLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLang", function() { return getLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return connect; });
/* harmony import */ var redux_pagan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-pagan */ "redux-pagan");
/* harmony import */ var redux_pagan__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_pagan__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }





var store = null;
var translations = null;
var cachedI18n = {};

var format = function format(keys) {
  var result = (keys || '').toString();

  for (var i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); i++) {
    var reg = new RegExp("({)".concat(i, "(})"), 'g');
    result = result.replace(reg, i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]);
  }

  return result;
};

var init = function init(_store, _translations) {
  store = _store;
  translations = _translations; // eslint-disable-next-line

  loadLang('zh-CN');
};
var loadLang = function loadLang(lang) {
  store.dispatch(redux_pagan__WEBPACK_IMPORTED_MODULE_0__["loadLang"](lang, function () {
    return translations[lang];
  }));
};
var getLang = function getLang() {
  var i18nState = store.getState().i18n;

  if (cachedI18n[i18nState.locale]) {
    return cachedI18n[i18nState.locale];
  } // 第一个 key 一定是 app，写在这里后其它地方可以省略，同时起到缓存作用


  var originalI18n = redux_pagan__WEBPACK_IMPORTED_MODULE_0__["getLang"](i18nState, 'app');
  cachedI18n[i18nState.locale] = originalI18n;
  return cachedI18n[i18nState.locale];
};

function i18n(key) {
  var originalI18n = getLang();
  var args = key.split('.');

  if (this.$i18nPath) {
    args.unshift(this.$i18nPath);
  }

  for (var _len = arguments.length, formats = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    formats[_key - 1] = arguments[_key];
  }

  if (!lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEmpty(formats)) {
    return format.apply(void 0, [originalI18n.apply(void 0, _toConsumableArray(args)).s].concat(formats));
  }

  return originalI18n.apply(void 0, _toConsumableArray(args)).s;
}

function rootI18n(key) {
  var originalI18n = getLang();
  var args = key.split('.');

  for (var _len2 = arguments.length, formats = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    formats[_key2 - 1] = arguments[_key2];
  }

  if (!lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEmpty(formats)) {
    return format.apply(void 0, [originalI18n.apply(void 0, _toConsumableArray(args)).s].concat(formats));
  }

  return originalI18n.apply(void 0, _toConsumableArray(args)).s;
}

react__WEBPACK_IMPORTED_MODULE_2__["Component"].prototype.$i18n = i18n;
react__WEBPACK_IMPORTED_MODULE_2__["Component"].prototype.$rootI18n = rootI18n;
react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"].prototype.$i18n = i18n;
react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"].prototype.$rootI18n = rootI18n;

function i18nFromProps(key) {
  var originalI18n = this.props.translations;
  var args = key.split('.');

  if (this.$i18nPath) {
    args.unshift(this.$i18nPath);
  }

  args.unshift('app');

  var originalI18nValue = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(originalI18n, args.join('.'));

  for (var _len3 = arguments.length, formats = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    formats[_key3 - 1] = arguments[_key3];
  }

  if (!lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEmpty(formats)) {
    return format.apply(void 0, [originalI18nValue].concat(formats));
  }

  return originalI18nValue;
}

react__WEBPACK_IMPORTED_MODULE_2__["Component"].prototype.$i18nFromProps = i18nFromProps;
react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"].prototype.$i18nFromProps = i18nFromProps;

react__WEBPACK_IMPORTED_MODULE_2__["Component"].prototype.$dispatch = function () {
  var _store2;

  return (_store2 = store).dispatch.apply(_store2, arguments);
};

var connect = function connect() {
  for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }

  var getProps = args.shift(0, 1);
  args.unshift(function () {
    var props = (getProps ? getProps.apply(void 0, arguments) : {}) || {};
    props.dispatch = store.dispatch;
    return props;
  });
  return react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"].apply(react_redux__WEBPACK_IMPORTED_MODULE_1__, args);
};
/* harmony default export */ __webpack_exports__["default"] = (connect);

/***/ }),

/***/ "./plugins/Storage.js":
/*!****************************!*\
  !*** ./plugins/Storage.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Storage; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var debug = __webpack_require__(/*! debug */ "debug")('hl-website/Storage');

var Storage = function Storage() {
  var _this = this;

  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$scope = _ref.scope,
      scope = _ref$scope === void 0 ? '' : _ref$scope;

  _classCallCheck(this, Storage);

  _defineProperty(this, "getItem", function (key, isTemporary) {
    try {
      var storage = isTemporary ? sessionStorage : localStorage;
      var data = storage.getItem("".concat(_this.scope, "/").concat(key));

      if (data) {
        return JSON.parse(data);
      }

      return undefined;
    } catch (error) {
      debug(error);
      return undefined;
    }
  });

  _defineProperty(this, "setItem", function (key, value, isTemporary) {
    var storage = isTemporary ? sessionStorage : localStorage;

    if (value === undefined) {
      storage.removeItem("".concat(_this.scope, "/").concat(key));
      return;
    }

    var data = JSON.stringify(value);
    storage.setItem("".concat(_this.scope, "/").concat(key), data);
  });

  _defineProperty(this, "removeItem", function (key, isTemporary) {
    var storage = isTemporary ? sessionStorage : localStorage;
    storage.removeItem("".concat(_this.scope, "/").concat(key));
  });

  _defineProperty(this, "clear", function (isTemporary) {
    var storage = isTemporary ? sessionStorage : localStorage;
    storage.clear();
  });

  this.scope = scope;
};



/***/ }),

/***/ "./plugins/WeChat.js":
/*!***************************!*\
  !*** ./plugins/WeChat.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Wechat; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Platform */ "./plugins/Platform.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Wechat = function Wechat() {
  _classCallCheck(this, Wechat);
};

_defineProperty(Wechat, "_promiseConfigDone", null);

_defineProperty(Wechat, "_resolveConfig", null);

_defineProperty(Wechat, "_rejectConfig", null);

_defineProperty(Wechat, "_wx", null);

_defineProperty(Wechat, "init",
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var url, retryCount;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (_Platform__WEBPACK_IMPORTED_MODULE_3__["default"].isWechat()) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return");

        case 2:
          // eslint-disable-next-line
          Wechat._wx = __webpack_require__(/*! weixin-js-sdk */ "weixin-js-sdk");
          url = _Platform__WEBPACK_IMPORTED_MODULE_3__["default"].getUrl();
          retryCount = 0;

          if (!lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEmpty(Wechat._promiseConfigDone)) {
            _context.next = 11;
            break;
          }

          Wechat._promiseConfigDone = new Promise(function (resolve, reject) {
            Wechat._resolveConfig = resolve;
            Wechat._rejectConfig = reject;
          });

          Wechat._wx.ready(function () {
            Wechat._resolveConfig();
          });

          Wechat._wx.error(function (error) {
            if (error.errMsg && retryCount <= 1) {
              Wechat.config(url);
              retryCount++;
            } else {
              Wechat._rejectConfig(error);
            }
          });

          _context.next = 11;
          return Wechat.config(url);

        case 11:
          _context.next = 13;
          return Wechat._promiseConfigDone;

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
})));

_defineProperty(Wechat, "config",
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(url) {
    var signatureUrl, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            signatureUrl = _Platform__WEBPACK_IMPORTED_MODULE_3__["default"].getSignatureUrl();

            if (signatureUrl) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return");

          case 4:
            _context2.next = 6;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(signatureUrl, {
              params: {
                clientUrl: encodeURI(url)
              },
              ignoreLoading: true
            });

          case 6:
            result = _context2.sent;

            Wechat._wx.config({
              beta: true,
              debug: _Platform__WEBPACK_IMPORTED_MODULE_3__["default"].isDebugJSSDK(),
              appId: result.appId,
              timestamp: result.timestamp,
              nonceStr: result.nonceStr,
              signature: result.signature,
              jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
            });

            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);

            if (_Platform__WEBPACK_IMPORTED_MODULE_3__["default"].isDebugJSSDK()) {
              alert(_context2.t0.message);
            }

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 10]]);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}());

_defineProperty(Wechat, "retryToConfig",
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(url) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            Wechat._promiseConfigDone = null;
            Wechat.config(url);

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function (_x2) {
    return _ref3.apply(this, arguments);
  };
}());

_defineProperty(Wechat, "initMenuShareTimeline",
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
  var _ref5,
      title,
      link,
      imgUrl,
      shareImgUrl,
      _args4 = arguments;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _ref5 = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {}, title = _ref5.title, link = _ref5.link, imgUrl = _ref5.imgUrl;

          if (_Platform__WEBPACK_IMPORTED_MODULE_3__["default"].isWechat()) {
            _context4.next = 3;
            break;
          }

          return _context4.abrupt("return");

        case 3:
          _context4.next = 5;
          return Wechat._promiseConfigDone;

        case 5:
          shareImgUrl = encodeURI(imgUrl || "".concat(_Platform__WEBPACK_IMPORTED_MODULE_3__["default"].getUrlOrigin(), "/favicon.ico"));

          if (_Platform__WEBPACK_IMPORTED_MODULE_3__["default"].isDebugJSSDK()) {
            alert("title: ".concat(title, "\n link:").concat(link, "\n imgUrl:").concat(shareImgUrl));
          }

          Wechat._wx.onMenuShareTimeline({
            title: title,
            link: link,
            imgUrl: shareImgUrl
          });

        case 8:
        case "end":
          return _context4.stop();
      }
    }
  }, _callee4, this);
})));

_defineProperty(Wechat, "initMenuShareAppMessage",
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
  var _ref7,
      title,
      description,
      link,
      imgUrl,
      shareImgUrl,
      _args5 = arguments;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _ref7 = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {}, title = _ref7.title, description = _ref7.description, link = _ref7.link, imgUrl = _ref7.imgUrl;

          if (_Platform__WEBPACK_IMPORTED_MODULE_3__["default"].isWechat()) {
            _context5.next = 3;
            break;
          }

          return _context5.abrupt("return");

        case 3:
          _context5.next = 5;
          return Wechat._promiseConfigDone;

        case 5:
          shareImgUrl = encodeURI(imgUrl || "".concat(_Platform__WEBPACK_IMPORTED_MODULE_3__["default"].getUrlOrigin(), "/favicon.ico"));

          if (_Platform__WEBPACK_IMPORTED_MODULE_3__["default"].isDebugJSSDK()) {
            alert("title: ".concat(title, "\ndescription: ").concat(description, "\n link:").concat(link, "\n imgUrl:").concat(shareImgUrl));
          }

          Wechat._wx.onMenuShareAppMessage({
            title: title,
            desc: description,
            link: link,
            imgUrl: shareImgUrl
          });

        case 8:
        case "end":
          return _context5.stop();
      }
    }
  }, _callee5, this);
})));



/***/ }),

/***/ "./plugins/index.js":
/*!**************************!*\
  !*** ./plugins/index.js ***!
  \**************************/
/*! exports provided: Platform, connect, WeChat, Storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Platform */ "./plugins/Platform.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return _Platform__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ReduxEnhance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReduxEnhance */ "./plugins/ReduxEnhance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return _ReduxEnhance__WEBPACK_IMPORTED_MODULE_1__["connect"]; });

/* harmony import */ var _WeChat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WeChat */ "./plugins/WeChat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WeChat", function() { return _WeChat__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Storage */ "./plugins/Storage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return _Storage__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "./resources/index.js":
/*!****************************!*\
  !*** ./resources/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var zh = __webpack_require__(/*! ./zh-CN */ "./resources/zh-CN.js");

module.exports = {
  'zh-CN': zh
};

/***/ }),

/***/ "./resources/zh-CN.js":
/*!****************************!*\
  !*** ./resources/zh-CN.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  app: {
    exception: {
      403: '抱歉，你无权访问该页面',
      404: '抱歉，你访问的页面不存在',
      500: '抱歉，服务器出错了',
      back: '返回首页'
    },
    footer: {
      copyright: 'Copyright © {0} {1} | Power & Designed by HankLiu'
    }
  }
};

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@fullpage/react-fullpage/dist/react-fullpage-commonjs":
/*!************************************************************************!*\
  !*** external "@fullpage/react-fullpage/dist/react-fullpage-commonjs" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fullpage/react-fullpage/dist/react-fullpage-commonjs");

/***/ }),

/***/ "antd/lib/carousel":
/*!************************************!*\
  !*** external "antd/lib/carousel" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/carousel");

/***/ }),

/***/ "antd/lib/icon":
/*!********************************!*\
  !*** external "antd/lib/icon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/locale-provider":
/*!*******************************************!*\
  !*** external "antd/lib/locale-provider" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider");

/***/ }),

/***/ "antd/lib/locale-provider/zh_CN":
/*!*************************************************!*\
  !*** external "antd/lib/locale-provider/zh_CN" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/zh_CN");

/***/ }),

/***/ "antd/lib/message":
/*!***********************************!*\
  !*** external "antd/lib/message" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "antd/lib/modal":
/*!*********************************!*\
  !*** external "antd/lib/modal" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ "antd/lib/popover":
/*!***********************************!*\
  !*** external "antd/lib/popover" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover");

/***/ }),

/***/ "antd/lib/progress":
/*!************************************!*\
  !*** external "antd/lib/progress" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/progress");

/***/ }),

/***/ "antd/lib/spin":
/*!********************************!*\
  !*** external "antd/lib/spin" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),

/***/ "eventemitter3":
/*!********************************!*\
  !*** external "eventemitter3" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("eventemitter3");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "qrcode.react":
/*!*******************************!*\
  !*** external "qrcode.react" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("qrcode.react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-svg":
/*!****************************!*\
  !*** external "react-svg" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-svg");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-pagan":
/*!******************************!*\
  !*** external "redux-pagan" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-pagan");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "weixin-js-sdk":
/*!********************************!*\
  !*** external "weixin-js-sdk" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("weixin-js-sdk");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map