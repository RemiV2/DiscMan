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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./images/album-art-default.svg":
/*!**************************************!*\
  !*** ./images/album-art-default.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "022b653d4c10e61e1b8d176db506aa60.svg";

/***/ }),

/***/ "./images/next_light.png":
/*!*******************************!*\
  !*** ./images/next_light.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c61f58c29ada56dac70ceb1b1a5993ae.png";

/***/ }),

/***/ "./images/pause_light.png":
/*!********************************!*\
  !*** ./images/pause_light.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c6ce80e860102fc824f15fa8c03b924f.png";

/***/ }),

/***/ "./images/play_light.png":
/*!*******************************!*\
  !*** ./images/play_light.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ed7c8894253665739a96881d9a91ec8f.png";

/***/ }),

/***/ "./images/previous_light.png":
/*!***********************************!*\
  !*** ./images/previous_light.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "df0ad065384de0cd6c272365188a9d8c.png";

/***/ }),

/***/ "./images/soundoff_light.png":
/*!***********************************!*\
  !*** ./images/soundoff_light.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "200d97c3e66f5acf60b8a7ba27fcb605.png";

/***/ }),

/***/ "./images/soundon_light.png":
/*!**********************************!*\
  !*** ./images/soundon_light.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "09b5f7ac4d6f7292173ea15c8d2d2c6c.png";

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_songCard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/songCard.js */ "./js/components/songCard.js");
/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/style.sass */ "./sass/style.sass");
/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_style_sass__WEBPACK_IMPORTED_MODULE_1__);



Object(_components_songCard_js__WEBPACK_IMPORTED_MODULE_0__["default"])()

/***/ }),

