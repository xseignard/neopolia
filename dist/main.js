/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([515,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _AppContext = __webpack_require__(55);

var _AppContext2 = _interopRequireDefault(_AppContext);

__webpack_require__(183);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Test = function Test() {
	return _react2.default.createElement(
		_AppContext2.default.Consumer,
		null,
		function (context) {
			return context.nav === 'Products' && context.raycast.object && context.raycast.object.name ? _react2.default.createElement(
				'h1',
				{ className: 'test' },
				context.raycast.object.name
			) : null;
		}
	);
};

exports.default = Test;

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dd2873937c57782df73849cbcecccfac.png";

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(79);

var _AppContext = __webpack_require__(55);

var _AppContext2 = _interopRequireDefault(_AppContext);

__webpack_require__(187);

var _LogoNeopoliaAtomOuest = __webpack_require__(185);

var _LogoNeopoliaAtomOuest2 = _interopRequireDefault(_LogoNeopoliaAtomOuest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FooterItem = (0, _reactRouterDom.withRouter)(function (props) {
	var handleClick = function handleClick() {
		props.updateNav(props.content);
		props.resetRaycast([{}]);
		props.history.push(props.route);
	};
	return _react2.default.createElement(
		'div',
		{ className: 'footer__item', onClick: handleClick },
		_react2.default.createElement(
			'div',
			null,
			props.content,
			_react2.default.createElement(
				'svg',
				{ height: '100%', width: '100%' },
				_react2.default.createElement('line', { x1: '0', y1: '100%', x2: '100%', y2: '100%' })
			)
		)
	);
});

var Logo = function Logo() {
	return _react2.default.createElement(
		'div',
		{ className: 'footer__logo' },
		_react2.default.createElement('img', { src: _LogoNeopoliaAtomOuest2.default, alt: 'logo N\xE9opolia' })
	);
};

var Footer = function Footer() {
	return _react2.default.createElement(
		'footer',
		{ className: 'footer' },
		_react2.default.createElement(Logo, null),
		_react2.default.createElement(
			_AppContext2.default.Consumer,
			null,
			function (context) {
				return _react2.default.createElement(
					_react.Fragment,
					null,
					_react2.default.createElement(FooterItem, {
						content: 'Products',
						route: '/',
						updateNav: context.changeNav,
						resetRaycast: context.raycastHandler
					}),
					_react2.default.createElement(FooterItem, {
						content: 'About us',
						route: '/about',
						updateNav: context.changeNav,
						resetRaycast: context.raycastHandler
					}),
					_react2.default.createElement(FooterItem, {
						content: 'Offer',
						route: '/contact',
						updateNav: context.changeNav,
						resetRaycast: context.raycastHandler
					}),
					_react2.default.createElement(FooterItem, {
						content: 'Members',
						route: '/companies',
						updateNav: context.changeNav,
						resetRaycast: context.raycastHandler
					})
				);
			}
		)
	);
};

exports.default = Footer;

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _AppContext = __webpack_require__(55);

var _AppContext2 = _interopRequireDefault(_AppContext);

__webpack_require__(190);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderItem = function HeaderItem(_ref) {
	var content = _ref.content;

	return _react2.default.createElement(
		'div',
		{ className: 'header__item' },
		content
	);
};

var Header = function Header() {
	return _react2.default.createElement(
		_AppContext2.default.Consumer,
		null,
		function (_ref2) {
			var nav = _ref2.nav;
			return _react2.default.createElement(
				'header',
				{ className: 'header' },
				_react2.default.createElement(HeaderItem, { content: nav }),
				_react2.default.createElement(HeaderItem, { content: 'Products' }),
				_react2.default.createElement(HeaderItem, { content: 'Harbour works' })
			);
		}
	);
};

exports.default = Header;

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(193);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function About() {
	return _react2.default.createElement(
		'div',
		{ className: 'page about' },
		_react2.default.createElement(
			'h1',
			null,
			'About'
		)
	);
};

exports.default = About;

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contact = function Contact() {
	return _react2.default.createElement(
		"div",
		{ className: "page contact" },
		_react2.default.createElement(
			"h1",
			null,
			"Contact"
		)
	);
};

exports.default = Contact;

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Company = function Company() {
	return _react2.default.createElement(
		"div",
		{ className: "page company" },
		_react2.default.createElement(
			"h1",
			null,
			"Company"
		)
	);
};

exports.default = Company;

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var memberUrl = "https://wp.pow.cool/wp-json/wp/v2/" + "member";

var getAllMembers = exports.getAllMembers = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
		var res, members;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						console.log(memberUrl);
						_context.next = 3;
						return fetch(memberUrl);

					case 3:
						res = _context.sent;

						console.log(res);
						_context.next = 7;
						return res.json();

					case 7:
						members = _context.sent;
						return _context.abrupt("return", members.map(function (member) {
							return _extends({
								id: member.id
							}, member.acf);
						}));

					case 9:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function getAllMembers() {
		return _ref.apply(this, arguments);
	};
}();

var getMemberById = exports.getMemberById = function () {
	var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
		var res, member;
		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.next = 2;
						return fetch(memberUrl + id);

					case 2:
						res = _context2.sent;
						_context2.next = 5;
						return res.json();

					case 5:
						member = _context2.sent;
						return _context2.abrupt("return", _extends({
							id: member.id
						}, member.acf));

					case 7:
					case "end":
						return _context2.stop();
				}
			}
		}, _callee2, undefined);
	}));

	return function getMemberById(_x) {
		return _ref2.apply(this, arguments);
	};
}();

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _member = __webpack_require__(199);

