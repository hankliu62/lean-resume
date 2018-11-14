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
/******/ 	return __webpack_require__(__webpack_require__.s = 64);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SocialAccounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Information; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Skills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Experiences; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Projects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Metas; });
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
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "antd/lib/carousel"
var carousel_ = __webpack_require__(17);
var carousel_default = /*#__PURE__*/__webpack_require__.n(carousel_);

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__(6);
var icon_default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: ./components/Carousel/index.less
var Carousel = __webpack_require__(29);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(5);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(1);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./components/Carousel/index.js



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Carousel_CustomCarousel =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(CustomCarousel, _PureComponent);

  function CustomCarousel() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CustomCarousel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CustomCarousel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "bindCarousel", function (el) {
      _this.carouselEl = el;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickPrev", function () {
      if (_this.carouselEl) {
        _this.carouselEl.prev();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickNext", function () {
      if (_this.carouselEl) {
        _this.carouselEl.next();
      }
    });

    return _this;
  }

  _createClass(CustomCarousel, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          effect = _this$props.effect,
          arrowPosition = _this$props.arrowPosition,
          allowArrow = _this$props.allowArrow,
          leftAllowIconType = _this$props.leftAllowIconType,
          rightAllowIconType = _this$props.rightAllowIconType,
          otherOptions = _objectWithoutProperties(_this$props, ["className", "children", "effect", "arrowPosition", "allowArrow", "leftAllowIconType", "rightAllowIconType"]);

      return external_react_default.a.createElement("div", {
        className: external_classnames_default()('custom-carousel-container', (_classNames = {}, _defineProperty(_classNames, className, className), _defineProperty(_classNames, 'with-arrow', allowArrow), _classNames))
      }, external_react_default.a.createElement(icon_default.a, {
        type: leftAllowIconType,
        onClick: this.onClickPrev,
        className: "arrow-".concat(arrowPosition)
      }), external_react_default.a.createElement(carousel_default.a, _extends({
        effect: effect
      }, otherOptions, {
        ref: this.bindCarousel
      }), children), external_react_default.a.createElement(icon_default.a, {
        type: rightAllowIconType,
        onClick: this.onClickNext,
        className: "arrow-".concat(arrowPosition)
      }));
    }
  }]);

  return CustomCarousel;
}(external_react_["PureComponent"]);

_defineProperty(Carousel_CustomCarousel, "defaultProps", {
  effect: 'scrollx',
  arrowPosition: 'middle',
  leftAllowIconType: 'left-circle',
  rightAllowIconType: 'right-circle'
});


// EXTERNAL MODULE: ./components/Footer/index.less
var components_Footer = __webpack_require__(30);

// CONCATENATED MODULE: ./components/Footer/index.js
function Footer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Footer_typeof = function _typeof(obj) { return typeof obj; }; } else { Footer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Footer_typeof(obj); }

function Footer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Footer_possibleConstructorReturn(self, call) { if (call && (Footer_typeof(call) === "object" || typeof call === "function")) { return call; } return Footer_assertThisInitialized(self); }

function Footer_getPrototypeOf(o) { Footer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Footer_getPrototypeOf(o); }

function Footer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Footer_setPrototypeOf(subClass, superClass); }

function Footer_setPrototypeOf(o, p) { Footer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Footer_setPrototypeOf(o, p); }

