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
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjU2cHgiIGhlaWdodD0iMjU2cHgiIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MS4yICgzNTM5NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+YWxidW0tYXJ0LWRlZmF1bHQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDEuOTk5OTk4JSIgeTI9IjEwMC45OTk5OTklIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzMDIzQUUiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0M5NkREOCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8cGF0aCBkPSJNMCwxMi45OTQ4MzcgQzAsNS44MTc5ODY3MiA1LjgyNzI1MDI1LDAgMTMuMDA5MzA2MywwIEwxOTIuNzc1MzA5LDAgQzE5OS45NjAxNTEsMCAyMDUuNzg0NjE1LDUuODE3MDYwNDggMjA1Ljc4NDYxNSwxMi45OTQ4MzcgTDIwNS43ODQ2MTUsOTguODU2NzI1NSBDMjA1Ljc4NDYxNSwxMDYuMDMzNTc2IDE5OS45NTczNjUsMTExLjg1MTU2MiAxOTIuNzc1MzA5LDExMS44NTE1NjIgTDEzLjAwOTMwNjMsMTExLjg1MTU2MiBDNS44MjQ0NjQ4MSwxMTEuODUxNTYyIDAsMTA2LjAzNDUwMiAwLDk4Ljg1NjcyNTUgTDAsMTIuOTk0ODM3IFogTTg4LjcxNDkxOTIsMzEuNjgzMzYwMSBMODguNzE0OTE5Miw5MS42MjgyNTYgTDEzNy40NTc2OTIsNjEuNjU1ODA4MSBMODguNzE0OTE5MiwzMS42ODMzNjAxIFoiIGlkPSJwYXRoLTIiPjwvcGF0aD4KICAgICAgICA8bWFzayBpZD0ibWFzay0zIiBtYXNrQ29udGVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwNS43ODQ2MTUiIGhlaWdodD0iMTExLjg1MTU2MiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTIiPjwvdXNlPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8cGF0aCBkPSJNODUuMDE3MTAyMSwxODguMDMxMzQgQzM5LjYxNzg1NzMsMTgxLjE1MDE3MyA0LjgyMzA3NjkyLDE0MS45MTgxMDggNC44MjMwNzY5Miw5NC41NTA3ODEyIEM0LjgyMzA3NjkyLDQyLjMzMTgyNjcgNDcuMTEwNjQzMywwIDk5LjI3NSwwIEMxNTEuNDM5MzU3LDAgMTkzLjcyNjkyMyw0Mi4zMzE4MjY3IDE5My43MjY5MjMsOTQuNTUwNzgxMiBDMTkzLjcyNjkyMywxNDYuNzY5NzM2IDE1MS40MzkzNTcsMTg5LjEwMTU2MiA5OS4yNzUsMTg5LjEwMTU2MiBDOTQuODkxMTg5NCwxODkuMTAxNTYyIDkwLjU3NzEzMzIsMTg4LjgwMjU5NiA4Ni4zNTIwNjc4LDE4OC4yMjM5MTkgTDE1MC4zOTc4MjMsMTU0Ljk4MDg4MSBMNzguMzkwMTc4OCwxMjEuMDg4MjAyIEw4NS4wMTcxMDIxLDE4OC4wMzEzNCBaIE0xMDAuMDc4ODQ2LDEwOC42MzI4MTMgQzEwNy40MDQwNTQsMTA4LjYzMjgxMyAxMTMuMzQyMzA4LDEwMi42ODgzNDMgMTEzLjM0MjMwOCw5NS4zNTU0Njg4IEMxMTMuMzQyMzA4LDg4LjAyMjU5NDMgMTA3LjQwNDA1NCw4Mi4wNzgxMjUgMTAwLjA3ODg0Niw4Mi4wNzgxMjUgQzkyLjc1MzYzODYsODIuMDc4MTI1IDg2LjgxNTM4NDYsODguMDIyNTk0MyA4Ni44MTUzODQ2LDk1LjM1NTQ2ODggQzg2LjgxNTM4NDYsMTAyLjY4ODM0MyA5Mi43NTM2Mzg2LDEwOC42MzI4MTMgMTAwLjA3ODg0NiwxMDguNjMyODEzIFoiIGlkPSJwYXRoLTQiPjwvcGF0aD4KICAgICAgICA8bWFzayBpZD0ibWFzay01IiBtYXNrQ29udGVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeD0iMCIgeT0iMCIgd2lkdGg9IjE4OC45MDM4NDYiIGhlaWdodD0iMTg5LjEwMTU2MiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTQiPjwvdXNlPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8cGF0aCBkPSJNMTQ0LjczMzIzNywxMS42NTA4MjE5IEMxMzYuOTg3MTQ0LDcuMzg1Mjg2OTggMTI4LjU3ODc1NCw0LjE3NjA1MjI2IDExOS43MDE2OTYsMi4yMTY5NDk2MyBMMTAyLjU0NDI2NCw4Mi4zMDcwNzQ4IEMxMDMuNzY4MDE0LDgyLjUzNzM1NDMgMTA0LjkzMjQ2Niw4Mi45MzU4ODQxIDEwNi4wMTI3MzEsODMuNDc3NzQ4OCBMMTQ0LjczMzIzNywxMS42NTA4MjE5IFoiIGlkPSJwYXRoLTYiPjwvcGF0aD4KICAgICAgICA8bWFzayBpZD0ibWFzay03IiBtYXNrQ29udGVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeD0iMCIgeT0iMCIgd2lkdGg9IjQyLjE4ODk3MjciIGhlaWdodD0iODEuMjYwNzk5MiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTYiPjwvdXNlPgogICAgICAgIDwvbWFzaz4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJhbGJ1bS1hcnQtZGVmYXVsdCI+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMiIgZmlsbC1vcGFjaXR5PSIwLjciIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIHg9IjAiIHk9IjAiIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2Ij48L3JlY3Q+CiAgICAgICAgICAgIDxnIGlkPSJMb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IkJveCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDk0LjE0ODQzOCkiPgogICAgICAgICAgICAgICAgICAgIDx1c2UgaWQ9IkNvbWJpbmVkLVNoYXBlIiBzdHJva2U9IiNGRkZGRkYiIG1hc2s9InVybCgjbWFzay0zKSIgc3Ryb2tlLXdpZHRoPSIxMCIgZmlsbD0iI0ZGRkZGRiIgeGxpbms6aHJlZj0iI3BhdGgtMiI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IlBsYXkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY5LjEzMDc2OSwgMjguNzM5NjM4KSI+PC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPGcgaWQ9IkRpc2MiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuMjE1Mzg1LCAwLjAwMDAwMCkiIHN0cm9rZT0iI0ZGRkZGRiI+CiAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD0iQ29tYmluZWQtU2hhcGUiIG1hc2s9InVybCgjbWFzay01KSIgc3Ryb2tlLXdpZHRoPSIxNiIgeGxpbms6aHJlZj0iI3BhdGgtNCI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD0iQ29tYmluZWQtU2hhcGUiIG1hc2s9InVybCgjbWFzay03KSIgc3Ryb2tlLXdpZHRoPSIxMCIgZmlsbD0iI0ZGRkZGRiIgeGxpbms6aHJlZj0iI3BhdGgtNiI+PC91c2U+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_displayContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/displayContent.js */ "./js/helpers/displayContent.js");
/* harmony import */ var _helpers_switchTab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/switchTab.js */ "./js/helpers/switchTab.js");
/* harmony import */ var _helpers_handleDragAndDrop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/handleDragAndDrop.js */ "./js/helpers/handleDragAndDrop.js");
/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sass/style.sass */ "./sass/style.sass");
/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sass_style_sass__WEBPACK_IMPORTED_MODULE_3__);
const ElectronStore = __webpack_require__(/*! electron-store */ "./node_modules/electron-store/index.js")
const store = new ElectronStore()

const tabs = document.querySelectorAll('header li.tab')
const firstStart = document.querySelector('.first-start')






if (!store.get('library')) {
  // Manage first start
  firstStart.classList.add('active')
} else {
  // Populate app with music library
  Object(_helpers_displayContent_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
}

// Listen for drags to update library
Object(_helpers_handleDragAndDrop_js__WEBPACK_IMPORTED_MODULE_2__["default"])()

// Switch tab on tab click
for (const tab of tabs) {
  tab.addEventListener('click', () => {
    Object(_helpers_switchTab_js__WEBPACK_IMPORTED_MODULE_1__["default"])(tab.getAttribute('id'))
  })
}


/***/ }),

/***/ "./js/helpers/createCard.js":
/*!**********************************!*\
  !*** ./js/helpers/createCard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (songData => {
  // Create placeholder data if none is available
  const songInfo = songData || {
    title: 'Unknown Title',
    details: 'Unknown Source',
    src: '#',
    cover: 'unknown.png'
  }

  // Create a card for the song
  const songCard = document.createElement('div')
  songCard.classList.add('card')

  // Populate card with song data
  songCard.innerHTML = `
    <div class="card__art"></div>
    <div class="card__info">
      <audio class="card__source" src="${songInfo.src}"></audio>
      <p class="card__title">${songInfo.title}</p>
      <p class="card__details">${songInfo.details}</p>
    </div>
    `

    return songCard
});

/***/ }),

/***/ "./js/helpers/displayContent.js":
/*!**************************************!*\
  !*** ./js/helpers/displayContent.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createCard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCard.js */ "./js/helpers/createCard.js");

// Display content depending on the active tab
/* harmony default export */ __webpack_exports__["default"] = (() => {
  // Get sections from DOM
  const titlesSection = document.querySelector('.content[data-section="titles"]')
  const albumsSection = document.querySelector('.content[data-section="albums"]')
  const artistsSection = document.querySelector('.content[data-section="artists"]')

  // Create fake card
  // TODO: replace with real metadata
  const cardInfo = {
    title: 'Unknown Title',
    details: 'Unknown Source',
    src: '#',
    cover: 'unknown.png'
  }

  // Display titles
  for (let i = 0; i < 20; i++) {
    const card = Object(_createCard_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
    titlesSection.appendChild(card)
  }
  
  // Display albums
  for (let i = 0; i < 20; i++) {
    const card = Object(_createCard_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
    albumsSection.appendChild(card)
  }

  // Display artists
  for (let i = 0; i < 20; i++) {
    const card = Object(_createCard_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
    artistsSection.appendChild(card)
  }
});

/***/ }),

/***/ "./js/helpers/handleDragAndDrop.js":
/*!*****************************************!*\
  !*** ./js/helpers/handleDragAndDrop.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parseFiles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseFiles.js */ "./js/helpers/parseFiles.js");


/* harmony default export */ __webpack_exports__["default"] = (() => {
  console.log('test')
  const firstStart = document.querySelector('.first-start')
  let newMusicPaths = []
  
  document.addEventListener('dragover', e => {
    // Prevent app from opening file
    e.preventDefault()
    console.log('dragover')
    firstStart.classList.add('active')
    firstStart.classList.add('dragged-over')
  })
  
  document.addEventListener('dragleave', e => {
    e.preventDefault()
    firstStart.classList.remove('dragged-over')
  })
  
  document.addEventListener('drop', e => {
    firstStart.classList.remove('dragged-over')
    e.preventDefault()
    newMusicPaths = []
    const items = e.dataTransfer.items
    for (let i=0; i<items.length; i++) {
      var item = items[i].webkitGetAsEntry()
      if (item) {
        traverseFileTree(item)
      }
    }
    
    console.table(newMusicPaths)
    //const newMusic = parseFiles(newMusicPaths)
    Object(_parseFiles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(newMusicPaths)
  })


  const traverseFileTree = (item, path) => {
    path = path || ""
    if (item.isFile) {
      // Get file
      item.file(file => {
        if (file.type.substring(0, 5) == 'audio') {
          newMusicPaths.push(file.path)
        }
      })
    } else if (item.isDirectory) {
      // Get folder contents
      const dirReader = item.createReader()
      dirReader.readEntries(function (entries) {
        for (var i = 0; i < entries.length; i++) {
          traverseFileTree(entries[i], path + item.name + "/")
        }
      })
    }
  }
});

/***/ }),

/***/ "./js/helpers/parseFiles.js":
/*!**********************************!*\
  !*** ./js/helpers/parseFiles.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const metaData = __webpack_require__(/*! music-metadata */ "./node_modules/music-metadata/lib/index.js")

/* harmony default export */ __webpack_exports__["default"] = (filePaths => {
  const results = []
  for (const path of filePaths) {
    // Get meta data
    metaData
      .parseFile(path, {native: true})
      .then(metadata => {
        results.push(metaData)
      })
      .catch(err => {
        console.error(err.message);
      })
  }
  console.table(results)
});

/***/ }),

/***/ "./js/helpers/switchTab.js":
/*!*********************************!*\
  !*** ./js/helpers/switchTab.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (newTab => {
  // Only trigger if clicked tab isn't active
  if (!document.querySelector(`li.tab.active#${newTab}`)) {
    // Update tabs
    const tabs = document.querySelectorAll('.tab')
    for (const tab of tabs) {
      if (tab.getAttribute('id') === newTab) {
        tab.classList.add('active')
      } else {
        tab.classList.remove('active')
      }
    }

    // Update page content  
    const sections = document.querySelectorAll('.content')
    for (const section of sections) {
      if (section.dataset.section === newTab) {
        section.classList.add('active')
      } else {
        section.classList.remove('active')
      }
    }
  }
});


/***/ }),

/***/ "./node_modules/conf/index.js":
/*!************************************!*\
  !*** ./node_modules/conf/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename, module) {
const fs = __webpack_require__(/*! fs */ "fs");
const path = __webpack_require__(/*! path */ "path");
const crypto = __webpack_require__(/*! crypto */ "crypto");
const assert = __webpack_require__(/*! assert */ "assert");
const EventEmitter = __webpack_require__(/*! events */ "events");
const dotProp = __webpack_require__(/*! dot-prop */ "./node_modules/dot-prop/index.js");
const makeDir = __webpack_require__(/*! make-dir */ "./node_modules/make-dir/index.js");
const pkgUp = __webpack_require__(/*! pkg-up */ "./node_modules/pkg-up/index.js");
const envPaths = __webpack_require__(/*! env-paths */ "./node_modules/env-paths/index.js");
const writeFileAtomic = __webpack_require__(/*! write-file-atomic */ "./node_modules/conf/node_modules/write-file-atomic/index.js");

const obj = () => Object.create(null);

// Prevent caching of this module so module.parent is always accurate
delete __webpack_require__.c[__filename];
const parentDir = path.dirname((module.parent && module.parent.filename) || '.');

class Conf {
	constructor(opts) {
		const pkgPath = pkgUp.sync(parentDir);

		opts = Object.assign({
			// Can't use `require` because of Webpack being annoying:
			// https://github.com/webpack/webpack/issues/196
			projectName: pkgPath && JSON.parse(fs.readFileSync(pkgPath, 'utf8')).name
		}, opts);

		if (!opts.projectName && !opts.cwd) {
			throw new Error('Project name could not be inferred. Please specify the `projectName` option.');
		}

		opts = Object.assign({
			configName: 'config'
		}, opts);

		if (!opts.cwd) {
			opts.cwd = envPaths(opts.projectName).config;
		}

		this.events = new EventEmitter();
		this.encryptionKey = opts.encryptionKey;
		this.path = path.resolve(opts.cwd, `${opts.configName}.json`);
		this.store = Object.assign(obj(), opts.defaults, this.store);
	}
	get(key, defaultValue) {
		return dotProp.get(this.store, key, defaultValue);
	}
	set(key, val) {
		if (typeof key !== 'string' && typeof key !== 'object') {
			throw new TypeError(`Expected \`key\` to be of type \`string\` or \`object\`, got ${typeof key}`);
		}

		const store = this.store;

		if (typeof key === 'object') {
			for (const k of Object.keys(key)) {
				dotProp.set(store, k, key[k]);
			}
		} else {
			dotProp.set(store, key, val);
		}

		this.store = store;
	}
	has(key) {
		return dotProp.has(this.store, key);
	}
	delete(key) {
		const store = this.store;
		dotProp.delete(store, key);
		this.store = store;
	}
	clear() {
		this.store = obj();
	}
	onDidChange(key, callback) {
		if (typeof key !== 'string') {
			throw new TypeError(`Expected \`key\` to be of type \`string\`, got ${typeof key}`);
		}

		if (typeof callback !== 'function') {
			throw new TypeError(`Expected \`callback\` to be of type \`function\`, got ${typeof callback}`);
		}

		let currentValue = this.get(key);

		const onChange = () => {
			const oldValue = currentValue;
			const newValue = this.get(key);

			try {
				assert.deepEqual(newValue, oldValue);
			} catch (err) {
				currentValue = newValue;
				callback.call(this, newValue, oldValue);
			}
		};

		this.events.on('change', onChange);
		return () => this.events.removeListener('change', onChange);
	}
	get size() {
		return Object.keys(this.store).length;
	}
	get store() {
		try {
			let data = fs.readFileSync(this.path, this.encryptionKey ? null : 'utf8');

			if (this.encryptionKey) {
				try {
					const decipher = crypto.createDecipher('aes-256-cbc', this.encryptionKey);
					data = Buffer.concat([decipher.update(data), decipher.final()]);
				} catch (err) {/* ignore */}
			}

			return Object.assign(obj(), JSON.parse(data));
		} catch (err) {
			if (err.code === 'ENOENT') {
				makeDir.sync(path.dirname(this.path));
				return obj();
			}

			if (err.name === 'SyntaxError') {
				return obj();
			}

			throw err;
		}
	}
	set store(val) {
		// Ensure the directory exists as it could have been deleted in the meantime
		makeDir.sync(path.dirname(this.path));

		let data = JSON.stringify(val, null, '\t');

		if (this.encryptionKey) {
			const cipher = crypto.createCipher('aes-256-cbc', this.encryptionKey);
			data = Buffer.concat([cipher.update(Buffer.from(data)), cipher.final()]);
		}

		writeFileAtomic.sync(this.path, data);
		this.events.emit('change');
	}
	// TODO: Use `Object.entries()` here at some point
	* [Symbol.iterator]() {
		const store = this.store;

		for (const key of Object.keys(store)) {
			yield [key, store[key]];
		}
	}
}

module.exports = Conf;

/* WEBPACK VAR INJECTION */}.call(this, "/index.js", __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/conf/node_modules/write-file-atomic/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/conf/node_modules/write-file-atomic/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {
module.exports = writeFile
module.exports.sync = writeFileSync
module.exports._getTmpname = getTmpname // for testing
module.exports._cleanupOnExit = cleanupOnExit

var fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js")
var MurmurHash3 = __webpack_require__(/*! imurmurhash */ "./node_modules/imurmurhash/imurmurhash.js")
var onExit = __webpack_require__(/*! signal-exit */ "./node_modules/signal-exit/index.js")
var path = __webpack_require__(/*! path */ "path")
var activeFiles = {}

var invocations = 0
function getTmpname (filename) {
  return filename + '.' +
    MurmurHash3(__filename)
      .hash(String(process.pid))
      .hash(String(++invocations))
      .result()
}

function cleanupOnExit (tmpfile) {
  return function () {
    try {
      fs.unlinkSync(typeof tmpfile === 'function' ? tmpfile() : tmpfile)
    } catch (_) {}
  }
}

function writeFile (filename, data, options, callback) {
  if (options instanceof Function) {
    callback = options
    options = null
  }
  if (!options) options = {}

  var Promise = options.Promise || global.Promise
  var truename
  var fd
  var tmpfile
  var removeOnExit = cleanupOnExit(() => tmpfile)
  var absoluteName = path.resolve(filename)

  new Promise(function serializeSameFile (resolve) {
    // make a queue if it doesn't already exist
    if (!activeFiles[absoluteName]) activeFiles[absoluteName] = []

    activeFiles[absoluteName].push(resolve) // add this job to the queue
    if (activeFiles[absoluteName].length === 1) resolve() // kick off the first one
  }).then(function getRealPath () {
    return new Promise(function (resolve) {
      fs.realpath(filename, function (_, realname) {
        truename = realname || filename
        tmpfile = getTmpname(truename)
        resolve()
      })
    })
  }).then(function stat () {
    return new Promise(function stat (resolve) {
      if (options.mode && options.chown) resolve()
      else {
        // Either mode or chown is not explicitly set
        // Default behavior is to copy it from original file
        fs.stat(truename, function (err, stats) {
          if (err || !stats) resolve()
          else {
            options = Object.assign({}, options)

            if (!options.mode) {
              options.mode = stats.mode
            }
            if (!options.chown && process.getuid) {
              options.chown = { uid: stats.uid, gid: stats.gid }
            }
            resolve()
          }
        })
      }
    })
  }).then(function thenWriteFile () {
    return new Promise(function (resolve, reject) {
      fs.open(tmpfile, 'w', options.mode, function (err, _fd) {
        fd = _fd
        if (err) reject(err)
        else resolve()
      })
    })
  }).then(function write () {
    return new Promise(function (resolve, reject) {
      if (Buffer.isBuffer(data)) {
        fs.write(fd, data, 0, data.length, 0, function (err) {
          if (err) reject(err)
          else resolve()
        })
      } else if (data != null) {
        fs.write(fd, String(data), 0, String(options.encoding || 'utf8'), function (err) {
          if (err) reject(err)
          else resolve()
        })
      } else resolve()
    })
  }).then(function syncAndClose () {
    if (options.fsync !== false) {
      return new Promise(function (resolve, reject) {
        fs.fsync(fd, function (err) {
          if (err) reject(err)
          else fs.close(fd, resolve)
        })
      })
    }
  }).then(function chown () {
    if (options.chown) {
      return new Promise(function (resolve, reject) {
        fs.chown(tmpfile, options.chown.uid, options.chown.gid, function (err) {
          if (err) reject(err)
          else resolve()
        })
      })
    }
  }).then(function chmod () {
    if (options.mode) {
      return new Promise(function (resolve, reject) {
        fs.chmod(tmpfile, options.mode, function (err) {
          if (err) reject(err)
          else resolve()
        })
      })
    }
  }).then(function rename () {
    return new Promise(function (resolve, reject) {
      fs.rename(tmpfile, truename, function (err) {
        if (err) reject(err)
        else resolve()
      })
    })
  }).then(function success () {
    removeOnExit()
    callback()
  }).catch(function fail (err) {
    removeOnExit()
    fs.unlink(tmpfile, function () {
      callback(err)
    })
  }).then(function checkQueue () {
    activeFiles[absoluteName].shift() // remove the element added by serializeSameFile
    if (activeFiles[absoluteName].length > 0) {
      activeFiles[absoluteName][0]() // start next job if one is pending
    } else delete activeFiles[absoluteName]
  })
}

function writeFileSync (filename, data, options) {
  if (!options) options = {}
  try {
    filename = fs.realpathSync(filename)
  } catch (ex) {
    // it's ok, it'll happen on a not yet existing file
  }
  var tmpfile = getTmpname(filename)

  try {
    if (!options.mode || !options.chown) {
      // Either mode or chown is not explicitly set
      // Default behavior is to copy it from original file
      try {
        var stats = fs.statSync(filename)
        options = Object.assign({}, options)
        if (!options.mode) {
          options.mode = stats.mode
        }
        if (!options.chown && process.getuid) {
          options.chown = { uid: stats.uid, gid: stats.gid }
        }
      } catch (ex) {
        // ignore stat errors
      }
    }

    var removeOnExit = onExit(cleanupOnExit(tmpfile))
    var fd = fs.openSync(tmpfile, 'w', options.mode)
    if (Buffer.isBuffer(data)) {
      fs.writeSync(fd, data, 0, data.length, 0)
    } else if (data != null) {
      fs.writeSync(fd, String(data), 0, String(options.encoding || 'utf8'))
    }
    if (options.fsync !== false) {
      fs.fsyncSync(fd)
    }
    fs.closeSync(fd)
    if (options.chown) fs.chownSync(tmpfile, options.chown.uid, options.chown.gid)
    if (options.mode) fs.chmodSync(tmpfile, options.mode)
    fs.renameSync(tmpfile, filename)
    removeOnExit()
  } catch (err) {
    removeOnExit()
    try { fs.unlinkSync(tmpfile) } catch (e) {}
    throw err
  }
}

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./sass/style.sass":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./sass/style.sass ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after, q:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nheader {\n  padding: 10px;\n  background-image: linear-gradient(-180deg, rgba(237, 234, 237, 0.45) 0%, rgba(223, 219, 223, 0.45) 100%);\n  -webkit-app-region: drag;\n  border-bottom: 1px solid #cdcdcd;\n  height: 82px; }\n  header #appTitle {\n    text-align: center;\n    font-size: 14px; }\n  header ul.centeredPills {\n    display: flex;\n    justify-content: space-around;\n    margin-top: 12px; }\n    header ul.centeredPills li.tab {\n      background: rgba(243, 243, 243, 0);\n      box-sizing: border-box;\n      -webkit-app-region: no-drag;\n      margin-top: 4px;\n      padding: 0 20px;\n      height: 30px;\n      border-radius: 5px;\n      box-sizing: border-box; }\n      header ul.centeredPills li.tab:hover {\n        background: rgba(243, 243, 243, 0.4); }\n      header ul.centeredPills li.tab:focus {\n        outline: 1px solid #333; }\n      header ul.centeredPills li.tab a {\n        line-height: 30px;\n        font-size: 13px;\n        text-transform: uppercase;\n        text-decoration: none;\n        cursor: default;\n        color: #333; }\n    header ul.centeredPills li.tab.active {\n      background: #f3f3f3;\n      color: #333; }\n\n.first-start {\n  display: none;\n  text-align: center;\n  height: calc(100vh - 82px);\n  padding: 10px 50px;\n  flex-direction: column;\n  justify-content: center;\n  z-index: 100;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  background: #f3f3f3; }\n  .first-start.active {\n    display: flex; }\n  .first-start h2 {\n    font-size: 24px; }\n  .first-start p {\n    margin: 15px auto 0 auto; }\n  .first-start.dragged-over {\n    background: #4181ec;\n    color: #f3f3f3; }\n    .first-start.dragged-over button {\n      visibility: hidden; }\n\n.player {\n  height: 82px;\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n  transform: translateY(90px);\n  transition: 0.2s transform;\n  will-change: transform;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 10px 10px 10px 0;\n  color: #333;\n  background-image: linear-gradient(-180deg, rgba(235, 234, 237, 0.45) 0%, rgba(223, 219, 223, 0.45) 100%);\n  display: none; }\n  .player #timeControl {\n    width: 100%;\n    position: absolute;\n    bottom: 82px;\n    z-index: 300;\n    -webkit-appearance: none;\n    width: 100%;\n    border-radius: 4px;\n    height: 4px;\n    background-color: #f3f3f3;\n    box-shadow: 0 -1px 1px 0 rgba(0, 0, 0, 0.25);\n    outline: none; }\n  .player .art {\n    background: teal;\n    background-size: cover;\n    margin-left: 10px;\n    width: 62px;\n    height: 62px;\n    min-width: 62px;\n    border-radius: 2px; }\n  .player .data {\n    display: flex;\n    flex: 1;\n    margin: 0 6px;\n    flex-direction: column;\n    justify-content: space-between;\n    min-width: 0; }\n    .player .data .title {\n      margin-bottom: 6px;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n    .player .data .artist {\n      opacity: .6;\n      margin-bottom: 4px;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n    .player .data .mediaControls {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      flex-wrap: wrap;\n      width: 100px;\n      flex: 1;\n      height: 25px; }\n      .player .data .mediaControls div {\n        width: 25px;\n        height: 25px; }\n  .player .volume {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n    .player .volume input {\n      -webkit-appearance: slider-vertical;\n      height: 80px;\n      align-self: flex-end;\n      width: 20px; }\n    .player .volume div {\n      width: 25px;\n      height: 25px;\n      background-size: cover;\n      align-self: flex-end;\n      width: 20px;\n      margin-bottom: 3px; }\n    .player .volume div.muted {\n      background-size: cover; }\n\n.card {\n  height: 60px;\n  padding: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  color: #333; }\n  .card:nth-child(even) {\n    background: #eeeeee; }\n  .card .card__art {\n    height: 40px;\n    width: 40px;\n    background: url(" + escape(__webpack_require__(/*! ../images/album-art-default.svg */ "./images/album-art-default.svg")) + ");\n    background-size: cover;\n    border-right: 3px;\n    margin-right: 10px; }\n  .card .card__info {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 1px 0;\n    min-width: 0; }\n    .card .card__info p {\n      margin: 0;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n    .card .card__info .card__details {\n      opacity: .6; }\n\nbody {\n  margin: 0;\n  font: caption;\n  background: rgba(243, 243, 243, 0);\n  user-select: none;\n  cursor: default;\n  outline: none; }\n  body .content {\n    min-height: calc(100vh - 82px);\n    top: 82px;\n    bottom: 0;\n    background: #f3f3f3;\n    width: 100vw;\n    position: fixed;\n    overflow-y: scroll;\n    display: none; }\n    body .content.active {\n      display: block; }\n\n::-webkit-scrollbar-track-piece {\n  background-color: transparent;\n  -webkit-border-radius: 6px; }\n", ""]);

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

/***/ "./node_modules/dot-prop/index.js":
/*!****************************************!*\
  !*** ./node_modules/dot-prop/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const isObj = __webpack_require__(/*! is-obj */ "./node_modules/is-obj/index.js");

function getPathSegments(path) {
	const pathArr = path.split('.');
	const parts = [];

	for (let i = 0; i < pathArr.length; i++) {
		let p = pathArr[i];

		while (p[p.length - 1] === '\\' && pathArr[i + 1] !== undefined) {
			p = p.slice(0, -1) + '.';
			p += pathArr[++i];
		}

		parts.push(p);
	}

	return parts;
}

module.exports = {
	get(obj, path, value) {
		if (!isObj(obj) || typeof path !== 'string') {
			return value === undefined ? obj : value;
		}

		const pathArr = getPathSegments(path);

		for (let i = 0; i < pathArr.length; i++) {
			if (!Object.prototype.propertyIsEnumerable.call(obj, pathArr[i])) {
				return value;
			}

			obj = obj[pathArr[i]];

			if (obj === undefined || obj === null) {
				// `obj` is either `undefined` or `null` so we want to stop the loop, and
				// if this is not the last bit of the path, and
				// if it did't return `undefined`
				// it would return `null` if `obj` is `null`
				// but we want `get({foo: null}, 'foo.bar')` to equal `undefined`, or the supplied value, not `null`
				if (i !== pathArr.length - 1) {
					return value;
				}

				break;
			}
		}

		return obj;
	},

	set(obj, path, value) {
		if (!isObj(obj) || typeof path !== 'string') {
			return obj;
		}

		const root = obj;
		const pathArr = getPathSegments(path);

		for (let i = 0; i < pathArr.length; i++) {
			const p = pathArr[i];

			if (!isObj(obj[p])) {
				obj[p] = {};
			}

			if (i === pathArr.length - 1) {
				obj[p] = value;
			}

			obj = obj[p];
		}

		return root;
	},

	delete(obj, path) {
		if (!isObj(obj) || typeof path !== 'string') {
			return;
		}

		const pathArr = getPathSegments(path);

		for (let i = 0; i < pathArr.length; i++) {
			const p = pathArr[i];

			if (i === pathArr.length - 1) {
				delete obj[p];
				return;
			}

			obj = obj[p];

			if (!isObj(obj)) {
				return;
			}
		}
	},

	has(obj, path) {
		if (!isObj(obj) || typeof path !== 'string') {
			return false;
		}

		const pathArr = getPathSegments(path);

		for (let i = 0; i < pathArr.length; i++) {
			if (isObj(obj)) {
				if (!(pathArr[i] in obj)) {
					return false;
				}

				obj = obj[pathArr[i]];
			} else {
				return false;
			}
		}

		return true;
	}
};


/***/ }),

/***/ "./node_modules/electron-store/index.js":
/*!**********************************************!*\
  !*** ./node_modules/electron-store/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const path = __webpack_require__(/*! path */ "path");
const electron = __webpack_require__(/*! electron */ "electron");
const Conf = __webpack_require__(/*! conf */ "./node_modules/conf/index.js");

class ElectronStore extends Conf {
	constructor(opts) {
		const defaultCwd = (electron.app || electron.remote.app).getPath('userData');

		opts = Object.assign({name: 'config'}, opts);

		if (opts.cwd) {
			opts.cwd = path.isAbsolute(opts.cwd) ? opts.cwd : path.join(defaultCwd, opts.cwd);
		} else {
			opts.cwd = defaultCwd;
		}

		opts.configName = opts.name;
		delete opts.name;
		super(opts);
	}

	openInEditor() {
		electron.shell.openItem(this.path);
	}
}

module.exports = ElectronStore;


/***/ }),

/***/ "./node_modules/env-paths/index.js":
/*!*****************************************!*\
  !*** ./node_modules/env-paths/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const path = __webpack_require__(/*! path */ "path");
const os = __webpack_require__(/*! os */ "os");

const homedir = os.homedir();
const tmpdir = os.tmpdir();
const env = process.env;

const macos = name => {
	const library = path.join(homedir, 'Library');

	return {
		data: path.join(library, 'Application Support', name),
		config: path.join(library, 'Preferences', name),
		cache: path.join(library, 'Caches', name),
		log: path.join(library, 'Logs', name),
		temp: path.join(tmpdir, name)
	};
};

const windows = name => {
	const appData = env.LOCALAPPDATA || path.join(homedir, 'AppData', 'Local');

	return {
		// data/config/cache/log are invented by me as Windows isn't opinionated about this
		data: path.join(appData, name, 'Data'),
		config: path.join(appData, name, 'Config'),
		cache: path.join(appData, name, 'Cache'),
		log: path.join(appData, name, 'Log'),
		temp: path.join(tmpdir, name)
	};
};

// https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html
const linux = name => {
	const username = path.basename(homedir);

	return {
		data: path.join(env.XDG_DATA_HOME || path.join(homedir, '.local', 'share'), name),
		config: path.join(env.XDG_CONFIG_HOME || path.join(homedir, '.config'), name),
		cache: path.join(env.XDG_CACHE_HOME || path.join(homedir, '.cache'), name),
		// https://wiki.debian.org/XDGBaseDirectorySpecification#state
		log: path.join(env.XDG_STATE_HOME || path.join(homedir, '.local', 'state'), name),
		temp: path.join(tmpdir, username, name)
	};
};

module.exports = (name, opts) => {
	if (typeof name !== 'string') {
		throw new TypeError(`Expected string, got ${typeof name}`);
	}

	opts = Object.assign({suffix: 'nodejs'}, opts);

	if (opts.suffix) {
		// add suffix to prevent possible conflict with native apps
		name += `-${opts.suffix}`;
	}

	if (process.platform === 'darwin') {
		return macos(name);
	}

	if (process.platform === 'win32') {
		return windows(name);
	}

	return linux(name);
};


/***/ }),

/***/ "./node_modules/es6-promise/dist/es6-promise.js":
/*!******************************************************!*\
  !*** ./node_modules/es6-promise/dist/es6-promise.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.4+314e4831
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var TRY_CATCH_ERROR = { error: null };

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    TRY_CATCH_ERROR.error = error;
    return TRY_CATCH_ERROR;
  }
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === TRY_CATCH_ERROR) {
      reject(promise, TRY_CATCH_ERROR.error);
      TRY_CATCH_ERROR.error = null;
    } else if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = void 0,
      failed = void 0;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value.error = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (failed) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = getThen(entry);

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        handleMaybeThenable(promise, entry, _then);
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    return promise.then(function (value) {
      return constructor.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return constructor.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));



//# sourceMappingURL=es6-promise.map


/***/ }),

/***/ "./node_modules/graceful-fs/fs.js":
/*!****************************************!*\
  !*** ./node_modules/graceful-fs/fs.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fs = __webpack_require__(/*! fs */ "fs")

module.exports = clone(fs)

function clone (obj) {
  if (obj === null || typeof obj !== 'object')
    return obj

  if (obj instanceof Object)
    var copy = { __proto__: obj.__proto__ }
  else
    var copy = Object.create(null)

  Object.getOwnPropertyNames(obj).forEach(function (key) {
    Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key))
  })

  return copy
}


/***/ }),

/***/ "./node_modules/graceful-fs/graceful-fs.js":
/*!*************************************************!*\
  !*** ./node_modules/graceful-fs/graceful-fs.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fs = __webpack_require__(/*! fs */ "fs")
var polyfills = __webpack_require__(/*! ./polyfills.js */ "./node_modules/graceful-fs/polyfills.js")
var legacy = __webpack_require__(/*! ./legacy-streams.js */ "./node_modules/graceful-fs/legacy-streams.js")
var queue = []

var util = __webpack_require__(/*! util */ "util")

function noop () {}

var debug = noop
if (util.debuglog)
  debug = util.debuglog('gfs4')
else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || ''))
  debug = function() {
    var m = util.format.apply(util, arguments)
    m = 'GFS4: ' + m.split(/\n/).join('\nGFS4: ')
    console.error(m)
  }

if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || '')) {
  process.on('exit', function() {
    debug(queue)
    __webpack_require__(/*! assert */ "assert").equal(queue.length, 0)
  })
}

module.exports = patch(__webpack_require__(/*! ./fs.js */ "./node_modules/graceful-fs/fs.js"))
if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH) {
  module.exports = patch(fs)
}

// Always patch fs.close/closeSync, because we want to
// retry() whenever a close happens *anywhere* in the program.
// This is essential when multiple graceful-fs instances are
// in play at the same time.
module.exports.close =
fs.close = (function (fs$close) { return function (fd, cb) {
  return fs$close.call(fs, fd, function (err) {
    if (!err)
      retry()

    if (typeof cb === 'function')
      cb.apply(this, arguments)
  })
}})(fs.close)

module.exports.closeSync =
fs.closeSync = (function (fs$closeSync) { return function (fd) {
  // Note that graceful-fs also retries when fs.closeSync() fails.
  // Looks like a bug to me, although it's probably a harmless one.
  var rval = fs$closeSync.apply(fs, arguments)
  retry()
  return rval
}})(fs.closeSync)

function patch (fs) {
  // Everything that references the open() function needs to be in here
  polyfills(fs)
  fs.gracefulify = patch
  fs.FileReadStream = ReadStream;  // Legacy name.
  fs.FileWriteStream = WriteStream;  // Legacy name.
  fs.createReadStream = createReadStream
  fs.createWriteStream = createWriteStream
  var fs$readFile = fs.readFile
  fs.readFile = readFile
  function readFile (path, options, cb) {
    if (typeof options === 'function')
      cb = options, options = null

    return go$readFile(path, options, cb)

    function go$readFile (path, options, cb) {
      return fs$readFile(path, options, function (err) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
          enqueue([go$readFile, [path, options, cb]])
        else {
          if (typeof cb === 'function')
            cb.apply(this, arguments)
          retry()
        }
      })
    }
  }

  var fs$writeFile = fs.writeFile
  fs.writeFile = writeFile
  function writeFile (path, data, options, cb) {
    if (typeof options === 'function')
      cb = options, options = null

    return go$writeFile(path, data, options, cb)

    function go$writeFile (path, data, options, cb) {
      return fs$writeFile(path, data, options, function (err) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
          enqueue([go$writeFile, [path, data, options, cb]])
        else {
          if (typeof cb === 'function')
            cb.apply(this, arguments)
          retry()
        }
      })
    }
  }

  var fs$appendFile = fs.appendFile
  if (fs$appendFile)
    fs.appendFile = appendFile
  function appendFile (path, data, options, cb) {
    if (typeof options === 'function')
      cb = options, options = null

    return go$appendFile(path, data, options, cb)

    function go$appendFile (path, data, options, cb) {
      return fs$appendFile(path, data, options, function (err) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
          enqueue([go$appendFile, [path, data, options, cb]])
        else {
          if (typeof cb === 'function')
            cb.apply(this, arguments)
          retry()
        }
      })
    }
  }

  var fs$readdir = fs.readdir
  fs.readdir = readdir
  function readdir (path, options, cb) {
    var args = [path]
    if (typeof options !== 'function') {
      args.push(options)
    } else {
      cb = options
    }
    args.push(go$readdir$cb)

    return go$readdir(args)

    function go$readdir$cb (err, files) {
      if (files && files.sort)
        files.sort()

      if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
        enqueue([go$readdir, [args]])
      else {
        if (typeof cb === 'function')
          cb.apply(this, arguments)
        retry()
      }
    }
  }

  function go$readdir (args) {
    return fs$readdir.apply(fs, args)
  }

  if (process.version.substr(0, 4) === 'v0.8') {
    var legStreams = legacy(fs)
    ReadStream = legStreams.ReadStream
    WriteStream = legStreams.WriteStream
  }

  var fs$ReadStream = fs.ReadStream
  ReadStream.prototype = Object.create(fs$ReadStream.prototype)
  ReadStream.prototype.open = ReadStream$open

  var fs$WriteStream = fs.WriteStream
  WriteStream.prototype = Object.create(fs$WriteStream.prototype)
  WriteStream.prototype.open = WriteStream$open

  fs.ReadStream = ReadStream
  fs.WriteStream = WriteStream

  function ReadStream (path, options) {
    if (this instanceof ReadStream)
      return fs$ReadStream.apply(this, arguments), this
    else
      return ReadStream.apply(Object.create(ReadStream.prototype), arguments)
  }

  function ReadStream$open () {
    var that = this
    open(that.path, that.flags, that.mode, function (err, fd) {
      if (err) {
        if (that.autoClose)
          that.destroy()

        that.emit('error', err)
      } else {
        that.fd = fd
        that.emit('open', fd)
        that.read()
      }
    })
  }

  function WriteStream (path, options) {
    if (this instanceof WriteStream)
      return fs$WriteStream.apply(this, arguments), this
    else
      return WriteStream.apply(Object.create(WriteStream.prototype), arguments)
  }

  function WriteStream$open () {
    var that = this
    open(that.path, that.flags, that.mode, function (err, fd) {
      if (err) {
        that.destroy()
        that.emit('error', err)
      } else {
        that.fd = fd
        that.emit('open', fd)
      }
    })
  }

  function createReadStream (path, options) {
    return new ReadStream(path, options)
  }

  function createWriteStream (path, options) {
    return new WriteStream(path, options)
  }

  var fs$open = fs.open
  fs.open = open
  function open (path, flags, mode, cb) {
    if (typeof mode === 'function')
      cb = mode, mode = null

    return go$open(path, flags, mode, cb)

    function go$open (path, flags, mode, cb) {
      return fs$open(path, flags, mode, function (err, fd) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
          enqueue([go$open, [path, flags, mode, cb]])
        else {
          if (typeof cb === 'function')
            cb.apply(this, arguments)
          retry()
        }
      })
    }
  }

  return fs
}

function enqueue (elem) {
  debug('ENQUEUE', elem[0].name, elem[1])
  queue.push(elem)
}

function retry () {
  var elem = queue.shift()
  if (elem) {
    debug('RETRY', elem[0].name, elem[1])
    elem[0].apply(null, elem[1])
  }
}


/***/ }),

/***/ "./node_modules/graceful-fs/legacy-streams.js":
/*!****************************************************!*\
  !*** ./node_modules/graceful-fs/legacy-streams.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stream = __webpack_require__(/*! stream */ "stream").Stream

module.exports = legacy

function legacy (fs) {
  return {
    ReadStream: ReadStream,
    WriteStream: WriteStream
  }

  function ReadStream (path, options) {
    if (!(this instanceof ReadStream)) return new ReadStream(path, options);

    Stream.call(this);

    var self = this;

    this.path = path;
    this.fd = null;
    this.readable = true;
    this.paused = false;

    this.flags = 'r';
    this.mode = 438; /*=0666*/
    this.bufferSize = 64 * 1024;

    options = options || {};

    // Mixin options into this
    var keys = Object.keys(options);
    for (var index = 0, length = keys.length; index < length; index++) {
      var key = keys[index];
      this[key] = options[key];
    }

    if (this.encoding) this.setEncoding(this.encoding);

    if (this.start !== undefined) {
      if ('number' !== typeof this.start) {
        throw TypeError('start must be a Number');
      }
      if (this.end === undefined) {
        this.end = Infinity;
      } else if ('number' !== typeof this.end) {
        throw TypeError('end must be a Number');
      }

      if (this.start > this.end) {
        throw new Error('start must be <= end');
      }

      this.pos = this.start;
    }

    if (this.fd !== null) {
      process.nextTick(function() {
        self._read();
      });
      return;
    }

    fs.open(this.path, this.flags, this.mode, function (err, fd) {
      if (err) {
        self.emit('error', err);
        self.readable = false;
        return;
      }

      self.fd = fd;
      self.emit('open', fd);
      self._read();
    })
  }

  function WriteStream (path, options) {
    if (!(this instanceof WriteStream)) return new WriteStream(path, options);

    Stream.call(this);

    this.path = path;
    this.fd = null;
    this.writable = true;

    this.flags = 'w';
    this.encoding = 'binary';
    this.mode = 438; /*=0666*/
    this.bytesWritten = 0;

    options = options || {};

    // Mixin options into this
    var keys = Object.keys(options);
    for (var index = 0, length = keys.length; index < length; index++) {
      var key = keys[index];
      this[key] = options[key];
    }

    if (this.start !== undefined) {
      if ('number' !== typeof this.start) {
        throw TypeError('start must be a Number');
      }
      if (this.start < 0) {
        throw new Error('start must be >= zero');
      }

      this.pos = this.start;
    }

    this.busy = false;
    this._queue = [];

    if (this.fd === null) {
      this._open = fs.open;
      this._queue.push([this._open, this.path, this.flags, this.mode, undefined]);
      this.flush();
    }
  }
}


/***/ }),

/***/ "./node_modules/graceful-fs/polyfills.js":
/*!***********************************************!*\
  !*** ./node_modules/graceful-fs/polyfills.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fs = __webpack_require__(/*! ./fs.js */ "./node_modules/graceful-fs/fs.js")
var constants = __webpack_require__(/*! constants */ "constants")

var origCwd = process.cwd
var cwd = null

var platform = process.env.GRACEFUL_FS_PLATFORM || process.platform

process.cwd = function() {
  if (!cwd)
    cwd = origCwd.call(process)
  return cwd
}
try {
  process.cwd()
} catch (er) {}

var chdir = process.chdir
process.chdir = function(d) {
  cwd = null
  chdir.call(process, d)
}

module.exports = patch

function patch (fs) {
  // (re-)implement some things that are known busted or missing.

  // lchmod, broken prior to 0.6.2
  // back-port the fix here.
  if (constants.hasOwnProperty('O_SYMLINK') &&
      process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
    patchLchmod(fs)
  }

  // lutimes implementation, or no-op
  if (!fs.lutimes) {
    patchLutimes(fs)
  }

  // https://github.com/isaacs/node-graceful-fs/issues/4
  // Chown should not fail on einval or eperm if non-root.
  // It should not fail on enosys ever, as this just indicates
  // that a fs doesn't support the intended operation.

  fs.chown = chownFix(fs.chown)
  fs.fchown = chownFix(fs.fchown)
  fs.lchown = chownFix(fs.lchown)

  fs.chmod = chmodFix(fs.chmod)
  fs.fchmod = chmodFix(fs.fchmod)
  fs.lchmod = chmodFix(fs.lchmod)

  fs.chownSync = chownFixSync(fs.chownSync)
  fs.fchownSync = chownFixSync(fs.fchownSync)
  fs.lchownSync = chownFixSync(fs.lchownSync)

  fs.chmodSync = chmodFixSync(fs.chmodSync)
  fs.fchmodSync = chmodFixSync(fs.fchmodSync)
  fs.lchmodSync = chmodFixSync(fs.lchmodSync)

  fs.stat = statFix(fs.stat)
  fs.fstat = statFix(fs.fstat)
  fs.lstat = statFix(fs.lstat)

  fs.statSync = statFixSync(fs.statSync)
  fs.fstatSync = statFixSync(fs.fstatSync)
  fs.lstatSync = statFixSync(fs.lstatSync)

  // if lchmod/lchown do not exist, then make them no-ops
  if (!fs.lchmod) {
    fs.lchmod = function (path, mode, cb) {
      if (cb) process.nextTick(cb)
    }
    fs.lchmodSync = function () {}
  }
  if (!fs.lchown) {
    fs.lchown = function (path, uid, gid, cb) {
      if (cb) process.nextTick(cb)
    }
    fs.lchownSync = function () {}
  }

  // on Windows, A/V software can lock the directory, causing this
  // to fail with an EACCES or EPERM if the directory contains newly
  // created files.  Try again on failure, for up to 60 seconds.

  // Set the timeout this long because some Windows Anti-Virus, such as Parity
  // bit9, may lock files for up to a minute, causing npm package install
  // failures. Also, take care to yield the scheduler. Windows scheduling gives
  // CPU to a busy looping process, which can cause the program causing the lock
  // contention to be starved of CPU by node, so the contention doesn't resolve.
  if (platform === "win32") {
    fs.rename = (function (fs$rename) { return function (from, to, cb) {
      var start = Date.now()
      var backoff = 0;
      fs$rename(from, to, function CB (er) {
        if (er
            && (er.code === "EACCES" || er.code === "EPERM")
            && Date.now() - start < 60000) {
          setTimeout(function() {
            fs.stat(to, function (stater, st) {
              if (stater && stater.code === "ENOENT")
                fs$rename(from, to, CB);
              else
                cb(er)
            })
          }, backoff)
          if (backoff < 100)
            backoff += 10;
          return;
        }
        if (cb) cb(er)
      })
    }})(fs.rename)
  }

  // if read() returns EAGAIN, then just try it again.
  fs.read = (function (fs$read) { return function (fd, buffer, offset, length, position, callback_) {
    var callback
    if (callback_ && typeof callback_ === 'function') {
      var eagCounter = 0
      callback = function (er, _, __) {
        if (er && er.code === 'EAGAIN' && eagCounter < 10) {
          eagCounter ++
          return fs$read.call(fs, fd, buffer, offset, length, position, callback)
        }
        callback_.apply(this, arguments)
      }
    }
    return fs$read.call(fs, fd, buffer, offset, length, position, callback)
  }})(fs.read)

  fs.readSync = (function (fs$readSync) { return function (fd, buffer, offset, length, position) {
    var eagCounter = 0
    while (true) {
      try {
        return fs$readSync.call(fs, fd, buffer, offset, length, position)
      } catch (er) {
        if (er.code === 'EAGAIN' && eagCounter < 10) {
          eagCounter ++
          continue
        }
        throw er
      }
    }
  }})(fs.readSync)
}

function patchLchmod (fs) {
  fs.lchmod = function (path, mode, callback) {
    fs.open( path
           , constants.O_WRONLY | constants.O_SYMLINK
           , mode
           , function (err, fd) {
      if (err) {
        if (callback) callback(err)
        return
      }
      // prefer to return the chmod error, if one occurs,
      // but still try to close, and report closing errors if they occur.
      fs.fchmod(fd, mode, function (err) {
        fs.close(fd, function(err2) {
          if (callback) callback(err || err2)
        })
      })
    })
  }

  fs.lchmodSync = function (path, mode) {
    var fd = fs.openSync(path, constants.O_WRONLY | constants.O_SYMLINK, mode)

    // prefer to return the chmod error, if one occurs,
    // but still try to close, and report closing errors if they occur.
    var threw = true
    var ret
    try {
      ret = fs.fchmodSync(fd, mode)
      threw = false
    } finally {
      if (threw) {
        try {
          fs.closeSync(fd)
        } catch (er) {}
      } else {
        fs.closeSync(fd)
      }
    }
    return ret
  }
}

function patchLutimes (fs) {
  if (constants.hasOwnProperty("O_SYMLINK")) {
    fs.lutimes = function (path, at, mt, cb) {
      fs.open(path, constants.O_SYMLINK, function (er, fd) {
        if (er) {
          if (cb) cb(er)
          return
        }
        fs.futimes(fd, at, mt, function (er) {
          fs.close(fd, function (er2) {
            if (cb) cb(er || er2)
          })
        })
      })
    }

    fs.lutimesSync = function (path, at, mt) {
      var fd = fs.openSync(path, constants.O_SYMLINK)
      var ret
      var threw = true
      try {
        ret = fs.futimesSync(fd, at, mt)
        threw = false
      } finally {
        if (threw) {
          try {
            fs.closeSync(fd)
          } catch (er) {}
        } else {
          fs.closeSync(fd)
        }
      }
      return ret
    }

  } else {
    fs.lutimes = function (_a, _b, _c, cb) { if (cb) process.nextTick(cb) }
    fs.lutimesSync = function () {}
  }
}

function chmodFix (orig) {
  if (!orig) return orig
  return function (target, mode, cb) {
    return orig.call(fs, target, mode, function (er) {
      if (chownErOk(er)) er = null
      if (cb) cb.apply(this, arguments)
    })
  }
}

function chmodFixSync (orig) {
  if (!orig) return orig
  return function (target, mode) {
    try {
      return orig.call(fs, target, mode)
    } catch (er) {
      if (!chownErOk(er)) throw er
    }
  }
}


function chownFix (orig) {
  if (!orig) return orig
  return function (target, uid, gid, cb) {
    return orig.call(fs, target, uid, gid, function (er) {
      if (chownErOk(er)) er = null
      if (cb) cb.apply(this, arguments)
    })
  }
}

function chownFixSync (orig) {
  if (!orig) return orig
  return function (target, uid, gid) {
    try {
      return orig.call(fs, target, uid, gid)
    } catch (er) {
      if (!chownErOk(er)) throw er
    }
  }
}


function statFix (orig) {
  if (!orig) return orig
  // Older versions of Node erroneously returned signed integers for
  // uid + gid.
  return function (target, cb) {
    return orig.call(fs, target, function (er, stats) {
      if (!stats) return cb.apply(this, arguments)
      if (stats.uid < 0) stats.uid += 0x100000000
      if (stats.gid < 0) stats.gid += 0x100000000
      if (cb) cb.apply(this, arguments)
    })
  }
}

function statFixSync (orig) {
  if (!orig) return orig
  // Older versions of Node erroneously returned signed integers for
  // uid + gid.
  return function (target) {
    var stats = orig.call(fs, target)
    if (stats.uid < 0) stats.uid += 0x100000000
    if (stats.gid < 0) stats.gid += 0x100000000
    return stats;
  }
}

// ENOSYS means that the fs doesn't support the op. Just ignore
// that, because it doesn't matter.
//
// if there's no getuid, or if getuid() is something other
// than 0, and the error is EINVAL or EPERM, then just ignore
// it.
//
// This specific case is a silent failure in cp, install, tar,
// and most other unix tools that manage permissions.
//
// When running as root, or if other types of errors are
// encountered, then it's strict.
function chownErOk (er) {
  if (!er)
    return true

  if (er.code === "ENOSYS")
    return true

  var nonroot = !process.getuid || process.getuid() !== 0
  if (nonroot) {
    if (er.code === "EINVAL" || er.code === "EPERM")
      return true
  }

  return false
}


/***/ }),

/***/ "./node_modules/has-flag/index.js":
/*!****************************************!*\
  !*** ./node_modules/has-flag/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = (flag, argv) => {
	argv = argv || process.argv;
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const pos = argv.indexOf(prefix + flag);
	const terminatorPos = argv.indexOf('--');
	return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};


/***/ }),

/***/ "./node_modules/imurmurhash/imurmurhash.js":
/*!*************************************************!*\
  !*** ./node_modules/imurmurhash/imurmurhash.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @preserve
 * JS Implementation of incremental MurmurHash3 (r150) (as of May 10, 2013)
 *
 * @author <a href="mailto:jensyt@gmail.com">Jens Taylor</a>
 * @see http://github.com/homebrewing/brauhaus-diff
 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
 * @see http://github.com/garycourt/murmurhash-js
 * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
 * @see http://sites.google.com/site/murmurhash/
 */
(function(){
    var cache;

    // Call this function without `new` to use the cached object (good for
    // single-threaded environments), or with `new` to create a new object.
    //
    // @param {string} key A UTF-16 or ASCII string
    // @param {number} seed An optional positive integer
    // @return {object} A MurmurHash3 object for incremental hashing
    function MurmurHash3(key, seed) {
        var m = this instanceof MurmurHash3 ? this : cache;
        m.reset(seed)
        if (typeof key === 'string' && key.length > 0) {
            m.hash(key);
        }

        if (m !== this) {
            return m;
        }
    };

    // Incrementally add a string to this hash
    //
    // @param {string} key A UTF-16 or ASCII string
    // @return {object} this
    MurmurHash3.prototype.hash = function(key) {
        var h1, k1, i, top, len;

        len = key.length;
        this.len += len;

        k1 = this.k1;
        i = 0;
        switch (this.rem) {
            case 0: k1 ^= len > i ? (key.charCodeAt(i++) & 0xffff) : 0;
            case 1: k1 ^= len > i ? (key.charCodeAt(i++) & 0xffff) << 8 : 0;
            case 2: k1 ^= len > i ? (key.charCodeAt(i++) & 0xffff) << 16 : 0;
            case 3:
                k1 ^= len > i ? (key.charCodeAt(i) & 0xff) << 24 : 0;
                k1 ^= len > i ? (key.charCodeAt(i++) & 0xff00) >> 8 : 0;
        }

        this.rem = (len + this.rem) & 3; // & 3 is same as % 4
        len -= this.rem;
        if (len > 0) {
            h1 = this.h1;
            while (1) {
                k1 = (k1 * 0x2d51 + (k1 & 0xffff) * 0xcc9e0000) & 0xffffffff;
                k1 = (k1 << 15) | (k1 >>> 17);
                k1 = (k1 * 0x3593 + (k1 & 0xffff) * 0x1b870000) & 0xffffffff;

                h1 ^= k1;
                h1 = (h1 << 13) | (h1 >>> 19);
                h1 = (h1 * 5 + 0xe6546b64) & 0xffffffff;

                if (i >= len) {
                    break;
                }

                k1 = ((key.charCodeAt(i++) & 0xffff)) ^
                     ((key.charCodeAt(i++) & 0xffff) << 8) ^
                     ((key.charCodeAt(i++) & 0xffff) << 16);
                top = key.charCodeAt(i++);
                k1 ^= ((top & 0xff) << 24) ^
                      ((top & 0xff00) >> 8);
            }

            k1 = 0;
            switch (this.rem) {
                case 3: k1 ^= (key.charCodeAt(i + 2) & 0xffff) << 16;
                case 2: k1 ^= (key.charCodeAt(i + 1) & 0xffff) << 8;
                case 1: k1 ^= (key.charCodeAt(i) & 0xffff);
            }

            this.h1 = h1;
        }

        this.k1 = k1;
        return this;
    };

    // Get the result of this hash
    //
    // @return {number} The 32-bit hash
    MurmurHash3.prototype.result = function() {
        var k1, h1;
        
        k1 = this.k1;
        h1 = this.h1;

        if (k1 > 0) {
            k1 = (k1 * 0x2d51 + (k1 & 0xffff) * 0xcc9e0000) & 0xffffffff;
            k1 = (k1 << 15) | (k1 >>> 17);
            k1 = (k1 * 0x3593 + (k1 & 0xffff) * 0x1b870000) & 0xffffffff;
            h1 ^= k1;
        }

        h1 ^= this.len;

        h1 ^= h1 >>> 16;
        h1 = (h1 * 0xca6b + (h1 & 0xffff) * 0x85eb0000) & 0xffffffff;
        h1 ^= h1 >>> 13;
        h1 = (h1 * 0xae35 + (h1 & 0xffff) * 0xc2b20000) & 0xffffffff;
        h1 ^= h1 >>> 16;

        return h1 >>> 0;
    };

    // Reset the hash object for reuse
    //
    // @param {number} seed An optional positive integer
    MurmurHash3.prototype.reset = function(seed) {
        this.h1 = typeof seed === 'number' ? seed : 0;
        this.rem = this.k1 = this.len = 0;
        return this;
    };

    // A cached object to use. This can be safely used if you're in a single-
    // threaded environment, otherwise you need to create new hashes to use.
    cache = new MurmurHash3();

    if (true) {
        module.exports = MurmurHash3;
    } else {}
}());


/***/ }),

/***/ "./node_modules/is-obj/index.js":
/*!**************************************!*\
  !*** ./node_modules/is-obj/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (x) {
	var type = typeof x;
	return x !== null && (type === 'object' || type === 'function');
};


/***/ }),

/***/ "./node_modules/locate-path/index.js":
/*!*******************************************!*\
  !*** ./node_modules/locate-path/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const path = __webpack_require__(/*! path */ "path");
const pathExists = __webpack_require__(/*! path-exists */ "./node_modules/locate-path/node_modules/path-exists/index.js");
const pLocate = __webpack_require__(/*! p-locate */ "./node_modules/p-locate/index.js");

module.exports = (iterable, opts) => {
	opts = Object.assign({
		cwd: process.cwd()
	}, opts);

	return pLocate(iterable, el => pathExists(path.resolve(opts.cwd, el)), opts);
};

module.exports.sync = (iterable, opts) => {
	opts = Object.assign({
		cwd: process.cwd()
	}, opts);

	for (const el of iterable) {
		if (pathExists.sync(path.resolve(opts.cwd, el))) {
			return el;
		}
	}
};


/***/ }),

/***/ "./node_modules/locate-path/node_modules/path-exists/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/locate-path/node_modules/path-exists/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const fs = __webpack_require__(/*! fs */ "fs");

module.exports = fp => new Promise(resolve => {
	fs.access(fp, err => {
		resolve(!err);
	});
});

module.exports.sync = fp => {
	try {
		fs.accessSync(fp);
		return true;
	} catch (err) {
		return false;
	}
};


/***/ }),

/***/ "./node_modules/make-dir/index.js":
/*!****************************************!*\
  !*** ./node_modules/make-dir/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const fs = __webpack_require__(/*! fs */ "fs");
const path = __webpack_require__(/*! path */ "path");
const pify = __webpack_require__(/*! pify */ "./node_modules/make-dir/node_modules/pify/index.js");

const defaults = {
	mode: 0o777 & (~process.umask()),
	fs
};

// https://github.com/nodejs/node/issues/8987
// https://github.com/libuv/libuv/pull/1088
const checkPath = pth => {
	if (process.platform === 'win32') {
		const pathHasInvalidWinCharacters = /[<>:"|?*]/.test(pth.replace(path.parse(pth).root, ''));

		if (pathHasInvalidWinCharacters) {
			const err = new Error(`Path contains invalid characters: ${pth}`);
			err.code = 'EINVAL';
			throw err;
		}
	}
};

module.exports = (input, opts) => Promise.resolve().then(() => {
	checkPath(input);
	opts = Object.assign({}, defaults, opts);
	const fsP = pify(opts.fs);

	const make = pth => {
		return fsP.mkdir(pth, opts.mode)
			.then(() => pth)
			.catch(err => {
				if (err.code === 'ENOENT') {
					if (err.message.includes('null bytes') || path.dirname(pth) === pth) {
						throw err;
					}

					return make(path.dirname(pth)).then(() => make(pth));
				}

				return fsP.stat(pth)
					.then(stats => stats.isDirectory() ? pth : Promise.reject())
					.catch(() => {
						throw err;
					});
			});
	};

	return make(path.resolve(input));
});

module.exports.sync = (input, opts) => {
	checkPath(input);
	opts = Object.assign({}, defaults, opts);

	const make = pth => {
		try {
			opts.fs.mkdirSync(pth, opts.mode);
		} catch (err) {
			if (err.code === 'ENOENT') {
				if (err.message.includes('null bytes') || path.dirname(pth) === pth) {
					throw err;
				}

				make(path.dirname(pth));
				return make(pth);
			}

			try {
				if (!opts.fs.statSync(pth).isDirectory()) {
					throw new Error('The path is not a directory');
				}
			} catch (_) {
				throw err;
			}
		}

		return pth;
	};

	return make(path.resolve(input));
};


/***/ }),

/***/ "./node_modules/make-dir/node_modules/pify/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/make-dir/node_modules/pify/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const processFn = (fn, opts) => function () {
	const P = opts.promiseModule;
	const args = new Array(arguments.length);

	for (let i = 0; i < arguments.length; i++) {
		args[i] = arguments[i];
	}

	return new P((resolve, reject) => {
		if (opts.errorFirst) {
			args.push(function (err, result) {
				if (opts.multiArgs) {
					const results = new Array(arguments.length - 1);

					for (let i = 1; i < arguments.length; i++) {
						results[i - 1] = arguments[i];
					}

					if (err) {
						results.unshift(err);
						reject(results);
					} else {
						resolve(results);
					}
				} else if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			});
		} else {
			args.push(function (result) {
				if (opts.multiArgs) {
					const results = new Array(arguments.length - 1);

					for (let i = 0; i < arguments.length; i++) {
						results[i] = arguments[i];
					}

					resolve(results);
				} else {
					resolve(result);
				}
			});
		}

		fn.apply(this, args);
	});
};

module.exports = (obj, opts) => {
	opts = Object.assign({
		exclude: [/.+(Sync|Stream)$/],
		errorFirst: true,
		promiseModule: Promise
	}, opts);

	const filter = key => {
		const match = pattern => typeof pattern === 'string' ? key === pattern : pattern.test(key);
		return opts.include ? opts.include.some(match) : !opts.exclude.some(match);
	};

	let ret;
	if (typeof obj === 'function') {
		ret = function () {
			if (opts.excludeMain) {
				return obj.apply(this, arguments);
			}

			return processFn(obj, opts).apply(this, arguments);
		};
	} else {
		ret = Object.create(Object.getPrototypeOf(obj));
	}

	for (const key in obj) { // eslint-disable-line guard-for-in
		const x = obj[key];
		ret[key] = typeof x === 'function' && filter(key) ? processFn(x, opts) : x;
	}

	return ret;
};


/***/ }),

/***/ "./node_modules/music-metadata/lib/ParserFactory.js":
/*!**********************************************************!*\
  !*** ./node_modules/music-metadata/lib/ParserFactory.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APEv2Parser_1 = __webpack_require__(/*! ./apev2/APEv2Parser */ "./node_modules/music-metadata/lib/apev2/APEv2Parser.js");
var AsfParser_1 = __webpack_require__(/*! ./asf/AsfParser */ "./node_modules/music-metadata/lib/asf/AsfParser.js");
var FlacParser_1 = __webpack_require__(/*! ./flac/FlacParser */ "./node_modules/music-metadata/lib/flac/FlacParser.js");
var MP4Parser_1 = __webpack_require__(/*! ./mp4/MP4Parser */ "./node_modules/music-metadata/lib/mp4/MP4Parser.js");
var OggParser_1 = __webpack_require__(/*! ./ogg/OggParser */ "./node_modules/music-metadata/lib/ogg/OggParser.js");
var strtok3 = __webpack_require__(/*! strtok3 */ "./node_modules/strtok3/lib/index.js");
var path = __webpack_require__(/*! path */ "path");
var AiffParser_1 = __webpack_require__(/*! ./aiff/AiffParser */ "./node_modules/music-metadata/lib/aiff/AiffParser.js");
var RiffParser_1 = __webpack_require__(/*! ./riff/RiffParser */ "./node_modules/music-metadata/lib/riff/RiffParser.js");
var WavPackParser_1 = __webpack_require__(/*! ./wavpack/WavPackParser */ "./node_modules/music-metadata/lib/wavpack/WavPackParser.js");
var MpegParser_1 = __webpack_require__(/*! ./mpeg/MpegParser */ "./node_modules/music-metadata/lib/mpeg/MpegParser.js");
var ParserFactory = /** @class */ (function () {
    function ParserFactory() {
        // ToDo: expose warnings to API
        this.warning = [];
    }
    /**
     * Extract metadata from the given audio file
     * @param filePath File path of the audio file to parse
     * @param opts
     *   .fileSize=true  Return filesize
     *   .native=true    Will return original header in result
     * @returns {Promise<INativeAudioMetadata>}
     */
    ParserFactory.parseFile = function (filePath, opts) {
        if (opts === void 0) { opts = {}; }
        return strtok3.fromFile(filePath).then(function (fileTokenizer) {
            var parser = ParserFactory.getParserForExtension(filePath);
            if (parser) {
                return parser.parse(fileTokenizer, opts).then(function (metadata) {
                    return fileTokenizer.close().then(function () {
                        return metadata;
                    });
                }).catch(function (err) {
                    return fileTokenizer.close().then(function () {
                        throw err;
                    });
                });
            }
            else {
                throw new Error('No parser found for extension: ' + path.extname(filePath));
            }
        });
    };
    /**
     * Parse metadata from stream
     * @param stream Node stream
     * @param mimeType The mime-type, e.g. "audio/mpeg", extension e.g. ".mp3" or filename. This is used to redirect to the correct parser.
     * @param opts Parsing options
     * @returns {Promise<INativeAudioMetadata>}
     */
    ParserFactory.parseStream = function (stream, mimeType, opts) {
        if (opts === void 0) { opts = {}; }
        return strtok3.fromStream(stream).then(function (tokenizer) {
            if (!tokenizer.fileSize && opts.fileSize) {
                tokenizer.fileSize = opts.fileSize;
            }
            // Interpret mimeType as extension
            var parser = ParserFactory.getParserForMimeType(mimeType) || ParserFactory.getParserForExtension(mimeType);
            if (parser === null) {
                // No MIME-type mapping found
                throw new Error("MIME-type or extension not supported:" + mimeType);
            }
            // Parser found, execute parser
            return parser.parse(tokenizer, opts);
        });
    };
    /**
     * @param filePath Path, filename or extension to audio file
     * @return ITokenParser if extension is supported; otherwise false
     */
    ParserFactory.getParserForExtension = function (filePath) {
        var extension = path.extname(filePath).toLocaleLowerCase() || filePath;
        switch (extension) {
            case ".mp2":
            case ".mp3":
            case ".m2a":
                return new MpegParser_1.MpegParser();
            case ".ape":
                return new APEv2Parser_1.APEv2Parser();
            case ".aac":
            case ".mp4":
            case ".m4a":
            case ".m4b":
            case ".m4pa":
            case ".m4v":
            case ".m4r":
            case ".3gp":
                return new MP4Parser_1.MP4Parser();
            case ".wma":
            case ".wmv":
            case ".asf":
                return new AsfParser_1.AsfParser();
            case ".flac":
                return new FlacParser_1.FlacParser();
            case ".ogg":
            case ".ogv":
            case ".oga":
            case ".ogx":
            case ".opus":// recommended filename extension for Ogg Opus files
                return new OggParser_1.OggParser();
            case ".aif":
            case ".aiff":
            case ".aifc":
                return new AiffParser_1.AIFFParser();
            case ".wav":
                return new RiffParser_1.WavePcmParser();
            case ".wv":
            case ".wvp":
                return new WavPackParser_1.WavPackParser();
            default:
                return false;
        }
    };
    /**
     * @param {string} mimeType MIME-Type, extension, path or filename
     * @returns ITokenParser if MIME-type is supported; otherwise false
     */
    ParserFactory.getParserForMimeType = function (mimeType) {
        switch (mimeType) {
            case "audio/mpeg":
                return new MpegParser_1.MpegParser(); // ToDo: handle ID1 header as well
            case "audio/x-monkeys-audio":
                return new APEv2Parser_1.APEv2Parser();
            case "audio/aac":
            case "audio/aacp":
            case "audio/mp4":
            case "audio/x-aac":
                return new MP4Parser_1.MP4Parser();
            case "video/x-ms-asf":
            case "audio/x-ms-wma":
                return new AsfParser_1.AsfParser();
            case "audio/flac":
            case "audio/x-flac":
                return new FlacParser_1.FlacParser();
            case "audio/ogg": // RFC 7845
            case "application/ogg":
            case "video/ogg":
                return new OggParser_1.OggParser();
            case "audio/aiff":
            case "audio/x-aif":
            case "audio/x-aifc":
                return new AiffParser_1.AIFFParser();
            case "audio/wav":
            case "audio/wave":
                return new RiffParser_1.WavePcmParser();
            case "audio/x-wavpack":
                return new WavPackParser_1.WavPackParser();
            default:
                return false;
        }
    };
    return ParserFactory;
}());
exports.ParserFactory = ParserFactory;


/***/ }),

/***/ "./node_modules/music-metadata/lib/aiff/AiffParser.js":
/*!************************************************************!*\
  !*** ./node_modules/music-metadata/lib/aiff/AiffParser.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var strtok3 = __webpack_require__(/*! strtok3 */ "./node_modules/strtok3/lib/index.js");
var Token = __webpack_require__(/*! token-types */ "./node_modules/token-types/lib/index.js");
var Chunk = __webpack_require__(/*! ./Chunk */ "./node_modules/music-metadata/lib/aiff/Chunk.js");
var stream_1 = __webpack_require__(/*! stream */ "stream");
var ID3v2Parser_1 = __webpack_require__(/*! ../id3v2/ID3v2Parser */ "./node_modules/music-metadata/lib/id3v2/ID3v2Parser.js");
var FourCC_1 = __webpack_require__(/*! ../common/FourCC */ "./node_modules/music-metadata/lib/common/FourCC.js");
/**
 * AIFF - Audio Interchange File Format
 *
 * Ref:
 *  http://www.onicos.com/staff/iz/formats/aiff.html
 *  http://muratnkonar.com/aiff/index.html
 */
var AIFFParser = /** @class */ (function () {
    function AIFFParser() {
        this.metadata = {
            format: {
                dataformat: "AIFF",
                tagTypes: []
            },
            native: {}
        };
    }
    AIFFParser.prototype.parse = function (tokenizer, options) {
        var _this = this;
        this.tokenizer = tokenizer;
        this.options = options;
        return this.tokenizer.readToken(Chunk.Header)
            .then(function (header) {
            if (header.chunkID !== 'FORM')
                throw new Error("Invalid Chunk-ID, expected 'FORM'"); // Not AIFF format
            return _this.tokenizer.readToken(FourCC_1.FourCcToken).then(function (type) {
                _this.metadata.format.dataformat = type;
            }).then(function () {
                return _this.readChunk().then(function () { return _this.metadata; });
            });
        });
    };
    AIFFParser.prototype.readChunk = function () {
        var _this = this;
        return this.tokenizer.readToken(Chunk.Header)
            .then(function (header) {
            switch (header.chunkID) {
                case 'COMM':// The Common Chunk
                    return _this.tokenizer.readToken(new Chunk.Common(header))
                        .then(function (common) {
                        _this.metadata.format.bitsPerSample = common.sampleSize;
                        _this.metadata.format.sampleRate = common.sampleRate;
                        _this.metadata.format.numberOfChannels = common.numChannels;
                        _this.metadata.format.numberOfSamples = common.numSampleFrames;
                        _this.metadata.format.duration = _this.metadata.format.numberOfSamples / _this.metadata.format.sampleRate;
                    });
                case 'ID3 ':// ID3-meta-data
                    return _this.tokenizer.readToken(new Token.BufferType(header.size))
                        .then(function (id3_data) {
                        var id3stream = new ID3Stream(id3_data);
                        return strtok3.fromStream(id3stream).then(function (rst) {
                            return ID3v2Parser_1.ID3v2Parser.getInstance().parse(_this.metadata, rst, _this.options);
                        });
                    });
                case 'SSND': // Sound Data Chunk
                default:
                    return _this.tokenizer.ignore(header.size);
            }
        }).then(function () { return _this.readChunk(); }).catch(function (err) {
            if (err.message !== strtok3.endOfFile) {
                throw err;
            }
        });
    };
    return AIFFParser;
}());
exports.AIFFParser = AIFFParser;
var ID3Stream = /** @class */ (function (_super) {
    __extends(ID3Stream, _super);
    function ID3Stream(buf) {
        var _this = _super.call(this) || this;
        _this.buf = buf;
        return _this;
    }
    ID3Stream.prototype._read = function () {
        this.push(this.buf);
        this.push(null); // push the EOF-signaling `null` chunk
    };
    return ID3Stream;
}(stream_1.Readable));


/***/ }),

/***/ "./node_modules/music-metadata/lib/aiff/Chunk.js":
/*!*******************************************************!*\
  !*** ./node_modules/music-metadata/lib/aiff/Chunk.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var assert = __webpack_require__(/*! assert */ "assert");
var FourCC_1 = __webpack_require__(/*! ../common/FourCC */ "./node_modules/music-metadata/lib/common/FourCC.js");
/**
 * Common AIFF chunk header
 */
exports.Header = {
    len: 8,
    get: function (buf, off) {
        return {
            // Group-ID
            chunkID: FourCC_1.FourCcToken.get(buf, off),
            // Size
            size: buf.readUInt32BE(off + 4)
        };
    }
};
var Common = /** @class */ (function () {
    function Common(header) {
        assert.ok(header.size >= 18, "chunkSize should always be at least 18");
        this.len = header.size;
    }
    Common.prototype.get = function (buf, off) {
        return {
            numChannels: buf.readUInt16BE(off),
            numSampleFrames: buf.readUInt32BE(off + 2),
            sampleSize: buf.readUInt16BE(off + 6),
            // see: https://cycling74.com/forums/aiffs-80-bit-sample-rate-value
            sampleRate: buf.readUInt16BE(off + 8 + 2)
        };
    };
    return Common;
}());
exports.Common = Common;


/***/ }),

/***/ "./node_modules/music-metadata/lib/apev2/APEv2Parser.js":
/*!**************************************************************!*\
  !*** ./node_modules/music-metadata/lib/apev2/APEv2Parser.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __webpack_require__(/*! ../common/Util */ "./node_modules/music-metadata/lib/common/Util.js");
var strtok3_1 = __webpack_require__(/*! strtok3 */ "./node_modules/strtok3/lib/index.js");
var Token = __webpack_require__(/*! token-types */ "./node_modules/token-types/lib/index.js");
var FourCC_1 = __webpack_require__(/*! ../common/FourCC */ "./node_modules/music-metadata/lib/common/FourCC.js");
var DataType;
(function (DataType) {
    DataType[DataType["text_utf8"] = 0] = "text_utf8";
    DataType[DataType["binary"] = 1] = "binary";
    DataType[DataType["external_info"] = 2] = "external_info";
    DataType[DataType["reserved"] = 3] = "reserved";
})(DataType || (DataType = {}));
var Structure = /** @class */ (function () {
    function Structure() {
    }
    Structure.parseTagFlags = function (flags) {
        return {
            containsHeader: Structure.isBitSet(flags, 31),
            containsFooter: Structure.isBitSet(flags, 30),
            isHeader: Structure.isBitSet(flags, 31),
            readOnly: Structure.isBitSet(flags, 0),
            dataType: (flags & 6) >> 1
        };
    };
    /**
     * @param num {number}
     * @param bit 0 is least significant bit (LSB)
     * @return {boolean} true if bit is 1; otherwise false
     */
    Structure.isBitSet = function (num, bit) {
        return (num & 1 << bit) !== 0;
    };
    /**
     * APE_DESCRIPTOR: defines the sizes (and offsets) of all the pieces, as well as the MD5 checksum
     */
    Structure.DescriptorParser = {
        len: 52,
        get: function (buf, off) {
            return {
                // should equal 'MAC '
                ID: FourCC_1.FourCcToken.get(buf, off),
                // versionIndex number * 1000 (3.81 = 3810) (remember that 4-byte alignment causes this to take 4-bytes)
                version: Token.UINT32_LE.get(buf, off + 4) / 1000,
                // the number of descriptor bytes (allows later expansion of this header)
                descriptorBytes: Token.UINT32_LE.get(buf, off + 8),
                // the number of header APE_HEADER bytes
                headerBytes: Token.UINT32_LE.get(buf, off + 12),
                // the number of header APE_HEADER bytes
                seekTableBytes: Token.UINT32_LE.get(buf, off + 16),
                // the number of header data bytes (from original file)
                headerDataBytes: Token.UINT32_LE.get(buf, off + 20),
                // the number of bytes of APE frame data
                apeFrameDataBytes: Token.UINT32_LE.get(buf, off + 24),
                // the high order number of APE frame data bytes
                apeFrameDataBytesHigh: Token.UINT32_LE.get(buf, off + 28),
                // the terminating data of the file (not including tag data)
                terminatingDataBytes: Token.UINT32_LE.get(buf, off + 32),
                // the MD5 hash of the file (see notes for usage... it's a littly tricky)
                fileMD5: new Token.BufferType(16).get(buf, off + 36)
            };
        }
    };
    /**
     * APE_HEADER: describes all of the necessary information about the APE file
     */
    Structure.Header = {
        len: 24,
        get: function (buf, off) {
            return {
                // the compression level (see defines I.E. COMPRESSION_LEVEL_FAST)
                compressionLevel: Token.UINT16_LE.get(buf, off),
                // any format flags (for future use)
                formatFlags: Token.UINT16_LE.get(buf, off + 2),
                // the number of audio blocks in one frame
                blocksPerFrame: Token.UINT32_LE.get(buf, off + 4),
                // the number of audio blocks in the final frame
                finalFrameBlocks: Token.UINT32_LE.get(buf, off + 8),
                // the total number of frames
                totalFrames: Token.UINT32_LE.get(buf, off + 12),
                // the bits per sample (typically 16)
                bitsPerSample: Token.UINT16_LE.get(buf, off + 16),
                // the number of channels (1 or 2)
                channel: Token.UINT16_LE.get(buf, off + 18),
                // the sample rate (typically 44100)
                sampleRate: Token.UINT32_LE.get(buf, off + 20)
            };
        }
    };
    /**
     * TAG: describes all the properties of the file [optional]
     */
    Structure.TagFooter = {
        len: 32,
        get: function (buf, off) {
            return {
                // should equal 'APETAGEX'
                ID: new Token.StringType(8, "ascii").get(buf, off),
                // equals CURRENT_APE_TAG_VERSION
                version: Token.UINT32_LE.get(buf, off + 8),
                // the complete size of the tag, including this footer (excludes header)
                size: Token.UINT32_LE.get(buf, off + 12),
                // the number of fields in the tag
                fields: Token.UINT32_LE.get(buf, off + 16),
                // reserved for later use (must be zero)
                reserved: new Token.BufferType(12).get(buf, off + 20) // ToDo: what is this???
            };
        }
    };
    Structure.TagField = function (footer) {
        return new Token.BufferType(footer.size - Structure.TagFooter.len);
    };
    return Structure;
}());
var APEv2Parser = /** @class */ (function () {
    function APEv2Parser() {
        this.type = "APEv2"; // ToDo: versionIndex should be made dynamic, APE may also contain ID3
        this.ape = {};
    }
    /**
     * Calculate the media file duration
     * @param ah ApeHeader
     * @return {number} duration in seconds
     */
    APEv2Parser.calculateDuration = function (ah) {
        var duration = ah.totalFrames > 1 ? ah.blocksPerFrame * (ah.totalFrames - 1) : 0;
        duration += ah.finalFrameBlocks;
        return duration / ah.sampleRate;
    };
    APEv2Parser.parseFooter = function (tokenizer, options) {
        return tokenizer.readToken(Structure.TagFooter).then(function (footer) {
            if (footer.ID !== "APETAGEX") {
                throw new Error("Expected footer to start with APETAGEX ");
            }
            return tokenizer.readToken(Structure.TagField(footer)).then(function (tags) {
                return APEv2Parser.parseTags(footer, tags, !options.skipCovers);
            });
        });
    };
    // ToDo: public ???
    APEv2Parser.parseTags = function (footer, buffer, includeCovers) {
        var offset = 0;
        var tags = [];
        for (var i = 0; i < footer.fields; i++) {
            var size = Token.UINT32_LE.get(buffer, offset);
            offset += 4;
            var flags = Structure.parseTagFlags(Token.UINT32_LE.get(buffer, offset));
            offset += 4;
            var zero = Util_1.default.findZero(buffer, offset, buffer.length);
            var key = buffer.toString("ascii", offset, zero);
            offset = zero + 1;
            switch (flags.dataType) {
                case DataType.text_utf8: {
                    var value = buffer.toString("utf8", offset, offset += size);
                    var values = value.split(/\x00/g);
                    /*jshint loopfunc:true */
                    for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                        var val = values_1[_i];
                        tags.push({ id: key, value: val });
                    }
                    break;
                }
                case DataType.binary:// binary (probably artwork)
                    if (includeCovers && (key === "Cover Art (Front)" || key === "Cover Art (Back)")) {
                        var picData = buffer.slice(offset, offset + size);
                        var off = 0;
                        zero = Util_1.default.findZero(picData, off, picData.length);
                        var description = picData.toString("utf8", off, zero);
                        off = zero + 1;
                        var picture = {
                            description: description,
                            data: new Buffer(picData.slice(off))
                        };
                        offset += size;
                        tags.push({ id: key, value: picture });
                    }
                    break;
                default:
                    throw new Error("Unexpected data-type: " + flags.dataType);
            }
        }
        return tags;
    };
    APEv2Parser.prototype.parse = function (tokenizer, options) {
        var _this = this;
        this.tokenizer = tokenizer;
        this.options = options;
        return this.tokenizer.readToken(Structure.DescriptorParser)
            .then(function (descriptor) {
            if (descriptor.ID !== "MAC ") {
                throw new Error("Expected MAC on beginning of file"); // ToDo: strip/parse JUNK
            }
            _this.ape.descriptor = descriptor;
            var lenExp = descriptor.descriptorBytes - Structure.DescriptorParser.len;
            if (lenExp > 0) {
                return _this.parseDescriptorExpansion(lenExp);
            }
            else {
                return _this.parseHeader();
            }
        }).then(function (header) {
            return _this.tokenizer.readToken(new strtok3_1.IgnoreType(header.forwardBytes)).then(function () {
                return APEv2Parser.parseFooter(tokenizer, options).then(function (tags) {
                    return {
                        format: header.format,
                        native: {
                            APEv2: tags
                        }
                    };
                });
            });
        });
    };
    APEv2Parser.prototype.parseDescriptorExpansion = function (lenExp) {
        var _this = this;
        return this.tokenizer.readToken(new strtok3_1.IgnoreType(lenExp)).then(function () {
            return _this.parseHeader();
        });
    };
    APEv2Parser.prototype.parseHeader = function () {
        var _this = this;
        return this.tokenizer.readToken(Structure.Header).then(function (header) {
            return {
                format: {
                    lossless: true,
                    headerType: _this.type,
                    bitsPerSample: header.bitsPerSample,
                    sampleRate: header.sampleRate,
                    numberOfChannels: header.channel,
                    duration: APEv2Parser.calculateDuration(header)
                },
                forwardBytes: _this.ape.descriptor.seekTableBytes + _this.ape.descriptor.headerDataBytes +
                    _this.ape.descriptor.apeFrameDataBytes + _this.ape.descriptor.terminatingDataBytes
            };
        });
    };
    return APEv2Parser;
}());
exports.APEv2Parser = APEv2Parser;


/***/ }),

/***/ "./node_modules/music-metadata/lib/apev2/APEv2TagMapper.js":
/*!*****************************************************************!*\
  !*** ./node_modules/music-metadata/lib/apev2/APEv2TagMapper.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GenericTagMapper_1 = __webpack_require__(/*! ../common/GenericTagMapper */ "./node_modules/music-metadata/lib/common/GenericTagMapper.js");
/**
 * ID3v2.2 tag mappings
 */
var apev2TagMap = {
    Title: 'title',
    Artist: 'artist',
    Artists: 'artists',
    'Album Artist': 'albumartist',
    Album: 'album',
    Year: 'date',
    Originalyear: 'originalyear',
    Originaldate: 'originaldate',
    Comment: 'comment',
    Track: 'track',
    Disc: 'disk',
    DISCNUMBER: 'disk',
    Genre: 'genre',
    'Cover Art (Front)': 'picture',
    'Cover Art (Back)': 'picture',
    Composer: 'composer',
    Lyrics: 'lyrics',
    ALBUMSORT: 'albumsort',
    TITLESORT: 'titlesort',
    WORK: 'work',
    ARTISTSORT: 'artistsort',
    ALBUMARTISTSORT: 'albumartistsort',
    COMPOSERSORT: 'composersort',
    Lyricist: 'lyricist',
    Writer: 'writer',
    Conductor: 'conductor',
    // 'Performer=artist (instrument)': 'performer:instrument',
    MixArtist: 'remixer',
    Arranger: 'arranger',
    Engineer: 'engineer',
    Producer: 'producer',
    DJMixer: 'djmixer',
    Mixer: 'mixer',
    Label: 'label',
    Grouping: 'grouping',
    Subtitle: 'subtitle',
    DiscSubtitle: 'discsubtitle',
    Compilation: 'compilation',
    BPM: 'bpm',
    Mood: 'mood',
    Media: 'media',
    CatalogNumber: 'catalognumber',
    MUSICBRAINZ_ALBUMSTATUS: 'releasestatus',
    MUSICBRAINZ_ALBUMTYPE: 'releasetype',
    RELEASECOUNTRY: 'releasecountry',
    Script: 'script',
    Language: 'language',
    Copyright: 'copyright',
    LICENSE: 'license',
    EncodedBy: 'encodedby',
    EncoderSettings: 'encodersettings',
    Barcode: 'barcode',
    ISRC: 'isrc',
    ASIN: 'asin',
    musicbrainz_trackid: 'musicbrainz_recordingid',
    musicbrainz_releasetrackid: 'musicbrainz_trackid',
    MUSICBRAINZ_ALBUMID: 'musicbrainz_albumid',
    MUSICBRAINZ_ARTISTID: 'musicbrainz_artistid',
    MUSICBRAINZ_ALBUMARTISTID: 'musicbrainz_albumartistid',
    MUSICBRAINZ_RELEASEGROUPID: 'musicbrainz_releasegroupid',
    MUSICBRAINZ_WORKID: 'musicbrainz_workid',
    MUSICBRAINZ_TRMID: 'musicbrainz_trmid',
    MUSICBRAINZ_DISCID: 'musicbrainz_discid',
    Acoustid_Id: 'acoustid_id',
    ACOUSTID_FINGERPRINT: 'acoustid_fingerprint',
    MUSICIP_PUID: 'musicip_puid',
    Weblink: 'website'
};
var APEv2TagMapper = /** @class */ (function (_super) {
    __extends(APEv2TagMapper, _super);
    function APEv2TagMapper() {
        var _this = this;
        var upperCaseMap = {};
        for (var tag in apev2TagMap) {
            upperCaseMap[tag.toUpperCase()] = apev2TagMap[tag];
        }
        _this = _super.call(this, ['APEv2'], upperCaseMap) || this;
        return _this;
    }
    /**
     * @tag  Native header tag
     * @return common tag name (alias)
     */
    APEv2TagMapper.prototype.getCommonName = function (tag) {
        return this.tagMap[tag.toUpperCase()];
    };
    return APEv2TagMapper;
}(GenericTagMapper_1.CommonTagMapper));
exports.APEv2TagMapper = APEv2TagMapper;


/***/ }),

/***/ "./node_modules/music-metadata/lib/asf/AsfObject.js":
/*!**********************************************************!*\
  !*** ./node_modules/music-metadata/lib/asf/AsfObject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ASF Objects

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __webpack_require__(/*! ../common/Util */ "./node_modules/music-metadata/lib/common/Util.js");
var Token = __webpack_require__(/*! token-types */ "./node_modules/token-types/lib/index.js");
var GUID_1 = __webpack_require__(/*! ./GUID */ "./node_modules/music-metadata/lib/asf/GUID.js");
var Util_2 = __webpack_require__(/*! ./Util */ "./node_modules/music-metadata/lib/asf/Util.js");
var ID3v2_1 = __webpack_require__(/*! ../id3v2/ID3v2 */ "./node_modules/music-metadata/lib/id3v2/ID3v2.js");
/**
 * Data Type: Specifies the type of information being stored. The following values are recognized.
 */
var DataType;
(function (DataType) {
    /**
     * Unicode string. The data consists of a sequence of Unicode characters.
     */
    DataType[DataType["UnicodeString"] = 0] = "UnicodeString";
    /**
     * BYTE array. The type of data is implementation-specific.
     */
    DataType[DataType["ByteArray"] = 1] = "ByteArray";
    /**
     * BOOL. The data is 2 bytes long and should be interpreted as a 16-bit unsigned integer. Only 0x0000 or 0x0001 are permitted values.
     */
    DataType[DataType["Bool"] = 2] = "Bool";
    /**
     * DWORD. The data is 4 bytes long and should be interpreted as a 32-bit unsigned integer.
     */
    DataType[DataType["DWord"] = 3] = "DWord";
    /**
     * QWORD. The data is 8 bytes long and should be interpreted as a 64-bit unsigned integer.
     */
    DataType[DataType["QWord"] = 4] = "QWord";
    /**
     * WORD. The data is 2 bytes long and should be interpreted as a 16-bit unsigned integer.
     */
    DataType[DataType["Word"] = 5] = "Word";
})(DataType = exports.DataType || (exports.DataType = {}));
/**
 * Token for: 3. ASF top-level Header Object
 * Ref: http://drang.s4.xrea.com/program/tips/id3tag/wmp/03_asf_top_level_header_object.html#3
 */
exports.TopLevelHeaderObjectToken = {
    len: 30,
    get: function (buf, off) {
        return {
            objectId: GUID_1.default.fromBin(new Token.BufferType(16).get(buf, off)),
            objectSize: Util_2.Util.readUInt64LE(buf, off + 16),
            numberOfHeaderObjects: Token.UINT32_LE.get(buf, off + 24)
            // Reserved: 2 bytes
        };
    }
};
/**
 * Token for: 3.1 Header Object (mandatory, one only)
 * Ref: http://drang.s4.xrea.com/program/tips/id3tag/wmp/03_asf_top_level_header_object.html#3_1
 */
exports.HeaderObjectToken = {
    len: 24,
    get: function (buf, off) {
        return {
            objectId: GUID_1.default.fromBin(new Token.BufferType(16).get(buf, off)),
            objectSize: Util_2.Util.readUInt64LE(buf, off + 16)
        };
    }
};
var State = /** @class */ (function () {
    function State(header) {
        this.len = header.objectSize - exports.HeaderObjectToken.len;
    }
    State.prototype.postProcessTag = function (tags, name, valueType, data) {
        if (name === "WM/Picture") {
            tags.push({ id: name, value: WmPictureToken.fromBuffer(data) });
        }
        else {
            var parseAttr = Util_2.Util.getParserForAttr(valueType);
            if (!parseAttr) {
                throw new Error("unexpected value headerType: " + valueType);
            }
            tags.push({ id: name, value: parseAttr(data) });
        }
    };
    return State;
}());
exports.State = State;
// ToDo: use ignore type
var IgnoreObjectState = /** @class */ (function (_super) {
    __extends(IgnoreObjectState, _super);
    function IgnoreObjectState(header) {
        return _super.call(this, header) || this;
    }
    IgnoreObjectState.prototype.get = function (buf, off) {
        return null;
    };
    return IgnoreObjectState;
}(State));
exports.IgnoreObjectState = IgnoreObjectState;
/**
 * Token for: 3.2: File Properties Object (mandatory, one only)
 * Ref: http://drang.s4.xrea.com/program/tips/id3tag/wmp/03_asf_top_level_header_object.html#3_2
 */
var FilePropertiesObject = /** @class */ (function (_super) {
    __extends(FilePropertiesObject, _super);
    function FilePropertiesObject(header) {
        return _super.call(this, header) || this;
    }
    FilePropertiesObject.prototype.get = function (buf, off) {
        return {
            fileId: GUID_1.default.fromBin(buf, off),
            fileSize: Util_2.Util.readUInt64LE(buf, off + 16),
            creationDate: Util_2.Util.readUInt64LE(buf, off + 24),
            dataPacketsCount: Util_2.Util.readUInt64LE(buf, off + 32),
            playDuration: Util_2.Util.readUInt64LE(buf, off + 40),
            sendDuration: Util_2.Util.readUInt64LE(buf, off + 48),
            preroll: Util_2.Util.readUInt64LE(buf, off + 56),
            flags: {
                broadcast: Util_1.default.strtokBITSET.get(buf, off + 64, 24),
                seekable: Util_1.default.strtokBITSET.get(buf, off + 64, 25)
            },
            // flagsNumeric: Token.UINT32_LE.get(buf, off + 64),
            minimumDataPacketSize: Token.UINT32_LE.get(buf, off + 68),
            maximumDataPacketSize: Token.UINT32_LE.get(buf, off + 72),
            maximumBitrate: Token.UINT32_LE.get(buf, off + 76)
        };
    };
    FilePropertiesObject.guid = GUID_1.default.FilePropertiesObject;
    return FilePropertiesObject;
}(State));
exports.FilePropertiesObject = FilePropertiesObject;
/**
 * Token for: 3.3 Stream Properties Object (mandatory, one per stream)
 * Ref: http://drang.s4.xrea.com/program/tips/id3tag/wmp/03_asf_top_level_header_object.html#3_3
 */
var StreamPropertiesObject = /** @class */ (function (_super) {
    __extends(StreamPropertiesObject, _super);
    function StreamPropertiesObject(header) {
        return _super.call(this, header) || this;
    }
    StreamPropertiesObject.prototype.get = function (buf, off) {
        return {
            streamType: GUID_1.default.fromBin(buf, off),
            errorCorrectionType: GUID_1.default.fromBin(buf, off + 16)
            // ToDo
        };
    };
    StreamPropertiesObject.guid = GUID_1.default.StreamPropertiesObject;
    return StreamPropertiesObject;
}(State));
exports.StreamPropertiesObject = StreamPropertiesObject;
/**
 * 3.4: Header Extension Object (mandatory, one only)
 * Ref: http://drang.s4.xrea.com/program/tips/id3tag/wmp/03_asf_top_level_header_object.html#3_4
 */
var HeaderExtensionObject = /** @class */ (function () {
    function HeaderExtensionObject() {
        this.len = 22;
    }
    HeaderExtensionObject.prototype.get = function (buf, off) {
        var dataSize = buf.readUInt32LE(off + 18);
        return {
            reserved1: GUID_1.default.fromBin(buf, off),
            reserved2: buf.readUInt16LE(off + 16),
            extensionDataSize: buf.readUInt32LE(off + 18)
        };
    };
    HeaderExtensionObject.guid = GUID_1.default.HeaderExtensionObject;
    return HeaderExtensionObject;
}());
exports.HeaderExtensionObject = HeaderExtensionObject;
/**
 * 3.10 Content Description Object (optional, one only)
 * Ref: http://drang.s4.xrea.com/program/tips/id3tag/wmp/03_asf_top_level_header_object.html#3_10
 */
var ContentDescriptionObjectState = /** @class */ (function (_super) {
    __extends(ContentDescriptionObjectState, _super);
    function ContentDescriptionObjectState(header) {
        return _super.call(this, header) || this;
    }
    ContentDescriptionObjectState.prototype.get = function (buf, off) {
        var tags = [];
        var pos = off + 10;
        for (var i = 0; i < ContentDescriptionObjectState.contentDescTags.length; ++i) {
            var length_1 = buf.readUInt16LE(off + i * 2);
            if (length_1 > 0) {
                var tagName = ContentDescriptionObjectState.contentDescTags[i];
                var end = pos + length_1;
                tags.push({ id: tagName, value: Util_2.Util.parseUnicodeAttr(buf.slice(pos, end)) });
                pos = end;
            }
        }
        return tags;
    };
    ContentDescriptionObjectState.guid = GUID_1.default.ContentDescriptionObject;
    ContentDescriptionObjectState.contentDescTags = ["Title", "Author", "Copyright", "Description", "Rating"];
    return ContentDescriptionObjectState;
}(State));
exports.ContentDescriptionObjectState = ContentDescriptionObjectState;
/**
 * 3.11 Extended Content Description Object (optional, one only)
 * Ref: http://drang.s4.xrea.com/program/tips/id3tag/wmp/03_asf_top_level_header_object.html#3_11
 */
var ExtendedContentDescriptionObjectState = /** @class */ (function (_super) {
    __extends(ExtendedContentDescriptionObjectState, _super);
    function ExtendedContentDescriptionObjectState(header) {
        return _super.call(this, header) || this;
    }
    ExtendedContentDescriptionObjectState.prototype.get = function (buf, off) {
        var tags = [];
        var attrCount = buf.readUInt16LE(off);
        var pos = off + 2;
        for (var i = 0; i < attrCount; i += 1) {
            var nameLen = buf.readUInt16LE(pos);
            pos += 2;
            var name_1 = Util_2.Util.parseUnicodeAttr(buf.slice(pos, pos + nameLen));
            pos += nameLen;
            var valueType = buf.readUInt16LE(pos);
            pos += 2;
            var valueLen = buf.readUInt16LE(pos);
            pos += 2;
            var value = buf.slice(pos, pos + valueLen);
            pos += valueLen;
            this.postProcessTag(tags, name_1, valueType, value);
        }
        return tags;
    };
    ExtendedContentDescriptionObjectState.guid = GUID_1.default.ExtendedContentDescriptionObject;
    return ExtendedContentDescriptionObjectState;
}(State));
exports.ExtendedContentDescriptionObjectState = ExtendedContentDescriptionObjectState;
/**
 * 4.1 Extended Stream Properties Object (optional, 1 per media stream)
 * Ref: http://drang.s4.xrea.com/program/tips/id3tag/wmp/04_objects_in_the_asf_header_extension_object.html#4_1
 */
var ExtendedStreamPropertiesObjectState = /** @class */ (function (_super) {
    __extends(ExtendedStreamPropertiesObjectState, _super);
    function ExtendedStreamPropertiesObjectState(header) {
        return _super.call(this, header) || this;
    }
    ExtendedStreamPropertiesObjectState.prototype.get = function (buf, off) {
        return {
            startTime: Util_2.Util.readUInt64LE(buf, off),
            endTime: Util_2.Util.readUInt64LE(buf, off + 8),
            dataBitrate: buf.readInt32LE(off + 12),
            bufferSize: buf.readInt32LE(off + 16),
            initialBufferFullness: buf.readInt32LE(off + 20),
            alternateDataBitrate: buf.readInt32LE(off + 24),
            alternateBufferSize: buf.readInt32LE(off + 28),
            alternateInitialBufferFullness: buf.readInt32LE(off + 32),
            maximumObjectSize: buf.readInt32LE(off + 36),
            flags: {
                reliableFlag: Util_1.default.strtokBITSET.get(buf, off + 40, 0),
                seekableFlag: Util_1.default.strtokBITSET.get(buf, off + 40, 1),
                resendLiveCleanpointsFlag: Util_1.default.strtokBITSET.get(buf, off + 40, 2)
            },
            // flagsNumeric: Token.UINT32_LE.get(buf, off + 64),
            streamNumber: buf.readInt16LE(off + 42),
            streamLanguageId: buf.readInt16LE(off + 44),
            averageTimePerFrame: buf.readInt32LE(off + 52),
            streamNameCount: buf.readInt32LE(off + 54),
            payloadExtensionSystems: buf.readInt32LE(off + 56),
            streamNames: [],
            streamPropertiesObject: null
        };
    };
    ExtendedStreamPropertiesObjectState.guid = GUID_1.default.ExtendedStreamPropertiesObject;
    return ExtendedStreamPropertiesObjectState;
}(State));
exports.ExtendedStreamPropertiesObjectState = ExtendedStreamPropertiesObjectState;
/**
 * 4.7  Metadata Object (optional, 0 or 1)
 * Ref: http://drang.s4.xrea.com/program/tips/id3tag/wmp/04_objects_in_the_asf_header_extension_object.html#4_7
 */
var MetadataObjectState = /** @class */ (function (_super) {
    __extends(MetadataObjectState, _super);
    function MetadataObjectState(header) {
        return _super.call(this, header) || this;
    }
    MetadataObjectState.prototype.get = function (buf, off) {
        var tags = [];
        var descriptionRecordsCount = buf.readUInt16LE(off);
        var pos = off + 2;
        for (var i = 0; i < descriptionRecordsCount; i += 1) {
            pos += 4;
            var nameLen = buf.readUInt16LE(pos);
            pos += 2;
            var dataType = buf.readUInt16LE(pos);
            pos += 2;
            var dataLen = buf.readUInt32LE(pos);
            pos += 4;
            var name_2 = Util_2.Util.parseUnicodeAttr(buf.slice(pos, pos + nameLen));
            pos += nameLen;
            var data = buf.slice(pos, pos + dataLen);
            pos += dataLen;
            var parseAttr = Util_2.Util.getParserForAttr(dataType);
            if (!parseAttr) {
                throw new Error("unexpected value headerType: " + dataType);
            }
            this.postProcessTag(tags, name_2, dataType, data);
        }
        return tags;
    };
    MetadataObjectState.guid = GUID_1.default.MetadataObject;
    return MetadataObjectState;
}(State));
exports.MetadataObjectState = MetadataObjectState;
// 4.8	Metadata Library Object (optional, 0 or 1)
var MetadataLibraryObjectState = /** @class */ (function (_super) {
    __extends(MetadataLibraryObjectState, _super);
    function MetadataLibraryObjectState(header) {
        return _super.call(this, header) || this;
    }
    MetadataLibraryObjectState.guid = GUID_1.default.MetadataLibraryObject;
    return MetadataLibraryObjectState;
}(MetadataObjectState));
exports.MetadataLibraryObjectState = MetadataLibraryObjectState;
/**
 * Ref: https://msdn.microsoft.com/en-us/library/windows/desktop/dd757977(v=vs.85).aspx
 */
var WmPictureToken = /** @class */ (function () {
    function WmPictureToken(len) {
        this.len = len;
    }
    WmPictureToken.fromBase64 = function (base64str) {
        return this.fromBuffer(new Buffer(base64str, "base64"));
    };
    WmPictureToken.fromBuffer = function (buffer) {
        var pic = new WmPictureToken(buffer.length);
        return pic.get(buffer, 0);
    };
    WmPictureToken.prototype.get = function (buffer, offset) {
        var typeId = buffer.readUInt8(offset++);
        var size = buffer.readInt32LE(offset);
        var index = 5;
        while (buffer.readUInt16BE(index) !== 0) {
            index += 2;
        }
        var format = buffer.slice(5, index).toString("utf16le");
        while (buffer.readUInt16BE(index) !== 0) {
            index += 2;
        }
        var description = buffer.slice(5, index).toString("utf16le");
        return {
            type: ID3v2_1.AttachedPictureType[typeId],
            format: format,
            description: description,
            size: size,
            data: buffer.slice(index + 4)
        };
    };
    return WmPictureToken;
}());
exports.WmPictureToken = WmPictureToken;


/***/ }),

/***/ "./node_modules/music-metadata/lib/asf/AsfParser.js":
/*!**********************************************************!*\
  !*** ./node_modules/music-metadata/lib/asf/AsfParser.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GUID_1 = __webpack_require__(/*! ./GUID */ "./node_modules/music-metadata/lib/asf/GUID.js");
var AsfObject = __webpack_require__(/*! ./AsfObject */ "./node_modules/music-metadata/lib/asf/AsfObject.js");
var _debug = __webpack_require__(/*! debug */ "./node_modules/music-metadata/node_modules/debug/src/index.js");
var debug = _debug("music-metadata:parser:ASF");
/**
 * Windows Media Metadata Usage Guidelines
 *   Ref: https://msdn.microsoft.com/en-us/library/ms867702.aspx
 *
 * Ref:
 *   https://tools.ietf.org/html/draft-fleischman-asf-01
 *   https://hwiegman.home.xs4all.nl/fileformats/asf/ASF_Specification.pdf
 *   http://drang.s4.xrea.com/program/tips/id3tag/wmp/index.html
 *   https://msdn.microsoft.com/en-us/library/windows/desktop/ee663575(v=vs.85).aspx
 */
var AsfParser = /** @class */ (function () {
    function AsfParser() {
        this.tags = [];
        this.warnings = []; // ToDo: make these part of the parsing result
        this.format = {};
    }
    AsfParser.prototype.parse = function (tokenizer, options) {
        this.tokenizer = tokenizer;
        return this.paresTopLevelHeaderObject();
    };
    AsfParser.prototype.paresTopLevelHeaderObject = function () {
        var _this = this;
        return this.tokenizer.readToken(AsfObject.TopLevelHeaderObjectToken).then(function (header) {
            if (!header.objectId.equals(GUID_1.default.HeaderObject)) {
                throw new Error('expected asf header; but was not found; got: ' + header.objectId.str);
            }
            return _this.parseObjectHeader(header.numberOfHeaderObjects).catch(function (err) {
                debug("Error while parsing ASF: %s", err);
                // ToDo: register warning
                return {
                    format: _this.format,
                    native: {
                        asf: _this.tags
                    }
                };
            });
        });
    };
    AsfParser.prototype.parseObjectHeader = function (numberOfObjectHeaders) {
        var _this = this;
        // Parse common header of the ASF Object (3.1)
        return this.tokenizer.readToken(AsfObject.HeaderObjectToken).then(function (header) {
            // Parse data part of the ASF Object
            debug("header GUID=%s", header.objectId.str);
            switch (header.objectId.str) {
                case AsfObject.FilePropertiesObject.guid.str:// 3.2
                    return _this.tokenizer.readToken(new AsfObject.FilePropertiesObject(header)).then(function (fpo) {
                        _this.format.duration = fpo.playDuration / 10000000;
                        _this.format.bitrate = fpo.maximumBitrate;
                    });
                case AsfObject.StreamPropertiesObject.guid.str:// 3.3
                    return _this.tokenizer.readToken(new AsfObject.StreamPropertiesObject(header)).then(function () {
                        return null; // ToDo
                    });
                case AsfObject.HeaderExtensionObject.guid.str:// 3.4
                    return _this.tokenizer.readToken(new AsfObject.HeaderExtensionObject()).then(function (extHeader) {
                        return _this.parseExtensionObject(extHeader.extensionDataSize);
                    });
                case AsfObject.ContentDescriptionObjectState.guid.str:// 3.10
                    return _this.tokenizer.readToken(new AsfObject.ContentDescriptionObjectState(header)).then(function (tags) {
                        _this.tags = _this.tags.concat(tags);
                    });
                case AsfObject.ExtendedContentDescriptionObjectState.guid.str:// 3.11
                    return _this.tokenizer.readToken(new AsfObject.ExtendedContentDescriptionObjectState(header)).then(function (tags) {
                        _this.tags = _this.tags.concat(tags);
                        return header.objectSize;
                    });
                case GUID_1.default.CodecListObject.str:
                    // ToDo?
                    return _this.tokenizer.ignore(header.objectSize - AsfObject.HeaderObjectToken.len);
                case GUID_1.default.StreamBitratePropertiesObject.str:
                    // ToDo?
                    return _this.tokenizer.ignore(header.objectSize - AsfObject.HeaderObjectToken.len);
                case GUID_1.default.PaddingObject.str:
                    // ToDo: register bytes pad
                    debug("Padding: %s bytes", header.objectSize - AsfObject.HeaderObjectToken.len);
                    return _this.tokenizer.ignore(header.objectSize - AsfObject.HeaderObjectToken.len);
                default:
                    _this.warnings.push("Ignore ASF-Object-GUID: " + header.objectId.str);
                    debug("Ignore ASF-Object-GUID: %s", header.objectId.str);
                    return _this.tokenizer.readToken(new AsfObject.IgnoreObjectState(header));
            }
        }).then(function () {
            --numberOfObjectHeaders;
            if (numberOfObjectHeaders > 0) {
                return _this.parseObjectHeader(numberOfObjectHeaders);
            }
            else {
                // done
                return {
                    format: _this.format,
                    native: {
                        asf: _this.tags
                    }
                };
            }
        });
    };
    AsfParser.prototype.parseExtensionObject = function (extensionSize) {
        var _this = this;
        // Parse common header of the ASF Object (3.1)
        return this.tokenizer.readToken(AsfObject.HeaderObjectToken).then(function (header) {
            // Parse data part of the ASF Object
            switch (header.objectId.str) {
                case AsfObject.ExtendedStreamPropertiesObjectState.guid.str:// 4.1
                    return _this.tokenizer.readToken(new AsfObject.ExtendedStreamPropertiesObjectState(header)).then(function (cd) {
                        return header.objectSize;
                    });
                case AsfObject.MetadataObjectState.guid.str:// 4.7
                    return _this.tokenizer.readToken(new AsfObject.MetadataObjectState(header)).then(function (tags) {
                        _this.tags = _this.tags.concat(tags);
                        return header.objectSize;
                    });
                case AsfObject.MetadataLibraryObjectState.guid.str:// 4.8
                    return _this.tokenizer.readToken(new AsfObject.MetadataLibraryObjectState(header)).then(function (tags) {
                        _this.tags = _this.tags.concat(tags);
                        return header.objectSize;
                    });
                case GUID_1.default.PaddingObject.str:
                    // ToDo: register bytes pad
                    return _this.tokenizer.ignore(header.objectSize - AsfObject.HeaderObjectToken.len).then(function () { return header.objectSize; });
                case GUID_1.default.CompatibilityObject.str:
                    return _this.tokenizer.ignore(header.objectSize - AsfObject.HeaderObjectToken.len).then(function () { return header.objectSize; });
                case GUID_1.default.ASF_Index_Placeholder_Object.str:
                    return _this.tokenizer.ignore(header.objectSize - AsfObject.HeaderObjectToken.len).then(function () { return header.objectSize; });
                default:
                    _this.warnings.push("Ignore ASF-Object-GUID: " + header.objectId.str);
                    // console.log("Ignore ASF-Object-GUID: %s", header.objectId.str);
                    return _this.tokenizer.readToken(new AsfObject.IgnoreObjectState(header));
            }
        }).then(function (objectSize) {
            extensionSize -= objectSize;
            if (extensionSize > 0) {
                return _this.parseExtensionObject(extensionSize);
            }
            else {
                // done
                return 0;
            }
        });
    };
    AsfParser.headerType = 'asf';
    return AsfParser;
}());
exports.AsfParser = AsfParser;


/***/ }),

/***/ "./node_modules/music-metadata/lib/asf/AsfTagMapper.js":
/*!*************************************************************!*\
  !*** ./node_modules/music-metadata/lib/asf/AsfTagMapper.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GenericTagMapper_1 = __webpack_require__(/*! ../common/GenericTagMapper */ "./node_modules/music-metadata/lib/common/GenericTagMapper.js");
/**
 * ASF Metadata tag mappings.
 * See http://msdn.microsoft.com/en-us/library/ms867702.aspx
 */
var asfTagMap = {
    Title: 'title',
    Author: 'artist',
    'WM/AlbumArtist': 'albumartist',
    'WM/AlbumTitle': 'album',
    'WM/Year': 'date',
    'WM/OriginalReleaseTime': 'originaldate',
    'WM/OriginalReleaseYear': 'originalyear',
    Description: 'comment',
    'WM/TrackNumber': 'track',
    'WM/PartOfSet': 'disk',
    'WM/Genre': 'genre',
    'WM/Composer': 'composer',
    'WM/Lyrics': 'lyrics',
    'WM/AlbumSortOrder': 'albumsort',
    'WM/TitleSortOrder': 'titlesort',
    'WM/ArtistSortOrder': 'artistsort',
    'WM/AlbumArtistSortOrder': 'albumartistsort',
    'WM/ComposerSortOrder': 'composersort',
    'WM/Writer': 'lyricist',
    'WM/Conductor': 'conductor',
    'WM/ModifiedBy': 'remixer',
    'WM/Engineer': 'engineer',
    'WM/Producer': 'producer',
    'WM/DJMixer': 'djmixer',
    'WM/Mixer': 'mixer',
    'WM/Publisher': 'label',
    'WM/ContentGroupDescription': 'grouping',
    'WM/SubTitle': 'subtitle',
    'WM/SetSubTitle': 'discsubtitle',
    // 'WM/PartOfSet': 'totaldiscs',
    'WM/IsCompilation': 'compilation',
    'WM/SharedUserRating': '_rating',
    'WM/BeatsPerMinute': 'bpm',
    'WM/Mood': 'mood',
    'WM/Media': 'media',
    'WM/CatalogNo': 'catalognumber',
    'MusicBrainz/Album Status': 'releasestatus',
    'MusicBrainz/Album Type': 'releasetype',
    'MusicBrainz/Album Release Country': 'releasecountry',
    'WM/Script': 'script',
    'WM/Language': 'language',
    Copyright: 'copyright',
    LICENSE: 'license',
    'WM/EncodedBy': 'encodedby',
    'WM/EncodingSettings': 'encodersettings',
    'WM/Barcode': 'barcode',
    'WM/ISRC': 'isrc',
    'MusicBrainz/Track Id': 'musicbrainz_recordingid',
    'MusicBrainz/Release Track Id': 'musicbrainz_trackid',
    'MusicBrainz/Album Id': 'musicbrainz_albumid',
    'MusicBrainz/Artist Id': 'musicbrainz_artistid',
    'MusicBrainz/Album Artist Id': 'musicbrainz_albumartistid',
    'MusicBrainz/Release Group Id': 'musicbrainz_releasegroupid',
    'MusicBrainz/Work Id': 'musicbrainz_workid',
    'MusicBrainz/TRM Id': 'musicbrainz_trmid',
    'MusicBrainz/Disc Id': 'musicbrainz_discid',
    'Acoustid/Id': 'acoustid_id',
    'Acoustid/Fingerprint': 'acoustid_fingerprint',
    'MusicIP/PUID': 'musicip_puid',
    'WM/ARTISTS': 'artists',
    'WM/InitialKey': 'key',
    ASIN: 'asin',
    'WM/Work': 'work',
    'WM/AuthorURL': 'website',
    'WM/Picture': 'picture'
};
var AsfTagMapper = /** @class */ (function (_super) {
    __extends(AsfTagMapper, _super);
    function AsfTagMapper() {
        return _super.call(this, ['asf'], asfTagMap) || this;
    }
    return AsfTagMapper;
}(GenericTagMapper_1.CommonTagMapper));
exports.AsfTagMapper = AsfTagMapper;


/***/ }),

/***/ "./node_modules/music-metadata/lib/asf/GUID.js":
/*!*****************************************************!*\
  !*** ./node_modules/music-metadata/lib/asf/GUID.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Implementation of the Advanced Systems Format (ASF)
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Ref:
 *    https://tools.ietf.org/html/draft-fleischman-asf-01, Appendix A: ASF GUIDs
 *    http://drang.s4.xrea.com/program/tips/id3tag/wmp/10_asf_guids.html
 *    http://drang.s4.xrea.com/program/tips/id3tag/wmp/index.html
 *
 *    http://drang.s4.xrea.com/program/tips/id3tag/wmp/10_asf_guids.html
 *
 *  ASF File Structure:
 *    https://msdn.microsoft.com/en-us/library/windows/desktop/ee663575(v=vs.85).aspx
 *
 *  ASF GUIDs:
 *    http://drang.s4.xrea.com/program/tips/id3tag/wmp/10_asf_guids.html
 *
 *    https://github.com/dji-sdk/FFmpeg/blob/master/libavformat/asf.c
 */
var GUID = /** @class */ (function () {
    function GUID(str) {
        this.str = str;
    }
    GUID.fromBin = function (bin, offset) {
        if (offset === void 0) { offset = 0; }
        return new GUID(this.decode(bin, offset));
    };
    /**
     * Decode GUID in format like "B503BF5F-2EA9-CF11-8EE3-00C00C205365"
     * @param objectId Binary GUID
     * @param offset Read offset in bytes, default 0
     * @returns {string} GUID as dashed hexadecimal representation
     */
    GUID.decode = function (objectId, offset) {
        if (offset === void 0) { offset = 0; }
        var guid = objectId.readUInt32LE(offset).toString(16) + "-" +
            objectId.readUInt16LE(offset + 4).toString(16) + "-" +
            objectId.readUInt16LE(offset + 6).toString(16) + "-" +
            objectId.readUInt16BE(offset + 8).toString(16) + "-" +
            objectId.slice(offset + 10, offset + 16).toString('hex');
        return guid.toUpperCase();
    };
    /**
     * Encode GUID
     * @param guid GUID like: "B503BF5F-2EA9-CF11-8EE3-00C00C205365"
     * @returns {Buffer} Encoded Bnary GUID
     */
    GUID.encode = function (str) {
        var bin = new Buffer(16);
        bin.writeUInt32LE(parseInt(str.slice(0, 8), 16), 0);
        bin.writeUInt16LE(parseInt(str.slice(9, 13), 16), 4);
        bin.writeUInt16LE(parseInt(str.slice(14, 18), 16), 6);
        Buffer.from(str.slice(19, 23), "hex").copy(bin, 8);
        Buffer.from(str.slice(24), "hex").copy(bin, 10);
        return bin;
    };
    GUID.prototype.equals = function (guid) {
        return this.str === guid.str;
    };
    GUID.prototype.toBin = function () {
        return GUID.encode(this.str);
    };
    // 10.1 Top-level ASF object GUIDs
    GUID.HeaderObject = new GUID("75B22630-668E-11CF-A6D9-00AA0062CE6C");
    GUID.DataObject = new GUID("75B22636-668E-11CF-A6D9-00AA0062CE6C");
    GUID.SimpleIndexObject = new GUID("33000890-E5B1-11CF-89F4-00A0C90349CB");
    GUID.IndexObject = new GUID("D6E229D3-35DA-11D1-9034-00A0C90349BE");
    GUID.MediaObjectIndexObject = new GUID("FEB103F8-12AD-4C64-840F-2A1D2F7AD48C");
    GUID.TimecodeIndexObject = new GUID("3CB73FD0-0C4A-4803-953D-EDF7B6228F0C");
    // 10.2 Header Object GUIDs
    GUID.FilePropertiesObject = new GUID("8CABDCA1-A947-11CF-8EE4-00C00C205365");
    GUID.StreamPropertiesObject = new GUID("B7DC0791-A9B7-11CF-8EE6-00C00C205365");
    GUID.HeaderExtensionObject = new GUID("5FBF03B5-A92E-11CF-8EE3-00C00C205365");
    GUID.CodecListObject = new GUID("86D15240-311D-11D0-A3A4-00A0C90348F6");
    GUID.ScriptCommandObject = new GUID("1EFB1A30-0B62-11D0-A39B-00A0C90348F6");
    GUID.MarkerObject = new GUID("F487CD01-A951-11CF-8EE6-00C00C205365");
    GUID.BitrateMutualExclusionObject = new GUID("D6E229DC-35DA-11D1-9034-00A0C90349BE");
    GUID.ErrorCorrectionObject = new GUID("75B22635-668E-11CF-A6D9-00AA0062CE6C");
    GUID.ContentDescriptionObject = new GUID("75B22633-668E-11CF-A6D9-00AA0062CE6C");
    GUID.ExtendedContentDescriptionObject = new GUID("D2D0A440-E307-11D2-97F0-00A0C95EA850");
    GUID.ContentBrandingObject = new GUID("2211B3FA-BD23-11D2-B4B7-00A0C955FC6E");
    GUID.StreamBitratePropertiesObject = new GUID("7BF875CE-468D-11D1-8D82-006097C9A2B2");
    GUID.ContentEncryptionObject = new GUID("2211B3FB-BD23-11D2-B4B7-00A0C955FC6E");
    GUID.ExtendedContentEncryptionObject = new GUID("298AE614-2622-4C17-B935-DAE07EE9289C");
    GUID.DigitalSignatureObject = new GUID("2211B3FC-BD23-11D2-B4B7-00A0C955FC6E");
    GUID.PaddingObject = new GUID("1806D474-CADF-4509-A4BA-9AABCB96AAE8");
    // 10.3 Header Extension Object GUIDs
    GUID.ExtendedStreamPropertiesObject = new GUID("14E6A5CB-C672-4332-8399-A96952065B5A");
    GUID.AdvancedMutualExclusionObject = new GUID("A08649CF-4775-4670-8A16-6E35357566CD");
    GUID.GroupMutualExclusionObject = new GUID("D1465A40-5A79-4338-B71B-E36B8FD6C249");
    GUID.StreamPrioritizationObject = new GUID("D4FED15B-88D3-454F-81F0-ED5C45999E24");
    GUID.BandwidthSharingObject = new GUID("A69609E6-517B-11D2-B6AF-00C04FD908E9");
    GUID.LanguageListObject = new GUID("7C4346A9-EFE0-4BFC-B229-393EDE415C85");
    GUID.MetadataObject = new GUID("C5F8CBEA-5BAF-4877-8467-AA8C44FA4CCA");
    GUID.MetadataLibraryObject = new GUID("44231C94-9498-49D1-A141-1D134E457054");
    GUID.IndexParametersObject = new GUID("D6E229DF-35DA-11D1-9034-00A0C90349BE");
    GUID.MediaObjectIndexParametersObject = new GUID("6B203BAD-3F11-48E4-ACA8-D7613DE2CFA7");
    GUID.TimecodeIndexParametersObject = new GUID("F55E496D-9797-4B5D-8C8B-604DFE9BFB24");
    GUID.CompatibilityObject = new GUID("26F18B5D-4584-47EC-9F5F-0E651F0452C9");
    GUID.AdvancedContentEncryptionObject = new GUID("43058533-6981-49E6-9B74-AD12CB86D58C");
    // 10.4 Stream Properties Object Stream Type GUIDs
    GUID.AudioMedia = new GUID("F8699E40-5B4D-11CF-A8FD-00805F5C442B");
    GUID.VideoMedia = new GUID("BC19EFC0-5B4D-11CF-A8FD-00805F5C442B");
    GUID.CommandMedia = new GUID("59DACFC0-59E6-11D0-A3AC-00A0C90348F6");
    GUID.JFIF_Media = new GUID("B61BE100-5B4E-11CF-A8FD-00805F5C442B");
    GUID.Degradable_JPEG_Media = new GUID("35907DE0-E415-11CF-A917-00805F5C442B");
    GUID.FileTransferMedia = new GUID("91BD222C-F21C-497A-8B6D-5AA86BFC0185");
    GUID.BinaryMedia = new GUID("3AFB65E2-47EF-40F2-AC2C-70A90D71D343");
    GUID.ASF_Index_Placeholder_Object = new GUID("D9AADE20-7C17-4F9C-BC28-8555DD98E2A2");
    return GUID;
}());
exports.default = GUID;


/***/ }),

/***/ "./node_modules/music-metadata/lib/asf/Util.js":
/*!*****************************************************!*\
  !*** ./node_modules/music-metadata/lib/asf/Util.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __webpack_require__(/*! ../common/Util */ "./node_modules/music-metadata/lib/common/Util.js");
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.getParserForAttr = function (i) {
        return Util.attributeParsers[i];
    };
    Util.parseUnicodeAttr = function (buf) {
        return Util_1.default.stripNulls(Util_1.default.decodeString(buf, "utf16le"));
    };
    Util.readUInt64LE = function (buf, offset) {
        if (offset === void 0) { offset = 0; }
        return buf.readUIntLE(offset, 8);
    };
    Util.parseByteArrayAttr = function (buf) {
        var newBuf = new Buffer(buf.length);
        buf.copy(newBuf);
        return newBuf;
    };
    Util.parseBoolAttr = function (buf, offset) {
        if (offset === void 0) { offset = 0; }
        return Util.parseWordAttr(buf, offset) === 1;
    };
    Util.parseDWordAttr = function (buf, offset) {
        if (offset === void 0) { offset = 0; }
        return buf.readUInt32LE(offset);
    };
    Util.parseQWordAttr = function (buf, offset) {
        if (offset === void 0) { offset = 0; }
        return Util.readUInt64LE(buf, offset);
    };
    Util.parseWordAttr = function (buf, offset) {
        if (offset === void 0) { offset = 0; }
        return buf.readUInt16LE(offset);
    };
    Util.attributeParsers = [
        Util.parseUnicodeAttr,
        Util.parseByteArrayAttr,
        Util.parseBoolAttr,
        Util.parseDWordAttr,
        Util.parseQWordAttr,
        Util.parseWordAttr,
        Util.parseByteArrayAttr
    ];
    return Util;
}());
exports.Util = Util;


/***/ }),

/***/ "./node_modules/music-metadata/lib/common/FourCC.js":
/*!**********************************************************!*\
  !*** ./node_modules/music-metadata/lib/common/FourCC.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Token for read FourCC
 * Ref: https://en.wikipedia.org/wiki/FourCC
 */
exports.FourCcToken = {
    len: 4,
    get: function (buf, off) {
        var id = buf.toString("binary", off, off + exports.FourCcToken.len);
        for (var _i = 0, id_1 = id; _i < id_1.length; _i++) {
            var c = id_1[_i];
            if (!((c >= " " && c <= "z") || c === '©')) {
                throw new Error("FourCC contains invalid characters");
            }
        }
        return id;
    }
};


/***/ }),

/***/ "./node_modules/music-metadata/lib/common/GenericTagMapper.js":
/*!********************************************************************!*\
  !*** ./node_modules/music-metadata/lib/common/GenericTagMapper.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var generic = __webpack_require__(/*! ./GenericTagTypes */ "./node_modules/music-metadata/lib/common/GenericTagTypes.js");
var ID3v1Parser_1 = __webpack_require__(/*! ../id3v1/ID3v1Parser */ "./node_modules/music-metadata/lib/id3v1/ID3v1Parser.js");
var CommonTagMapper = /** @class */ (function () {
    function CommonTagMapper(tagTypes, tagMap) {
        this.tagTypes = tagTypes;
        this.tagMap = tagMap;
    }
    CommonTagMapper.parseGenre = function (origVal) {
        // match everything inside parentheses
        var split = origVal.trim().split(/\((.*?)\)/g).filter(function (val) {
            return val !== '';
        });
        var array = [];
        for (var _i = 0, split_1 = split; _i < split_1.length; _i++) {
            var cur = split_1[_i];
            if (/^\d+$/.test(cur) && !isNaN(parseInt(cur, 10))) {
                cur = ID3v1Parser_1.Genres[cur];
            }
            array.push(cur);
        }
        return array
            .filter(function (val) {
            return val !== undefined;
        }).join('/');
    };
    CommonTagMapper.cleanupPicture = function (picture) {
        var newFormat;
        if (picture.format) {
            var split = picture.format.toLowerCase().split('/');
            newFormat = (split.length > 1) ? split[1] : split[0];
            if (newFormat === 'jpeg')
                newFormat = 'jpg';
        }
        else {
            newFormat = 'jpg';
        }
        return { format: newFormat, data: picture.data };
    };
    CommonTagMapper.toIntOrNull = function (str) {
        var cleaned = parseInt(str, 10);
        return isNaN(cleaned) ? null : cleaned;
    };
    // TODO: a string of 1of1 would fail to be converted
    // converts 1/10 to no : 1, of : 10
    // or 1 to no : 1, of : 0
    CommonTagMapper.cleanupTrack = function (origVal) {
        var split = origVal.toString().split('/');
        return {
            no: parseInt(split[0], 10) || null,
            of: parseInt(split[1], 10) || null
        };
    };
    /**
     * Process and set common tags
     * @param comTags Target metadata to
     * write common tags to
     * @param comTags Generic tag results (output of this function)
     * @param tag     Native tag
     * @param value   Native tag value
     */
    CommonTagMapper.prototype.setGenericTag = function (comTags, tag) {
        tag = { id: tag.id, value: tag.value }; // clone object
        this.postMap(tag);
        // Convert native tag event to generic 'alias' tag
        var alias = this.getCommonName(tag.id);
        if (alias) {
            // Common tag (alias) found
            // check if we need to do something special with common tag
            // if the event has been aliased then we need to clean it before
            // it is emitted to the user. e.g. genre (20) -> Electronic
            switch (alias) {
                case 'genre':
                    tag.value = CommonTagMapper.parseGenre(tag.value);
                    break;
                case 'barcode':
                    tag.value = typeof tag.value === 'string' ? parseInt(tag.value, 10) : tag.value;
                    break;
                case 'picture':
                    tag.value = CommonTagMapper.cleanupPicture(tag.value);
                    break;
                case 'totaltracks':
                    comTags.track.of = CommonTagMapper.toIntOrNull(tag.value);
                    return;
                case 'totaldiscs':
                    comTags.disk.of = CommonTagMapper.toIntOrNull(tag.value);
                    return;
                case 'track':
                case 'disk':
                    var of = comTags[alias].of; // store of value, maybe maybe overwritten
                    comTags[alias] = CommonTagMapper.cleanupTrack(tag.value);
                    comTags[alias].of = of != null ? of : comTags[alias].of;
                    return;
                case 'year':
                case 'originalyear':
                    tag.value = parseInt(tag.value, 10);
                    break;
                case 'date':
                    // ToDo: be more strict on 'YYYY...'
                    var year = parseInt(tag.value.substr(0, 4), 10);
                    if (year && !isNaN(year)) {
                        comTags.year = year;
                    }
                    break;
                case 'discogs_release_id':
                    tag.value = typeof tag.value === 'string' ? parseInt(tag.value, 10) : tag.value;
                    break;
                case 'replaygain_track_peak':
                    tag.value = typeof tag.value === 'string' ? parseFloat(tag.value) : tag.value;
                    break;
                case 'gapless':// iTunes gap-less flag
                    tag.value = tag.value === "1"; // boolean
                    break;
                default:
            }
            if (alias !== 'artist' && generic.isSingleton(alias)) {
                comTags[alias] = tag.value;
            }
            else {
                if (comTags.hasOwnProperty(alias)) {
                    comTags[alias].push(tag.value);
                }
                else {
                    // if we haven't previously seen this tag then
                    // initialize it to an array, ready for values to be entered
                    comTags[alias] = [tag.value];
                }
            }
        }
    };
    /**
     * Test if native tag tagTypes is a singleton
     * @param type e.g.: 'iTunes MP4' | 'asf' | 'ID3v1.1' | 'ID3v2.4' | 'vorbis'
     * @param  tag Native tag name', e.g. 'TITLE'
     * @returns {boolean} true is we can safely assume that it is a singleton
     */
    CommonTagMapper.prototype.isNativeSingleton = function (tag) {
        var alias = this.getCommonName(tag);
        return alias && !generic.commonTags[alias].multiple;
    };
    /**
     * Convert native tag key to common tag key
     * @tag  Native header tag
     * @return common tag name (alias)
     */
    CommonTagMapper.prototype.getCommonName = function (tag) {
        return this.tagMap[tag];
    };
    /**
     * Handle post mapping exceptions / correction
     * @param {string} tag Tag e.g. {"©alb", "Buena Vista Social Club")
     */
    CommonTagMapper.prototype.postMap = function (tag) {
        return;
    };
    return CommonTagMapper;
}());
exports.CommonTagMapper = CommonTagMapper;


/***/ }),

/***/ "./node_modules/music-metadata/lib/common/GenericTagTypes.js":
/*!*******************************************************************!*\
  !*** ./node_modules/music-metadata/lib/common/GenericTagTypes.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TagPriority = ['APEv2', 'vorbis', 'ID3v2.4', 'ID3v2.3', 'ID3v2.2', 'asf', 'iTunes MP4', 'ID3v1.1'];
exports.commonTags = {
    year: { multiple: false },
    track: { multiple: false },
    disk: { multiple: false },
    title: { multiple: false },
    artist: { multiple: false },
    artists: { multiple: true },
    albumartist: { multiple: false },
    album: { multiple: false },
    date: { multiple: false },
    originaldate: { multiple: false },
    originalyear: { multiple: false },
    comment: { multiple: true },
    genre: { multiple: true },
    picture: { multiple: true },
    composer: { multiple: true },
    lyrics: { multiple: true },
    albumsort: { multiple: false },
    titlesort: { multiple: false },
    work: { multiple: false },
    artistsort: { multiple: false },
    albumartistsort: { multiple: false },
    composersort: { multiple: true },
    lyricist: { multiple: true },
    writer: { multiple: true },
    conductor: { multiple: true },
    remixer: { multiple: true },
    arranger: { multiple: true },
    engineer: { multiple: true },
    producer: { multiple: true },
    djmixer: { multiple: true },
    mixer: { multiple: true },
    label: { multiple: false },
    grouping: { multiple: false },
    subtitle: { multiple: false },
    discsubtitle: { multiple: false },
    totaltracks: { multiple: false },
    totaldiscs: { multiple: false },
    compilation: { multiple: false },
    _rating: { multiple: false },
    bpm: { multiple: false },
    mood: { multiple: false },
    media: { multiple: false },
    catalognumber: { multiple: false },
    show: { multiple: false },
    showsort: { multiple: false },
    podcast: { multiple: false },
    podcasturl: { multiple: false },
    releasestatus: { multiple: false },
    releasetype: { multiple: true },
    releasecountry: { multiple: false },
    script: { multiple: false },
    language: { multiple: false },
    copyright: { multiple: false },
    license: { multiple: false },
    encodedby: { multiple: false },
    encodersettings: { multiple: false },
    gapless: { multiple: false },
    barcode: { multiple: false },
    isrc: { multiple: false },
    asin: { multiple: false },
    musicbrainz_recordingid: { multiple: false },
    musicbrainz_trackid: { multiple: false },
    musicbrainz_albumid: { multiple: false },
    musicbrainz_artistid: { multiple: true },
    musicbrainz_albumartistid: { multiple: true },
    musicbrainz_releasegroupid: { multiple: false },
    musicbrainz_workid: { multiple: false },
    musicbrainz_trmid: { multiple: false },
    musicbrainz_discid: { multiple: false },
    acoustid_id: { multiple: false },
    acoustid_fingerprint: { multiple: false },
    musicip_puid: { multiple: false },
    musicip_fingerprint: { multiple: false },
    website: { multiple: false },
    'performer:instrument': { multiple: true },
    averageLevel: { multiple: false },
    peakLevel: { multiple: false },
    notes: { multiple: true },
    key: { multiple: false },
    originalalbum: { multiple: false },
    originalartist: { multiple: false },
    discogs_release_id: { multiple: false },
    replaygain_track_peak: { multiple: false },
    replaygain_track_gain: { multiple: false }
};
/**
 * @param alias Name of common tag
 * @returns {boolean|*} true if given alias is mapped as a singleton', otherwise false
 */
function isSingleton(alias) {
    return exports.commonTags.hasOwnProperty(alias) && !exports.commonTags[alias].multiple;
}
exports.isSingleton = isSingleton;


/***/ }),

/***/ "./node_modules/music-metadata/lib/common/Util.js":
/*!********************************************************!*\
  !*** ./node_modules/music-metadata/lib/common/Util.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var assert = __webpack_require__(/*! assert */ "assert");
var Windows1292Decoder_1 = __webpack_require__(/*! ./Windows1292Decoder */ "./node_modules/music-metadata/lib/common/Windows1292Decoder.js");
var Util = /** @class */ (function () {
    function Util() {
    }
    /**
     *
     * @param buffer
     * @param start
     * @param end
     * @param encoding // ToDo: ts.enum
     * @return {number}
     */
    Util.findZero = function (buffer, start, end, encoding) {
        var i = start;
        if (encoding === 'utf16') {
            while (buffer[i] !== 0 || buffer[i + 1] !== 0) {
                if (i >= end)
                    return end;
                i += 2;
            }
            return i;
        }
        else {
            while (buffer[i] !== 0) {
                if (i >= end)
                    return end;
                i++;
            }
            return i;
        }
    };
    Util.swapBytes = function (buffer) {
        var l = buffer.length;
        assert.ok((l & 1) === 0, 'Buffer length must be even');
        for (var i = 0; i < l; i += 2) {
            var a = buffer[i];
            buffer[i] = buffer[i + 1];
            buffer[i + 1] = a;
        }
        return buffer;
    };
    Util.readUTF16String = function (buffer) {
        var offset = 0;
        if (buffer[0] === 0xFE && buffer[1] === 0xFF) {
            buffer = Util.swapBytes(buffer);
            offset = 2;
        }
        else if (buffer[0] === 0xFF && buffer[1] === 0xFE) {
            offset = 2;
        }
        return buffer.toString('ucs2', offset);
    };
    /**
     *
     * @param buffer Decoder input data
     * @param encoding 'utf16le' | 'utf16' | 'utf8' | 'iso-8859-1'
     * @return {string}
     */
    Util.decodeString = function (buffer, encoding) {
        // annoying workaround for a double BOM issue
        // https://github.com/leetreveil/musicmetadata/issues/84
        if (buffer[0] === 0xFF && buffer[1] === 0xFE && buffer[2] === 0xFE && buffer[3] === 0xFF) {
            buffer = buffer.slice(2);
        }
        if (encoding === 'utf16le' || encoding === 'utf16') {
            return Util.readUTF16String(buffer);
        }
        else if (encoding === 'utf8') {
            return buffer.toString('utf8');
        }
        else if (encoding === 'iso-8859-1') {
            return Windows1292Decoder_1.Windows1292Decoder.decode(buffer);
        }
        throw Error(encoding + ' encoding is not supported!');
    };
    Util.stripNulls = function (str) {
        str = str.replace(/^\x00+/g, '');
        str = str.replace(/\x00+$/g, '');
        return str;
    };
    /**
     * Read bit-aligned number start from buffer
     * Total offset in bits = byteOffset * 8 + bitOffset
     * @param buf Byte buffer
     * @param byteOffset Starting offset in bytes
     * @param bitOffset Starting offset in bits: 0 = lsb
     * @param len Length of number in bits
     * @return {number} decoded bit aligned number
     */
    Util.getBitAllignedNumber = function (buf, byteOffset, bitOffset, len) {
        var byteOff = byteOffset + ~~(bitOffset / 8);
        var bitOff = bitOffset % 8;
        var value = buf[byteOff];
        value &= 0xff >> bitOff;
        var bitsRead = 8 - bitOff;
        var bitsLeft = len - bitsRead;
        if (bitsLeft < 0) {
            value >>= (8 - bitOff - len);
        }
        else if (bitsLeft > 0) {
            value <<= bitsLeft;
            value |= Util.getBitAllignedNumber(buf, byteOffset, bitOffset + bitsRead, bitsLeft);
        }
        return value;
    };
    /**
     * Read bit-aligned number start from buffer
     * Total offset in bits = byteOffset * 8 + bitOffset
     * @param buf Byte buffer
     * @param byteOffset Starting offset in bytes
     * @param bitOffset Starting offset in bits: 0 = most significant bit, 7 is least significant bit
     * @return {number} decoded bit aligned number
     */
    Util.isBitSet = function (buf, byteOffset, bitOffset) {
        return Util.getBitAllignedNumber(buf, byteOffset, bitOffset, 1) === 1;
    };
    Util.strtokBITSET = {
        get: function (buf, off, bit) {
            return (buf[off] & (1 << bit)) !== 0;
        },
        len: 1
    };
    return Util;
}());
exports.default = Util;


/***/ }),

/***/ "./node_modules/music-metadata/lib/common/Windows1292Decoder.js":
/*!**********************************************************************!*\
  !*** ./node_modules/music-metadata/lib/common/Windows1292Decoder.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * windows-1252 / iso_8859-1 decoder (ANSI)
 */
var Windows1292Decoder = /** @class */ (function () {
    function Windows1292Decoder() {
    }
    Windows1292Decoder.decode = function (buffer) {
        var str = '';
        for (var i in buffer) {
            if (buffer.hasOwnProperty(i)) {
                str += Windows1292Decoder.codePointToString(Windows1292Decoder.singleByteDecoder(buffer[i]));
            }
        }
        return str;
    };
    Windows1292Decoder.inRange = function (a, min, max) {
        return min <= a && a <= max;
    };
    Windows1292Decoder.codePointToString = function (cp) {
        if (cp <= 0xFFFF) {
            return String.fromCharCode(cp);
        }
        else {
            cp -= 0x10000;
            return String.fromCharCode((cp >> 10) + 0xD800, (cp & 0x3FF) + 0xDC00);
        }
    };
    Windows1292Decoder.singleByteDecoder = function (bite) {
        if (Windows1292Decoder.inRange(bite, 0x00, 0x7F)) {
            return bite;
        }
        var codePoint = Windows1292Decoder.windows1252[bite - 0x80];
        if (codePoint === null) {
            throw Error('invaliding encoding');
        }
        return codePoint;
    };
    Windows1292Decoder.windows1252 = [8364, 129, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352,
        8249, 338, 141, 381, 143, 144, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732,
        8482, 353, 8250, 339, 157, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168,
        169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184,
        185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200,
        201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216,
        217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232,
        233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247,
        248, 249, 250, 251, 252, 253, 254, 255];
    return Windows1292Decoder;
}());
exports.Windows1292Decoder = Windows1292Decoder;


/***/ }),

/***/ "./node_modules/music-metadata/lib/flac/FlacParser.js":
/*!************************************************************!*\
  !*** ./node_modules/music-metadata/lib/flac/FlacParser.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __webpack_require__(/*! ../common/Util */ "./node_modules/music-metadata/lib/common/Util.js");
var strtok3_1 = __webpack_require__(/*! strtok3 */ "./node_modules/strtok3/lib/index.js");
var Token = __webpack_require__(/*! token-types */ "./node_modules/token-types/lib/index.js");
var Vorbis_1 = __webpack_require__(/*! ../vorbis/Vorbis */ "./node_modules/music-metadata/lib/vorbis/Vorbis.js");
var AbstractID3Parser_1 = __webpack_require__(/*! ../id3v2/AbstractID3Parser */ "./node_modules/music-metadata/lib/id3v2/AbstractID3Parser.js");
var FourCC_1 = __webpack_require__(/*! ../common/FourCC */ "./node_modules/music-metadata/lib/common/FourCC.js");
/**
 * FLAC supports up to 128 kinds of metadata blocks; currently the following are defined:
 * ref: https://xiph.org/flac/format.html#metadata_block
 */
var BlockType;
(function (BlockType) {
    BlockType[BlockType["STREAMINFO"] = 0] = "STREAMINFO";
    BlockType[BlockType["PADDING"] = 1] = "PADDING";
    BlockType[BlockType["APPLICATION"] = 2] = "APPLICATION";
    BlockType[BlockType["SEEKTABLE"] = 3] = "SEEKTABLE";
    BlockType[BlockType["VORBIS_COMMENT"] = 4] = "VORBIS_COMMENT";
    BlockType[BlockType["CUESHEET"] = 5] = "CUESHEET";
    BlockType[BlockType["PICTURE"] = 6] = "PICTURE";
})(BlockType || (BlockType = {}));
var FlacParser = /** @class */ (function (_super) {
    __extends(FlacParser, _super);
    function FlacParser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tags = [];
        _this.padding = 0;
        _this.warnings = []; // ToDo: should be part of the parsing result
        return _this;
    }
    FlacParser.getInstance = function () {
        return new FlacParser();
    };
    FlacParser.prototype._parse = function (metadata, tokenizer, options) {
        var _this = this;
        this.metadata = metadata;
        this.tokenizer = tokenizer;
        this.options = options;
        return tokenizer.readToken(FourCC_1.FourCcToken).then(function (fourCC) {
            if (fourCC.toString() !== 'fLaC') {
                throw new Error("Invalid FLAC preamble");
            }
            return _this.parseBlockHeader();
        });
    };
    FlacParser.prototype.parseBlockHeader = function () {
        var _this = this;
        // Read block header
        return this.tokenizer.readToken(Metadata.BlockHeader).then(function (blockHeader) {
            // Parse block data
            return _this.parseDataBlock(blockHeader).then(function () {
                if (blockHeader.lastBlock) {
                    _this.metadata.native.vorbis = _this.tags;
                    // done
                }
                else {
                    return _this.parseBlockHeader();
                }
            });
        });
    };
    FlacParser.prototype.parseDataBlock = function (blockHeader) {
        switch (blockHeader.type) {
            case BlockType.STREAMINFO:
                return this.parseBlockStreamInfo(blockHeader.length);
            case BlockType.PADDING:
                this.padding += blockHeader.length;
                break;
            case BlockType.APPLICATION:
                break;
            case BlockType.SEEKTABLE:
                break;
            case BlockType.VORBIS_COMMENT:
                return this.parseComment(blockHeader.length);
            case BlockType.CUESHEET:
                break;
            case BlockType.PICTURE:
                return this.parsePicture(blockHeader.length);
            default:
                this.warnings.push("Unknown block type: " + blockHeader.type);
        }
        // Ignore data block
        return this.tokenizer.readToken(new strtok3_1.IgnoreType(blockHeader.length));
    };
    /**
     * Parse STREAMINFO
     */
    FlacParser.prototype.parseBlockStreamInfo = function (dataLen) {
        var _this = this;
        if (dataLen !== Metadata.BlockStreamInfo.len)
            throw new Error("Unexpected block-stream-info length");
        return this.tokenizer.readToken(Metadata.BlockStreamInfo).then(function (streamInfo) {
            _this.metadata.format = {
                dataformat: 'flac',
                lossless: true,
                numberOfChannels: streamInfo.channels,
                bitsPerSample: streamInfo.bitsPerSample,
                sampleRate: streamInfo.sampleRate,
                duration: streamInfo.totalSamples / streamInfo.sampleRate
            };
            // callback('format', 'bitrate', fileSize / duration) // ToDo: exclude meta-data
        });
    };
    /**
     * Parse VORBIS_COMMENT
     * Ref: https://www.xiph.org/vorbis/doc/Vorbis_I_spec.html#x1-640004.2.3
     */
    FlacParser.prototype.parseComment = function (dataLen) {
        var _this = this;
        return this.tokenizer.readToken(new Token.BufferType(dataLen)).then(function (data) {
            var decoder = new DataDecoder(data);
            decoder.readStringUtf8(); // vendor (skip)
            var commentListLength = decoder.readInt32();
            for (var i = 0; i < commentListLength; i++) {
                var comment = decoder.readStringUtf8();
                var split = comment.split('=');
                _this.tags.push({ id: split[0].toUpperCase(), value: split[1] });
            }
        });
    };
    FlacParser.prototype.parsePicture = function (dataLen) {
        var _this = this;
        if (this.options.skipCovers) {
            return this.tokenizer.ignore(dataLen);
        }
        else {
            return this.tokenizer.readToken(new Vorbis_1.VorbisPictureToken(dataLen)).then(function (picture) {
                _this.tags.push({ id: 'METADATA_BLOCK_PICTURE', value: picture });
            });
        }
    };
    return FlacParser;
}(AbstractID3Parser_1.AbstractID3v2Parser));
exports.FlacParser = FlacParser;
var Metadata = /** @class */ (function () {
    function Metadata() {
    }
    Metadata.BlockHeader = {
        len: 4,
        get: function (buf, off) {
            return {
                lastBlock: Util_1.default.strtokBITSET.get(buf, off, 7),
                type: Util_1.default.getBitAllignedNumber(buf, off, 1, 7),
                length: Token.UINT24_BE.get(buf, off + 1)
            };
        }
    };
    /**
     * METADATA_BLOCK_DATA
     * Ref: https://xiph.org/flac/format.html#metadata_block_streaminfo
     */
    Metadata.BlockStreamInfo = {
        len: 34,
        get: function (buf, off) {
            return {
                // The minimum block size (in samples) used in the stream.
                minimumBlockSize: Token.UINT16_BE.get(buf, off),
                // The maximum block size (in samples) used in the stream.
                // (Minimum blocksize == maximum blocksize) implies a fixed-blocksize stream.
                maximumBlockSize: Token.UINT16_BE.get(buf, off + 2) / 1000,
                // The minimum frame size (in bytes) used in the stream.
                // May be 0 to imply the value is not known.
                minimumFrameSize: Token.UINT24_BE.get(buf, off + 4),
                // The maximum frame size (in bytes) used in the stream.
                // May be 0 to imply the value is not known.
                maximumFrameSize: Token.UINT24_BE.get(buf, off + 7),
                // Sample rate in Hz. Though 20 bits are available,
                // the maximum sample rate is limited by the structure of frame headers to 655350Hz.
                // Also, a value of 0 is invalid.
                sampleRate: Token.UINT24_BE.get(buf, off + 10) >> 4,
                // probably slower: sampleRate: common.getBitAllignedNumber(buf, off + 10, 0, 20),
                // (number of channels)-1. FLAC supports from 1 to 8 channels
                channels: Util_1.default.getBitAllignedNumber(buf, off + 12, 4, 3) + 1,
                // bits per sample)-1.
                // FLAC supports from 4 to 32 bits per sample. Currently the reference encoder and decoders only support up to 24 bits per sample.
                bitsPerSample: Util_1.default.getBitAllignedNumber(buf, off + 12, 7, 5) + 1,
                // Total samples in stream.
                // 'Samples' means inter-channel sample, i.e. one second of 44.1Khz audio will have 44100 samples regardless of the number of channels.
                // A value of zero here means the number of total samples is unknown.
                totalSamples: Util_1.default.getBitAllignedNumber(buf, off + 13, 4, 36),
                // the MD5 hash of the file (see notes for usage... it's a littly tricky)
                fileMD5: new Token.BufferType(16).get(buf, off + 18)
            };
        }
    };
    return Metadata;
}());
var DataDecoder = /** @class */ (function () {
    function DataDecoder(data) {
        this.data = data;
        this.offset = 0;
    }
    DataDecoder.prototype.readInt32 = function () {
        var value = Token.UINT32_LE.get(this.data, this.offset);
        this.offset += 4;
        return value;
    };
    DataDecoder.prototype.readStringUtf8 = function () {
        var len = this.readInt32();
        var value = this.data.toString('utf8', this.offset, this.offset + len);
        this.offset += len;
        return value;
    };
    return DataDecoder;
}());


/***/ }),

/***/ "./node_modules/music-metadata/lib/id3v1/ID3v1Parser.js":
/*!**************************************************************!*\
  !*** ./node_modules/music-metadata/lib/id3v1/ID3v1Parser.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Token = __webpack_require__(/*! token-types */ "./node_modules/token-types/lib/index.js");
/**
 * ID3v1 Genre mappings
 * Ref: https://de.wikipedia.org/wiki/Liste_der_ID3v1-Genres
 */
exports.Genres = [
    "Blues", "Classic Rock", "Country", "Dance", "Disco", "Funk", "Grunge", "Hip-Hop",
    "Jazz", "Metal", "New Age", "Oldies", "Other", "Pop", "R&B", "Rap", "Reggae", "Rock",
    "Techno", "Industrial", "Alternative", "Ska", "Death Metal", "Pranks", "Soundtrack",
    "Euro-Techno", "Ambient", "Trip-Hop", "Vocal", "Jazz+Funk", "Fusion", "Trance",
    "Classical", "Instrumental", "Acid", "House", "Game", "Sound Clip", "Gospel", "Noise",
    "Alt. Rock", "Bass", "Soul", "Punk", "Space", "Meditative", "Instrumental Pop",
    "Instrumental Rock", "Ethnic", "Gothic", "Darkwave", "Techno-Industrial",
    "Electronic", "Pop-Folk", "Eurodance", "Dream", "Southern Rock", "Comedy", "Cult",
    "Gangsta Rap", "Top 40", "Christian Rap", "Pop/Funk", "Jungle", "Native American",
    "Cabaret", "New Wave", "Psychedelic", "Rave", "Showtunes", "Trailer", "Lo-Fi", "Tribal",
    "Acid Punk", "Acid Jazz", "Polka", "Retro", "Musical", "Rock & Roll", "Hard Rock",
    "Folk", "Folk/Rock", "National Folk", "Swing", "Fast-Fusion", "Bebob", "Latin", "Revival",
    "Celtic", "Bluegrass", "Avantgarde", "Gothic Rock", "Progressive Rock", "Psychedelic Rock",
    "Symphonic Rock", "Slow Rock", "Big Band", "Chorus", "Easy Listening", "Acoustic", "Humour",
    "Speech", "Chanson", "Opera", "Chamber Music", "Sonata", "Symphony", "Booty Bass", "Primus",
    "Porn Groove", "Satire", "Slow Jam", "Club", "Tango", "Samba", "Folklore",
    "Ballad", "Power Ballad", "Rhythmic Soul", "Freestyle", "Duet", "Punk Rock", "Drum Solo",
    "A Cappella", "Euro-House", "Dance Hall", "Goa", "Drum & Bass", "Club-House",
    "Hardcore", "Terror", "Indie", "BritPop", "Negerpunk", "Polsk Punk", "Beat",
    "Christian Gangsta Rap", "Heavy Metal", "Black Metal", "Crossover", "Contemporary Christian",
    "Christian Rock", "Merengue", "Salsa", "Thrash Metal", "Anime", "JPop", "Synthpop",
    "Abstract", "Art Rock", "Baroque", "Bhangra", "Big Beat", "Breakbeat", "Chillout",
    "Downtempo", "Dub", "EBM", "Eclectic", "Electro", "Electroclash", "Emo", "Experimental",
    "Garage", "Global", "IDM", "Illbient", "Industro-Goth", "Jam Band", "Krautrock",
    "Leftfield", "Lounge", "Math Rock", "New Romantic", "Nu-Breakz", "Post-Punk", "Post-Rock",
    "Psytrance", "Shoegaze", "Space Rock", "Trop Rock", "World Music", "Neoclassical", "Audiobook",
    "Audio Theatre", "Neue Deutsche Welle", "Podcast", "Indie Rock", "G-Funk", "Dubstep",
    "Garage Rock", "Psybient"
];
/**
 * Spec: http://id3.org/ID3v1
 * Wiki: https://en.wikipedia.org/wiki/ID3
 */
var Iid3v1Token = {
    len: 128,
    /**
     * @param buf Buffer possibly holding the 128 bytes ID3v1.1 metadata header
     * @param off Offset in buffer in bytes
     * @returns ID3v1.1 header if first 3 bytes equals 'TAG', otherwise null is returned
     */
    get: function (buf, off) {
        var header = new Id3v1StringType(3).get(buf, off);
        return header === "TAG" ? {
            header: header,
            title: new Id3v1StringType(30).get(buf, off + 3),
            artist: new Id3v1StringType(30).get(buf, off + 33),
            album: new Id3v1StringType(30).get(buf, off + 63),
            year: new Id3v1StringType(4).get(buf, off + 93),
            comment: new Id3v1StringType(28).get(buf, off + 97),
            // ID3v1.1 separator for track
            zeroByte: Token.UINT8.get(buf, off + 127),
            // track: ID3v1.1 field added by Michael Mutschler
            track: Token.UINT8.get(buf, off + 126),
            genre: Token.UINT8.get(buf, off + 127)
        } : null;
    }
};
var Id3v1StringType = /** @class */ (function (_super) {
    __extends(Id3v1StringType, _super);
    function Id3v1StringType(len) {
        return _super.call(this, len, "binary") || this;
    }
    Id3v1StringType.trimRightNull = function (x) {
        var pos0 = x.indexOf('\0');
        return pos0 === -1 ? x : x.substr(0, pos0);
    };
    Id3v1StringType.prototype.get = function (buf, off) {
        var value = _super.prototype.get.call(this, buf, off);
        value = Id3v1StringType.trimRightNull(value);
        value = value.trim();
        return value.length > 0 ? value : undefined;
    };
    return Id3v1StringType;
}(Token.StringType));
var ID3v1Parser = /** @class */ (function () {
    function ID3v1Parser() {
    }
    ID3v1Parser.getInstance = function () {
        return new ID3v1Parser();
    };
    ID3v1Parser.getGenre = function (genreIndex) {
        if (genreIndex < exports.Genres.length) {
            return exports.Genres[genreIndex];
        }
        return undefined; // ToDO: generate warning
    };
    ID3v1Parser.prototype.parse = function (tokenizer) {
        return tokenizer.readToken(Iid3v1Token, tokenizer.fileSize - Iid3v1Token.len).then(function (header) {
            if (header) {
                var id3 = [];
                for (var _i = 0, _a = ["title", "artist", "album", "comment", "track", "year"]; _i < _a.length; _i++) {
                    var id = _a[_i];
                    if (header[id] && header[id] !== "")
                        id3.push({ id: id, value: header[id] });
                }
                var genre = ID3v1Parser.getGenre(header.genre);
                if (genre)
                    id3.push({ id: "genre", value: genre });
                return {
                    "ID3v1.1": id3
                };
            }
            else
                return null;
        });
    };
    return ID3v1Parser;
}());
exports.ID3v1Parser = ID3v1Parser;


/***/ }),

/***/ "./node_modules/music-metadata/lib/id3v1/ID3v1TagMap.js":
/*!**************************************************************!*\
  !*** ./node_modules/music-metadata/lib/id3v1/ID3v1TagMap.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GenericTagMapper_1 = __webpack_require__(/*! ../common/GenericTagMapper */ "./node_modules/music-metadata/lib/common/GenericTagMapper.js");
/**
 * ID3v1 tag mappings
 */
var id3v1TagMap = {
    title: 'title',
    artist: 'artist',
    album: 'album',
    year: 'year',
    comment: 'comment',
    track: 'track',
    genre: 'genre'
};
var ID3v1TagMapper = /** @class */ (function (_super) {
    __extends(ID3v1TagMapper, _super);
    function ID3v1TagMapper() {
        return _super.call(this, ['ID3v1.1'], id3v1TagMap) || this;
    }
    return ID3v1TagMapper;
}(GenericTagMapper_1.CommonTagMapper));
exports.ID3v1TagMapper = ID3v1TagMapper;


/***/ }),

/***/ "./node_modules/music-metadata/lib/id3v2/AbstractID3Parser.js":
/*!********************************************************************!*\
  !*** ./node_modules/music-metadata/lib/id3v2/AbstractID3Parser.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var strtok3 = __webpack_require__(/*! strtok3 */ "./node_modules/strtok3/lib/index.js");
var ID3v2_1 = __webpack_require__(/*! ./ID3v2 */ "./node_modules/music-metadata/lib/id3v2/ID3v2.js");
var ID3v2Parser_1 = __webpack_require__(/*! ./ID3v2Parser */ "./node_modules/music-metadata/lib/id3v2/ID3v2Parser.js");
var ID3v1Parser_1 = __webpack_require__(/*! ../id3v1/ID3v1Parser */ "./node_modules/music-metadata/lib/id3v1/ID3v1Parser.js");
var AbstractID3v2Parser = /** @class */ (function () {
    function AbstractID3v2Parser() {
    }
    AbstractID3v2Parser.startsWithID3v2Header = function (tokenizer) {
        return tokenizer.peekToken(ID3v2_1.ID3v2Token.Header).then(function (id3Header) { return (id3Header.fileIdentifier === "ID3"); });
    };
    AbstractID3v2Parser.prototype.parse = function (tokenizer, options) {
        var metadata = {
            format: {},
            native: {}
        };
        return this.parseID3v2(metadata, tokenizer, options).then(function () {
            return metadata;
        }).catch(function (err) {
            if (err.message === strtok3.endOfFile)
                // ToDo: maybe a warning?
                return metadata;
            else
                throw err;
        });
    };
    AbstractID3v2Parser.prototype.finalize = function (metadata) {
        return metadata;
    };
    AbstractID3v2Parser.prototype.parseID3v2 = function (metadata, tokenizer, options) {
        var _this = this;
        return tokenizer.peekToken(ID3v2_1.ID3v2Token.Header)
            .then(function (id3Header) { return (id3Header.fileIdentifier === "ID3"); })
            .then(function (isID3) {
            if (isID3) {
                var id3parser = new ID3v2Parser_1.ID3v2Parser();
                return id3parser.parse(metadata, tokenizer, options).then(function () { return _this.parseID3v2(metadata, tokenizer, options); });
            }
        })
            .then(function () {
            // merge ID3v2 metadata with whatever came after the ID3v2 header
            return _this._parse(metadata, tokenizer, options);
        })
            .then(function () {
            var id3v1parser = new ID3v1Parser_1.ID3v1Parser();
            return id3v1parser.parse(tokenizer).then(function (id3v1Metadata) {
                for (var tagType in id3v1Metadata) {
                    metadata.native[tagType] = id3v1Metadata[tagType];
                }
                _this.finalize(metadata);
            });
        });
    };
    return AbstractID3v2Parser;
}());
exports.AbstractID3v2Parser = AbstractID3v2Parser;


/***/ }),

/***/ "./node_modules/music-metadata/lib/id3v2/FrameParser.js":
/*!**************************************************************!*\
  !*** ./node_modules/music-metadata/lib/id3v2/FrameParser.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __webpack_require__(/*! ../common/Util */ "./node_modules/music-metadata/lib/common/Util.js");
var Token = __webpack_require__(/*! token-types */ "./node_modules/token-types/lib/index.js");
var ID3v2_1 = __webpack_require__(/*! ./ID3v2 */ "./node_modules/music-metadata/lib/id3v2/ID3v2.js");
var FrameParser = /** @class */ (function () {
    function FrameParser() {
    }
    FrameParser.readData = function (b, type, major, includeCovers) {
        var encoding = FrameParser.getTextEncoding(b[0]);
        var length = b.length;
        var offset = 0;
        var output = []; // ToDo
        var nullTerminatorLength = FrameParser.getNullTerminatorLength(encoding);
        var fzero;
        var out = {};
        switch (type !== 'TXXX' && type[0] === 'T' ? 'T*' : type) {
            case 'T*': // 4.2.1. Text information frames - details
            case 'IPLS':// v2.3: Involved people list
                var text = Util_1.default.decodeString(b.slice(1), encoding).replace(/\x00+$/, '');
                switch (type) {
                    case 'TMCL': // Musician credits list
                    case 'TIPL': // Involved people list
                    case 'IPLS':// Involved people list
                        output = FrameParser.splitValue(4, text);
                        output = FrameParser.functionList(output);
                        break;
                    case 'TRK':
                    case 'TRCK':
                    case 'TPOS':
                        output = text;
                        break;
                    case 'TCOM':
                    case 'TEXT':
                    case 'TOLY':
                    case 'TOPE':
                    case 'TPE1':
                        // id3v2.3 defines that TCOM, TEXT, TOLY, TOPE & TPE1 values are separated by /
                        output = FrameParser.splitValue(major, text);
                        break;
                    default:
                        output = major >= 4 ? FrameParser.splitValue(major, text) : [text];
                }
                break;
            case 'TXXX':
                output = FrameParser.readIdentifierAndData(b, offset + 1, length, encoding);
                output = {
                    description: output.id,
                    text: FrameParser.splitValue(major, Util_1.default.decodeString(output.data, encoding).replace(/\x00+$/, ''))
                };
                break;
            case 'PIC':
            case 'APIC':
                if (includeCovers) {
                    var pic = {};
                    offset += 1;
                    switch (major) {
                        case 2:
                            pic.format = Util_1.default.decodeString(b.slice(offset, offset + 3), encoding);
                            offset += 3;
                            break;
                        case 3:
                        case 4:
                            var enc = 'iso-8859-1';
                            fzero = Util_1.default.findZero(b, offset, length, enc);
                            pic.format = Util_1.default.decodeString(b.slice(offset, fzero), enc);
                            offset = fzero + 1;
                            break;
                        default:
                            throw new Error('Warning: unexpected major versionIndex: ' + major);
                    }
                    pic.type = ID3v2_1.AttachedPictureType[b[offset]];
                    offset += 1;
                    fzero = Util_1.default.findZero(b, offset, length, encoding);
                    pic.description = Util_1.default.decodeString(b.slice(offset, fzero), encoding);
                    offset = fzero + nullTerminatorLength;
                    pic.data = new Buffer(b.slice(offset, length));
                    output = pic;
                }
                break;
            case 'CNT':
            case 'PCNT':
                output = Token.UINT32_BE.get(b, 0);
                break;
            case 'SYLT':
                // skip text encoding (1 byte),
                //      language (3 bytes),
                //      time stamp format (1 byte),
                //      content tagTypes (1 byte),
                //      content descriptor (1 byte)
                offset += 7;
                output = [];
                while (offset < length) {
                    var txt = b.slice(offset, offset = Util_1.default.findZero(b, offset, length, encoding));
                    offset += 5; // push offset forward one +  4 byte timestamp
                    output.push(Util_1.default.decodeString(txt, encoding));
                }
                break;
            case 'ULT':
            case 'USLT':
            case 'COM':
            case 'COMM':
                offset += 1;
                out.language = Util_1.default.decodeString(b.slice(offset, offset + 3), 'iso-8859-1');
                offset += 3;
                fzero = Util_1.default.findZero(b, offset, length, encoding);
                out.description = Util_1.default.decodeString(b.slice(offset, fzero), encoding);
                offset = fzero + nullTerminatorLength;
                out.text = Util_1.default.decodeString(b.slice(offset, length), encoding).replace(/\x00+$/, '');
                output = [out];
                break;
            case 'UFID':
                output = FrameParser.readIdentifierAndData(b, offset, length, 'iso-8859-1');
                output = { owner_identifier: output.id, identifier: output.data };
                break;
            case 'PRIV':// private frame
                output = FrameParser.readIdentifierAndData(b, offset, length, 'iso-8859-1');
                output = { owner_identifier: output.id, data: output.data };
                break;
            default:
                // ToDO? console.log('Warning: unsupported id3v2-tag-type: ' + type)
                break;
        }
        return output;
    };
    /**
     * Converts TMCL (Musician credits list) or TIPL (Involved people list)
     * @param entries
     */
    FrameParser.functionList = function (entries) {
        var res = {};
        for (var i = 0; i + 1 < entries.length; i += 2) {
            var names = entries[i + 1].split(',');
            res[entries[i]] = res.hasOwnProperty(entries[i]) ? res[entries[i]].concat(names) : names;
        }
        return res;
    };
    /**
     * id3v2.4 defines that multiple T* values are separated by 0x00
     * id3v2.3 defines that TCOM, TEXT, TOLY, TOPE & TPE1 values are separated by /
     * @param {number} major Major version, e.g. (4) for  id3v2.4
     * @param {string} text Concatenated tag value
     * @returns {string[]} Slitted value
     */
    FrameParser.splitValue = function (major, text) {
        var values = text.split(major >= 4 ? /\x00/g : /\//g);
        return FrameParser.trimArray(values);
    };
    FrameParser.trimArray = function (values) {
        for (var i = 0; i < values.length; ++i) {
            values[i] = values[i].replace(/\x00+$/, '').trim();
        }
        return values;
    };
    FrameParser.readIdentifierAndData = function (b, offset, length, encoding) {
        var fzero = Util_1.default.findZero(b, offset, length, encoding);
        var id = Util_1.default.decodeString(b.slice(offset, fzero), encoding);
        offset = fzero + FrameParser.getNullTerminatorLength(encoding);
        return { id: id, data: b.slice(offset, length) };
    };
    FrameParser.getTextEncoding = function (byte) {
        switch (byte) {
            case 0x00:
                return 'iso-8859-1'; // binary
            case 0x01:
            case 0x02:
                return 'utf16'; // 01 = with bom, 02 = without bom
            case 0x03:
                return 'utf8';
            default:
                return 'utf8';
        }
    };
    FrameParser.getNullTerminatorLength = function (enc) {
        switch (enc) {
            case 'utf16':
                return 2;
            default:
                return 1;
        }
    };
    return FrameParser;
}());
exports.default = FrameParser;


/***/ }),

/***/ "./node_modules/music-metadata/lib/id3v2/ID3v2.js":
/*!********************************************************!*\
  !*** ./node_modules/music-metadata/lib/id3v2/ID3v2.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __webpack_require__(/*! ../common/Util */ "./node_modules/music-metadata/lib/common/Util.js");
var Token = __webpack_require__(/*! token-types */ "./node_modules/token-types/lib/index.js");
/**
 * The picture type according to the ID3v2 APIC frame
 * Ref: http://id3.org/id3v2.3.0#Attached_picture
 */
var AttachedPictureType;
(function (AttachedPictureType) {
    AttachedPictureType[AttachedPictureType["Other"] = 0] = "Other";
    AttachedPictureType[AttachedPictureType["32x32 pixels 'file icon' (PNG only)"] = 1] = "32x32 pixels 'file icon' (PNG only)";
    AttachedPictureType[AttachedPictureType["Other file icon"] = 2] = "Other file icon";
    AttachedPictureType[AttachedPictureType["Cover (front)"] = 3] = "Cover (front)";
    AttachedPictureType[AttachedPictureType["Cover (back)"] = 4] = "Cover (back)";
    AttachedPictureType[AttachedPictureType["Leaflet page"] = 5] = "Leaflet page";
    AttachedPictureType[AttachedPictureType["Media (e.g. label side of CD)"] = 6] = "Media (e.g. label side of CD)";
    AttachedPictureType[AttachedPictureType["Lead artist/lead performer/soloist"] = 7] = "Lead artist/lead performer/soloist";
    AttachedPictureType[AttachedPictureType["Artist/performer"] = 8] = "Artist/performer";
    AttachedPictureType[AttachedPictureType["Conductor"] = 9] = "Conductor";
    AttachedPictureType[AttachedPictureType["Band/Orchestra"] = 10] = "Band/Orchestra";
    AttachedPictureType[AttachedPictureType["Composer"] = 11] = "Composer";
    AttachedPictureType[AttachedPictureType["Lyricist/text writer"] = 12] = "Lyricist/text writer";
    AttachedPictureType[AttachedPictureType["Recording Location"] = 13] = "Recording Location";
    AttachedPictureType[AttachedPictureType["During recording"] = 14] = "During recording";
    AttachedPictureType[AttachedPictureType["During performance"] = 15] = "During performance";
    AttachedPictureType[AttachedPictureType["Movie/video screen capture"] = 16] = "Movie/video screen capture";
    AttachedPictureType[AttachedPictureType["A bright coloured fish"] = 17] = "A bright coloured fish";
    AttachedPictureType[AttachedPictureType["Illustration"] = 18] = "Illustration";
    AttachedPictureType[AttachedPictureType["Band/artist logotype"] = 19] = "Band/artist logotype";
    AttachedPictureType[AttachedPictureType["Publisher/Studio logotype"] = 20] = "Publisher/Studio logotype";
})(AttachedPictureType = exports.AttachedPictureType || (exports.AttachedPictureType = {}));
var ID3v2Token = /** @class */ (function () {
    function ID3v2Token() {
    }
    /**
     * 28 bits (representing up to 256MB) integer, the msb is 0 to avoid 'false syncsignals'.
     * 4 * %0xxxxxxx
     */
    ID3v2Token.UINT32SYNCSAFE = {
        get: function (buf, off) {
            return buf[off + 3] & 0x7f | ((buf[off + 2]) << 7) |
                ((buf[off + 1]) << 14) | ((buf[off]) << 21);
        },
        len: 4
    };
    /**
     * ID3v2 header
     * Ref: http://id3.org/id3v2.3.0#ID3v2_header
     * ToDo
     */
    ID3v2Token.Header = {
        len: 10,
        get: function (buf, off) {
            return {
                // ID3v2/file identifier   "ID3"
                fileIdentifier: new Token.StringType(3, 'ascii').get(buf, off),
                // ID3v2 versionIndex
                version: {
                    major: Token.INT8.get(buf, off + 3),
                    revision: Token.INT8.get(buf, off + 4)
                },
                // ID3v2 flags
                flags: {
                    // Raw flags value
                    raw: Token.INT8.get(buf, off + 4),
                    // Unsynchronisation
                    unsynchronisation: Util_1.default.strtokBITSET.get(buf, off + 5, 7),
                    // Extended header
                    isExtendedHeader: Util_1.default.strtokBITSET.get(buf, off + 5, 6),
                    // Experimental indicator
                    expIndicator: Util_1.default.strtokBITSET.get(buf, off + 5, 5),
                    footer: Util_1.default.strtokBITSET.get(buf, off + 5, 4)
                },
                size: ID3v2Token.UINT32SYNCSAFE.get(buf, off + 6)
            };
        }
    };
    ID3v2Token.ExtendedHeader = {
        len: 10,
        get: function (buf, off) {
            return {
                // Extended header size
                size: Token.UINT32_BE.get(buf, off),
                // Extended Flags
                extendedFlags: Token.UINT16_BE.get(buf, off + 4),
                // Size of padding
                sizeOfPadding: Token.UINT32_BE.get(buf, off + 6),
                // CRC data present
                crcDataPresent: Util_1.default.strtokBITSET.get(buf, off + 4, 31)
            };
        }
    };
    return ID3v2Token;
}());
exports.ID3v2Token = ID3v2Token;


/***/ }),

/***/ "./node_modules/music-metadata/lib/id3v2/ID3v22TagMapper.js":
/*!******************************************************************!*\
  !*** ./node_modules/music-metadata/lib/id3v2/ID3v22TagMapper.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GenericTagMapper_1 = __webpack_require__(/*! ../common/GenericTagMapper */ "./node_modules/music-metadata/lib/common/GenericTagMapper.js");
/**
 * ID3v2.2 tag mappings
 */
exports.id3v22TagMap = {
    TT2: 'title',
    TP1: 'artist',
    TP2: 'albumartist',
    TAL: 'album',
    TYE: 'year',
    COM: 'comment',
    TRK: 'track',
    TPA: 'disk',
    TCO: 'genre',
    PIC: 'picture',
    TCM: 'composer',
    TOR: 'originaldate',
    TOT: 'work',
    TXT: 'lyricist',
    TP3: 'conductor',
    TPB: 'label',
    TT1: 'grouping',
    TT3: 'subtitle',
    TLA: 'language',
    TCR: 'copyright',
    WCP: 'license',
    TEN: 'encodedby',
    TSS: 'encodersettings',
    WAR: 'website',
    'COM:iTunPGAP': 'gapless'
    /* ToDo: iTunes tags:
    'COM:iTunNORM': ,
    'COM:iTunSMPB': 'encoder delay',
    'COM:iTunes_CDDB_IDs'
    */
};
var ID3v22TagMapper = /** @class */ (function (_super) {
    __extends(ID3v22TagMapper, _super);
    function ID3v22TagMapper() {
        return _super.call(this, ['ID3v2.2'], exports.id3v22TagMap) || this;
    }
    return ID3v22TagMapper;
}(GenericTagMapper_1.CommonTagMapper));
exports.ID3v22TagMapper = ID3v22TagMapper;


/***/ }),

/***/ "./node_modules/music-metadata/lib/id3v2/ID3v24TagMapper.js":
/*!******************************************************************!*\
  !*** ./node_modules/music-metadata/lib/id3v2/ID3v24TagMapper.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GenericTagMapper_1 = __webpack_require__(/*! ../common/GenericTagMapper */ "./node_modules/music-metadata/lib/common/GenericTagMapper.js");
var Util_1 = __webpack_require__(/*! ../common/Util */ "./node_modules/music-metadata/lib/common/Util.js");
/**
 * ID3v2.3/ID3v2.4 tag mappings
 */
var id3v24TagMap = {
    // id3v2.3
    TIT2: "title",
    TPE1: "artist",
    "TXXX:Artists": "artists",
    TPE2: "albumartist",
    TALB: "album",
    TDRV: "date",
    /**
     * Original release year
     */
    TORY: "originalyear",
    TPOS: "disk",
    TCON: "genre",
    APIC: "picture",
    TCOM: "composer",
    "USLT:description": "lyrics",
    TSOA: "albumsort",
    TSOT: "titlesort",
    TOAL: "originalalbum",
    TSOP: "artistsort",
    TSO2: "albumartistsort",
    TSOC: "composersort",
    TEXT: "lyricist",
    "TXXX:Writer": "writer",
    TPE3: "conductor",
    // 'IPLS:instrument': 'performer:instrument', // ToDo
    TPE4: "remixer",
    "IPLS:arranger": "arranger",
    "IPLS:engineer": "engineer",
    "IPLS:producer": "producer",
    "IPLS:DJ-mix": "djmixer",
    "IPLS:mix": "mixer",
    TPUB: "label",
    TIT1: "grouping",
    TIT3: "subtitle",
    TRCK: "track",
    TCMP: "compilation",
    POPM: "_rating",
    TBPM: "bpm",
    TMED: "media",
    "TXXX:CATALOGNUMBER": "catalognumber",
    "TXXX:MusicBrainz Album Status": "releasestatus",
    "TXXX:MusicBrainz Album Type": "releasetype",
    /**
     * Release country as documented: https://picard.musicbrainz.org/docs/mappings/#cite_note-0
     */
    "TXXX:MusicBrainz Album Release Country": "releasecountry",
    /**
     * Release country as implemented // ToDo: report
     */
    "TXXX:RELEASECOUNTRY": "releasecountry",
    "TXXX:SCRIPT": "script",
    TLAN: "language",
    TCOP: "copyright",
    WCOP: "license",
    TENC: "encodedby",
    TSSE: "encodersettings",
    "TXXX:BARCODE": "barcode",
    TSRC: "isrc",
    "TXXX:ASIN": "asin",
    "TXXX:originalyear": "originalyear",
    "UFID:http://musicbrainz.org": "musicbrainz_recordingid",
    "TXXX:MusicBrainz Release Track Id": "musicbrainz_trackid",
    "TXXX:MusicBrainz Album Id": "musicbrainz_albumid",
    "TXXX:MusicBrainz Artist Id": "musicbrainz_artistid",
    "TXXX:MusicBrainz Album Artist Id": "musicbrainz_albumartistid",
    "TXXX:MusicBrainz Release Group Id": "musicbrainz_releasegroupid",
    "TXXX:MusicBrainz Work Id": "musicbrainz_workid",
    "TXXX:MusicBrainz TRM Id": "musicbrainz_trmid",
    "TXXX:MusicBrainz Disc Id": "musicbrainz_discid",
    "TXXX:ACOUSTID_ID": "acoustid_id",
    "TXXX:Acoustid Id": "acoustid_id",
    "TXXX:Acoustid Fingerprint": "acoustid_fingerprint",
    "TXXX:MusicIP PUID": "musicip_puid",
    "TXXX:MusicMagic Fingerprint": "musicip_fingerprint",
    WOAR: "website",
    // id3v2.4
    // ToDo: In same sequence as defined at http://id3.org/id3v2.4.0-frames
    TDRC: "date",
    TYER: "year",
    TDOR: "originaldate",
    // 'TMCL:instrument': 'performer:instrument',
    "TIPL:arranger": "arranger",
    "TIPL:engineer": "engineer",
    "TIPL:producer": "producer",
    "TIPL:DJ-mix": "djmixer",
    "TIPL:mix": "mixer",
    TMOO: "mood",
    // additional mappings:
    SYLT: "lyrics",
    TSST: "discsubtitle",
    TKEY: "key",
    COMM: "comment",
    TOPE: "originalartist",
    // Windows Media Player
    "PRIV:AverageLevel": "averageLevel",
    "PRIV:PeakLevel": "peakLevel",
    // Discogs
    "TXXX:DISCOGS_RELEASE_ID": "discogs_release_id",
    "TXXX:CATALOGID": "catalognumber",
    "TXXX:STYLE": "genre",
    "TXXX:replaygain_track_peak": "replaygain_track_peak",
    "TXXX:replaygain_track_gain": "replaygain_track_gain"
};
var ID3v24TagMapper = /** @class */ (function (_super) {
    __extends(ID3v24TagMapper, _super);
    function ID3v24TagMapper() {
        return _super.call(this, ['ID3v2.3', 'ID3v2.4'], id3v24TagMap) || this;
    }
    ID3v24TagMapper.prototype.isNativeSingleton = function (tag) {
        switch (tag) {
            case 'IPLS':
                return true;
            case 'TIPL':
            case 'TMCL':
                return true;
            default:
                return _super.prototype.isNativeSingleton.call(this, tag);
        }
    };
    /**
     * Handle post mapping exceptions / correction
     * @param {string} id Tag key e.g. "©alb"
     * @param id e.g. "Buena Vista Social Club"
     * @return Common value e.g. "Buena Vista Social Club"
     */
    ID3v24TagMapper.prototype.postMap = function (tag) {
        switch (tag.id) {
            /*
             case 'TXXX':
             tag += ':' + value.description
             value = value.text
             break*/
            case 'UFID':// decode MusicBrainz Recording Id
                if (tag.value.owner_identifier === 'http://musicbrainz.org') {
                    tag.id += ':' + tag.value.owner_identifier;
                    tag.value = Util_1.default.decodeString(tag.value.identifier, 'iso-8859-1');
                }
                break;
            case 'PRIV':
                switch (tag.value.owner_identifier) {
                    // decode Windows Media Player
                    case 'AverageLevel':
                    case 'PeakValue':
                        tag.id += ':' + tag.value.owner_identifier;
                        tag.value = tag.value.data.length === 4 ? tag.value.data.readUInt32LE() : null;
                        // ToDo: flag warning if: tag.value === null
                        break;
                    default:
                }
                break;
            case 'MCDI':
                break;
            case 'COMM':
                tag.value = tag.value ? tag.value.text : null;
                break;
            default:
                break;
        }
    };
    return ID3v24TagMapper;
}(GenericTagMapper_1.CommonTagMapper));
exports.ID3v24TagMapper = ID3v24TagMapper;


/***/ }),

/***/ "./node_modules/music-metadata/lib/id3v2/ID3v2Parser.js":
/*!**************************************************************!*\
  !*** ./node_modules/music-metadata/lib/id3v2/ID3v2Parser.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(/*! util */ "util");
var Util_1 = __webpack_require__(/*! ../common/Util */ "./node_modules/music-metadata/lib/common/Util.js");
var Token = __webpack_require__(/*! token-types */ "./node_modules/token-types/lib/index.js");
var FrameParser_1 = __webpack_require__(/*! ./FrameParser */ "./node_modules/music-metadata/lib/id3v2/FrameParser.js");
var ID3v2_1 = __webpack_require__(/*! ./ID3v2 */ "./node_modules/music-metadata/lib/id3v2/ID3v2.js");
var ID3v2Parser = /** @class */ (function () {
    function ID3v2Parser() {
        this.tags = [];
    }
    ID3v2Parser.getInstance = function () {
        return new ID3v2Parser();
    };
    ID3v2Parser.removeUnsyncBytes = function (buffer) {
        var readI = 0;
        var writeI = 0;
        while (readI < buffer.length - 1) {
            if (readI !== writeI) {
                buffer[writeI] = buffer[readI];
            }
            readI += (buffer[readI] === 0xFF && buffer[readI + 1] === 0) ? 2 : 1;
            writeI++;
        }
        if (readI < buffer.length) {
            buffer[writeI++] = buffer[readI++];
        }
        return buffer.slice(0, writeI);
    };
    ID3v2Parser.readFrameHeader = function (v, majorVer) {
        var header;
        switch (majorVer) {
            case 2:
                header = {
                    id: v.toString('ascii', 0, 3),
                    length: Token.UINT24_BE.get(v, 3)
                };
                break;
            case 3:
                header = {
                    id: v.toString('ascii', 0, 4),
                    length: Token.UINT32_BE.get(v, 4),
                    flags: ID3v2Parser.readFrameFlags(v.slice(8, 10))
                };
                break;
            case 4:
                header = {
                    id: v.toString('ascii', 0, 4),
                    length: ID3v2_1.ID3v2Token.UINT32SYNCSAFE.get(v, 4),
                    flags: ID3v2Parser.readFrameFlags(v.slice(8, 10))
                };
                break;
            default:
                throw new Error('Unexpected majorVer: ' + majorVer);
        }
        return header;
    };
    ID3v2Parser.getFrameHeaderLength = function (majorVer) {
        switch (majorVer) {
            case 2:
                return 6;
            case 3:
            case 4:
                return 10;
            default:
                throw new Error('header versionIndex is incorrect');
        }
    };
    ID3v2Parser.readFrameFlags = function (b) {
        return {
            status: {
                tag_alter_preservation: Util_1.default.strtokBITSET.get(b, 0, 6),
                file_alter_preservation: Util_1.default.strtokBITSET.get(b, 0, 5),
                read_only: Util_1.default.strtokBITSET.get(b, 0, 4)
            },
            format: {
                grouping_identity: Util_1.default.strtokBITSET.get(b, 1, 7),
                compression: Util_1.default.strtokBITSET.get(b, 1, 3),
                encryption: Util_1.default.strtokBITSET.get(b, 1, 2),
                unsynchronisation: Util_1.default.strtokBITSET.get(b, 1, 1),
                data_length_indicator: Util_1.default.strtokBITSET.get(b, 1, 0)
            }
        };
    };
    ID3v2Parser.readFrameData = function (buf, frameHeader, majorVer, includeCovers) {
        switch (majorVer) {
            case 2:
                return FrameParser_1.default.readData(buf, frameHeader.id, majorVer, includeCovers);
            case 3:
            case 4:
                if (frameHeader.flags.format.unsynchronisation) {
                    buf = ID3v2Parser.removeUnsyncBytes(buf);
                }
                if (frameHeader.flags.format.data_length_indicator) {
                    buf = buf.slice(4, buf.length);
                }
                return FrameParser_1.default.readData(buf, frameHeader.id, majorVer, includeCovers);
            default:
                throw new Error('Unexpected majorVer: ' + majorVer);
        }
    };
    /**
     * Create a combined tag key, of tag & description
     * @param {string} tag e.g.: COM
     * @param {string} description e.g. iTunPGAP
     * @returns {string} e.g. COM:iTunPGAP
     */
    ID3v2Parser.makeDescriptionTagName = function (tag, description) {
        return tag + (description ? ':' + description : '');
    };
    ID3v2Parser.prototype.parse = function (result, tokenizer, options) {
        var _this = this;
        this.tokenizer = tokenizer;
        this.options = options;
        return this.tokenizer.readToken(ID3v2_1.ID3v2Token.Header).then(function (id3Header) {
            if (id3Header.fileIdentifier !== 'ID3') {
                throw new Error("expected file identifier 'ID3' not found");
            }
            _this.id3Header = id3Header;
            _this.headerType = ('ID3v2.' + id3Header.version.major);
            if (id3Header.flags.isExtendedHeader) {
                return _this.parseExtendedHeader();
            }
            else {
                return _this.parseId3Data(id3Header.size);
            }
        }).then(function () {
            result.native[_this.headerType] = _this.tags;
        });
    };
    ID3v2Parser.prototype.parseExtendedHeader = function () {
        var _this = this;
        return this.tokenizer.readToken(ID3v2_1.ID3v2Token.ExtendedHeader).then(function (extendedHeader) {
            var dataRemaining = extendedHeader.size - ID3v2_1.ID3v2Token.ExtendedHeader.len;
            if (dataRemaining > 0) {
                return _this.parseExtendedHeaderData(dataRemaining, extendedHeader.size);
            }
            else {
                return _this.parseId3Data(_this.id3Header.size - extendedHeader.size);
            }
        });
    };
    ID3v2Parser.prototype.parseExtendedHeaderData = function (dataRemaining, extendedHeaderSize) {
        var _this = this;
        var buffer = new Buffer(dataRemaining);
        return this.tokenizer.readBuffer(buffer, 0, dataRemaining).then(function () {
            return _this.parseId3Data(_this.id3Header.size - extendedHeaderSize);
        });
    };
    ID3v2Parser.prototype.parseId3Data = function (dataLen) {
        var _this = this;
        var buffer = new Buffer(dataLen);
        return this.tokenizer.readBuffer(buffer, 0, dataLen).then(function () {
            for (var _i = 0, _a = _this.parseMetadata(buffer); _i < _a.length; _i++) {
                var tag = _a[_i];
                if (tag.id === 'TXXX') {
                    for (var _b = 0, _c = tag.value.text; _b < _c.length; _b++) {
                        var text = _c[_b];
                        _this.tags.push({ id: ID3v2Parser.makeDescriptionTagName(tag.id, tag.value.description), value: text });
                    }
                }
                else if (tag.id === 'COM') {
                    for (var _d = 0, _e = tag.value; _d < _e.length; _d++) {
                        var value = _e[_d];
                        _this.tags.push({ id: ID3v2Parser.makeDescriptionTagName(tag.id, value.description), value: value.text });
                    }
                }
                else if (util_1.isArray(tag.value)) {
                    for (var _f = 0, _g = tag.value; _f < _g.length; _f++) {
                        var value = _g[_f];
                        _this.tags.push({ id: tag.id, value: value });
                    }
                }
                else {
                    _this.tags.push({ id: tag.id, value: tag.value });
                }
            }
        });
    };
    ID3v2Parser.prototype.parseMetadata = function (data) {
        var offset = 0;
        var tags = [];
        while (true) {
            if (offset === data.length)
                break;
            var frameHeaderLength = ID3v2Parser.getFrameHeaderLength(this.id3Header.version.major);
            if (offset + frameHeaderLength > data.length) {
                // ToDo: generate WARNING: Illegal ID3v2-tag-length
                break;
            }
            var frameHeaderBytes = data.slice(offset, offset += frameHeaderLength);
            var frameHeader = ID3v2Parser.readFrameHeader(frameHeaderBytes, this.id3Header.version.major);
            // Last frame. Check first char is a letter, bit of defensive programming
            if (frameHeader.id === '' || frameHeader.id === '\u0000\u0000\u0000\u0000' ||
                'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(frameHeader.id[0]) === -1) {
                // ToDo: generate WARNING
                break;
            }
            var frameDataBytes = data.slice(offset, offset += frameHeader.length);
            var values = ID3v2Parser.readFrameData(frameDataBytes, frameHeader, this.id3Header.version.major, !this.options.skipCovers);
            tags.push({ id: frameHeader.id, value: values });
        }
        return tags;
    };
    return ID3v2Parser;
}());
exports.ID3v2Parser = ID3v2Parser;


/***/ }),

/***/ "./node_modules/music-metadata/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/music-metadata/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GenericTagTypes_1 = __webpack_require__(/*! ./common/GenericTagTypes */ "./node_modules/music-metadata/lib/common/GenericTagTypes.js");
var ParserFactory_1 = __webpack_require__(/*! ./ParserFactory */ "./node_modules/music-metadata/lib/ParserFactory.js");
var ID3v24TagMapper_1 = __webpack_require__(/*! ./id3v2/ID3v24TagMapper */ "./node_modules/music-metadata/lib/id3v2/ID3v24TagMapper.js");
var MP4TagMapper_1 = __webpack_require__(/*! ./mp4/MP4TagMapper */ "./node_modules/music-metadata/lib/mp4/MP4TagMapper.js");
var VorbisTagMapper_1 = __webpack_require__(/*! ./vorbis/VorbisTagMapper */ "./node_modules/music-metadata/lib/vorbis/VorbisTagMapper.js");
var APEv2TagMapper_1 = __webpack_require__(/*! ./apev2/APEv2TagMapper */ "./node_modules/music-metadata/lib/apev2/APEv2TagMapper.js");
var ID3v22TagMapper_1 = __webpack_require__(/*! ./id3v2/ID3v22TagMapper */ "./node_modules/music-metadata/lib/id3v2/ID3v22TagMapper.js");
var ID3v1TagMap_1 = __webpack_require__(/*! ./id3v1/ID3v1TagMap */ "./node_modules/music-metadata/lib/id3v1/ID3v1TagMap.js");
var AsfTagMapper_1 = __webpack_require__(/*! ./asf/AsfTagMapper */ "./node_modules/music-metadata/lib/asf/AsfTagMapper.js");
/**
 * Combines all generic-tag-mappers for each tag type
 */
var CombinedTagMapper = /** @class */ (function () {
    function CombinedTagMapper() {
        var _this = this;
        this.tagMappers = {};
        [
            new ID3v1TagMap_1.ID3v1TagMapper(),
            new ID3v22TagMapper_1.ID3v22TagMapper(),
            new ID3v24TagMapper_1.ID3v24TagMapper(),
            new MP4TagMapper_1.MP4TagMapper(),
            new MP4TagMapper_1.MP4TagMapper(),
            new VorbisTagMapper_1.VorbisTagMapper(),
            new APEv2TagMapper_1.APEv2TagMapper(),
            new AsfTagMapper_1.AsfTagMapper()
        ].forEach(function (mapper) {
            _this.registerTagMapper(mapper);
        });
    }
    /**
     * Process and set common tags
     * @param comTags Target metadata to
     * write common tags to
     * @param comTags Generic tag results (output of this function)
     * @param tag     Native tag
     */
    CombinedTagMapper.prototype.setGenericTag = function (comTags, tagType, tag) {
        var tagMapper = this.tagMappers[tagType];
        if (tagMapper) {
            this.tagMappers[tagType].setGenericTag(comTags, tag);
        }
        else {
            throw new Error("No generic tag mapper defined for tag-format: " + tagType);
        }
    };
    CombinedTagMapper.prototype.registerTagMapper = function (genericTagMapper) {
        for (var _i = 0, _a = genericTagMapper.tagTypes; _i < _a.length; _i++) {
            var tagType = _a[_i];
            this.tagMappers[tagType] = genericTagMapper;
        }
    };
    return CombinedTagMapper;
}());
exports.CombinedTagMapper = CombinedTagMapper;
var MusicMetadataParser = /** @class */ (function () {
    function MusicMetadataParser() {
        this.tagMapper = new CombinedTagMapper();
    }
    MusicMetadataParser.getInstance = function () {
        return new MusicMetadataParser();
    };
    /**
     * ToDo: move to respective format implementations
     */
    /*
    private static headerTypes = [
      {
        buf: GUID.HeaderObject.toBin(),
        tag: require('./asf/AsfParser')
      },
      {
        buf: new Buffer('ID3'),
        tag: require('./id3v2')
      },
      {
        buf: new Buffer('ftypM4A'),
        tag: require('./id4'),
        offset: 4
      },
      {
        buf: new Buffer('ftypmp42'),
        tag: require('./id4'),
        offset: 4
      },
      {
        buf: new Buffer('OggS'),
        tag: require('./ogg')
      },
      {
        buf: new Buffer('fLaC'),
        tag: require('./flac')
      },
      {
        buf: new Buffer('MAC'),
        tag: require('./monkeysaudio')
      }
    ];*/
    /**
     * Extract metadata from the given audio file
     * @param filePath File path of the audio file to parse
     * @param opts
     *   .filesize=true  Return filesize
     *   .native=true    Will return original header in result
     * @returns {Promise<IAudioMetadata>}
     */
    MusicMetadataParser.prototype.parseFile = function (filePath, opts) {
        var _this = this;
        if (opts === void 0) { opts = {}; }
        return ParserFactory_1.ParserFactory.parseFile(filePath, opts).then(function (nativeData) {
            return _this.parseNativeTags(nativeData, opts.native);
        });
    };
    /**
     * Extract metadata from the given audio file
     * @param stream Audio ReadableStream
     * @param mimeType Mime-Type of Stream
     * @param opts
     *   .filesize=true  Return filesize
     *   .native=true    Will return original header in result
     * @returns {Promise<IAudioMetadata>}
     */
    MusicMetadataParser.prototype.parseStream = function (stream, mimeType, opts) {
        var _this = this;
        if (opts === void 0) { opts = {}; }
        return ParserFactory_1.ParserFactory.parseStream(stream, mimeType, opts).then(function (nativeData) {
            return _this.parseNativeTags(nativeData, opts.native);
        });
    };
    /**
     * Convert native tags to common tags
     * @param nativeData
     * @includeNative return native tags in result
     * @returns {IAudioMetadata} Native + common tags
     */
    MusicMetadataParser.prototype.parseNativeTags = function (nativeData, includeNative) {
        var metadata = {
            format: nativeData.format,
            native: includeNative ? nativeData.native : undefined,
            common: {
                track: { no: null, of: null },
                disk: { no: null, of: null }
            }
        };
        metadata.format.tagTypes = [];
        for (var tagType in nativeData.native) {
            metadata.format.tagTypes.push(tagType);
        }
        for (var _i = 0, TagPriority_1 = GenericTagTypes_1.TagPriority; _i < TagPriority_1.length; _i++) {
            var tagType = TagPriority_1[_i];
            if (nativeData.native[tagType]) {
                for (var _a = 0, _b = nativeData.native[tagType]; _a < _b.length; _a++) {
                    var tag = _b[_a];
                    this.tagMapper.setGenericTag(metadata.common, tagType, tag);
                }
                break;
            }
        }
        if (metadata.common.artists && metadata.common.artists.length > 0) {
            metadata.common.artist = metadata.common.artist[0];
        }
        else {
            if (metadata.common.artist) {
                metadata.common.artists = metadata.common.artist;
                if (metadata.common.artist.length > 1) {
                    delete metadata.common.artist;
                }
                else {
                    metadata.common.artist = metadata.common.artist[0];
                }
            }
        }
        return metadata;
    };
    return MusicMetadataParser;
}());
exports.MusicMetadataParser = MusicMetadataParser;
/**
 * Parse audio file
 * @param filePath Media file to read meta-data from
 * @param options Parsing options:
 *   .native=true    Will return original header in result
 * @returns {Promise<IAudioMetadata>}
 */
function parseFile(filePath, options) {
    return MusicMetadataParser.getInstance().parseFile(filePath, options);
}
exports.parseFile = parseFile;
/**
 * Parse audio Stream
 * @param stream
 * @param mimeType
 * @param opts Parsing options
 *   .native=true    Will return original header in result
 * @returns {Promise<IAudioMetadata>}
 */
function parseStream(stream, mimeType, opts) {
    return MusicMetadataParser.getInstance().parseStream(stream, mimeType, opts);
}
exports.parseStream = parseStream;
/**
 * Create a dictionary ordered by their tag id (key)
 * @param nativeTags list of tags
 * @returns tags indexed by id
 */
function orderTags(nativeTags) {
    var tags = {};
    for (var _i = 0, nativeTags_1 = nativeTags; _i < nativeTags_1.length; _i++) {
        var tag = nativeTags_1[_i];
        (tags[tag.id] = (tags[tag.id] || [])).push(tag.value);
    }
    return tags;
}
exports.orderTags = orderTags;


/***/ }),

/***/ "./node_modules/music-metadata/lib/mp4/MP4Parser.js":
/*!**********************************************************!*\
  !*** ./node_modules/music-metadata/lib/mp4/MP4Parser.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var es6_promise_1 = __webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js");
var Token = __webpack_require__(/*! token-types */ "./node_modules/token-types/lib/index.js");
var ID3v1Parser_1 = __webpack_require__(/*! ../id3v1/ID3v1Parser */ "./node_modules/music-metadata/lib/id3v1/ID3v1Parser.js");
var FourCC_1 = __webpack_require__(/*! ../common/FourCC */ "./node_modules/music-metadata/lib/common/FourCC.js");
/**
 * Interface for the parsed Media Atom (mdhd)
 */
var Atom = /** @class */ (function () {
    function Atom() {
    }
    Atom.Header = {
        len: 8,
        get: function (buf, off) {
            var length = Token.UINT32_BE.get(buf, 0);
            if (length < 0)
                throw new Error("Invalid atom header length");
            return {
                length: length,
                name: FourCC_1.FourCcToken.get(buf, off + 4)
            };
        }
    };
    Atom.ftyp = {
        len: 4,
        get: function (buf, off) {
            return {
                type: new Token.StringType(4, "ascii").get(buf, off)
            };
        }
    };
    /**
     * Token: Media Header Atom
     */
    Atom.mdhd = {
        len: 24,
        get: function (buf, off) {
            return {
                version: Token.UINT8.get(buf, off + 0),
                flags: Token.UINT24_BE.get(buf, off + 1),
                creationTime: Token.UINT32_BE.get(buf, off + 4),
                modificationTime: Token.UINT32_BE.get(buf, off + 8),
                timeScale: Token.UINT32_BE.get(buf, off + 12),
                duration: Token.UINT32_BE.get(buf, off + 16),
                language: Token.UINT16_BE.get(buf, off + 20),
                quality: Token.UINT16_BE.get(buf, off + 22)
            };
        }
    };
    /**
     * Token: Movie Header Atom
     */
    Atom.mvhd = {
        len: 100,
        get: function (buf, off) {
            return {
                version: Token.UINT8.get(buf, off + 0),
                flags: Token.UINT24_BE.get(buf, off + 1),
                creationTime: Token.UINT32_BE.get(buf, off + 4),
                modificationTime: Token.UINT32_BE.get(buf, off + 8),
                timeScale: Token.UINT32_BE.get(buf, off + 12),
                duration: Token.UINT32_BE.get(buf, off + 16),
                preferredRate: Token.UINT32_BE.get(buf, off + 20),
                preferredVolume: Token.UINT16_BE.get(buf, off + 24),
                // ignore reserver: 10 bytes
                // ignore matrix structure: 36 bytes
                previewTime: Token.UINT32_BE.get(buf, off + 72),
                previewDuration: Token.UINT32_BE.get(buf, off + 76),
                posterTime: Token.UINT32_BE.get(buf, off + 80),
                selectionTime: Token.UINT32_BE.get(buf, off + 84),
                selectionDuration: Token.UINT32_BE.get(buf, off + 88),
                currentTime: Token.UINT32_BE.get(buf, off + 92),
                nextTrackID: Token.UINT32_BE.get(buf, off + 96)
            };
        }
    };
    /**
     * Token: Movie Header Atom
     */
    Atom.mhdr = {
        len: 8,
        get: function (buf, off) {
            return {
                version: Token.UINT8.get(buf, off + 0),
                flags: Token.UINT24_BE.get(buf, off + 1),
                nextItemID: Token.UINT32_BE.get(buf, off + 4)
            };
        }
    };
    return Atom;
}());
/**
 * Data Atom Structure
 */
var DataAtom = /** @class */ (function () {
    function DataAtom(len) {
        this.len = len;
    }
    DataAtom.prototype.get = function (buf, off) {
        return {
            type: {
                set: Token.UINT8.get(buf, off + 0),
                type: Token.UINT24_BE.get(buf, off + 1)
            },
            locale: Token.UINT24_BE.get(buf, off + 4),
            value: new Token.BufferType(this.len - 8).get(buf, off + 8)
        };
    };
    return DataAtom;
}());
/**
 * Data Atom Structure
 * Ref: https://developer.apple.com/library/content/documentation/QuickTime/QTFF/Metadata/Metadata.html#//apple_ref/doc/uid/TP40000939-CH1-SW31
 */
var NameAtom = /** @class */ (function () {
    function NameAtom(len) {
        this.len = len;
    }
    NameAtom.prototype.get = function (buf, off) {
        return {
            version: Token.UINT8.get(buf, off),
            flags: Token.UINT24_BE.get(buf, off + 1),
            name: new Token.StringType(this.len - 4, "utf-8").get(buf, off + 4)
        };
    };
    return NameAtom;
}());
/*
 * Support for Apple iTunes MP4 tags as found in a M4A/MP4 file
 * Ref:
 *   http://developer.apple.com/mac/library/documentation/QuickTime/QTFF/Metadata/Metadata.html
 *   http://atomicparsley.sourceforge.net/mpeg-4files.html
 */
var MP4Parser = /** @class */ (function () {
    function MP4Parser() {
        this.metaAtomsTotalLength = 0;
        this.format = {};
        this.tags = [];
        this.warnings = []; // ToDo: make this part of the parsing result
    }
    MP4Parser.read_BE_Signed_Integer = function (value) {
        return value.readIntBE(0, value.length);
    };
    MP4Parser.read_BE_Unsigned_Integer = function (value) {
        return value.readUIntBE(0, value.length);
    };
    MP4Parser.prototype.parse = function (tokenizer, options) {
        var _this = this;
        this.tokenizer = tokenizer;
        this.options = options;
        return this.parseAtom().then(function () {
            return {
                format: _this.format,
                native: {
                    "iTunes MP4": _this.tags
                }
            };
        });
    };
    MP4Parser.prototype.parseAtom = function () {
        var _this = this;
        // Parse atom header
        return this.tokenizer.readToken(Atom.Header).then(function (header) {
            return _this.parseAtomData(header).then(function (done) {
                if (done) {
                    // ToDo: messy ending
                    // console.log("Done with %s", header.name);
                    return done;
                }
                else {
                    return _this.parseAtom();
                }
            });
        });
    };
    MP4Parser.prototype.parseAtomData = function (header) {
        var dataLen = header.length - 8;
        // console.log("atom name=%s, len=%s", header.name, header.length);
        switch (header.name) {
            case "ftyp":
                return this.parseAtom_ftyp(dataLen).then(function (types) {
                    return false;
                });
            // "Container" atoms, contain nested atoms: 'moov', 'udta', 'meta', 'ilst', 'trak', 'mdia'
            case "moov": // The Movie Atom: contains other atoms
            case "udta": // User defined atom
            case "trak":
            case "mdia": // Media atom
            case "minf": // Media Information Atom
            case "stbl":// Media Information Atom
                return this.parseAtom().then(function (done) { return done; });
            case "meta":// Metadata Atom, ref: https://developer.apple.com/library/content/documentation/QuickTime/QTFF/Metadata/Metadata.html#//apple_ref/doc/uid/TP40000939-CH1-SW8
                return this.tokenizer.readToken(new Token.IgnoreType(4)).then(function () { return false; }); // meta has 4 bytes of padding, ignore
            case "ilst":// 'meta' => 'ilst': Metadata Item List Atom
                // Ref: https://developer.apple.com/library/content/documentation/QuickTime/QTFF/Metadata/Metadata.html#//apple_ref/doc/uid/TP40000939-CH1-SW24
                return this.parseMetadataItem(dataLen).then(function () { return false; });
            case "mdhd":// Media header atom
                return this.parseAtom_mdhd(dataLen).then(function () { return false; });
            case "mvhd":// 'movie' => 'mvhd': movie header atom; child of Movie Atom
                return this.parseAtom_mvhd(dataLen).then(function () { return false; });
            case "<id>":// 'meta' => 'ilst' => '<id>': metadata item atom
                return this.parseMetadataItem(dataLen).then(function () { return false; });
            case "cmov": // compressed movie atom; child of Movie Atom
            case "rmra": // reference movie atom; child of Movie Atom
            case "mdat":
                return es6_promise_1.Promise.resolve(true);
            case "©cmt":
                return this.parseMetadataItemData(header.name, dataLen).then(function () { return false; });
            default:
                // return this.ignoreAtomData(dataLen);
                return this.tokenizer.readToken(new Token.BufferType(dataLen)).then(function (buf) {
                    // console.log("  ascii: %s", header.name, header.length, buf.toString('ascii'));
                    buf = buf;
                }).then(function () { return false; });
        }
    };
    MP4Parser.prototype.ignoreAtomData = function (len) {
        return this.tokenizer.readToken(new Token.IgnoreType(len));
    };
    MP4Parser.prototype.parseAtom_ftyp = function (len) {
        var _this = this;
        return this.tokenizer.readToken(Atom.ftyp).then(function (ftype) {
            len -= Atom.ftyp.len;
            if (len > 0) {
                return _this.parseAtom_ftyp(len).then(function (types) {
                    types.push(ftype.type);
                    return types;
                });
            }
            else {
                return [];
            }
        });
    };
    /**
     * Parse movie header (mvhd) atom
     * @param len
     */
    MP4Parser.prototype.parseAtom_mvhd = function (len) {
        var _this = this;
        return this.tokenizer.readToken(Atom.mvhd).then(function (mvhd) {
            _this.parse_mxhd(mvhd);
        });
    };
    /**
     * Parse media header (mdhd) atom
     * @param len
     */
    MP4Parser.prototype.parseAtom_mdhd = function (len) {
        var _this = this;
        return this.tokenizer.readToken(Atom.mdhd).then(function (mdhd) {
            _this.parse_mxhd(mdhd);
        });
    };
    MP4Parser.prototype.parse_mxhd = function (mxhd) {
        this.format.sampleRate = mxhd.timeScale;
        this.format.duration = mxhd.duration / mxhd.timeScale; // calculate duration in seconds
    };
    /**
     * Parse media header (ilst) atom
     * @param len
     * Ref: https://developer.apple.com/library/content/documentation/QuickTime/QTFF/Metadata/Metadata.html#//apple_ref/doc/uid/TP40000939-CH1-SW8
     */
    /*
     private parseMetadataItem(len: number): Promise<void>{
     // Parse atom header
     return this.tokenizer.readToken<IAtomHeader>(Atom.Header).then((header) => {
  
     return this.parseAtomData(header);
     });
     }*/
    /**
     * Parse Meta-item-list-atom (item of 'ilst' atom)
     * @param len
     * Ref: https://developer.apple.com/library/content/documentation/QuickTime/QTFF/Metadata/Metadata.html#//apple_ref/doc/uid/TP40000939-CH1-SW8
     */
    MP4Parser.prototype.parseMetadataItem = function (len) {
        var _this = this;
        // Parse atom header
        return this.tokenizer.readToken(Atom.Header).then(function (header) {
            // console.log("metadata-item: name=%s, len=%s", header.name, header.length);
            return _this.parseMetadataItemData(header.name, header.length - Atom.Header.len).then(function () {
                var remaining = len - Atom.Header.len - header.length;
                if (remaining > 0) {
                    return _this.parseMetadataItem(remaining);
                }
                else
                    return;
            });
        });
    };
    MP4Parser.prototype.parseMetadataItemData = function (tagKey, remLen) {
        var _this = this;
        // Parse Meta Item List Atom
        return this.tokenizer.readToken(Atom.Header).then(function (header) {
            var dataLen = header.length - Atom.Header.len;
            switch (header.name) {
                case "data":// value atom
                    return _this.parseValueAtom(tagKey, header);
                case "itif":// item information atom (optional)
                    return _this.tokenizer.readToken(new Token.BufferType(dataLen)).then(function (dataAtom) {
                        // console.log("  WARNING unsupported meta-item: %s[%s] => value=%s ascii=%s", tagKey, header.name, dataAtom.toString("hex"), dataAtom.toString("ascii"));
                        return header.length;
                    });
                case "name":// name atom (optional)
                    return _this.tokenizer.readToken(new NameAtom(dataLen)).then(function (name) {
                        tagKey += ":" + name.name;
                        return header.length;
                    });
                case "mean":// name atom (optional)
                    return _this.tokenizer.readToken(new NameAtom(dataLen)).then(function (mean) {
                        // console.log("  %s[%s] = %s", tagKey, header.name, mean.name);
                        tagKey += ":" + mean.name;
                        return header.length;
                    });
                default:
                    return _this.tokenizer.readToken(new Token.BufferType(dataLen)).then(function (dataAtom) {
                        // console.log("  WARNING unsupported meta-item: %s[%s] => value=%s ascii=%s", tagKey, header.name, dataAtom.toString("hex"), dataAtom.toString("ascii"));
                        _this.warnings.push("unsupported meta-item: " + tagKey + "[" + header.name + "] => value=" + dataAtom.toString("hex") + " ascii=" + dataAtom.toString("ascii"));
                        return header.length;
                    });
            }
        }).then(function (len) {
            var remaining = remLen - len;
            if (remaining === 0) {
                return;
            }
            else {
                return _this.parseMetadataItemData(tagKey, remaining);
            }
        });
    };
    MP4Parser.prototype.parseValueAtom = function (tagKey, header) {
        var _this = this;
        return this.tokenizer.readToken(new DataAtom(header.length - Atom.Header.len)).then(function (dataAtom) {
            if (dataAtom.type.set === 0) {
                // Use well-known-type table
                // Ref: https://developer.apple.com/library/content/documentation/QuickTime/QTFF/Metadata/Metadata.html#//apple_ref/doc/uid/TP40000939-CH1-SW35
                switch (dataAtom.type.type) {
                    case 0:// reserved: Reserved for use where no type needs to be indicated
                        switch (tagKey) {
                            case "trkn":
                            case "disk":
                                var num = Token.UINT8.get(dataAtom.value, 3);
                                var of = Token.UINT8.get(dataAtom.value, 5);
                                // console.log("  %s[data] = %s/%s", tagKey, num, of);
                                _this.tags.push({ id: tagKey, value: num + "/" + of });
                                break;
                            case "gnre":
                                var genreInt = Token.UINT8.get(dataAtom.value, 1);
                                var genreStr = ID3v1Parser_1.Genres[genreInt - 1];
                                // console.log("  %s[data] = %s", tagKey, genreStr);
                                _this.tags.push({ id: tagKey, value: genreStr });
                                break;
                            default:
                        }
                        break;
                    case 1:// UTF-8: Without any count or NULL terminator
                        _this.tags.push({ id: tagKey, value: dataAtom.value.toString("utf-8") });
                        break;
                    case 13:// JPEG
                        if (_this.options.skipCovers)
                            break;
                        _this.tags.push({
                            id: tagKey, value: {
                                format: "image/jpeg",
                                data: new Buffer(dataAtom.value)
                            }
                        });
                        break;
                    case 14:// PNG
                        if (_this.options.skipCovers)
                            break;
                        _this.tags.push({
                            id: tagKey, value: {
                                format: "image/png",
                                data: new Buffer(dataAtom.value)
                            }
                        });
                        break;
                    case 21:// BE Signed Integer
                        _this.tags.push({ id: tagKey, value: MP4Parser.read_BE_Signed_Integer(dataAtom.value) });
                        break;
                    case 22:// BE Unsigned Integer
                        _this.tags.push({ id: tagKey, value: MP4Parser.read_BE_Unsigned_Integer(dataAtom.value) });
                        break;
                    case 65:// An 8-bit signed integer
                        _this.tags.push({ id: tagKey, value: dataAtom.value.readInt8(0) });
                        break;
                    case 66:// A big-endian 16-bit signed integer
                        _this.tags.push({ id: tagKey, value: dataAtom.value.readInt16BE(0) });
                        break;
                    case 67:// A big-endian 32-bit signed integer
                        _this.tags.push({ id: tagKey, value: dataAtom.value.readInt32BE(0) });
                        break;
                    default:
                        throw new Error("Unsupported well-known-type: " + dataAtom.type.type);
                }
            }
            else {
                throw new Error("Unsupported type-set != 0: " + dataAtom.type.set);
            }
            return header.length;
        });
    };
    MP4Parser.Types = {
        0: "uint8",
        1: "text",
        13: "jpeg",
        14: "png",
        21: "uint8"
    };
    return MP4Parser;
}());
exports.MP4Parser = MP4Parser;


/***/ }),

/***/ "./node_modules/music-metadata/lib/mp4/MP4TagMapper.js":
/*!*************************************************************!*\
  !*** ./node_modules/music-metadata/lib/mp4/MP4TagMapper.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GenericTagMapper_1 = __webpack_require__(/*! ../common/GenericTagMapper */ "./node_modules/music-metadata/lib/common/GenericTagMapper.js");
var mp4TagMap = {
    '©nam': 'title',
    '©ART': 'artist',
    aART: 'albumartist',
    /**
     * ToDo: Album artist seems to be stored here while Picard documentation says: aART
     */
    '----:com.apple.iTunes:Band': 'albumartist',
    '©alb': 'album',
    '©day': 'date',
    '©cmt': 'comment',
    trkn: 'track',
    disk: 'disk',
    '©gen': 'genre',
    covr: 'picture',
    '©wrt': 'composer',
    '©lyr': 'lyrics',
    soal: 'albumsort',
    sonm: 'titlesort',
    soar: 'artistsort',
    soaa: 'albumartistsort',
    soco: 'composersort',
    '----:com.apple.iTunes:LYRICIST': 'lyricist',
    '----:com.apple.iTunes:CONDUCTOR': 'conductor',
    '----:com.apple.iTunes:REMIXER': 'remixer',
    '----:com.apple.iTunes:ENGINEER': 'engineer',
    '----:com.apple.iTunes:PRODUCER': 'producer',
    '----:com.apple.iTunes:DJMIXER': 'djmixer',
    '----:com.apple.iTunes:MIXER': 'mixer',
    '----:com.apple.iTunes:LABEL': 'label',
    '©grp': 'grouping',
    '----:com.apple.iTunes:SUBTITLE': 'subtitle',
    '----:com.apple.iTunes:DISCSUBTITLE': 'discsubtitle',
    cpil: 'compilation',
    tmpo: 'bpm',
    '----:com.apple.iTunes:MOOD': 'mood',
    '----:com.apple.iTunes:MEDIA': 'media',
    '----:com.apple.iTunes:CATALOGNUMBER': 'catalognumber',
    tvsh: 'show',
    sosn: 'showsort',
    pcst: 'podcast',
    purl: 'podcasturl',
    '----:com.apple.iTunes:MusicBrainz Album Status': 'releasestatus',
    '----:com.apple.iTunes:MusicBrainz Album Type': 'releasetype',
    '----:com.apple.iTunes:MusicBrainz Album Release Country': 'releasecountry',
    '----:com.apple.iTunes:SCRIPT': 'script',
    '----:com.apple.iTunes:LANGUAGE': 'language',
    cprt: 'copyright',
    '----:com.apple.iTunes:LICENSE': 'license',
    '©too': 'encodedby',
    pgap: 'gapless',
    '----:com.apple.iTunes:BARCODE': 'barcode',
    '----:com.apple.iTunes:ISRC': 'isrc',
    '----:com.apple.iTunes:ASIN': 'asin',
    '----:com.apple.iTunes:NOTES': 'comment',
    '----:com.apple.iTunes:MusicBrainz Track Id': 'musicbrainz_recordingid',
    '----:com.apple.iTunes:MusicBrainz Release Track Id': 'musicbrainz_trackid',
    '----:com.apple.iTunes:MusicBrainz Album Id': 'musicbrainz_albumid',
    '----:com.apple.iTunes:MusicBrainz Artist Id': 'musicbrainz_artistid',
    '----:com.apple.iTunes:MusicBrainz Album Artist Id': 'musicbrainz_albumartistid',
    '----:com.apple.iTunes:MusicBrainz Release Group Id': 'musicbrainz_releasegroupid',
    '----:com.apple.iTunes:MusicBrainz Work Id': 'musicbrainz_workid',
    '----:com.apple.iTunes:MusicBrainz TRM Id': 'musicbrainz_trmid',
    '----:com.apple.iTunes:MusicBrainz Disc Id': 'musicbrainz_discid',
    '----:com.apple.iTunes:Acoustid Id': 'acoustid_id',
    '----:com.apple.iTunes:Acoustid Fingerprint': 'acoustid_fingerprint',
    '----:com.apple.iTunes:MusicIP PUID': 'musicip_puid',
    '----:com.apple.iTunes:fingerprint': 'musicip_fingerprint',
    // Additional mappings:
    gnre: 'genre',
    '----:com.apple.iTunes:ALBUMARTISTSORT': 'albumartistsort',
    '----:com.apple.iTunes:ARTISTS': 'artists',
    '----:com.apple.iTunes:ORIGINALDATE': 'originaldate',
    '----:com.apple.iTunes:ORIGINALYEAR': 'originalyear'
    // '----:com.apple.iTunes:PERFORMER': 'performer'
};
var MP4TagMapper = /** @class */ (function (_super) {
    __extends(MP4TagMapper, _super);
    function MP4TagMapper() {
        return _super.call(this, ['iTunes MP4'], mp4TagMap) || this;
    }
    return MP4TagMapper;
}(GenericTagMapper_1.CommonTagMapper));
exports.MP4TagMapper = MP4TagMapper;


/***/ }),

/***/ "./node_modules/music-metadata/lib/mpeg/MpegParser.js":
/*!************************************************************!*\
  !*** ./node_modules/music-metadata/lib/mpeg/MpegParser.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var assert = __webpack_require__(/*! assert */ "assert");
var strtok3_1 = __webpack_require__(/*! strtok3 */ "./node_modules/strtok3/lib/index.js");
var Util_1 = __webpack_require__(/*! ../common/Util */ "./node_modules/music-metadata/lib/common/Util.js");
var Token = __webpack_require__(/*! token-types */ "./node_modules/token-types/lib/index.js");
var es6_promise_1 = __webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js");
var AbstractID3Parser_1 = __webpack_require__(/*! ../id3v2/AbstractID3Parser */ "./node_modules/music-metadata/lib/id3v2/AbstractID3Parser.js");
var XingTag_1 = __webpack_require__(/*! ./XingTag */ "./node_modules/music-metadata/lib/mpeg/XingTag.js");
/**
 * Cache buffer size used for searching synchronization preabmle
 */
var maxPeekLen = 1024;
/**
 * MPEG Audio Layer I/II/III frame header
 * Ref: https://www.mp3-tech.org/programmer/frame_header.html
 * Bit layout: AAAAAAAA AAABBCCD EEEEFFGH IIJJKLMM
 */
var MpegFrameHeader = /** @class */ (function () {
    function MpegFrameHeader(buf, off) {
        // B(20,19): MPEG Audio versionIndex ID
        this.versionIndex = Util_1.default.getBitAllignedNumber(buf, off + 1, 3, 2);
        // C(18,17): Layer description
        this.layer = MpegFrameHeader.LayerDescription[Util_1.default.getBitAllignedNumber(buf, off + 1, 5, 2)];
        if (this.layer === null)
            throw new Error("Invalid MPEG layer");
        // D(16): Protection bit (if true 16-bit CRC follows header)
        this.isProtectedByCRC = !Util_1.default.isBitSet(buf, off + 1, 7);
        // E(15,12): Bitrate index
        this.bitrateIndex = Util_1.default.getBitAllignedNumber(buf, off + 2, 0, 4);
        // F(11,10): Sampling rate frequency index
        this.sampRateFreqIndex = Util_1.default.getBitAllignedNumber(buf, off + 2, 4, 2);
        // G(9): Padding bit
        this.padding = Util_1.default.isBitSet(buf, off + 2, 6);
        // H(8): Private bit
        this.privateBit = Util_1.default.isBitSet(buf, off + 2, 7);
        // I(7,6): Channel Mode
        this.channelModeIndex = Util_1.default.getBitAllignedNumber(buf, off + 3, 0, 2);
        // J(5,4): Mode extension (Only used in Joint stereo)
        this.modeExtension = Util_1.default.getBitAllignedNumber(buf, off + 3, 2, 2);
        // K(3): Copyright
        this.isCopyrighted = Util_1.default.isBitSet(buf, off + 3, 4);
        // L(2): Original
        this.isOriginalMedia = Util_1.default.isBitSet(buf, off + 3, 5);
        // M(3): The original bit indicates, if it is set, that the frame is located on its original media.
        this.emphasis = Util_1.default.getBitAllignedNumber(buf, off + 3, 7, 2);
        this.version = MpegFrameHeader.VersionID[this.versionIndex];
        if (this.version === null)
            throw new Error("Invalid MPEG Audio version");
        this.channelMode = MpegFrameHeader.ChannelMode[this.channelModeIndex];
        // Calculate bitrate
        var bitrateInKbps = this.calcBitrate();
        if (!bitrateInKbps) {
            throw new Error("Cannot determine bit-rate");
        }
        this.bitrate = bitrateInKbps === null ? null : bitrateInKbps * 1000;
        // Calculate sampling rate
        this.samplingRate = this.calcSamplingRate();
        if (this.samplingRate == null) {
            throw new Error("Cannot determine sampling-rate");
        }
    }
    MpegFrameHeader.prototype.calcDuration = function (numFrames) {
        return numFrames * this.calcSamplesPerFrame() / this.samplingRate;
    };
    MpegFrameHeader.prototype.calcSamplesPerFrame = function () {
        return MpegFrameHeader.samplesInFrameTable[this.version === 1 ? 0 : 1][this.layer];
    };
    MpegFrameHeader.prototype.calculateSideInfoLength = function () {
        if (this.layer !== 3)
            return 2;
        if (this.channelModeIndex === 3) {
            // mono
            if (this.version === 1) {
                return 17;
            }
            else if (this.version === 2 || this.version === 2.5) {
                return 9;
            }
        }
        else {
            if (this.version === 1) {
                return 32;
            }
            else if (this.version === 2 || this.version === 2.5) {
                return 17;
            }
        }
    };
    MpegFrameHeader.prototype.calcSlotSize = function () {
        return [null, 4, 1, 1][this.layer];
    };
    MpegFrameHeader.prototype.calcBitrate = function () {
        if (this.bitrateIndex === 0x00)
            return null; // free
        if (this.bitrateIndex === 0x0F)
            return null; // 'reserved'
        var mpegVersion = this.version.toString() + this.layer;
        return MpegFrameHeader.bitrate_index[this.bitrateIndex][mpegVersion];
    };
    MpegFrameHeader.prototype.calcSamplingRate = function () {
        if (this.sampRateFreqIndex === 0x03)
            return null; // 'reserved'
        return MpegFrameHeader.sampling_rate_freq_index[this.version][this.sampRateFreqIndex];
    };
    MpegFrameHeader.SyncByte1 = 0xFF;
    MpegFrameHeader.SyncByte2 = 0xE0;
    MpegFrameHeader.VersionID = [2.5, null, 2, 1];
    MpegFrameHeader.LayerDescription = [null, 3, 2, 1];
    MpegFrameHeader.ChannelMode = ["stereo", "joint_stereo", "dual_channel", "mono"];
    MpegFrameHeader.bitrate_index = {
        0x01: { 11: 32, 12: 32, 13: 32, 21: 32, 22: 8, 23: 8 },
        0x02: { 11: 64, 12: 48, 13: 40, 21: 48, 22: 16, 23: 16 },
        0x03: { 11: 96, 12: 56, 13: 48, 21: 56, 22: 24, 23: 24 },
        0x04: { 11: 128, 12: 64, 13: 56, 21: 64, 22: 32, 23: 32 },
        0x05: { 11: 160, 12: 80, 13: 64, 21: 80, 22: 40, 23: 40 },
        0x06: { 11: 192, 12: 96, 13: 80, 21: 96, 22: 48, 23: 48 },
        0x07: { 11: 224, 12: 112, 13: 96, 21: 112, 22: 56, 23: 56 },
        0x08: { 11: 256, 12: 128, 13: 112, 21: 128, 22: 64, 23: 64 },
        0x09: { 11: 288, 12: 160, 13: 128, 21: 144, 22: 80, 23: 80 },
        0x0A: { 11: 320, 12: 192, 13: 160, 21: 160, 22: 96, 23: 96 },
        0x0B: { 11: 352, 12: 224, 13: 192, 21: 176, 22: 112, 23: 112 },
        0x0C: { 11: 384, 12: 256, 13: 224, 21: 192, 22: 128, 23: 128 },
        0x0D: { 11: 416, 12: 320, 13: 256, 21: 224, 22: 144, 23: 144 },
        0x0E: { 11: 448, 12: 384, 13: 320, 21: 256, 22: 160, 23: 160 }
    };
    MpegFrameHeader.sampling_rate_freq_index = {
        1: { 0x00: 44100, 0x01: 48000, 0x02: 32000 },
        2: { 0x00: 22050, 0x01: 24000, 0x02: 16000 },
        2.5: { 0x00: 11025, 0x01: 12000, 0x02: 8000 }
    };
    MpegFrameHeader.samplesInFrameTable = [
        /* Layer   I    II   III */
        [0, 384, 1152, 1152],
        [0, 384, 1152, 576] // MPEG-2(.5
    ];
    return MpegFrameHeader;
}());
/**
 * MPEG Audio Layer I/II/III
 */
var MpegAudioLayer = /** @class */ (function () {
    function MpegAudioLayer() {
    }
    MpegAudioLayer.getVbrCodecProfile = function (vbrScale) {
        return "V" + (100 - vbrScale) / 10;
    };
    MpegAudioLayer.FrameHeader = {
        len: 4,
        get: function (buf, off) {
            return new MpegFrameHeader(buf, off);
        }
    };
    return MpegAudioLayer;
}());
var MpegParser = /** @class */ (function (_super) {
    __extends(MpegParser, _super);
    function MpegParser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.frameCount = 0;
        _this.countSkipFrameData = 0;
        _this.bitrates = [];
        _this.unsynced = 0;
        _this.warnings = [];
        _this.calculateVbrDuration = false;
        _this.buf_frame_header = new Buffer(4);
        _this.syncPeek = {
            buf: new Buffer(maxPeekLen),
            len: 0
        };
        return _this;
    }
    /**
     * Called after ID3 headers have been parsed
     */
    MpegParser.prototype._parse = function (metadata, tokenizer, options) {
        var _this = this;
        this.metadata = metadata;
        this.tokenizer = tokenizer;
        this.readDuration = options.duration;
        var format = this.metadata.format;
        format.lossless = false;
        return this.sync().catch(function (err) {
            if (err.message === strtok3_1.endOfFile) {
                if (_this.calculateVbrDuration) {
                    format.numberOfSamples = _this.frameCount * _this.samplesPerFrame;
                    format.duration = format.numberOfSamples / format.sampleRate;
                }
            }
            else {
                throw err;
            }
        });
    };
    /**
     * Called after file has been fully parsed, this allows, if present, to exclude the ID3v1.1 header length
     * @param metadata
     * @returns {INativeAudioMetadata}
     */
    MpegParser.prototype.finalize = function (metadata) {
        var format = this.metadata.format;
        if (!format.duration && format.codecProfile === "CBR") {
            var hasID3v1 = metadata.native.hasOwnProperty('ID3v1.1');
            var mpegSize = this.tokenizer.fileSize - this.mpegOffset - (hasID3v1 ? 128 : 0);
            format.numberOfSamples = Math.round(mpegSize / this.frame_size) * this.samplesPerFrame;
            format.duration = format.numberOfSamples / format.sampleRate;
        }
        return metadata;
    };
    MpegParser.prototype._peekBuffer = function () {
        var _this = this;
        this.unsynced += this.syncPeek.len;
        return this.tokenizer.ignore(this.syncPeek.len).then(function () {
            return _this.tokenizer.peekBuffer(_this.syncPeek.buf, 0, maxPeekLen).then(function (len) {
                _this.syncPeek.len = len;
                return len;
            });
        });
    };
    MpegParser.prototype._sync = function (offset, gotFirstSync) {
        var _this = this;
        return (offset === 0 ? this._peekBuffer() : es6_promise_1.Promise.resolve(this.syncPeek.buf.length - offset))
            .then(function (len) {
            if (gotFirstSync) {
                if (len === 0)
                    throw new Error(strtok3_1.endOfFile);
                if ((_this.syncPeek.buf[offset] & 0xE0) === 0xE0) {
                    _this.syncPeek.len = 0;
                    _this.unsynced += offset - 1;
                    return _this.tokenizer.ignore(offset); // Full sync
                }
                else {
                    return _this._sync((offset + 1) % _this.syncPeek.buf.length, false); // partial sync
                }
            }
            else {
                if (len <= 1)
                    throw new Error(strtok3_1.endOfFile);
                var index = _this.syncPeek.buf.indexOf(MpegFrameHeader.SyncByte1, offset);
                if (index >= 0) {
                    return _this._sync((index + 1) % _this.syncPeek.buf.length, true);
                }
                else {
                    return _this._sync(0, false);
                }
            }
        });
    };
    MpegParser.prototype.sync = function () {
        var _this = this;
        return this._sync(0, false)
            .then(function () {
            if (_this.unsynced > 0) {
                _this.warnings.push("synchronized, after " + _this.unsynced + " bytes of unsynced data");
                // debug("synchronized, after " + this.unsynced + " bytes of unsynced data");
                _this.unsynced = 0;
            }
            return _this.parseAudioFrameHeader(_this.buf_frame_header);
        });
    };
    MpegParser.prototype.parseAudioFrameHeader = function (buf_frame_header) {
        var _this = this;
        if (this.frameCount === 0) {
            this.mpegOffset = this.tokenizer.position - 1;
        }
        return this.tokenizer.readBuffer(buf_frame_header, 1, 3).then(function () {
            var header;
            try {
                header = MpegAudioLayer.FrameHeader.get(buf_frame_header, 0);
            }
            catch (err) {
                _this.warnings.push("Parse error: " + err.message);
                return _this.sync();
            }
            var format = _this.metadata.format;
            // format.dataformat = "MPEG-" + header.version + " Audio Layer " + Util.romanize(header.layer);
            format.dataformat = "mp" + header.layer;
            format.lossless = false;
            format.bitrate = header.bitrate;
            format.sampleRate = header.samplingRate;
            format.numberOfChannels = header.channelMode === "mono" ? 1 : 2;
            var slot_size = header.calcSlotSize();
            if (slot_size === null) {
                throw new Error("invalid slot_size");
            }
            var samples_per_frame = header.calcSamplesPerFrame();
            var bps = samples_per_frame / 8.0;
            var fsize = (bps * header.bitrate / header.samplingRate) +
                ((header.padding) ? slot_size : 0);
            _this.frame_size = Math.floor(fsize);
            _this.audioFrameHeader = header;
            _this.frameCount++;
            _this.bitrates.push(header.bitrate);
            // xtra header only exists in first frame
            if (_this.frameCount === 1) {
                _this.offset = MpegAudioLayer.FrameHeader.len;
                return _this.skipSideInformation();
            }
            if (_this.frameCount === 3) {
                // the stream is CBR if the first 3 frame bitrates are the same
                if (_this.areAllSame(_this.bitrates)) {
                    // Actual calculation will be done in finalize
                    _this.samplesPerFrame = samples_per_frame;
                    format.codecProfile = "CBR";
                    return; // Done
                }
                else if (!_this.readDuration) {
                    return; // Done
                }
            }
            // once we know the file is VBR attach listener to end of
            // stream so we can do the duration calculation when we
            // have counted all the frames
            if (_this.readDuration && _this.frameCount === 4) {
                _this.samplesPerFrame = samples_per_frame;
                _this.calculateVbrDuration = true;
            }
            _this.offset = 4;
            if (header.isProtectedByCRC) {
                return _this.parseCrc();
            }
            else {
                return _this.skipSideInformation();
            }
        });
    };
    MpegParser.prototype.parseCrc = function () {
        var _this = this;
        this.tokenizer.readNumber(Token.INT16_BE).then(function (crc) {
            _this.crc = crc;
        });
        this.offset += 2;
        return this.skipSideInformation();
    };
    MpegParser.prototype.skipSideInformation = function () {
        var _this = this;
        var sideinfo_length = this.audioFrameHeader.calculateSideInfoLength();
        // side information
        return this.tokenizer.readToken(new Token.BufferType(sideinfo_length)).then(function () {
            _this.offset += sideinfo_length;
            return _this.readXtraInfoHeader();
        });
    };
    MpegParser.prototype.readXtraInfoHeader = function () {
        var _this = this;
        return this.tokenizer.readToken(XingTag_1.InfoTagHeaderTag).then(function (headerTag) {
            _this.offset += XingTag_1.InfoTagHeaderTag.len; // 12
            switch (headerTag) {
                case "Info":
                    _this.metadata.format.codecProfile = "CBR";
                    return _this.readXingInfoHeader();
                case "Xing":
                    return _this.readXingInfoHeader().then(function (infoTag) {
                        _this.metadata.format.codecProfile = MpegAudioLayer.getVbrCodecProfile(infoTag.vbrScale);
                        return null;
                    });
                case "Xtra":
                    // ToDo: ???
                    break;
                case "LAME":
                    return _this.tokenizer.readToken(XingTag_1.LameEncoderVersion).then(function (version) {
                        _this.offset += XingTag_1.LameEncoderVersion.len;
                        _this.metadata.format.encoder = "LAME " + version;
                        return _this.skipFrameData(_this.frame_size - _this.offset);
                    });
            }
            // ToDo: promise duration???
            var frameDataLeft = _this.frame_size - _this.offset;
            if (frameDataLeft < 0) {
                _this.warnings.push("Frame " + _this.frameCount + "corrupt: negative frameDataLeft");
                return _this.sync();
            }
            else {
                return _this.skipFrameData(frameDataLeft);
            }
        });
    };
    /**
     * Ref: http://gabriel.mp3-tech.org/mp3infotag.html
     * @returns {Promise<string>}
     */
    MpegParser.prototype.readXingInfoHeader = function () {
        var _this = this;
        return this.tokenizer.readToken(XingTag_1.XingInfoTag).then(function (infoTag) {
            _this.offset += XingTag_1.XingInfoTag.len; // 12
            _this.metadata.format.encoder = Util_1.default.stripNulls(infoTag.encoder);
            if ((infoTag.headerFlags[3] & 0x01) === 1) {
                _this.metadata.format.duration = _this.audioFrameHeader.calcDuration(infoTag.numFrames);
                return infoTag;
            }
            // frames field is not present
            var frameDataLeft = _this.frame_size - _this.offset;
            return _this.skipFrameData(frameDataLeft).then(function () {
                return infoTag;
            });
        });
    };
    MpegParser.prototype.skipFrameData = function (frameDataLeft) {
        var _this = this;
        assert.ok(frameDataLeft >= 0, 'frame-data-left cannot be negative');
        return this.tokenizer.readToken(new Token.IgnoreType(frameDataLeft)).then(function () {
            _this.countSkipFrameData += frameDataLeft;
            return _this.sync();
        });
    };
    MpegParser.prototype.areAllSame = function (array) {
        var first = array[0];
        return array.every(function (element) {
            return element === first;
        });
    };
    return MpegParser;
}(AbstractID3Parser_1.AbstractID3v2Parser));
exports.MpegParser = MpegParser;


/***/ }),

/***/ "./node_modules/music-metadata/lib/mpeg/XingTag.js":
/*!*********************************************************!*\
  !*** ./node_modules/music-metadata/lib/mpeg/XingTag.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Token = __webpack_require__(/*! token-types */ "./node_modules/token-types/lib/index.js");
/**
 * Info Tag: Xing, LAME
 */
exports.InfoTagHeaderTag = new Token.StringType(4, 'ascii');
/**
 * LAME TAG value
 * Did not find any official documentation for this
 * Value e.g.: "3.98.4"
 */
exports.LameEncoderVersion = new Token.StringType(6, 'ascii');
/**
 * Info Tag
 * Ref: http://gabriel.mp3-tech.org/mp3infotag.html
 */
exports.XingInfoTag = {
    len: 136,
    get: function (buf, off) {
        return {
            // === ZONE A - Traditional Xing VBR Tag data ===
            // 4 bytes for HeaderFlags
            headerFlags: new Token.BufferType(4).get(buf, off),
            numFrames: Token.UINT32_BE.get(buf, off + 4),
            streamSize: Token.UINT32_BE.get(buf, off + 8),
            // the number of header data bytes (from original file)
            vbrScale: Token.UINT32_BE.get(buf, off + 112),
            /**
             * LAME Tag, extends the Xing header format
             * First added in LAME 3.12 for VBR
             * The modified header is also included in CBR files (effective LAME 3.94), with "Info" instead of "XING" near the beginning.
             */
            // === ZONE B - Initial LAME info  ===
            //  Initial LAME info, e.g.: LAME3.99r
            encoder: new Token.StringType(9, 'ascii').get(buf, off + 116),
            // 	 Info tag revision
            infoTagRevision: Token.UINT8.get(buf, off + 125) >> 4,
            // VBR method
            vbrMethod: Token.UINT8.get(buf, off + 125) & 0xf // $A5
        };
    }
};


/***/ }),

/***/ "./node_modules/music-metadata/lib/ogg/OggParser.js":
/*!**********************************************************!*\
  !*** ./node_modules/music-metadata/lib/ogg/OggParser.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __webpack_require__(/*! ../common/Util */ "./node_modules/music-metadata/lib/common/Util.js");
var VorbisParser_1 = __webpack_require__(/*! ../vorbis/VorbisParser */ "./node_modules/music-metadata/lib/vorbis/VorbisParser.js");
var FourCC_1 = __webpack_require__(/*! ../common/FourCC */ "./node_modules/music-metadata/lib/common/FourCC.js");
var OpusParser_1 = __webpack_require__(/*! ../opus/OpusParser */ "./node_modules/music-metadata/lib/opus/OpusParser.js");
var Token = __webpack_require__(/*! token-types */ "./node_modules/token-types/lib/index.js");
var _debug = __webpack_require__(/*! debug */ "./node_modules/music-metadata/node_modules/debug/src/index.js");
var debug = _debug("music-metadata:parser:Ogg");
var SegmentTable = /** @class */ (function () {
    function SegmentTable(header) {
        this.len = header.page_segments;
    }
    SegmentTable.sum = function (buf, off, len) {
        var s = 0;
        for (var i = off; i < off + len; ++i) {
            s += buf[i];
        }
        return s;
    };
    SegmentTable.prototype.get = function (buf, off) {
        return {
            totalPageSize: SegmentTable.sum(buf, off, this.len)
        };
    };
    return SegmentTable;
}());
exports.SegmentTable = SegmentTable;
/**
 * Parser for Ogg logical bitstream framing
 */
var OggParser = /** @class */ (function () {
    function OggParser() {
    }
    OggParser.getInstance = function () {
        return new OggParser();
    };
    OggParser.prototype.parse = function (tokenizer, options) {
        var _this = this;
        this.tokenizer = tokenizer;
        this.options = options;
        return this.parsePage().then(function () {
            if (_this.pageConsumer) {
                return _this.pageConsumer.getMetadata();
            }
            return null;
        });
    };
    OggParser.prototype.parsePage = function () {
        var _this = this;
        debug("pos=%s, parsePage()", this.tokenizer.position);
        return this.tokenizer.readToken(OggParser.Header).then(function (header) {
            if (header.capturePattern !== 'OggS') {
                throw new Error('expected ogg header but was not found');
            }
            _this.header = header;
            _this.pageNumber = header.pageSequenceNo;
            debug("page#=%s, Ogg.id=%s", header.pageSequenceNo, header.capturePattern);
            return _this.tokenizer.readToken(new SegmentTable(header)).then(function (segmentTable) {
                debug("totalPageSize=%s", segmentTable.totalPageSize);
                return _this.tokenizer.readToken(new Token.BufferType(segmentTable.totalPageSize)).then(function (pageData) {
                    debug("firstPage=%s, lastPage=%s, continued=%s", header.headerType.firstPage, header.headerType.lastPage, header.headerType.continued);
                    if (header.headerType.firstPage) {
                        var id = new Token.StringType(7, 'ascii').get(pageData, 0);
                        switch (id[1]) {
                            case 'v':// Ogg/Vorbis
                                debug("Set page consumer to Ogg/Vorbis ");
                                _this.pageConsumer = new VorbisParser_1.VorbisParser(_this.options);
                                break;
                            case 'p':// Ogg/Opus
                                debug("Set page consumer to Ogg/Opus");
                                _this.pageConsumer = new OpusParser_1.OpusParser(_this.options);
                                break;
                            default:
                                throw new Error('gg audio-codec not recognized (id=' + id + ')');
                        }
                    }
                    _this.pageConsumer.parsePage(header, pageData);
                    if (!header.headerType.lastPage) {
                        return _this.parsePage();
                    }
                });
            });
        }).catch(function (err) {
            switch (err.message) {
                case "End-Of-File":
                    break; // ignore this error
                case "FourCC contains invalid characters":
                    if (_this.pageNumber > 0) {
                        // ignore this error: work-around if last OGG-page is not marked with last-page flag
                        // ToDo: capture warning
                        return _this.pageConsumer.flush();
                    }
                    throw err;
                default:
                    throw err;
            }
        });
    };
    OggParser.Header = {
        len: 27,
        get: function (buf, off) {
            return {
                capturePattern: FourCC_1.FourCcToken.get(buf, off),
                version: buf.readUInt8(off + 4),
                headerType: {
                    continued: Util_1.default.strtokBITSET.get(buf, off + 5, 0),
                    firstPage: Util_1.default.strtokBITSET.get(buf, off + 5, 1),
                    lastPage: Util_1.default.strtokBITSET.get(buf, off + 5, 2)
                },
                // packet_flag: buf.readUInt8(off + 5),
                absoluteGranulePosition: buf.readIntLE(off + 6, 6),
                streamSerialNumber: Token.UINT32_LE.get(buf, off + 14),
                pageSequenceNo: Token.UINT32_LE.get(buf, off + 18),
                pageChecksum: Token.UINT32_LE.get(buf, off + 22),
                page_segments: buf.readUInt8(off + 26)
            };
        }
    };
    return OggParser;
}());
exports.OggParser = OggParser;


/***/ }),

/***/ "./node_modules/music-metadata/lib/opus/Opus.js":
/*!******************************************************!*\
  !*** ./node_modules/music-metadata/lib/opus/Opus.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Token = __webpack_require__(/*! token-types */ "./node_modules/token-types/lib/index.js");
/**
 * Opus ID Header parser
 * Ref: https://wiki.xiph.org/OggOpus#ID_Header
 */
var IdHeader = /** @class */ (function () {
    function IdHeader(len) {
        this.len = len;
        if (len < 19) {
            throw new Error("ID-header-page 0 should be at least 19 bytes long");
        }
    }
    IdHeader.prototype.get = function (buf, off) {
        return {
            magicSignature: new Token.StringType(8, 'ascii').get(buf, off + 0),
            version: buf.readUInt8(off + 8),
            channelCount: buf.readUInt8(off + 9),
            preSkip: buf.readInt16LE(off + 10),
            inputSampleRate: buf.readInt32LE(off + 12),
            outputGain: buf.readInt16LE(off + 16),
            channelMapping: buf.readUInt8(off + 18)
        };
    };
    return IdHeader;
}());
exports.IdHeader = IdHeader;


/***/ }),

/***/ "./node_modules/music-metadata/lib/opus/OpusParser.js":
/*!************************************************************!*\
  !*** ./node_modules/music-metadata/lib/opus/OpusParser.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Opus = __webpack_require__(/*! ./Opus */ "./node_modules/music-metadata/lib/opus/Opus.js");
var Token = __webpack_require__(/*! token-types */ "./node_modules/token-types/lib/index.js");
var VorbisParser_1 = __webpack_require__(/*! ../vorbis/VorbisParser */ "./node_modules/music-metadata/lib/vorbis/VorbisParser.js");
/**
 * Opus parser
 * Internet Engineering Task Force (IETF) - RFC 6716
 * Used by OggParser
 */
var OpusParser = /** @class */ (function (_super) {
    __extends(OpusParser, _super);
    function OpusParser(options) {
        var _this = _super.call(this, options) || this;
        _this.options = options;
        return _this;
    }
    /**
     * Parse first Opus Ogg page
     * @param {IPageHeader} header
     * @param {Buffer} pageData
     */
    OpusParser.prototype.parseFirstPage = function (header, pageData) {
        // Parse Opus ID Header
        this.idHeader = new Opus.IdHeader(pageData.length).get(pageData, 0);
        if (this.idHeader.magicSignature !== "OpusHead")
            throw new Error("Illegal ogg/Opus magic-signature");
        this.format.dataformat = "Ogg/Opus";
        this.format.sampleRate = this.idHeader.inputSampleRate;
        this.format.numberOfChannels = this.idHeader.channelCount;
    };
    OpusParser.prototype.parseFullPage = function (pageData) {
        var magicSignature = new Token.StringType(8, 'ascii').get(pageData, 0);
        switch (magicSignature) {
            case 'OpusTags':
                this.parseUserCommentList(pageData, 8);
                break;
            default:
                break;
        }
    };
    OpusParser.prototype.calculateDuration = function (header) {
        if (this.format.sampleRate && header.absoluteGranulePosition >= 0) {
            // Calculate duration
            this.format.numberOfSamples = header.absoluteGranulePosition - this.idHeader.preSkip;
            this.format.duration = this.format.numberOfSamples / this.idHeader.inputSampleRate;
        }
    };
    return OpusParser;
}(VorbisParser_1.VorbisParser));
exports.OpusParser = OpusParser;


/***/ }),

/***/ "./node_modules/music-metadata/lib/riff/RiffChunk.js":
/*!***********************************************************!*\
  !*** ./node_modules/music-metadata/lib/riff/RiffChunk.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Token = __webpack_require__(/*! token-types */ "./node_modules/token-types/lib/index.js");
var FourCC_1 = __webpack_require__(/*! ../common/FourCC */ "./node_modules/music-metadata/lib/common/FourCC.js");
/**
 * Common RIFF chunk header
 */
exports.Header = {
    len: 8,
    get: function (buf, off) {
        return {
            // Group-ID
            chunkID: FourCC_1.FourCcToken.get(buf, off),
            // Size
            size: buf.readUInt32LE(off + 4)
        };
    }
};
/**
 * Token to parse RIFF-INFO tag value
 */
var ListInfoTagValue = /** @class */ (function () {
    function ListInfoTagValue(tagHeader) {
        this.tagHeader = tagHeader;
        this.len = tagHeader.size;
        this.len += this.len & 1; // if it is an odd length, round up to even
    }
    ListInfoTagValue.prototype.get = function (buf, off) {
        return new Token.StringType(this.tagHeader.size, 'ascii').get(buf, off);
    };
    return ListInfoTagValue;
}());
exports.ListInfoTagValue = ListInfoTagValue;


/***/ }),

/***/ "./node_modules/music-metadata/lib/riff/RiffParser.js":
/*!************************************************************!*\
  !*** ./node_modules/music-metadata/lib/riff/RiffParser.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var strtok3 = __webpack_require__(/*! strtok3 */ "./node_modules/strtok3/lib/index.js");
var Token = __webpack_require__(/*! token-types */ "./node_modules/token-types/lib/index.js");
var RiffChunk = __webpack_require__(/*! ./RiffChunk */ "./node_modules/music-metadata/lib/riff/RiffChunk.js");
var WaveChunk = __webpack_require__(/*! ./../wav/WaveChunk */ "./node_modules/music-metadata/lib/wav/WaveChunk.js");
var stream_1 = __webpack_require__(/*! stream */ "stream");
var ID3v2Parser_1 = __webpack_require__(/*! ../id3v2/ID3v2Parser */ "./node_modules/music-metadata/lib/id3v2/ID3v2Parser.js");
var Util_1 = __webpack_require__(/*! ../common/Util */ "./node_modules/music-metadata/lib/common/Util.js");
var FourCC_1 = __webpack_require__(/*! ../common/FourCC */ "./node_modules/music-metadata/lib/common/FourCC.js");
var es6_promise_1 = __webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js");
/**
 * Resource Interchange File Format (RIFF) Parser
 *
 * WAVE PCM soundfile format
 *
 * Ref:
 *  http://www.johnloomis.org/cpe102/asgn/asgn1/riff.html
 *  http://soundfile.sapp.org/doc/WaveFormat
 */
var WavePcmParser = /** @class */ (function () {
    function WavePcmParser() {
        this.metadata = {
            format: {
                dataformat: "WAVE PCM"
            },
            native: {}
        };
        /**
         * RIFF/ILIST-INFO tag stored in EXIF
         */
        this.riffInfoTags = [];
        this.warnings = [];
    }
    WavePcmParser.prototype.parse = function (tokenizer, options) {
        var _this = this;
        this.tokenizer = tokenizer;
        this.options = options;
        return this.tokenizer.readToken(RiffChunk.Header)
            .then(function (header) {
            if (header.chunkID !== 'RIFF')
                return null; // Not RIFF format
            return _this.tokenizer.readToken(FourCC_1.FourCcToken).then(function (type) {
                _this.metadata.format.dataformat = type;
            }).then(function () {
                return _this.readChunk(header).then(function () {
                    return null;
                });
            });
        })
            .catch(function (err) {
            if (err.message === strtok3.endOfFile) {
                return _this.metadata;
            }
            else {
                throw err;
            }
        }).then(function (metadata) {
            if (_this.riffInfoTags.length > 0) {
                metadata.native.exif = _this.riffInfoTags;
            }
            return metadata;
        });
    };
    WavePcmParser.prototype.readChunk = function (parent) {
        var _this = this;
        return this.tokenizer.readToken(RiffChunk.Header)
            .then(function (header) {
            switch (header.chunkID) {
                case "LIST":
                    return _this.tokenizer.readToken(FourCC_1.FourCcToken).then(function (listTypes) {
                        switch (listTypes) {
                            case 'INFO':
                                return _this.parseRiffInfoTags(header.size - 4).then(function () { return header.size; });
                            default:
                                _this.warnings.push("Ignore chunk: RIFF/LIST." + listTypes);
                                return _this.tokenizer.ignore(header.size).then(function () { return header.size; });
                        }
                    });
                case "fmt ":// The Util Chunk
                    return _this.tokenizer.readToken(new WaveChunk.Format(header))
                        .then(function (common) {
                        _this.metadata.format.bitsPerSample = common.bitsPerSample;
                        _this.metadata.format.sampleRate = common.sampleRate;
                        _this.metadata.format.numberOfChannels = common.numChannels;
                        _this.metadata.format.bitrate = common.blockAlign * common.sampleRate * 8;
                        _this.blockAlign = common.blockAlign;
                    });
                case "id3 ": // The way Picard, FooBar currently stores, ID3 meta-data
                case "ID3 ":// The way Mp3Tags stores ID3 meta-data
                    return _this.tokenizer.readToken(new Token.BufferType(header.size))
                        .then(function (id3_data) {
                        var id3stream = new ID3Stream(id3_data);
                        return strtok3.fromStream(id3stream).then(function (rst) {
                            return ID3v2Parser_1.ID3v2Parser.getInstance().parse(_this.metadata, rst, _this.options);
                        });
                    });
                case 'data':// PCM-data
                    _this.metadata.format.numberOfSamples = header.size / _this.blockAlign;
                    _this.metadata.format.duration = _this.metadata.format.numberOfSamples / _this.metadata.format.sampleRate;
                    _this.metadata.format.bitrate = _this.metadata.format.numberOfChannels * _this.blockAlign * _this.metadata.format.sampleRate; // ToDo: check me
                    return _this.tokenizer.ignore(header.size);
                default:
                    _this.warnings.push("Ignore chunk: RIFF/" + header.chunkID);
                    return _this.tokenizer.ignore(header.size);
            }
        }).then(function () {
            return _this.readChunk(parent);
        });
    };
    WavePcmParser.prototype.parseRiffInfoTags = function (chunkSize) {
        var _this = this;
        return this.tokenizer.readToken(RiffChunk.Header)
            .then(function (header) {
            var valueToken = new RiffChunk.ListInfoTagValue(header);
            return _this.tokenizer.readToken(valueToken).then(function (value) {
                _this.riffInfoTags.push({ id: header.chunkID, value: Util_1.default.stripNulls(value) });
                chunkSize -= (8 + valueToken.len);
                if (chunkSize > 8) {
                    return _this.parseRiffInfoTags(chunkSize);
                }
                else if (chunkSize === 0) {
                    return es6_promise_1.Promise.resolve(null);
                }
                else {
                    throw Error("Illegal remaining size: " + chunkSize);
                }
            });
        });
    };
    return WavePcmParser;
}());
exports.WavePcmParser = WavePcmParser;
var ID3Stream = /** @class */ (function (_super) {
    __extends(ID3Stream, _super);
    function ID3Stream(buf) {
        var _this = _super.call(this) || this;
        _this.buf = buf;
        return _this;
    }
    ID3Stream.prototype._read = function () {
        this.push(this.buf);
        this.push(null); // push the EOF-signaling `null` chunk
    };
    return ID3Stream;
}(stream_1.Readable));


/***/ }),

/***/ "./node_modules/music-metadata/lib/vorbis/Vorbis.js":
/*!**********************************************************!*\
  !*** ./node_modules/music-metadata/lib/vorbis/Vorbis.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Token = __webpack_require__(/*! token-types */ "./node_modules/token-types/lib/index.js");
var ID3v2_1 = __webpack_require__(/*! ../id3v2/ID3v2 */ "./node_modules/music-metadata/lib/id3v2/ID3v2.js");
/**
 * Parse the METADATA_BLOCK_PICTURE
 * Ref: https://wiki.xiph.org/VorbisComment#METADATA_BLOCK_PICTURE
 * Ref: https://xiph.org/flac/format.html#metadata_block_picture
 * // ToDo: move to ID3 / APIC?
 */
var VorbisPictureToken = /** @class */ (function () {
    function VorbisPictureToken(len) {
        this.len = len;
    }
    VorbisPictureToken.fromBase64 = function (base64str) {
        return this.fromBuffer(new Buffer(base64str, 'base64'));
    };
    VorbisPictureToken.fromBuffer = function (buffer) {
        var pic = new VorbisPictureToken(buffer.length);
        return pic.get(buffer, 0);
    };
    VorbisPictureToken.prototype.get = function (buffer, offset) {
        var type = ID3v2_1.AttachedPictureType[Token.UINT32_BE.get(buffer, offset)];
        var mimeLen = Token.UINT32_BE.get(buffer, offset += 4);
        var format = buffer.toString('utf-8', offset += 4, offset + mimeLen);
        var descLen = Token.UINT32_BE.get(buffer, offset += mimeLen);
        var description = buffer.toString('utf-8', offset += 4, offset + descLen);
        var width = Token.UINT32_BE.get(buffer, offset += descLen);
        var height = Token.UINT32_BE.get(buffer, offset += 4);
        var colour_depth = Token.UINT32_BE.get(buffer, offset += 4);
        var indexed_color = Token.UINT32_BE.get(buffer, offset += 4);
        var picDataLen = Token.UINT32_BE.get(buffer, offset += 4);
        var data = new Buffer(buffer.slice(offset += 4, offset + picDataLen));
        return {
            type: type,
            format: format,
            description: description,
            width: width,
            height: height,
            colour_depth: colour_depth,
            indexed_color: indexed_color,
            data: data
        };
    };
    return VorbisPictureToken;
}());
exports.VorbisPictureToken = VorbisPictureToken;
/**
 * Comment header decoder
 * Ref: https://xiph.org/vorbis/doc/Vorbis_I_spec.html#x1-620004.2.1
 */
exports.CommonHeader = {
    len: 7,
    get: function (buf, off) {
        return {
            packetType: buf.readUInt8(off),
            vorbis: new Token.StringType(6, 'ascii').get(buf, off + 1)
        };
    }
};
/**
 * Identification header decoder
 * Ref: https://xiph.org/vorbis/doc/Vorbis_I_spec.html#x1-630004.2.2
 */
exports.IdentificationHeader = {
    len: 23,
    get: function (buf, off) {
        return {
            version: buf.readUInt32LE(off + 0),
            channelMode: buf.readUInt8(off + 4),
            sampleRate: buf.readUInt32LE(off + 5),
            bitrateMax: buf.readUInt32LE(off + 9),
            bitrateNominal: buf.readUInt32LE(off + 13),
            bitrateMin: buf.readUInt32LE(off + 17)
        };
    }
};


/***/ }),

/***/ "./node_modules/music-metadata/lib/vorbis/VorbisParser.js":
/*!****************************************************************!*\
  !*** ./node_modules/music-metadata/lib/vorbis/VorbisParser.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vorbis = __webpack_require__(/*! ./Vorbis */ "./node_modules/music-metadata/lib/vorbis/Vorbis.js");
var Token = __webpack_require__(/*! token-types */ "./node_modules/token-types/lib/index.js");
var _debug = __webpack_require__(/*! debug */ "./node_modules/music-metadata/node_modules/debug/src/index.js");
var debug = _debug("music-metadata:parser:Ogg/Vorbis1");
/**
 * Vorbis 1 Parser.
 * Used by OggParser
 */
var VorbisParser = /** @class */ (function () {
    function VorbisParser(options) {
        this.options = options;
        this.format = {};
        this.tags = [];
        this.pageSegments = [];
    }
    /**
     * Vorbis 1 parser
     * @param header Ogg Page Header
     * @param pageData Page data
     */
    VorbisParser.prototype.parsePage = function (header, pageData) {
        if (header.headerType.firstPage) {
            this.parseFirstPage(header, pageData);
        }
        else {
            if (header.headerType.continued) {
                if (this.pageSegments.length === 0) {
                    throw new Error("Cannot continue on previous page");
                }
                this.pageSegments.push(pageData);
            }
            if (header.headerType.lastPage || !header.headerType.continued) {
                // Flush page segments
                if (this.pageSegments.length > 0) {
                    var fullPage = Buffer.concat(this.pageSegments);
                    this.parseFullPage(fullPage);
                }
                // Reset page segments
                this.pageSegments = header.headerType.lastPage ? [] : [pageData];
            }
        }
        if (header.headerType.lastPage) {
            this.calculateDuration(header);
        }
    };
    VorbisParser.prototype.flush = function () {
        this.parseFullPage(Buffer.concat(this.pageSegments));
    };
    VorbisParser.prototype.getMetadata = function () {
        return {
            format: this.format,
            native: {
                vorbis: this.tags
            }
        };
    };
    /**
     * Parse first Ogg/Vorbis page
     * @param {IPageHeader} header
     * @param {Buffer} pageData
     */
    VorbisParser.prototype.parseFirstPage = function (header, pageData) {
        debug("Parse first page");
        // Parse  Vorbis common header
        var commonHeader = Vorbis.CommonHeader.get(pageData, 0);
        if (commonHeader.vorbis !== 'vorbis')
            throw new Error('Metadata does not look like Vorbis');
        this.format.dataformat = "Ogg/Vorbis I";
        if (commonHeader.packetType === 1) {
            var idHeader = Vorbis.IdentificationHeader.get(pageData, Vorbis.CommonHeader.len);
            this.format.sampleRate = idHeader.sampleRate;
            this.format.bitrate = idHeader.bitrateNominal;
            this.format.numberOfChannels = idHeader.channelMode;
            debug("sample-rate=%s[hz], bitrate=%s[b/s], channel-mode=%s", idHeader.sampleRate, idHeader.bitrateNominal, idHeader.channelMode);
        }
        else
            throw new Error('First Ogg page should be type 1: the identification header');
    };
    VorbisParser.prototype.parseFullPage = function (pageData) {
        // New page
        var commonHeader = Vorbis.CommonHeader.get(pageData, 0);
        debug("Parse full page: type=%s, byteLength=%s", commonHeader.packetType, pageData.byteLength);
        switch (commonHeader.packetType) {
            case 3://  type 3: comment header
                return this.parseUserCommentList(pageData, Vorbis.CommonHeader.len);
            case 1: // type 1: the identification header
            case 5:// type 5: setup header type
                break; // ignore
        }
    };
    VorbisParser.prototype.calculateDuration = function (header) {
        if (this.format.sampleRate && header.absoluteGranulePosition >= 0) {
            // Calculate duration
            this.format.numberOfSamples = header.absoluteGranulePosition;
            this.format.duration = this.format.numberOfSamples / this.format.sampleRate;
        }
    };
    /**
     * Ref: https://xiph.org/vorbis/doc/Vorbis_I_spec.html#x1-840005.2
     * @returns {Promise<number>}
     */
    VorbisParser.prototype.parseUserCommentList = function (pageData, offset) {
        var strLen = Token.UINT32_LE.get(pageData, offset);
        offset += 4;
        var vendorString = new Token.StringType(strLen, 'utf-8').get(pageData, offset);
        offset += strLen;
        var userCommentListLength = Token.UINT32_LE.get(pageData, offset);
        offset += 4;
        while (userCommentListLength-- > 0) {
            offset += this.parseUserComment(pageData, offset);
        }
    };
    VorbisParser.prototype.parseUserComment = function (pageData, offset) {
        var strLen = Token.UINT32_LE.get(pageData, offset);
        var v = new Token.StringType(strLen, 'utf-8').get(pageData, offset + 4);
        var idx = v.indexOf('=');
        var key = v.slice(0, idx).toUpperCase();
        var value = v.slice(idx + 1);
        if (key === 'METADATA_BLOCK_PICTURE') {
            value = this.options.skipCovers ? null : Vorbis.VorbisPictureToken.fromBase64(value);
        }
        if (value !== null) {
            debug("Push tag: id=%s, value=%s", key, value);
            this.tags.push({ id: key, value: value });
        }
        return Token.UINT32_LE.len + strLen;
    };
    return VorbisParser;
}());
exports.VorbisParser = VorbisParser;


/***/ }),

/***/ "./node_modules/music-metadata/lib/vorbis/VorbisTagMapper.js":
/*!*******************************************************************!*\
  !*** ./node_modules/music-metadata/lib/vorbis/VorbisTagMapper.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GenericTagMapper_1 = __webpack_require__(/*! ../common/GenericTagMapper */ "./node_modules/music-metadata/lib/common/GenericTagMapper.js");
/**
 * Vorbis tag mappings
 *
 * Mapping from native header format to one or possibly more 'common' entries
 * The common entries aim to read the same information from different media files
 * independent of the underlying format
 */
var vorbisTagMap = {
    TITLE: "title",
    ARTIST: "artist",
    ARTISTS: "artists",
    ALBUMARTIST: "albumartist",
    ALBUM: "album",
    DATE: "date",
    ORIGINALDATE: "originaldate",
    ORIGINALYEAR: "originalyear",
    COMMENT: "comment",
    TRACKNUMBER: "track",
    DISCNUMBER: "disk",
    GENRE: "genre",
    METADATA_BLOCK_PICTURE: "picture",
    COMPOSER: "composer",
    LYRICS: "lyrics",
    ALBUMSORT: "albumsort",
    TITLESORT: "titlesort",
    WORK: "work",
    ARTISTSORT: "artistsort",
    ALBUMARTISTSORT: "albumartistsort",
    COMPOSERSORT: "composersort",
    LYRICIST: "lyricist",
    WRITER: "writer",
    CONDUCTOR: "conductor",
    // 'PERFORMER=artist (instrument)': 'performer:instrument', // ToDo
    REMIXER: "remixer",
    ARRANGER: "arranger",
    ENGINEER: "engineer",
    PRODUCER: "producer",
    DJMIXER: "djmixer",
    MIXER: "mixer",
    LABEL: "label",
    GROUPING: "grouping",
    SUBTITLE: "subtitle",
    DISCSUBTITLE: "discsubtitle",
    TRACKTOTAL: "totaltracks",
    DISCTOTAL: "totaldiscs",
    COMPILATION: "compilation",
    "RATING:user@email": "_rating",
    BPM: "bpm",
    MOOD: "mood",
    MEDIA: "media",
    CATALOGNUMBER: "catalognumber",
    RELEASESTATUS: "releasestatus",
    RELEASETYPE: "releasetype",
    RELEASECOUNTRY: "releasecountry",
    SCRIPT: "script",
    LANGUAGE: "language",
    COPYRIGHT: "copyright",
    LICENSE: "license",
    ENCODEDBY: "encodedby",
    ENCODERSETTINGS: "encodersettings",
    BARCODE: "barcode",
    ISRC: "isrc",
    ASIN: "asin",
    MUSICBRAINZ_TRACKID: "musicbrainz_recordingid",
    MUSICBRAINZ_RELEASETRACKID: "musicbrainz_trackid",
    MUSICBRAINZ_ALBUMID: "musicbrainz_albumid",
    MUSICBRAINZ_ARTISTID: "musicbrainz_artistid",
    MUSICBRAINZ_ALBUMARTISTID: "musicbrainz_albumartistid",
    MUSICBRAINZ_RELEASEGROUPID: "musicbrainz_releasegroupid",
    MUSICBRAINZ_WORKID: "musicbrainz_workid",
    MUSICBRAINZ_TRMID: "musicbrainz_trmid",
    MUSICBRAINZ_DISCID: "musicbrainz_discid",
    ACOUSTID_ID: "acoustid_id",
    ACOUSTID_ID_FINGERPRINT: "acoustid_fingerprint",
    MUSICIP_PUID: "musicip_puid",
    // 'FINGERPRINT=MusicMagic Fingerprint {fingerprint}': 'musicip_fingerprint', // ToDo
    WEBSITE: "website",
    NOTES: "notes",
    TOTALTRACKS: "totaltracks",
    TOTALDISCS: "totaldiscs",
    // Discogs
    DISCOGS_RELEASE_ID: "discogs_release_id",
    CATALOGID: "catalognumber",
    STYLE: "genre",
    REPLAYGAIN_TRACK_GAIN: "replaygain_track_gain",
    REPLAYGAIN_TRACK_PEAK: "replaygain_track_peak"
};
var VorbisTagMapper = /** @class */ (function (_super) {
    __extends(VorbisTagMapper, _super);
    function VorbisTagMapper() {
        return _super.call(this, ['vorbis'], vorbisTagMap) || this;
    }
    return VorbisTagMapper;
}(GenericTagMapper_1.CommonTagMapper));
exports.VorbisTagMapper = VorbisTagMapper;


/***/ }),

/***/ "./node_modules/music-metadata/lib/wav/WaveChunk.js":
/*!**********************************************************!*\
  !*** ./node_modules/music-metadata/lib/wav/WaveChunk.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var assert = __webpack_require__(/*! assert */ "assert");
/**
 * format chunk; chunk-id is "fmt "
 * http://soundfile.sapp.org/doc/WaveFormat/
 */
var Format = /** @class */ (function () {
    function Format(header) {
        assert.ok(header.size >= 16, "16 for PCM.");
        this.len = header.size;
    }
    Format.prototype.get = function (buf, off) {
        return {
            audioFormat: buf.readUInt16LE(off),
            numChannels: buf.readUInt16LE(off + 2),
            sampleRate: buf.readUInt32LE(off + 4),
            byteRate: buf.readUInt32LE(off + 8),
            blockAlign: buf.readUInt16LE(off + 12),
            bitsPerSample: buf.readUInt16LE(off + 14)
        };
    };
    return Format;
}());
exports.Format = Format;


/***/ }),

/***/ "./node_modules/music-metadata/lib/wavpack/WavPackParser.js":
/*!******************************************************************!*\
  !*** ./node_modules/music-metadata/lib/wavpack/WavPackParser.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Token = __webpack_require__(/*! token-types */ "./node_modules/token-types/lib/index.js");
var APEv2Parser_1 = __webpack_require__(/*! ../apev2/APEv2Parser */ "./node_modules/music-metadata/lib/apev2/APEv2Parser.js");
var FourCC_1 = __webpack_require__(/*! ../common/FourCC */ "./node_modules/music-metadata/lib/common/FourCC.js");
var SampleRates = [6000, 8000, 9600, 11025, 12000, 16000, 22050, 24000, 32000, 44100,
    48000, 64000, 88200, 96000, 192000, -1];
var WavPack = /** @class */ (function () {
    function WavPack() {
    }
    WavPack.isBitSet = function (flags, bitOffset) {
        return WavPack.getBitAllignedNumber(flags, bitOffset, 1) === 1;
    };
    WavPack.getBitAllignedNumber = function (flags, bitOffset, len) {
        return (flags >>> bitOffset) & (0xffffffff >>> (32 - len));
    };
    /**
     * WavPack Block Header
     *
     * 32-byte little-endian header at the front of every WavPack block
     *
     * Ref: http://www.wavpack.com/WavPack5FileFormat.pdf (page 2/6: 2.0 "Block Header")
     */
    WavPack.BlockHeaderToken = {
        len: 32,
        get: function (buf, off) {
            var flags = Token.UINT32_LE.get(buf, off + 24);
            return {
                // should equal 'wvpk'
                BlockID: FourCC_1.FourCcToken.get(buf, off),
                //  0x402 to 0x410 are valid for decode
                blockSize: Token.UINT32_LE.get(buf, off + 4),
                //  0x402 (1026) to 0x410 are valid for decode
                version: Token.UINT16_LE.get(buf, off + 8),
                //  40-bit total samples for entire file (if block_index == 0 and a value of -1 indicates an unknown length)
                totalSamples: (Token.UINT8.get(buf, off + 11) << 32) + Token.UINT32_LE.get(buf, off + 12),
                // 40-bit block_index
                blockIndex: (Token.UINT8.get(buf, off + 10) << 32) + Token.UINT32_LE.get(buf, off + 16),
                // 40-bit total samples for entire file (if block_index == 0 and a value of -1 indicates an unknown length)
                blockSamples: Token.UINT32_LE.get(buf, off + 20),
                // various flags for id and decoding
                flags: {
                    bitsPerSample: (1 + WavPack.getBitAllignedNumber(flags, 0, 2)) * 8,
                    isMono: WavPack.isBitSet(flags, 2),
                    isHybrid: WavPack.isBitSet(flags, 3),
                    isJointStereo: WavPack.isBitSet(flags, 4),
                    crossChannel: WavPack.isBitSet(flags, 5),
                    hybridNoiseShaping: WavPack.isBitSet(flags, 6),
                    floatingPoint: WavPack.isBitSet(flags, 7),
                    samplingRate: SampleRates[WavPack.getBitAllignedNumber(flags, 23, 4)],
                    isDSD: WavPack.isBitSet(flags, 31)
                },
                // crc for actual decoded data
                crc: new Token.BufferType(4).get(buf, off + 28)
            };
        }
    };
    /**
     * 3.0 Metadata Sub-Blocks
     *  Ref: http://www.wavpack.com/WavPack5FileFormat.pdf (page 4/6: 3.0 "Metadata Sub-Block")
     */
    WavPack.MetadataIdToken = {
        len: 1,
        get: function (buf, off) {
            return {
                functionId: WavPack.getBitAllignedNumber(buf[off], 0, 6),
                isOptional: WavPack.isBitSet(buf[off], 5),
                actualDataByteLength: WavPack.isBitSet(buf[off], 6),
                largeBlock: WavPack.isBitSet(buf[off], 7)
            };
        }
    };
    return WavPack;
}());
/**
 * WavPack Parser
 */
var WavPackParser = /** @class */ (function () {
    function WavPackParser() {
    }
    WavPackParser.prototype.parse = function (tokenizer, options) {
        var _this = this;
        this.tokenizer = tokenizer;
        this.options = options;
        // First parse all WavPack blocks
        return this.parseWavPackBlocks()
            .then(function () {
            // try to parse APEv2 header
            return APEv2Parser_1.APEv2Parser.parseFooter(tokenizer, options).then(function (tags) {
                return {
                    format: _this.format,
                    native: {
                        APEv2: tags
                    }
                };
            });
        });
    };
    WavPackParser.prototype.parseWavPackBlocks = function () {
        var _this = this;
        return this.tokenizer.peekToken(FourCC_1.FourCcToken).then(function (blockId) {
            if (blockId === 'wvpk') {
                return _this.tokenizer.readToken(WavPack.BlockHeaderToken)
                    .then(function (header) {
                    if (header.BlockID !== 'wvpk') {
                        throw new Error('Expected wvpk on beginning of file'); // ToDo: strip/parse JUNK
                    }
                    if (header.blockIndex === 0 && !_this.format) {
                        _this.format = {
                            dataformat: 'WavPack',
                            lossless: !header.flags.isHybrid,
                            // tagTypes: this.type,
                            bitsPerSample: header.flags.bitsPerSample,
                            sampleRate: header.flags.samplingRate,
                            numberOfChannels: header.flags.isMono ? 1 : 2,
                            duration: header.totalSamples / header.flags.samplingRate
                        };
                    }
                    var ignoreBytes = header.blockSize - (WavPack.BlockHeaderToken.len - 8);
                    if (header.blockIndex === 0 && header.blockSamples === 0) {
                        // Meta-data block
                        // console.log("End of WavPack");
                        return _this.parseMetadataSubBlock(ignoreBytes);
                    }
                    else {
                        // console.log('Ignore: %s bytes', ignoreBytes);
                        return _this.tokenizer.ignore(ignoreBytes);
                    }
                }).then(function () {
                    return _this.parseWavPackBlocks();
                });
            }
        });
    };
    WavPackParser.prototype.parseMetadataSubBlock = function (remainingLength) {
        var _this = this;
        return this.tokenizer.readToken(WavPack.MetadataIdToken).then(function (id) {
            return _this.tokenizer.readNumber(id.largeBlock ? Token.UINT24_LE : Token.UINT8).then(function (dataSizeInWords) {
                var metadataSize = 1 + dataSizeInWords * 2 + (id.largeBlock ? Token.UINT24_LE.len : Token.UINT8.len);
                if (metadataSize > remainingLength)
                    throw new Error('Metadata exceeding block size');
                var data = new Buffer(dataSizeInWords * 2);
                return _this.tokenizer.readBuffer(data, 0, data.length).then(function () {
                    switch (id.functionId) {
                        case 0x0:// ID_DUMMY could be used to pad WavPack blocks
                            break;
                        case 0x26:// ID_MD5_CHECKSUM
                            _this.format.audioMD5 = data;
                            break;
                        case 0x2F:// ID_BLOCK_CHECKSUM
                            break;
                    }
                    remainingLength -= metadataSize;
                    if (remainingLength > 1) {
                        return _this.parseMetadataSubBlock(remainingLength); // recursion, parse next metadata sub-block
                    }
                });
            });
        });
    };
    return WavPackParser;
}());
exports.WavPackParser = WavPackParser;


/***/ }),

/***/ "./node_modules/music-metadata/node_modules/debug/src/browser.js":
/*!***********************************************************************!*\
  !*** ./node_modules/music-metadata/node_modules/debug/src/browser.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/music-metadata/node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  '#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC',
  '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF',
  '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC',
  '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF',
  '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC',
  '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033',
  '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366',
  '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933',
  '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC',
  '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF',
  '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}


/***/ }),

/***/ "./node_modules/music-metadata/node_modules/debug/src/debug.js":
/*!*********************************************************************!*\
  !*** ./node_modules/music-metadata/node_modules/debug/src/debug.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "./node_modules/music-metadata/node_modules/ms/index.js");

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ "./node_modules/music-metadata/node_modules/debug/src/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/music-metadata/node_modules/debug/src/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Detect Electron renderer process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer') {
  module.exports = __webpack_require__(/*! ./browser.js */ "./node_modules/music-metadata/node_modules/debug/src/browser.js");
} else {
  module.exports = __webpack_require__(/*! ./node.js */ "./node_modules/music-metadata/node_modules/debug/src/node.js");
}


/***/ }),

/***/ "./node_modules/music-metadata/node_modules/debug/src/node.js":
/*!********************************************************************!*\
  !*** ./node_modules/music-metadata/node_modules/debug/src/node.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var tty = __webpack_require__(/*! tty */ "tty");
var util = __webpack_require__(/*! util */ "util");

/**
 * This is the Node.js implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/music-metadata/node_modules/debug/src/debug.js");
exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Colors.
 */

exports.colors = [ 6, 2, 3, 4, 5, 1 ];

try {
  var supportsColor = __webpack_require__(/*! supports-color */ "./node_modules/supports-color/index.js");
  if (supportsColor && supportsColor.level >= 2) {
    exports.colors = [
      20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68,
      69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134,
      135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171,
      172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204,
      205, 206, 207, 208, 209, 214, 215, 220, 221
    ];
  }
} catch (err) {
  // swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(function (key) {
  return /^debug_/i.test(key);
}).reduce(function (obj, key) {
  // camel-case
  var prop = key
    .substring(6)
    .toLowerCase()
    .replace(/_([a-z])/g, function (_, k) { return k.toUpperCase() });

  // coerce string value into JS value
  var val = process.env[key];
  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
  else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
  else if (val === 'null') val = null;
  else val = Number(val);

  obj[prop] = val;
  return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
  return 'colors' in exports.inspectOpts
    ? Boolean(exports.inspectOpts.colors)
    : tty.isatty(process.stderr.fd);
}

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

exports.formatters.o = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts)
    .split('\n').map(function(str) {
      return str.trim()
    }).join(' ');
};

/**
 * Map %o to `util.inspect()`, allowing multiple lines if needed.
 */

exports.formatters.O = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts);
};

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var name = this.namespace;
  var useColors = this.useColors;

  if (useColors) {
    var c = this.color;
    var colorCode = '\u001b[3' + (c < 8 ? c : '8;5;' + c);
    var prefix = '  ' + colorCode + ';1m' + name + ' ' + '\u001b[0m';

    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
    args.push(colorCode + 'm+' + exports.humanize(this.diff) + '\u001b[0m');
  } else {
    args[0] = getDate() + name + ' ' + args[0];
  }
}

function getDate() {
  if (exports.inspectOpts.hideDate) {
    return '';
  } else {
    return new Date().toISOString() + ' ';
  }
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log() {
  return process.stderr.write(util.format.apply(util, arguments) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  if (null == namespaces) {
    // If you set a process.env field to null or undefined, it gets cast to the
    // string 'null' or 'undefined'. Just delete instead.
    delete process.env.DEBUG;
  } else {
    process.env.DEBUG = namespaces;
  }
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init (debug) {
  debug.inspectOpts = {};

  var keys = Object.keys(exports.inspectOpts);
  for (var i = 0; i < keys.length; i++) {
    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
  }
}

/**
 * Enable namespaces listed in `process.env.DEBUG` initially.
 */

exports.enable(load());


/***/ }),

/***/ "./node_modules/music-metadata/node_modules/ms/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/music-metadata/node_modules/ms/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),

/***/ "./node_modules/p-limit/index.js":
/*!***************************************!*\
  !*** ./node_modules/p-limit/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const pTry = __webpack_require__(/*! p-try */ "./node_modules/p-try/index.js");

module.exports = concurrency => {
	if (concurrency < 1) {
		throw new TypeError('Expected `concurrency` to be a number from 1 and up');
	}

	const queue = [];
	let activeCount = 0;

	const next = () => {
		activeCount--;

		if (queue.length > 0) {
			queue.shift()();
		}
	};

	return fn => new Promise((resolve, reject) => {
		const run = () => {
			activeCount++;

			pTry(() => fn()).then(
				val => {
					resolve(val);
					next();
				},
				err => {
					reject(err);
					next();
				}
			);
		};

		if (activeCount < concurrency) {
			run();
		} else {
			queue.push(run);
		}
	});
};


/***/ }),

/***/ "./node_modules/p-locate/index.js":
/*!****************************************!*\
  !*** ./node_modules/p-locate/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const pLimit = __webpack_require__(/*! p-limit */ "./node_modules/p-limit/index.js");

class EndError extends Error {
	constructor(value) {
		super();
		this.value = value;
	}
}

// the input can also be a promise, so we `Promise.all()` them both
const finder = el => Promise.all(el).then(val => val[1] === true && Promise.reject(new EndError(val[0])));

module.exports = (iterable, tester, opts) => {
	opts = Object.assign({
		concurrency: Infinity,
		preserveOrder: true
	}, opts);

	const limit = pLimit(opts.concurrency);

	// start all the promises concurrently with optional limit
	const items = Array.from(iterable).map(el => [el, limit(() => Promise.resolve(el).then(tester))]);

	// check the promises either serially or concurrently
	const checkLimit = pLimit(opts.preserveOrder ? 1 : Infinity);

	return Promise.all(items.map(el => checkLimit(() => finder(el))))
		.then(() => {})
		.catch(err => err instanceof EndError ? err.value : Promise.reject(err));
};


/***/ }),

/***/ "./node_modules/p-try/index.js":
/*!*************************************!*\
  !*** ./node_modules/p-try/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = cb => new Promise(resolve => {
	resolve(cb());
});


/***/ }),

/***/ "./node_modules/pkg-up/index.js":
/*!**************************************!*\
  !*** ./node_modules/pkg-up/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const findUp = __webpack_require__(/*! find-up */ "./node_modules/pkg-up/node_modules/find-up/index.js");

module.exports = cwd => findUp('package.json', {cwd});
module.exports.sync = cwd => findUp.sync('package.json', {cwd});


/***/ }),

/***/ "./node_modules/pkg-up/node_modules/find-up/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/pkg-up/node_modules/find-up/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const path = __webpack_require__(/*! path */ "path");
const locatePath = __webpack_require__(/*! locate-path */ "./node_modules/locate-path/index.js");

module.exports = (filename, opts) => {
	opts = opts || {};

	const startDir = path.resolve(opts.cwd || '');
	const root = path.parse(startDir).root;

	const filenames = [].concat(filename);

	return new Promise(resolve => {
		(function find(dir) {
			locatePath(filenames, {cwd: dir}).then(file => {
				if (file) {
					resolve(path.join(dir, file));
				} else if (dir === root) {
					resolve(null);
				} else {
					find(path.dirname(dir));
				}
			});
		})(startDir);
	});
};

module.exports.sync = (filename, opts) => {
	opts = opts || {};

	let dir = path.resolve(opts.cwd || '');
	const root = path.parse(dir).root;

	const filenames = [].concat(filename);

	// eslint-disable-next-line no-constant-condition
	while (true) {
		const file = locatePath.sync(filenames, {cwd: dir});

		if (file) {
			return path.join(dir, file);
		} else if (dir === root) {
			return null;
		}

		dir = path.dirname(dir);
	}
};


/***/ }),

/***/ "./node_modules/signal-exit/index.js":
/*!*******************************************!*\
  !*** ./node_modules/signal-exit/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Note: since nyc uses this module to output coverage, any lines
// that are in the direct sync flow of nyc's outputCoverage are
// ignored, since we can never get coverage for them.
var assert = __webpack_require__(/*! assert */ "assert")
var signals = __webpack_require__(/*! ./signals.js */ "./node_modules/signal-exit/signals.js")

var EE = __webpack_require__(/*! events */ "events")
/* istanbul ignore if */
if (typeof EE !== 'function') {
  EE = EE.EventEmitter
}

var emitter
if (process.__signal_exit_emitter__) {
  emitter = process.__signal_exit_emitter__
} else {
  emitter = process.__signal_exit_emitter__ = new EE()
  emitter.count = 0
  emitter.emitted = {}
}

// Because this emitter is a global, we have to check to see if a
// previous version of this library failed to enable infinite listeners.
// I know what you're about to say.  But literally everything about
// signal-exit is a compromise with evil.  Get used to it.
if (!emitter.infinite) {
  emitter.setMaxListeners(Infinity)
  emitter.infinite = true
}

module.exports = function (cb, opts) {
  assert.equal(typeof cb, 'function', 'a callback must be provided for exit handler')

  if (loaded === false) {
    load()
  }

  var ev = 'exit'
  if (opts && opts.alwaysLast) {
    ev = 'afterexit'
  }

  var remove = function () {
    emitter.removeListener(ev, cb)
    if (emitter.listeners('exit').length === 0 &&
        emitter.listeners('afterexit').length === 0) {
      unload()
    }
  }
  emitter.on(ev, cb)

  return remove
}

module.exports.unload = unload
function unload () {
  if (!loaded) {
    return
  }
  loaded = false

  signals.forEach(function (sig) {
    try {
      process.removeListener(sig, sigListeners[sig])
    } catch (er) {}
  })
  process.emit = originalProcessEmit
  process.reallyExit = originalProcessReallyExit
  emitter.count -= 1
}

function emit (event, code, signal) {
  if (emitter.emitted[event]) {
    return
  }
  emitter.emitted[event] = true
  emitter.emit(event, code, signal)
}

// { <signal>: <listener fn>, ... }
var sigListeners = {}
signals.forEach(function (sig) {
  sigListeners[sig] = function listener () {
    // If there are no other listeners, an exit is coming!
    // Simplest way: remove us and then re-send the signal.
    // We know that this will kill the process, so we can
    // safely emit now.
    var listeners = process.listeners(sig)
    if (listeners.length === emitter.count) {
      unload()
      emit('exit', null, sig)
      /* istanbul ignore next */
      emit('afterexit', null, sig)
      /* istanbul ignore next */
      process.kill(process.pid, sig)
    }
  }
})

module.exports.signals = function () {
  return signals
}

module.exports.load = load

var loaded = false

function load () {
  if (loaded) {
    return
  }
  loaded = true

  // This is the number of onSignalExit's that are in play.
  // It's important so that we can count the correct number of
  // listeners on signals, and don't wait for the other one to
  // handle it instead of us.
  emitter.count += 1

  signals = signals.filter(function (sig) {
    try {
      process.on(sig, sigListeners[sig])
      return true
    } catch (er) {
      return false
    }
  })

  process.emit = processEmit
  process.reallyExit = processReallyExit
}

var originalProcessReallyExit = process.reallyExit
function processReallyExit (code) {
  process.exitCode = code || 0
  emit('exit', process.exitCode, null)
  /* istanbul ignore next */
  emit('afterexit', process.exitCode, null)
  /* istanbul ignore next */
  originalProcessReallyExit.call(process, process.exitCode)
}

var originalProcessEmit = process.emit
function processEmit (ev, arg) {
  if (ev === 'exit') {
    if (arg !== undefined) {
      process.exitCode = arg
    }
    var ret = originalProcessEmit.apply(this, arguments)
    emit('exit', process.exitCode, null)
    /* istanbul ignore next */
    emit('afterexit', process.exitCode, null)
    return ret
  } else {
    return originalProcessEmit.apply(this, arguments)
  }
}


/***/ }),

/***/ "./node_modules/signal-exit/signals.js":
/*!*********************************************!*\
  !*** ./node_modules/signal-exit/signals.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// This is not the set of all possible signals.
//
// It IS, however, the set of all signals that trigger
// an exit on either Linux or BSD systems.  Linux is a
// superset of the signal names supported on BSD, and
// the unknown signals just fail to register, so we can
// catch that easily enough.
//
// Don't bother with SIGKILL.  It's uncatchable, which
// means that we can't fire any callbacks anyway.
//
// If a user does happen to register a handler on a non-
// fatal signal like SIGWINCH or something, and then
// exit, it'll end up firing `process.emit('exit')`, so
// the handler will be fired anyway.
//
// SIGBUS, SIGFPE, SIGSEGV and SIGILL, when not raised
// artificially, inherently leave the process in a
// state from which it is not safe to try and enter JS
// listeners.
module.exports = [
  'SIGABRT',
  'SIGALRM',
  'SIGHUP',
  'SIGINT',
  'SIGTERM'
]

if (process.platform !== 'win32') {
  module.exports.push(
    'SIGVTALRM',
    'SIGXCPU',
    'SIGXFSZ',
    'SIGUSR2',
    'SIGTRAP',
    'SIGSYS',
    'SIGQUIT',
    'SIGIOT'
    // should detect profiler and enable/disable accordingly.
    // see #21
    // 'SIGPROF'
  )
}

if (process.platform === 'linux') {
  module.exports.push(
    'SIGIO',
    'SIGPOLL',
    'SIGPWR',
    'SIGSTKFLT',
    'SIGUNUSED'
  )
}


/***/ }),

/***/ "./node_modules/strtok3/lib/AbstractTokenizer.js":
/*!*******************************************************!*\
  !*** ./node_modules/strtok3/lib/AbstractTokenizer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(/*! ./ */ "./node_modules/strtok3/lib/index.js");
var AbstractTokenizer = /** @class */ (function () {
    function AbstractTokenizer() {
        this.position = 0;
        this.numBuffer = new Buffer(4);
    }
    AbstractTokenizer.prototype.readToken = function (token, position) {
        if (position === void 0) { position = null; }
        var buffer = new Buffer(token.len);
        return this.readBuffer(buffer, 0, token.len, position).then(function (len) {
            if (len < token.len)
                throw new Error(_1.endOfFile);
            return token.get(buffer, 0);
        });
    };
    AbstractTokenizer.prototype.peekToken = function (token, position) {
        if (position === void 0) { position = this.position; }
        var buffer = new Buffer(token.len);
        return this.peekBuffer(buffer, 0, token.len, position).then(function (len) {
            if (len < token.len)
                throw new Error(_1.endOfFile);
            return token.get(buffer, 0);
        });
    };
    AbstractTokenizer.prototype.readNumber = function (token) {
        var _this = this;
        return this.readBuffer(this.numBuffer, 0, token.len, null).then(function (len) {
            if (len < token.len)
                throw new Error(_1.endOfFile);
            return token.get(_this.numBuffer, 0);
        });
    };
    AbstractTokenizer.prototype.peekNumber = function (token) {
        var _this = this;
        return this.peekBuffer(this.numBuffer, 0, token.len).then(function (len) {
            if (len < token.len)
                throw new Error(_1.endOfFile);
            return token.get(_this.numBuffer, 0);
        });
    };
    return AbstractTokenizer;
}());
exports.AbstractTokenizer = AbstractTokenizer;


/***/ }),

/***/ "./node_modules/strtok3/lib/FileTokenizer.js":
/*!***************************************************!*\
  !*** ./node_modules/strtok3/lib/FileTokenizer.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractTokenizer_1 = __webpack_require__(/*! ./AbstractTokenizer */ "./node_modules/strtok3/lib/AbstractTokenizer.js");
var fs = __webpack_require__(/*! fs-extra */ "./node_modules/strtok3/node_modules/fs-extra/lib/index.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/strtok3/lib/index.js");
var es6_promise_1 = __webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js");
var FileTokenizer = /** @class */ (function (_super) {
    __extends(FileTokenizer, _super);
    function FileTokenizer(fd, fileSize) {
        var _this = _super.call(this) || this;
        _this.fd = fd;
        _this.fileSize = fileSize;
        return _this;
    }
    /**
     * Read buffer from file
     * @param buffer
     * @param offset is the offset in the buffer to start writing at; if not provided, start at 0
     * @param length is an integer specifying the number of bytes to read, of not provided the buffer length will be used
     * @param position is an integer specifying where to begin reading from in the file. If position is null, data will be read from the current file position.
     * @returns Promise number of bytes read
     */
    FileTokenizer.prototype.readBuffer = function (buffer, offset, length, position) {
        var _this = this;
        if (offset === void 0) { offset = 0; }
        if (length === void 0) { length = buffer.length; }
        if (position) {
            this.position = position;
        }
        if (!length) {
            length = buffer.length;
        }
        return fs.read(this.fd, buffer, offset, length, this.position).then(function (res) {
            if (res.bytesRead < length)
                throw new Error(_1.endOfFile);
            _this.position += res.bytesRead;
            // debug("Read:" + buffer.slice(offset, length).toString("hex"));
            return res.bytesRead;
        });
    };
    /**
     * Peek buffer from file
     * @param buffer
     * @param offset is the offset in the buffer to start writing at; if not provided, start at 0
     * @param length is an int
     * eger specifying the number of bytes to read, of not provided the buffer length will be used
     * @param position is an integer specifying where to begin reading from in the file. If position is null, data will be read from the current file position.
     * @returns Promise number of bytes read
     */
    FileTokenizer.prototype.peekBuffer = function (buffer, offset, length, position) {
        if (offset === void 0) { offset = 0; }
        if (length === void 0) { length = buffer.length; }
        if (position === void 0) { position = this.position; }
        return fs.read(this.fd, buffer, offset, length, position).then(function (res) {
            return res.bytesRead;
        });
    };
    /**
     * @param length Number of bytes to ignore
     */
    FileTokenizer.prototype.ignore = function (length) {
        var bytesLeft = this.fileSize - this.position;
        if (length <= bytesLeft) {
            this.position += length;
            return es6_promise_1.Promise.resolve(length);
        }
        else {
            this.position += bytesLeft;
            return es6_promise_1.Promise.resolve(bytesLeft);
        }
    };
    FileTokenizer.prototype.close = function () {
        return fs.close(this.fd);
    };
    return FileTokenizer;
}(AbstractTokenizer_1.AbstractTokenizer));
exports.FileTokenizer = FileTokenizer;


/***/ }),

/***/ "./node_modules/strtok3/lib/ReadStreamTokenizer.js":
/*!*********************************************************!*\
  !*** ./node_modules/strtok3/lib/ReadStreamTokenizer.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractTokenizer_1 = __webpack_require__(/*! ./AbstractTokenizer */ "./node_modules/strtok3/lib/AbstractTokenizer.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/strtok3/lib/index.js");
var then_read_stream_1 = __webpack_require__(/*! then-read-stream */ "./node_modules/then-read-stream/lib/index.js");
var ReadStreamTokenizer = /** @class */ (function (_super) {
    __extends(ReadStreamTokenizer, _super);
    function ReadStreamTokenizer(stream, fileSize) {
        var _this = _super.call(this) || this;
        _this.streamReader = new then_read_stream_1.StreamReader(stream);
        _this.fileSize = fileSize;
        return _this;
    }
    /**
     * Read buffer from stream
     * @param buffer
     * @param offset is the offset in the buffer to start writing at; if not provided, start at 0
     * @param length is an integer specifying the number of bytes to read
     * @returns Promise number of bytes read
     */
    ReadStreamTokenizer.prototype.readBuffer = function (buffer, offset, length) {
        var _this = this;
        if (offset === void 0) { offset = 0; }
        if (length === void 0) { length = buffer.length; }
        return this.streamReader.read(buffer, offset, length)
            .then(function (bytesRead) {
            _this.position += bytesRead;
            return bytesRead;
        })
            .catch(function (err) {
            if (err.message === then_read_stream_1.endOfStream)
                throw new Error(_1.endOfFile);
            else
                throw err;
        });
    };
    /**
     * Peek (read ahead) buffer from tokenizer
     * @param buffer
     * @param offset is the offset in the buffer to start writing at; if not provided, start at 0
     * @param length is an integer specifying the number of bytes to read
     * @param position is an integer specifying where to begin reading from in the file. If position is null, data will be read from the current file position.
     * @returns {Promise<TResult|number>}
     */
    ReadStreamTokenizer.prototype.peekBuffer = function (buffer, offset, length) {
        if (offset === void 0) { offset = 0; }
        if (length === void 0) { length = buffer.length; }
        return this.streamReader.peek(buffer, offset, length)
            .catch(function (err) {
            if (err.message === then_read_stream_1.endOfStream)
                throw new Error(_1.endOfFile);
            else
                throw err;
        });
    };
    ReadStreamTokenizer.prototype.ignore = function (length) {
        var buf = new Buffer(length);
        return this.readBuffer(buf); // Stream cannot skip data
    };
    return ReadStreamTokenizer;
}(AbstractTokenizer_1.AbstractTokenizer));
exports.ReadStreamTokenizer = ReadStreamTokenizer;


/***/ }),

/***/ "./node_modules/strtok3/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/strtok3/lib/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReadStreamTokenizer_1 = __webpack_require__(/*! ./ReadStreamTokenizer */ "./node_modules/strtok3/lib/ReadStreamTokenizer.js");
var FileTokenizer_1 = __webpack_require__(/*! ./FileTokenizer */ "./node_modules/strtok3/lib/FileTokenizer.js");
var fs = __webpack_require__(/*! fs-extra */ "./node_modules/strtok3/node_modules/fs-extra/lib/index.js");
var es6_promise_1 = __webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js");
/**
 * Used to reject read if end-of-Stream or end-of-file is reached
 * @type {Error}
 */
exports.endOfFile = "End-Of-File";
var IgnoreType = /** @class */ (function () {
    /**
     * @param len Number of bytes to ignore (skip)
     */
    function IgnoreType(len) {
        this.len = len;
    }
    // ToDo: don't read,, but skip data
    IgnoreType.prototype.get = function (buf, off) {
        return buf.slice(off, off + this.len);
    };
    return IgnoreType;
}());
exports.IgnoreType = IgnoreType;
/**
 * Construct ReadStreamTokenizer from given Stream.
 * Will set fileSize, if provided given Stream has set the .path property/
 * @param stream Stream.Readable
 * @returns {Promise<ReadStreamTokenizer>}
 */
function fromStream(stream) {
    if (stream.path) {
        return fs.stat(stream.path).then(function (stat) {
            return new ReadStreamTokenizer_1.ReadStreamTokenizer(stream, stat.size);
        });
    }
    return es6_promise_1.Promise.resolve(new ReadStreamTokenizer_1.ReadStreamTokenizer(stream));
}
exports.fromStream = fromStream;
/**
 * Construct ReadStreamTokenizer from given file path.
 * @param filePath
 * @returns {Promise<FileTokenizer>}
 */
function fromFile(filePath) {
    return fs.pathExists(filePath).then(function (exist) {
        if (!exist) {
            throw new Error("File not found: " + filePath);
        }
        return fs.stat(filePath).then(function (stat) {
            return fs.open(filePath, "r").then(function (fd) {
                return new FileTokenizer_1.FileTokenizer(fd, stat.size);
            });
        });
    });
}
exports.fromFile = fromFile;


/***/ }),

/***/ "./node_modules/strtok3/node_modules/fs-extra/lib/copy-sync/copy-sync.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/strtok3/node_modules/fs-extra/lib/copy-sync/copy-sync.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js")
const path = __webpack_require__(/*! path */ "path")
const mkdirpSync = __webpack_require__(/*! ../mkdirs */ "./node_modules/strtok3/node_modules/fs-extra/lib/mkdirs/index.js").mkdirsSync
const utimesSync = __webpack_require__(/*! ../util/utimes.js */ "./node_modules/strtok3/node_modules/fs-extra/lib/util/utimes.js").utimesMillisSync

const notExist = Symbol('notExist')
const existsReg = Symbol('existsReg')

function copySync (src, dest, opts) {
  if (typeof opts === 'function') {
    opts = {filter: opts}
  }

  opts = opts || {}
  opts.clobber = 'clobber' in opts ? !!opts.clobber : true // default to true for now
  opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber // overwrite falls back to clobber

  // Warn about using preserveTimestamps on 32-bit node
  if (opts.preserveTimestamps && process.arch === 'ia32') {
    console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n
    see https://github.com/jprichardson/node-fs-extra/issues/269`)
  }

  src = path.resolve(src)
  dest = path.resolve(dest)

  // don't allow src and dest to be the same
  if (src === dest) throw new Error('Source and destination must not be the same.')

  if (opts.filter && !opts.filter(src, dest)) return

  const destParent = path.dirname(dest)
  if (!fs.existsSync(destParent)) mkdirpSync(destParent)
  return startCopy(src, dest, opts)
}

function startCopy (src, dest, opts) {
  if (opts.filter && !opts.filter(src, dest)) return
  return getStats(src, dest, opts)
}

function getStats (src, dest, opts) {
  const statSync = opts.dereference ? fs.statSync : fs.lstatSync
  const st = statSync(src)

  if (st.isDirectory()) return onDir(st, src, dest, opts)
  else if (st.isFile() ||
           st.isCharacterDevice() ||
           st.isBlockDevice()) return onFile(st, src, dest, opts)
  else if (st.isSymbolicLink()) return onLink(src, dest, opts)
}

function onFile (srcStat, src, dest, opts) {
  const resolvedPath = checkDest(dest)
  if (resolvedPath === notExist) {
    return copyFile(srcStat, src, dest, opts)
  } else if (resolvedPath === existsReg) {
    return mayCopyFile(srcStat, src, dest, opts)
  } else {
    if (src === resolvedPath) return
    return mayCopyFile(srcStat, src, dest, opts)
  }
}

function mayCopyFile (srcStat, src, dest, opts) {
  if (opts.overwrite) {
    fs.unlinkSync(dest)
    return copyFile(srcStat, src, dest, opts)
  } else if (opts.errorOnExist) {
    throw new Error(`'${dest}' already exists`)
  }
}

function copyFile (srcStat, src, dest, opts) {
  if (typeof fs.copyFileSync === 'function') {
    fs.copyFileSync(src, dest)
    fs.chmodSync(dest, srcStat.mode)
    if (opts.preserveTimestamps) {
      return utimesSync(dest, srcStat.atime, srcStat.mtime)
    }
    return
  }
  return copyFileFallback(srcStat, src, dest, opts)
}

function copyFileFallback (srcStat, src, dest, opts) {
  const BUF_LENGTH = 64 * 1024
  const _buff = __webpack_require__(/*! ../util/buffer */ "./node_modules/strtok3/node_modules/fs-extra/lib/util/buffer.js")(BUF_LENGTH)

  const fdr = fs.openSync(src, 'r')
  const fdw = fs.openSync(dest, 'w', srcStat.mode)
  let bytesRead = 1
  let pos = 0

  while (bytesRead > 0) {
    bytesRead = fs.readSync(fdr, _buff, 0, BUF_LENGTH, pos)
    fs.writeSync(fdw, _buff, 0, bytesRead)
    pos += bytesRead
  }

  if (opts.preserveTimestamps) fs.futimesSync(fdw, srcStat.atime, srcStat.mtime)

  fs.closeSync(fdr)
  fs.closeSync(fdw)
}

function onDir (srcStat, src, dest, opts) {
  const resolvedPath = checkDest(dest)
  if (resolvedPath === notExist) {
    if (isSrcSubdir(src, dest)) {
      throw new Error(`Cannot copy '${src}' to a subdirectory of itself, '${dest}'.`)
    }
    return mkDirAndCopy(srcStat, src, dest, opts)
  } else if (resolvedPath === existsReg) {
    if (isSrcSubdir(src, dest)) {
      throw new Error(`Cannot copy '${src}' to a subdirectory of itself, '${dest}'.`)
    }
    return mayCopyDir(src, dest, opts)
  } else {
    if (src === resolvedPath) return
    return copyDir(src, dest, opts)
  }
}

function mayCopyDir (src, dest, opts) {
  if (!fs.statSync(dest).isDirectory()) {
    throw new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`)
  }
  return copyDir(src, dest, opts)
}

function mkDirAndCopy (srcStat, src, dest, opts) {
  fs.mkdirSync(dest, srcStat.mode)
  fs.chmodSync(dest, srcStat.mode)
  return copyDir(src, dest, opts)
}

function copyDir (src, dest, opts) {
  fs.readdirSync(src).forEach(item => {
    startCopy(path.join(src, item), path.join(dest, item), opts)
  })
}

function onLink (src, dest, opts) {
  let resolvedSrcPath = fs.readlinkSync(src)

  if (opts.dereference) {
    resolvedSrcPath = path.resolve(process.cwd(), resolvedSrcPath)
  }

  let resolvedDestPath = checkDest(dest)
  if (resolvedDestPath === notExist || resolvedDestPath === existsReg) {
    // if dest already exists, fs throws error anyway,
    // so no need to guard against it here.
    return fs.symlinkSync(resolvedSrcPath, dest)
  } else {
    if (opts.dereference) {
      resolvedDestPath = path.resolve(process.cwd(), resolvedDestPath)
    }
    if (resolvedDestPath === resolvedSrcPath) return

    // prevent copy if src is a subdir of dest since unlinking
    // dest in this case would result in removing src contents
    // and therefore a broken symlink would be created.
    if (fs.statSync(dest).isDirectory() && isSrcSubdir(resolvedDestPath, resolvedSrcPath)) {
      throw new Error(`Cannot overwrite '${resolvedDestPath}' with '${resolvedSrcPath}'.`)
    }
    return copyLink(resolvedSrcPath, dest)
  }
}

function copyLink (resolvedSrcPath, dest) {
  fs.unlinkSync(dest)
  return fs.symlinkSync(resolvedSrcPath, dest)
}

// check if dest exists and/or is a symlink
function checkDest (dest) {
  let resolvedPath
  try {
    resolvedPath = fs.readlinkSync(dest)
  } catch (err) {
    if (err.code === 'ENOENT') return notExist

    // dest exists and is a regular file or directory, Windows may throw UNKNOWN error
    if (err.code === 'EINVAL' || err.code === 'UNKNOWN') return existsReg

    throw err
  }
  return resolvedPath // dest exists and is a symlink
}

// return true if dest is a subdir of src, otherwise false.
// extract dest base dir and check if that is the same as src basename
function isSrcSubdir (src, dest) {
  const baseDir = dest.split(path.dirname(src) + path.sep)[1]
  if (baseDir) {
    const destBasename = baseDir.split(path.sep)[0]
    if (destBasename) {
      return src !== dest && dest.indexOf(src) > -1 && destBasename === path.basename(src)
    }
    return false
  }
  return false
}

module.exports = copySync


/***/ }),

/***/ "./node_modules/strtok3/node_modules/fs-extra/lib/copy-sync/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/strtok3/node_modules/fs-extra/lib/copy-sync/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  copySync: __webpack_require__(/*! ./copy-sync */ "./node_modules/strtok3/node_modules/fs-extra/lib/copy-sync/copy-sync.js")
}


/***/ }),

/***/ "./node_modules/strtok3/node_modules/fs-extra/lib/copy/copy.js":
/*!*********************************************************************!*\
  !*** ./node_modules/strtok3/node_modules/fs-extra/lib/copy/copy.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js")
const path = __webpack_require__(/*! path */ "path")
const mkdirp = __webpack_require__(/*! ../mkdirs */ "./node_modules/strtok3/node_modules/fs-extra/lib/mkdirs/index.js").mkdirs
const pathExists = __webpack_require__(/*! ../path-exists */ "./node_modules/strtok3/node_modules/fs-extra/lib/path-exists/index.js").pathExists
const utimes = __webpack_require__(/*! ../util/utimes */ "./node_modules/strtok3/node_modules/fs-extra/lib/util/utimes.js").utimesMillis

const notExist = Symbol('notExist')
const existsReg = Symbol('existsReg')

function copy (src, dest, opts, cb) {
  if (typeof opts === 'function' && !cb) {
    cb = opts
    opts = {}
  } else if (typeof opts === 'function') {
    opts = {filter: opts}
  }

  cb = cb || function () {}
  opts = opts || {}

  opts.clobber = 'clobber' in opts ? !!opts.clobber : true // default to true for now
  opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber // overwrite falls back to clobber

  // Warn about using preserveTimestamps on 32-bit node
  if (opts.preserveTimestamps && process.arch === 'ia32') {
    console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n
    see https://github.com/jprichardson/node-fs-extra/issues/269`)
  }

  src = path.resolve(src)
  dest = path.resolve(dest)

  // don't allow src and dest to be the same
  if (src === dest) return cb(new Error('Source and destination must not be the same.'))

  if (opts.filter) return handleFilter(checkParentDir, src, dest, opts, cb)
  return checkParentDir(src, dest, opts, cb)
}

function checkParentDir (src, dest, opts, cb) {
  const destParent = path.dirname(dest)
  pathExists(destParent, (err, dirExists) => {
    if (err) return cb(err)
    if (dirExists) return startCopy(src, dest, opts, cb)
    mkdirp(destParent, err => {
      if (err) return cb(err)
      return startCopy(src, dest, opts, cb)
    })
  })
}

function startCopy (src, dest, opts, cb) {
  if (opts.filter) return handleFilter(getStats, src, dest, opts, cb)
  return getStats(src, dest, opts, cb)
}

function handleFilter (onInclude, src, dest, opts, cb) {
  Promise.resolve(opts.filter(src, dest))
    .then(include => {
      if (include) return onInclude(src, dest, opts, cb)
      return cb()
    }, error => cb(error))
}

function getStats (src, dest, opts, cb) {
  const stat = opts.dereference ? fs.stat : fs.lstat
  stat(src, (err, st) => {
    if (err) return cb(err)

    if (st.isDirectory()) return onDir(st, src, dest, opts, cb)
    else if (st.isFile() ||
             st.isCharacterDevice() ||
             st.isBlockDevice()) return onFile(st, src, dest, opts, cb)
    else if (st.isSymbolicLink()) return onLink(src, dest, opts, cb)
  })
}

function onFile (srcStat, src, dest, opts, cb) {
  checkDest(dest, (err, resolvedPath) => {
    if (err) return cb(err)
    if (resolvedPath === notExist) {
      return copyFile(srcStat, src, dest, opts, cb)
    } else if (resolvedPath === existsReg) {
      return mayCopyFile(srcStat, src, dest, opts, cb)
    } else {
      if (src === resolvedPath) return cb()
      return mayCopyFile(srcStat, src, dest, opts, cb)
    }
  })
}

function mayCopyFile (srcStat, src, dest, opts, cb) {
  if (opts.overwrite) {
    fs.unlink(dest, err => {
      if (err) return cb(err)
      return copyFile(srcStat, src, dest, opts, cb)
    })
  } else if (opts.errorOnExist) {
    return cb(new Error(`'${dest}' already exists`))
  } else return cb()
}

function copyFile (srcStat, src, dest, opts, cb) {
  if (typeof fs.copyFile === 'function') {
    return fs.copyFile(src, dest, err => {
      if (err) return cb(err)
      return setDestModeAndTimestamps(srcStat, dest, opts, cb)
    })
  }
  return copyFileFallback(srcStat, src, dest, opts, cb)
}

function copyFileFallback (srcStat, src, dest, opts, cb) {
  const rs = fs.createReadStream(src)
  rs.on('error', err => cb(err))
    .once('open', () => {
      const ws = fs.createWriteStream(dest, { mode: srcStat.mode })
      ws.on('error', err => cb(err))
        .on('open', () => rs.pipe(ws))
        .once('close', () => setDestModeAndTimestamps(srcStat, dest, opts, cb))
    })
}

function setDestModeAndTimestamps (srcStat, dest, opts, cb) {
  fs.chmod(dest, srcStat.mode, err => {
    if (err) return cb(err)
    if (opts.preserveTimestamps) {
      return utimes(dest, srcStat.atime, srcStat.mtime, cb)
    }
    return cb()
  })
}

function onDir (srcStat, src, dest, opts, cb) {
  checkDest(dest, (err, resolvedPath) => {
    if (err) return cb(err)
    if (resolvedPath === notExist) {
      if (isSrcSubdir(src, dest)) {
        return cb(new Error(`Cannot copy '${src}' to a subdirectory of itself, '${dest}'.`))
      }
      return mkDirAndCopy(srcStat, src, dest, opts, cb)
    } else if (resolvedPath === existsReg) {
      if (isSrcSubdir(src, dest)) {
        return cb(new Error(`Cannot copy '${src}' to a subdirectory of itself, '${dest}'.`))
      }
      return mayCopyDir(src, dest, opts, cb)
    } else {
      if (src === resolvedPath) return cb()
      return copyDir(src, dest, opts, cb)
    }
  })
}

function mayCopyDir (src, dest, opts, cb) {
  fs.stat(dest, (err, st) => {
    if (err) return cb(err)
    if (!st.isDirectory()) {
      return cb(new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`))
    }
    return copyDir(src, dest, opts, cb)
  })
}

function mkDirAndCopy (srcStat, src, dest, opts, cb) {
  fs.mkdir(dest, srcStat.mode, err => {
    if (err) return cb(err)
    fs.chmod(dest, srcStat.mode, err => {
      if (err) return cb(err)
      return copyDir(src, dest, opts, cb)
    })
  })
}

function copyDir (src, dest, opts, cb) {
  fs.readdir(src, (err, items) => {
    if (err) return cb(err)
    return copyDirItems(items, src, dest, opts, cb)
  })
}

function copyDirItems (items, src, dest, opts, cb) {
  const item = items.pop()
  if (!item) return cb()
  startCopy(path.join(src, item), path.join(dest, item), opts, err => {
    if (err) return cb(err)
    return copyDirItems(items, src, dest, opts, cb)
  })
}

function onLink (src, dest, opts, cb) {
  fs.readlink(src, (err, resolvedSrcPath) => {
    if (err) return cb(err)

    if (opts.dereference) {
      resolvedSrcPath = path.resolve(process.cwd(), resolvedSrcPath)
    }

    checkDest(dest, (err, resolvedDestPath) => {
      if (err) return cb(err)

      if (resolvedDestPath === notExist || resolvedDestPath === existsReg) {
        // if dest already exists, fs throws error anyway,
        // so no need to guard against it here.
        return fs.symlink(resolvedSrcPath, dest, cb)
      } else {
        if (opts.dereference) {
          resolvedDestPath = path.resolve(process.cwd(), resolvedDestPath)
        }
        if (resolvedDestPath === resolvedSrcPath) return cb()

        // prevent copy if src is a subdir of dest since unlinking
        // dest in this case would result in removing src contents
        // and therefore a broken symlink would be created.
        fs.stat(dest, (err, st) => {
          if (err) return cb(err)
          if (st.isDirectory() && isSrcSubdir(resolvedDestPath, resolvedSrcPath)) {
            return cb(new Error(`Cannot overwrite '${resolvedDestPath}' with '${resolvedSrcPath}'.`))
          }
          return copyLink(resolvedSrcPath, dest, cb)
        })
      }
    })
  })
}

function copyLink (resolvedSrcPath, dest, cb) {
  fs.unlink(dest, err => {
    if (err) return cb(err)
    return fs.symlink(resolvedSrcPath, dest, cb)
  })
}

// check if dest exists and/or is a symlink
function checkDest (dest, cb) {
  fs.readlink(dest, (err, resolvedPath) => {
    if (err) {
      if (err.code === 'ENOENT') return cb(null, notExist)

      // dest exists and is a regular file or directory, Windows may throw UNKNOWN error.
      if (err.code === 'EINVAL' || err.code === 'UNKNOWN') return cb(null, existsReg)

      return cb(err)
    }
    return cb(null, resolvedPath) // dest exists and is a symlink
  })
}

// return true if dest is a subdir of src, otherwise false.
// extract dest base dir and check if that is the same as src basename
function isSrcSubdir (src, dest) {
  const baseDir = dest.split(path.dirname(src) + path.sep)[1]
  if (baseDir) {
    const destBasename = baseDir.split(path.sep)[0]
    if (destBasename) {
      return src !== dest && dest.indexOf(src) > -1 && destBasename === path.basename(src)
    }
    return false
  }
  return false
}

module.exports = copy


/***/ }),

/***/ "./node_modules/strtok3/node_modules/fs-extra/lib/copy/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/strtok3/node_modules/fs-extra/lib/copy/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const u = __webpack_require__(/*! universalify */ "./node_modules/universalify/index.js").fromCallback
module.exports = {
  copy: u(__webpack_require__(/*! ./copy */ "./node_modules/strtok3/node_modules/fs-extra/lib/copy/copy.js"))
}


/***/ }),

/***/ "./node_modules/strtok3/node_modules/fs-extra/lib/empty/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/strtok3/node_modules/fs-extra/lib/empty/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(/*! universalify */ "./node_modules/universalify/index.js").fromCallback
const fs = __webpack_require__(/*! fs */ "fs")
const path = __webpack_require__(/*! path */ "path")
const mkdir = __webpack_require__(/*! ../mkdirs */ "./node_modules/strtok3/node_modules/fs-extra/lib/mkdirs/index.js")
const remove = __webpack_require__(/*! ../remove */ "./node_modules/strtok3/node_modules/fs-extra/lib/remove/index.js")

const emptyDir = u(function emptyDir (dir, callback) {
  callback = callback || function () {}
  fs.readdir(dir, (err, items) => {
    if (err) return mkdir.mkdirs(dir, callback)

    items = items.map(item => path.join(dir, item))

    deleteItem()

    function deleteItem () {
      const item = items.pop()
      if (!item) return callback()
      remove.remove(item, err => {
        if (err) return callback(err)
        deleteItem()
      })
    }
  })
})

function emptyDirSync (dir) {
  let items
  try {
    items = fs.readdirSync(dir)
  } catch (err) {
    return mkdir.mkdirsSync(dir)
  }

  items.forEach(item => {
    item = path.join(dir, item)
    remove.removeSync(item)
  })
}

module.exports = {
  emptyDirSync,
  emptydirSync: emptyDirSync,
  emptyDir,
  emptydir: emptyDir
}


/***/ }),

/***/ "./node_modules/strtok3/node_modules/fs-extra/lib/ensure/file.js":
/*!***********************************************************************!*\
  !*** ./node_modules/strtok3/node_modules/fs-extra/lib/ensure/file.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(/*! universalify */ "./node_modules/universalify/index.js").fromCallback
const path = __webpack_require__(/*! path */ "path")
const fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js")
const mkdir = __webpack_require__(/*! ../mkdirs */ "./node_modules/strtok3/node_modules/fs-extra/lib/mkdirs/index.js")
const pathExists = __webpack_require__(/*! ../path-exists */ "./node_modules/strtok3/node_modules/fs-extra/lib/path-exists/index.js").pathExists

function createFile (file, callback) {
  function makeFile () {
    fs.writeFile(file, '', err => {
      if (err) return callback(err)
      callback()
    })
  }

  fs.stat(file, (err, stats) => { // eslint-disable-line handle-callback-err
    if (!err && stats.isFile()) return callback()
    const dir = path.dirname(file)
    pathExists(dir, (err, dirExists) => {
      if (err) return callback(err)
      if (dirExists) return makeFile()
      mkdir.mkdirs(dir, err => {
        if (err) return callback(err)
        makeFile()
      })
    })
  })
}

function createFileSync (file) {
  let stats
  try {
    stats = fs.statSync(file)
  } catch (e) {}
  if (stats && stats.isFile()) return

  const dir = path.dirname(file)
  if (!fs.existsSync(dir)) {
    mkdir.mkdirsSync(dir)
  }

  fs.writeFileSync(file, '')
}

module.exports = {
  createFile: u(createFile),
  createFileSync
}


/***/ }),

/***/ "./node_modules/strtok3/node_modules/fs-extra/lib/ensure/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/strtok3/node_modules/fs-extra/lib/ensure/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const file = __webpack_require__(/*! ./file */ "./node_modules/strtok3/node_modules/fs-extra/lib/ensure/file.js")
const link = __webpack_require__(/*! ./link */ "./node_modules/strtok3/node_modules/fs-extra/lib/ensure/link.js")
const symlink = __webpack_require__(/*! ./symlink */ "./node_modules/strtok3/node_modules/fs-extra/lib/ensure/symlink.js")

module.exports = {
  // file
  createFile: file.createFile,
  createFileSync: file.createFileSync,
  ensureFile: file.createFile,
  ensureFileSync: file.createFileSync,
  // link
  createLink: link.createLink,
  createLinkSync: link.createLinkSync,
  ensureLink: link.createLink,
  ensureLinkSync: link.createLinkSync,
  // symlink
  createSymlink: symlink.createSymlink,
  createSymlinkSync: symlink.createSymlinkSync,
  ensureSymlink: symlink.createSymlink,
  ensureSymlinkSync: symlink.createSymlinkSync
}


/***/ }),

/***/ "./node_modules/strtok3/node_modules/fs-extra/lib/ensure/link.js":
/*!***********************************************************************!*\
  !*** ./node_modules/strtok3/node_modules/fs-extra/lib/ensure/link.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(/*! universalify */ "./node_modules/universalify/index.js").fromCallback
const path = __webpack_require__(/*! path */ "path")
const fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js")
const mkdir = __webpack_require__(/*! ../mkdirs */ "./node_modules/strtok3/node_modules/fs-extra/lib/mkdirs/index.js")
const pathExists = __webpack_require__(/*! ../path-exists */ "./node_modules/strtok3/node_modules/fs-extra/lib/path-exists/index.js").pathExists

function createLink (srcpath, dstpath, callback) {
  function makeLink (srcpath, dstpath) {
    fs.link(srcpath, dstpath, err => {
      if (err) return callback(err)
      callback(null)
    })
  }

  pathExists(dstpath, (err, destinationExists) => {
    if (err) return callback(err)
    if (destinationExists) return callback(null)
    fs.lstat(srcpath, (err, stat) => {
      if (err) {
        err.message = err.message.replace('lstat', 'ensureLink')
        return callback(err)
      }

      const dir = path.dirname(dstpath)
      pathExists(dir, (err, dirExists) => {
        if (err) return callback(err)
        if (dirExists) return makeLink(srcpath, dstpath)
        mkdir.mkdirs(dir, err => {
          if (err) return callback(err)
          makeLink(srcpath, dstpath)
        })
      })
    })
  })
}

function createLinkSync (srcpath, dstpath, callback) {
  const destinationExists = fs.existsSync(dstpath)
  if (destinationExists) return undefined

  try {
    fs.lstatSync(srcpath)
  } catch (err) {
    err.message = err.message.replace('lstat', 'ensureLink')
    throw err
  }

  const dir = path.dirname(dstpath)
  const dirExists = fs.existsSync(dir)
  if (dirExists) return fs.linkSync(srcpath, dstpath)
  mkdir.mkdirsSync(dir)

  return fs.linkSync(srcpath, dstpath)
}

module.exports = {
  createLink: u(createLink),
  createLinkSync
}


/***/ }),

/***/ "./node_modules/strtok3/node_modules/fs-extra/lib/ensure/symlink-paths.js":
/*!********************************************************************************!*\
  !*** ./node_modules/strtok3/node_modules/fs-extra/lib/ensure/symlink-paths.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const path = __webpack_require__(/*! path */ "path")
const fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js")
const pathExists = __webpack_require__(/*! ../path-exists */ "./node_modules/strtok3/node_modules/fs-extra/lib/path-exists/index.js").pathExists

/**
 * Function that returns two types of paths, one relative to symlink, and one
 * relative to the current working directory. Checks if path is absolute or
 * relative. If the path is relative, this function checks if the path is
 * relative to symlink or relative to current working directory. This is an
 * initiative to find a smarter `srcpath` to supply when building symlinks.
 * This allows you to determine which path to use out of one of three possible
 * types of source paths. The first is an absolute path. This is detected by
 * `path.isAbsolute()`. When an absolute path is provided, it is checked to
 * see if it exists. If it does it's used, if not an error is returned
 * (callback)/ thrown (sync). The other two options for `srcpath` are a
 * relative url. By default Node's `fs.symlink` works by creating a symlink
 * using `dstpath` and expects the `srcpath` to be relative to the newly
 * created symlink. If you provide a `srcpath` that does not exist on the file
 * system it results in a broken symlink. To minimize this, the function
 * checks to see if the 'relative to symlink' source file exists, and if it
 * does it will use it. If it does not, it checks if there's a file that
 * exists that is relative to the current working directory, if does its used.
 * This preserves the expectations of the original fs.symlink spec and adds
 * the ability to pass in `relative to current working direcotry` paths.
 */

function symlinkPaths (srcpath, dstpath, callback) {
  if (path.isAbsolute(srcpath)) {
    return fs.lstat(srcpath, (err, stat) => {
      if (err) {
        err.message = err.message.replace('lstat', 'ensureSymlink')
        return callback(err)
      }
      return callback(null, {
        'toCwd': srcpath,
        'toDst': srcpath
      })
    })
  } else {
    const dstdir = path.dirname(dstpath)
    const relativeToDst = path.join(dstdir, srcpath)
    return pathExists(relativeToDst, (err, exists) => {
      if (err) return callback(err)
      if (exists) {
        return callback(null, {
          'toCwd': relativeToDst,
          'toDst': srcpath
        })
      } else {
        return fs.lstat(srcpath, (err, stat) => {
          if (err) {
            err.message = err.message.replace('lstat', 'ensureSymlink')
            return callback(err)
          }
          return callback(null, {
            'toCwd': srcpath,
            'toDst': path.relative(dstdir, srcpath)
          })
        })
      }
    })
  }
}

function symlinkPathsSync (srcpath, dstpath) {
  let exists
  if (path.isAbsolute(srcpath)) {
    exists = fs.existsSync(srcpath)
    if (!exists) throw new Error('absolute srcpath does not exist')
    return {
      'toCwd': srcpath,
      'toDst': srcpath
    }
  } else {
    const dstdir = path.dirname(dstpath)
    const relativeToDst = path.join(dstdir, srcpath)
    exists = fs.existsSync(relativeToDst)
    if (exists) {
      return {
        'toCwd': relativeToDst,
        'toDst': srcpath
      }
    } else {
      exists = fs.existsSync(srcpath)
      if (!exists) throw new Error('relative srcpath does not exist')
      return {
        'toCwd': srcpath,
        'toDst': path.relative(dstdir, srcpath)
      }
    }
  }
}

module.exports = {
  symlinkPaths,
  symlinkPathsSync
}


/***/ }),

/***/ "./node_modules/strtok3/node_modules/fs-extra/lib/ensure/symlink-type.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/strtok3/node_modules/fs-extra/lib/ensure/symlink-type.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js")

function symlinkType (srcpath, type, callback) {
  callback = (typeof type === 'function') ? type : callback
  type = (typeof type === 'function') ? false : type
  if (type) return callback(null, type)
  fs.lstat(srcpath, (err, stats) => {
    if (err) return callback(null, 'file')
    type = (stats && stats.isDirectory()) ? 'dir' : 'file'
    callback(null, type)
  })
}

function symlinkTypeSync (srcpath, type) {
  let stats

  if (type) return type
  try {
    stats = fs.lstatSync(srcpath)
  } catch (e) {
    return 'file'
  }
  return (stats && stats.isDirectory()) ? 'dir' : 'file'
}

module.exports = {
  symlinkType,
  symlinkTypeSync
}


/***/ }),

/***/ "./node_modules/strtok3/node_modules/fs-extra/lib/ensure/symlink.js":
/*!**************************************************************************!*\
  !*** ./node_modules/strtok3/node_modules/fs-extra/lib/ensure/symlink.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(/*! universalify */ "./node_modules/universalify/index.js").fromCallback
const path = __webpack_require__(/*! path */ "path")
const fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js")
const _mkdirs = __webpack_require__(/*! ../mkdirs */ "./node_modules/strtok3/node_modules/fs-extra/lib/mkdirs/index.js")
const mkdirs = _mkdirs.mkdirs
const mkdirsSync = _mkdirs.mkdirsSync

const _symlinkPaths = __webpack_require__(/*! ./symlink-paths */ "./node_modules/strtok3/node_modules/fs-extra/lib/ensure/symlink-paths.js")
const symlinkPaths = _symlinkPaths.symlinkPaths
const symlinkPathsSync = _symlinkPaths.symlinkPathsSync

const _symlinkType = __webpack_require__(/*! ./symlink-type */ "./node_modules/strtok3/node_modules/fs-extra/lib/ensure/symlink-type.js")
const symlinkType = _symlinkType.symlinkType
const symlinkTypeSync = _symlinkType.symlinkTypeSync

const pathExists = __webpack_require__(/*! ../path-exists */ "./node_modules/strtok3/node_modules/fs-extra/lib/path-exists/index.js").pathExists

function createSymlink (srcpath, dstpath, type, callback) {
  callback = (typeof type === 'function') ? type : callback
  type = (typeof type === 'function') ? false : type

  pathExists(dstpath, (err, destinationExists) => {
    if (err) return callback(err)
    if (destinationExists) return callback(null)
    symlinkPaths(srcpath, dstpath, (err, relative) => {
      if (err) return callback(err)
      srcpath = relative.toDst
      symlinkType(relative.toCwd, type, (err, type) => {
        if (err) return callback(err)
        const dir = path.dirname(dstpath)
        pathExists(dir, (err, dirExists) => {
          if (err) return callback(err)
          if (dirExists) return fs.symlink(srcpath, dstpath, type, callback)
          mkdirs(dir, err => {
            if (err) return callback(err)
            fs.symlink(srcpath, dstpath, type, callback)
          })
        })
      })
    })
  })
}

function createSymlinkSync (srcpath, dstpath, type, callback) {
  callback = (typeof type === 'function') ? type : callback
  type = (typeof type === 'function') ? false : type

  const destinationExists = fs.existsSync(dstpath)
  if (destinationExists) return undefined

  const relative = symlinkPathsSync(srcpath, dstpath)
  srcpath = relative.toDst
  type = symlinkTypeSync(relative.toCwd, type)
  const dir = path.dirname(dstpath)
  const exists = fs.existsSync(dir)
  if (exists) return fs.symlinkSync(srcpath, dstpath, type)
  mkdirsSync(dir)
  return fs.symlinkSync(srcpath, dstpath, type)
}

module.exports = {
  createSymlink: u(createSymlink),
  createSymlinkSync
}


/***/ }),

/***/ "./node_modules/strtok3/node_modules/fs-extra/lib/fs/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/strtok3/node_modules/fs-extra/lib/fs/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// This is adapted from https://github.com/normalize/mz
// Copyright (c) 2014-2016 Jonathan Ong me@jongleberry.com and Contributors
const u = __webpack_require__(/*! universalify */ "./node_modules/universalify/index.js").fromCallback
const fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js")

const api = [
  'access',
  'appendFile',
  'chmod',
  'chown',
  'close',
  'copyFile',
  'fchmod',
  'fchown',
  'fdatasync',
  'fstat',
  'fsync',
  'ftruncate',
  'futimes',
  'lchown',
  'link',
  'lstat',
  'mkdir',
  'mkdtemp',
  'open',
  'readFile',
  'readdir',
  'readlink',
  'realpath',
  'rename',
  'rmdir',
  'stat',
  'symlink',
  'truncate',
  'unlink',
  'utimes',
  'writeFile'
].filter(key => {
  // Some commands are not available on some systems. Ex:
  // fs.copyFile was added in Node.js v8.5.0
  // fs.mkdtemp was added in Node.js v5.10.0
  // fs.lchown is not available on at least some Linux
  return typeof fs[key] === 'function'
})

// Export all keys:
Object.keys(fs).forEach(key => {
  exports[key] = fs[key]
})

// Universalify async methods:
api.forEach(method => {
  exports[method] = u(fs[method])
})

// We differ from mz/fs in that we still ship the old, broken, fs.exists()
// since we are a drop-in replacement for the native module
exports.exists = function (filename, callback) {
  if (typeof callback === 'function') {
    return fs.exists(filename, callback)
  }
  return new Promise(resolve => {
    return fs.exists(filename, resolve)
  })
}

// fs.read() & fs.write need special treatment due to multiple callback args

exports.read = function (fd, buffer, offset, length, position, callback) {
  if (typeof callback === 'function') {
    return fs.read(fd, buffer, offset, length, position, callback)
  }
  return new Promise((resolve, reject) => {
    fs.read(fd, buffer, offset, length, position, (err, bytesRead, buffer) => {
      if (err) return reject(err)
      resolve({ bytesRead, buffer })
    })
  })
}

// Function signature can be
// fs.write(fd, buffer[, offset[, length[, position]]], callback)
// OR
// fs.write(fd, string[, position[, encoding]], callback)
// so we need to handle both cases
exports.write = function (fd, buffer, a, b, c, callback) {
  if (typeof arguments[arguments.length - 1] === 'function') {
    return fs.write(fd, buffer, a, b, c, callback)
  }

  // Check for old, depricated fs.write(fd, string[, position[, encoding]], callback)
  if (typeof buffer === 'string') {
    return new Promise((resolve, reject) => {
      fs.write(fd, buffer, a, b, (err, bytesWritten, buffer) => {
        if (err) return reject(err)
        resolve({ bytesWritten, buffer })
      })
    })
  }

  return new Promise((resolve, reject) => {
    fs.write(fd, buffer, a, b, c, (err, bytesWritten, buffer) => {
      if (err) return reject(err)
      resolve({ bytesWritten, buffer })
    })
  })
}


/***/ }),

/***/ "./node_modules/strtok3/node_modules/fs-extra/lib/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/strtok3/node_modules/fs-extra/lib/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const assign = __webpack_require__(/*! ./util/assign */ "./node_modules/strtok3/node_modules/fs-extra/lib/util/assign.js")

const fs = {}

// Export graceful-fs:
assign(fs, __webpack_require__(/*! ./fs */ "./node_modules/strtok3/node_modules/fs-extra/lib/fs/index.js"))
// Export extra methods:
assign(fs, __webpack_require__(/*! ./copy */ "./node_modules/strtok3/node_modules/fs-extra/lib/copy/index.js"))
assign(fs, __webpack_require__(/*! ./copy-sync */ "./node_modules/strtok3/node_modules/fs-extra/lib/copy-sync/index.js"))
assign(fs, __webpack_require__(/*! ./mkdirs */ "./node_modules/strtok3/node_modules/fs-extra/lib/mkdirs/index.js"))
assign(fs, __webpack_require__(/*! ./remove */ "./node_modules/strtok3/node_modules/fs-extra/lib/remove/index.js"))
assign(fs, __webpack_require__(/*! ./json */ "./node_modules/strtok3/node_modules/fs-extra/lib/json/index.js"))
assign(fs, __webpack_require__(/*! ./move */ "./node_modules/strtok3/node_modules/fs-extra/lib/move/index.js"))
assign(fs, __webpack_require__(/*! ./move-sync */ "./node_modules/strtok3/node_modules/fs-extra/lib/move-sync/index.js"))
assign(fs, __webpack_require__(/*! ./empty */ "./node_modules/strtok3/node_modules/fs-extra/lib/empty/index.js"))
assign(fs, __webpack_require__(/*! ./ensure */ "./node_modules/strtok3/node_modules/fs-extra/lib/ensure/index.js"))
assign(fs, __webpack_require__(/*! ./output */ "./node_modules/strtok3/node_modules/fs-extra/lib/output/index.js"))
assign(fs, __webpack_require__(/*! ./path-exists */ "./node_modules/strtok3/node_modules/fs-extra/lib/path-exists/index.js"))

module.exports = fs


/***/ }),

/***/ "./node_modules/strtok3/node_modules/fs-extra/lib/json/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/strtok3/node_modules/fs-extra/lib/json/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(/*! universalify */ "./node_modules/universalify/index.js").fromCallback
const jsonFile = __webpack_require__(/*! ./jsonfile */ "./node_modules/strtok3/node_modules/fs-extra/lib/json/jsonfile.js")

jsonFile.outputJson = u(__webpack_require__(/*! ./output-json */ "./node_modules/strtok3/node_modules/fs-extra/lib/json/output-json.js"))
jsonFile.outputJsonSync = __webpack_require__(/*! ./output-json-sync */ "./node_modules/strtok3/node_modules/fs-extra/lib/json/output-json-sync.js")
// aliases
jsonFile.outputJSON = jsonFile.outputJson
jsonFile.outputJSONSync = jsonFile.outputJsonSync
jsonFile.writeJSON = jsonFile.writeJson
jsonFile.writeJSONSync = jsonFile.writeJsonSync
jsonFile.readJSON = jsonFile.readJson
jsonFile.readJSONSync = jsonFile.readJsonSync

module.exports = jsonFile


/***/ }),

/***/ "./node_modules/strtok3/node_modules/fs-extra/lib/json/jsonfile.js":
/*!*************************************************************************!*\
  !*** ./node_modules/strtok3/node_modules/fs-extra/lib/json/jsonfile.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(/*! universalify */ "./node_modules/universalify/index.js").fromCallback
const jsonFile = __webpack_require__(/*! jsonfile */ "./node_modules/strtok3/node_modules/jsonfile/index.js")

module.exports = {
  // jsonfile exports
  readJson: u(jsonFile.readFile),
  readJsonSync: jsonFile.readFileSync,
  writeJson: u(jsonFile.writeFile),
  writeJsonSync: jsonFile.writeFileSync
}


/***/ }),

/***/ "./node_modules/strtok3/node_modules/fs-extra/lib/json/output-json-sync.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/strtok3/node_modules/fs-extra/lib/json/output-json-sync.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js")
const path = __webpack_require__(/*! path */ "path")
const mkdir = __webpack_require__(/*! ../mkdirs */ "./node_modules/strtok3/node_modules/fs-extra/lib/mkdirs/index.js")
const jsonFile = __webpack_require__(/*! ./jsonfile */ "./node_modules/strtok3/node_modules/fs-extra/lib/json/jsonfile.js")

function outputJsonSync (file, data, options) {
  const dir = path.dirname(file)

  if (!fs.existsSync(dir)) {
    mkdir.mkdirsSync(dir)
  }

  jsonFile.writeJsonSync(file, data, options)
}

module.exports = outputJsonSync


/***/ }),

/***/ "./node_modules/strtok3/node_modules/fs-extra/lib/json/output-json.js":
/*!****************************************************************************!*\
  !*** ./node_modules/strtok3/node_modules/fs-extra/lib/json/output-json.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const path = __webpack_require__(/*! path */ "path")
const mkdir = __webpack_require__(/*! ../mkdirs */ "./node_modules/strtok3/node_modules/fs-extra/lib/mkdirs/index.js")
const pathExists = __webpack_require__(/*! ../path-exists */ "./node_modules/strtok3/node_modules/fs-extra/lib/path-exists/index.js").pathExists
const jsonFile = __webpack_require__(/*! ./jsonfile */ "./node_modules/strtok3/node_modules/fs-extra/lib/json/jsonfile.js")

function outputJson (file, data, options, callback) {
  if (typeof options === 'function') {
    callback = options
    options = {}
  }

  const dir = path.dirname(file)

  pathExists(dir, (err, itDoes) => {
    if (err) return callback(err)
    if (itDoes) return jsonFile.writeJson(file, data, options, callback)

    mkdir.mkdirs(dir, err => {
      if (err) return callback(err)
      jsonFile.writeJson(file, data, options, callback)
    })
  })
}

module.exports = outputJson


/***/ }),

/***/ "./node_modules/strtok3/node_modules/fs-extra/lib/mkdirs/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/strtok3/node_modules/fs-extra/lib/mkdirs/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const u = __webpack_require__(/*! universalify */ "./node_modules/universalify/index.js").fromCallback
const mkdirs = u(__webpack_require__(/*! ./mkdirs */ "./node_modules/strtok3/node_modules/fs-extra/lib/mkdirs/mkdirs.js"))
const mkdirsSync = __webpack_require__(/*! ./mkdirs-sync */ "./node_modules/strtok3/node_modules/fs-extra/lib/mkdirs/mkdirs-sync.js")

module.exports = {
  mkdirs: mkdirs,
  mkdirsSync: mkdirsSync,
  // alias
  mkdirp: mkdirs,
  mkdirpSync: mkdirsSync,
  ensureDir: mkdirs,
  ensureDirSync: mkdirsSync
}


/***/ }),

/***/ "./node_modules/strtok3/node_modules/fs-extra/lib/mkdirs/mkdirs-sync.js":
/*!******************************************************************************!*\
  !*** ./node_modules/strtok3/node_modules/fs-extra/lib/mkdirs/mkdirs-sync.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js")
const path = __webpack_require__(/*! path */ "path")
const invalidWin32Path = __webpack_require__(/*! ./win32 */ "./node_modules/strtok3/node_modules/fs-extra/lib/mkdirs/win32.js").invalidWin32Path

const o777 = parseInt('0777', 8)

function mkdirsSync (p, opts, made) {
  if (!opts || typeof opts !== 'object') {
    opts = { mode: opts }
  }

  let mode = opts.mode
  const xfs = opts.fs || fs

  if (process.platform === 'win32' && invalidWin32Path(p)) {
    const errInval = new Error(p + ' contains invalid WIN32 path characters.')
    errInval.code = 'EINVAL'
    throw errInval
  }

  if (mode === undefined) {
    mode = o777 & (~process.umask())
  }
  if (!made) made = null

  p = path.resolve(p)

  try {
    xfs.mkdirSync(p, mode)
    made = made || p
  } catch (err0) {
    switch (err0.code) {
      case 'ENOENT':
        if (path.dirname(p) === p) throw err0
        made = mkdirsSync(path.dirname(p), opts, made)
        mkdirsSync(p, opts, made)
        break

      // In the case of any other error, just see if there's a dir
      // there already.  If so, then hooray!  If not, then something
      // is borked.
      default:
        let stat
        try {
          stat = xfs.statSync(p)
        } catch (err1) {
          throw err0
        }
        if (!stat.isDirectory()) throw err0
        break
    }
  }

  return made
}

module.exports = mkdirsSync


/***/ }),

/***/ "./node_modules/strtok3/node_modules/fs-extra/lib/mkdirs/mkdirs.js":
/*!*************************************************************************!*\
  !*** ./node_modules/strtok3/node_modules/fs-extra/lib/mkdirs/mkdirs.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js")
const path = __webpack_require__(/*! path */ "path")
const invalidWin32Path = __webpack_require__(/*! ./win32 */ "./node_modules/strtok3/node_modules/fs-extra/lib/mkdirs/win32.js").invalidWin32Path

const o777 = parseInt('0777', 8)

function mkdirs (p, opts, callback, made) {
  if (typeof opts === 'function') {
    callback = opts
    opts = {}
  } else if (!opts || typeof opts !== 'object') {
    opts = { mode: opts }
  }

  if (process.platform === 'win32' && invalidWin32Path(p)) {
    const errInval = new Error(p + ' contains invalid WIN32 path characters.')
    errInval.code = 'EINVAL'
    return callback(errInval)
  }

  let mode = opts.mode
  const xfs = opts.fs || fs

  if (mode === undefined) {
    mode = o777 & (~process.umask())
  }
  if (!made) made = null

  callback = callback || function () {}
  p = path.resolve(p)

  xfs.mkdir(p, mode, er => {
    if (!er) {
      made = made || p
      return callback(null, made)
    }
    switch (er.code) {
      case 'ENOENT':
        if (path.dirname(p) === p) return callback(er)
        mkdirs(path.dirname(p), opts, (er, made) => {
          if (er) callback(er, made)
          else mkdirs(p, opts, callback, made)
        })
        break

      // In the case of any other error, just see if there's a dir
      // there already.  If so, then hooray!  If not, then something
      // is borked.
      default:
        xfs.stat(p, (er2, stat) => {
          // if the stat fails, then that's super weird.
          // let the original error be the failure reason.
          if (er2 || !stat.isDirectory()) callback(er, made)
          else callback(null, made)
        })
        break
    }
  })
}

module.exports = mkdirs


/***/ }),

/***/ "./node_modules/strtok3/node_modules/fs-extra/lib/mkdirs/win32.js":
/*!************************************************************************!*\
  !*** ./node_modules/strtok3/node_modules/fs-extra/lib/mkdirs/win32.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const path = __webpack_require__(/*! path */ "path")

// get drive on windows
function getRootPath (p) {
  p = path.normalize(path.resolve(p)).split(path.sep)
  if (p.length > 0) return p[0]
  return null
}

// http://stackoverflow.com/a/62888/10333 contains more accurate
// TODO: expand to include the rest
const INVALID_PATH_CHARS = /[<>:"|?*]/

function invalidWin32Path (p) {
  const rp = getRootPath(p)
  p = p.replace(rp, '')
  return INVALID_PATH_CHARS.test(p)
}

module.exports = {
  getRootPath,
  invalidWin32Path
}


/***/ }),

/***/ "./node_modules/strtok3/node_modules/fs-extra/lib/move-sync/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/strtok3/node_modules/fs-extra/lib/move-sync/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js")
const path = __webpack_require__(/*! path */ "path")
const copySync = __webpack_require__(/*! ../copy-sync */ "./node_modules/strtok3/node_modules/fs-extra/lib/copy-sync/index.js").copySync
const removeSync = __webpack_require__(/*! ../remove */ "./node_modules/strtok3/node_modules/fs-extra/lib/remove/index.js").removeSync
const mkdirpSync = __webpack_require__(/*! ../mkdirs */ "./node_modules/strtok3/node_modules/fs-extra/lib/mkdirs/index.js").mkdirsSync
const buffer = __webpack_require__(/*! ../util/buffer */ "./node_modules/strtok3/node_modules/fs-extra/lib/util/buffer.js")

function moveSync (src, dest, options) {
  options = options || {}
  const overwrite = options.overwrite || options.clobber || false

  src = path.resolve(src)
  dest = path.resolve(dest)

  if (src === dest) return fs.accessSync(src)

  if (isSrcSubdir(src, dest)) throw new Error(`Cannot move '${src}' into itself '${dest}'.`)

  mkdirpSync(path.dirname(dest))
  tryRenameSync()

  function tryRenameSync () {
    if (overwrite) {
      try {
        return fs.renameSync(src, dest)
      } catch (err) {
        if (err.code === 'ENOTEMPTY' || err.code === 'EEXIST' || err.code === 'EPERM') {
          removeSync(dest)
          options.overwrite = false // just overwriteed it, no need to do it again
          return moveSync(src, dest, options)
        }

        if (err.code !== 'EXDEV') throw err
        return moveSyncAcrossDevice(src, dest, overwrite)
      }
    } else {
      try {
        fs.linkSync(src, dest)
        return fs.unlinkSync(src)
      } catch (err) {
        if (err.code === 'EXDEV' || err.code === 'EISDIR' || err.code === 'EPERM' || err.code === 'ENOTSUP') {
          return moveSyncAcrossDevice(src, dest, overwrite)
        }
        throw err
      }
    }
  }
}

function moveSyncAcrossDevice (src, dest, overwrite) {
  const stat = fs.statSync(src)

  if (stat.isDirectory()) {
    return moveDirSyncAcrossDevice(src, dest, overwrite)
  } else {
    return moveFileSyncAcrossDevice(src, dest, overwrite)
  }
}

function moveFileSyncAcrossDevice (src, dest, overwrite) {
  const BUF_LENGTH = 64 * 1024
  const _buff = buffer(BUF_LENGTH)

  const flags = overwrite ? 'w' : 'wx'

  const fdr = fs.openSync(src, 'r')
  const stat = fs.fstatSync(fdr)
  const fdw = fs.openSync(dest, flags, stat.mode)
  let bytesRead = 1
  let pos = 0

  while (bytesRead > 0) {
    bytesRead = fs.readSync(fdr, _buff, 0, BUF_LENGTH, pos)
    fs.writeSync(fdw, _buff, 0, bytesRead)
    pos += bytesRead
  }

  fs.closeSync(fdr)
  fs.closeSync(fdw)
  return fs.unlinkSync(src)
}

function moveDirSyncAcrossDevice (src, dest, overwrite) {
  const options = {
    overwrite: false
  }

  if (overwrite) {
    removeSync(dest)
    tryCopySync()
  } else {
    tryCopySync()
  }

  function tryCopySync () {
    copySync(src, dest, options)
    return removeSync(src)
  }
}

// return true if dest is a subdir of src, otherwise false.
// extract dest base dir and check if that is the same as src basename
function isSrcSubdir (src, dest) {
  try {
    return fs.statSync(src).isDirectory() &&
           src !== dest &&
           dest.indexOf(src) > -1 &&
           dest.split(path.dirname(src) + path.sep)[1].split(path.sep)[0] === path.basename(src)
  } catch (e) {
    return false
  }
}

module.exports = {
  moveSync
}


/***/ }),

/***/ "./node_modules/strtok3/node_modules/fs-extra/lib/move/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/strtok3/node_modules/fs-extra/lib/move/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// most of this code was written by Andrew Kelley
// licensed under the BSD license: see
// https://github.com/andrewrk/node-mv/blob/master/package.json

// this needs a cleanup

const u = __webpack_require__(/*! universalify */ "./node_modules/universalify/index.js").fromCallback
const fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js")
const copy = __webpack_require__(/*! ../copy/copy */ "./node_modules/strtok3/node_modules/fs-extra/lib/copy/copy.js")
const path = __webpack_require__(/*! path */ "path")
const remove = __webpack_require__(/*! ../remove */ "./node_modules/strtok3/node_modules/fs-extra/lib/remove/index.js").remove
const mkdirp = __webpack_require__(/*! ../mkdirs */ "./node_modules/strtok3/node_modules/fs-extra/lib/mkdirs/index.js").mkdirs

function move (src, dest, options, callback) {
  if (typeof options === 'function') {
    callback = options
    options = {}
  }

  const overwrite = options.overwrite || options.clobber || false

  isSrcSubdir(src, dest, (err, itIs) => {
    if (err) return callback(err)
    if (itIs) return callback(new Error(`Cannot move '${src}' to a subdirectory of itself, '${dest}'.`))
    mkdirp(path.dirname(dest), err => {
      if (err) return callback(err)
      doRename()
    })
  })

  function doRename () {
    if (path.resolve(src) === path.resolve(dest)) {
      fs.access(src, callback)
    } else if (overwrite) {
      fs.rename(src, dest, err => {
        if (!err) return callback()

        if (err.code === 'ENOTEMPTY' || err.code === 'EEXIST') {
          remove(dest, err => {
            if (err) return callback(err)
            options.overwrite = false // just overwriteed it, no need to do it again
            move(src, dest, options, callback)
          })
          return
        }

        // weird Windows shit
        if (err.code === 'EPERM') {
          setTimeout(() => {
            remove(dest, err => {
              if (err) return callback(err)
              options.overwrite = false
              move(src, dest, options, callback)
            })
          }, 200)
          return
        }

        if (err.code !== 'EXDEV') return callback(err)
        moveAcrossDevice(src, dest, overwrite, callback)
      })
    } else {
      fs.link(src, dest, err => {
        if (err) {
          if (err.code === 'EXDEV' || err.code === 'EISDIR' || err.code === 'EPERM' || err.code === 'ENOTSUP') {
            return moveAcrossDevice(src, dest, overwrite, callback)
          }
          return callback(err)
        }
        return fs.unlink(src, callback)
      })
    }
  }
}

function moveAcrossDevice (src, dest, overwrite, callback) {
  fs.stat(src, (err, stat) => {
    if (err) return callback(err)

    if (stat.isDirectory()) {
      moveDirAcrossDevice(src, dest, overwrite, callback)
    } else {
      moveFileAcrossDevice(src, dest, overwrite, callback)
    }
  })
}

function moveFileAcrossDevice (src, dest, overwrite, callback) {
  const flags = overwrite ? 'w' : 'wx'
  const ins = fs.createReadStream(src)
  const outs = fs.createWriteStream(dest, { flags })

  ins.on('error', err => {
    ins.destroy()
    outs.destroy()
    outs.removeListener('close', onClose)

    // may want to create a directory but `out` line above
    // creates an empty file for us: See #108
    // don't care about error here
    fs.unlink(dest, () => {
      // note: `err` here is from the input stream errror
      if (err.code === 'EISDIR' || err.code === 'EPERM') {
        moveDirAcrossDevice(src, dest, overwrite, callback)
      } else {
        callback(err)
      }
    })
  })

  outs.on('error', err => {
    ins.destroy()
    outs.destroy()
    outs.removeListener('close', onClose)
    callback(err)
  })

  outs.once('close', onClose)
  ins.pipe(outs)

  function onClose () {
    fs.unlink(src, callback)
  }
}

function moveDirAcrossDevice (src, dest, overwrite, callback) {
  const options = {
    overwrite: false
  }

  if (overwrite) {
    remove(dest, err => {
      if (err) return callback(err)
      startCopy()
    })
  } else {
    startCopy()
  }

  function startCopy () {
    copy(src, dest, options, err => {
      if (err) return callback(err)
      remove(src, callback)
    })
  }
}

// return true if dest is a subdir of src, otherwise false.
// extract dest base dir and check if that is the same as src basename
function isSrcSubdir (src, dest, cb) {
  fs.stat(src, (err, st) => {
    if (err) return cb(err)
    if (st.isDirectory()) {
      const baseDir = dest.split(path.dirname(src) + path.sep)[1]
      if (baseDir) {
        const destBasename = baseDir.split(path.sep)[0]
        if (destBasename) return cb(null, src !== dest && dest.indexOf(src) > -1 && destBasename === path.basename(src))
        return cb(null, false)
      }
      return cb(null, false)
    }
    return cb(null, false)
  })
}

module.exports = {
  move: u(move)
}


/***/ }),

/***/ "./node_modules/strtok3/node_modules/fs-extra/lib/output/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/strtok3/node_modules/fs-extra/lib/output/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(/*! universalify */ "./node_modules/universalify/index.js").fromCallback
const fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js")
const path = __webpack_require__(/*! path */ "path")
const mkdir = __webpack_require__(/*! ../mkdirs */ "./node_modules/strtok3/node_modules/fs-extra/lib/mkdirs/index.js")
const pathExists = __webpack_require__(/*! ../path-exists */ "./node_modules/strtok3/node_modules/fs-extra/lib/path-exists/index.js").pathExists

function outputFile (file, data, encoding, callback) {
  if (typeof encoding === 'function') {
    callback = encoding
    encoding = 'utf8'
  }

  const dir = path.dirname(file)
  pathExists(dir, (err, itDoes) => {
    if (err) return callback(err)
    if (itDoes) return fs.writeFile(file, data, encoding, callback)

    mkdir.mkdirs(dir, err => {
      if (err) return callback(err)

      fs.writeFile(file, data, encoding, callback)
    })
  })
}

function outputFileSync (file, data, encoding) {
  const dir = path.dirname(file)
  if (fs.existsSync(dir)) {
    return fs.writeFileSync.apply(fs, arguments)
  }
  mkdir.mkdirsSync(dir)
  fs.writeFileSync.apply(fs, arguments)
}

module.exports = {
  outputFile: u(outputFile),
  outputFileSync
}


/***/ }),

/***/ "./node_modules/strtok3/node_modules/fs-extra/lib/path-exists/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/strtok3/node_modules/fs-extra/lib/path-exists/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const u = __webpack_require__(/*! universalify */ "./node_modules/universalify/index.js").fromPromise
const fs = __webpack_require__(/*! ../fs */ "./node_modules/strtok3/node_modules/fs-extra/lib/fs/index.js")

function pathExists (path) {
  return fs.access(path).then(() => true).catch(() => false)
}

module.exports = {
  pathExists: u(pathExists),
  pathExistsSync: fs.existsSync
}


/***/ }),

/***/ "./node_modules/strtok3/node_modules/fs-extra/lib/remove/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/strtok3/node_modules/fs-extra/lib/remove/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(/*! universalify */ "./node_modules/universalify/index.js").fromCallback
const rimraf = __webpack_require__(/*! ./rimraf */ "./node_modules/strtok3/node_modules/fs-extra/lib/remove/rimraf.js")

module.exports = {
  remove: u(rimraf),
  removeSync: rimraf.sync
}


/***/ }),

/***/ "./node_modules/strtok3/node_modules/fs-extra/lib/remove/rimraf.js":
/*!*************************************************************************!*\
  !*** ./node_modules/strtok3/node_modules/fs-extra/lib/remove/rimraf.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js")
const path = __webpack_require__(/*! path */ "path")
const assert = __webpack_require__(/*! assert */ "assert")

const isWindows = (process.platform === 'win32')

function defaults (options) {
  const methods = [
    'unlink',
    'chmod',
    'stat',
    'lstat',
    'rmdir',
    'readdir'
  ]
  methods.forEach(m => {
    options[m] = options[m] || fs[m]
    m = m + 'Sync'
    options[m] = options[m] || fs[m]
  })

  options.maxBusyTries = options.maxBusyTries || 3
}

function rimraf (p, options, cb) {
  let busyTries = 0

  if (typeof options === 'function') {
    cb = options
    options = {}
  }

  assert(p, 'rimraf: missing path')
  assert.equal(typeof p, 'string', 'rimraf: path should be a string')
  assert.equal(typeof cb, 'function', 'rimraf: callback function required')
  assert(options, 'rimraf: invalid options argument provided')
  assert.equal(typeof options, 'object', 'rimraf: options should be object')

  defaults(options)

  rimraf_(p, options, function CB (er) {
    if (er) {
      if ((er.code === 'EBUSY' || er.code === 'ENOTEMPTY' || er.code === 'EPERM') &&
          busyTries < options.maxBusyTries) {
        busyTries++
        let time = busyTries * 100
        // try again, with the same exact callback as this one.
        return setTimeout(() => rimraf_(p, options, CB), time)
      }

      // already gone
      if (er.code === 'ENOENT') er = null
    }

    cb(er)
  })
}

// Two possible strategies.
// 1. Assume it's a file.  unlink it, then do the dir stuff on EPERM or EISDIR
// 2. Assume it's a directory.  readdir, then do the file stuff on ENOTDIR
//
// Both result in an extra syscall when you guess wrong.  However, there
// are likely far more normal files in the world than directories.  This
// is based on the assumption that a the average number of files per
// directory is >= 1.
//
// If anyone ever complains about this, then I guess the strategy could
// be made configurable somehow.  But until then, YAGNI.
function rimraf_ (p, options, cb) {
  assert(p)
  assert(options)
  assert(typeof cb === 'function')

  // sunos lets the root user unlink directories, which is... weird.
  // so we have to lstat here and make sure it's not a dir.
  options.lstat(p, (er, st) => {
    if (er && er.code === 'ENOENT') {
      return cb(null)
    }

    // Windows can EPERM on stat.  Life is suffering.
    if (er && er.code === 'EPERM' && isWindows) {
      return fixWinEPERM(p, options, er, cb)
    }

    if (st && st.isDirectory()) {
      return rmdir(p, options, er, cb)
    }

    options.unlink(p, er => {
      if (er) {
        if (er.code === 'ENOENT') {
          return cb(null)
        }
        if (er.code === 'EPERM') {
          return (isWindows)
            ? fixWinEPERM(p, options, er, cb)
            : rmdir(p, options, er, cb)
        }
        if (er.code === 'EISDIR') {
          return rmdir(p, options, er, cb)
        }
      }
      return cb(er)
    })
  })
}

function fixWinEPERM (p, options, er, cb) {
  assert(p)
  assert(options)
  assert(typeof cb === 'function')
  if (er) {
    assert(er instanceof Error)
  }

  options.chmod(p, 0o666, er2 => {
    if (er2) {
      cb(er2.code === 'ENOENT' ? null : er)
    } else {
      options.stat(p, (er3, stats) => {
        if (er3) {
          cb(er3.code === 'ENOENT' ? null : er)
        } else if (stats.isDirectory()) {
          rmdir(p, options, er, cb)
        } else {
          options.unlink(p, cb)
        }
      })
    }
  })
}

function fixWinEPERMSync (p, options, er) {
  let stats

  assert(p)
  assert(options)
  if (er) {
    assert(er instanceof Error)
  }

  try {
    options.chmodSync(p, 0o666)
  } catch (er2) {
    if (er2.code === 'ENOENT') {
      return
    } else {
      throw er
    }
  }

  try {
    stats = options.statSync(p)
  } catch (er3) {
    if (er3.code === 'ENOENT') {
      return
    } else {
      throw er
    }
  }

  if (stats.isDirectory()) {
    rmdirSync(p, options, er)
  } else {
    options.unlinkSync(p)
  }
}

function rmdir (p, options, originalEr, cb) {
  assert(p)
  assert(options)
  if (originalEr) {
    assert(originalEr instanceof Error)
  }
  assert(typeof cb === 'function')

  // try to rmdir first, and only readdir on ENOTEMPTY or EEXIST (SunOS)
  // if we guessed wrong, and it's not a directory, then
  // raise the original error.
  options.rmdir(p, er => {
    if (er && (er.code === 'ENOTEMPTY' || er.code === 'EEXIST' || er.code === 'EPERM')) {
      rmkids(p, options, cb)
    } else if (er && er.code === 'ENOTDIR') {
      cb(originalEr)
    } else {
      cb(er)
    }
  })
}

function rmkids (p, options, cb) {
  assert(p)
  assert(options)
  assert(typeof cb === 'function')

  options.readdir(p, (er, files) => {
    if (er) return cb(er)

    let n = files.length
    let errState

    if (n === 0) return options.rmdir(p, cb)

    files.forEach(f => {
      rimraf(path.join(p, f), options, er => {
        if (errState) {
          return
        }
        if (er) return cb(errState = er)
        if (--n === 0) {
          options.rmdir(p, cb)
        }
      })
    })
  })
}

// this looks simpler, and is strictly *faster*, but will
// tie up the JavaScript thread and fail on excessively
// deep directory trees.
function rimrafSync (p, options) {
  let st

  options = options || {}
  defaults(options)

  assert(p, 'rimraf: missing path')
  assert.equal(typeof p, 'string', 'rimraf: path should be a string')
  assert(options, 'rimraf: missing options')
  assert.equal(typeof options, 'object', 'rimraf: options should be object')

  try {
    st = options.lstatSync(p)
  } catch (er) {
    if (er.code === 'ENOENT') {
      return
    }

    // Windows can EPERM on stat.  Life is suffering.
    if (er.code === 'EPERM' && isWindows) {
      fixWinEPERMSync(p, options, er)
    }
  }

  try {
    // sunos lets the root user unlink directories, which is... weird.
    if (st && st.isDirectory()) {
      rmdirSync(p, options, null)
    } else {
      options.unlinkSync(p)
    }
  } catch (er) {
    if (er.code === 'ENOENT') {
      return
    } else if (er.code === 'EPERM') {
      return isWindows ? fixWinEPERMSync(p, options, er) : rmdirSync(p, options, er)
    } else if (er.code !== 'EISDIR') {
      throw er
    }
    rmdirSync(p, options, er)
  }
}

function rmdirSync (p, options, originalEr) {
  assert(p)
  assert(options)
  if (originalEr) {
    assert(originalEr instanceof Error)
  }

  try {
    options.rmdirSync(p)
  } catch (er) {
    if (er.code === 'ENOTDIR') {
      throw originalEr
    } else if (er.code === 'ENOTEMPTY' || er.code === 'EEXIST' || er.code === 'EPERM') {
      rmkidsSync(p, options)
    } else if (er.code !== 'ENOENT') {
      throw er
    }
  }
}

function rmkidsSync (p, options) {
  assert(p)
  assert(options)
  options.readdirSync(p).forEach(f => rimrafSync(path.join(p, f), options))

  // We only end up here once we got ENOTEMPTY at least once, and
  // at this point, we are guaranteed to have removed all the kids.
  // So, we know that it won't be ENOENT or ENOTDIR or anything else.
  // try really hard to delete stuff on windows, because it has a
  // PROFOUNDLY annoying habit of not closing handles promptly when
  // files are deleted, resulting in spurious ENOTEMPTY errors.
  const retries = isWindows ? 100 : 1
  let i = 0
  do {
    let threw = true
    try {
      const ret = options.rmdirSync(p, options)
      threw = false
      return ret
    } finally {
      if (++i < retries && threw) continue // eslint-disable-line
    }
  } while (true)
}

module.exports = rimraf
rimraf.sync = rimrafSync


/***/ }),

/***/ "./node_modules/strtok3/node_modules/fs-extra/lib/util/assign.js":
/*!***********************************************************************!*\
  !*** ./node_modules/strtok3/node_modules/fs-extra/lib/util/assign.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// simple mutable assign
function assign () {
  const args = [].slice.call(arguments).filter(i => i)
  const dest = args.shift()
  args.forEach(src => {
    Object.keys(src).forEach(key => {
      dest[key] = src[key]
    })
  })

  return dest
}

module.exports = assign


/***/ }),

/***/ "./node_modules/strtok3/node_modules/fs-extra/lib/util/buffer.js":
/*!***********************************************************************!*\
  !*** ./node_modules/strtok3/node_modules/fs-extra/lib/util/buffer.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable node/no-deprecated-api */
module.exports = function (size) {
  if (typeof Buffer.allocUnsafe === 'function') {
    try {
      return Buffer.allocUnsafe(size)
    } catch (e) {
      return new Buffer(size)
    }
  }
  return new Buffer(size)
}


/***/ }),

/***/ "./node_modules/strtok3/node_modules/fs-extra/lib/util/utimes.js":
/*!***********************************************************************!*\
  !*** ./node_modules/strtok3/node_modules/fs-extra/lib/util/utimes.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js")
const os = __webpack_require__(/*! os */ "os")
const path = __webpack_require__(/*! path */ "path")

// HFS, ext{2,3}, FAT do not, Node.js v0.10 does not
function hasMillisResSync () {
  let tmpfile = path.join('millis-test-sync' + Date.now().toString() + Math.random().toString().slice(2))
  tmpfile = path.join(os.tmpdir(), tmpfile)

  // 550 millis past UNIX epoch
  const d = new Date(1435410243862)
  fs.writeFileSync(tmpfile, 'https://github.com/jprichardson/node-fs-extra/pull/141')
  const fd = fs.openSync(tmpfile, 'r+')
  fs.futimesSync(fd, d, d)
  fs.closeSync(fd)
  return fs.statSync(tmpfile).mtime > 1435410243000
}

function hasMillisRes (callback) {
  let tmpfile = path.join('millis-test' + Date.now().toString() + Math.random().toString().slice(2))
  tmpfile = path.join(os.tmpdir(), tmpfile)

  // 550 millis past UNIX epoch
  const d = new Date(1435410243862)
  fs.writeFile(tmpfile, 'https://github.com/jprichardson/node-fs-extra/pull/141', err => {
    if (err) return callback(err)
    fs.open(tmpfile, 'r+', (err, fd) => {
      if (err) return callback(err)
      fs.futimes(fd, d, d, err => {
        if (err) return callback(err)
        fs.close(fd, err => {
          if (err) return callback(err)
          fs.stat(tmpfile, (err, stats) => {
            if (err) return callback(err)
            callback(null, stats.mtime > 1435410243000)
          })
        })
      })
    })
  })
}

function timeRemoveMillis (timestamp) {
  if (typeof timestamp === 'number') {
    return Math.floor(timestamp / 1000) * 1000
  } else if (timestamp instanceof Date) {
    return new Date(Math.floor(timestamp.getTime() / 1000) * 1000)
  } else {
    throw new Error('fs-extra: timeRemoveMillis() unknown parameter type')
  }
}

function utimesMillis (path, atime, mtime, callback) {
  // if (!HAS_MILLIS_RES) return fs.utimes(path, atime, mtime, callback)
  fs.open(path, 'r+', (err, fd) => {
    if (err) return callback(err)
    fs.futimes(fd, atime, mtime, futimesErr => {
      fs.close(fd, closeErr => {
        if (callback) callback(futimesErr || closeErr)
      })
    })
  })
}

function utimesMillisSync (path, atime, mtime) {
  const fd = fs.openSync(path, 'r+')
  fs.futimesSync(fd, atime, mtime)
  return fs.closeSync(fd)
}

module.exports = {
  hasMillisRes,
  hasMillisResSync,
  timeRemoveMillis,
  utimesMillis,
  utimesMillisSync
}


/***/ }),

/***/ "./node_modules/strtok3/node_modules/jsonfile/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/strtok3/node_modules/jsonfile/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _fs
try {
  _fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js")
} catch (_) {
  _fs = __webpack_require__(/*! fs */ "fs")
}

function readFile (file, options, callback) {
  if (callback == null) {
    callback = options
    options = {}
  }

  if (typeof options === 'string') {
    options = {encoding: options}
  }

  options = options || {}
  var fs = options.fs || _fs

  var shouldThrow = true
  if ('throws' in options) {
    shouldThrow = options.throws
  }

  fs.readFile(file, options, function (err, data) {
    if (err) return callback(err)

    data = stripBom(data)

    var obj
    try {
      obj = JSON.parse(data, options ? options.reviver : null)
    } catch (err2) {
      if (shouldThrow) {
        err2.message = file + ': ' + err2.message
        return callback(err2)
      } else {
        return callback(null, null)
      }
    }

    callback(null, obj)
  })
}

function readFileSync (file, options) {
  options = options || {}
  if (typeof options === 'string') {
    options = {encoding: options}
  }

  var fs = options.fs || _fs

  var shouldThrow = true
  if ('throws' in options) {
    shouldThrow = options.throws
  }

  try {
    var content = fs.readFileSync(file, options)
    content = stripBom(content)
    return JSON.parse(content, options.reviver)
  } catch (err) {
    if (shouldThrow) {
      err.message = file + ': ' + err.message
      throw err
    } else {
      return null
    }
  }
}

function stringify (obj, options) {
  var spaces
  var EOL = '\n'
  if (typeof options === 'object' && options !== null) {
    if (options.spaces) {
      spaces = options.spaces
    }
    if (options.EOL) {
      EOL = options.EOL
    }
  }

  var str = JSON.stringify(obj, options ? options.replacer : null, spaces)

  return str.replace(/\n/g, EOL) + EOL
}

function writeFile (file, obj, options, callback) {
  if (callback == null) {
    callback = options
    options = {}
  }
  options = options || {}
  var fs = options.fs || _fs

  var str = ''
  try {
    str = stringify(obj, options)
  } catch (err) {
    // Need to return whether a callback was passed or not
    if (callback) callback(err, null)
    return
  }

  fs.writeFile(file, str, options, callback)
}

function writeFileSync (file, obj, options) {
  options = options || {}
  var fs = options.fs || _fs

  var str = stringify(obj, options)
  // not sure if fs.writeFileSync returns anything, but just in case
  return fs.writeFileSync(file, str, options)
}

function stripBom (content) {
  // we do this because JSON.parse would convert it to a utf8 string if encoding wasn't specified
  if (Buffer.isBuffer(content)) content = content.toString('utf8')
  content = content.replace(/^\uFEFF/, '')
  return content
}

var jsonfile = {
  readFile: readFile,
  readFileSync: readFileSync,
  writeFile: writeFile,
  writeFileSync: writeFileSync
}

module.exports = jsonfile


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

/***/ "./node_modules/supports-color/index.js":
/*!**********************************************!*\
  !*** ./node_modules/supports-color/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const os = __webpack_require__(/*! os */ "os");
const hasFlag = __webpack_require__(/*! has-flag */ "./node_modules/has-flag/index.js");

const env = process.env;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false')) {
	forceColor = false;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = true;
}
if ('FORCE_COLOR' in env) {
	forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(stream) {
	if (forceColor === false) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (stream && !stream.isTTY && forceColor !== true) {
		// VS code debugger doesn't have isTTY set
		if (env.VSCODE_PID) {
			return 1;
		}
		return 0;
	}

	const min = forceColor ? 1 : 0;

	if (process.platform === 'win32') {
		// Node.js 7.5.0 is the first version of Node.js to include a patch to
		// libuv that enables 256 color output on Windows. Anything earlier and it
		// won't work. However, here we target Node.js 8 at minimum as it is an LTS
		// release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows
		// release that supports 256 colors. Windows 10 build 14931 is the first release
		// that supports 16m/TrueColor.
		const osRelease = os.release().split('.');
		if (
			Number(process.versions.node.split('.')[0]) >= 8 &&
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	if (env.TERM === 'dumb') {
		return min;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream);
	return translateLevel(level);
}

module.exports = {
	supportsColor: getSupportLevel,
	stdout: getSupportLevel(process.stdout),
	stderr: getSupportLevel(process.stderr)
};


/***/ }),

/***/ "./node_modules/then-read-stream/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/then-read-stream/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var assert = __webpack_require__(/*! assert */ "assert");
var es6_promise_1 = __webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js");
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.promise = new es6_promise_1.Promise(function (resolve, reject) {
            _this.reject = reject;
            _this.resolve = resolve;
        });
    }
    return Deferred;
}());
/**
 * Error message
 */
exports.endOfStream = "End-Of-Stream";
var StreamReader = /** @class */ (function () {
    function StreamReader(s) {
        var _this = this;
        this.s = s;
        this.endOfStream = false;
        /**
         * Store peeked data
         * @type {Array}
         */
        this.peekQueue = [];
        if (!s.read || !s.once) {
            throw new Error("Expected an instance of stream.Readable");
        }
        this.s.once("end", function () {
            _this.endOfStream = true;
            if (_this.request) {
                _this.request.deferred.reject(new Error(exports.endOfStream));
                _this.request = null;
            }
        });
    }
    /**
     * Read ahead from stream. Subsequent read will return the same data
     * @param buffer Buffer to store data read from stream in
     * @param offset Offset buffer
     * @param length Number of bytes to read
     * @param position
     * @returns {any}
     */
    StreamReader.prototype.peek = function (buffer, offset, length) {
        var _this = this;
        return this.read(buffer, offset, length).then(function (bytesRead) {
            _this.peekQueue.push(buffer.slice(offset, bytesRead));
            return bytesRead;
        });
    };
    /**
     * Read chunk from stream
     * @param buffer Buffer to store data read from stream in
     * @param offset Offset buffer
     * @param length Number of bytes to read
     * @returns {any}
     */
    StreamReader.prototype.read = function (buffer, offset, length) {
        if (length === 0) {
            return es6_promise_1.Promise.resolve(0);
        }
        if (this.peekQueue.length > 0) {
            var peekData_1 = this.peekQueue.shift();
            if (length <= peekData_1.length) {
                peekData_1.copy(buffer, offset, 0, offset + length);
                if (length < peekData_1.length) {
                    this.peekQueue.unshift(peekData_1.slice(length));
                }
                return es6_promise_1.Promise.resolve(length);
            }
            else {
                peekData_1.copy(buffer, offset);
                return this.read(buffer, offset + peekData_1.length, length - peekData_1.length).then(function (bytesRead) {
                    return peekData_1.length + bytesRead;
                }).catch(function (err) {
                    if (err.message === exports.endOfStream) {
                        return peekData_1.length; // Return partial read
                    }
                    else
                        throw err;
                });
            }
        }
        else {
            return this._read(buffer, offset, length);
        }
    };
    /**
     * Read chunk from stream
     * @param buffer Buffer to store data read from stream in
     * @param offset Offset buffer
     * @param length Number of bytes to read
     * @returns {any}
     */
    StreamReader.prototype._read = function (buffer, offset, length) {
        var _this = this;
        assert.ok(!this.request, "Concurrent read operation?");
        if (this.endOfStream) {
            return es6_promise_1.Promise.reject(new Error(exports.endOfStream));
        }
        var readBuffer = this.s.read(length);
        if (readBuffer) {
            readBuffer.copy(buffer, offset);
            return es6_promise_1.Promise.resolve(readBuffer.length);
        }
        else {
            this.request = {
                buffer: buffer,
                offset: offset,
                length: length,
                deferred: new Deferred()
            };
            this.s.once("readable", function () {
                _this.tryRead();
            });
            return this.request.deferred.promise.then(function (n) {
                _this.request = null;
                return n;
            }).catch(function (err) {
                _this.request = null;
                throw err;
            });
        }
    };
    StreamReader.prototype.tryRead = function () {
        var _this = this;
        var readBuffer = this.s.read(this.request.length);
        if (readBuffer) {
            readBuffer.copy(this.request.buffer, this.request.offset);
            this.request.deferred.resolve(readBuffer.length);
        }
        else {
            this.s.once("readable", function () {
                _this.tryRead();
            });
        }
    };
    return StreamReader;
}());
exports.StreamReader = StreamReader;


/***/ }),

/***/ "./node_modules/token-types/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/token-types/lib/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// A fast streaming parser library.
Object.defineProperty(exports, "__esModule", { value: true });
var assert = __webpack_require__(/*! assert */ "assert");
// Possibly call flush()
var maybeFlush = function (b, o, len, flush) {
    if (o + len > b.length) {
        if (typeof (flush) !== "function") {
            throw new Error("Buffer out of space and no valid flush() function found");
        }
        flush(b, o);
        return 0;
    }
    return o;
};
// Primitive types
/**
 * 8-bit unsigned integer
 */
exports.UINT8 = {
    len: 1,
    get: function (buf, off) {
        return buf.readUInt8(off);
    },
    put: function (b, o, v, flush) {
        assert.equal(typeof o, "number");
        assert.equal(typeof v, "number");
        assert.ok(v >= 0 && v <= 0xff);
        assert.ok(o >= 0);
        assert.ok(this.len <= b.length);
        var no = maybeFlush(b, o, this.len, flush);
        b.writeUInt8(v, no);
        return (no - o) + this.len;
    }
};
/**
 * 16-bit unsigned integer, Little Endian byte order
 */
exports.UINT16_LE = {
    len: 2,
    get: function (buf, off) {
        return buf.readUInt16LE(off);
    },
    put: function (b, o, v, flush) {
        assert.equal(typeof o, "number");
        assert.equal(typeof v, "number");
        assert.ok(v >= 0 && v <= 0xffff);
        assert.ok(o >= 0);
        assert.ok(this.len <= b.length);
        var no = maybeFlush(b, o, this.len, flush);
        b.writeUInt16LE(v, no);
        return (no - o) + this.len;
    }
};
/**
 * 16-bit unsigned integer, Big Endian byte order
 */
exports.UINT16_BE = {
    len: 2,
    get: function (buf, off) {
        return buf.readUInt16BE(off);
    },
    put: function (b, o, v, flush) {
        assert.equal(typeof o, "number");
        assert.equal(typeof v, "number");
        assert.ok(v >= 0 && v <= 0xffff);
        assert.ok(o >= 0);
        assert.ok(this.len <= b.length);
        var no = maybeFlush(b, o, this.len, flush);
        b.writeUInt16BE(v, no);
        return (no - o) + this.len;
    }
};
/**
 * 24-bit unsigned integer, Little Endian byte order
 */
exports.UINT24_LE = {
    len: 3,
    get: function (buf, off) {
        return buf.readUIntLE(off, 3);
    },
    put: function (b, o, v, flush) {
        assert.equal(typeof o, "number");
        assert.equal(typeof v, "number");
        assert.ok(v >= 0 && v <= 0xffffff);
        assert.ok(o >= 0);
        assert.ok(this.len <= b.length);
        var no = maybeFlush(b, o, this.len, flush);
        b.writeUIntLE(v, no, 3);
        return (no - o) + this.len;
    }
};
/**
 * 24-bit unsigned integer, Big Endian byte order
 */
exports.UINT24_BE = {
    len: 3,
    get: function (buf, off) {
        return buf.readUIntBE(off, 3);
    },
    put: function (b, o, v, flush) {
        assert.equal(typeof o, "number");
        assert.equal(typeof v, "number");
        assert.ok(v >= 0 && v <= 0xffffff);
        assert.ok(o >= 0);
        assert.ok(this.len <= b.length);
        var no = maybeFlush(b, o, this.len, flush);
        b.writeUIntBE(v, no, 3);
        return (no - o) + this.len;
    }
};
/**
 * 32-bit unsigned integer, Little Endian byte order
 */
exports.UINT32_LE = {
    len: 4,
    get: function (buf, off) {
        return buf.readUInt32LE(off);
    },
    put: function (b, o, v, flush) {
        assert.equal(typeof o, "number");
        assert.equal(typeof v, "number");
        assert.ok(v >= 0 && v <= 0xffffffff);
        assert.ok(o >= 0);
        assert.ok(this.len <= b.length);
        var no = maybeFlush(b, o, this.len, flush);
        b.writeUInt32LE(v, no);
        return (no - o) + this.len;
    }
};
/**
 * 32-bit unsigned integer, Big Endian byte order
 */
exports.UINT32_BE = {
    len: 4,
    get: function (buf, off) {
        return buf.readUInt32BE(off);
    },
    put: function (b, o, v, flush) {
        assert.equal(typeof o, "number");
        assert.equal(typeof v, "number");
        assert.ok(v >= 0 && v <= 0xffffffff);
        assert.ok(o >= 0);
        assert.ok(this.len <= b.length);
        var no = maybeFlush(b, o, this.len, flush);
        b.writeUInt32BE(v, no);
        return (no - o) + this.len;
    }
};
/**
 * 8-bit signed integer
 */
exports.INT8 = {
    len: 1,
    get: function (buf, off) {
        return buf.readInt8(off);
    },
    put: function (b, o, v, flush) {
        assert.equal(typeof o, "number");
        assert.equal(typeof v, "number");
        assert.ok(v >= -128 && v <= 127);
        assert.ok(o >= 0);
        assert.ok(this.len <= b.length);
        var no = maybeFlush(b, o, this.len, flush);
        b.writeInt8(v, no);
        return (no - o) + this.len;
    }
};
/**
 * 16-bit signed integer, Big Endian byte order
 */
exports.INT16_BE = {
    len: 2,
    get: function (buf, off) {
        return buf.readInt16BE(off);
    },
    put: function (b, o, v, flush) {
        assert.equal(typeof o, "number");
        assert.equal(typeof v, "number");
        assert.ok(v >= -32768 && v <= 32767);
        assert.ok(o >= 0);
        assert.ok(this.len <= b.length);
        var no = maybeFlush(b, o, this.len, flush);
        b.writeInt16BE(v, no);
        return (no - o) + this.len;
    }
};
/**
 * 16-bit signed integer, Little Endian byte order
 */
exports.INT16_LE = {
    len: 2,
    get: function (buf, off) {
        return buf.readInt16LE(off);
    },
    put: function (b, o, v, flush) {
        assert.equal(typeof o, "number");
        assert.equal(typeof v, "number");
        assert.ok(v >= -32768 && v <= 32767);
        assert.ok(o >= 0);
        assert.ok(this.len <= b.length);
        var no = maybeFlush(b, o, this.len, flush);
        b.writeInt16LE(v, no);
        return (no - o) + this.len;
    }
};
/**
 * 24-bit signed integer, Little Endian byte order
 */
exports.INT24_LE = {
    len: 3,
    get: function (buf, off) {
        return buf.readIntLE(off, 3);
    },
    put: function (b, o, v, flush) {
        assert.equal(typeof o, "number");
        assert.equal(typeof v, "number");
        assert.ok(v >= -0x800000 && v <= 0x7fffff);
        assert.ok(o >= 0);
        assert.ok(this.len <= b.length);
        var no = maybeFlush(b, o, this.len, flush);
        b.writeIntLE(v, no, 3);
        return (no - o) + this.len;
    }
};
/**
 * 24-bit signed integer, Big Endian byte order
 */
exports.INT24_BE = {
    len: 3,
    get: function (buf, off) {
        return buf.readIntBE(off, 3);
    },
    put: function (b, o, v, flush) {
        assert.equal(typeof o, "number");
        assert.equal(typeof v, "number");
        assert.ok(v >= -0x800000 && v <= 0x7fffff);
        assert.ok(o >= 0);
        assert.ok(this.len <= b.length);
        var no = maybeFlush(b, o, this.len, flush);
        b.writeIntBE(v, no, 3);
        return (no - o) + this.len;
    }
};
/**
 * 32-bit signed integer, Big Endian byte order
 */
exports.INT32_BE = {
    len: 4,
    get: function (buf, off) {
        return buf.readInt32BE(off);
    },
    put: function (b, o, v, flush) {
        assert.equal(typeof o, "number");
        assert.equal(typeof v, "number");
        assert.ok(v >= -2147483648 && v <= 2147483647);
        assert.ok(o >= 0);
        assert.ok(this.len <= b.length);
        var no = maybeFlush(b, o, this.len, flush);
        b.writeInt32BE(v, no);
        return (no - o) + this.len;
    }
};
/**
 * 32-bit signed integer, Big Endian byte order
 */
exports.INT32_LE = {
    len: 4,
    get: function (buf, off) {
        return buf.readInt32LE(off);
    },
    put: function (b, o, v, flush) {
        assert.equal(typeof o, "number");
        assert.equal(typeof v, "number");
        assert.ok(v >= -2147483648 && v <= 2147483647);
        assert.ok(o >= 0);
        assert.ok(this.len <= b.length);
        var no = maybeFlush(b, o, this.len, flush);
        b.writeInt32LE(v, no);
        return (no - o) + this.len;
    }
};
/**
 * Ignore a given number of bytes
 */
var IgnoreType = /** @class */ (function () {
    /**
     * @param len number of bytes to ignore
     */
    function IgnoreType(len) {
        this.len = len;
    }
    // ToDo: don't read, but skip data
    IgnoreType.prototype.get = function (buf, off) {
        return null;
    };
    return IgnoreType;
}());
exports.IgnoreType = IgnoreType;
var BufferType = /** @class */ (function () {
    function BufferType(len) {
        this.len = len;
    }
    BufferType.prototype.get = function (buf, off) {
        return buf.slice(off, off + this.len);
    };
    return BufferType;
}());
exports.BufferType = BufferType;
/**
 * Consume a fixed number of bytes from the stream and return a string with a specified encoding.
 */
var StringType = /** @class */ (function () {
    function StringType(len, encoding) {
        this.len = len;
        this.encoding = encoding;
    }
    StringType.prototype.get = function (buf, off) {
        return buf.toString(this.encoding, off, off + this.len);
    };
    return StringType;
}());
exports.StringType = StringType;
/**
 * ANSI Latin 1 String
 * Using windows-1252 / ISO 8859-1 decoding
 */
var AnsiStringType = /** @class */ (function () {
    function AnsiStringType(len) {
        this.len = len;
    }
    AnsiStringType.decode = function (buffer, off, until) {
        var str = "";
        for (var i = off; i < until; ++i) {
            str += AnsiStringType.codePointToString(AnsiStringType.singleByteDecoder(buffer[i]));
        }
        return str;
    };
    AnsiStringType.inRange = function (a, min, max) {
        return min <= a && a <= max;
    };
    AnsiStringType.codePointToString = function (cp) {
        if (cp <= 0xFFFF) {
            return String.fromCharCode(cp);
        }
        else {
            cp -= 0x10000;
            return String.fromCharCode((cp >> 10) + 0xD800, (cp & 0x3FF) + 0xDC00);
        }
    };
    AnsiStringType.singleByteDecoder = function (bite) {
        if (AnsiStringType.inRange(bite, 0x00, 0x7F)) {
            return bite;
        }
        var codePoint = AnsiStringType.windows1252[bite - 0x80];
        if (codePoint === null) {
            throw Error("invaliding encoding");
        }
        return codePoint;
    };
    AnsiStringType.prototype.get = function (buf, off) {
        if (off === void 0) { off = 0; }
        return AnsiStringType.decode(buf, off, off + this.len);
    };
    AnsiStringType.windows1252 = [8364, 129, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352,
        8249, 338, 141, 381, 143, 144, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732,
        8482, 353, 8250, 339, 157, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168,
        169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184,
        185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200,
        201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216,
        217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232,
        233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247,
        248, 249, 250, 251, 252, 253, 254, 255];
    return AnsiStringType;
}());
exports.AnsiStringType = AnsiStringType;


/***/ }),

/***/ "./node_modules/universalify/index.js":
/*!********************************************!*\
  !*** ./node_modules/universalify/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.fromCallback = function (fn) {
  return Object.defineProperty(function () {
    if (typeof arguments[arguments.length - 1] === 'function') fn.apply(this, arguments)
    else {
      return new Promise((resolve, reject) => {
        arguments[arguments.length] = (err, res) => {
          if (err) return reject(err)
          resolve(res)
        }
        arguments.length++
        fn.apply(this, arguments)
      })
    }
  }, 'name', { value: fn.name })
}

exports.fromPromise = function (fn) {
  return Object.defineProperty(function () {
    const cb = arguments[arguments.length - 1]
    if (typeof cb !== 'function') return fn.apply(this, arguments)
    else fn.apply(this, arguments).then(r => cb(null, r), cb)
  }, 'name', { value: fn.name })
}


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./sass/style.sass":
/*!*************************!*\
  !*** ./sass/style.sass ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/sass-loader/lib/loader.js!./style.sass */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./sass/style.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),

/***/ "constants":
/*!****************************!*\
  !*** external "constants" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("constants");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tty");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map