__webpack_require__(198);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Companies = function (_Component) {
	_inherits(Companies, _Component);

	function Companies() {
		_classCallCheck(this, Companies);

		return _possibleConstructorReturn(this, (Companies.__proto__ || Object.getPrototypeOf(Companies)).apply(this, arguments));
	}

	_createClass(Companies, [{
		key: 'componentDidMount',
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
				var members;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return (0, _member.getAllMembers)();

							case 2:
								members = _context.sent;

								console.log(members);

							case 4:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function componentDidMount() {
				return _ref.apply(this, arguments);
			}

			return componentDidMount;
		}()
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'page companies' },
				_react2.default.createElement(
					'h1',
					null,
					'Companies'
				)
			);
		}
	}]);

	return Companies;
}(_react.Component);

exports.default = Companies;

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var workUrl = "https://wp.pow.cool/wp-json/wp/v2/" + "work";

var getAllWorks = exports.getAllWorks = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
		var res, works;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						console.log(workUrl);
						_context.next = 3;
						return fetch(workUrl);

					case 3:
						res = _context.sent;
						_context.next = 6;
						return res.json();

					case 6:
						works = _context.sent;
						return _context.abrupt("return", works.map(function (work) {
							return _extends({
								id: work.id,
								title: work.title.rendered
							}, work.acf);
						}));

					case 8:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function getAllWorks() {
		return _ref.apply(this, arguments);
	};
}();

var getWorkById = exports.getWorkById = function () {
	var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
		var res, work;
		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.next = 2;
						return fetch(workUrl + id);

					case 2:
						res = _context2.sent;
						_context2.next = 5;
						return res.json();

					case 5:
						work = _context2.sent;
						return _context2.abrupt("return", _extends({
							id: work.id,
							title: work.title.rendered
						}, work.acf));

					case 7:
					case "end":
						return _context2.stop();
				}
			}
		}, _callee2, undefined);
	}));

	return function getWorkById(_x) {
		return _ref2.apply(this, arguments);
	};
}();

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _work = __webpack_require__(201);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Detail = function (_Component) {
	_inherits(Detail, _Component);

	function Detail() {
		_classCallCheck(this, Detail);

		return _possibleConstructorReturn(this, (Detail.__proto__ || Object.getPrototypeOf(Detail)).apply(this, arguments));
	}

	_createClass(Detail, [{
		key: 'componentDidMount',
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
				var works;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return (0, _work.getAllWorks)();

							case 2:
								works = _context.sent;

								console.log(works);

							case 4:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function componentDidMount() {
				return _ref.apply(this, arguments);
			}

			return componentDidMount;
		}()
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'page detail' },
				_react2.default.createElement(
					'h1',
					null,
					'Detail'
				)
			);
		}
	}]);

	return Detail;
}(_react.Component);