function Footer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Footer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Footer_Footer =
/*#__PURE__*/
function (_PureComponent) {
  Footer_inherits(Footer, _PureComponent);

  function Footer() {
    var _getPrototypeOf2;

    var _this;

    Footer_classCallCheck(this, Footer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Footer_possibleConstructorReturn(this, (_getPrototypeOf2 = Footer_getPrototypeOf(Footer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Footer_defineProperty(Footer_assertThisInitialized(Footer_assertThisInitialized(_this)), "render", function () {
      var year = new Date().getFullYear();
      return external_react_default.a.createElement("footer", {
        className: "footer"
      }, external_react_default.a.createElement("div", {
        className: "copyright"
      }, _this.$i18n('copyright', year, '沪 ICP 备 XXXXXXX 号')));
    });

    return _this;
  }

  return Footer;
}(external_react_["PureComponent"]);

Footer_defineProperty(Footer_Footer, "$i18nPath", 'footer');


// EXTERNAL MODULE: external "antd/lib/spin"
var spin_ = __webpack_require__(18);
var spin_default = /*#__PURE__*/__webpack_require__.n(spin_);

// EXTERNAL MODULE: ./components/Loading/index.less
var components_Loading = __webpack_require__(31);

// EXTERNAL MODULE: ./components/Loading/state.js
var state = __webpack_require__(14);

// EXTERNAL MODULE: ./plugins/ReduxEnhance.js
var ReduxEnhance = __webpack_require__(13);

// CONCATENATED MODULE: ./components/Loading/index.js


var _dec,
    _class,
    _class2,
    _temp,
    _this2 = undefined;

function Loading_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Loading_typeof = function _typeof(obj) { return typeof obj; }; } else { Loading_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Loading_typeof(obj); }

function Loading_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Loading_possibleConstructorReturn(self, call) { if (call && (Loading_typeof(call) === "object" || typeof call === "function")) { return call; } return Loading_assertThisInitialized(self); }

function Loading_getPrototypeOf(o) { Loading_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Loading_getPrototypeOf(o); }

function Loading_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Loading_setPrototypeOf(subClass, superClass); }

function Loading_setPrototypeOf(o, p) { Loading_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Loading_setPrototypeOf(o, p); }

function Loading_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Loading_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Loading_Loading = (_dec = Object(ReduxEnhance["a" /* connect */])(function (state) {
  return state.loading;
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  Loading_inherits(Loading, _Component);

  function Loading() {
    var _getPrototypeOf2;

    var _this;

    Loading_classCallCheck(this, Loading);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Loading_possibleConstructorReturn(this, (_getPrototypeOf2 = Loading_getPrototypeOf(Loading)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Loading_defineProperty(Loading_assertThisInitialized(Loading_assertThisInitialized(_this)), "state", {
      maxHeight: 0
    });

    Loading_defineProperty(Loading_assertThisInitialized(Loading_assertThisInitialized(_this)), "componentDidMount", function () {
      _this.setState({
        maxHeight: document.body.clientHeight
      });
    });

    Loading_defineProperty(Loading_assertThisInitialized(Loading_assertThisInitialized(_this)), "render", function () {
      var maxHeight = _this.state.maxHeight;
      var isVisible = _this.props.isVisible;
      return external_react_default.a.createElement(spin_default.a, {
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
}(external_react_["Component"]), Loading_defineProperty(_class2, "show", function () {
  _this2.$dispatch(state["c" /* show */]());
}), Loading_defineProperty(_class2, "hide", function () {
  _this2.$dispatch(state["b" /* hide */]());
}), _temp)) || _class);
/* harmony default export */ var components_Loading_0 = (Loading_Loading);
// EXTERNAL MODULE: external "antd/lib/modal"
var modal_ = __webpack_require__(11);
var modal_default = /*#__PURE__*/__webpack_require__.n(modal_);

// EXTERNAL MODULE: ./components/MessageModal/index.less
var components_MessageModal = __webpack_require__(32);

// CONCATENATED MODULE: ./components/MessageModal/index.js


function MessageModal_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MessageModal_typeof = function _typeof(obj) { return typeof obj; }; } else { MessageModal_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MessageModal_typeof(obj); }

function MessageModal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MessageModal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MessageModal_createClass(Constructor, protoProps, staticProps) { if (protoProps) MessageModal_defineProperties(Constructor.prototype, protoProps); if (staticProps) MessageModal_defineProperties(Constructor, staticProps); return Constructor; }

function MessageModal_possibleConstructorReturn(self, call) { if (call && (MessageModal_typeof(call) === "object" || typeof call === "function")) { return call; } return MessageModal_assertThisInitialized(self); }

function MessageModal_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MessageModal_getPrototypeOf(o) { MessageModal_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MessageModal_getPrototypeOf(o); }

function MessageModal_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MessageModal_setPrototypeOf(subClass, superClass); }

function MessageModal_setPrototypeOf(o, p) { MessageModal_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MessageModal_setPrototypeOf(o, p); }






var MessageModal_MessageModal =
/*#__PURE__*/
function (_PureComponent) {
  MessageModal_inherits(MessageModal, _PureComponent);

  function MessageModal() {
    MessageModal_classCallCheck(this, MessageModal);

    return MessageModal_possibleConstructorReturn(this, MessageModal_getPrototypeOf(MessageModal).apply(this, arguments));
  }

  MessageModal_createClass(MessageModal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          visible = _this$props.visible,
          isMobile = _this$props.isMobile,
          children = _this$props.children;
      return external_react_default.a.createElement(modal_default.a, {
        visible: visible,
        title: title,
        onCancel: this.props.onCancel,
        onOk: this.props.onCancel,
        wrapClassName: external_classnames_default()('message-modal', {
          'mobile-message-modal': isMobile
        })
      }, children);
    }
  }]);

  return MessageModal;
}(external_react_["PureComponent"]);


// EXTERNAL MODULE: ./components/QrcodeModal/index.less
var components_QrcodeModal = __webpack_require__(33);

// EXTERNAL MODULE: external "qrcode.react"
var external_qrcode_react_ = __webpack_require__(19);
var external_qrcode_react_default = /*#__PURE__*/__webpack_require__.n(external_qrcode_react_);

// CONCATENATED MODULE: ./components/QrcodeModal/index.js


function QrcodeModal_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { QrcodeModal_typeof = function _typeof(obj) { return typeof obj; }; } else { QrcodeModal_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return QrcodeModal_typeof(obj); }

function QrcodeModal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function QrcodeModal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function QrcodeModal_createClass(Constructor, protoProps, staticProps) { if (protoProps) QrcodeModal_defineProperties(Constructor.prototype, protoProps); if (staticProps) QrcodeModal_defineProperties(Constructor, staticProps); return Constructor; }

function QrcodeModal_possibleConstructorReturn(self, call) { if (call && (QrcodeModal_typeof(call) === "object" || typeof call === "function")) { return call; } return QrcodeModal_assertThisInitialized(self); }

function QrcodeModal_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function QrcodeModal_getPrototypeOf(o) { QrcodeModal_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return QrcodeModal_getPrototypeOf(o); }

function QrcodeModal_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) QrcodeModal_setPrototypeOf(subClass, superClass); }

function QrcodeModal_setPrototypeOf(o, p) { QrcodeModal_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return QrcodeModal_setPrototypeOf(o, p); }







var QrcodeModal_QrcodeModal =
/*#__PURE__*/
function (_PureComponent) {
  QrcodeModal_inherits(QrcodeModal, _PureComponent);

  function QrcodeModal() {
    QrcodeModal_classCallCheck(this, QrcodeModal);

    return QrcodeModal_possibleConstructorReturn(this, QrcodeModal_getPrototypeOf(QrcodeModal).apply(this, arguments));
  }

  QrcodeModal_createClass(QrcodeModal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          visible = _this$props.visible,
          content = _this$props.content,
          isMobile = _this$props.isMobile;
      return external_react_default.a.createElement(modal_default.a, {
        visible: visible,
        footer: null,
        closable: false,
        width: isMobile ? '80%' : '270px',
        onCancel: this.props.onCancel,
        wrapClassName: external_classnames_default()('qrcode-modal', {
          'mobile-qrcode-modal': isMobile
        })
      }, external_react_default.a.createElement(external_qrcode_react_default.a, {
        value: content,
        size: 250
      }));
    }
  }]);

  return QrcodeModal;
}(external_react_["PureComponent"]);


// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__(8);
var message_default = /*#__PURE__*/__webpack_require__.n(message_);

// CONCATENATED MODULE: ./components/Toast/index.js


function Toast_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Toast_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Toast = function Toast() {
  Toast_classCallCheck(this, Toast);
};

Toast_defineProperty(Toast, "Type", {
  INFO: 'info',
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning'
});

Toast_defineProperty(Toast, "show", function (content, type, duration) {
  switch (type) {
    case Toast.Type.INFO:
      message_default.a.info(content, duration);

      break;

    case Toast.Type.SUCCESS:
      message_default.a.success(content, duration);

      break;

    case Toast.Type.WARNING:
      message_default.a.warning(content, duration);

      break;

    default:
      message_default.a.error(content, duration);

  }
});


// CONCATENATED MODULE: ./components/index.js
/* concated harmony reexport Carousel */__webpack_require__.d(__webpack_exports__, "a", function() { return Carousel_CustomCarousel; });
/* unused concated harmony import Footer */
/* concated harmony reexport MessageModal */__webpack_require__.d(__webpack_exports__, "c", function() { return MessageModal_MessageModal; });
/* concated harmony reexport QrcodeModal */__webpack_require__.d(__webpack_exports__, "d", function() { return QrcodeModal_QrcodeModal; });
/* concated harmony reexport Loading */__webpack_require__.d(__webpack_exports__, "b", function() { return components_Loading_0; });
/* concated harmony reexport Toast */__webpack_require__.d(__webpack_exports__, "e", function() { return Toast; });








/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("redux-pagan");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-svg");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return init; });
/* unused harmony export loadLang */
/* unused harmony export getLang */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return connect; });
/* harmony import */ var redux_pagan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var redux_pagan__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_pagan__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
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

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hide; });
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

/* harmony default export */ __webpack_exports__["a"] = (function () {
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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResumeArticle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResumeArticle", function() { return _ResumeArticle__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ResumeExperience__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResumeExperience", function() { return _ResumeExperience__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ResumeIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResumeIndex", function() { return _ResumeIndex__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ResumeIntroduction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResumeIntroduction", function() { return _ResumeIntroduction__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ResumeProject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResumeProject", function() { return _ResumeProject__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _ResumeSkill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResumeSkill", function() { return _ResumeSkill__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/carousel");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("qrcode.react");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "eventemitter3"
var external_eventemitter3_ = __webpack_require__(36);
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
var ReduxEnhance = __webpack_require__(13);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(4);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(20);
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
/* concated harmony reexport Platform */__webpack_require__.d(__webpack_exports__, "a", function() { return Platform; });
/* concated harmony reexport connect */__webpack_require__.d(__webpack_exports__, "c", function() { return ReduxEnhance["a" /* connect */]; });
/* unused concated harmony import WeChat */
/* concated harmony reexport Storage */__webpack_require__.d(__webpack_exports__, "b", function() { return Storage; });






/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/progress");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResumeArticle; });
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
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
        href: _constants__WEBPACK_IMPORTED_MODULE_1__[/* BlogLink */ "a"],
        target: "_blank",
        rel: "noopener noreferrer external nofollow"
      }, "\u4E2A\u4EBA\u535A\u5BA2")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "content-wrapper"
      }, "\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u656C\u8BF7\u671F\u5F85")));
    }
  }]);

  return ResumeArticle;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]);



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResumeExperience; });
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
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








