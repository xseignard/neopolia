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
/******/ 	deferredModules.push([544,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 127:
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

/***/ 128:
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

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(34);

__webpack_require__(213);

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
						element.addEventListener('mouseenter', function (e) {
							e.preventDefault();
							element.style.transform = 'scale(1.05)';
						});
						element.addEventListener('mouseleave', function (e) {
							e.preventDefault();
							element.style.transform = 'scale(1)';
						});
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

/***/ 150:
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
						return fetch(realisationUrl);

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

var getAllRealisationsOffline = exports.getAllRealisationsOffline = function getAllRealisationsOffline() {
	return JSON.parse(sessionStorage.getItem('realisations'));
};

var getRealisationByIdOffline = exports.getRealisationByIdOffline = function getRealisationByIdOffline(id) {
	var realisations = getAllRealisationsOffline();
	return realisations.find(function (realisation) {
		return realisation.id === parseInt(id, 10);
	});
};

/***/ }),

/***/ 151:
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

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.loadData = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _company = __webpack_require__(83);

var _realisation = __webpack_require__(150);

var _vignette = __webpack_require__(151);

var _slide = __webpack_require__(81);

var _about = __webpack_require__(127);

var _offer = __webpack_require__(128);

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

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dd2873937c57782df73849cbcecccfac.png";

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(34);

var _AppContext = __webpack_require__(39);

var _AppContext2 = _interopRequireDefault(_AppContext);

__webpack_require__(202);

var _LogoNeopoliaAtomOuest = __webpack_require__(200);

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
	if (props.route === props.location.pathname === '/') {
		active = 'footer__item-active';
	} else {
		active = props.location.pathname === props.route ? 'footer__item-active' : '';
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

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _AppContext = __webpack_require__(39);

var _AppContext2 = _interopRequireDefault(_AppContext);

__webpack_require__(205);

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

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactInlinesvg = __webpack_require__(125);

var _reactInlinesvg2 = _interopRequireDefault(_reactInlinesvg);

var _reactRouterDom = __webpack_require__(34);

var _Slideshow = __webpack_require__(129);

var _Slideshow2 = _interopRequireDefault(_Slideshow);

var _AppContext = __webpack_require__(39);

var _AppContext2 = _interopRequireDefault(_AppContext);

var _about = __webpack_require__(127);

var _slide = __webpack_require__(81);

__webpack_require__(208);

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

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactInlinesvg = __webpack_require__(125);

var _reactInlinesvg2 = _interopRequireDefault(_reactInlinesvg);

var _reactRouterDom = __webpack_require__(34);

var _Slideshow = __webpack_require__(129);

var _Slideshow2 = _interopRequireDefault(_Slideshow);

var _AppContext = __webpack_require__(39);

var _AppContext2 = _interopRequireDefault(_AppContext);

var _offer = __webpack_require__(128);

var _slide = __webpack_require__(81);

__webpack_require__(211);

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

	var clicks = [{ id: 'teamNeopolia', target: '/about', nav: 'About us' }, { id: 'Members', target: '/companies/close', nav: 'Members' }, { id: 'Leader', target: '/about/3', nav: 'About us' }, {
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

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Loader = __webpack_require__(57);

var _Loader2 = _interopRequireDefault(_Loader);

var _company = __webpack_require__(83);

__webpack_require__(222);

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
			this.setState({ company: company, loaded: true });
		}
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

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 226:
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

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(34);

var _company = __webpack_require__(83);

var _Loader = __webpack_require__(57);

var _Loader2 = _interopRequireDefault(_Loader);

var _close = __webpack_require__(226);

var _close2 = _interopRequireDefault(_close);

__webpack_require__(225);

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
				this.setState({ companies: companies, loaded: true });
			}
			this.setState({ companies: companies, loaded: true });
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var loader = _react2.default.createElement(_Loader2.default, { variant: 'big' });
			var companiesCards = null;
			if (this.state.loaded) {
				loader = null;
				companiesCards = this.state.companies.map(function (c) {
					return _react2.default.createElement(CompanyCard, { key: c.id, name: c.name, logo: c.logo.sizes.thumbnail, id: c.id });
				});
			}
			var close = null;
			if (this.props.match.params.filter) close = _react2.default.createElement(_close2.default, { onClick: function onClick() {
					return _this2.props.history.goBack();
				} });
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

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "656c4848e94e5e8e26beffbd52068fd6.png";

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "54a5d52f637c77e7adba9dcb116304ed.png";

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "87ed8e39f560e6a0c400ca8855528606.png";

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "01b8d8c0bb2e2d80bd17510fc3780575.png";

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1a64ca91bd6421f757ad65841b5eda3a.png";

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "766ba4bdc1cda20d0d61e7dfd64a1542.png";

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4418dde3f6abc21dc32506acf5f5b093.jpg";

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0cd42a896394fc09a0008e4e84c58e54.gltf";

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(38);

var THREE = _interopRequireWildcard(_three);

__webpack_require__(304);

var _stats = __webpack_require__(303);

var _stats2 = _interopRequireDefault(_stats);

var _merge = __webpack_require__(302);

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
	};
	addEventListener('resize', handleResize);

	return { stats: stats, renderer: renderer, scene: scene, camera: camera, controls: controls };
};

