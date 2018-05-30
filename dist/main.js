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
/******/ 	deferredModules.push([594,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var aboutUsUrl = "http://neopolia.odns.fr/atomouest/wp-json/wp/v2/" + 'about/';

var getAboutUs = exports.getAboutUs = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
		var res, aboutUs;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return fetch(aboutUsUrl);

					case 2:
						res = _context.sent;
						_context.next = 5;
						return res.json();

					case 5:
						aboutUs = _context.sent;
						return _context.abrupt('return', {
							slides: aboutUs[0].acf.slides.map(function (s) {
								return s.ID;
							})
						});

					case 7:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function getAboutUs() {
		return _ref.apply(this, arguments);
	};
}();

var getAboutUsOffline = exports.getAboutUsOffline = function getAboutUsOffline() {
	return JSON.parse(sessionStorage.getItem('about'));
};

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var offerUrl = "http://neopolia.odns.fr/atomouest/wp-json/wp/v2/" + 'offer/';

var getOffer = exports.getOffer = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
		var res, offer;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return fetch(offerUrl);

					case 2:
						res = _context.sent;
						_context.next = 5;
						return res.json();

					case 5:
						offer = _context.sent;
						return _context.abrupt('return', {
							slides: offer[0].acf.slides.map(function (s) {
								return s.ID;
							})
						});

					case 7:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function getOffer() {
		return _ref.apply(this, arguments);
	};
}();

var getOfferOffline = exports.getOfferOffline = function getOfferOffline() {
	return JSON.parse(sessionStorage.getItem('offer'));
};

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(26);

__webpack_require__(222);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slideshow = function (_Component) {
	_inherits(Slideshow, _Component);

	function Slideshow(props) {
		_classCallCheck(this, Slideshow);

		var _this = _possibleConstructorReturn(this, (Slideshow.__proto__ || Object.getPrototypeOf(Slideshow)).call(this, props));

		_this.handleClick = function (offset) {
			_this.setState({ offset: offset });
			_this.props.updateIndex(offset);
			_this.slides.current.style.transform = 'translateX(-' + offset * 100 + '%)';
		};

		_this.slides = _react2.default.createRef();
		_this.state = {
			offset: 0
		};
		return _this;
	}

	_createClass(Slideshow, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			if (this.props.clicks) {
				setTimeout(function () {
					_this2.props.clicks.forEach(function (c) {
						var element = document.querySelector('[id^=\'' + c.id + '\']');
						element.style.cursor = 'pointer';
						element.style.transition = 'transform 0.4s';
						element.style.transformOrigin = 'center';
						element.addEventListener('click', function (e) {
							e.preventDefault();
							_this2.props.updateNav(c.nav);
							_this2.props.updateTitle(c.title);
							_this2.props.history.push(c.target);
						});
						element.classList.add('animated');
					});
				}, 1000);
			}
			if (this.props.menu) this.handleClick(this.props.menu);else this.handleClick(this.props.index);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var menuItems = this.props.slidesConf.map(function (s, i) {
				var active = i === parseInt(_this3.state.offset, 10) ? 'slideshow__item-active' : '';
				return _react2.default.createElement(
					'div',
					{
						className: 'slideshow__item ' + active,
						onClick: function onClick() {
							return _this3.handleClick(i);
						},
						key: 'menu_' + i
					},
					_react2.default.createElement('img', { src: s.menu.img, alt: s.menu.name + ' icon' }),
					_react2.default.createElement(
						'div',
						{ className: 'slideshow__name' },
						_react2.default.createElement(
							'div',
							null,
							s.menu.name
						)
					)
				);
			});

			var slidesItems = this.props.slidesConf.map(function (s, i) {
				return _react2.default.createElement(
					'div',
					{ className: 'slideshow__slide', key: 'slide_' + i },
					s.slide.content
				);
			});

			return _react2.default.createElement(
				'div',
				{ className: 'page ' + this.props.pageName },
				_react2.default.createElement(
					'div',
					{ className: 'slideshow__menu' },
					menuItems
				),
				_react2.default.createElement(
					'div',
					{ className: 'slideshow__slider' },
					_react2.default.createElement(
						'div',
						{ className: 'slideshow__slides', ref: this.slides },
						slidesItems
					)
				)
			);
		}
	}]);

	return Slideshow;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Slideshow);

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _right = __webpack_require__(243);

var _right2 = _interopRequireDefault(_right);

var _left = __webpack_require__(242);

var _left2 = _interopRequireDefault(_left);

__webpack_require__(241);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Title = function Title(_ref) {
	var content = _ref.content,
	    size = _ref.size;

	return _react2.default.createElement(
		'div',
		{ className: 'title' },
		_react2.default.createElement(
			'div',
			{ className: 'title__decoration' },
			_react2.default.createElement(_left2.default, { className: 'title__svg left' }),
			_react2.default.createElement('div', null)
		),
		_react2.default.createElement('h1', { className: 'title__name', style: { fontSize: (size || 72) + 'px' }, dangerouslySetInnerHTML: { __html: content } }),
		_react2.default.createElement(_right2.default, { className: 'title__svg right' })
	);
};

exports.default = Title;

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(26);

var _reactSlick = __webpack_require__(261);

var _reactSlick2 = _interopRequireDefault(_reactSlick);

__webpack_require__(245);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CustomSlider = function CustomSlider(_ref) {
	var className = _ref.className,
	    content = _ref.content,
	    size = _ref.size;

	var slider = null;
	var slides = content.map(function (c, i) {
		var title = null;
		if (c.title && c.id) {
			title = _react2.default.createElement(
				_reactRouterDom.Link,
				{ to: '/realisation/' + c.id },
				_react2.default.createElement('div', { className: 'slider__title', dangerouslySetInnerHTML: { __html: c.title } })
			);
		}
		return _react2.default.createElement(
			'div',
			{ key: i, className: 'slider__slide' },
			title,
			_react2.default.createElement('img', { width: (size || 300) + 'px', height: (size || 300) + 'px', src: c.image })
		);
	});
	if (slides.length) {
		var settings = _defineProperty({
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		}, 'dots', false);
		slider = _react2.default.createElement(
			_reactSlick2.default,
			_extends({}, settings, { className: 'slider ' + className }),
			slides
		);
	}
	return slider;
};

exports.default = CustomSlider;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var vignetteUrl = "http://neopolia.odns.fr/atomouest/wp-json/wp/v2/" + 'vignette/';

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
						return _context.abrupt('return', vignettes.map(function (vignette) {
							return _extends({
								id: vignette.id,
								title: vignette.title.rendered
							}, vignette.acf);
						}));

					case 7:
					case 'end':
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
						return _context2.abrupt('return', vignettes.find(function (vignette) {
							return vignette.model_id === name;
						}));

					case 4:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, undefined);
	}));

	return function getVignetteByName(_x) {
		return _ref2.apply(this, arguments);
	};
}();

var getAllVignettesOffline = exports.getAllVignettesOffline = function getAllVignettesOffline() {
	return JSON.parse(sessionStorage.getItem('vignettes'));
};