var ResumeExperience =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ResumeExperience, _PureComponent);

  function ResumeExperience(props) {
    var _this;

    _classCallCheck(this, ResumeExperience);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ResumeExperience).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      rotateX: 0,
      rotateY: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "bindExperiences", function (el) {
      _this.experienceEl = el;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setRotates", function (diffLeft, diffTop) {
      _this.setState({
        rotateY: (diffLeft - 375) / 50,
        rotateX: (180 - diffTop) / 50
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseMove", function (e) {
      var isMobile = _this.props.isMobile;

      if (isMobile) {
        return;
      }

      var diffLeft = e.clientX - _this.experienceEl.offsetLeft;
      var diffTop = e.clientY - _this.experienceEl.offsetTop;

      _this.setThrottleRotates(diffLeft, diffTop);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseLeave", function () {
      var isMobile = _this.props.isMobile;

      if (isMobile) {
        return;
      }

      _this.setState({
        rotateX: 0,
        rotateY: 0
      });
    });

    _this.setThrottleRotates = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.throttle(_this.setRotates, 300);
    return _this;
  }

  _createClass(ResumeExperience, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          rotateX = _this$state.rotateX,
          rotateY = _this$state.rotateY;
      var isMobile = this.props.isMobile;
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "resume-experience-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "title-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
        className: "title"
      }, "\u5DE5\u4F5C\u7ECF\u5386")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "experiences-wrapper",
        onMouseMove: this.onMouseMove,
        onMouseLeave: this.onMouseLeave,
        ref: this.bindExperiences,
        style: {
          transform: "rotateY(".concat(rotateY, "deg) rotateX(").concat(rotateX, "deg)")
        }
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__[/* Carousel */ "a"], {
        className: "experiences-carousel",
        effect: "scrollx",
        isMobile: isMobile,
        allowArrow: true,
        dots: !isMobile,
        leftAllowIconType: isMobile ? 'left' : 'left-circle',
        rightAllowIconType: isMobile ? 'right' : 'right-circle'
      }, _constants__WEBPACK_IMPORTED_MODULE_1__[/* Experiences */ "b"].map(function (experience) {
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
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResumeIndex; });
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
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
      }, _constants__WEBPACK_IMPORTED_MODULE_1__[/* User */ "h"].Name)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "signature-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "signature"
      }, _constants__WEBPACK_IMPORTED_MODULE_1__[/* User */ "h"].Signature)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "social-accounts-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
        className: "social-accounts"
      }, _constants__WEBPACK_IMPORTED_MODULE_1__[/* SocialAccounts */ "g"].map(function (account) {
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
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResumeIntroduction; });
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
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
      var isMobile = this.props.isMobile;
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
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('introduction-item')
      }, "\u5BF9\u524D\u7AEF\u65B9\u9762\u6709\u7740\u6D53\u539A\u7684\u5174\u8DA3\uFF0C", isMobile ? '有着四年多的前端工作经验' : '四年来的前端工作经验，使我对前端技术的热情高涨，实战方面得到提升，希望能够在前端这条路上一直走下去', "\uFF1B"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "introduction-item"
      }, "\u505A\u4EBA\u8BDA\u4FE1\uFF0C\u505A\u4E8B\u8E0F\u5B9E\uFF0C\u6027\u683C\u6709\u70B9\u5185\u5411\uFF0C\u5374\u662F\u4E00\u540D\u5178\u578B\u7684\u5B9E\u5E72\u6D3E\uFF1B"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "introduction-item"
      }, "\u6709\u8F83\u5F3A\u7684\u52A8\u624B\u80FD\u529B\uFF0C\u9002\u5E94\u529B\u5F3A\uFF0C\u5728\u5DE5\u4F5C\u548C\u4E1A\u4F59\u65F6\u95F4\u4E2D\uFF0C\u4E0D\u65AD\u63D0\u9AD8\u81EA\u5DF1\uFF0C\u9002\u5E94\u5DE5\u4F5C\u7684\u9700\u8981\uFF1B"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "introduction-item"
      }, "\u5BF9\u5DE5\u4F5C\u8BA4\u771F\u8D1F\u8D23\uFF0C", isMobile ? '能' : '就是做好自己的本职工作，', "\u5728\u89C4\u5B9A\u7684\u65F6\u95F4\u5185\u4FDD\u8D28\u4FDD\u91CF\u7684\u5B8C\u6210\u4EFB\u52A1\uFF1B"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('introduction-item', {
          hidden: isMobile
        })
      }, "\u5B66\u4E60\u80FD\u529B\u5F3A\uFF0C\u524D\u7AEF\u6280\u672F\u4E3B\u8981\u5728\u4E8E\u81EA\u5B66\u3002"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "self-information-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "information-items"
      }, _constants__WEBPACK_IMPORTED_MODULE_5__[/* Information */ "c"].map(function (info) {
        var type = info.type,
            value = info.value;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          className: "information-item",
          key: type
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResumeProject; });
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);


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

      var isMobile = this.props.isMobile;
      var _this$state = this.state,
          isVisibleQr = _this$state.isVisibleQr,
          qrValue = _this$state.qrValue,
          isVisibleSummary = _this$state.isVisibleSummary,
          summary = _this$state.summary;
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "resume-project-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "title-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
        className: "title"
      }, "\u9879\u76EE\u7ECF\u5386")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "projects-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__[/* Carousel */ "a"], {
        className: "projects-carousel",
        effect: isMobile ? 'scrollx' : 'fade',
        isMobile: isMobile,
        allowArrow: true,
        dots: !isMobile,
        leftAllowIconType: isMobile ? 'left' : 'left-circle',
        rightAllowIconType: isMobile ? 'right' : 'right-circle'
      }, _constants__WEBPACK_IMPORTED_MODULE_2__[/* Projects */ "e"].map(function (project) {
        var name = project.name,
            company = project.company,
            link = project.link,
            time = project.time,
            image = project.image,
            duties = project.duties,
            profile = project.profile,
            projectSummary = project.summary;
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "project-wrapper",
          key: company
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "project-item-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "project-item"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "project-image-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
          className: "project-image",
          src: image,
          alt: "Project"
        })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "project-content-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h5", {
          className: "project-name"
        }, "".concat(name).concat(isMobile ? '' : "(".concat(company, ")"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "project-time"
        }, time), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "project-profile",
          title: "profile"
        }, profile), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
          className: "project-duties"
        }, duties.map(function (duty) {
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
            className: "project-duty",
            key: duty
          }, duty);
        })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
          className: "project-actions-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
          className: "project-action"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
          className: "project-link",
          href: link,
          target: "_blank",
          rel: "noopener noreferrer external nofollow",
          title: "\u9879\u76EE\u94FE\u63A5"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_0___default.a, {
          type: "link"
        }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
          className: "project-action"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_0___default.a, {
          type: "qrcode",
          onClick: function onClick() {
            _this2.onOpenVisibleQr(link);
          },
          title: "\u9879\u76EE\u4E8C\u7EF4\u7801"
        })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
          className: "project-action"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_0___default.a, {
          type: "file-text",
          onClick: function onClick() {
            _this2.onOpenVisibleSummary(projectSummary);
          },
          title: "\u9879\u76EE\u603B\u7ED3"
        })))));
      }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__[/* QrcodeModal */ "d"], {
        visible: isVisibleQr,
        content: qrValue,
        onCancel: this.onCloseVisibleQr,
        isMobile: isMobile
      }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__[/* MessageModal */ "c"], {
        visible: isVisibleSummary,
        onCancel: this.onCloseVisibleSummary,
        title: "\u9879\u76EE\u603B\u7ED3",
        isMobile: isMobile
      }, summary));
    }
  }]);

  return ResumeProject;
}(react__WEBPACK_IMPORTED_MODULE_4__["PureComponent"]);



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResumeSkill; });
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var antd_lib_progress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_progress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);



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
      var isMobile = _this.props.isMobile;
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('skill-popover-wrapper', {
          'skill-popover-wrapper-mobile': isMobile
        })
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

      var isMobile = this.props.isMobile;
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
      }, _constants__WEBPACK_IMPORTED_MODULE_3__[/* Skills */ "f"].map(function (skill) {
        var type = skill.type,
            popover = skill.popover,
            percent = skill.percent;
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
          className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('skill', "skill-".concat(type)),
          key: type
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_popover__WEBPACK_IMPORTED_MODULE_0___default.a, {
          placement: "top",
          overlayClassName: classnames__WEBPACK_IMPORTED_MODULE_5___default()('skill-popover', {
            'skill-popover-mobile': isMobile
          }),
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
/* 29 */
/***/ (function(module, exports) {



/***/ }),
/* 30 */
/***/ (function(module, exports) {



/***/ }),
/* 31 */
/***/ (function(module, exports) {



/***/ }),
/* 32 */
/***/ (function(module, exports) {



/***/ }),
/* 33 */
/***/ (function(module, exports) {



/***/ }),
/* 34 */
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
/* 35 */
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
/* 36 */
/***/ (function(module, exports) {

module.exports = require("eventemitter3");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 38 */
/***/ (function(module, exports) {



/***/ }),
/* 39 */
/***/ (function(module, exports) {



/***/ }),
/* 40 */
/***/ (function(module, exports) {



/***/ }),
/* 41 */
/***/ (function(module, exports) {



/***/ }),
/* 42 */
/***/ (function(module, exports) {



/***/ }),
/* 43 */
/***/ (function(module, exports) {



/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("@fullpage/react-fullpage/dist/react-fullpage-commonjs");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("weixin-js-sdk");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34);
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





var Blog = (_dec = Object(_plugins__WEBPACK_IMPORTED_MODULE_1__[/* connect */ "c"])(function (state) {
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
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _state__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fullpage_react_fullpage_dist_react_fullpage_commonjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45);
/* harmony import */ var _fullpage_react_fullpage_dist_react_fullpage_commonjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fullpage_react_fullpage_dist_react_fullpage_commonjs__WEBPACK_IMPORTED_MODULE_9__);



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
var Resume = (_dec = Object(_plugins__WEBPACK_IMPORTED_MODULE_3__[/* connect */ "c"])(function (state) {
  return state.blog;
}, _state__WEBPACK_IMPORTED_MODULE_7__), _dec(_class =
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
      var isMobile = this.props.isMobile;

      if (isMobile) {
        options.navigation = false;
        options.paddingTop = '5vw';
        options.paddingBottom = '5vw';
      }

      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "resume-container"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("title", null, "\u5218\u5C0F\u806A - \u5218\u5C0F\u806A\u7684\u4E2A\u4EBA\u7B80\u5386 | Web\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08 | Front-end Web Developer"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("meta", {
        name: "keywords",
        content: "\u5218\u5C0F\u806A,\u4E2A\u4EBA\u7B80\u5386,web\u524D\u7AEF,\u5DE5\u7A0B\u5E08,\u5218\u5C0F\u806A\u7684\u4E2A\u4EBA\u7B80\u5386,frontend,web,developer,job,vue,react"
      }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("meta", {
        name: "description",
        content: "\u7CBE\u901A\u524D\u7AEF\uFF0C\u6D89\u730E\u540E\u7AEF\uFF0C\u5BF9\u524D\u7AEF\u6709\u7740\u6D53\u539A\u7684\u5174\u8DA3\uFF1B\u5E0C\u671B\u80FD\u591F\u5728\u524D\u7AEF\u8FD9\u6761\u8DEF\u4E0A\u4E00\u76F4\u8D70\u4E0B\u53BB\u3002"
      })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fullpage_react_fullpage_dist_react_fullpage_commonjs__WEBPACK_IMPORTED_MODULE_9___default.a, _extends({}, options, {
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fullpage_react_fullpage_dist_react_fullpage_commonjs__WEBPACK_IMPORTED_MODULE_9___default.a.Wrapper, {
            className: "resume-section-container"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "section resume-section resume-section-index"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["ResumeIndex"], {
            isMobile: isMobile
          })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "section resume-section resume-section-introduction"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["ResumeIntroduction"], {
            isMobile: isMobile
          })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "section resume-section resume-section-skill"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["ResumeSkill"], {
            isMobile: isMobile
          })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "section resume-section resume-section-experience"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["ResumeExperience"], {
            isMobile: isMobile
          })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "section resume-section resume-section-project"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["ResumeProject"], {
            isMobile: isMobile
          })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "section resume-section resume-section-article"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["ResumeArticle"], {
            isMobile: isMobile
          })));
        }
      })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "arrow-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: "up"
      })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "pdf-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_popover__WEBPACK_IMPORTED_MODULE_0___default.a, {
        placement: "top",
        content: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, "PDF\u7B80\u5386")
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
        className: "link-pdf",
        href: "/resume.pdf",
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: "file-pdf"
      })))));
    }
  }]);

  return Resume;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"])) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Resume);


