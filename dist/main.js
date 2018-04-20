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
/******/ 	__webpack_require__.p = "/";
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
/******/ 	deferredModules.push([519,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var companyUrl = "http://neopolia.odns.fr/atomouest/wp-json/wp/v2/" + "company/";

var getAllCompanies = exports.getAllCompanies = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
		var res, companies;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return fetch(companyUrl);

					case 2:
						res = _context.sent;
						_context.next = 5;
						return res.json();

					case 5:
						companies = _context.sent;
						return _context.abrupt("return", companies.map(function (company) {
							return _extends({
								id: company.id,
								name: company.title.rendered
							}, company.acf);
						}));

					case 7:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function getAllCompanies() {
		return _ref.apply(this, arguments);
	};
}();

var getCompanyById = exports.getCompanyById = function () {
	var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
		var res, company;
		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.next = 2;
						return fetch(companyUrl + id);

					case 2:
						res = _context2.sent;
						_context2.next = 5;
						return res.json();

					case 5:
						company = _context2.sent;
						return _context2.abrupt("return", _extends({ id: company.id, name: company.title.rendered }, company.acf));

					case 7:
					case "end":
						return _context2.stop();
				}
			}
		}, _callee2, undefined);
	}));

	return function getCompanyById(_x) {
		return _ref2.apply(this, arguments);
	};
}();

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dd2873937c57782df73849cbcecccfac.png";

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(54);

var _AppContext = __webpack_require__(56);

var _AppContext2 = _interopRequireDefault(_AppContext);

__webpack_require__(186);

var _LogoNeopoliaAtomOuest = __webpack_require__(184);

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

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _AppContext = __webpack_require__(56);

var _AppContext2 = _interopRequireDefault(_AppContext);

__webpack_require__(189);

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

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(192);

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

/***/ 194:
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

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Loader = __webpack_require__(66);

var _Loader2 = _interopRequireDefault(_Loader);

var _company = __webpack_require__(122);

__webpack_require__(196);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Company = function (_Component) {
	_inherits(Company, _Component);

	function Company(props) {
		_classCallCheck(this, Company);

		var _this = _possibleConstructorReturn(this, (Company.__proto__ || Object.getPrototypeOf(Company)).call(this, props));

		_this.state = {
			loaded: false
		};
		return _this;
	}

	_createClass(Company, [{
		key: 'componentDidMount',
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
				var company;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return (0, _company.getCompanyById)(this.props.match.params.companyId);

							case 2:
								company = _context.sent;

								this.setState({ company: company, loaded: true });

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
			var loader = _react2.default.createElement(_Loader2.default, { variant: 'big' });
			var companyComponent = null;
			if (this.state.loaded) {
				loader = null;
				var c = this.state.company;
				companyComponent = _react2.default.createElement(
					_react.Fragment,
					null,
					_react2.default.createElement(
						'div',
						{ className: 'company__data' },
						_react2.default.createElement(
							'h1',
							{ className: 'company__name' },
							c.name
						),
						_react2.default.createElement(
							'p',
							{ className: 'company__presentation' },
							c.presentation
						),
						_react2.default.createElement(
							'div',
							{ className: 'company__numbers' },
							_react2.default.createElement(
								'p',
								{ className: 'company__turnover' },
								_react2.default.createElement(
									'span',
									null,
									'Turnover: '
								),
								c.turnover
							),
							_react2.default.createElement(
								'p',
								{ className: 'company__workforce' },
								_react2.default.createElement(
									'span',
									null,
									'Workforce: '
								),
								c.workforce
							),
							_react2.default.createElement(
								'p',
								{ className: 'company__certifications' },
								_react2.default.createElement(
									'span',
									null,
									'Certifications: '
								),
								c.certifications && c.certifications.join(', ') || 'None'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'company__logo' },
						_react2.default.createElement('img', { src: c.logo.sizes.large, alt: c.name + '\'s logo' })
					)
				);
			}
			return _react2.default.createElement(
				'div',
				{ className: 'page company' },
				loader,
				companyComponent
			);
		}
	}]);

	return Company;
}(_react.Component);