exports.default = Detail;

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "656c4848e94e5e8e26beffbd52068fd6.png";

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "54a5d52f637c77e7adba9dcb116304ed.png";

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "87ed8e39f560e6a0c400ca8855528606.png";

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "01b8d8c0bb2e2d80bd17510fc3780575.png";

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1a64ca91bd6421f757ad65841b5eda3a.png";

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "766ba4bdc1cda20d0d61e7dfd64a1542.png";

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4418dde3f6abc21dc32506acf5f5b093.jpg";

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e99f9e64385e61d68efcd8a5f91284da.dae";

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(37);

var THREE = _interopRequireWildcard(_three);

__webpack_require__(281);

var _stats = __webpack_require__(280);

var _stats2 = _interopRequireDefault(_stats);

var _merge = __webpack_require__(279);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initThree = function initThree(canvas, opts) {
	// default opts
	var defaults = {
		renderer: {
			alpha: true,
			shadowMap: false
		},
		camera: {
			fov: 75,
			nearPlane: 0.1,
			farPlane: 1000,
			x: 0,
			y: 2,
			z: 20
		},
		ambient: {
			color: 0xffffff
		},
		axesHelper: true
	};
	// merged opts
	var mergedOpts = (0, _merge2.default)(defaults, opts);

	// stats
	var stats = new _stats2.default();
	if (mergedOpts.debug) {
		stats.domElement.style.top = '';
		stats.domElement.style.bottom = '7vh';
		document.body.appendChild(stats.domElement);
	}

	// renderer
	var renderer = new THREE.WebGLRenderer({
		antialias: true,
		alpha: mergedOpts.renderer.alpha,
		canvas: canvas
	});
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.domElement.style.position = 'absolute';
	renderer.domElement.style.top = '0px';
	renderer.domElement.style.left = '0px';
	if (mergedOpts.renderer.shadowMap) {
		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = THREE.PCFShadowMap;
	}

	// scene
	var scene = new THREE.Scene();

	// camera
	var camera = new THREE.PerspectiveCamera(mergedOpts.camera.fov, window.innerWidth / window.innerHeight, mergedOpts.camera.nearPlane, mergedOpts.camera.farPlane);
	camera.position.x = mergedOpts.camera.x;
	camera.position.y = mergedOpts.camera.y;
	camera.position.z = mergedOpts.camera.z;

	// controls
	var controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.maxPolarAngle = Math.PI * 0.44;
	controls.panningMode = THREE.HorizontalPanning;
	controls.minDistance = 2;
	controls.maxDistance = 50;

	// axis helper
	var axesHelper = new THREE.AxesHelper(50);
	if (mergedOpts.axesHelper) scene.add(axesHelper);

	// ambient light
	var ambient = new THREE.AmbientLight(mergedOpts.ambient.color);
	scene.add(ambient);

	var handleResize = function handleResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	};
	addEventListener('resize', handleResize);

	return { stats: stats, renderer: renderer, scene: scene, camera: camera, controls: controls };
};

exports.default = initThree;

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.attachRaycastHandler = exports.attachLoadingHandler = undefined;

var _three = __webpack_require__(37);

var THREE = _interopRequireWildcard(_three);

__webpack_require__(285);

__webpack_require__(284);

__webpack_require__(283);

var _initThree2 = __webpack_require__(282);

var _initThree3 = _interopRequireDefault(_initThree2);

var _Building_Distribution_NetworksModel = __webpack_require__(212);

var _Building_Distribution_NetworksModel2 = _interopRequireDefault(_Building_Distribution_NetworksModel);

var _waternormals = __webpack_require__(211);

var _waternormals2 = _interopRequireDefault(_waternormals);

var _back = __webpack_require__(210);

var _back2 = _interopRequireDefault(_back);

var _bottom = __webpack_require__(209);

var _bottom2 = _interopRequireDefault(_bottom);

var _front = __webpack_require__(208);

var _front2 = _interopRequireDefault(_front);

var _left = __webpack_require__(207);

var _left2 = _interopRequireDefault(_left);

var _right = __webpack_require__(206);

var _right2 = _interopRequireDefault(_right);

var _top = __webpack_require__(205);