exports.default = initThree;

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.attachRaycastHandler = exports.attachLoadingHandler = undefined;

var _three = __webpack_require__(38);

var THREE = _interopRequireWildcard(_three);

__webpack_require__(308);

__webpack_require__(307);

__webpack_require__(306);

var _initThree2 = __webpack_require__(305);

var _initThree3 = _interopRequireDefault(_initThree2);

var _scene = __webpack_require__(235);

var _scene2 = _interopRequireDefault(_scene);

var _waternormals = __webpack_require__(234);

var _waternormals2 = _interopRequireDefault(_waternormals);

var _back = __webpack_require__(233);

var _back2 = _interopRequireDefault(_back);

var _bottom = __webpack_require__(232);

var _bottom2 = _interopRequireDefault(_bottom);

var _front = __webpack_require__(231);

var _front2 = _interopRequireDefault(_front);

var _left = __webpack_require__(230);

var _left2 = _interopRequireDefault(_left);

var _right = __webpack_require__(229);

var _right2 = _interopRequireDefault(_right);

var _top = __webpack_require__(228);

var _top2 = _interopRequireDefault(_top);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var canvas = document.createElement('canvas');
canvas.id = 'canvas';

var _initThree = (0, _initThree3.default)(canvas, {
	camera: {
		x: 0,
		y: 8,
		z: -28
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


var size = 390;

// lights
var light = new THREE.DirectionalLight(0xffffff, 0.2);
scene.add(light);
// fog
scene.fog = new THREE.FogExp2(0xaaaaaa, 0.01);

// model
var model = void 0;
var mat = new THREE.MeshPhongMaterial({ color: 0x7777ff, side: THREE.DoubleSide });
var addModel = function addModel() {
	var gltfLoader = new THREE.GLTFLoader();
	gltfLoader.load(_scene2.default, function (object) {
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
		model.scale.set(0.3933, 0.3933, 0.3933);
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
		var element = document.elementFromPoint(e.clientX, e.clientY);
		if (element && element.id === 'canvas') {
			mouse.x = e.clientX / window.innerWidth * 2 - 1;
			mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
			raycaster.setFromCamera(mouse, camera);
			var intersects = raycaster.intersectObjects(model.children, true);
			if (intersects.length > 0) {
				var filtered = intersects.reduce(function (x, y) {
					var index = x.findIndex(function (e) {
						return e.object.parent.name === y.object.parent.name;
					});
					return index < 0 ? [].concat(_toConsumableArray(x), [y]) : x;
				}, [])[0];
				if (filtered.object.parent.name !== 'NonCliquable') {
					cb(filtered);
					prevColor = filtered.object.material.color;
					filtered.object.material.color = selectionColor;
				} else cb([{}]);
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

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 312:
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

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(34);

var _AppContext = __webpack_require__(39);

var _AppContext2 = _interopRequireDefault(_AppContext);

var _vignette = __webpack_require__(151);

var _realisation = __webpack_require__(150);

var _Loader = __webpack_require__(57);

var _Loader2 = _interopRequireDefault(_Loader);

var _close = __webpack_require__(312);

var _close2 = _interopRequireDefault(_close);

__webpack_require__(311);

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

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 318:
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

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _ElementContainer = __webpack_require__(318);

var _ElementContainer2 = _interopRequireDefault(_ElementContainer);

var _AppContext = __webpack_require__(39);

var _AppContext2 = _interopRequireDefault(_AppContext);

var _Loader = __webpack_require__(57);

var _Loader2 = _interopRequireDefault(_Loader);

var _Vignette = __webpack_require__(313);

var _Vignette2 = _interopRequireDefault(_Vignette);

var _canvas = __webpack_require__(309);

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

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(34);

var _reactTransitionGroup = __webpack_require__(326);

var _createBrowserHistory = __webpack_require__(123);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _Scene = __webpack_require__(319);

var _Scene2 = _interopRequireDefault(_Scene);

var _Companies = __webpack_require__(227);

var _Companies2 = _interopRequireDefault(_Companies);

var _Company = __webpack_require__(223);

var _Company2 = _interopRequireDefault(_Company);

var _Offer = __webpack_require__(220);

var _Offer2 = _interopRequireDefault(_Offer);

var _About = __webpack_require__(209);

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
				_react2.default.createElement(_reactRouterDom.Route, { path: '/offer/:menu?', component: _Offer2.default }),
				_react2.default.createElement(_reactRouterDom.Route, { path: '/about/:menu?', component: _About2.default })
			)
		)
	);
});

exports.default = Routes;

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(34);

var _AppContext = __webpack_require__(39);

var _AppContext2 = _interopRequireDefault(_AppContext);

var _routes = __webpack_require__(327);

var _routes2 = _interopRequireDefault(_routes);

var _Header = __webpack_require__(206);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(203);

var _Footer2 = _interopRequireDefault(_Footer);

var _Loader = __webpack_require__(57);

var _Loader2 = _interopRequireDefault(_Loader);

var _loader = __webpack_require__(199);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
			_this.setState({ raycast: target.object ? target.object.parent : {} });
		};

		_this.loadingHandler = function (loaded) {
			_this.setState({ loaded: loaded });
		};

		_this.changeTitle = function (newTitle) {
			_this.setState({ title: newTitle });
		};

		_this.changeAboutIndex = function (newIndex) {
			_this.setState({ aboutIndex: newIndex });
		};

		_this.changeOfferIndex = function (newIndex) {
			_this.setState({ offerIndex: newIndex });
		};

		_this.state = {
			nav: 'Products',
			changeNav: _this.changeNav,
			raycast: '',
			raycastHandler: _this.raycastHandler,
			loaded: false,
			loadingHandler: _this.loadingHandler,
			title: 'Products',
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
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return (0, _loader.loadData)();

							case 2:
								this.setState({ dataLoaded: true });

							case 3:
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

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(91);

var _App = __webpack_require__(332);

var _App2 = _interopRequireDefault(_App);

__webpack_require__(126);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(_App2.default, null), document.getElementById('root'));

/***/ }),

/***/ 39:
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

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(543);
__webpack_require__(341);
module.exports = __webpack_require__(126);


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactLoaders = __webpack_require__(317);

__webpack_require__(315);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function Loader(_ref) {
	var variant = _ref.variant;

	var className = 'loader';
	if (variant) className += ' loader-' + variant;
	return _react2.default.createElement(_reactLoaders.Loader, { type: 'square-spin', className: className, innerClassName: 'loader__custom' });
};

exports.default = Loader;

/***/ }),

/***/ 81:
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

/***/ 83:
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
						return fetch(companyUrl);

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