exports.default = Company;

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

var _reactRouterDom = __webpack_require__(54);

var _Loader = __webpack_require__(66);

var _Loader2 = _interopRequireDefault(_Loader);

var _company = __webpack_require__(122);

__webpack_require__(199);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CompanyCard = function CompanyCard(_ref) {
	var name = _ref.name,
	    logo = _ref.logo,
	    id = _ref.id;

	return _react2.default.createElement(
		_reactRouterDom.Link,
		{ className: 'companies__card', to: '/companies/' + id },
		_react2.default.createElement('img', { src: logo, className: 'companies__logo', alt: name + '\'s logo' }),
		_react2.default.createElement(
			'div',
			{ className: 'companies__name' },
			_react2.default.createElement(
				'div',
				null,
				name
			)
		)
	);
};

var Companies = function (_Component) {
	_inherits(Companies, _Component);

	function Companies(props) {
		_classCallCheck(this, Companies);

		var _this = _possibleConstructorReturn(this, (Companies.__proto__ || Object.getPrototypeOf(Companies)).call(this, props));

		_this.state = {
			loaded: false
		};
		return _this;
	}

	_createClass(Companies, [{
		key: 'componentDidMount',
		value: function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
				var companies;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return (0, _company.getAllCompanies)();

							case 2:
								companies = _context.sent;

								this.setState({ companies: companies, loaded: true });

							case 4:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function componentDidMount() {
				return _ref2.apply(this, arguments);
			}

			return componentDidMount;
		}()
	}, {
		key: 'render',
		value: function render() {
			var loader = _react2.default.createElement(_Loader2.default, { variant: 'big' });
			var companiesCards = null;
			if (this.state.loaded) {
				loader = null;
				companiesCards = this.state.companies.map(function (c) {
					return _react2.default.createElement(CompanyCard, { key: c.id, name: c.name, logo: c.logo.sizes.thumbnail, id: c.id });
				});
			}
			return _react2.default.createElement(
				'div',
				{ className: 'page companies' },
				loader,
				_react2.default.createElement(
					'div',
					{ className: 'companies__container' },
					companiesCards
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

module.exports = __webpack_require__.p + "656c4848e94e5e8e26beffbd52068fd6.png";

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "54a5d52f637c77e7adba9dcb116304ed.png";

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "87ed8e39f560e6a0c400ca8855528606.png";

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "01b8d8c0bb2e2d80bd17510fc3780575.png";

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1a64ca91bd6421f757ad65841b5eda3a.png";

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "766ba4bdc1cda20d0d61e7dfd64a1542.png";

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4418dde3f6abc21dc32506acf5f5b093.jpg";

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b5eb8ea587bca0f0245b65eeed021fa0.dae";

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(37);

var THREE = _interopRequireWildcard(_three);

__webpack_require__(277);

var _stats = __webpack_require__(276);

var _stats2 = _interopRequireDefault(_stats);

var _merge = __webpack_require__(275);

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
	controls.minDistance = 4;
	controls.maxDistance = 8;

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

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.attachRaycastHandler = exports.attachLoadingHandler = undefined;

var _three = __webpack_require__(37);

var THREE = _interopRequireWildcard(_three);

__webpack_require__(281);

__webpack_require__(280);

__webpack_require__(279);

var _initThree2 = __webpack_require__(278);

var _initThree3 = _interopRequireDefault(_initThree2);

var _test = __webpack_require__(208);

var _test2 = _interopRequireDefault(_test);

var _waternormals = __webpack_require__(207);

var _waternormals2 = _interopRequireDefault(_waternormals);

var _back = __webpack_require__(206);

var _back2 = _interopRequireDefault(_back);

var _bottom = __webpack_require__(205);

var _bottom2 = _interopRequireDefault(_bottom);

var _front = __webpack_require__(204);

var _front2 = _interopRequireDefault(_front);

var _left = __webpack_require__(203);

var _left2 = _interopRequireDefault(_left);

var _right = __webpack_require__(202);

var _right2 = _interopRequireDefault(_right);

var _top = __webpack_require__(201);

var _top2 = _interopRequireDefault(_top);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var canvas = document.createElement('canvas');
canvas.id = 'canvas';

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
	axesHelper: true
}),
    stats = _initThree.stats,
    renderer = _initThree.renderer,
    scene = _initThree.scene,
    camera = _initThree.camera,
    controls = _initThree.controls;

// constants


var size = 69.1;

// lights
var light = new THREE.DirectionalLight(0xffffff, 0.2);
scene.add(light);
// fog
scene.fog = new THREE.FogExp2(0xaaaaaa, 0.01);

// model
var model = void 0;
var mat = new THREE.MeshPhongMaterial({ color: 0x7777ff, side: THREE.DoubleSide });
var addModel = function addModel() {
	var daeLoader = new THREE.ColladaLoader();
	daeLoader.load(_test2.default, function (object) {
		model = object.scene;
		model.traverse(function (node) {
			if (node instanceof THREE.Mesh) {
				node.castShadow = true;
				node.receiveShadow = true;
				if (Array.isArray(node.material)) node.material.forEach(function (m) {
					return m.side = THREE.DoubleSide;
				});else node.material.side = THREE.DoubleSide;
			}
		});
		model.scale.set(0.01, 0.01, 0.01);
		model.rotation.z = Math.PI;
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
	water.material.uniforms.distortionScale.value = 0.1;
	water.material.uniforms.size.value = 0.8;
	water.material.uniforms.alpha.value = 0.95;
	water.position.set(10.5, 0, -15);
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
	sky.position.set(10.5, -15, -15);
	scene.add(sky);
};

// loading handler
var attachLoadingHandler = function attachLoadingHandler(cb) {
	THREE.DefaultLoadingManager.onLoad = function () {
		return cb(true);
	};
	addWater();
	addSky();
	addModel();
};

// raycasting
var selectionColor = new THREE.Color(0xff0000);
var prevColor = void 0;
var attachRaycastHandler = function attachRaycastHandler(cb) {
	var raycaster = new THREE.Raycaster();
	var mouse = new THREE.Vector2();
	var handleClick = function handleClick(e) {
		e.preventDefault();
		// clear all coloring
		model.traverse(function (node) {
			if (node instanceof THREE.Mesh) {
				var _node$material$color = node.material.color,
				    r = _node$material$color.r,
				    g = _node$material$color.g,
				    b = _node$material$color.b;

				if (r === selectionColor.r && g === selectionColor.g && b === selectionColor.b) {
					node.material.color = prevColor;
				}
			}
		});
		// if within the displayed part of the canvas, try the raycast
		// only handle click when the foremost dom element clicked is the canvas
		var element = document.elementFromPoint(e.clientX, e.clientY);
		if (element && element.id === 'canvas') {
			mouse.x = e.clientX / window.innerWidth * 2 - 1;
			mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
			raycaster.setFromCamera(mouse, camera);
			var intersects = raycaster.intersectObjects(model.children, true);
			if (intersects.length > 0) {
				cb(intersects);
				prevColor = intersects[0].object.material.color;
				intersects[0].object.material.color = selectionColor;
			} else cb([{}]);
		}
	};
	addEventListener('click', handleClick);
};

var rafID = void 0;
var animate = function animate(timestamp) {
	rafID = requestAnimationFrame(animate);
	stats.begin();
	if (water) water.material.uniforms.time.value += 0.0005;
	renderer.render(scene, camera);
	stats.end();
};
requestAnimationFrame(animate);

exports.default = canvas;
exports.attachLoadingHandler = attachLoadingHandler;
exports.attachRaycastHandler = attachRaycastHandler;

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(2);

function Close (props) {
    return React.createElement("svg",props,React.createElement("g",null,[React.createElement("line",{"x1":"9","y1":"9","x2":"91","y2":"91","key":0}),React.createElement("line",{"x1":"91","y1":"9","x2":"9","y2":"91","key":1})]));
}

Close.displayName = "Close";

Close.defaultProps = {"viewBox":"0 0 100 100"};

module.exports = Close;

Close.default = Close;


/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var realisationUrl = "http://neopolia.odns.fr/atomouest/wp-json/wp/v2/" + "realisation/";

var getAllRealisations = exports.getAllRealisations = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
		var res, realisations;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return fetch(realisationUrl);

					case 2:
						res = _context.sent;
						_context.next = 5;
						return res.json();

					case 5:
						realisations = _context.sent;
						return _context.abrupt("return", realisations.map(function (realisation) {
							return _extends({
								id: realisation.id
							}, realisation.acf);
						}));

					case 7:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function getAllRealisations() {
		return _ref.apply(this, arguments);
	};
}();

var getRealisationById = exports.getRealisationById = function () {
	var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
		var res, realisation;
		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.next = 2;
						return fetch(realisationUrl + id);

					case 2:
						res = _context2.sent;
						_context2.next = 5;
						return res.json();

					case 5:
						realisation = _context2.sent;
						return _context2.abrupt("return", _extends({
							id: realisation.id,
							name: realisation.title.rendered
						}, realisation.acf));

					case 7:
					case "end":
						return _context2.stop();
				}
			}
		}, _callee2, undefined);
	}));

	return function getRealisationById(_x) {
		return _ref2.apply(this, arguments);
	};
}();

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var vignetteUrl = "http://neopolia.odns.fr/atomouest/wp-json/wp/v2/" + "vignette/";