var _top2 = _interopRequireDefault(_top);

__webpack_require__(204);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var canvas = document.createElement('canvas');

var _initThree = (0, _initThree3.default)(canvas, {
	camera: {
		x: 0,
		y: 2,
		z: -6
	},
	renderer: {
		shadowMap: true
	},
	debug: true,
	axesHelper: false
}),
    stats = _initThree.stats,
    renderer = _initThree.renderer,
    scene = _initThree.scene,
    camera = _initThree.camera,
    controls = _initThree.controls;

// constants


var size = 194;

// lights
var light = new THREE.DirectionalLight(0xffffff, 0.2);
scene.add(light);
// fog
scene.fog = new THREE.FogExp2(0xaaaaaa, 0.01);

// model
var model = void 0;
var addModel = function addModel(cb) {
	var daeLoader = new THREE.ColladaLoader();
	daeLoader.load(_Building_Distribution_NetworksModel2.default, function (object) {
		model = object.scene;
		model.traverse(function (node) {
			if (node instanceof THREE.Mesh) {
				node.castShadow = true;
				node.receiveShadow = true;
				if (Array.isArray(node.material)) {
					node.material.forEach(function (m) {
						return m.side = THREE.DoubleSide;
					});
				} else {
					node.material.side = THREE.DoubleSide;
				}
			}
		});
		model.scale.set(0.1, 0.1, 0.1);
		model.position.set(0.5, 0, 6);
		setTimeout(function () {
			return cb(true);
		}, 3000);
		scene.add(model);
	});
};

// water
var water = void 0;
var addWater = function addWater() {
	var waterGeometry = new THREE.PlaneBufferGeometry(size, size);
	water = new THREE.Water(waterGeometry, {
		textureWidth: 512,
		textureHeight: 512,
		waterNormals: new THREE.TextureLoader().load(_waternormals2.default, function (texture) {
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
		}),
		sunDirection: light.position.clone().normalize(),
		sunColor: 0x000000,
		waterColor: 0x001e3f,
		fog: scene.fog !== undefined
	});
	water.rotation.x = -Math.PI / 2;
	water.material.uniforms.distortionScale.value = 1;
	water.material.uniforms.size.value = 10;
	water.material.uniforms.alpha.value = 0.95;
	scene.add(water);
};

// skybox
var sky = void 0;
var addSky = function addSky() {
	var images = [_right2.default, _left2.default, _top2.default, _bottom2.default, _back2.default, _front2.default];
	var cube = new THREE.CubeTextureLoader().load(images);
	cube.format = THREE.RGBFormat;
	var shader = THREE.ShaderLib['cube'];
	shader.uniforms['tCube'].value = cube;
	var material = new THREE.ShaderMaterial({
		fragmentShader: shader.fragmentShader,
		vertexShader: shader.vertexShader,
		uniforms: shader.uniforms,
		depthWrite: false,
		side: THREE.BackSide
	});
	sky = new THREE.Mesh(new THREE.BoxGeometry(size, size, size), material);
	sky.position.set(0, -15, 0);
	scene.add(sky);
};

// loading handler
var attachLoadingHandler = function attachLoadingHandler(cb) {
	addWater();
	addSky();
	addModel(cb);
};

// raycasting
var attachRaycastHandler = function attachRaycastHandler(cb) {
	var raycaster = new THREE.Raycaster();
	var mouse = new THREE.Vector2();
	var handleClick = function handleClick(e) {
		e.preventDefault();
		// clear all coloring
		model.traverse(function (node) {
			if (node instanceof THREE.Mesh) {
				if (Array.isArray(node.material)) {
					node.material.forEach(function (m) {
						return m.color = new THREE.Color(0xffffff);
					});
				} else {
					node.material.color = new THREE.Color(0xffffff);
				}
			}
		});
		if (e.clientY > 0.06 * window.innerHeight && e.clientY < 0.88 * window.innerHeight) {
			// if within the displayed part of the canvas, try the raycast
			mouse.x = e.clientX / window.innerWidth * 2 - 1;
			mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
			raycaster.setFromCamera(mouse, camera);
			var intersects = raycaster.intersectObjects(model.children, true);
			if (intersects.length > 0) {
				cb(intersects);
				if (Array.isArray(intersects[0].object.material)) {
					intersects[0].object.material.forEach(function (m) {
						return m.color = new THREE.Color(0xe58c19);
					});
				} else {
					intersects[0].object.material.color = new THREE.Color(0xe58c19);
				}
			}
		}
	};
	addEventListener('click', handleClick);
};