var getVignetteByNameOffline = exports.getVignetteByNameOffline = function getVignetteByNameOffline(name) {
	var vignettes = getAllVignettesOffline();
	return vignettes.find(function (vignette) {
		return vignette.model_id === name;
	});
};

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var isOnline = exports.isOnline = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
		var res;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.prev = 0;
						_context.next = 3;
						return fetch('//google.com', {
							mode: 'no-cors'
						});

					case 3:
						res = _context.sent;
						return _context.abrupt('return', true);

					case 7:
						_context.prev = 7;
						_context.t0 = _context['catch'](0);
						return _context.abrupt('return', false);

					case 10:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined, [[0, 7]]);
	}));

	return function isOnline() {
		return _ref.apply(this, arguments);
	};
}();

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.clearData = exports.loadData = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _company = __webpack_require__(89);

var _realisation = __webpack_require__(71);

var _vignette = __webpack_require__(157);

var _slide = __webpack_require__(86);

var _about = __webpack_require__(131);

var _offer = __webpack_require__(132);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var loadImage = function loadImage(src) {
	return new Promise(function (resolve, reject) {
		var img = new Image();
		img.onload = resolve;
		img.onerror = reject;
		img.src = src;
	});
};

var loadImages = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(imgs) {
		var promises;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						promises = imgs.map(function (i) {
							return loadImage(i);
						});
						return _context.abrupt('return', Promise.all(promises));

					case 2:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function loadImages(_x) {
		return _ref.apply(this, arguments);
	};
}();

var loadData = exports.loadData = function () {
	var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
		var _ref5, _ref6, _ref8;

		var _ref3, _ref4, companies, realisations, vignettes, slides, about, offer, companiesImages, realisationsImages, slidesImages;

		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.next = 2;
						return Promise.all([(0, _company.getAllCompanies)(), (0, _realisation.getAllRealisations)(), (0, _vignette.getAllVignettes)(), (0, _slide.getAllSlides)(), (0, _about.getAboutUs)(), (0, _offer.getOffer)()]);

					case 2:
						_ref3 = _context2.sent;
						_ref4 = _slicedToArray(_ref3, 6);
						companies = _ref4[0];
						realisations = _ref4[1];
						vignettes = _ref4[2];
						slides = _ref4[3];
						about = _ref4[4];
						offer = _ref4[5];
						companiesImages = (_ref5 = []).concat.apply(_ref5, _toConsumableArray(companies.map(function (c) {
							return [c.logo.sizes.thumbnail, c.logo.sizes.large];
						})));
						_context2.next = 13;
						return loadImages(companiesImages);

					case 13:
						realisationsImages = (_ref6 = []).concat.apply(_ref6, _toConsumableArray(realisations.map(function (r) {
							var _ref7;

							return (_ref7 = []).concat.apply(_ref7, _toConsumableArray(r.pictures.map(function (p) {
								return p.sizes.large;
							})).concat([[r.pictures[0].sizes.thumbnail]]));
						})));
						_context2.next = 16;
						return loadImages(realisationsImages);

					case 16:
						slidesImages = (_ref8 = []).concat.apply(_ref8, _toConsumableArray(slides.map(function (s) {
							return [s.picto.sizes.large, s.image.url];
						})));
						_context2.next = 19;
						return loadImages(slidesImages);

					case 19:

						sessionStorage.setItem('companies', JSON.stringify(companies));
						sessionStorage.setItem('realisations', JSON.stringify(realisations));
						sessionStorage.setItem('vignettes', JSON.stringify(vignettes));
						sessionStorage.setItem('slides', JSON.stringify(slides));
						sessionStorage.setItem('about', JSON.stringify(about));
						sessionStorage.setItem('offer', JSON.stringify(offer));

					case 25:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, undefined);
	}));

	return function loadData() {
		return _ref2.apply(this, arguments);
	};
}();

var clearData = exports.clearData = function () {
	var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
		return regeneratorRuntime.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						sessionStorage.clear();

					case 1:
					case 'end':
						return _context3.stop();
				}
			}
		}, _callee3, undefined);
	}));

	return function clearData() {
		return _ref9.apply(this, arguments);
	};
}();

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dd2873937c57782df73849cbcecccfac.png";

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(26);

var _AppContext = __webpack_require__(36);

var _AppContext2 = _interopRequireDefault(_AppContext);

__webpack_require__(211);

var _LogoNeopoliaAtomOuest = __webpack_require__(209);

var _LogoNeopoliaAtomOuest2 = _interopRequireDefault(_LogoNeopoliaAtomOuest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FooterItem = (0, _reactRouterDom.withRouter)(function (props) {
	var handleClick = function handleClick() {
		props.updateNav(props.content);
		props.updateTitle(props.content);
		props.resetRaycast([{}]);
		props.history.push(props.route);
	};
	var active = void 0;
	if (props.route === props.location.pathname && props.route === '/') {
		active = 'footer__item-active';
	} else {
		active = props.location.pathname.startsWith(props.route) && props.route.length > 1 ? 'footer__item-active' : '';
	}
	return _react2.default.createElement(
		'div',
		{ className: 'footer__item ' + active, onClick: handleClick },
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
						updateTitle: context.changeTitle,
						resetRaycast: context.raycastHandler
					}),
					_react2.default.createElement(FooterItem, {
						content: 'About us',
						route: '/about',
						updateNav: context.changeNav,
						updateTitle: context.changeTitle,
						resetRaycast: context.raycastHandler
					}),
					_react2.default.createElement(FooterItem, {
						content: 'Offer',
						route: '/offer',
						updateNav: context.changeNav,
						updateTitle: context.changeTitle,
						resetRaycast: context.raycastHandler
					}),
					_react2.default.createElement(FooterItem, {
						content: 'Members',
						route: '/companies',
						updateNav: context.changeNav,
						updateTitle: context.changeTitle,
						resetRaycast: context.raycastHandler
					})
				);
			}
		)
	);
};

exports.default = Footer;

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _AppContext = __webpack_require__(36);

var _AppContext2 = _interopRequireDefault(_AppContext);

__webpack_require__(214);

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
			var nav = _ref2.nav,
			    title = _ref2.title;
			return _react2.default.createElement(
				'header',
				{ className: 'header' },
				_react2.default.createElement(HeaderItem, { content: nav }),
				_react2.default.createElement(HeaderItem, { content: title })
			);
		}
	);
};

exports.default = Header;

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactInlinesvg = __webpack_require__(129);

var _reactInlinesvg2 = _interopRequireDefault(_reactInlinesvg);

var _reactRouterDom = __webpack_require__(26);

var _Slideshow = __webpack_require__(133);

var _Slideshow2 = _interopRequireDefault(_Slideshow);

var _AppContext = __webpack_require__(36);

var _AppContext2 = _interopRequireDefault(_AppContext);

var _about = __webpack_require__(131);

var _slide = __webpack_require__(86);