var getAllVignettes = exports.getAllVignettes = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
		var res, vignettes;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return fetch(vignetteUrl);

					case 2:
						res = _context.sent;
						_context.next = 5;
						return res.json();

					case 5:
						vignettes = _context.sent;
						return _context.abrupt("return", vignettes.map(function (vignette) {
							return _extends({
								id: vignette.id,
								title: vignette.title.rendered
							}, vignette.acf);
						}));

					case 7:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function getAllVignettes() {
		return _ref.apply(this, arguments);
	};
}();

var getVignetteByName = exports.getVignetteByName = function () {
	var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(name) {
		var vignettes;
		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.next = 2;
						return getAllVignettes();

					case 2:
						vignettes = _context2.sent;
						return _context2.abrupt("return", vignettes.find(function (vignette) {
							return vignette.model_id === name;
						}));

					case 4:
					case "end":
						return _context2.stop();
				}
			}
		}, _callee2, undefined);
	}));

	return function getVignetteByName(_x) {
		return _ref2.apply(this, arguments);
	};
}();

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(54);

var _AppContext = __webpack_require__(56);

var _AppContext2 = _interopRequireDefault(_AppContext);

var _vignette = __webpack_require__(287);

var _realisation = __webpack_require__(286);

var _Loader = __webpack_require__(66);