var rafID = void 0;
var animate = function animate(timestamp) {
	rafID = requestAnimationFrame(animate);
	stats.begin();
	if (water) water.material.uniforms.time.value += 0.004;
	renderer.render(scene, camera);
	stats.end();
};
requestAnimationFrame(animate);

exports.default = canvas;
exports.attachLoadingHandler = attachLoadingHandler;
exports.attachRaycastHandler = attachRaycastHandler;

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Adapted from:
// https://www.npmjs.com/package/react-element-container
// Allows us to just use a regular DOM element as a child
// without having to deal with updates/reactive things.

var ElementContainer = function (_Component) {
	_inherits(ElementContainer, _Component);

	function ElementContainer() {
		_classCallCheck(this, ElementContainer);

		return _possibleConstructorReturn(this, (ElementContainer.__proto__ || Object.getPrototypeOf(ElementContainer)).apply(this, arguments));
	}

	_createClass(ElementContainer, [{
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps) {
			return this.props.child !== nextProps.child;
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps) {
			this._updateChild(prevProps);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this._updateChild({});
		}
	}, {
		key: '_updateChild',
		value: function _updateChild(prevProps) {
			var wrap = this.container;
			var next = this.props.child;
			var prev = prevProps.child;

			if (next) wrap.appendChild(next);
			if (prev && prev !== next && prev.parentNode === wrap) wrap.removeChild(prev);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement('div', {
				id: this.props.id,
				ref: function ref(c) {
					_this2.container = c;
				}
			});
		}
	}]);

	return ElementContainer;
}(_react.Component);

exports.default = ElementContainer;

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _ElementContainer = __webpack_require__(289);

var _ElementContainer2 = _interopRequireDefault(_ElementContainer);

var _AppContext = __webpack_require__(55);

var _AppContext2 = _interopRequireDefault(_AppContext);

var _reactLoaders = __webpack_require__(288);

var _reactLoaders2 = _interopRequireDefault(_reactLoaders);

var _canvas = __webpack_require__(286);

var _canvas2 = _interopRequireDefault(_canvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var handlersAttached = false;

var WebGL = function (_Component) {
	_inherits(WebGL, _Component);

	function WebGL() {
		_classCallCheck(this, WebGL);

		return _possibleConstructorReturn(this, (WebGL.__proto__ || Object.getPrototypeOf(WebGL)).apply(this, arguments));
	}

	_createClass(WebGL, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (!handlersAttached) {
				(0, _canvas.attachLoadingHandler)(this.props.loadingHandler);
				(0, _canvas.attachRaycastHandler)(this.props.raycastHandler);
				handlersAttached = true;
			}
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate() {
			return false;
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_ElementContainer2.default, { id: 'canvas', child: _canvas2.default });
		}
	}]);

	return WebGL;
}(_react.Component);

// We warn the developer when the canvas renders & re-mounts/re-renders
// as it may have performance implications.


var hasRendered = false;
var hasMounted = false;

// The Scene element is just a div that holds a canvas

var Scene = function (_Component2) {
	_inherits(Scene, _Component2);

	function Scene() {
		_classCallCheck(this, Scene);

		return _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).apply(this, arguments));
	}

	_createClass(Scene, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			if (!hasMounted) hasMounted = true;else console.warn('Re-mounting WebGLCanvas.');
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate() {
			return false;
		}
	}, {
		key: 'render',
		value: function render() {
			if (hasRendered) console.warn('Re-rendering WebGLCanvas component.');else if (false) {}
			hasRendered = true;
			return _react2.default.createElement(
				_AppContext2.default.Consumer,
				null,
				function (context) {
					var loader = _react2.default.createElement(_reactLoaders2.default, { type: 'square-spin', innerClassName: 'loader__custom' });
					var styleName = 'canvas-hidden';
					if (context.loaded) {
						loader = null;
						styleName = 'canvas-active';
					}
					return _react2.default.createElement(
						_react.Fragment,
						null,
						_react2.default.createElement(WebGL, {
							raycastHandler: context.raycastHandler,
							loadingHandler: context.loadingHandler,
							className: styleName
						}),
						loader
					);
				}
			);
		}
	}]);

	return Scene;
}(_react.Component);