__webpack_require__(217);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function About(props) {
	var about = (0, _about.getAboutUsOffline)();

	var conf = about.slides.map(function (s) {
		var currentSlide = (0, _slide.getSlideByIdOffline)(s);
		var imageUrl = currentSlide.image.url;
		var content = void 0;
		if (imageUrl.endsWith('.svg')) {
			content = _react2.default.createElement(_reactInlinesvg2.default, { src: imageUrl });
		} else {
			content = _react2.default.createElement(
				'span',
				null,
				_react2.default.createElement('img', { src: imageUrl })
			);
		}
		return {
			menu: { img: currentSlide.picto.sizes.large, name: currentSlide.name },
			slide: { content: content }
		};
	});

	return _react2.default.createElement(
		_AppContext2.default.Consumer,
		null,
		function (context) {
			return _react2.default.createElement(_Slideshow2.default, {
				slidesConf: conf,
				menu: props.match.params.menu,
				index: context.aboutIndex,
				updateIndex: context.changeAboutIndex,
				pageName: 'about'
			});
		}
	);
};

exports.default = (0, _reactRouterDom.withRouter)(About);

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactInlinesvg = __webpack_require__(129);

var _reactInlinesvg2 = _interopRequireDefault(_reactInlinesvg);

var _reactRouterDom = __webpack_require__(26);

var _Slideshow = __webpack_require__(133);

var _Slideshow2 = _interopRequireDefault(_Slideshow);

var _AppContext = __webpack_require__(36);

var _AppContext2 = _interopRequireDefault(_AppContext);

var _offer = __webpack_require__(132);

var _slide = __webpack_require__(86);

__webpack_require__(220);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Offer = function Offer(props) {
	var offer = (0, _offer.getOfferOffline)();

	var conf = offer.slides.map(function (s) {
		var currentSlide = (0, _slide.getSlideByIdOffline)(s);
		var imageUrl = currentSlide.image.url;
		var content = void 0;
		if (imageUrl.endsWith('.svg')) {
			content = _react2.default.createElement(_reactInlinesvg2.default, { src: imageUrl });
		} else {
			content = _react2.default.createElement(
				'span',
				null,
				_react2.default.createElement('img', { src: imageUrl })
			);
		}
		return {
			menu: { img: currentSlide.picto.sizes.large, name: currentSlide.name },
			slide: { content: content }
		};
	});

	var clicks = [{ id: 'teamNeopolia', target: '/about', nav: 'About us', title: 'About us' }, { id: 'Members', target: '/companies/close', nav: 'Members', title: 'Members' }, { id: 'Leader', target: '/about/3', nav: 'About us', title: 'About us' }, {
		id: 'Conception__x26__Manufacturing_of_sub-assemblies',
		target: '/companies/Conception_and_manufacturing_of_sub-assemblies',
		nav: 'Members',
		title: 'Conception and manufacturing of sub-assemblies'
	}, {
		id: 'On-site_interventions_for_new_works_and_maintenance',
		target: '/companies/On-site_interventions_for_new_works_and_maintenance',
		nav: 'Members',
		title: 'On-site interventions for new works and maintenance'
	}, {
		id: 'Special_equipment__x26__toolings',
		target: '/companies/Special_equipment_and_toolings',
		nav: 'Members',
		title: 'Special equipment and toolings'
	}, {
		id: 'Dismantlement',
		target: '/companies/Dismantlement',
		nav: 'Members',
		title: 'Dismantlement'
	}];

	return _react2.default.createElement(
		_AppContext2.default.Consumer,
		null,
		function (context) {
			return _react2.default.createElement(_Slideshow2.default, {
				slidesConf: conf,
				clicks: clicks,
				menu: props.match.params.menu,
				index: context.offerIndex,
				updateIndex: context.changeOfferIndex,
				updateTitle: context.changeTitle,
				updateNav: context.changeNav,
				pageName: 'offer'
			});
		}
	);
};

exports.default = (0, _reactRouterDom.withRouter)(Offer);

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Loader = __webpack_require__(52);

var _Loader2 = _interopRequireDefault(_Loader);

var _Slider = __webpack_require__(140);

var _Slider2 = _interopRequireDefault(_Slider);

var _Close = __webpack_require__(88);

var _Close2 = _interopRequireDefault(_Close);

var _Title = __webpack_require__(138);

var _Title2 = _interopRequireDefault(_Title);

var _realisation = __webpack_require__(71);

__webpack_require__(231);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Realisation = function (_Component) {
	_inherits(Realisation, _Component);

	function Realisation(props) {
		_classCallCheck(this, Realisation);

		var _this = _possibleConstructorReturn(this, (Realisation.__proto__ || Object.getPrototypeOf(Realisation)).call(this, props));

		_this.state = {
			loaded: false
		};
		return _this;
	}

	_createClass(Realisation, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var realisation = (0, _realisation.getRealisationByIdOffline)(this.props.match.params.realisationId);
			this.setState({ realisation: realisation, loaded: true });
		}
	}, {
		key: 'render',
		value: function render() {
			var loader = _react2.default.createElement(_Loader2.default, { variant: 'big' });
			var realisationFragment = null;
			if (this.state.loaded) {
				loader = null;
				var r = this.state.realisation;
				var pictures = r.pictures.map(function (p) {
					return { image: p.url };
				});
				realisationFragment = _react2.default.createElement(
					_react.Fragment,
					null,
					_react2.default.createElement(_Title2.default, { content: r.name, size: 40 }),
					_react2.default.createElement(
						'div',
						{ className: 'realisation__details' },
						_react2.default.createElement(
							'div',
							{ className: 'realisation__numbers' },
							r.amount && _react2.default.createElement(
								'p',
								{ className: 'realisation__amount' },
								_react2.default.createElement(
									'span',
									null,
									'Amount: '
								),
								r.amount
							),
							_react2.default.createElement(
								'p',
								{ className: 'realisation__application' },
								_react2.default.createElement(
									'span',
									null,
									'Application: '
								),
								r.application.join(', ')
							),
							_react2.default.createElement(
								'p',
								{ className: 'realisation__client' },
								_react2.default.createElement(
									'span',
									null,
									'Client: '
								),
								r.client_name
							),
							r.geographic_zone && _react2.default.createElement(
								'p',
								{ className: 'realisation__geographic' },
								_react2.default.createElement(
									'span',
									null,
									'Geographic zone: '
								),
								r.geographic_zone.join(', ')
							),
							r.market_type && _react2.default.createElement(
								'p',
								{ className: 'realisation__market' },
								_react2.default.createElement(
									'span',
									null,
									'Market type: '
								),
								r.market_type.join(', ')
							),
							r.program && _react2.default.createElement(
								'p',
								{ className: 'realisation__program' },
								_react2.default.createElement(
									'span',
									null,
									'Program: '
								),
								r.program.join(', ')
							),
							_react2.default.createElement(
								'p',
								{ className: 'realisation__zone' },
								_react2.default.createElement(
									'span',
									null,
									'Zone: '
								),
								r.zone.join(', ')
							),
							_react2.default.createElement(
								'p',
								{ className: 'realisation__certifications' },
								_react2.default.createElement(
									'span',
									null,
									'Certifications: '
								),
								r.certifications && r.certifications.join(', ') || 'None'
							)
						),
						_react2.default.createElement(_Slider2.default, { className: 'realisation__slider', content: pictures, size: 500 })
					)
				);
			}
			return _react2.default.createElement(
				'div',
				{ className: 'page realisation' },
				loader,
				realisationFragment,
				_react2.default.createElement(_Close2.default, null)
			);
		}
	}]);

	return Realisation;
}(_react.Component);

