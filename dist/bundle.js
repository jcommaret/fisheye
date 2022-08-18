/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./images/photographers sync recursive ^\\.\\/.*$":
/*!*********************************************!*\
  !*** ./images/photographers/ sync ^\.\/.*$ ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./EllieRoseWilkens.jpg": "./images/photographers/EllieRoseWilkens.jpg",
	"./MarcelNikolic.jpg": "./images/photographers/MarcelNikolic.jpg",
	"./MimiKeel.jpg": "./images/photographers/MimiKeel.jpg",
	"./NabeelBradford.jpg": "./images/photographers/NabeelBradford.jpg",
	"./RhodeDubois.jpg": "./images/photographers/RhodeDubois.jpg",
	"./TracyGalindo.jpg": "./images/photographers/TracyGalindo.jpg",
	"./account.png": "./images/photographers/account.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./images/photographers sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./assets/js/factories/photographer.js":
/*!*********************************************!*\
  !*** ./assets/js/factories/photographer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "photographerFactory": () => (/* binding */ photographerFactory)
/* harmony export */ });
function photographerFactory(data) {
  var id = data.id,
      name = data.name,
      city = data.city,
      country = data.country,
      portrait = data.portrait,
      tagline = data.tagline,
      price = data.price;

  var picture = __webpack_require__("./images/photographers sync recursive ^\\.\\/.*$")("./".concat(portrait));

  function getUserCardDOM() {
    var article = document.createElement('article');
    article.addEventListener("click", function () {
      goTo(id);
    });
    article.classList.add("article");
    article.setAttribute("tabindex", 0); // Crée l'element image

    var img = document.createElement('img');
    img.setAttribute("src", picture);
    img.setAttribute("alt", "portrait de " + name);
    img.classList.add("portrait");
    article.appendChild(img); // Crée l'element heading

    var h2 = document.createElement('h2');
    h2.textContent = name;
    article.appendChild(h2); // Crée p .location

    var location = document.createElement('p');
    location.textContent = city + ", " + country;
    location.classList.add("location");
    article.appendChild(location); // Crée l'element p .tagline

    var intro = document.createElement('p');
    intro.textContent = tagline;
    intro.classList.add("tagline");
    article.appendChild(intro); // Crée l'element p .price

    var rate = document.createElement('p');
    rate.textContent = price + "€/jour ";
    rate.classList.add("rate");
    article.appendChild(rate);
    return article;
  }

  return {
    id: id,
    name: name,
    city: city,
    country: country,
    price: price,
    picture: picture,
    tagline: tagline,
    getUserCardDOM: getUserCardDOM
  };
}

function goTo(id) {
  var photographerId = id;
  var params = new URLSearchParams();
  params.append("photographerId", photographerId);
  var url = "photographer.html?" + params.toString();
  location.href = url;
}

/***/ }),

/***/ "./assets/js/fetch_api.js":
/*!********************************!*\
  !*** ./assets/js/fetch_api.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getData": () => (/* binding */ getData),
/* harmony export */   "getMediaById": () => (/* binding */ getMediaById),
/* harmony export */   "getPhotographerById": () => (/* binding */ getPhotographerById)
/* harmony export */ });
/* harmony import */ var _data_photographers_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/photographers.json */ "./data/photographers.json");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function getData() {
  return _getData.apply(this, arguments);
}

function _getData() {
  _getData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var url, res;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // fetch de l'api
            url = _data_photographers_json__WEBPACK_IMPORTED_MODULE_0__;
            _context.prev = 1;
            _context.next = 4;
            return fetch(url);

          case 4:
            res = _context.sent;
            _context.next = 7;
            return res.json();

          case 7:
            return _context.abrupt("return", _context.sent);

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 10]]);
  }));
  return _getData.apply(this, arguments);
}

console.log(getData); // Medias by id

function getMediaById(_x) {
  return _getMediaById.apply(this, arguments);
}