exports.default = Scene;

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(79);

var _reactTransitionGroup = __webpack_require__(297);

var _createBrowserHistory = __webpack_require__(119);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _Scene = __webpack_require__(290);

var _Scene2 = _interopRequireDefault(_Scene);

var _Detail = __webpack_require__(202);

var _Detail2 = _interopRequireDefault(_Detail);

var _Companies = __webpack_require__(200);

var _Companies2 = _interopRequireDefault(_Companies);

var _Company = __webpack_require__(196);

var _Company2 = _interopRequireDefault(_Company);

var _Contact = __webpack_require__(195);

var _Contact2 = _interopRequireDefault(_Contact);

var _About = __webpack_require__(194);

var _About2 = _interopRequireDefault(_About);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)();

var Routes = (0, _reactRouterDom.withRouter)(function (_ref) {
	var location = _ref.location;
	return _react2.default.createElement(
		_reactTransitionGroup.TransitionGroup,
		null,
		_react2.default.createElement(
			_reactTransitionGroup.CSSTransition,
			{ key: location.key, classNames: 'fade', timeout: 300 },
			_react2.default.createElement(
				_reactRouterDom.Switch,
				{ location: location },
				_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Scene2.default }),
				_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/detail/:id', component: _Detail2.default }),
				_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/companies', component: _Companies2.default }),
				_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/companies/:id', component: _Company2.default }),
				_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/contact', component: _Contact2.default }),
				_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/about', component: _About2.default })
			)
		)
	);
});

exports.default = Routes;

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(79);

var _AppContext = __webpack_require__(55);

var _AppContext2 = _interopRequireDefault(_AppContext);

var _routes = __webpack_require__(298);

var _routes2 = _interopRequireDefault(_routes);

var _Header = __webpack_require__(191);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(188);

var _Footer2 = _interopRequireDefault(_Footer);

var _Test = __webpack_require__(184);

var _Test2 = _interopRequireDefault(_Test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
	_inherits(App, _Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.changeNav = function (newNav) {
			_this.setState({ nav: newNav });
		};

		_this.raycastHandler = function (target) {
			var filtered = target.reduce(function (x, y) {
				var index = x.findIndex(function (e) {
					return e.object.uuid === y.object.uuid;
				});
				return index < 0 ? [].concat(_toConsumableArray(x), [y]) : x;
			}, [])[0];
			console.log(filtered);
			_this.setState({ raycast: filtered });
		};

		_this.loadingHandler = function (loaded) {
			_this.setState({ loaded: loaded });
		};

		_this.state = {
			nav: 'Products',
			changeNav: _this.changeNav,
			raycast: '',
			raycastHandler: _this.raycastHandler,
			loaded: false,
			loadingHandler: _this.loadingHandler
		};
		return _this;
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_reactRouterDom.BrowserRouter,
				null,
				_react2.default.createElement(
					_AppContext2.default.Provider,
					{ value: this.state },
					_react2.default.createElement(
						_react.Fragment,
						null,
						_react2.default.createElement(_Header2.default, null),
						_react2.default.createElement(_Footer2.default, null),
						_react2.default.createElement(_Test2.default, null),
						_react2.default.createElement(_routes2.default, { location: location })
					)
				)
			);
		}
	}]);

	return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(87);

var _App = __webpack_require__(303);

var _App2 = _interopRequireDefault(_App);

__webpack_require__(120);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(_App2.default, null), document.getElementById('root'));

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(514);
__webpack_require__(312);
module.exports = __webpack_require__(120);


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppContext = _react2.default.createContext({
	nav: 'Products',
	changeNav: function changeNav() {},
	raycast: '',
	raycastHandler: function raycastHandler() {},
	loaded: false,
	loadingHandler: function loadingHandler() {}
});

exports.default = AppContext;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map