var _Loader2 = _interopRequireDefault(_Loader);

var _close = __webpack_require__(285);

var _close2 = _interopRequireDefault(_close);

__webpack_require__(284);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VignetteContent = function (_Component) {
	_inherits(VignetteContent, _Component);

	function VignetteContent(props) {
		var _this2 = this;

		_classCallCheck(this, VignetteContent);

		var _this = _possibleConstructorReturn(this, (VignetteContent.__proto__ || Object.getPrototypeOf(VignetteContent)).call(this, props));

		_this.state = {
			loaded: false
		};
		_this.loadData = function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(vignetteName) {
				var vignette, realisations, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, realisation, currentRealisation;

				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								if (!vignetteName) {
									_context.next = 42;
									break;
								}

								_context.next = 3;
								return (0, _vignette.getVignetteByName)(vignetteName);

							case 3:
								vignette = _context.sent;

								if (!vignette) {
									_context.next = 39;
									break;
								}

								realisations = [];
								_iteratorNormalCompletion = true;
								_didIteratorError = false;
								_iteratorError = undefined;
								_context.prev = 9;
								_iterator = vignette.realisations[Symbol.iterator]();

							case 11:
								if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
									_context.next = 20;
									break;
								}

								realisation = _step.value;
								_context.next = 15;
								return (0, _realisation.getRealisationById)(realisation.ID);

							case 15:
								currentRealisation = _context.sent;

								realisations.push(currentRealisation);

							case 17:
								_iteratorNormalCompletion = true;
								_context.next = 11;
								break;

							case 20:
								_context.next = 26;
								break;

							case 22:
								_context.prev = 22;
								_context.t0 = _context['catch'](9);
								_didIteratorError = true;
								_iteratorError = _context.t0;

							case 26:
								_context.prev = 26;
								_context.prev = 27;

								if (!_iteratorNormalCompletion && _iterator.return) {
									_iterator.return();
								}

							case 29:
								_context.prev = 29;

								if (!_didIteratorError) {
									_context.next = 32;
									break;
								}

								throw _iteratorError;

							case 32:
								return _context.finish(29);

							case 33:
								return _context.finish(26);

							case 34:
								console.log(vignette);
								console.log(realisations);
								_this.setState({ vignette: vignette, realisations: realisations, loaded: true });
								_context.next = 40;
								break;

							case 39:
								return _context.abrupt('return', null);

							case 40:
								_context.next = 43;
								break;

							case 42:
								return _context.abrupt('return', null);

							case 43:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[9, 22, 26, 34], [27,, 29, 33]]);
			}));

			return function (_x) {
				return _ref.apply(this, arguments);
			};
		}();
		return _this;
	}

	_createClass(VignetteContent, [{
		key: 'componentDidMount',
		value: function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
								return this.loadData(this.props.vignetteName);

							case 2:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function componentDidMount() {
				return _ref2.apply(this, arguments);
			}

			return componentDidMount;
		}()
	}, {
		key: 'componentWillReceiveProps',
		value: function () {
			var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(nextProps) {
				return regeneratorRuntime.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								if (!(nextProps.vignetteName !== this.props.vignetteName)) {
									_context3.next = 4;
									break;
								}

								this.setState({ vignette: {}, realisations: [], loaded: false });
								_context3.next = 4;
								return this.loadData(nextProps.vignetteName);

							case 4:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function componentWillReceiveProps(_x2) {
				return _ref3.apply(this, arguments);
			}

			return componentWillReceiveProps;
		}()
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var content = null;
			var loader = _react2.default.createElement(_Loader2.default, { variant: 'relative' });
			if (this.state.loaded) {
				loader = null;
				content = this.state.realisations.map(function (r) {
					return _react2.default.createElement(
						_reactRouterDom.Link,
						{ to: '/realisation/' + r.id, className: 'vignette__realisation', key: r.id },
						_react2.default.createElement('img', { src: r.pictures[0].sizes.thumbnail, alt: r.piece_name }),
						_react2.default.createElement(
							'div',
							{ className: 'vignette__name' },
							r.name
						)
					);
				});
			}
			return _react2.default.createElement(
				_react.Fragment,
				null,
				_react2.default.createElement(
					'h1',
					null,
					this.props.vignetteName
				),
				_react2.default.createElement(_close2.default, { onClick: function onClick() {
						return _this3.props.closeHandler([{}]);
					} }),
				_react2.default.createElement(
					'div',
					{ className: 'vignette__realisations' },
					content
				),
				loader
			);
		}
	}]);

	return VignetteContent;
}(_react.Component);