exports.default = Realisation;

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(2);

function Desc (props) {
    return React.createElement("svg",props,React.createElement("polygon",{"points":"1198.09 360.08 0 357.81 0 0 1426.43 0 1198.09 360.08"}));
}

Desc.displayName = "Desc";

Desc.defaultProps = {"viewBox":"0 0 1426.43 360.08"};

module.exports = Desc;

Desc.default = Desc;


/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(2);

function Right (props) {
    return React.createElement("svg",props,React.createElement("polygon",{"points":"0,0 0,10 6.33,0"}));
}

Right.displayName = "Right";

Right.defaultProps = {"viewBox":"0 0 10 10"};

module.exports = Right;

Right.default = Right;


/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _right = __webpack_require__(238);

var _right2 = _interopRequireDefault(_right);

__webpack_require__(237);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Description = function Description(_ref) {
	var content = _ref.content;

	return _react2.default.createElement(
		'div',
		{ className: 'description' },
		_react2.default.createElement('p', { className: 'description__content', dangerouslySetInnerHTML: { __html: content } }),
		_react2.default.createElement(_right2.default, { className: 'description__svg' })
	);
};

exports.default = Description;

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(2);

function Left (props) {
    return React.createElement("svg",props,React.createElement("polygon",{"points":"10,0 10,10 3.66,10"}));
}

Left.displayName = "Left";

Left.defaultProps = {"viewBox":"0 0 10 10"};

module.exports = Left;

Left.default = Left;


/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(2);

function Right (props) {
    return React.createElement("svg",props,React.createElement("polygon",{"points":"0,0 0,10 6.33,0"}));
}

Right.displayName = "Right";

Right.defaultProps = {"viewBox":"0 0 10 10"};

module.exports = Right;

Right.default = Right;


/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(2);

function Company (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M 17.318,3.8146973e-5 0,29.996038 l 17.318,29.996 17.326,30.008 17.324,-30.008 17.319,-29.996 L 51.968,3.8146973e-5 l -34.634,0 -0.02,0 z M 22.259,8.5683381 l 24.752,0 12.377,21.4279999 -12.377,21.428 -24.752,0 -12.375,-21.428 12.375,-21.4279999 z","key":0}),React.createElement("path",{"d":"m 33.726,16.076038 0,10.311 -10.504,0.061 0.178,17.469 22.648,-0.061 -0.04,-27.779 -12.283,0 z m 3.572,4.8321 5.145,0 0,2 -5.145,0 0,-2 z m 0,5.1562 5.145,0 0,2 -5.145,0 0,-2 z m -10.605,5.1563 5.142,0 0,2 -5.142,0 0,-2 z m 10.605,0 5.145,0 0,2 -5.145,0 0,-2 z m -10.605,5.1562 5.142,0 0,2 -5.142,0 0,-2 z m 10.605,0 5.145,0 0,2 -5.145,0 0,-2 z","key":1})]);
}

Company.displayName = "Company";

Company.defaultProps = {"id":"marker","viewBox":"0 0 69.287003 90.000038"};

module.exports = Company;

Company.default = Company;


/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(2);

function France (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"m 93.556922,72.868113 -5.6,-6.6 c -0.5,-0.6 -0.6,-1.5 -0.2,-2.2 l 1.6,-2.5 c 0.3,-0.5 0.4,-1.2 0.1,-1.8 l -4.1,-9.7 c -0.2,-0.4 -0.5,-0.6 -0.9,-0.5 -1.4,0.4 -1.7,-0.5 -0.8,-1.4 l 7,-9 c 0.2,-0.3 0.3,-0.6 0.4,-0.9 l 2.3,-14.2 c 0.1,-0.9 -0.4,-1.8 -1.3,-2.1 l -24,-8 c -0.2,-0.1 -0.5,-0.2 -0.6,-0.4 l -14,-12.1000004 c -0.8,-0.70000004 -2,-0.60000004 -2.7,0.2 l -0.1,0.1 -3.5,4.8 -0.1,0.1 -10.1,11.4000004 c -0.5,0.6 -1.4,0.8 -2.2,0.5 l -9.5,-4.3 c -1,-0.4 -2.1,0 -2.5,0.9 -0.1,0.3 -0.2,0.6 -0.2,0.9 l 0.4,8.2 c 0.1,1 -0.7,1.9 -1.8,2 l -0.2,0 -16.2000001,-1.4 c -0.9,-0.1 -1.6,0.4 -1.9,1.2 l -1.7,4.7 c -0.39999996,0.9 0,1.9 0.8,2.3 l 16.8000001,8.6 c 0.5,0.3 0.9,0.8 1,1.4 l 4.7,26.8 c 0.1,0.3 0,0.7 -0.1,1 l -4.3,11.2 c -0.4,1 0.1,2.1 1.1,2.4 l 0.1,0 35.7,10.5 c 0.9,0.3 1.9,-0.2 2.3,-1.1 l 4.5,-10.4 c 0.4,-0.9 1.4,-1.3 2.3,-1.1 l 15.5,4.5 c 0.7,0.2 1.5,0 2,-0.6 l 10,-11.3 c 0.6,-0.4 0.6,-1.5 0,-2.1 z"}));
}

France.displayName = "France";

France.defaultProps = {"id":"france","viewBox":"0 0 95.00692 96.05533"};

module.exports = France;

France.default = France;


/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(265);

var _france = __webpack_require__(263);

var _france2 = _interopRequireDefault(_france);

var _company = __webpack_require__(262);

var _company2 = _interopRequireDefault(_company);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var computePosition = function computePosition(coord) {
	var boundaries = { top: 51.0891, left: -4.79556, bottom: 42.3327, right: 8.2306 };
	var delta = {
		y: boundaries.bottom - boundaries.top,
		x: boundaries.right - boundaries.left
	};
	var picto = { w: 35, h: 45.46 };
	var map = { w: 200, h: 202.2 };

	var x = (coord.lng - boundaries.left) * map.w / delta.x;
	x -= picto.w / 2;
	var y = (coord.lat - boundaries.top) * map.h / delta.y;
	y -= picto.h;
	return { top: y, left: x };
};