function _getMediaById() {
  _getMediaById = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(id) {
    var medias, mediaFiltered;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getData();

          case 2:
            medias = _context2.sent;
            mediaFiltered = medias.filter(function (media) {
              return media.photographerId === id;
            });
            console.log(mediaFiltered);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getMediaById.apply(this, arguments);
}

function getPhotographerById(_x2) {
  return _getPhotographerById.apply(this, arguments);
}

function _getPhotographerById() {
  _getPhotographerById = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(id) {
    var photographers, photographerFiltered;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return getData();

          case 2:
            photographers = _context3.sent;
            photographerFiltered = photographers.find(function (photographer) {
              return photographer.id === id;
            });
            console.log(photographerFiltered);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getPhotographerById.apply(this, arguments);
}

/***/ }),

/***/ "./assets/js/pages/index.js":
/*!**********************************!*\
  !*** ./assets/js/pages/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayPhotographers": () => (/* binding */ displayPhotographers),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "renderPhotographers": () => (/* binding */ renderPhotographers)
/* harmony export */ });
/* harmony import */ var _fetch_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fetch_api */ "./assets/js/fetch_api.js");
/* harmony import */ var _factories_photographer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/photographer */ "./assets/js/factories/photographer.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function renderPhotographers() {
  return _renderPhotographers.apply(this, arguments);
}

function _renderPhotographers() {
  _renderPhotographers = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var photographers;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_fetch_api__WEBPACK_IMPORTED_MODULE_0__.getData)();

          case 2:
            photographers = _context.sent;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _renderPhotographers.apply(this, arguments);
}

function displayPhotographers(_x) {
  return _displayPhotographers.apply(this, arguments);
}

