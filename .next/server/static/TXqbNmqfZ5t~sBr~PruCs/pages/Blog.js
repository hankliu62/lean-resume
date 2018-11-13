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
/******/ 	return __webpack_require__(__webpack_require__.s = 70);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "eventemitter3"
var external_eventemitter3_ = __webpack_require__(31);
var external_eventemitter3_default = /*#__PURE__*/__webpack_require__.n(external_eventemitter3_);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// CONCATENATED MODULE: ./plugins/Platform.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Platform = function Platform() {
  _classCallCheck(this, Platform);
};

_defineProperty(Platform, "_eventEmitter", new external_eventemitter3_default.a());

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
  return "production" === 'production';
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

  external_lodash_default.a.forEach(mediaQueryStrings, function (mediaQueryString) {
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

  var handles = external_lodash_default.a.remove(Platform._mediaQueryListHandles, function (mediaQueryListHandle) {
    return mediaQueryListHandle.listener === listener;
  });

  external_lodash_default.a.forEach(handles, function (handle) {
    external_lodash_default.a.forEach(handle.mediaQueryLists, function (mediaQueryList) {
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


// EXTERNAL MODULE: ./plugins/ReduxEnhance.js
var ReduxEnhance = __webpack_require__(9);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(3);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(17);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./plugins/WeChat.js


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function WeChat_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WeChat_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Wechat = function Wechat() {
  WeChat_classCallCheck(this, Wechat);
};

WeChat_defineProperty(Wechat, "_promiseConfigDone", null);

WeChat_defineProperty(Wechat, "_resolveConfig", null);

WeChat_defineProperty(Wechat, "_rejectConfig", null);

WeChat_defineProperty(Wechat, "_wx", null);

WeChat_defineProperty(Wechat, "init",
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regenerator_default.a.mark(function _callee() {
  var url, retryCount;
  return regenerator_default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (Platform.isWechat()) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return");

        case 2:
          // eslint-disable-next-line
          Wechat._wx = __webpack_require__(46);
          url = Platform.getUrl();
          retryCount = 0;

          if (!external_lodash_default.a.isEmpty(Wechat._promiseConfigDone)) {
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

WeChat_defineProperty(Wechat, "config",
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee2(url) {
    var signatureUrl, result;
    return regenerator_default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            signatureUrl = Platform.getSignatureUrl();

            if (signatureUrl) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return");

          case 4:
            _context2.next = 6;
            return external_axios_default.a.get(signatureUrl, {
              params: {
                clientUrl: encodeURI(url)
              },
              ignoreLoading: true
            });

          case 6:
            result = _context2.sent;

            Wechat._wx.config({
              beta: true,
              debug: Platform.isDebugJSSDK(),
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

            if (Platform.isDebugJSSDK()) {
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

WeChat_defineProperty(Wechat, "retryToConfig",
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee3(url) {
    return regenerator_default.a.wrap(function _callee3$(_context3) {
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

WeChat_defineProperty(Wechat, "initMenuShareTimeline",
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regenerator_default.a.mark(function _callee4() {
  var _ref5,
      title,
      link,
      imgUrl,
      shareImgUrl,
      _args4 = arguments;

  return regenerator_default.a.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _ref5 = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {}, title = _ref5.title, link = _ref5.link, imgUrl = _ref5.imgUrl;

          if (Platform.isWechat()) {
            _context4.next = 3;
            break;
          }

          return _context4.abrupt("return");

        case 3:
          _context4.next = 5;
          return Wechat._promiseConfigDone;

        case 5:
          shareImgUrl = encodeURI(imgUrl || "".concat(Platform.getUrlOrigin(), "/favicon.ico"));

          if (Platform.isDebugJSSDK()) {
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

WeChat_defineProperty(Wechat, "initMenuShareAppMessage",
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regenerator_default.a.mark(function _callee5() {
  var _ref7,
      title,
      description,
      link,
      imgUrl,
      shareImgUrl,
      _args5 = arguments;

  return regenerator_default.a.wrap(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _ref7 = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {}, title = _ref7.title, description = _ref7.description, link = _ref7.link, imgUrl = _ref7.imgUrl;

          if (Platform.isWechat()) {
            _context5.next = 3;
            break;
          }

          return _context5.abrupt("return");

        case 3:
          _context5.next = 5;
          return Wechat._promiseConfigDone;

        case 5:
          shareImgUrl = encodeURI(imgUrl || "".concat(Platform.getUrlOrigin(), "/favicon.ico"));

          if (Platform.isDebugJSSDK()) {
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


// CONCATENATED MODULE: ./plugins/Storage.js
function Storage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Storage_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var debug = __webpack_require__(37)('hl-website/Storage');

var Storage = function Storage() {
  var _this = this;

  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$scope = _ref.scope,
      scope = _ref$scope === void 0 ? '' : _ref$scope;

  Storage_classCallCheck(this, Storage);

  Storage_defineProperty(this, "getItem", function (key, isTemporary) {
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

  Storage_defineProperty(this, "setItem", function (key, value, isTemporary) {
    var storage = isTemporary ? sessionStorage : localStorage;

    if (value === undefined) {
      storage.removeItem("".concat(_this.scope, "/").concat(key));
      return;
    }

    var data = JSON.stringify(value);
    storage.setItem("".concat(_this.scope, "/").concat(key), data);
  });

  Storage_defineProperty(this, "removeItem", function (key, isTemporary) {
    var storage = isTemporary ? sessionStorage : localStorage;
    storage.removeItem("".concat(_this.scope, "/").concat(key));
  });

  Storage_defineProperty(this, "clear", function (isTemporary) {
    var storage = isTemporary ? sessionStorage : localStorage;
    storage.clear();
  });

  this.scope = scope;
};


// CONCATENATED MODULE: ./plugins/index.js
/* unused concated harmony import Platform */
/* concated harmony reexport connect */__webpack_require__.d(__webpack_exports__, "b", function() { return ReduxEnhance["a" /* connect */]; });
/* unused concated harmony import WeChat */
/* concated harmony reexport Storage */__webpack_require__.d(__webpack_exports__, "a", function() { return Storage; });






/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ 29:
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

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

module.exports = require("eventemitter3");

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

module.exports = require("weixin-js-sdk");

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);
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





var Blog = (_dec = Object(_plugins__WEBPACK_IMPORTED_MODULE_1__[/* connect */ "b"])(function (state) {
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

/***/ 52:
/***/ (function(module, exports) {



/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("redux-pagan");

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(48);


/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return init; });
/* unused harmony export loadLang */
/* unused harmony export getLang */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return connect; });
/* harmony import */ var redux_pagan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var redux_pagan__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_pagan__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
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
  var _store;

  return (_store = store).dispatch.apply(_store, arguments);
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
/* unused harmony default export */ var _unused_webpack_default_export = (connect);

/***/ })

/******/ });