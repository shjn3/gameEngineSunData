/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/add/Add.ts":
/*!************************!*\
  !*** ./src/add/Add.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Add = /** @class */ (function () {\r\n    function Add(canvas, ctx, arrImage, imageSprites) {\r\n        if (arrImage === void 0) { arrImage = []; }\r\n        if (imageSprites === void 0) { imageSprites = []; }\r\n        this.canvas = canvas;\r\n        this.ctx = ctx;\r\n        this.arrImage = arrImage;\r\n        this.imageSprites = imageSprites;\r\n    }\r\n    Add.prototype.image = function (x, y, width, height, nameImage) {\r\n        var _image = this.arrImage.filter(function (_e) { return _e.name === nameImage; });\r\n        if (_image) {\r\n            _image[0].setPosition(x, y);\r\n            _image[0].setWidth(width);\r\n            _image[0].setHeight(height);\r\n            var mainImage = new Image();\r\n            mainImage.src = \"./assets/sprite.png\";\r\n            console.log(mainImage);\r\n            this.ctx.drawImage(mainImage, this.canvas.width / 2, this.canvas.height / 2, 100, 100);\r\n        }\r\n    };\r\n    Add.prototype.sprite = function (x, y, width, height) {\r\n        console.log(this.arrImage);\r\n    };\r\n    return Add;\r\n}());\r\nexports[\"default\"] = Add;\r\n\n\n//# sourceURL=webpack://gameengine/./src/add/Add.ts?");

/***/ }),

/***/ "./src/base/_Object.ts":
/*!*****************************!*\
  !*** ./src/base/_Object.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar _Object = /** @class */ (function () {\r\n    function _Object() {\r\n        this.width = 0;\r\n        this.height = 0;\r\n        this.position = {\r\n            x: 0,\r\n            y: 0,\r\n        };\r\n    }\r\n    _Object.prototype.setPosition = function (x, y) {\r\n        this.position = {\r\n            x: x,\r\n            y: y,\r\n        };\r\n    };\r\n    _Object.prototype.setWidth = function (width) {\r\n        this.width = width;\r\n    };\r\n    _Object.prototype.setHeight = function (height) {\r\n        this.height = height;\r\n    };\r\n    return _Object;\r\n}());\r\nexports[\"default\"] = _Object;\r\n\n\n//# sourceURL=webpack://gameengine/./src/base/_Object.ts?");

/***/ }),

/***/ "./src/game/Game.ts":
/*!**************************!*\
  !*** ./src/game/Game.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __rest = (this && this.__rest) || function (s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\r\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\r\n                t[p[i]] = s[p[i]];\r\n        }\r\n    return t;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar config_1 = __webpack_require__(/*! ../utils/config */ \"./src/utils/config.ts\");\r\nvar Game = /** @class */ (function () {\r\n    function Game(config) {\r\n        var width = config.width, height = config.height, parent = config.parent, configScenes = __rest(config, [\"width\", \"height\", \"parent\"]);\r\n        this.canvas = (document.querySelector(\"#\" + parent + \" canvas\"));\r\n        this.ctx = this.canvas.getContext(\"2d\");\r\n        this.canvas.width = width;\r\n        this.canvas.height = height;\r\n        this._status = config_1.gameStart;\r\n        this._Scenes = new config.create(this.canvas, this.ctx);\r\n    }\r\n    Game.prototype.draw = function () { };\r\n    Game.prototype.update = function () {\r\n        this.over();\r\n    };\r\n    Game.prototype.start = function () {\r\n        this.animation();\r\n    };\r\n    Game.prototype.over = function () {\r\n        this.start();\r\n    };\r\n    Game.prototype.animation = function () {\r\n        requestAnimationFrame(this.animation);\r\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n        this.draw();\r\n        this.update();\r\n    };\r\n    return Game;\r\n}());\r\nexports[\"default\"] = Game;\r\n\n\n//# sourceURL=webpack://gameengine/./src/game/Game.ts?");

/***/ }),