var Map = function Map(_ref) {
	var hq = _ref.hq,
	    subs = _ref.subs;

	var headquarter = _react2.default.createElement(_company2.default, { className: 'headquarter', style: computePosition(hq) });
	var subsidiaries = null;
	if (subs && subs.length) {
		subsidiaries = subs.map(function (s, i) {
			var style = s.type[0] === 'Commercial Office' ? 'commercial' : 'subsidiary';
			return _react2.default.createElement(_company2.default, { key: i, className: style, style: computePosition(s.subsidiary) });
		});
	}
	return _react2.default.createElement(
		'div',
		{ className: 'map' },
		_react2.default.createElement(
			'div',
			{ className: 'map__container' },
			_react2.default.createElement(_france2.default, null),
			subsidiaries,
			headquarter
		),
		_react2.default.createElement(
			'div',
			{ className: 'map__legend' },
			_react2.default.createElement(
				'p',
				{ className: 'headquarter' },
				'Head Office'
			),
			_react2.default.createElement(
				'p',
				{ className: 'subsidiary' },
				'Commercial Office'
			),
			_react2.default.createElement(
				'p',
				{ className: 'commercial' },
				'Subsidiary Company'
			)
		)
	);
};

exports.default = Map;

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Loader = __webpack_require__(52);

var _Loader2 = _interopRequireDefault(_Loader);

var _Map = __webpack_require__(266);

var _Map2 = _interopRequireDefault(_Map);

var _Slider = __webpack_require__(140);

var _Slider2 = _interopRequireDefault(_Slider);

var _Close = __webpack_require__(88);

var _Close2 = _interopRequireDefault(_Close);

var _Title = __webpack_require__(138);

var _Title2 = _interopRequireDefault(_Title);

var _Description = __webpack_require__(239);

var _Description2 = _interopRequireDefault(_Description);

var _company = __webpack_require__(89);

var _realisation = __webpack_require__(71);

var _desc = __webpack_require__(235);

var _desc2 = _interopRequireDefault(_desc);

__webpack_require__(234);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
		value: function componentDidMount() {
			var company = (0, _company.getCompanyByIdOffline)(this.props.match.params.companyId);
			var realisations = (0, _realisation.getRealisationByCompanyIdOffline)(this.props.match.params.companyId);
			this.setState({ company: company, realisations: realisations, loaded: true });
		}
	}, {
		key: 'render',
		value: function render() {
			var loader = _react2.default.createElement(_Loader2.default, { variant: 'big' });
			var companyComponent = null;
			var map = null;
			if (this.state.loaded) {
				loader = null;
				var content = this.state.realisations.map(function (r) {
					return { image: r.pictures[0].url, title: r.name, id: r.id };
				});
				var c = this.state.company;
				var subsidiaries = null;
				if (c.subsidiaries) subsidiaries = c.subsidiaries;
				companyComponent = _react2.default.createElement(
					_react.Fragment,
					null,
					_react2.default.createElement(
						'div',
						{ className: 'company__data' },
						_react2.default.createElement(_Title2.default, { content: c.name }),
						_react2.default.createElement(_Description2.default, { content: c.presentation }),
						_react2.default.createElement(
							'div',
							{ className: 'company__logo' },
							_react2.default.createElement('img', { src: c.logo.sizes.large, alt: c.name + '\'s logo' })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'company__details' },
						_react2.default.createElement(_Map2.default, { hq: c.headquarters, subs: subsidiaries }),
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
							),
							_react2.default.createElement(
								'p',
								{ className: 'company__expertises' },
								_react2.default.createElement(
									'span',
									null,
									'Expertises: '
								),
								c.fields_of_expertise && c.fields_of_expertise.join(', ') || 'None'
							),
							_react2.default.createElement(
								'p',
								{ className: 'company__knowledges' },
								_react2.default.createElement(
									'span',
									null,
									'Knowledges: '
								),
								c.knowledge && c.knowledge.join(', ') || 'None'
							)
						),
						_react2.default.createElement(_Slider2.default, { content: content })
					)
				);
			}
			return _react2.default.createElement(
				'div',
				{ className: 'page company' },
				loader,
				companyComponent,
				map,
				_react2.default.createElement(_Close2.default, { nav: 'Members' })
			);
		}
	}]);

	return Company;
}(_react.Component);

exports.default = Company;

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 272:
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

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(26);

var _company = __webpack_require__(89);

var _Loader = __webpack_require__(52);

var _Loader2 = _interopRequireDefault(_Loader);

var _Close = __webpack_require__(88);

var _Close2 = _interopRequireDefault(_Close);

__webpack_require__(269);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CompanyCard = function CompanyCard(_ref) {
	var name = _ref.name,
	    logo = _ref.logo,
	    id = _ref.id;

	return _react2.default.createElement(
		_reactRouterDom.Link,
		{ className: 'companies__card', to: '/company/' + id },
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
		value: function componentDidMount() {
			var companies = (0, _company.getAllCompaniesOffline)();
			var param = this.props.match.params.filter;
			if (param && param !== 'close') {
				var filter = param.replace(/_/gi, ' ');
				companies = companies.filter(function (c) {
					return c.fields_of_expertise.includes(filter);
				});
			}
			companies.sort(function (a, b) {
				return a.name.localeCompare(b.name);
			});
			this.setState({ companies: companies, loaded: true });
		}
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
			var close = null;
			if (this.props.match.params.filter) close = _react2.default.createElement(_Close2.default, { nav: 'Offer', title: 'Offer' });
			return _react2.default.createElement(
				'div',
				{ className: 'page companies' },
				loader,
				close,
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

exports.default = (0, _reactRouterDom.withRouter)(Companies);

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "656c4848e94e5e8e26beffbd52068fd6.png";

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "54a5d52f637c77e7adba9dcb116304ed.png";

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "87ed8e39f560e6a0c400ca8855528606.png";

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "01b8d8c0bb2e2d80bd17510fc3780575.png";

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1a64ca91bd6421f757ad65841b5eda3a.png";

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "766ba4bdc1cda20d0d61e7dfd64a1542.png";

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4418dde3f6abc21dc32506acf5f5b093.jpg";

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5104c28086990275a84612cd799ab22b.glb";

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(22);

var THREE = _interopRequireWildcard(_three);

__webpack_require__(355);

__webpack_require__(354);

__webpack_require__(353);

__webpack_require__(352);

__webpack_require__(351);

var _threeShaderFxaa = __webpack_require__(350);

var _threeShaderFxaa2 = _interopRequireDefault(_threeShaderFxaa);

var _stats = __webpack_require__(349);

var _stats2 = _interopRequireDefault(_stats);

var _merge = __webpack_require__(348);

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
		axesHelper: true,
		fxaa: false
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
	renderer.gammaOutput = true;
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

	// fxaa
	var composer = new THREE.EffectComposer(renderer);
	composer.addPass(new THREE.RenderPass(scene, camera));
	window.THREE = THREE;
	var shaderPass = new THREE.ShaderPass((0, _threeShaderFxaa2.default)());
	shaderPass.renderToScreen = true;
	composer.addPass(shaderPass);
	shaderPass.uniforms.resolution.value.set(window.innerWidth, window.innerHeight);

	// controls
	var controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.maxPolarAngle = Math.PI * 0.44;
	controls.panningMode = THREE.HorizontalPanning;
	controls.minDistance = 10;
	controls.maxDistance = 35;

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
		if (mergedOpts.fxaa) {
			shaderPass.uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
			composer.setSize(window.innerWidth, window.innerHeight);
		}
	};
	addEventListener('resize', handleResize);

	return { stats: stats, renderer: renderer, composer: composer, scene: scene, camera: camera, controls: controls };
};

exports.default = initThree;

/***/ }),