/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 52 */
/***/ (function(module, exports) {



/***/ }),
/* 53 */
/***/ (function(module, exports) {



/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider");

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var zh = __webpack_require__(67);

module.exports = {
  'zh-CN': zh
};

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/zh_CN");

/***/ }),
/* 62 */,
/* 63 */,
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(84);


/***/ }),
/* 65 */
/***/ (function(module, exports) {



/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),
/* 67 */
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
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(4);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "antd/lib/locale-provider"
var locale_provider_ = __webpack_require__(55);
var locale_provider_default = /*#__PURE__*/__webpack_require__.n(locale_provider_);

// EXTERNAL MODULE: ./pages/index.less
var pages = __webpack_require__(65);

// EXTERNAL MODULE: external "@babel/polyfill"
var polyfill_ = __webpack_require__(66);

// EXTERNAL MODULE: ./constants/index.js
var constants = __webpack_require__(3);

// EXTERNAL MODULE: ./components/index.js + 6 modules
var components = __webpack_require__(7);

// EXTERNAL MODULE: ./components/Loading/state.js
var state = __webpack_require__(14);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(20);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./engine/Sessions.js


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
  regenerator_default.a.mark(function _callee(option) {
    return regenerator_default.a.wrap(function _callee$(_context) {
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
  Engine.logout();
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
        Engine.setItem(key, newValue, op);
      },
      get: function get() {
        return option.$data[key];
      }
    });
    config[key] = Engine.getItem(key, op);
  };

  for (var _i = 0; _i < _arr.length; _i++) {
    _loop();
  }

  Object.assign(option, config, params);
  Sessions._option = option;
});