/***/ "./src/image/imageObject.ts":
/*!**********************************!*\
  !*** ./src/image/imageObject.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar _Object_1 = __importDefault(__webpack_require__(/*! ../base/_Object */ \"./src/base/_Object.ts\"));\r\nvar imageObject = /** @class */ (function (_super) {\r\n    __extends(imageObject, _super);\r\n    function imageObject() {\r\n        var _this = _super.call(this) || this;\r\n        _this.url = \"\";\r\n        _this.name = \"\";\r\n        return _this;\r\n    }\r\n    imageObject.prototype.setName = function (name) {\r\n        this.name = name;\r\n    };\r\n    imageObject.prototype.setUrl = function (url) {\r\n        this.url = url;\r\n    };\r\n    return imageObject;\r\n}(_Object_1.default));\r\nexports[\"default\"] = imageObject;\r\n\n\n//# sourceURL=webpack://gameengine/./src/image/imageObject.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Game_1 = __importDefault(__webpack_require__(/*! ./game/Game */ \"./src/game/Game.ts\"));\r\nvar Scenes_1 = __importDefault(__webpack_require__(/*! ./scenes/Scenes */ \"./src/scenes/Scenes.ts\"));\r\nvar test = /** @class */ (function (_super) {\r\n    __extends(test, _super);\r\n    function test(canvas, ctx) {\r\n        var _this = _super.call(this, canvas, ctx) || this;\r\n        _this.create();\r\n        return _this;\r\n    }\r\n    test.prototype.create = function () {\r\n        this._load.image(\"btnStart\", \"./assets/PlayButton.png\");\r\n        this._load.sprite(\"sprites\", \"./assets/sprite.png\");\r\n        this._add.image(0, 0, 50, 50, \"btnStart\");\r\n        /*this._input.keyboard.on(\"keydown-ArrowUp\", () => {\r\n          console.log(\"abc\");\r\n        });\r\n        this._input.keyboard.on(\"keydown- \", () => {\r\n          console.log(\"space\");\r\n        });\r\n        this._input.mouse.on((event: MouseEvent) => {\r\n          console.log(\"left mouse\");\r\n        });*/\r\n    };\r\n    return test;\r\n}(Scenes_1.default));\r\nvar config = {\r\n    width: 800,\r\n    height: 400,\r\n    parent: \"parentCanvas\",\r\n    create: test,\r\n};\r\nvar _game = new Game_1.default(config);\r\n/*class test extends Game {\r\n  constructor(config: any) {\r\n    super(config);\r\n    this.create();\r\n  }\r\n  create() {\r\n    this.load.image(\"btnStart\", \"assets/PlayButton.png\");\r\n    this.load.sprite(\"sprites\", \"assets/sprite.png\");\r\n    this.add.sprite(0, 0, 50, 50);\r\n    this._input.keyboard.on(\"keydown-ArrowUp\", () => {\r\n      console.log(\"abc\");\r\n    });\r\n    this._input.keyboard.on(\"keydown- \", () => {\r\n      console.log(\"space\");\r\n    });\r\n    this._input.mouse.on((event: MouseEvent) => {\r\n      console.log(\"left mouse\");\r\n    });\r\n  }\r\n}\r\n\r\nlet _test = new test(config);*/\r\nfunction create() {\r\n    //initialize\r\n    _game._Scenes._load.image(\"btnStart\", \"assets/PlayButton.png\");\r\n    _game._Scenes._add.image(0, 0, 50, 50, \"btnStart\");\r\n    //set Event Input\r\n    /*_game._Scenes._input.keyboard.on(\"keydown-ArrowUp\", () => {\r\n      console.log(\"abc\");\r\n    });\r\n    _game._Scenes._input.keyboard.on(\"keydown- \", () => {\r\n      console.log(\"space\");\r\n    });\r\n    _game._Scenes._input.mouse.on((event: MouseEvent) => {\r\n      console.log(\"left mouse\");\r\n    });*/\r\n}\r\nfunction update() { }\r\n\n\n//# sourceURL=webpack://gameengine/./src/index.ts?");

/***/ }),

/***/ "./src/loader/Load.ts":
/*!****************************!*\
  !*** ./src/loader/Load.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar imageObject_1 = __importDefault(__webpack_require__(/*! ../image/imageObject */ \"./src/image/imageObject.ts\"));\r\nvar Load = /** @class */ (function () {\r\n    function Load(arrImage, imageSprite) {\r\n        this.arrImage = arrImage;\r\n        this.imageSprite = imageSprite;\r\n    }\r\n    Load.prototype.image = function (name, url) {\r\n        var image = new imageObject_1.default();\r\n        image.setName(name);\r\n        image.setUrl(url);\r\n        this.arrImage.push(image);\r\n    };\r\n    Load.prototype.sprite = function (name, url) {\r\n        var imageSprite = new imageObject_1.default();\r\n        imageSprite.setName(name);\r\n        imageSprite.setUrl(url);\r\n        this.imageSprite.push(imageSprite);\r\n    };\r\n    return Load;\r\n}());\r\nexports[\"default\"] = Load;\r\n\n\n//# sourceURL=webpack://gameengine/./src/loader/Load.ts?");

/***/ }),

/***/ "./src/scenes/Scenes.ts":
/*!******************************!*\
  !*** ./src/scenes/Scenes.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Load_1 = __importDefault(__webpack_require__(/*! ../loader/Load */ \"./src/loader/Load.ts\"));\r\nvar Add_1 = __importDefault(__webpack_require__(/*! ../add/Add */ \"./src/add/Add.ts\"));\r\nvar Scenes = /** @class */ (function () {\r\n    function Scenes(canvas, ctx) {\r\n        this.arrImage = [];\r\n        this.imageSprites = [];\r\n        this._load = new Load_1.default(this.arrImage, this.imageSprites);\r\n        this._add = new Add_1.default(canvas, ctx, this.arrImage, this.imageSprites);\r\n    }\r\n    Scenes.prototype.draw = function () { };\r\n    Scenes.prototype.update = function () {\r\n        this.over();\r\n    };\r\n    Scenes.prototype.start = function () {\r\n        this.animation();\r\n    };\r\n    Scenes.prototype.over = function () {\r\n        this.start();\r\n    };\r\n    Scenes.prototype.animation = function () {\r\n        requestAnimationFrame(this.animation);\r\n        //this.canvas.getContext('2d').clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n        this.draw();\r\n        this.update();\r\n    };\r\n    return Scenes;\r\n}());\r\nexports[\"default\"] = Scenes;\r\n\n\n//# sourceURL=webpack://gameengine/./src/scenes/Scenes.ts?");

/***/ }),

/***/ "./src/utils/config.ts":
/*!*****************************!*\
  !*** ./src/utils/config.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.gameOver = exports.gameStart = exports.gamePlay = void 0;\r\nexports.gamePlay = 1;\r\nexports.gameStart = 0;\r\nexports.gameOver = 2;\r\n\n\n//# sourceURL=webpack://gameengine/./src/utils/config.ts?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;