/***/ 36:
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

var title = {
	title: 'Products',
	changeTitle: function changeTitle() {}
};

var aboutIndex = {
	aboutIndex: 0,
	changeAboutIndex: function changeAboutIndex() {}
};

var offerIndex = {
	offerIndex: 0,
	changeOfferIndex: function changeOfferIndex() {}
};

var AppContext = _react2.default.createContext(_extends({}, navigation, raycasting, loading, title, aboutIndex, offerIndex));

exports.default = AppContext;

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.attachRaycastHandler = exports.attachLoadingHandler = undefined;

var _three = __webpack_require__(22);

var THREE = _interopRequireWildcard(_three);

__webpack_require__(359);

__webpack_require__(358);

__webpack_require__(357);

var _initThree2 = __webpack_require__(356);

var _initThree3 = _interopRequireDefault(_initThree2);

var _model = __webpack_require__(281);

var _model2 = _interopRequireDefault(_model);

var _waternormals = __webpack_require__(280);

var _waternormals2 = _interopRequireDefault(_waternormals);

var _back = __webpack_require__(279);

var _back2 = _interopRequireDefault(_back);

var _bottom = __webpack_require__(278);

var _bottom2 = _interopRequireDefault(_bottom);

var _front = __webpack_require__(277);

var _front2 = _interopRequireDefault(_front);

var _left = __webpack_require__(276);

var _left2 = _interopRequireDefault(_left);

var _right = __webpack_require__(275);

var _right2 = _interopRequireDefault(_right);

var _top = __webpack_require__(274);

var _top2 = _interopRequireDefault(_top);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
// import 'three/examples/js/loaders/DRACOLoader';


var canvas = document.createElement('canvas');
canvas.id = 'canvas';
var opts = {
	camera: {
		x: 0,
		y: 8,
		z: -28
	},
	renderer: {
		shadowMap: true
	},
	debug: false,
	axesHelper: false,
	fxaa: true
};

var _initThree = (0, _initThree3.default)(canvas, opts),
    stats = _initThree.stats,
    renderer = _initThree.renderer,
    composer = _initThree.composer,
    scene = _initThree.scene,
    camera = _initThree.camera,
    controls = _initThree.controls;

// constants


var size = 390;

// lights
var light = new THREE.DirectionalLight(0xffffff, 0.2);
scene.add(light);
// fog
scene.fog = new THREE.FogExp2(0xaaaaaa, 0.01);

