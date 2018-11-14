module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 74);
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
/* 4 */,
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
/* 12 */,
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
/* 15 */,
/* 16 */,
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
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
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
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
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
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports) {



/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);


/***/ })
/******/ ]);