// CONCATENATED MODULE: ./engine/utils/Axios.js


function Axios_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function Axios_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Axios_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Axios_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Axios_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Axios_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var debug = __webpack_require__(37)('bzy-top100-website/Axios');

var Axios = function Axios() {
  Axios_classCallCheck(this, Axios);
};

Axios_defineProperty(Axios, "init", function () {
  external_axios_default.a.interceptors.request.use(function (config) {
    if (!config.ignoreLoading) {
      Engine.showLoading();
    }

    var url = config.url;

    if (!/^(https:|http:)?\/\//.test(url)) {
      url = "".concat(Engine.getApiEndpoint()).concat(config.url);
    }

    var params = {};
    var headers = {};

    if (Sessions.getToken()) {
      headers['grpc-metadata-token'] = Sessions.getToken();
    }

    external_lodash_default.a.merge(config, {
      headers: headers,
      timeout: 60 * 1000,
      url: url,
      params: params
    });

    return config;
  }, Axios.onError);
  external_axios_default.a.interceptors.response.use(function (response) {
    var _response$config = response.config;
    _response$config = _response$config === void 0 ? {} : _response$config;
    var ignoreLoading = _response$config.ignoreLoading;

    if (!ignoreLoading) {
      Engine.hideLoading();
    }

    return response.data;
  }, Axios.onError);

  external_axios_default.a.getPagedListRecursively =
  /*#__PURE__*/
  function () {
    var _ref = Axios_asyncToGenerator(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee(url) {
      var config,
          allItems,
          params,
          result,
          newAllItems,
          _args = arguments;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              config = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
              allItems = _args.length > 2 && _args[2] !== undefined ? _args[2] : [];
              params = config.params || {};
              params.itemIndex = config.params.itemIndex || 1;
              params.perPage = config.params.perPage || 1000;
              _context.next = 7;
              return external_axios_default.a.get(url, config);

            case 7:
              result = _context.sent;
              newAllItems = allItems.concat(result.items);

              if (!(result.meta && newAllItems.length < result.meta.totalCount)) {
                _context.next = 13;
                break;
              }

              params.itemIndex += config.params.perPage;

              external_lodash_default.a.merge(config, {
                params: params
              });

              return _context.abrupt("return", external_axios_default.a.getPagedListRecursively(url, config, newAllItems));

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

Axios_defineProperty(Axios, "onError", function () {
  var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  debug('Response error', "".concat(error), error.response);
  var response = error.response || {};
  var _error$config = error.config;
  _error$config = _error$config === void 0 ? {} : _error$config;
  var ignoreLoading = _error$config.ignoreLoading,
      ignoreToast = _error$config.ignoreToast;

  if (!ignoreLoading) {
    Engine.hideLoading();
  }

  switch (response.status) {
    case 401:
      {
        Sessions.clear();
        break;
      }

    case 400:
      {
        if (!ignoreToast) {
          var errorMessage = '';

          if (!external_lodash_default.a.isEmpty(response.data.error)) {
            errorMessage = response.data.error;
          } else if (external_lodash_default.a.isEmpty(response.data.errors)) {
            errorMessage = response.data.message;
          } else {
            var firstErrorKey = Object.keys(response.data.errors)[0];
            errorMessage = "".concat(firstErrorKey, ": ").concat(response.data.errors[firstErrorKey]);
          }

          if (errorMessage) {
            Engine.showToast(errorMessage);
          }
        }

        break;
      }

    case 404:
      Engine.showToast(Engine.i18n('request', response.status.toString()));
      break;

    case 500:
      Engine.showToast(Engine.i18n('request', response.status.toString()));
      break;

    default:
      {
        if (error.message) {
          if (error.message.includes('Network Error')) {
            Engine.showToast(Engine.i18n('request', 'networkUnavailable'));
          } else if (error.message.includes('timeout')) {
            Engine.showToast(Engine.i18n('request', 'networkTimeout'));
          }
        }
      }
  }

  return Promise.reject(error);
});


// CONCATENATED MODULE: ./engine/Engine.js


function Engine_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function Engine_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Engine_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Engine_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Engine_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Engine_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Engine_debug = __webpack_require__(37)('hankliu/Engine'); // eslint-disable-next-line


var _console = console,
    Engine_error = _console.error;
var defaultOption = {
  i18n: function i18n() {
    Engine_error('i18n is required');
  },
  showToast: function showToast() {
    Engine_error('showToast is required');
  },
  showLoading: function showLoading() {
    Engine_error('showLoading is required');
  },
  hideLoading: function hideLoading() {
    Engine_error('hideLoading is required');
  },
  storage: {
    getItem: function getItem() {
      Engine_error('storage.getItem is required');
    },
    setItem: function setItem() {
      Engine_error('storage.setItem is required');
    },
    removeItem: function removeItem() {
      Engine_error('storage.removeItem is required');
    },
    clear: function clear() {
      Engine_error('storage.clear is required');
    }
  }
};

var Engine = function Engine() {
  Engine_classCallCheck(this, Engine);
};

Engine_defineProperty(Engine, "_option", {});

Engine_defineProperty(Engine, "init",
/*#__PURE__*/
function () {
  var _ref = Engine_asyncToGenerator(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(option) {
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            Engine._option = external_lodash_default.a.merge(defaultOption, option);
            Axios.init();
            _context.next = 5;
            return Sessions.init(option.params);

          case 5:
            if (option.onInitSuccess) {
              option.onInitSuccess();
            }

            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            Engine_debug(_context.t0);

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

Engine_defineProperty(Engine, "getApiEndpoint", function () {
  return Engine._option.apiEndpoint;
});

Engine_defineProperty(Engine, "i18n", function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Engine._option.i18n.apply(null, args);
});

Engine_defineProperty(Engine, "showToast", function (options) {
  Engine._option.showToast(options);
});

Engine_defineProperty(Engine, "showLoading", function () {
  Engine._option.showLoading();
});

Engine_defineProperty(Engine, "hideLoading", function () {
  Engine._option.hideLoading();
});

Engine_defineProperty(Engine, "getItem", function (key) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      isTemporary = _ref2.isTemporary;

  return Engine._option.storage.getItem(key, isTemporary);
});

Engine_defineProperty(Engine, "setItem", function (key, value) {
  var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      isTemporary = _ref3.isTemporary;

  return Engine._option.storage.setItem(key, value, isTemporary);
});

Engine_defineProperty(Engine, "removeItem", function (key) {
  var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      isTemporary = _ref4.isTemporary;

  return Engine._option.storage.removeItem(key, isTemporary);
});

Engine_defineProperty(Engine, "clear", function () {
  var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      isTemporary = _ref5.isTemporary;

  return Engine._option.storage.clear(isTemporary);
});


// CONCATENATED MODULE: ./engine/utils/RouterHelper.js
function RouterHelper_slicedToArray(arr, i) { return RouterHelper_arrayWithHoles(arr) || RouterHelper_iterableToArrayLimit(arr, i) || RouterHelper_nonIterableRest(); }

function RouterHelper_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function RouterHelper_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function RouterHelper_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { RouterHelper_defineProperty(target, key, source[key]); }); } return target; }

function RouterHelper_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RouterHelper_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var RouterHelper = function RouterHelper() {
  RouterHelper_classCallCheck(this, RouterHelper);
};

RouterHelper_defineProperty(RouterHelper, "buildRouteUrl", function (match, newMatch) {
  var url = newMatch.path || match.path;

  var params = _objectSpread({}, match.params, newMatch.params);

  for (var key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      url = url.replace(new RegExp(":".concat(key, "\\??")), params[key]);
    }
  }

  return url;
});

RouterHelper_defineProperty(RouterHelper, "buildUrlMergeSearchParams", function (url) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (external_lodash_default.a.isEmpty(params)) {
    return url;
  }

  var newUrl = url;

  var _arr = Object.entries(params);

  for (var _i = 0; _i < _arr.length; _i++) {
    var _arr$_i = RouterHelper_slicedToArray(_arr[_i], 2),
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

RouterHelper_defineProperty(RouterHelper, "replaceLocationBy", function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = RouterHelper.buildUrlMergeSearchParams(window.location.href, params);
  window.location.replace(url);
});

RouterHelper_defineProperty(RouterHelper, "getQuery", function (searchString) {
  var search = external_lodash_default.a.trimStart(searchString, '?');

  var params = {};

  if (external_lodash_default.a.isEmpty(search)) {
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

RouterHelper_defineProperty(RouterHelper, "RouterMap", {
  Overview: '/homepage/overview',
  ContactUs: '/homepage/contact',
  Advertising: '/homepage/advertising',
  Cooperation: '/homepage/cooperation'
});


// CONCATENATED MODULE: ./engine/index.js



/* harmony default export */ var engine = (Engine);

// EXTERNAL MODULE: ./resources/index.js
var resources = __webpack_require__(56);
var resources_default = /*#__PURE__*/__webpack_require__.n(resources);

// EXTERNAL MODULE: ./plugins/ReduxEnhance.js
var ReduxEnhance = __webpack_require__(13);

// EXTERNAL MODULE: ./plugins/index.js + 3 modules
var plugins = __webpack_require__(21);

// EXTERNAL MODULE: external "next/app"
var app_ = __webpack_require__(54);
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(50);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(1);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(44);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__(51);
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(10);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(47);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "redux-logger"
var external_redux_logger_ = __webpack_require__(57);

// EXTERNAL MODULE: external "redux-pagan"
var external_redux_pagan_ = __webpack_require__(9);

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__(58);
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(59);
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__(60);

// EXTERNAL MODULE: external "antd/lib/locale-provider/zh_CN"
var zh_CN_ = __webpack_require__(61);
var zh_CN_default = /*#__PURE__*/__webpack_require__.n(zh_CN_);

// EXTERNAL MODULE: ./pages/Blog/index.js
var Blog = __webpack_require__(48);

// EXTERNAL MODULE: ./pages/Resume/index.js
var Resume = __webpack_require__(49);

// CONCATENATED MODULE: ./pages/_app.js



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _app_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { _app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { _app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _app_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























var reducer = Object(external_redux_["combineReducers"])({
  i18n: external_redux_pagan_["i18n"],
  loading: state["a" /* default */],
  blog: Blog["reducer"],
  resume: Resume["reducer"]
});

var _app_makeStore = function makeStore() {
  var store = Object(external_redux_["createStore"])(reducer, Object(external_redux_devtools_extension_["composeWithDevTools"])(Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a, Object(external_redux_logger_["createLogger"])({
    predicate: function predicate() {
      return process.env.ENV !== 'production';
    }
  }))));
  ReduxEnhance["b" /* init */](store, resources_default.a);
  return store;
};

var _app_MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    var _getPrototypeOf2;

    var _this;

    _app_classCallCheck(this, MyApp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MyApp)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _app_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isReady: false,
      isMobile: false
    });

    _app_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      try {
        engine.init({
          storage: new plugins["b" /* Storage */]({
            scope: 'hankliu'
          }),
          onInitSuccess: _this.onInitSuccess,
          showLoading: components["b" /* Loading */].show,
          showToast: components["e" /* Toast */].show,
          hideLoading: components["b" /* Loading */].hide,
          onLogout: _this.onLogout
        });
      } catch (error) {
        // eslint-disable-next-line
        console.error(error);
      }

      _this.setState({
        isMobile: plugins["a" /* Platform */].isMobile()
      });
    });

    _app_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onInitSuccess", function () {
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
          router = _this$props.router,
          isMobileFromServer = _this$props.isMobile;
      var isMobileFromClient = this.state.isMobile;

      router_default.a.onRouteChangeStart = function () {
        external_nprogress_default.a.start();
      };

      router_default.a.onRouteChangeComplete = function () {
        external_nprogress_default.a.done();
      };

      router_default.a.onRouteChangeError = function () {
        external_nprogress_default.a.done();
      };

      var isMobile = isMobileFromServer || isMobileFromClient;
      return external_react_default.a.createElement(locale_provider_default.a, {
        locale: zh_CN_default.a
      }, external_react_default.a.createElement(external_react_redux_["Provider"], {
        store: store
      }, external_react_default.a.createElement(app_["Container"], null, external_react_default.a.createElement("div", {
        className: external_classnames_default()('container', {
          'mobile-container': isMobile
        })
      }, external_react_default.a.createElement(head_default.a, null, constants["d" /* Metas */].map(function (_ref) {
        var name = _ref.name,
            content = _ref.content;
        return external_react_default.a.createElement("meta", {
          name: name,
          content: content,
          key: name
        });
      }), external_react_default.a.createElement("script", {
        src: "/scripts/baidu.statistics.min.js",
        type: "text/javascript"
      })), external_react_default.a.createElement(Component, _extends({}, pageProps, {
        router: router,
        isMobile: isMobile
      })), external_react_default.a.createElement(components["b" /* Loading */], null)))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _app_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(_ref2) {
        var Component, ctx, pageProps, headers, userAgent, isMobile;
        return regenerator_default.a.wrap(function _callee$(_context) {
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
                headers = ctx.req.headers;
                userAgent = headers['user-agent'];
                isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(userAgent);
                return _context.abrupt("return", {
                  pageProps: pageProps,
                  isMobile: isMobile
                });

              case 10:
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
}(app_default.a);

/* harmony default export */ var _app = __webpack_exports__["default"] = (external_next_redux_wrapper_default()(_app_makeStore)(Object(router_["withRouter"])(_app_MyApp)));

/***/ })
/******/ ]);