function _displayPhotographers() {
  _displayPhotographers = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(photographers) {
    var photographersSection;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            photographersSection = document.querySelector(".photographer_section");
            photographersFiltered.forEach(function (photographer) {
              var photographerModel = (0,_factories_photographer__WEBPACK_IMPORTED_MODULE_1__.photographerFactory)(photographer);
              var userCardDOM = photographerModel.getUserCardDOM();
              photographersSection.appendChild(userCardDOM);
            });

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _displayPhotographers.apply(this, arguments);
}

;
function init() {
  var _getData = (0,_fetch_api__WEBPACK_IMPORTED_MODULE_0__.getData)(),
      photographers = _getData.photographers;

  displayPhotographers(photographers);
}
;
init();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/sass/main.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/sass/main.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=DM+Sans);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: \"DM Sans\", sans-serif;\n  margin: 0;\n}\n\nheader {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  height: 90px;\n  padding: 20px;\n}\nheader a {\n  height: 50px;\n  width: 200px;\n}\n@media screen and (min-width: 768px) {\n  header a {\n    margin-left: 100px;\n  }\n}\n@media screen and (min-width: 768px) {\n  header {\n    flex-direction: row;\n  }\n}\n@media screen and (min-width: 768px) {\n  header {\n    padding: 0px;\n  }\n}\nheader .header-logo {\n  height: 50px;\n  width: 200px;\n}\nheader h1 {\n  color: #901C1C;\n}\n@media screen and (min-width: 768px) {\n  header h1 {\n    margin-right: 100px;\n  }\n}\n\n.photographer_section {\n  display: flex;\n  gap: 100px;\n  flex-wrap: wrap;\n  margin-top: 100px;\n  padding-left: 50px;\n  padding-right: 50px;\n  justify-content: center;\n}\n.photographer_section article {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n@media screen and (min-width: 768px) {\n  .photographer_section article {\n    width: calc(33.3333333333% - 70px);\n  }\n}\n.photographer_section article h2 {\n  width: 200px;\n  color: #D3573C;\n  font-size: 36px;\n  font-weight: 400;\n  text-align: center;\n}\n@media screen and (min-width: 768px) {\n  .photographer_section article h2 {\n    width: 100%;\n  }\n}\n.photographer_section article img {\n  margin-left: auto;\n  margin-right: auto;\n  height: 200px;\n  width: 200px;\n  border-radius: 100px;\n  background: #C4C4C4;\n  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);\n}\n.photographer_section article img.portrait {\n  object-fit: cover;\n}\n.photographer_section article .location {\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: center;\n  color: #901C1C;\n  margin-bottom: 3px;\n}\n.photographer_section article .tagline {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 13px;\n  letter-spacing: 0em;\n  text-align: center;\n  margin-bottom: 3px;\n}\n.photographer_section article .rate {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 12px;\n  letter-spacing: 0em;\n  text-align: center;\n  color: #757575;\n}\n\n.photograph-header {\n  background-color: #FAFAFA;\n  padding: 20px;\n  margin: 0 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n}\n@media screen and (min-width: 768px) {\n  .photograph-header {\n    flex-direction: row;\n    padding: 100px 20px 100px 20px;\n    margin: 0 100px;\n  }\n}\n.photograph-header h1 {\n  font-size: 64px;\n  color: #D3573C;\n  font-weight: 400;\n  font-family: \"DM Sans\", sans-serif;\n  line-height: 83px;\n  letter-spacing: 0em;\n}\n.photograph-header .location {\n  font-size: 24px;\n  line-height: 31px;\n  letter-spacing: 0em;\n  color: #901C1C;\n}\n.photograph-header .tagline {\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 23px;\n  letter-spacing: 0em;\n  color: #525252;\n}\n.photograph-header .btn {\n  align-items: center;\n  justify-content: center;\n}\n.photograph-header img {\n  margin-left: auto;\n  margin-right: auto;\n  height: 100px;\n  width: 100px;\n  border-radius: 50px;\n  background: #C4C4C4;\n  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);\n}\n@media screen and (min-width: 768px) {\n  .photograph-header img {\n    height: 200px;\n    width: 200px;\n    border-radius: 100px;\n  }\n}\n.photograph-header img.portrait {\n  object-fit: cover;\n}\n.photograph-header .contact_button {\n  font-size: 14px;\n  font-weight: bold;\n  color: white;\n  padding: 11px;\n  width: 100px;\n  min-height: 35px;\n  border: none;\n  background-color: #901C1C;\n  border-radius: 5px;\n  cursor: pointer;\n}\n@media screen and (min-width: 768px) {\n  .photograph-header .contact_button {\n    font-size: 20px;\n    width: 170px;\n    height: 70px;\n  }\n}\n.photograph-informations, .photograph .btn, .photograph img {\n  display: flex;\n}\n.photograph-informations {\n  display: flex;\n  flex-direction: column;\n  width: 33.3333333333%;\n}\n\n.medias_section {\n  padding: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n@media screen and (min-width: 768px) {\n  .medias_section {\n    padding: 100px;\n  }\n}\n@media screen and (min-width: 768px) {\n  .medias_section {\n    justify-content: space-between;\n  }\n}\n.medias_section img {\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  height: 300px;\n}\n@media screen and (min-width: 768px) {\n  .medias_section img {\n    flex-direction: row;\n    width: 300px;\n    height: 300px;\n  }\n}\n.medias_section img.portrait {\n  object-fit: cover;\n}\n.medias_section .picinfo {\n  display: flex;\n  justify-content: space-between;\n}\n.medias_section .picinfo h2, .medias_section .picinfo p {\n  font-size: 24px;\n  color: #901C1C;\n}\n.medias_section .picinfo h2 {\n  width: 240px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n#contact_modal {\n  display: none;\n}\n#contact_modal .modal {\n  border-radius: 5px;\n  background-color: #DB8876;\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 35px;\n  margin: auto;\n}\n#contact_modal .modal header {\n  justify-content: space-between;\n  width: 100%;\n}\n#contact_modal .modal header img {\n  cursor: pointer;\n}\n#contact_modal .modal header h2 {\n  font-size: 64px;\n  font-weight: normal;\n  text-align: center;\n}\n#contact_modal .modal form {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  align-items: flex-start;\n}\n#contact_modal .modal form label {\n  color: #312E2E;\n  font-size: 36px;\n}\n#contact_modal .modal form div {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: self-start;\n  margin-bottom: 26px;\n}\n#contact_modal .modal form input {\n  width: 100%;\n  height: 68px;\n  border: none;\n  border-radius: 5px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./assets/sass/main.scss":
/*!*******************************!*\
  !*** ./assets/sass/main.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/sass/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./images/photographers/EllieRoseWilkens.jpg":
/*!***************************************************!*\
  !*** ./images/photographers/EllieRoseWilkens.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ecf6410c44e9333162e5.jpg";

/***/ }),

/***/ "./images/photographers/MarcelNikolic.jpg":
/*!************************************************!*\
  !*** ./images/photographers/MarcelNikolic.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c4a715f8d0bb9c63a07d.jpg";

/***/ }),