/***/ "./js/components/songCard.js":
/*!***********************************!*\
  !*** ./js/components/songCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => {
  console.log('module loaded')
});

/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js??ref--4-2!./sass/style.sass":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/sass-loader/lib/loader.js??ref--4-2!./sass/style.sass ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after, q:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nheader {\n  padding: 10px;\n  background-image: linear-gradient(-180deg, rgba(237, 234, 237, 0.45) 0%, rgba(223, 219, 223, 0.45) 100%);\n  -webkit-app-region: drag;\n  border-bottom: 1px solid #cdcdcd;\n  height: 82px; }\n  header #appTitle {\n    text-align: center;\n    font-size: 14px;\n    color: green; }\n  header ul.centeredPills {\n    display: flex;\n    justify-content: space-around;\n    margin-top: 14px; }\n    header ul.centeredPills li.active a {\n      padding: 7px 20px;\n      font-size: 13px; }\n    header ul.centeredPills li {\n      background: rgba(243, 243, 243, 0);\n      box-sizing: border-box;\n      -webkit-app-region: no-drag;\n      margin-top: 4px; }\n      header ul.centeredPills li:hover {\n        background: rgba(243, 243, 243, 0); }\n      header ul.centeredPills li:focus {\n        outline: 1px solid #333; }\n      header ul.centeredPills li a {\n        padding: 7px 20px;\n        font-size: 13px;\n        text-transform: uppercase;\n        text-decoration: none;\n        cursor: default;\n        color: #333;\n        transition-duration: .2s;\n        border-radius: 5px; }\n        header ul.centeredPills li a:hover {\n          background: rgba(243, 243, 243, 0.3);\n          padding: 7px 20px; }\n    header ul.centeredPills li.active {\n      background: #f3f3f3;\n      color: #333; }\n      header ul.centeredPills li.active a {\n        background: #f3f3f3;\n        color: #333;\n        border: 0.5px solid #f4f4f4; }\n        header ul.centeredPills li.active a:focus, header ul.centeredPills li.active a:hover {\n          background: #f3f3f3;\n          color: #333; }\n\n.firstStart {\n  text-align: center;\n  height: calc(100vh - 79px);\n  display: flex;\n  padding: 10px 50px;\n  flex-direction: column;\n  justify-content: center;\n  z-index: 100;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  background: #f3f3f3; }\n  .firstStart p {\n    margin: 25px auto 0 auto; }\n\n.firstStart.draggedOver {\n  background: #4181ec;\n  color: #f3f3f3; }\n  .firstStart.draggedOver button {\n    visibility: hidden; }\n\n.player {\n  height: 82px;\n  width: 100%;\n  position: fixed;\n  bottom: -86px;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 10px 10px 10px 0;\n  color: #333;\n  background-image: linear-gradient(-180deg, rgba(235, 234, 237, 0.45) 0%, rgba(223, 219, 223, 0.45) 100%);\n  display: none; }\n  .player #timeControl {\n    width: 100%;\n    position: absolute;\n    bottom: 82px;\n    z-index: 300;\n    -webkit-appearance: none;\n    width: 100%;\n    border-radius: 4px;\n    height: 4px;\n    background-color: #f3f3f3;\n    box-shadow: 0 -1px 1px 0 rgba(0, 0, 0, 0.25);\n    outline: none; }\n  .player .art {\n    background: url(" + escape(__webpack_require__(/*! ../images/album-art-default.svg */ "./images/album-art-default.svg")) + ");\n    background-size: cover;\n    margin-left: 10px;\n    width: 62px;\n    height: 62px;\n    min-width: 62px;\n    border-radius: 2px; }\n  .player .data {\n    display: flex;\n    flex: 1;\n    margin: 0 6px;\n    flex-direction: column;\n    justify-content: space-between;\n    min-width: 0; }\n    .player .data .title {\n      margin-bottom: 6px;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n    .player .data .artist {\n      opacity: .6;\n      margin-bottom: 4px;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n    .player .data .mediaControls {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      flex-wrap: wrap;\n      width: 100px;\n      flex: 1;\n      height: 25px; }\n      .player .data .mediaControls div {\n        width: 25px;\n        height: 25px; }\n      .player .data .mediaControls .previous {\n        background: url(" + escape(__webpack_require__(/*! ../images/previous_light.png */ "./images/previous_light.png")) + ");\n        background-size: cover; }\n      .player .data .mediaControls .playpause {\n        background: url(" + escape(__webpack_require__(/*! ../images/play_light.png */ "./images/play_light.png")) + ");\n        background-size: cover; }\n      .player .data .mediaControls .playpause.playing {\n        background: url(" + escape(__webpack_require__(/*! ../images/pause_light.png */ "./images/pause_light.png")) + ");\n        background-size: cover; }\n      .player .data .mediaControls .next {\n        background: url(" + escape(__webpack_require__(/*! ../images/next_light.png */ "./images/next_light.png")) + ");\n        background-size: cover; }\n  .player .volume {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n    .player .volume input {\n      -webkit-appearance: slider-vertical;\n      height: 80px;\n      align-self: flex-end;\n      width: 20px; }\n    .player .volume div {\n      width: 25px;\n      height: 25px;\n      background: url(" + escape(__webpack_require__(/*! ../images/soundon_light.png */ "./images/soundon_light.png")) + ");\n      background-size: cover;\n      align-self: flex-end;\n      width: 20px;\n      margin-bottom: 3px; }\n    .player .volume div.muted {\n      background: url(" + escape(__webpack_require__(/*! ../images/soundoff_light.png */ "./images/soundoff_light.png")) + ");\n      background-size: cover; }\n\n.card {\n  height: 60px;\n  padding: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  color: #333; }\n  .card:nth-child(even) {\n    background: #ececec; }\n  .card .art {\n    height: 40px;\n    width: 40px;\n    background: url(" + escape(__webpack_require__(/*! ../images/album-art-default.svg */ "./images/album-art-default.svg")) + ");\n    background-size: cover;\n    border-right: 3px;\n    margin-right: 10px; }\n  .card .info {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 1px 0;\n    min-width: 0; }\n    .card .info p {\n      margin: 0;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n    .card .info .details {\n      opacity: .6; }\n\nbody {\n  margin: 0;\n  font: caption;\n  background: rgba(243, 243, 243, 0);\n  user-select: none;\n  cursor: default;\n  outline: none; }\n  body .content {\n    min-height: calc(100vh - 82px);\n    top: 82px;\n    bottom: 0;\n    background: #f3f3f3;\n    width: 100vw;\n    position: fixed;\n    display: none;\n    overflow-y: scroll; }\n", "", {"version":3,"sources":["/Users/remi/gdrive/Code/DiscMan/sass/sass/_reset.sass","/Users/remi/gdrive/Code/DiscMan/sass/sass/_header.sass","/Users/remi/gdrive/Code/DiscMan/sass/sass/style.sass","/Users/remi/gdrive/Code/DiscMan/sass/sass/_first-start.sass","/Users/remi/gdrive/Code/DiscMan/sass/sass/_player.sass","/Users/remi/gdrive/Code/DiscMan/sass/sass/_cards.sass"],"names":[],"mappings":"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","file":"style.sass","sourcesContent":["html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n\tbox-sizing: border-box; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n\tdisplay: block; }\n\nbody {\n\tline-height: 1; }\n\nol, ul {\n\tlist-style: none; }\n\nblockquote, q {\n\tquotes: none; }\n\nblockquote:before, blockquote:after, q:before, q:after {\n\tcontent: '';\n\tcontent: none; }\n\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0; }\n","header {\n  padding: 10px;\n  background-image: linear-gradient(-180deg, rgba(237,234,237,0.45) 0%, rgba(223,219,223,0.45) 100%);\n  -webkit-app-region: drag;\n  border-bottom: 1px solid darken($primaryBackground, 15);\n  height: 82px;\n\n  #appTitle {\n    text-align: center;\n    font-size: 14px;\n    color: green; }\n\n  ul.centeredPills {\n    display: flex;\n    justify-content: space-around;\n    margin-top: 14px;\n\n    li.active a {\n      padding: 7px 20px;\n      font-size: 13px; }\n\n    li {\n      background: rgba(243, 243, 243, 0);\n      box-sizing: border-box;\n      -webkit-app-region: no-drag;\n      margin-top: 4px;\n      &:hover {\n        background: rgba(243, 243, 243, 0); }\n      &:focus {\n        outline: 1px solid $primaryText; }\n\n      a {\n        padding: 7px 20px;\n        font-size: 13px;\n        text-transform: uppercase;\n        text-decoration: none;\n        cursor: default;\n        color: $primaryText;\n        transition-duration: .2s;\n        border-radius: 5px;\n        &:hover {\n          background: rgba(243, 243, 243, 0.3);\n          padding: 7px 20px; } } }\n\n    li.active {\n      background: $primaryBackground;\n      color: $primaryText;\n\n      // Override bootstrap default styles\n      a {\n        background: $primaryBackground;\n        color: $primaryText;\n        border: .5px solid lighten($primaryBackground, .2);\n        &:focus, &:hover {\n          background: $primaryBackground;\n          color: $primaryText; } } } } }\n","$primaryText: #333;\n$primaryBackground: rgb(243, 243, 243);\n$accent: #4181ec;\n\n@import \"reset\";\n@import \"header\";\n@import \"first-start\";\n@import \"player\";\n@import \"cards\";\n\nbody {\n  margin: 0;\n  font: caption;\n  //-webkit-user-select: none\n  background: rgba(243, 243, 243, 0);\n  user-select: none;\n  cursor: default;\n  outline: none;\n\n  .content {\n    min-height: calc(100vh - 82px);\n    top: 82px;\n    bottom: 0;\n    background: rgb(243, 243, 243);\n    width: 100vw;\n    position: fixed;\n    display: none;\n    overflow-y: scroll; } }\n",".firstStart {\n  text-align: center;\n  height: calc(100vh - 79px);\n  display: flex;\n  padding: 10px 50px;\n  flex-direction: column;\n  justify-content: center;\n  z-index: 100;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  background: $primaryBackground;\n\n  p {\n    margin: 25px auto 0 auto; } }\n\n.firstStart.draggedOver {\n  background: $accent;\n  color: $primaryBackground;\n\n  button {\n    visibility: hidden; } }\n",".player {\n  height: 82px;\n  width: 100%;\n  position: fixed;\n  bottom: -86px;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 10px 10px 10px 0;\n  color: $primaryText;\n  background-image: linear-gradient(-180deg, rgba(235, 234, 237, 0.45) 0%, rgba(223, 219, 223, 0.45) 100%);\n  display: none;\n\n  #timeControl {\n    width: 100%;\n    position: absolute;\n    bottom: 82px;\n    z-index: 300;\n    -webkit-appearance: none;\n    width: 100%;\n    border-radius: 4px;\n    height: 4px;\n    background-color: $primaryBackground;\n    box-shadow: 0 -1px 1px 0 rgba(0, 0, 0, 0.25);\n    outline: none; }\n\n  .art {\n    background: url(../images/album-art-default.svg);\n    background-size: cover;\n    margin-left: 10px;\n    width: 62px;\n    height: 62px;\n    min-width: 62px;\n    border-radius: 2px; }\n\n  .data {\n    display: flex;\n    flex: 1;\n    margin: 0 6px;\n    flex-direction: column;\n    justify-content: space-between;\n    // allows text ellipsis despite flexbox\n    min-width: 0;\n\n    .title {\n      margin-bottom: 6px;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n\n    .artist {\n      opacity: .6;\n      margin-bottom: 4px;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n\n    .mediaControls {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      flex-wrap: wrap;\n      width: 100px;\n      flex: 1;\n      height: 25px;\n\n      div {\n        width: 25px;\n        height: 25px; }\n\n      .previous {\n        background: url(../images/previous_light.png);\n        background-size: cover; }\n\n      .playpause {\n        background: url(../images/play_light.png);\n        background-size: cover; }\n      .playpause.playing {\n        background: url(../images/pause_light.png);\n        background-size: cover; }\n\n      .next {\n        background: url(../images/next_light.png);\n        background-size: cover; } } }\n\n  .volume {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n    input {\n      -webkit-appearance: slider-vertical;\n      height: 80px;\n      align-self: flex-end;\n      width: 20px; }\n\n    div {\n      width: 25px;\n      height: 25px;\n      background: url(../images/soundon_light.png);\n      background-size: cover;\n      align-self: flex-end;\n      width: 20px;\n      margin-bottom: 3px; }\n\n    div.muted {\n      background: url(../images/soundoff_light.png);\n      background-size: cover; } } }\n",".card {\n  height: 60px;\n  padding: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  color: $primaryText;\n  &:nth-child(even) {\n    background: darken($primaryBackground, 2.7); }\n\n  .art {\n    height: 40px;\n    width: 40px;\n    background: url(../images/album-art-default.svg);\n    background-size: cover;\n    border-right: 3px;\n    margin-right: 10px; }\n\n  .info {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 1px 0;\n    // allows text ellipsis despite flexbox\n    min-width: 0;\n\n    p {\n      margin: 0;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n\n    .details {\n      opacity: .6; } } }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./sass/style.sass":
/*!*************************!*\
  !*** ./sass/style.sass ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--4-1!../node_modules/sass-loader/lib/loader.js??ref--4-2!./style.sass */ "./node_modules/css-loader/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js??ref--4-2!./sass/style.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map