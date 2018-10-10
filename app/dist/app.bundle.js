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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/app.js":
/*!********************!*\
  !*** ./app/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _klondike_scoring_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./klondike/scoring.js */ \"./app/klondike/scoring.js\");\n/* harmony import */ var _klondike_scoring_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_klondike_scoring_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _klondike_klondike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./klondike/klondike.js */ \"./app/klondike/klondike.js\");\n/* harmony import */ var _klondike_klondike_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_klondike_klondike_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _klondike_board_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./klondike/board.js */ \"./app/klondike/board.js\");\n/* harmony import */ var _klondike_board_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_klondike_board_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _klondike_game_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./klondike/game.js */ \"./app/klondike/game.js\");\n/* harmony import */ var _klondike_game_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_klondike_game_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nangular.module(\"solitaire\", [\"klondike\", \"ngDraggable\"]);\n\n\n\n//# sourceURL=webpack:///./app/app.js?");

/***/ }),

/***/ "./app/klondike/board.js":
/*!*******************************!*\
  !*** ./app/klondike/board.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  \"use strict\";\n\n  angular.module(\"klondike.board\", [\"ngRoute\", \"klondike.game\"])\n    .config([\"$routeProvider\", function ($routeProvider) {\n      $routeProvider\n        .when(\"/board\", {\n          templateUrl: \"klondike/board.html\",\n          controller: \"KlondikeController\"\n        })\n        .otherwise({redirectTo: \"/board\"});\n    }])\n    .controller(\"KlondikeController\", [\"$scope\", \"klondikeGame\", \"scoring\", function KlondikeController($scope, klondikeGame, scoring) {\n      klondikeGame.newGame();\n      $scope.game = klondikeGame;\n      $scope.scoring = scoring;\n    }])\n    .directive(\"sNoPile\", function () {\n      return {\n        restrict: \"E\",\n        template: \"<div class=\\\"no-pile\\\"></div>\"\n      };\n    })\n    .directive(\"sTableau\", function () {\n      return {\n        restrict: \"E\",\n        templateUrl: \"klondike/piles/tableau.html\"\n      };\n    })\n    .directive(\"sFoundation\", function () {\n      return {\n        restrict: \"E\",\n        templateUrl: \"klondike/piles/foundation.html\"\n      };\n    })\n    .directive(\"sCard\", function () {\n      return {\n        restrict: \"A\",\n        templateUrl: \"cards/card.html\",\n        scope: {\n          card: \"=\"\n        }\n      };\n    })\n    .directive(\"sRemainder\", function () {\n      return {\n        restrict: \"E\",\n        templateUrl: \"klondike/piles/remainder.html\"\n      };\n    })\n    .directive(\"sWaste\", function () {\n      return {\n        restrict: \"E\",\n        templateUrl: \"klondike/piles/waste.html\"\n      };\n    });\n})();\n\n\n//# sourceURL=webpack:///./app/klondike/board.js?");

/***/ }),

/***/ "./app/klondike/game.js":
/*!******************************!*\
  !*** ./app/klondike/game.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  \"use strict\";\n\n  angular.module(\"klondike.game\", [])\n    .service(\"klondikeGame\", [\"scoring\", KlondikeGame]);\n\n  function KlondikeGame(scoring) {\n    this.newGame = function newGame() {\n      var cards = new Deck().shuffled();\n      this.newGameFromDeck(cards);\n    };\n\n    this.newGameFromDeck = function (cards) {\n      scoring.newGame();\n      turnAllCardsDown(cards);\n      this.tableaus = dealTableaus(cards);\n      this.foundations = buildFoundations();\n      this.remainder = dealRemainder(cards);\n    };\n\n    function turnAllCardsDown(cards) {\n      cards.forEach(function (card) {\n        card.turnDown();\n      });\n    }\n\n    function dealTableaus(cards) {\n      var tableaus = [\n        new TableauPile(cards.slice(0, 1), scoring),\n        new TableauPile(cards.slice(1, 3), scoring),\n        new TableauPile(cards.slice(3, 6), scoring),\n        new TableauPile(cards.slice(6, 10), scoring),\n        new TableauPile(cards.slice(10, 15), scoring),\n        new TableauPile(cards.slice(15, 21), scoring),\n        new TableauPile(cards.slice(21, 28), scoring)\n      ];\n      tableaus.forEach(function (tableau) {\n        tableau.turnTopCardUp();\n      });\n      return tableaus;\n    }\n\n    function buildFoundations() {\n      return _.range(1, 5)\n        .map(function () {\n          return new FoundationPile([], scoring);\n        });\n    }\n\n    function dealRemainder(cards) {\n      return new RemainderPile(cards.slice(28), scoring);\n    }\n  }\n\n  KlondikeGame.prototype.tryMoveTopCardToAnyFoundation = function (sourcePile) {\n    if (sourcePile.isEmpty()) {\n      return;\n    }\n    var foundationThatWillAccept = _.find(this.foundations, function (foundation) {\n      return foundation.willAcceptCard(sourcePile.topCard());\n    });\n    if (foundationThatWillAccept) {\n      foundationThatWillAccept.moveCardsFrom(sourcePile);\n    }\n  };\n\n})();\n\n\n//# sourceURL=webpack:///./app/klondike/game.js?");

/***/ }),

/***/ "./app/klondike/klondike.js":
/*!**********************************!*\
  !*** ./app/klondike/klondike.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("angular.module(\"klondike\", [\n  \"klondike.game\",\n  \"klondike.board\",\n  \"klondike.scoring\"\n]);\n\n\n//# sourceURL=webpack:///./app/klondike/klondike.js?");

/***/ }),

/***/ "./app/klondike/scoring.js":
/*!*********************************!*\
  !*** ./app/klondike/scoring.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("angular.module(\"klondike.scoring\", [])\n  .service(\"scoring\", [function Scoring() {\n    \"use strict\";\n\n    this.score = 0;\n\n    this.newGame = function () {\n      this.score = 0;\n    };\n    this.tableauCardTurnedUp = function () {\n      this.score += 5;\n    };\n    this.dropped = function (source, destionation) {\n      this.score += scoreForMoving(source, destionation) || 0;\n    };\n    this.wasteRecycled = function () {\n      this.score = Math.max(this.score - 100, 0);\n    };\n\n    function scoreForMoving(source, destionation) {\n      if (destionation.name === \"TableauPile\") {\n        if (source.name === \"FoundationPile\") {\n          return -15;\n        }\n        return 5;\n      }\n      if (destionation.name === \"FoundationPile\") {\n        if (source.name === \"TableauPile\" || source.name === \"WastePile\") {\n          return 10;\n        }\n      }\n    }\n  }]);\n\n\n//# sourceURL=webpack:///./app/klondike/scoring.js?");

/***/ })

/******/ });