/***/ "./images/photographers/MimiKeel.jpg":
/*!*******************************************!*\
  !*** ./images/photographers/MimiKeel.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f20a8678bf1d0df4ee23.jpg";

/***/ }),

/***/ "./images/photographers/NabeelBradford.jpg":
/*!*************************************************!*\
  !*** ./images/photographers/NabeelBradford.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "12df5e23009df3052be4.jpg";

/***/ }),

/***/ "./images/photographers/RhodeDubois.jpg":
/*!**********************************************!*\
  !*** ./images/photographers/RhodeDubois.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fa900e639c233fd4cc86.jpg";

/***/ }),

/***/ "./images/photographers/TracyGalindo.jpg":
/*!***********************************************!*\
  !*** ./images/photographers/TracyGalindo.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a93ddc5281225bb851e9.jpg";

/***/ }),

/***/ "./images/photographers/account.png":
/*!******************************************!*\
  !*** ./images/photographers/account.png ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./data/photographers.json":
/*!*********************************!*\
  !*** ./data/photographers.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"photographers":[{"name":"Mimi Keel","id":243,"city":"London","country":"UK","tagline":"Voir le beau dans le quotidien","price":400,"portrait":"MimiKeel.jpg"},{"name":"Ellie-Rose Wilkens","id":930,"city":"Paris","country":"France","tagline":"Capturer des compositions complexes","price":250,"portrait":"EllieRoseWilkens.jpg"},{"name":"Tracy Galindo","id":82,"city":"Montreal","country":"Canada","tagline":"Photographe freelance","price":500,"portrait":"TracyGalindo.jpg"},{"name":"Nabeel Bradford","id":527,"city":"Mexico City","country":"Mexico","tagline":"Toujours aller de l\'avant","price":350,"portrait":"NabeelBradford.jpg"},{"name":"Rhode Dubois","id":925,"city":"Barcelona","country":"Spain","tagline":"Je crée des souvenirs","price":275,"portrait":"RhodeDubois.jpg"},{"name":"Marcel Nikolic","id":195,"city":"Berlin","country":"Germany","tagline":"Toujours à la recherche de LA photo","price":300,"portrait":"MarcelNikolic.jpg"}],"media":[{"id":342550,"photographerId":82,"title":"Fashion Yellow Beach","image":"Fashion_Yellow_Beach.jpg","likes":62,"date":"2011-12-08","price":55},{"id":8520927,"photographerId":82,"title":"Fashion Urban Jungle","image":"Fashion_Urban_Jungle.jpg","likes":11,"date":"2011-11-06","price":55},{"id":9025895,"photographerId":82,"title":"Fashion Pattern on a Pattern","image":"Fashion_Pattern_on_Pattern.jpg","likes":72,"date":"2013-08-12","price":55},{"id":9275938,"photographerId":82,"title":"Wedding Gazebo","image":"Event_WeddingGazebo.jpg","likes":69,"date":"2018-02-22","price":55},{"id":2053494,"photographerId":82,"title":"Sparkles","image":"Event_Sparklers.jpg","likes":2,"date":"2020-05-25","price":55},{"id":7324238,"photographerId":82,"title":"18th Anniversary","image":"Event_18thAnniversary.jpg","likes":33,"date":"2019-06-12","price":55},{"id":8328953,"photographerId":82,"title":"Wooden sculpture of a horse","video":"Art_Wooden_Horse_Sculpture.mp4","likes":24,"date":"2011-12-08","price":100},{"id":7502053,"photographerId":82,"title":"Triangle Man","image":"Art_Triangle_Man.jpg","likes":88,"date":"2007-05-07","price":55},{"id":8523492,"photographerId":82,"title":"Purple Tunnel","image":"Art_Purple_light.jpg","likes":24,"date":"2018-05-05","price":55},{"id":75902334,"photographerId":82,"title":"Art Mine","image":"Art_Mine.jpg","likes":75,"date":"2019-11-25","price":55},{"id":73852953,"photographerId":925,"title":"8 Rows","image":"Sport_2000_with_8.jpg","likes":52,"date":"2013-02-30","price":70},{"id":92758372,"photographerId":925,"title":"Fashion Wings","image":"Fashion_Wings.jpg","likes":58,"date":"2018-07-17","price":70},{"id":32958383,"photographerId":925,"title":"Melody Red on Stripes","image":"Fashion_Melody_Red_on_Stripes.jpg","likes":11,"date":"2019-08-12","price":70},{"id":928587383,"photographerId":925,"title":"Venture Conference","image":"Event_VentureConference.jpg","likes":2,"date":"2019-01-02","price":70},{"id":725639493,"photographerId":925,"title":"Product Pitch","image":"Event_ProductPitch.jpg","likes":3,"date":"2019-05-20","price":70},{"id":23394384,"photographerId":925,"title":"Musical Festival Keyboard","image":"Event_KeyboardCheck.jpg","likes":52,"date":"2019-07-18","price":70},{"id":87367293,"photographerId":925,"title":"Musical Festival Singer","image":"Event_Emcee.jpg","likes":23,"date":"2018-02-22","price":70},{"id":593834784,"photographerId":925,"title":"Animal Majesty","image":"Animals_Majesty.jpg","likes":52,"date":"2017-03-13","price":70},{"id":83958935,"photographerId":925,"title":"Cute puppy on sunset","video":"Animals_Puppiness.mp4","likes":52,"date":"2016-06-12","price":70},{"id":394583434,"photographerId":527,"title":"Rocky mountains from the air","video":"Travel_Rock_Mountains.mp4","likes":23,"date":"2017-03-18","price":45},{"id":343423425,"photographerId":527,"title":"Outdoor Baths","image":"Travel_Outdoor_Baths.jpg","likes":101,"date":"2017-04-03","price":45},{"id":73434243,"photographerId":527,"title":"Road into the Hill","image":"Travel_Road_into_Hill.jpg","likes":99,"date":"2018-04-30","price":45},{"id":23425523,"photographerId":527,"title":"Bridge into the Forest","image":"Travel_Bridge_into_Forest.jpg","likes":34,"date":"2016-04-05","price":45},{"id":23134513,"photographerId":527,"title":"Boat Wonderer","image":"Travel_Boat_Wanderer.jpg","likes":23,"date":"2017-03-18","price":45},{"id":92352352,"photographerId":527,"title":"Portrait Sunkiss","image":"Portrait_Sunkissed.jpg","likes":66,"date":"2018-05-24","price":45},{"id":34513453,"photographerId":527,"title":"Shaw Potrait","image":"Portrait_Shaw.jpg","likes":52,"date":"2017-04-21","price":45},{"id":23523533,"photographerId":527,"title":"Alexandra","image":"Portrait_Alexandra.jpg","likes":95,"date":"2018-11-02","price":45},{"id":525834234,"photographerId":527,"title":"Afternoon Break","image":"Portrait_AfternoonBreak.jpg","likes":25,"date":"2019-01-02","price":45},{"id":623534343,"photographerId":243,"title":"Lonesome","image":"Travel_Lonesome.jpg","likes":88,"date":"2019-02-03","price":45},{"id":625025343,"photographerId":243,"title":"Hillside Color","image":"Travel_HillsideColor.jpg","likes":85,"date":"2019-04-03","price":45},{"id":2525345343,"photographerId":243,"title":"Wednesday Potrait","image":"Portrait_Wednesday.jpg","likes":34,"date":"2019-04-07","price":45},{"id":2523434634,"photographerId":243,"title":"Nora Portrait","image":"Portrait_Nora.jpg","likes":63,"date":"2019-04-07","price":45},{"id":398847109,"photographerId":243,"title":"Raw Black Portrait","image":"Portrait_Background.jpg","likes":55,"date":"2019-06-20","price":45},{"id":2534342,"photographerId":243,"title":"Seaside Wedding","image":"Event_SeasideWedding.jpg","likes":25,"date":"2019-06-21","price":45},{"id":65235234,"photographerId":243,"title":"Boulder Wedding","image":"Event_PintoWedding.jpg","likes":52,"date":"2019-06-25","price":45},{"id":23523434,"photographerId":243,"title":"Benevides Wedding","image":"Event_BenevidesWedding.jpg","likes":77,"date":"2019-06-28","price":45},{"id":5234343,"photographerId":243,"title":"Wild horses in the mountains","video":"Animals_Wild_Horses_in_the_mountains.mp4","likes":142,"date":"2019-08-23","price":60},{"id":95234343,"photographerId":243,"title":"Rainbow Bird","image":"Animals_Rainbow.jpg","likes":59,"date":"2019-07-02","price":60},{"id":52343416,"photographerId":195,"title":"Japanese Tower, Kyoto","image":"Travel_Tower.jpg","likes":25,"date":"2019-04-03","price":60},{"id":2523434,"photographerId":195,"title":"Senset on Canals, Venice","image":"Travel_SunsetonCanals.jpg","likes":53,"date":"2019-05-06","price":60},{"id":95293534,"photographerId":195,"title":"Mountain and Lake","image":"Travel_OpenMountain.jpg","likes":33,"date":"2019-05-12","price":60},{"id":356234343,"photographerId":195,"title":"City Bike and Stair, Paris","image":"Travel_Bike_and_Stair.jpg","likes":53,"date":"2019-06-20","price":60},{"id":235234343,"photographerId":195,"title":"Adventure Door, India","image":"Travel_Adventure_Door.jpg","likes":63,"date":"2019-06-26","price":60},{"id":6234234343,"photographerId":195,"title":"Contrast, St Petersburg","image":"Architecture_Contrast.jpg","likes":52,"date":"2019-06-30","price":60},{"id":6525666253,"photographerId":195,"title":"On a Hill, Tibet","image":"Architecture_On_a_hill.jpg","likes":63,"date":"2019-07-20","price":60},{"id":98252523433,"photographerId":195,"title":"Leaning Tower, Pisa","image":"Architecture_Dome.jpg","likes":88,"date":"2020-01-05","price":60},{"id":9259398453,"photographerId":195,"title":"Drone shot of Buenos Aires highways","video":"Architecture_coverr_circle_empty_highway_in_buenos_aires_587740985637.mp4","likes":57,"date":"2020-01-20","price":65},{"id":3523523534,"photographerId":195,"title":"Corner Building and Blue Sky","image":"Architecture_Corner_Room.jpg","likes":54,"date":"2020-05-05","price":60},{"id":952343423,"photographerId":930,"title":"Tricks in te air","video":"Sport_Tricks_in_the_air.mp4","likes":150,"date":"2018-02-30","price":70},{"id":235234343,"photographerId":930,"title":"Climber","image":"Sport_Next_Hold.jpg","likes":101,"date":"2018-03-05","price":65},{"id":235343222,"photographerId":930,"title":"Surfer","image":"sport_water_tunnel.jpg","likes":103,"date":"2018-03-10","price":70},{"id":7775342343,"photographerId":930,"title":"Skier","image":"Sport_Sky_Cross.jpg","likes":77,"date":"2018-04-16","price":50},{"id":9253445784,"photographerId":930,"title":"Race End","image":"Sport_Race_End.jpg","likes":88,"date":"2018-04-22","price":65},{"id":22299394,"photographerId":930,"title":"Jump!","image":"Sport_Jump.jpg","likes":95,"date":"2018-04-27","price":70},{"id":3452342633,"photographerId":930,"title":"White Light","image":"Architecture_White_Light.jpg","likes":52,"date":"2018-05-03","price":75},{"id":939234243,"photographerId":930,"title":"Water on Modern Building","image":"Architecture_Water_on_Modern.jpg","likes":55,"date":"2018-05-10","price":72},{"id":222959233,"photographerId":930,"title":"Horseshoe","image":"Architecture_Horseshoe.jpg","likes":85,"date":"2018-05-15","price":71},{"id":965933434,"photographerId":930,"title":"Cross Bar","image":"Architecture_Cross_Bar.jpg","likes":66,"date":"2018-05-20","price":58},{"id":777723343,"photographerId":930,"title":"Connected Curves","image":"Architecture_Connected_Curves.jpg","likes":79,"date":"2018-05-21","price":80}]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/dist/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_pages_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/pages/index */ "./assets/js/pages/index.js");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sass/main.scss */ "./assets/sass/main.scss");


(0,_js_pages_index__WEBPACK_IMPORTED_MODULE_0__.renderPhotographers)();
(0,_js_pages_index__WEBPACK_IMPORTED_MODULE_0__.displayPhotographers)();
(0,_js_pages_index__WEBPACK_IMPORTED_MODULE_0__.init)();
})();

/******/ })()
;