// model
var model = void 0;
var addModel = function addModel() {
	var gltfLoader = new THREE.GLTFLoader();
	//THREE.DRACOLoader.setDecoderPath('../../libs/draco');
	//gltfLoader.setDRACOLoader(new THREE.DRACOLoader());
	gltfLoader.load(_model2.default, function (object) {
		model = object.scene;
		model.traverse(function (node) {
			if (node.isMesh) {
				var material = node.material;
				material.side = THREE.DoubleSide;
				if (material.map) material.map.encoding = THREE.sRGBEncoding;
				if (material.emissiveMap) material.emissiveMap.encoding = THREE.sRGBEncoding;
				if (material.map || material.emissiveMap) material.needsUpdate = true;
			}
		});
		model.scale.set(39.3, 39.3, 39.3);
		model.rotation.y = Math.PI / 2;
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
	water.position.set(18, 0, -38);
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
	sky.position.set(18, -15, -38);
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
var selectionColor = new THREE.Color(0xee4c19);
var prevColor = void 0;
var attachRaycastHandler = function attachRaycastHandler(cb) {
	var raycaster = new THREE.Raycaster();
	var mouse = new THREE.Vector2();
	var lastDown = void 0;
	var handleClick = function handleClick(e) {
		// grab click or touch coordinates
		var x = e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientX : e.clientX;
		var y = e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientY : e.clientY;
		// prevent default only for clicks, because windows scoped touches listener already preventDefault
		if (!e.changedTouches) e.preventDefault();
		// if there is more than one finger don't handle the touch
		// if the drag is longer than 200ms, it's just a drag, not a click/touch
		if (e.changedTouches && e.changedTouches.length > 1 || Date.now() - lastDown > 200) {
			return;
		}

		// clear all coloring
		model.traverse(function (node) {
			if (node instanceof THREE.Mesh) {
				if (Array.isArray(node.material)) {
					node.material.forEach(function (m) {
						var _m$color = m.color,
						    r = _m$color.r,
						    g = _m$color.g,
						    b = _m$color.b;

						if (r === selectionColor.r && g === selectionColor.g && b === selectionColor.b) {
							m.color = prevColor;
						}
					});
				} else {
					var _node$material$color = node.material.color,
					    r = _node$material$color.r,
					    g = _node$material$color.g,
					    b = _node$material$color.b;

					if (r === selectionColor.r && g === selectionColor.g && b === selectionColor.b) {
						node.material.color = prevColor;
					}
				}
			}
		});
		// if within the displayed part of the canvas, try the raycast
		// only handle click when the foremost dom element clicked is the canvas
		var element = document.elementFromPoint(x, y);
		if (element && element.id === 'canvas') {
			mouse.x = x / window.innerWidth * 2 - 1;
			mouse.y = -(y / window.innerHeight) * 2 + 1;
			raycaster.setFromCamera(mouse, camera);
			var intersects = raycaster.intersectObjects(model.children, true);
			if (intersects.length > 0) {
				var filtered = intersects.reduce(function (x, y) {
					var index = x.findIndex(function (e) {
						return e.object.parent.name === y.object.parent.name;
					});
					return index < 0 ? [].concat(_toConsumableArray(x), [y]) : x;
				}, [])[0];
				var target = filtered.object;
				if (target.name !== 'NonCliquable') {
					cb(target);
					prevColor = filtered.object.material.color;
					filtered.object.material.color = selectionColor;
				} else cb([{}]);
			} else cb([{}]);
		}
	};
	addEventListener('mousedown', function () {
		lastDown = Date.now();
	});
	addEventListener('touchstart', function (e) {
		if (e.touches.length === 1) {
			lastDown = Date.now();
		}
	});
	addEventListener('mouseup', handleClick);
	addEventListener('touchend', handleClick);
};

var rafID = void 0;
var animate = function animate(timestamp) {
	rafID = requestAnimationFrame(animate);
	stats.begin();
	if (water) water.material.uniforms.time.value += 0.0005;
	if (opts.fxaa) composer.render();else renderer.render(scene, camera);
	stats.end();
};
requestAnimationFrame(animate);

exports.default = canvas;
exports.attachLoadingHandler = attachLoadingHandler;
exports.attachRaycastHandler = attachRaycastHandler;

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 363:
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

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(26);

var _AppContext = __webpack_require__(36);

var _AppContext2 = _interopRequireDefault(_AppContext);

var _vignette = __webpack_require__(157);

var _realisation = __webpack_require__(71);

var _Loader = __webpack_require__(52);

var _Loader2 = _interopRequireDefault(_Loader);

var _close = __webpack_require__(363);

var _close2 = _interopRequireDefault(_close);

__webpack_require__(362);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VignetteContent = function (_Component) {
	_inherits(VignetteContent, _Component);

	function VignetteContent(props) {
		_classCallCheck(this, VignetteContent);

		var _this = _possibleConstructorReturn(this, (VignetteContent.__proto__ || Object.getPrototypeOf(VignetteContent)).call(this, props));

		_this.state = {
			loaded: false
		};
		_this.loadData = function (vignetteName) {
			if (vignetteName) {
				var vignette = (0, _vignette.getVignetteByNameOffline)(vignetteName);
				if (vignette) {
					var realisations = [];
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						for (var _iterator = vignette.realisations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var realisation = _step.value;

							var currentRealisation = (0, _realisation.getRealisationByIdOffline)(realisation.ID);
							realisations.push(currentRealisation);
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}

					_this.setState({ vignette: vignette, realisations: realisations, loaded: true });
				} else return null;
			} else return null;
		};
		return _this;
	}

	_createClass(VignetteContent, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.loadData(this.props.vignetteName);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.vignetteName !== this.props.vignetteName) {
				this.setState({ vignette: {}, realisations: [], loaded: false });
				this.loadData(nextProps.vignetteName);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var content = null;
			var loader = _react2.default.createElement(_Loader2.default, { variant: 'relative' });
			if (this.state.loaded) {
				loader = null;
				content = this.state.realisations.map(function (r) {
					return _react2.default.createElement(
						_reactRouterDom.Link,
						{ to: '/realisation/' + r.id, className: 'vignette__realisation', key: r.id },
						_react2.default.createElement('img', { src: r.pictures[0].sizes.thumbnail, alt: r.piece_name }),
						_react2.default.createElement('div', { className: 'vignette__name', dangerouslySetInnerHTML: { __html: r.name } })
					);
				});
			}
			return _react2.default.createElement(
				_react.Fragment,
				null,
				_react2.default.createElement(
					'h1',
					null,
					this.state.vignette ? this.state.vignette.title : this.vignetteName
				),
				_react2.default.createElement(_close2.default, { onClick: function onClick() {
						return _this2.props.closeHandler([{}]);
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

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 368:
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

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _ElementContainer = __webpack_require__(368);

var _ElementContainer2 = _interopRequireDefault(_ElementContainer);

var _AppContext = __webpack_require__(36);

var _AppContext2 = _interopRequireDefault(_AppContext);

var _Loader = __webpack_require__(52);

var _Loader2 = _interopRequireDefault(_Loader);

var _Vignette = __webpack_require__(364);

var _Vignette2 = _interopRequireDefault(_Vignette);

var _canvas = __webpack_require__(360);

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

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(26);

var _reactTransitionGroup = __webpack_require__(376);

var _createBrowserHistory = __webpack_require__(127);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _Scene = __webpack_require__(369);

var _Scene2 = _interopRequireDefault(_Scene);

var _Companies = __webpack_require__(273);

var _Companies2 = _interopRequireDefault(_Companies);

var _Company = __webpack_require__(267);

var _Company2 = _interopRequireDefault(_Company);

var _Realisation = __webpack_require__(232);

var _Realisation2 = _interopRequireDefault(_Realisation);

var _Offer = __webpack_require__(229);

var _Offer2 = _interopRequireDefault(_Offer);

var _About = __webpack_require__(218);

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
				_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/companies/:filter?', component: _Companies2.default }),
				_react2.default.createElement(_reactRouterDom.Route, { path: '/company/:companyId', component: _Company2.default }),
				_react2.default.createElement(_reactRouterDom.Route, { path: '/realisation/:realisationId', component: _Realisation2.default }),
				_react2.default.createElement(_reactRouterDom.Route, { path: '/offer/:menu?', component: _Offer2.default }),
				_react2.default.createElement(_reactRouterDom.Route, { path: '/about/:menu?', component: _About2.default })
			)
		)
	);
});

exports.default = Routes;

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(26);

var _AppContext = __webpack_require__(36);

var _AppContext2 = _interopRequireDefault(_AppContext);

var _routes = __webpack_require__(377);

var _routes2 = _interopRequireDefault(_routes);

var _Header = __webpack_require__(215);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(212);

var _Footer2 = _interopRequireDefault(_Footer);

var _Loader = __webpack_require__(52);

var _Loader2 = _interopRequireDefault(_Loader);

var _loader = __webpack_require__(208);

var _internet = __webpack_require__(207);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
////////////////
///////////////////////////////////////////////////////////////
/////////

//////////

var App = function (_Component) {
	_inherits(App, _Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.changeNav = function (newNav) {
			_this.setState({ prevNav: _this.state.nav, nav: newNav });
		};

		_this.raycastHandler = function (target) {
			_this.setState({ raycast: target || {} });
		};

		_this.loadingHandler = function (loaded) {
			_this.setState({ loaded: loaded });
		};

		_this.changeTitle = function (newTitle) {
			_this.setState({ prevTitle: _this.state.title, title: newTitle });
		};

		_this.changeAboutIndex = function (newIndex) {
			_this.setState({ aboutIndex: newIndex });
		};

		_this.changeOfferIndex = function (newIndex) {
			_this.setState({ offerIndex: newIndex });
		};

		_this.state = {
			nav: 'Products',
			prevNav: 'Products',
			changeNav: _this.changeNav,
			raycast: '',
			raycastHandler: _this.raycastHandler,
			loaded: false,
			loadingHandler: _this.loadingHandler,
			title: 'Products',
			prevTitle: 'Products',
			changeTitle: _this.changeTitle,
			aboutIndex: 0,
			changeAboutIndex: _this.changeAboutIndex,
			offerIndex: 0,
			changeOfferIndex: _this.changeOfferIndex,
			dataLoaded: false
		};
		return _this;
	}

	_createClass(App, [{
		key: 'componentDidMount',
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
				var _this2 = this;

				var online;
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
								return (0, _internet.isOnline)();

							case 2:
								online = _context2.sent;

								if (!online) {
									_context2.next = 6;
									break;
								}

								_context2.next = 6;
								return (0, _loader.loadData)();

							case 6:
								this.setState({ dataLoaded: true });
								window.addEventListener('keypress', function () {
									var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
										return regeneratorRuntime.wrap(function _callee$(_context) {
											while (1) {
												switch (_context.prev = _context.next) {
													case 0:
														if (!(e.key === 'u' && e.ctrlKey)) {
															_context.next = 7;
															break;
														}

														_this2.setState({ dataLoaded: false });
														_context.next = 4;
														return (0, _loader.clearData)();

													case 4:
														_context.next = 6;
														return (0, _loader.loadData)();

													case 6:
														_this2.setState({ dataLoaded: true });

													case 7:
													case 'end':
														return _context.stop();
												}
											}
										}, _callee, _this2);
									}));

									return function (_x) {
										return _ref2.apply(this, arguments);
									};
								}());

							case 8:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
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
			var routes = null;
			if (this.state.dataLoaded) {
				loader = null;
				routes = _react2.default.createElement(_routes2.default, null);
			}
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
						routes,
						loader
					)
				)
			);
		}
	}]);

	return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(60);