var Vignette = function Vignette() {
	return _react2.default.createElement(
		_AppContext2.default.Consumer,
		null,
		function (context) {
			var content = null;
			var styles = 'vignette';
			if (context.nav === 'Products' && context.raycast && context.raycast.name) {
				content = _react2.default.createElement(VignetteContent, {
					vignetteName: context.raycast.name,
					closeHandler: context.raycastHandler
				});
				styles += ' vignette-visible';
			}
			return _react2.default.createElement(
				'div',
				{ className: styles },
				content
			);
		}
	);
};

exports.default = Vignette;

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 293:
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

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _ElementContainer = __webpack_require__(293);

var _ElementContainer2 = _interopRequireDefault(_ElementContainer);

var _AppContext = __webpack_require__(56);

var _AppContext2 = _interopRequireDefault(_AppContext);

var _Loader = __webpack_require__(66);

var _Loader2 = _interopRequireDefault(_Loader);

var _Vignette = __webpack_require__(288);

var _Vignette2 = _interopRequireDefault(_Vignette);

var _canvas = __webpack_require__(282);

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
			return _react2.default.createElement(_ElementContainer2.default, { id: 'canvas__container', child: _canvas2.default });
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
					var loader = _react2.default.createElement(_Loader2.default, { variant: 'big' });
					if (context.loaded) loader = null;
					return _react2.default.createElement(
						_react.Fragment,
						null,
						_react2.default.createElement(_Vignette2.default, null),
						_react2.default.createElement(WebGL, {
							raycastHandler: context.raycastHandler,
							loadingHandler: context.loadingHandler
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

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(54);

var _reactTransitionGroup = __webpack_require__(301);

var _createBrowserHistory = __webpack_require__(120);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _Scene = __webpack_require__(294);

var _Scene2 = _interopRequireDefault(_Scene);

var _Companies = __webpack_require__(200);

var _Companies2 = _interopRequireDefault(_Companies);

var _Company = __webpack_require__(197);

var _Company2 = _interopRequireDefault(_Company);

var _Contact = __webpack_require__(194);

var _Contact2 = _interopRequireDefault(_Contact);

var _About = __webpack_require__(193);

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
				_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/companies', component: _Companies2.default }),
				_react2.default.createElement(_reactRouterDom.Route, { path: '/companies/:companyId', component: _Company2.default }),
				_react2.default.createElement(_reactRouterDom.Route, { path: '/contact', component: _Contact2.default }),
				_react2.default.createElement(_reactRouterDom.Route, { path: '/about', component: _About2.default })
			)
		)
	);
});

exports.default = Routes;

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(54);

var _AppContext = __webpack_require__(56);

var _AppContext2 = _interopRequireDefault(_AppContext);

var _routes = __webpack_require__(302);

var _routes2 = _interopRequireDefault(_routes);

var _Header = __webpack_require__(190);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(187);

var _Footer2 = _interopRequireDefault(_Footer);

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
					return e.object.parent.name === y.object.parent.name;
				});
				return index < 0 ? [].concat(_toConsumableArray(x), [y]) : x;
			}, [])[0];
			_this.setState({ raycast: filtered.object ? filtered.object.parent : {} });
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
				_AppContext2.default.Provider,
				{ value: this.state },
				_react2.default.createElement(
					_reactRouterDom.BrowserRouter,
					null,
					_react2.default.createElement(
						_react.Fragment,
						null,
						_react2.default.createElement(_Header2.default, null),
						_react2.default.createElement(_Footer2.default, null),
						_react2.default.createElement(_routes2.default, null)
					)
				)
			);
		}
	}]);

	return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(88);

var _App = __webpack_require__(307);

var _App2 = _interopRequireDefault(_App);

__webpack_require__(121);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(_App2.default, null), document.getElementById('root'));

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(518);
__webpack_require__(316);
module.exports = __webpack_require__(121);


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navigation = {
	nav: 'Products',
	changeNav: function changeNav() {}
};

var raycasting = {
	raycast: '',
	raycastHandler: function raycastHandler() {}
};

var loading = {
	loaded: false,
	loadingHandler: function loadingHandler() {}
};

var AppContext = _react2.default.createContext(_extends({}, navigation, raycasting, loading));

exports.default = AppContext;

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactLoaders = __webpack_require__(292);

__webpack_require__(290);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function Loader(_ref) {
	var variant = _ref.variant;

	var className = 'loader';
	if (variant) className += ' loader-' + variant;
	return _react2.default.createElement(_reactLoaders.Loader, { type: 'square-spin', className: className, innerClassName: 'loader__custom' });
};

exports.default = Loader;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map