var _App = __webpack_require__(382);

var _App2 = _interopRequireDefault(_App);

__webpack_require__(130);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(_App2.default, null), document.getElementById('root'));

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactLoaders = __webpack_require__(367);

__webpack_require__(366);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function Loader(_ref) {
	var variant = _ref.variant;

	var className = 'loader';
	if (variant) className += ' loader-' + variant;
	return _react2.default.createElement(_reactLoaders.Loader, { type: 'square-spin', className: className, innerClassName: 'loader__custom' });
};

exports.default = Loader;

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(593);
__webpack_require__(391);
module.exports = __webpack_require__(130);


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var realisationUrl = "http://neopolia.odns.fr/atomouest/wp-json/wp/v2/" + 'realisation/';

var getAllRealisations = exports.getAllRealisations = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
		var res, realisations;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return fetch(realisationUrl + '?per_page=100');

					case 2:
						res = _context.sent;
						_context.next = 5;
						return res.json();

					case 5:
						realisations = _context.sent;
						return _context.abrupt('return', realisations.map(function (realisation) {
							return _extends({
								id: realisation.id,
								name: realisation.title.rendered
							}, realisation.acf);
						}));

					case 7:
					case 'end':
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
						return _context2.abrupt('return', _extends({
							id: realisation.id,
							name: realisation.title.rendered
						}, realisation.acf));

					case 7:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, undefined);
	}));

	return function getRealisationById(_x) {
		return _ref2.apply(this, arguments);
	};
}();

var getRealisationByCompanyId = exports.getRealisationByCompanyId = function () {
	var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
		var realisations;
		return regeneratorRuntime.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						_context3.next = 2;
						return getAllRealisations();

					case 2:
						realisations = _context3.sent;
						return _context3.abrupt('return', realisations.filter(function (realisation) {
							return realisation.company.filter(function (c) {
								return c.ID === id;
							}).length > 0;
						}));

					case 4:
					case 'end':
						return _context3.stop();
				}
			}
		}, _callee3, undefined);
	}));

	return function getRealisationByCompanyId(_x2) {
		return _ref3.apply(this, arguments);
	};
}();

var getAllRealisationsOffline = exports.getAllRealisationsOffline = function getAllRealisationsOffline() {
	return JSON.parse(sessionStorage.getItem('realisations'));
};

var getRealisationByIdOffline = exports.getRealisationByIdOffline = function getRealisationByIdOffline(id) {
	var realisations = getAllRealisationsOffline();
	return realisations.find(function (realisation) {
		return realisation.id === parseInt(id, 10);
	});
};

var getRealisationByCompanyIdOffline = exports.getRealisationByCompanyIdOffline = function getRealisationByCompanyIdOffline(id) {
	var realisations = getAllRealisationsOffline();
	return realisations.filter(function (realisation) {
		return realisation.company.filter(function (c) {
			return c.ID === parseInt(id, 10);
		}).length > 0;
	});
};

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var slideUrl = "http://neopolia.odns.fr/atomouest/wp-json/wp/v2/" + 'slide/';

var getAllSlides = exports.getAllSlides = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
		var res, slides;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return fetch(slideUrl);

					case 2:
						res = _context.sent;
						_context.next = 5;
						return res.json();

					case 5:
						slides = _context.sent;
						return _context.abrupt('return', slides.map(function (slide) {
							return _extends({
								id: slide.id,
								name: slide.title.rendered
							}, slide.acf);
						}));

					case 7:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function getAllSlides() {
		return _ref.apply(this, arguments);
	};
}();

var getSlideById = exports.getSlideById = function () {
	var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
		var res, slide;
		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.next = 2;
						return fetch(slideUrl + id);

					case 2:
						res = _context2.sent;
						_context2.next = 5;
						return res.json();

					case 5:
						slide = _context2.sent;
						return _context2.abrupt('return', _extends({
							id: slide.id,
							name: slide.title.rendered
						}, slide.acf));

					case 7:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, undefined);
	}));

	return function getSlideById(_x) {
		return _ref2.apply(this, arguments);
	};
}();

var getAllSlidesOffline = exports.getAllSlidesOffline = function getAllSlidesOffline() {
	return JSON.parse(sessionStorage.getItem('slides'));
};

var getSlideByIdOffline = exports.getSlideByIdOffline = function getSlideByIdOffline(id) {
	var slides = getAllSlidesOffline();
	return slides.find(function (slide) {
		return slide.id === parseInt(id, 10);
	});
};

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(26);

var _AppContext = __webpack_require__(36);

var _AppContext2 = _interopRequireDefault(_AppContext);

var _close = __webpack_require__(272);

var _close2 = _interopRequireDefault(_close);

__webpack_require__(271);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = (0, _reactRouterDom.withRouter)(function (props) {
	var handleClick = function handleClick() {
		if (props.nav) props.updateNav(props.nav);
		if (props.title) props.updateTitle(props.title);
		props.history.goBack();
	};
	return _react2.default.createElement(_close2.default, { className: 'close', onClick: handleClick });
});

var Close = function Close(props) {
	return _react2.default.createElement(
		_AppContext2.default.Consumer,
		null,
		function (context) {
			return _react2.default.createElement(Icon, {
				updateNav: context.changeNav,
				nav: props.nav,
				updateTitle: context.changeTitle,
				title: props.title
			});
		}
	);
};

exports.default = Close;

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var companyUrl = "http://neopolia.odns.fr/atomouest/wp-json/wp/v2/" + 'company/';

var getAllCompanies = exports.getAllCompanies = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
		var res, companies;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return fetch(companyUrl + '?per_page=100');

					case 2:
						res = _context.sent;
						_context.next = 5;
						return res.json();

					case 5:
						companies = _context.sent;
						return _context.abrupt('return', companies.map(function (company) {
							return _extends({
								id: company.id,
								name: company.title.rendered
							}, company.acf);
						}));

					case 7:
					case 'end':
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
						return _context2.abrupt('return', _extends({ id: company.id, name: company.title.rendered }, company.acf));

					case 7:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, undefined);
	}));

	return function getCompanyById(_x) {
		return _ref2.apply(this, arguments);
	};
}();

var getAllCompaniesOffline = exports.getAllCompaniesOffline = function getAllCompaniesOffline() {
	return JSON.parse(sessionStorage.getItem('companies'));
};

var getCompanyByIdOffline = exports.getCompanyByIdOffline = function getCompanyByIdOffline(id) {
	var companies = getAllCompaniesOffline();
	return companies.find(function (company) {
		return company.id === parseInt(id, 10);
	});
};

/***/ })

/******/ });
//# sourceMappingURL=main.js.map