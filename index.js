(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	__webpack_require__(4);
	
	__webpack_require__(8);
	
	__webpack_require__(10);
	
	__webpack_require__(15);
	
	__webpack_require__(17);
	
	__webpack_require__(19);
	
	__webpack_require__(21);
	
	__webpack_require__(23);
	
	__webpack_require__(25);
	
	__webpack_require__(27);
	
	__webpack_require__(29);
	
	var _run = __webpack_require__(31);
	
	var _run2 = _interopRequireDefault(_run);
	
	var _MainPokemon = __webpack_require__(39);
	
	var _MainPokemon2 = _interopRequireDefault(_MainPokemon);
	
	var _PokemonFamily = __webpack_require__(42);
	
	var _PokemonFamily2 = _interopRequireDefault(_PokemonFamily);
	
	var _Morph = __webpack_require__(45);
	
	var _Morph2 = _interopRequireDefault(_Morph);
	
	var _PokemonSearch = __webpack_require__(46);
	
	var _PokemonSearch2 = _interopRequireDefault(_PokemonSearch);
	
	var _PokemonAbilities = __webpack_require__(47);
	
	var _PokemonAbilities2 = _interopRequireDefault(_PokemonAbilities);
	
	var _PokemonMultipliers = __webpack_require__(48);
	
	var _PokemonMultipliers2 = _interopRequireDefault(_PokemonMultipliers);
	
	var _PokemonHeldItems = __webpack_require__(49);
	
	var _PokemonHeldItems2 = _interopRequireDefault(_PokemonHeldItems);
	
	var _pokemonFilterStartFilter = __webpack_require__(50);
	
	var _pokemonFilterStartFilter2 = _interopRequireDefault(_pokemonFilterStartFilter);
	
	var _pokemonFilter = __webpack_require__(51);
	
	var _pokemonFilter2 = _interopRequireDefault(_pokemonFilter);
	
	var _multiFilter = __webpack_require__(52);
	
	var _multiFilter2 = _interopRequireDefault(_multiFilter);
	
	var _imageonloadDirective = __webpack_require__(53);
	
	var _imageonloadDirective2 = _interopRequireDefault(_imageonloadDirective);
	
	var _getInfoFactory = __webpack_require__(54);
	
	var _getInfoFactory2 = _interopRequireDefault(_getInfoFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(55);
	__webpack_require__(56);
	
	var runtime = __webpack_require__(57);
	
	runtime.install({
	  onUpdating: function onUpdating() {
	    console.log('SW Event:', 'onUpdating');
	  },
	  onUpdateReady: function onUpdateReady() {
	    console.log('SW Event:', 'onUpdateReady');
	    // Tells to new SW to take control immediately
	    runtime.applyUpdate();
	  },
	  onUpdated: function onUpdated() {
	    console.log('SW Event:', 'onUpdated');
	    // Reload the webpage to load into the new version
	    window.location.reload();
	  },
	
	  onUpdateFailed: function onUpdateFailed() {
	    console.log('SW Event:', 'onUpdateFailed');
	  }
	});
	
	angular.module('App', ['ngAnimate', 'ngStorage']).run(_run2.default).controller('MainPokemon', _MainPokemon2.default).controller('PokemonFamily', _PokemonFamily2.default).controller('Morph', _Morph2.default).controller('PokemonSearch', _PokemonSearch2.default).controller('PokemonAbilities', _PokemonAbilities2.default).controller('PokemonMultipliers', _PokemonMultipliers2.default).controller('PokemonHeldItems', _PokemonHeldItems2.default).filter('pokemonFilterStart', _pokemonFilterStartFilter2.default).filter('pokemonFilter', _pokemonFilter2.default).filter('multi', _multiFilter2.default).directive('imageonload', _imageonloadDirective2.default).factory('getInfoFactory', _getInfoFactory2.default);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<html lang=\"\" ng-app=\"App\">\n    <head>\n        <meta charset=\"utf-8\">\n        <meta name=\"description\" content=\"Pokemons at their maximum level\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0\">\n\n        <meta name=\"theme-color\" content=\"#282b30\">\n        <meta name=\"msapplication-navbutton-color\" content=\"#282b30\">\n        <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"#282b30\">\n\n        <meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\n        <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"#282b30\">\n        <meta name=\"apple-mobile-web-app-title\" content=\"Colosseum\">\n        <meta name=\"msapplication-TileImage\" content=\"images/icons/launcher-192.png\">\n        <meta name=\"msapplication-TileColor\" content=\"#3f51b5\">\n\n        <title>Colosseum</title>\n\n        <link rel=\"manifest\" href=\"manifest.json\">\n        <link rel=\"shortcut icon\" href=\"images/icons/favicon.ico\">\n        <link rel=\"apple-touch-icon\" href=\"images/icons/apple-touch-icon.png\">\n        <link rel=\"icon\" sizes=\"192x192\" href=\"images/icons/launcher-192.png\">\n\n        <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>\n\n        <script data-apikey=\"a5c9247914387e79f30123dac3f6835c\" src=\"https://d2wy8f7a9ursnm.cloudfront.net/bugsnag-3.min.js\" async defer></script>\n        <script src=\"https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.7/angular.min.js\"></script>\n        <script src=\"https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.7/angular-animate.min.js\"></script>\n        <script src=\"https://cdnjs.cloudflare.com/ajax/libs/ngStorage/0.3.6/ngStorage.min.js\"></script>\n        <script src=\"https://cdnjs.cloudflare.com/ajax/libs/color-thief/2.0.1/color-thief.min.js\"></script>\n    </head>\n  <body class=\"bgColor\">\n    <!--[if lt IE 8]>\n        <p class=\"browserupgrade\">You are using an <strong>outdated</strong> browser. Please <a href=\"http://browsehappy.com/\">upgrade your browser</a> to improve your experience.</p>\n    <![endif]-->\n    <div class=\"container\">\n        <div class=\"loadingContainer fadeout\" ng-show=\"!loaded\">\n            <div class=\"loader\">\n                <div class=\"loader-wrapper\">\n                    <div class=\"infiniteLoader\">\n                        <div class=\"roller first\"></div>\n                        <div class=\"roller first\"></div>\n                    </div>\n                    <div id=\"loader2\" class=\"infiniteLoader\">\n                        <div class=\"roller second\"></div>\n                        <div class=\"roller second\"></div>\n                    </div>\n                    <div id=\"loader3\" class=\"infiniteLoader\">\n                        <div class=\"roller third\"></div>\n                        <div class=\"roller third\"></div>\n                    </div>\n                </div>\n                <div class=\"quote\">{{ ::quote }}</div>\n                <div class=\"quoteBy\">\n                    <i>\n                        <div class=\"by inline\">By</div>\n                        <div class=\"author inline\">@{{ ::quoteAuthor }}</div>\n                    </i>\n                </div>\n                <div class=\"status\">{{ status }}</div>\n            </div>\n        </div>\n        <div class=\"mainContainer container\" ng-class=\"{ animation : loaded && !animationsEnded, animationEnded : animationsEnded }\" ng-controller=\"MainPokemon\">\n            <div class=\"logo to-bottom-logo delay-3\">\n                <img src=\"" + __webpack_require__(2) + "\" ng-click=\"reloadHome()\">\n            </div>\n            <div class=\"innerContainer\">\n                <div class=\"pokemonImage to-scale delay-1\">\n                    <div class=\"jp thirdyColor\">{{ ::jp}}</div>\n                    <img ng-src=\"{{ ::imageUrl }}\" imageonload=\"unveil()\">\n                </div>\n                <div class=\"pokemonStats\">\n                    <div class=\"pokemonVCard to-left\">\n                        <div class=\"pokemonGenere secondaryColor\">{{ ::genere }}</div>\n                        <div class=\"pokemonName primaryColor borderColor\">{{ ::up(currentPokemon.name) }}</div>\n                        <div class=\"pokemonId\">{{ ::currentPokemon.id }}</div>\n                        <div class=\"pokemonTypesContainer\">\n                            <div class=\"pokemonTypes \">\n                                <ul>\n                                    <li class=\"padded inline\" ng-repeat=\"type in typeUrls\">\n                                        <img class=\"pokemonTypeVc\" ng-src=\"{{ ::type }}\">\n                                    </li>\n                                </ul>\n                            </div>\n                            <div class=\"padded pokemonHabitat primaryColor\">Loves to stay in {{ ::habitat }}s {{ ::happiness }}</div>\n                        </div>\n                    </div>\n                    <div class=\"to-fade\">\n                        <div class=\"pokemonHeight primaryColor verticalPadded\">Height {{ currentPokemon.height/10 }} meters</div>\n                        <div class=\"pokemonWeight primaryColor\">Weight {{ currentPokemon.weight/10 }} kilograms</div>\n                        <div class=\"pokemonBaseStats mediumSize\">\n                            <ul>\n                                <li ng-repeat=\"stat in currentPokemon.stats\" class=\"liStat\">\n                                    <div class=\"inline thirdyColor\">{{ ::up(stat.stat.name) }}</div>\n                                    <div class=\"inline padded\"> - </div>\n                                    <div class=\"inline secondaryColor\">{{ ::stat.base_stat }}</div>\n                                </li>\n                            </ul>\n                        </div>\n                        <div class=\"pokemonDescription primaryColor verticalPadded\">\n                            {{ ::description }}\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"secondaryContainer\">\n                <div class=\"pokemonAbilities to-top delay-1\" ng-controller=\"PokemonAbilities\">\n                    <div class=\"secondaryColor mediumSize primaryColor\">Abilities</div>\n                    <ul>\n                        <li class=\"padded verticalPadded thirdyColor tooltip\" ng-repeat=\"ability in currentPokemon.abilities\" ng-mouseover=\"getAbility(ability.ability.url)\">\n                            <span class=\"tooltip-item\">\n                                {{ ::up(ability.ability.name) }}\n                            </span>\n                            <span class=\"tooltip-content tooltipColor tooltip-onleft\">\n                                    <div class=\"sk-three-bounce\" ng-class=\"{ hidden : abilityDescription }\">\n                                        <div class=\"sk-child sk-bounce1\"></div>\n                                        <div class=\"sk-child sk-bounce2\"></div>\n                                        <div class=\"sk-child sk-bounce3\"></div>\n                                    </div>\n                                <span class=\"tooltip-text\" ng-class=\"{ hidden : !abilityDescription }\">\n                                    {{ abilityDescription }}\n                                </span>\n                            </span>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"pokemonFamily to-top delay-2\" ng-controller=\"PokemonFamily\">\n                    <div class=\"secondaryColor mediumSize primaryColor\">Family</div>\n                    <ul>\n                        <li class=\"padded verticalPadded inline\" ng-repeat=\"pokemon in members\">\n                            <img    ng-click=\"reloadWith(pokemon)\" \n                                    title=\"{{ ::getPokemonName(pokemon) }}\" \n                                    class=\"pokemonMember to-top\" \n                                    ng-src=\"{{ ::getImageUrl(pokemon) }}\" \n                                    style=\"transition-delay: {{($index + 4 * 3)/10}}s;\">\n                        </li>\n                    </ul>\n                </div>\n                <div    class=\"pokemonMultipliers to-top delay-3\" \n                        ng-class=\"{ switchMultiplier : $storage.multiplier }\" \n                        ng-controller=\"PokemonMultipliers\">\n                    <div class=\"secondaryColor mediumSize primaryColor pointer inline\">Multipliers</div>\n                    <div class=\"onoffswitch inline\">\n                        <input  type=\"checkbox\" \n                                name=\"onoffswitch\" \n                                class=\"onoffswitch-checkbox\" \n                                id=\"myonoffswitch\" \n                                ng-checked=\"!$storage.multiplier\" \n                                ng-click=\"$storage.multiplier = !$storage.multiplier\">\n                        <label class=\"onoffswitch-label\" for=\"myonoffswitch\">\n                            <span class=\"onoffswitch-inner\"></span>\n                            <span class=\"onoffswitch-switch\"></span>\n                        </label>\n                    </div>\n                    <ul class=\"multiplierAttack\">\n                        <li ng-repeat=\"multiplier in [0,0.25,0.5,1,2,4]\">\n                            <ul class=\"multiplierRow\">\n                                <li class=\"padded topPadded inline\" ng-repeat=\"(name, percentage) in multipliers.attack | multi:multiplier\">\n                                    <div class=\"centerAligned\">\n                                        <img class=\"topPadded inline pokemonType\" title=\"{{ ::name }}\" src=\"{{ ::getUrlType(name) }}\">\n                                        <div class=\"miniLabel thirdyColor\">x{{multiplier}}</div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </li>\n                    </ul>\n                    <ul class=\"multiplierDefense softHidden\">\n                        <li ng-repeat=\"multiplier in [0,0.25,0.5,1,2,4]\">\n                            <ul class=\"multiplierRow\">\n                                <li class=\"padded topPadded inline\" ng-repeat=\"(name, percentage) in multipliers.defense | multi:multiplier\">\n                                    <div class=\"centerAligned\">\n                                        <img class=\"topPadded inline pokemonType\" title=\"{{ ::name }}\" src=\"{{ ::getUrlType(name) }}\">\n                                        <div class=\"miniLabel thirdyColor\">x{{multiplier}}</div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </li>\n                    </ul>  \n                </div>\n                <div class=\"pokemonHeldItems to-top delay-4\" ng-controller=\"PokemonHeldItems\">\n                    <div class=\"secondaryColor mediumSize primaryColor\">Held Items</div>\n                    <ul>\n                        <li class=\"padded verticalPadded thirdyColor tooltip\" ng-repeat=\"item in currentPokemon.held_items\" ng-mouseover=\"getHeldItem(item.item.url)\">\n                            <div class=\"centerAligned\">\n                                <span class=\"tooltip-item\">\n                                    <img class=\"middleRow inline\" title=\"{{ ::item.item.name }}\" src=\"{{ ::getUrlItem(item.item.name) }}\">\n                                    <div class=\"padded inline\">\n                                        {{ ::up(item.item.name) }} with probability {{ ::getRarity(item) }}%\n                                    </div>\n                                </span>\n                                <span class=\"tooltip-content tooltipColor tooltip-onright\">\n                                    <div class=\"sk-three-bounce\" ng-class=\"{ hidden : heldItemDescription }\">\n                                        <div class=\"sk-child sk-bounce1\"></div>\n                                        <div class=\"sk-child sk-bounce2\"></div>\n                                        <div class=\"sk-child sk-bounce3\"></div>\n                                    </div>\n                                    <span class=\"tooltip-text\" ng-class=\"{ hidden : !heldItemDescription }\">\n                                        {{ heldItemDescription }}\n                                    </span>\n                                </span>\n                            </div>\n                        </li>\n                        <li class=\"padded verticalPadded thirdyColor\" ng-show=\"!currentPokemon.held_items.length\">None</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n            \n        <div ng-controller=\"Morph\">" + __webpack_require__(3) + "</div>\n        \n        <script>\n            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n            ga('create', 'UA-69090146-3', 'auto');\n            ga('send', 'pageview');\n        </script>\n    </div>\n    <!-- build:js scripts/vendor.js -->\n    <!-- bower:js -->\n    <!-- endbower -->\n    <!-- endbuild -->\n    \n    <!-- build:js scripts/main.js -->\n    <!-- <script src=\"index.js\"></script> -->\n    <!-- endbuild -->\n  </body>\n</html>\n";

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "master-ball71acd2e800d33bd5d964ec9f6fe199c7.svg";

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<div id=\"morphsearch\" class=\"morphsearch\" ng-controller=\"PokemonSearch\">\n    <div class=\"container morphContainer\">\n        <div class=\"searchContainer\">\n            <form class=\"morphsearch-form\">\n                <input class=\"morphsearch-input\" type=\"search\" ng-model=\"searchString\" placeholder=\"Search...\"/>\n                \n            </form>\n            <div class=\"morphsearch-content\">\n                <div class=\"dummy-column\">\n                    <h2>Starting with</h2>\n                    <li class=\"dummy-media-object\" ng-click=\"saveAndReload(pokemon)\" ng-repeat=\"pokemon in pokemons | pokemonFilterStart:searchString\">\n                        <a href=\"\">\n                            <img src=\"{{getImageUrl(pokemon)}}\" alt=\"{{pokemon}}\"/>\n                            <h3 class=\"inline\">{{up(pokemon)}}</h3>\n                            <h1 class=\"inline pokemonSearchId\">{{getPokemonId(pokemon)}}</h1>\n                        </a>\n                    </li>\n                </div>\n                <div class=\"dummy-column\">\n                    <h2>Results</h2>\n                    <li class=\"dummy-media-object\" ng-click=\"saveAndReload(pokemon)\" ng-repeat=\"pokemon in pokemons | pokemonFilter:searchString\">\n                        <a href=\"\">\n                            <img src=\"{{getImageUrl(pokemon)}}\" alt=\"{{pokemon}}\"/>\n                            <h3>{{up(pokemon)}}</h3>\n                            <h1 class=\"inline pokemonSearchId\">{{getPokemonId(pokemon)}}</h1>\n                        </a>\n                    </li>\n                </div>\n                <div class=\"dummy-column\">\n                    <h2>Recent</h2>\n                    <li class=\"dummy-media-object\" ng-click=\"saveAndReload(pokemon)\" ng-repeat=\"pokemon in recents track by $index\">\n                        <a href=\"\">\n                            <img src=\"{{getImageUrl(pokemon)}}\" alt=\"{{pokemon}}\"/>\n                            <h3>{{up(pokemon)}}</h3>\n                            <h1 class=\"inline pokemonSearchId\">{{getPokemonId(pokemon)}}</h1>\n                        </a>\n                    </li>\n                </div>\n            </div><!-- /morphsearch-content -->\n            <div class=\"shortcuts\">\n                <div class=\"padded verticalPadded centerHorizontally\"><kbd>F</kbd>Find a Pokémon</div>\n                <div class=\"padded verticalPadded centerHorizontally\"><kbd>Tab</kbd>Moves between search elements</div>\n                <div class=\"padded verticalPadded centerHorizontally\"><kbd>Esc</kbd>Exit the search</div>\n                <div class=\"padded verticalPadded centerHorizontally\"><kbd>R</kbd>Random Pokémon</div>\n                <div class=\"padded verticalPadded centerHorizontally\"><bold>@</bold>Powered by <a href=\"https://github.com/PokeAPI/pokeapi\">Pokéapi</a></div>\n            </div>\n            <span class=\"morphsearch-close\"></span>\n        </div>\n    </div>\n</div><!-- /morphsearch -->\n<div class=\"overlay\"></div>\n<script type=\"text/javascript\">\n    initMorph();\n</script>";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./reset.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./reset.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}", ""]);
	
	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
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


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
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
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./animations.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./animations.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, ".fadein,\r\n.fadeout {\r\n  -webkit-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s 1s;\r\n  transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s 1s;\r\n}\r\n\r\n.fadein.ng-hide-remove,\r\n.fadeout.ng-hide-add.ng-hide-add-active {\r\n  opacity: 0;\r\n}\r\n\r\n.fadeout.ng-hide-add,\r\n.fadein.ng-hide-remove.ng-hide-remove-active {\r\n  opacity: 1;\r\n}\r\n\r\n.to-left{\r\n\t-webkit-transform: translateX(150px);\r\n\t        transform: translateX(150px);\r\n\topacity: 0;\r\n}\r\n\r\n.to-top{\r\n\t-webkit-transform: translateY(150px);\r\n\t        transform: translateY(150px);\r\n\topacity: 0;\r\n}\r\n\r\n.to-bottom-logo{\r\n\t-webkit-transform: translateY(-150px);\r\n\t        transform: translateY(-150px);\r\n\topacity: 0;\r\n}\r\n\r\n.to-fade{\r\n\topacity: 0;\r\n}\r\n\r\n.to-scale{\r\n\t-webkit-transform: \tscale(.7);\r\n\t        transform: \tscale(.7);\r\n\topacity: \t0;\r\n}\r\n\r\n.animation .to-fade{\r\n\t-webkit-transition:0.5s opacity cubic-bezier(0.65, 0.18, 0.41, 1.34);\r\n\ttransition: 0.5s opacity cubic-bezier(0.65, 0.18, 0.41, 1.34);\r\n}\r\n\r\n.animation .to-left, .animation .to-scale, .animation .to-top, .animation .to-bottom-logo{\r\n\t-webkit-transition:0.3s cubic-bezier(0.65, 0.18, 0.41, 1.34);\r\n\ttransition: 0.3s cubic-bezier(0.65, 0.18, 0.41, 1.34);\r\n}\r\n\r\n.animation .to-left{\r\n\t-webkit-transition-delay: 1.4s;\r\n\t        transition-delay: 1.4s;\r\n}\r\n\r\n\r\n.animation .to-fade{\r\n\t-webkit-transition-delay: 1.6s;\r\n\t        transition-delay: 1.6s;\r\n}\r\n\r\n.animation .to-fade{\r\n\topacity: 1\r\n}\r\n\r\n.animation .to-left{\r\n\topacity: 1;\r\n\t-webkit-transform: translateX(0);\r\n\t        transform: translateX(0);\r\n}\r\n\r\n.animation .to-top{\r\n\topacity: 1;\r\n\t-webkit-transform: translateY(0);\r\n\t        transform: translateY(0);\r\n}\r\n\r\n.animation .to-bottom-logo{\r\n\topacity: 1;\r\n\t-webkit-transform: translateY(0);\r\n\t        transform: translateY(0);\r\n}\r\n\r\n.animation .to-scale{\r\n\t-webkit-transform: \tscale(1);\r\n\t        transform: \tscale(1);\r\n\topacity: \t1;\r\n\t-webkit-animation: blur 350ms;\r\n\t        animation: blur 350ms;\r\n}\r\n\r\n.animation .delay-1{\r\n\t-webkit-transition-delay: 1.5s;\r\n\t        transition-delay: 1.5s;\r\n}\r\n\r\n.animation .delay-2{\r\n\t-webkit-transition-delay: 1.6s;\r\n\t        transition-delay: 1.6s;\r\n}\r\n\r\n.animation .delay-3{\r\n\t-webkit-transition-delay: 1.7s;\r\n\t        transition-delay: 1.7s;\r\n}\r\n\r\n.animation .delay-4{\r\n\t-webkit-transition-delay: 1.8s;\r\n\t        transition-delay: 1.8s;\r\n}\r\n\r\n@-webkit-keyframes blur {\r\n\t0% { -webkit-filter: blur(0px); }\r\n\t50% { -webkit-filter: blur(1px); }\r\n\t100% { -webkit-filter: blur(0px); }\r\n}\r\n\r\n@keyframes blur {\r\n\t0% { -webkit-filter: blur(0px); }\r\n\t50% { -webkit-filter: blur(1px); }\r\n\t100% { -webkit-filter: blur(0px); }\r\n}\r\n\t\r\n.animationEnded .to-fade{\r\n\t-webkit-transition:0.5s opacity cubic-bezier(0.65, 0.18, 0.41, 1.34);\r\n\ttransition: 0.5s opacity cubic-bezier(0.65, 0.18, 0.41, 1.34);\r\n}\r\n\r\n.animationEnded .to-left, .animationEnded .to-scale, .animationEnded .to-top{\r\n\t-webkit-transition:0.3s cubic-bezier(0.65, 0.18, 0.41, 1.34);\r\n\ttransition: 0.3s cubic-bezier(0.65, 0.18, 0.41, 1.34);\r\n}\r\n\r\n.animationEnded .to-fade{\r\n\topacity: 1;\r\n}\r\n\r\n.animationEnded .to-left{\r\n\topacity: 1;\r\n\t-webkit-transform: translateX(0);\r\n\t        transform: translateX(0);\r\n}\r\n\r\n.animationEnded .to-top{\r\n\topacity: 1;\r\n\t-webkit-transform: translateY(0);\r\n\t        transform: translateY(0);\r\n}\r\n\r\n.animationEnded .to-bottom-logo{\r\n\topacity: 1;\r\n\t-webkit-transform: translateY(0);\r\n\t        transform: translateY(0);\r\n}\r\n\r\n.animationEnded .to-scale{\r\n\t-webkit-transform: \tscale(1);\r\n\t        transform: \tscale(1);\r\n\topacity: \t1;\r\n}", ""]);
	
	// exports


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./loading.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./loading.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n* Infinite Loader \r\n*\r\n* Author: Jonathan Silva with Naramsim\r\n* Url: http://portfolio.jonathansilva.com.br\r\n*\r\n*/\r\n/* ----- Base ----- */\r\n/* ----- Loader ----- */\r\n.quote {\r\n\tmargin-top: 60px;\r\n\tcolor: #DCDCDC;\r\n\ttext-align: center;\r\n  max-width: 80%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.quoteBy {\r\n\tfont-size: 12px;\r\n\ttext-align: center;\r\n}\r\n\r\n.by {\r\n\tcolor: #5A5A5A;\r\n}\r\n\r\n.author {\r\n\tcolor: gray;\r\n}\r\n\r\n.loader-wrapper {\r\n  width: 148px;\r\n  height: 100px;\r\n  position: absolute;\r\n  margin: -50px 0 0 -74px;\r\n  left: 50%;\r\n}\r\n\r\n.infiniteLoader {\r\n  width: 148px;\r\n  height: 100px;\r\n  top: 0;\r\n  left: 0;\r\n  position: absolute;\r\n}\r\n.infiniteLoader:after {\r\n  content: \"\";\r\n  top: auto;\r\n  position: absolute;\r\n  display: block;\r\n  -webkit-animation: shadow 1.5s infinite linear;\r\n          animation: shadow 1.5s infinite linear;\r\n  -moz-animation: shadow 1.5s infinite linear;\r\n  bottom: 0em;\r\n  left: 0;\r\n  height: .25em;\r\n  width: 1em;\r\n  border-radius: 50%;\r\n  background-color: #EAEAEA;\r\n  opacity: 0.3;\r\n}\r\n\r\n.roller,\r\n.roller:last-child {\r\n  opacity: 0;\r\n  width: 70px;\r\n  height: 70px;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  -webkit-animation: rollercoaster 1.5s infinite linear;\r\n  -webkit-transform: rotate(105deg);\r\n  -moz-animation: rollercoaster 1.5s infinite linear;\r\n  -moz-transform: rotate(105deg);\r\n  animation: rollercoaster 1.5s infinite linear;\r\n  transform: rotate(105deg);\r\n}\r\n\r\n.roller:last-child {\r\n  left: auto;\r\n  right: 0;\r\n  -webkit-transform: rotate(-45deg);\r\n  -webkit-animation: rollercoaster2 1.5s infinite linear;\r\n  -moz-transform: rotate(-45deg);\r\n  -moz-animation: rollercoaster2 1.5s infinite linear;\r\n  transform: rotate(-45deg);\r\n  animation: rollercoaster2 1.5s infinite linear;\r\n}\r\n\r\n.roller:before,\r\n.roller:last-child:before {\r\n  display: block;\r\n  width: 15px;\r\n  height: 15px;\r\n}\r\n\r\n.first:before,\r\n.first:last-child:before {\r\n  -webkit-transform: scale(0.2);\r\n          transform: scale(0.2);\r\n  content: url(" + __webpack_require__(12) + ");\r\n}\r\n\r\n.second:before,\r\n.second:last-child:before {\r\n  -webkit-transform: scale(0.2);\r\n          transform: scale(0.2);\r\n  content: url(" + __webpack_require__(13) + ");\r\n}\r\n\r\n.third:before,\r\n.third:last-child:before {\r\n  -webkit-transform: scale(0.2);\r\n          transform: scale(0.2);\r\n  content: url(" + __webpack_require__(14) + ");\r\n}\r\n\r\n@-webkit-keyframes rollercoaster {\r\n  0% {\r\n    -webkit-transform: rotate(135deg);\r\n  }\r\n  8% {\r\n    -webkit-transform: rotate(240deg);\r\n  }\r\n  20% {\r\n    opacity: .8;\r\n    -webkit-transform: rotate(300deg);\r\n  }\r\n  40% {\r\n    -webkit-transform: rotate(380deg);\r\n  }\r\n  45% {\r\n    -webkit-transform: rotate(440deg);\r\n  }\r\n  50% {\r\n    -webkit-transform: rotate(495deg);\r\n    opacity: 1;\r\n  }\r\n  50.1% {\r\n    -webkit-transform: rotate(495deg);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(495deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n@-webkit-keyframes rollercoaster2 {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  49.9% {\r\n    opacity: 0;\r\n  }\r\n  50% {\r\n    opacity: 1;\r\n    -webkit-transform: rotate(-45deg);\r\n  }\r\n  58% {\r\n    -webkit-transform: rotate(-160deg);\r\n  }\r\n  70% {\r\n    -webkit-transform: rotate(-240deg);\r\n  }\r\n  80% {\r\n    -webkit-transform: rotate(-300deg);\r\n  }\r\n  90% {\r\n    -webkit-transform: rotate(-340deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(-405deg);\r\n  }\r\n}\r\n@-webkit-keyframes shadow {\r\n  0% {\r\n    opacity: .3;\r\n    -webkit-transform: translateX(65px) scale(0.5, 0.5);\r\n  }\r\n  8% {\r\n    -webkit-transform: translateX(30px) scale(2, 2);\r\n  }\r\n  13% {\r\n    -webkit-transform: translateX(0px) scale(1.3, 1.3);\r\n  }\r\n  30% {\r\n    -webkit-transform: translateX(-15px) scale(0.5, 0.5);\r\n    opacity: 0.1;\r\n  }\r\n  50% {\r\n    -webkit-transform: translateX(60px) scale(1.2, 1.2);\r\n    opacity: 0.3;\r\n  }\r\n  60% {\r\n    -webkit-transform: translateX(130px) scale(2, 2);\r\n    opacity: 0.05;\r\n  }\r\n  65% {\r\n    -webkit-transform: translateX(145px) scale(1.2, 1.2);\r\n  }\r\n  80% {\r\n    -webkit-transform: translateX(120px) scale(0.5, 0.5);\r\n    opacity: 0.1;\r\n  }\r\n  90% {\r\n    -webkit-transform: translateX(80px) scale(0.8, 0.8);\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(60px);\r\n    opacity: 0.3;\r\n  }\r\n}\r\n/* Moz */\r\n/* No-prefix */\r\n@keyframes rollercoaster {\r\n  0% {\r\n    -webkit-transform: rotate(135deg);\r\n            transform: rotate(135deg);\r\n  }\r\n  8% {\r\n    -webkit-transform: rotate(240deg);\r\n            transform: rotate(240deg);\r\n  }\r\n  20% {\r\n    opacity: .8;\r\n    -webkit-transform: rotate(300deg);\r\n            transform: rotate(300deg);\r\n  }\r\n  40% {\r\n    -webkit-transform: rotate(380deg);\r\n            transform: rotate(380deg);\r\n  }\r\n  45% {\r\n    -webkit-transform: rotate(440deg);\r\n            transform: rotate(440deg);\r\n  }\r\n  50% {\r\n    -webkit-transform: rotate(495deg);\r\n            transform: rotate(495deg);\r\n    opacity: 1;\r\n  }\r\n  50.1% {\r\n    -webkit-transform: rotate(495deg);\r\n            transform: rotate(495deg);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(495deg);\r\n            transform: rotate(495deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes rollercoaster2 {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  49.9% {\r\n    opacity: 0;\r\n  }\r\n  50% {\r\n    opacity: 1;\r\n    -webkit-transform: rotate(-45deg);\r\n            transform: rotate(-45deg);\r\n  }\r\n  58% {\r\n    -webkit-transform: rotate(-160deg);\r\n            transform: rotate(-160deg);\r\n  }\r\n  70% {\r\n    -webkit-transform: rotate(-240deg);\r\n            transform: rotate(-240deg);\r\n  }\r\n  80% {\r\n    -webkit-transform: rotate(-300deg);\r\n            transform: rotate(-300deg);\r\n  }\r\n  90% {\r\n    -webkit-transform: rotate(-340deg);\r\n            transform: rotate(-340deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(-405deg);\r\n            transform: rotate(-405deg);\r\n  }\r\n}\r\n@keyframes shadow {\r\n  0% {\r\n    opacity: .3;\r\n    -webkit-transform: translateX(65px) scale(0.5, 0.5);\r\n            transform: translateX(65px) scale(0.5, 0.5);\r\n  }\r\n  8% {\r\n    -webkit-transform: translateX(30px) scale(2, 2);\r\n            transform: translateX(30px) scale(2, 2);\r\n  }\r\n  13% {\r\n    -webkit-transform: translateX(0px) scale(1.3, 1.3);\r\n            transform: translateX(0px) scale(1.3, 1.3);\r\n  }\r\n  30% {\r\n    -webkit-transform: translateX(-15px) scale(0.5, 0.5);\r\n            transform: translateX(-15px) scale(0.5, 0.5);\r\n    opacity: 0.1;\r\n  }\r\n  50% {\r\n    -webkit-transform: translateX(60px) scale(1.2, 1.2);\r\n            transform: translateX(60px) scale(1.2, 1.2);\r\n    opacity: 0.3;\r\n  }\r\n  60% {\r\n    -webkit-transform: translateX(130px) scale(2, 2);\r\n            transform: translateX(130px) scale(2, 2);\r\n    opacity: 0.05;\r\n  }\r\n  65% {\r\n    -webkit-transform: translateX(145px) scale(1.2, 1.2);\r\n            transform: translateX(145px) scale(1.2, 1.2);\r\n  }\r\n  80% {\r\n    -webkit-transform: translateX(120px) scale(0.5, 0.5);\r\n            transform: translateX(120px) scale(0.5, 0.5);\r\n    opacity: 0.1;\r\n  }\r\n  90% {\r\n    -webkit-transform: translateX(80px) scale(0.8, 0.8);\r\n            transform: translateX(80px) scale(0.8, 0.8);\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(60px);\r\n            transform: translateX(60px);\r\n    opacity: 0.3;\r\n  }\r\n}\r\n#loader2:after {\r\n  -webkit-animation-delay: 0.15s;\r\n  animation-delay: 0.15s;\r\n}\r\n#loader2 .roller {\r\n  -webkit-animation-delay: 0.15s;\r\n  animation-delay: 0.15s;\r\n}\r\n\r\n#loader3:after {\r\n  -webkit-animation-delay: 0.3s;\r\n  animation-delay: 0.3s;\r\n}\r\n#loader3 .roller {\r\n  -webkit-animation-delay: 0.3s;\r\n  animation-delay: 0.3s;\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "dive-balle69fb1c59edb845a8c726ac120f5cc2a.png";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "quick-ball4b832bf859b98e0984b901eb5fb178c1.png";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "master-ball9b4268f43fd5f71f96b9eb073a42b91d.png";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./logo.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./logo.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, ".logo:hover{\r\n  animation: rattle linear 0.3s;\r\n  animation-iteration-count: 1;\r\n  transform-origin: 50% 50%;\r\n  -webkit-animation: rattle linear 0.3s;\r\n  -webkit-animation-iteration-count: 1;\r\n  -webkit-transform-origin: 50% 50%;\r\n  -moz-animation: rattle linear 0.3s;\r\n  -moz-animation-iteration-count: 1;\r\n  -moz-transform-origin: 50% 50%;\r\n  -o-animation: rattle linear 0.3s;\r\n  -o-animation-iteration-count: 1;\r\n  -o-transform-origin: 50% 50%;\r\n  -ms-animation: rattle linear 0.3s;\r\n  -ms-animation-iteration-count: 1;\r\n  -ms-transform-origin: 50% 50%;\r\n}\r\n\r\n@keyframes rattle{\r\n  0% {\r\n    -webkit-transform:  translate(0px,0px)  rotate(0deg) ;\r\n            transform:  translate(0px,0px)  rotate(0deg) ;\r\n  }\r\n  24% {\r\n    -webkit-transform:  translate(2px,-1px)  rotate(10deg) ;\r\n            transform:  translate(2px,-1px)  rotate(10deg) ;\r\n  }\r\n  50% {\r\n    -webkit-transform:  translate(0px,0px)  rotate(0deg) ;\r\n            transform:  translate(0px,0px)  rotate(0deg) ;\r\n  }\r\n  71% {\r\n    -webkit-transform:  translate(-12px,0px)  rotate(-29deg) ;\r\n            transform:  translate(-12px,0px)  rotate(-29deg) ;\r\n  }\r\n  93% {\r\n    -webkit-transform:  translate(0px,0px)  rotate(0deg) ;\r\n            transform:  translate(0px,0px)  rotate(0deg) ;\r\n  }\r\n  97% {\r\n    -webkit-transform:  translate(3px,0px)  rotate(4deg) ;\r\n            transform:  translate(3px,0px)  rotate(4deg) ;\r\n  }\r\n  100% {\r\n    -webkit-transform:  translate(0px,0px)  rotate(0deg) ;\r\n            transform:  translate(0px,0px)  rotate(0deg) ;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes rattle {\r\n  0% {\r\n    -webkit-transform:  translate(0px,0px)  rotate(0deg) ;\r\n  }\r\n  24% {\r\n    -webkit-transform:  translate(2px,-1px)  rotate(10deg) ;\r\n  }\r\n  50% {\r\n    -webkit-transform:  translate(0px,0px)  rotate(0deg) ;\r\n  }\r\n  71% {\r\n    -webkit-transform:  translate(-12px,0px)  rotate(-29deg) ;\r\n  }\r\n  93% {\r\n    -webkit-transform:  translate(0px,0px)  rotate(0deg) ;\r\n  }\r\n  97% {\r\n    -webkit-transform:  translate(3px,0px)  rotate(4deg) ;\r\n  }\r\n  100% {\r\n    -webkit-transform:  translate(0px,0px)  rotate(0deg) ;\r\n  }\r\n}", ""]);
	
	// exports


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./main.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./main.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "*, *:after, *:before { box-sizing: border-box; }\r\n.clearfix:before, .clearfix:after { content: ''; display: table; }\r\n.clearfix:after { clear: both; }\r\n\r\nbody {\r\n  font-size: 16px;\r\n  font-family: 'Montserrat', sans-serif;\r\n  background-color: #282b30;\r\n}\r\n\r\ninput {\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\na {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  outline: none;\r\n}\r\n\r\na:hover,\r\na:focus {\r\n  color: #ec5a62;\r\n}\r\n\r\na:focus {\r\n    outline: -webkit-focus-ring-color auto 5px;\r\n    outline-color: -webkit-focus-ring-color;\r\n    outline-style: auto;\r\n    outline-width: 5px;\r\n}\r\n\r\na:hover, a:active {\r\n    outline: 0;\r\n}\r\n\r\n.container {\r\n\tposition: relative;\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tmin-height: 100%;\r\n}\r\n\r\n.mainContainer {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-user-select: none;       \r\n\t-moz-user-select: none; \r\n\t-ms-user-select: none;\r\n\t-o-user-select: none;\r\n\tuser-select: none;\r\n}\r\n\r\n.secondaryContainer {\r\n\t-webkit-box-flex: 1;\r\n\t    -ms-flex-positive: 1;\r\n\t        flex-grow: 1;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: horizontal;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: row;\r\n\t        flex-direction: row;\r\n\t-ms-flex-pack: distribute;\r\n\t    justify-content: space-around;\r\n\tposition: relative;\r\n\tz-index: 1;\r\n}\r\n\r\n.innerContainer {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: horizontal;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: row;\r\n\t        flex-direction: row;\r\n\t-ms-flex-pack: distribute;\r\n\t    justify-content: space-around;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\t-ms-flex-line-pack: center;\r\n\t    align-content: center;\r\n\t-webkit-box-flex: 5;\r\n\t    -ms-flex-positive: 5;\r\n\t        flex-grow: 5;\r\n}\r\n\r\n.pokemonImage {\r\n\tposition: relative;\r\n\tz-index: 1;\r\n}\r\n\r\n.pokemonImage>img {\r\n\theight: 45vh;\r\n\twidth: 45vw;\r\n\tposition: relative;\r\n}\r\n\r\n.pokemonStats {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center\r\n}\r\n\r\n.pokemonVCard {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n}\r\n\r\n.pokemonName {\r\n\tfont-size: 300%;\r\n\tfont-weight: 800;\r\n\tz-index: 5;\r\n}\r\n\r\n.pokemonId {\r\n\tfont-size: 1334%;\r\n\topacity: .1;\r\n\tmargin-top: -149px;\r\n}\r\n\r\n.pokemonBaseStats {\r\n\tpadding-top: 1em;\r\n}\r\n\r\n.inline {\r\n\tdisplay: -webkit-inline-box;\r\n\tdisplay: -ms-inline-flexbox;\r\n\tdisplay: inline-flex;\r\n}\r\n\r\n.padded {\r\n\tpadding-right: 10px;\r\n\tpadding-left: 10px;\r\n}\r\n\r\n.pokemonAbilities {\r\n\tz-index: 10;\r\n}\r\n\r\n.verticalPadded {\r\n\tpadding-top: 10px;\r\n\tpadding-bottom: 10px;\r\n}\r\n\r\n.topPadded {\r\n\tpadding-top: 10px;\r\n}\r\n\r\n.miniLabel {\r\n\ttext-align: center;\r\n\tfont-size: 11px;\r\n}\r\n\r\n.liStat:nth-child(even) {\r\n\tpadding: 5px;\r\n}\r\n\r\n.mediumSize {\r\n\tfont-size: 170%;\r\n}\r\n\r\n.pokemonDescription {\r\n\tmax-width: 40vw;\r\n\tline-height: 1.5;\r\n\topacity: .8;\r\n}\r\n\r\n.pokemonTypesContainer {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: horizontal;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: row;\r\n\t        flex-direction: row;\r\n\t-webkit-box-pack: start;\r\n\t    -ms-flex-pack: start;\r\n\t        justify-content: flex-start;\r\n}\r\n\r\n.pokemonGenere {\r\n\tmargin-left: -36px;\r\n}\r\n\r\n.pokemonMember {\r\n\theight: 90px;\r\n\twidth: 90px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.centerAligned {\r\n\tvertical-align: middle;\r\n}\r\n\r\n.middleRow {\r\n\tvertical-align: middle;\r\n\theight: 40px;\r\n}\r\n\r\n.pokemonFamily {\r\n    max-width: 40%;\r\n}\r\n\r\n.pokemonFamily > ul {\r\n\ttext-align: center;\r\n}\r\n\r\n.pokemonAbilities, .pokemonFamily, .pokemonHeldItems {\r\n\t/*flex-grow: 1;*/\r\n}\r\n\r\n.pokemonMultipliers {\r\n\t-ms-flex-preferred-size: 350px;\r\n\t    flex-basis: 350px;\r\n}\r\n\r\n.loadingContainer {\r\n\tmin-height: 100%;\r\n\tmin-width: 100vw;\r\n\twidth: 100vw;\r\n\theight: 100%;\r\n\tbackground-color: #282b30;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\tposition: fixed;\r\n\tz-index: 100;\r\n}\r\n\r\n.jp {\r\n\t/*font-family: 'Noto Sans Japanese', serif;*/\r\n    font-weight: 400;\r\n    position: absolute;\r\n    top: 100%;\r\n    font-size: 1260%;\r\n    opacity: 0.1;\r\n    width: 400%;\r\n}\r\n\r\n.multiplierAttack, .multiplierDefense {\r\n\tposition: absolute;\r\n}\r\n\r\n.switchMultiplier > .multiplierAttack {\r\n\topacity: 0;\r\n}\r\n\r\n.switchMultiplier > .multiplierDefense {\r\n\topacity: 1;\r\n}\r\n\r\n.hidden {\r\n\tdisplay: none;\r\n}\r\n\r\n.softHidden {\r\n\topacity: 0;\r\n}\r\n\r\n.pointer {\r\n\tcursor: pointer;\r\n}\r\n\r\n.pokemonSearchId {\r\n\topacity: .2;\r\n\tcolor: gray;\r\n    vertical-align: middle;\r\n    font-size: 30px;\r\n    margin-left: -20px;\r\n}\r\n\r\n.pokemonTypeVc {\r\n\theight: 14px;\r\n}\r\n\r\n.pokemonType {\r\n\theight: 24px;\r\n}\r\n\r\n.logo {\r\n\tposition: absolute;\r\n\ttop: 50px;\r\n\tleft: 50px;\r\n\tcursor: pointer;\r\n\tz-index: 1;\r\n}\r\n\r\n.logo > img {\r\n\theight: 40px;\r\n}\r\n\r\n.status {\r\n\ttext-align: center;\r\n    margin-top: 20px;\r\n    color: #5a5a5a;\r\n    max-width: 40%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.centerHorizontally {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n}\r\n\r\n@media screen and (max-width: 1300px) {\r\n\tbody {\r\n\t\tfont-size: 12px;\r\n\t}\r\n}\r\n\r\n@media screen and (min-aspect-ratio: 19/9) and (min-width: 900px) {\r\n\t.multiplierRow .centerAligned {\r\n\t\t-webkit-box-align: center;\r\n\t\t    -ms-flex-align: center;\r\n\t\t        align-items: center;\r\n\t    display: -webkit-box;\r\n\t    display: -ms-flexbox;\r\n\t    display: flex;\r\n\t    -webkit-box-orient: horizontal;\r\n\t    -webkit-box-direction: reverse;\r\n\t        -ms-flex-direction: row-reverse;\r\n\t            flex-direction: row-reverse;\r\n\t}\r\n\t.miniLabel {\r\n\t    display: -webkit-inline-box;\r\n\t    display: -ms-inline-flexbox;\r\n\t    display: inline-flex;\r\n\t}\r\n\r\n\t.multiplierRow li:nth-child(n+2) .miniLabel {\r\n\t    display: none;\r\n\t}\r\n\r\n}", ""]);
	
	// exports


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./morph.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./morph.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "/* Codrops */\r\n\r\nhtml, body {\r\n\theight: 100%;\r\n}\r\n\r\nbody {\r\n\toverflow-x: hidden;\r\n\toverflow-y: scroll;\r\n}\r\n\r\n.morphsearch {\r\n\tborder-radius: 23px;\r\n\twidth: 200px;\r\n\tmin-height: 40px;\r\n\tbackground: #f1f1f1;\r\n\tposition: absolute;\r\n\tz-index: 10000;\r\n\ttop: 50px;\r\n\tright: 50px;\r\n\t-webkit-transform-origin: 100% 0;\r\n\ttransform-origin: 100% 0;\r\n\t-webkit-transition-property: min-height, width, top, right;\r\n\ttransition-property: min-height, width, top, right;\r\n\t-webkit-transition-duration: 0.5s;\r\n\ttransition-duration: 0.5s;\r\n\t-webkit-transition-timing-function: cubic-bezier(0.7,0,0.3,1);\r\n\ttransition-timing-function: cubic-bezier(0.7,0,0.3,1);\r\n}\r\n\r\n.morphsearch.open {\r\n\twidth: 100%;\r\n\tmin-height: 100%;\r\n\ttop: 0px;\r\n\tright: 0px;\r\n}\r\n\r\n.morphsearch-form {\r\n\twidth: 100%;\r\n\theight: 40px;\r\n\tmargin: 0 auto;\r\n\tposition: relative;\r\n\t-webkit-transition-property: width, height, -webkit-transform;\r\n\ttransition-property: width, height, -webkit-transform;\r\n\ttransition-property: width, height, transform;\r\n\ttransition-property: width, height, transform, -webkit-transform;\r\n\t-webkit-transition-duration: 0.5s;\r\n\ttransition-duration: 0.5s;\r\n\t-webkit-transition-timing-function: cubic-bezier(0.7,0,0.3,1);\r\n\ttransition-timing-function: cubic-bezier(0.7,0,0.3,1);\r\n}\r\n\r\n.morphsearch.open .morphsearch-form {\r\n\twidth: 80%;\r\n\theight: 160px;\r\n\t-webkit-transform: translate3d(0,3em,0);\r\n\ttransform: translate3d(0,3em,0);\r\n}\r\n\r\n.morphsearch-input {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tpadding: 0 10% 0 10px;\r\n\tfont-weight: 700;\r\n\tborder: none;\r\n\tbackground: transparent;\r\n\tfont-size: 0.8em;\r\n\tcolor: #ec5a62;\r\n\t-webkit-transition: font-size 0.5s cubic-bezier(0.7,0,0.3,1);\r\n\ttransition: font-size 0.5s cubic-bezier(0.7,0,0.3,1);\r\n}\r\n\r\n.morphsearch-input::-ms-clear { /* remove cross in IE */\r\n    display: none;\r\n}\r\n\r\n.morphsearch.hideInput .morphsearch-input {\r\n\tcolor: transparent;\r\n\t-webkit-transition: color 0.3s;\r\n\ttransition: color 0.3s;\r\n}\r\n\r\n.morphsearch.open .morphsearch-input {\r\n\tfont-size: 7em;\r\n}\r\n\r\n/* placeholder */\r\n.morphsearch-input::-webkit-input-placeholder {\r\n\tcolor: #c2c2c2;\r\n}\r\n\r\n.morphsearch-input:-moz-placeholder {\r\n\tcolor: #c2c2c2;\r\n}\r\n\r\n.morphsearch-input::-moz-placeholder {\r\n\tcolor: #c2c2c2;\r\n}\r\n\r\n.morphsearch-input:-ms-input-placeholder {\r\n\tcolor: #c2c2c2;\r\n}\r\n\r\n/* hide placeholder when active in Chrome */\r\n.gn-search:focus::-webkit-input-placeholder {\r\n\tcolor: transparent;\r\n}\r\n\r\ninput[type=\"search\"] { /* reset normalize */ \r\n\tbox-sizing: border-box;\t\r\n}\r\n\r\n.morphsearch-input:focus,\r\n.morphsearch-submit:focus {\r\n\toutline: none;\r\n}\r\n\r\n.morphsearch-close {\r\n\twidth: 36px;\r\n\theight: 36px;\r\n\tposition: absolute;\r\n\tright: 1em;\r\n\ttop: 1em;\r\n\toverflow: hidden;\r\n\ttext-indent: 100%;\r\n\tcursor: pointer;\r\n\tpointer-events: none;\r\n\topacity: 0;\r\n\t-webkit-transform: scale3d(0,0,1);\r\n\ttransform: scale3d(0,0,1);\r\n}\r\n\r\n.morphsearch.open .morphsearch-close {\r\n\topacity: 1;\r\n\tpointer-events: auto;\r\n\t-webkit-transform: scale3d(1,1,1);\r\n\ttransform: scale3d(1,1,1);\r\n\t-webkit-transition: opacity 0.3s, -webkit-transform 0.3s;\r\n\ttransition: opacity 0.3s, -webkit-transform 0.3s;\r\n\ttransition: opacity 0.3s, transform 0.3s;\r\n\ttransition: opacity 0.3s, transform 0.3s, -webkit-transform 0.3s;\r\n\t-webkit-transition-delay: 0.5s;\r\n\ttransition-delay: 0.5s;\r\n}\r\n\r\n.morphsearch-close::before,\r\n.morphsearch-close::after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\twidth: 2px;\r\n\theight: 100%;\r\n\ttop: 0;\r\n\tleft: 50%;\r\n\tborder-radius: 3px;\r\n\topacity: 0.2;\r\n\tbackground: #000;\r\n}\r\n\r\n.morphsearch-close:hover.morphsearch-close::before,\r\n.morphsearch-close:hover.morphsearch-close::after {\r\n\topacity: 1;\r\n}\r\n\r\n.morphsearch-close::before {\r\n\t-webkit-transform: rotate(45deg);\r\n\ttransform: rotate(45deg);\r\n}\r\n\r\n.morphsearch-close::after {\r\n\t-webkit-transform: rotate(-45deg);\r\n\ttransform: rotate(-45deg);\r\n}\r\n\r\n.morphsearch-content {\r\n\tcolor: #333;\r\n\tmargin-top: 4.5em;\r\n\twidth: 100%;\r\n\theight: 0;\r\n\toverflow: hidden;\r\n\tpadding: 0 10.5%;\r\n\tbackground: #f1f1f1;\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n\topacity: 0;\r\n}\r\n\r\n.shortcuts {\r\n\tcolor: #333;\r\n\tmargin-top: 44em;\r\n\twidth: 100%;\r\n\theight: 0;\r\n\toverflow: hidden;\r\n\tpadding: 0 10.5%;\r\n\tbackground: #f1f1f1;\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n\topacity: 0;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: horizontal;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: row;\r\n\t        flex-direction: row;\r\n\t-webkit-box-pack: start;\r\n\t    -ms-flex-pack: start;\r\n\t        justify-content: flex-start;\r\n\t-ms-flex-wrap: wrap;\r\n\t    flex-wrap: wrap;\r\n\tline-height: 16px;\r\n}\r\n\r\n.shortcuts bold {\r\n\tfont-size: 15px;\r\n}\r\n\r\n.shortcuts a {\r\n\tcolor: #dc3f3f;\r\n}\r\n\r\n.shortcuts a:hover {\r\n\tcolor: #ff4343;\r\n}\r\n\r\n.morphsearch.open .morphsearch-content {\r\n\topacity: 1;\r\n\theight: auto;\r\n\toverflow: visible; /* this breaks the transition of the children in FF: https://bugzilla.mozilla.org/show_bug.cgi?id=625289 */\r\n\tpointer-events: auto;\r\n\t-webkit-transition: opacity 0.3s 0.5s;\r\n\ttransition: opacity 0.3s 0.5s;\r\n}\r\n\r\n.morphsearch.open .shortcuts {\r\n\topacity: 1;\r\n\theight: auto;\r\n\toverflow: visible; /* this breaks the transition of the children in FF: https://bugzilla.mozilla.org/show_bug.cgi?id=625289 */\r\n\tpointer-events: auto;\r\n\t-webkit-transition: opacity 0.3s 0.5s;\r\n\ttransition: opacity 0.3s 0.5s;\r\n}\r\n\r\n.dummy-column {\r\n\twidth: 30%;\r\n\tpadding: 0 0 6em;\r\n\tfloat: left;\r\n\topacity: 0;\r\n\t-webkit-transform: translate3d(0,100px,0);\r\n\ttransform: translateY(100px);\r\n\t-webkit-transition: -webkit-transform 0.5s, opacity 0.5s;\r\n\t-webkit-transition: opacity 0.5s, -webkit-transform 0.5s;\r\n\ttransition: opacity 0.5s, -webkit-transform 0.5s;\r\n\ttransition: transform 0.5s, opacity 0.5s;\r\n\ttransition: transform 0.5s, opacity 0.5s, -webkit-transform 0.5s;\r\n}\r\n\r\n.morphsearch.open .dummy-column:first-child {\r\n\t-webkit-transition-delay: 0.4s;\r\n\ttransition-delay: 0.4s;\r\n}\r\n\r\n.morphsearch.open .dummy-column:nth-child(2) {\r\n\t-webkit-transition-delay: 0.45s;\r\n\ttransition-delay: 0.45s;\r\n}\r\n\r\n.morphsearch.open .dummy-column:nth-child(3) {\r\n\t-webkit-transition-delay: 0.5s;\r\n\ttransition-delay: 0.5s;\r\n}\r\n\r\n.morphsearch.open .dummy-column {\r\n\topacity: 1;\r\n\t-webkit-transform: translate3d(0,0,0);\r\n\ttransform: translate3d(0,0,0);\r\n}\r\n\r\n.dummy-column:nth-child(2) {\r\n\tmargin: 0 5%;\r\n}\r\n\r\n.dummy-column h2 {\r\n\tfont-size: 1em;\r\n\tletter-spacing: 1px;\r\n\ttext-transform: uppercase;\r\n\tfont-weight: 800;\r\n\tcolor: #c2c2c2;\r\n\tpadding: 0.5em 0;\r\n}\r\n\r\n.round {\r\n\tborder-radius: 50%;\r\n}\r\n\r\n.dummy-media-object {\r\n\tdisplay: block;\r\n\tmargin: 0.3em 0;\r\n\tcursor: pointer;\r\n\tborder-radius: 5px;\r\n\tbackground: rgba(118,117,128,0.05);\r\n}\r\n\r\n.dummy-media-object > a {\r\n\tpadding: 0.75em;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tdisplay: block;\r\n}\r\n\r\n.dummy-media-object:hover,\r\n.dummy-media-object:focus {\r\n\tbackground: rgba(118,117,128,0.1);\r\n}\r\n\r\n.dummy-media-object img {\r\n\tdisplay: inline-block;\r\n\twidth: 50px;\t\r\n\theight: 50px;\r\n\tmargin: 0 10px 0 0;\r\n\tvertical-align: middle;\r\n}\r\n\r\n.dummy-media-object h3 {\r\n\tvertical-align: middle;\r\n\tfont-size: 0.85em;\r\n\tdisplay: inline-block;\r\n\tfont-weight: 700;\r\n\tmargin: 0 0 0 0;\r\n\tcolor: rgba(99, 99, 99, 0.7);\r\n}\r\n\r\n.dummy-media-object:hover h3 {\r\n\tcolor: rgba(236,90,98,1);\r\n}\r\n\r\n/* Overlay */\r\n.overlay {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground: rgba(0,0,0,0.5);\r\n\topacity: 0;\r\n\tpointer-events: none;\r\n\t-webkit-transition: opacity 0.5s;\r\n\ttransition: opacity 0.5s;\r\n\t-webkit-transition-timing-function: cubic-bezier(0.7,0,0.3,1);\r\n\ttransition-timing-function: cubic-bezier(0.7,0,0.3,1);\r\n}\r\n\r\n.morphsearch.open ~ .overlay {\r\n\topacity: 1;\r\n}\r\n\r\nkbd {\r\n    -moz-border-radius:3px;\r\n    -moz-box-shadow:0 1px 0 rgba(0,0,0,0.2),0 0 0 2px #fff inset;\r\n    -webkit-border-radius:3px;\r\n    -webkit-box-shadow:0 1px 0 rgba(0,0,0,0.2),0 0 0 2px #fff inset;\r\n    background-color:#f7f7f7;\r\n    border:1px solid #ccc;\r\n    border-radius:3px;\r\n    box-shadow:0 1px 0 rgba(0,0,0,0.2),0 0 0 2px #fff inset;\r\n    color:#333;\r\n    display:inline-block;\r\n    font-family:Arial,Helvetica,sans-serif;\r\n    font-size:11px;\r\n    line-height:1.4;\r\n    margin:0 .1em;\r\n    margin-right: 5px;\r\n    padding:.1em .6em;\r\n    text-shadow:0 1px 0 #fff;\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n\t.morphsearch-input {\r\n\t\tpadding: 0 25% 0 10px;\r\n\t}\r\n\t.morphsearch.open .morphsearch-input {\r\n\t\tfont-size: 2em;\r\n\t}\r\n\t.dummy-column {\r\n\t\tfloat: none;\r\n\t\twidth: auto;\r\n\t\tpadding: 0 0 2em;\r\n\t}\r\n\t.dummy-column:nth-child(2) {\r\n\t\tmargin: 0;\r\n\t}\r\n\t.morphsearch.open .morphsearch-submit {\r\n\t\t-webkit-transform: translate3d(0,-50%,0) scale3d(0.5,0.5,1);\r\n\t\ttransform: translate3d(0,-50%,0) scale3d(0.5,0.5,1);\r\n\t}\r\n\t.shortcuts {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.morphsearch {\r\n\t\twidth: 60%;\r\n\t\ttop: 1%;\r\n\t\tright: 10%;\r\n\t}\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./switch.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./switch.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, ".onoffswitch {\r\n    position: relative; width: 108px;\r\n    -webkit-user-select:none; -moz-user-select:none; -ms-user-select: none;\r\n    vertical-align: sub;\r\n    margin-left: 10px;\r\n}\r\n.onoffswitch-checkbox {\r\n    display: none;\r\n}\r\n.onoffswitch-label {\r\n    display: block; overflow: hidden; cursor: pointer;\r\n    border-radius: 50px;\r\n}\r\n.onoffswitch-inner {\r\n    display: block; width: 200%; margin-left: -100%;\r\n    -webkit-transition: margin 0.3s ease-in 0s;\r\n    transition: margin 0.3s ease-in 0s;\r\n}\r\n.onoffswitch-inner:before, .onoffswitch-inner:after {\r\n    display: block; float: left; width: 50%; height: 27px; padding: 0; line-height: 27px;\r\n    font-size: 16px; color: white; font-family: Trebuchet, Arial, sans-serif; font-weight: bold;\r\n    box-sizing: border-box;\r\n}\r\n.onoffswitch-inner:before {\r\n    content: \"Attack\";\r\n    padding-left: 10px;\r\n    text-align: left;\r\n}\r\n.onoffswitch-inner:after {\r\n    content: \"Defense\";\r\n    padding-right: 10px;\r\n    text-align: right;\r\n}\r\n.onoffswitch-switch {\r\n    display: block; \r\n    width: 31px; \r\n    height: 31px; \r\n    margin: 0px;\r\n    position: absolute; top: 0; bottom: 0;\r\n    right: 77px;\r\n    border-radius: 50px;\r\n    -webkit-transition: all 0.3s ease-in 0s;\r\n    transition: all 0.3s ease-in 0s; \r\n}\r\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {\r\n    margin-left: 0;\r\n}\r\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {\r\n    right: 0px; \r\n}", ""]);
	
	// exports


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./tooltipLoader.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./tooltipLoader.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, ".sk-three-bounce {\r\n    text-align: center;\r\n}\r\n.sk-three-bounce .sk-child {\r\n    width: 10px;\r\n    height: 10px;\r\n    background-color: #333;\r\n    border-radius: 100%;\r\n    display: inline-block;\r\n    -webkit-animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;\r\n    animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;\r\n}\r\n.sk-three-bounce .sk-bounce1 {\r\n    -webkit-animation-delay: -0.32s;\r\n    animation-delay: -0.32s;\r\n}\r\n.sk-three-bounce .sk-bounce2 {\r\n    -webkit-animation-delay: -0.16s;\r\n    animation-delay: -0.16s;\r\n}\r\n@-webkit-keyframes sk-three-bounce {\r\n    0%, 80%, 100% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n        opacity: 0;\r\n    }\r\n    40% {\r\n        -webkit-transform: scale(1);\r\n        transform: scale(1);\r\n        opacity: 1;\r\n    }\r\n}\r\n@keyframes sk-three-bounce {\r\n    0%, 80%, 100% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n        opacity: 0;\r\n    }\r\n    40% {\r\n        -webkit-transform: scale(1);\r\n        transform: scale(1);\r\n        opacity: 1;\r\n    }\r\n}", ""]);
	
	// exports


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./tooltips.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./tooltips.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "/* Codrops */\r\n\r\n.tooltip {\r\n\tposition: relative;\r\n\tz-index: 999;\r\n}\r\n\r\n/* Trigger text */\r\n\r\n.tooltip-item {\r\n\tcursor: pointer;\r\n\tz-index: 100;\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tfont-weight: 700;\r\n\t-webkit-transition: background-color 0.3s, color 0.3s, -webkit-transform 0.3s;\r\n\ttransition: background-color 0.3s, color 0.3s, -webkit-transform 0.3s;\r\n\ttransition: background-color 0.3s, color 0.3s, transform 0.3s;\r\n\ttransition: background-color 0.3s, color 0.3s, transform 0.3s, -webkit-transform 0.3s;\r\n}\r\n\r\n.tooltip:hover .tooltip-item {\r\n\topacity: .9;\r\n\t-webkit-transform: translate3d(0,-0.5em,0);\r\n\ttransform: translate3d(0,-0.5em,0);\r\n}\r\n\r\n/* Tooltip */\r\n\r\n.tooltip-content {\r\n\tposition: absolute;\r\n\tz-index: 99;\r\n\ttext-align: left;\r\n\topacity: 0;\r\n\tline-height: 1.5;\r\n\tpadding: 1.5em;\r\n\tcolor: #fff;\r\n\tcursor: default;\r\n\tpointer-events: none;\r\n\tborder-radius: 5px;\r\n\t-webkit-transform: translate3d(0,-0.5em,0);\r\n\ttransform: translate3d(0,-0.5em,0);\r\n\t-webkit-transition: opacity 0.3s, -webkit-transform 0.3s;\r\n\ttransition: opacity 0.3s, -webkit-transform 0.3s;\r\n\ttransition: opacity 0.3s, transform 0.3s;\r\n\ttransition: opacity 0.3s, transform 0.3s, -webkit-transform 0.3s;\r\n}\r\n\r\n.tooltip-onright {\r\n\twidth: 450px;\r\n\tright: -5%;\r\n\tbottom: 8px;\r\n}\r\n\r\n.tooltip-onleft {\r\n\twidth: 360px;\r\n\tleft: -10%;\r\n\tbottom: -5px;\r\n}\r\n\r\n.tooltip-text {\r\n\topacity: 0;\r\n\t-webkit-transform: translate3d(0,1.5em,0);\r\n\ttransform: translate3d(0,1.5em,0);\r\n\t-webkit-transition: opacity 0.3s, -webkit-transform 0.3s;\r\n\ttransition: opacity 0.3s, -webkit-transform 0.3s;\r\n\ttransition: opacity 0.3s, transform 0.3s;\r\n\ttransition: opacity 0.3s, transform 0.3s, -webkit-transform 0.3s;\r\n}\r\n\r\n.tooltip:hover .tooltip-content,\r\n.tooltip:hover .tooltip-text {\r\n\tpointer-events: auto;\r\n\topacity: 1;\r\n\t-webkit-transform: translate3d(0,0,0);\r\n\ttransform: translate3d(0,0,0);\r\n}", ""]);
	
	// exports


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./mobile.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./mobile.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "@media screen and (max-width: 900px) {\r\n\thtml, body {\r\n\t\toverflow-x: hidden;\r\n\t\tfont-size: 16px;\r\n\t}\r\n\r\n\t.container {\r\n\t\theight: initial;\r\n\t\tmin-height: initial;\r\n\t}\r\n\r\n\t.innerContainer, .secondaryContainer, .pokemonTypesContainer {\r\n\t\t-webkit-box-orient: vertical;\r\n\t\t-webkit-box-direction: normal;\r\n\t\t    -ms-flex-direction: column;\r\n\t\t        flex-direction: column;\r\n\t}\r\n\r\n\t.innerContainer {\r\n\t\tpadding-top: 50px;\r\n\t}\r\n\r\n\t.secondaryContainer, .pokemonVCard {\r\n\t\t-webkit-box-align: center;\r\n\t\t    -ms-flex-align: center;\r\n\t\t            -ms-grid-row-align: center;\r\n\t\t        align-items: center;\r\n\t}\r\n\r\n\t.mediumSize {\r\n\t\tmargin-top: 70px;\r\n\t}\r\n\r\n\t.pokemonHeight, .pokemonWeight, .mediumSize, .pokemonHabitat, .multiplierRow, .pokemonDescription, .pokemonHeldItems > ul, .pokemonAbilities > ul, .pokemonMultipliers {\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t.pokemonDescription {\r\n\t\tmargin: 0 auto;\r\n\t}\r\n\r\n\t.pokemonStats, .pokemonFamily {\r\n\t\tmax-width: 90%;\r\n\t}\r\n\r\n\t.pokemonDescription {\r\n\t\tmax-width: 80%;\r\n\t}\r\n\r\n\t.morphsearch.open .morphsearch-form {\r\n\t\theight: 70px;\r\n\t}\r\n\r\n\t.jp {\r\n\t\tfont-size: 200%;\r\n\t\ttop: 10%;\r\n\t\topacity: .7;\r\n\t\tposition: relative;\r\n\t\tmargin-bottom: -35px;\r\n\t    margin-top: 23px;\r\n\t}\r\n\r\n\t.tooltip-onleft {\r\n\t    width: 239%;\r\n\t    left: -65%;\r\n\t    bottom: -2px;\r\n\t}\r\n\r\n\t.tooltip-onright {\r\n\t\twidth: 100%;\r\n\t    left: 0%;\r\n\t}\r\n\r\n\t.multiplierAttack, .multiplierDefense {\r\n\t    position: relative;\r\n\t}\r\n\r\n\t.softHidden {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t.switchMultiplier > .multiplierAttack {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t.switchMultiplier > .multiplierDefense {\r\n\t\tdisplay: block;\r\n\t}\r\n\r\n\t.pokemonHeldItems {\r\n\t    margin-bottom: 50px;\r\n\t}\r\n\r\n\t.secondaryContainer > .pokemonMultipliers {\r\n\t    -ms-flex-preferred-size: 1px;\r\n\t        flex-basis: 1px;\r\n\t    height: auto;\r\n\t}\r\n\r\n\t.logo {\r\n\t\ttop: 1%;\r\n    \tleft: 10%;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 350px) {\r\n\t.liStat {\r\n\t\tfont-size: 72%;\r\n\t}\r\n}\r\n\t", ""]);
	
	// exports


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(30);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./desktop.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./desktop.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "@media screen and (min-width: 900px) {\r\n\t::-webkit-scrollbar-track {\t\r\n\t\tbackground-color: \ttransparent;\r\n\t}\r\n\r\n\t::-webkit-scrollbar {\r\n\t\twidth: 8px;\r\n\t\tbackground-color: \ttransparent;\r\n\t}\r\n\r\n\t::-webkit-scrollbar-thumb {\r\n\t\tbackground-color: \t#555;\r\n\t\tborder-radius: \t\t4px;\r\n\t}\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = run;
	
	var _pokemons = __webpack_require__(32);
	
	var _pokemons2 = _interopRequireDefault(_pokemons);
	
	var _quotes = __webpack_require__(33);
	
	var _quotes2 = _interopRequireDefault(_quotes);
	
	var _getColors = __webpack_require__(34);
	
	var _getColors2 = _interopRequireDefault(_getColors);
	
	var _getHappiness = __webpack_require__(36);
	
	var _getHappiness2 = _interopRequireDefault(_getHappiness);
	
	var _recentPokemons = __webpack_require__(37);
	
	var _currentPokemon = __webpack_require__(38);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var isOffline = false;
	
	function hasCompleted(completed, $rootScope) {
	    if (completed = 2) {
	        setTimeout(function () {
	            $rootScope.status = 'READY';
	        }, 300);
	        $rootScope.$broadcast('init');
	    }
	}
	
	function handleErrors($rootScope) {
	    if (!isOffline) {
	        $rootScope.status = 'SOMETHING BROKE :(';
	        setTimeout(function () {
	            $rootScope.status = 'RELODING';
	        }, 300);
	        setTimeout(function () {
	            location.reload(1);
	        }, 600);
	    }
	}
	
	function run($http, $rootScope, getInfoFactory) {
	    var quoteId = _quotes2.default[Math.floor(Math.random() * _quotes2.default.length)];
	    $rootScope.quote = quoteId[1];
	    $rootScope.quoteAuthor = quoteId[0];
	    if (isOffline) {
	        $rootScope.status = 'You are OFFLINE\nNo problem, you can safely search for Pokémons you already searched';
	    } else {
	        $rootScope.status = 'FETCHING';
	    }
	    $rootScope.reloadHome = function (id) {
	        window.location.hash = '';
	        window.location.reload(true);
	    };
	
	    var completed = 0;
	    $rootScope.currentPokemon = _currentPokemon.currentPokemon;
	    $rootScope.recentPokemons = _recentPokemons.recentPokemons;
	
	    $rootScope.up = function (string) {
	        if (string) {
	            return string.charAt(0).toUpperCase() + string.slice(1).replace('-', ' ');
	        }
	    };
	    $rootScope.getPokemonName = function (id) {
	        return _pokemons2.default[id - 1];
	    };
	    $rootScope.getPokemonId = function (name) {
	        return _pokemons2.default.indexOf(name) + 1;
	    };
	    getInfoFactory.getPokemon(_currentPokemon.currentPokemon).then(function (res) {
	        $rootScope.currentPokemon = res;
	        (0, _getColors2.default)($rootScope.currentPokemon.id);
	        completed += 1;
	        hasCompleted(completed, $rootScope);
	    }).catch(function (err) {
	        handleErrors($rootScope);
	    });
	
	    getInfoFactory.getSpecie(_currentPokemon.currentPokemon).then(function (res) {
	        $rootScope.pokemonSpecie = res;
	        $rootScope.happiness = (0, _getHappiness2.default)(res.base_happiness);
	
	        $rootScope.genere = res.genera.filter(function (text) {
	            if (text.language.name === 'en') {
	                return true;
	            } else {
	                return false;
	            }
	        })[0].genus;
	
	        $rootScope.jp = res.names.filter(function (text) {
	            if (text.language.name === 'ja') {
	                return true;
	            } else {
	                return false;
	            }
	        })[0].name;
	
	        $rootScope.description = res.flavor_text_entries.filter(function (text) {
	            if (text.language.name === 'en') {
	                return true;
	            } else {
	                return false;
	            }
	        })[0].flavor_text;
	        completed += 1;
	        hasCompleted(completed, $rootScope);
	    }).catch(function (err) {
	        handleErrors($rootScope);
	    });
	
	    if ('serviceWorker' in navigator) {
	        // Handler for messages coming from the service worker
	        navigator.serviceWorker.addEventListener('message', function (event) {
	            var offlineInterval = null;
	            if (event.data === 'OFFLINE') {
	                isOffline = true;
	                offlineInterval = setInterval(function () {
	                    $rootScope.$apply(function () {
	                        $rootScope.status = 'You are OFFLINE\nNo problem, you can safely search for Pokémons you already searched';
	                    });
	                }, 1000);
	            }
	            if (event.data === 'ONLINE') {
	                isOffline = false;
	            }
	        });
	    }
	}

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = [
		"bulbasaur",
		"ivysaur",
		"venusaur",
		"charmander",
		"charmeleon",
		"charizard",
		"squirtle",
		"wartortle",
		"blastoise",
		"caterpie",
		"metapod",
		"butterfree",
		"weedle",
		"kakuna",
		"beedrill",
		"pidgey",
		"pidgeotto",
		"pidgeot",
		"rattata",
		"raticate",
		"spearow",
		"fearow",
		"ekans",
		"arbok",
		"pikachu",
		"raichu",
		"sandshrew",
		"sandslash",
		"nidoran-f",
		"nidorina",
		"nidoqueen",
		"nidoran-m",
		"nidorino",
		"nidoking",
		"clefairy",
		"clefable",
		"vulpix",
		"ninetales",
		"jigglypuff",
		"wigglytuff",
		"zubat",
		"golbat",
		"oddish",
		"gloom",
		"vileplume",
		"paras",
		"parasect",
		"venonat",
		"venomoth",
		"diglett",
		"dugtrio",
		"meowth",
		"persian",
		"psyduck",
		"golduck",
		"mankey",
		"primeape",
		"growlithe",
		"arcanine",
		"poliwag",
		"poliwhirl",
		"poliwrath",
		"abra",
		"kadabra",
		"alakazam",
		"machop",
		"machoke",
		"machamp",
		"bellsprout",
		"weepinbell",
		"victreebel",
		"tentacool",
		"tentacruel",
		"geodude",
		"graveler",
		"golem",
		"ponyta",
		"rapidash",
		"slowpoke",
		"slowbro",
		"magnemite",
		"magneton",
		"farfetchd",
		"doduo",
		"dodrio",
		"seel",
		"dewgong",
		"grimer",
		"muk",
		"shellder",
		"cloyster",
		"gastly",
		"haunter",
		"gengar",
		"onix",
		"drowzee",
		"hypno",
		"krabby",
		"kingler",
		"voltorb",
		"electrode",
		"exeggcute",
		"exeggutor",
		"cubone",
		"marowak",
		"hitmonlee",
		"hitmonchan",
		"lickitung",
		"koffing",
		"weezing",
		"rhyhorn",
		"rhydon",
		"chansey",
		"tangela",
		"kangaskhan",
		"horsea",
		"seadra",
		"goldeen",
		"seaking",
		"staryu",
		"starmie",
		"mr-mime",
		"scyther",
		"jynx",
		"electabuzz",
		"magmar",
		"pinsir",
		"tauros",
		"magikarp",
		"gyarados",
		"lapras",
		"ditto",
		"eevee",
		"vaporeon",
		"jolteon",
		"flareon",
		"porygon",
		"omanyte",
		"omastar",
		"kabuto",
		"kabutops",
		"aerodactyl",
		"snorlax",
		"articuno",
		"zapdos",
		"moltres",
		"dratini",
		"dragonair",
		"dragonite",
		"mewtwo",
		"mew",
		"chikorita",
		"bayleef",
		"meganium",
		"cyndaquil",
		"quilava",
		"typhlosion",
		"totodile",
		"croconaw",
		"feraligatr",
		"sentret",
		"furret",
		"hoothoot",
		"noctowl",
		"ledyba",
		"ledian",
		"spinarak",
		"ariados",
		"crobat",
		"chinchou",
		"lanturn",
		"pichu",
		"cleffa",
		"igglybuff",
		"togepi",
		"togetic",
		"natu",
		"xatu",
		"mareep",
		"flaaffy",
		"ampharos",
		"bellossom",
		"marill",
		"azumarill",
		"sudowoodo",
		"politoed",
		"hoppip",
		"skiploom",
		"jumpluff",
		"aipom",
		"sunkern",
		"sunflora",
		"yanma",
		"wooper",
		"quagsire",
		"espeon",
		"umbreon",
		"murkrow",
		"slowking",
		"misdreavus",
		"unown",
		"wobbuffet",
		"girafarig",
		"pineco",
		"forretress",
		"dunsparce",
		"gligar",
		"steelix",
		"snubbull",
		"granbull",
		"qwilfish",
		"scizor",
		"shuckle",
		"heracross",
		"sneasel",
		"teddiursa",
		"ursaring",
		"slugma",
		"magcargo",
		"swinub",
		"piloswine",
		"corsola",
		"remoraid",
		"octillery",
		"delibird",
		"mantine",
		"skarmory",
		"houndour",
		"houndoom",
		"kingdra",
		"phanpy",
		"donphan",
		"porygon2",
		"stantler",
		"smeargle",
		"tyrogue",
		"hitmontop",
		"smoochum",
		"elekid",
		"magby",
		"miltank",
		"blissey",
		"raikou",
		"entei",
		"suicune",
		"larvitar",
		"pupitar",
		"tyranitar",
		"lugia",
		"ho-oh",
		"celebi",
		"treecko",
		"grovyle",
		"sceptile",
		"torchic",
		"combusken",
		"blaziken",
		"mudkip",
		"marshtomp",
		"swampert",
		"poochyena",
		"mightyena",
		"zigzagoon",
		"linoone",
		"wurmple",
		"silcoon",
		"beautifly",
		"cascoon",
		"dustox",
		"lotad",
		"lombre",
		"ludicolo",
		"seedot",
		"nuzleaf",
		"shiftry",
		"taillow",
		"swellow",
		"wingull",
		"pelipper",
		"ralts",
		"kirlia",
		"gardevoir",
		"surskit",
		"masquerain",
		"shroomish",
		"breloom",
		"slakoth",
		"vigoroth",
		"slaking",
		"nincada",
		"ninjask",
		"shedinja",
		"whismur",
		"loudred",
		"exploud",
		"makuhita",
		"hariyama",
		"azurill",
		"nosepass",
		"skitty",
		"delcatty",
		"sableye",
		"mawile",
		"aron",
		"lairon",
		"aggron",
		"meditite",
		"medicham",
		"electrike",
		"manectric",
		"plusle",
		"minun",
		"volbeat",
		"illumise",
		"roselia",
		"gulpin",
		"swalot",
		"carvanha",
		"sharpedo",
		"wailmer",
		"wailord",
		"numel",
		"camerupt",
		"torkoal",
		"spoink",
		"grumpig",
		"spinda",
		"trapinch",
		"vibrava",
		"flygon",
		"cacnea",
		"cacturne",
		"swablu",
		"altaria",
		"zangoose",
		"seviper",
		"lunatone",
		"solrock",
		"barboach",
		"whiscash",
		"corphish",
		"crawdaunt",
		"baltoy",
		"claydol",
		"lileep",
		"cradily",
		"anorith",
		"armaldo",
		"feebas",
		"milotic",
		"castform",
		"kecleon",
		"shuppet",
		"banette",
		"duskull",
		"dusclops",
		"tropius",
		"chimecho",
		"absol",
		"wynaut",
		"snorunt",
		"glalie",
		"spheal",
		"sealeo",
		"walrein",
		"clamperl",
		"huntail",
		"gorebyss",
		"relicanth",
		"luvdisc",
		"bagon",
		"shelgon",
		"salamence",
		"beldum",
		"metang",
		"metagross",
		"regirock",
		"regice",
		"registeel",
		"latias",
		"latios",
		"kyogre",
		"groudon",
		"rayquaza",
		"jirachi",
		"deoxys",
		"turtwig",
		"grotle",
		"torterra",
		"chimchar",
		"monferno",
		"infernape",
		"piplup",
		"prinplup",
		"empoleon",
		"starly",
		"staravia",
		"staraptor",
		"bidoof",
		"bibarel",
		"kricketot",
		"kricketune",
		"shinx",
		"luxio",
		"luxray",
		"budew",
		"roserade",
		"cranidos",
		"rampardos",
		"shieldon",
		"bastiodon",
		"burmy",
		"wormadam",
		"mothim",
		"combee",
		"vespiquen",
		"pachirisu",
		"buizel",
		"floatzel",
		"cherubi",
		"cherrim",
		"shellos",
		"gastrodon",
		"ambipom",
		"drifloon",
		"drifblim",
		"buneary",
		"lopunny",
		"mismagius",
		"honchkrow",
		"glameow",
		"purugly",
		"chingling",
		"stunky",
		"skuntank",
		"bronzor",
		"bronzong",
		"bonsly",
		"mime-jr",
		"happiny",
		"chatot",
		"spiritomb",
		"gible",
		"gabite",
		"garchomp",
		"munchlax",
		"riolu",
		"lucario",
		"hippopotas",
		"hippowdon",
		"skorupi",
		"drapion",
		"croagunk",
		"toxicroak",
		"carnivine",
		"finneon",
		"lumineon",
		"mantyke",
		"snover",
		"abomasnow",
		"weavile",
		"magnezone",
		"lickilicky",
		"rhyperior",
		"tangrowth",
		"electivire",
		"magmortar",
		"togekiss",
		"yanmega",
		"leafeon",
		"glaceon",
		"gliscor",
		"mamoswine",
		"porygon-z",
		"gallade",
		"probopass",
		"dusknoir",
		"froslass",
		"rotom",
		"uxie",
		"mesprit",
		"azelf",
		"dialga",
		"palkia",
		"heatran",
		"regigigas",
		"giratina",
		"cresselia",
		"phione",
		"manaphy",
		"darkrai",
		"shaymin",
		"arceus",
		"victini",
		"snivy",
		"servine",
		"serperior",
		"tepig",
		"pignite",
		"emboar",
		"oshawott",
		"dewott",
		"samurott",
		"patrat",
		"watchog",
		"lillipup",
		"herdier",
		"stoutland",
		"purrloin",
		"liepard",
		"pansage",
		"simisage",
		"pansear",
		"simisear",
		"panpour",
		"simipour",
		"munna",
		"musharna",
		"pidove",
		"tranquill",
		"unfezant",
		"blitzle",
		"zebstrika",
		"roggenrola",
		"boldore",
		"gigalith",
		"woobat",
		"swoobat",
		"drilbur",
		"excadrill",
		"audino",
		"timburr",
		"gurdurr",
		"conkeldurr",
		"tympole",
		"palpitoad",
		"seismitoad",
		"throh",
		"sawk",
		"sewaddle",
		"swadloon",
		"leavanny",
		"venipede",
		"whirlipede",
		"scolipede",
		"cottonee",
		"whimsicott",
		"petilil",
		"lilligant",
		"basculin",
		"sandile",
		"krokorok",
		"krookodile",
		"darumaka",
		"darmanitan",
		"maractus",
		"dwebble",
		"crustle",
		"scraggy",
		"scrafty",
		"sigilyph",
		"yamask",
		"cofagrigus",
		"tirtouga",
		"carracosta",
		"archen",
		"archeops",
		"trubbish",
		"garbodor",
		"zorua",
		"zoroark",
		"minccino",
		"cinccino",
		"gothita",
		"gothorita",
		"gothitelle",
		"solosis",
		"duosion",
		"reuniclus",
		"ducklett",
		"swanna",
		"vanillite",
		"vanillish",
		"vanilluxe",
		"deerling",
		"sawsbuck",
		"emolga",
		"karrablast",
		"escavalier",
		"foongus",
		"amoonguss",
		"frillish",
		"jellicent",
		"alomomola",
		"joltik",
		"galvantula",
		"ferroseed",
		"ferrothorn",
		"klink",
		"klang",
		"klinklang",
		"tynamo",
		"eelektrik",
		"eelektross",
		"elgyem",
		"beheeyem",
		"litwick",
		"lampent",
		"chandelure",
		"axew",
		"fraxure",
		"haxorus",
		"cubchoo",
		"beartic",
		"cryogonal",
		"shelmet",
		"accelgor",
		"stunfisk",
		"mienfoo",
		"mienshao",
		"druddigon",
		"golett",
		"golurk",
		"pawniard",
		"bisharp",
		"bouffalant",
		"rufflet",
		"braviary",
		"vullaby",
		"mandibuzz",
		"heatmor",
		"durant",
		"deino",
		"zweilous",
		"hydreigon",
		"larvesta",
		"volcarona",
		"cobalion",
		"terrakion",
		"virizion",
		"tornadus",
		"thundurus",
		"reshiram",
		"zekrom",
		"landorus",
		"kyurem",
		"keldeo",
		"meloetta",
		"genesect",
		"chespin",
		"quilladin",
		"chesnaught",
		"fennekin",
		"braixen",
		"delphox",
		"froakie",
		"frogadier",
		"greninja",
		"bunnelby",
		"diggersby",
		"fletchling",
		"fletchinder",
		"talonflame",
		"scatterbug",
		"spewpa",
		"vivillon",
		"litleo",
		"pyroar",
		"flabebe",
		"floette",
		"florges",
		"skiddo",
		"gogoat",
		"pancham",
		"pangoro",
		"furfrou",
		"espurr",
		"meowstic",
		"honedge",
		"doublade",
		"aegislash",
		"spritzee",
		"aromatisse",
		"swirlix",
		"slurpuff",
		"inkay",
		"malamar",
		"binacle",
		"barbaracle",
		"skrelp",
		"dragalge",
		"clauncher",
		"clawitzer",
		"helioptile",
		"heliolisk",
		"tyrunt",
		"tyrantrum",
		"amaura",
		"aurorus",
		"sylveon",
		"hawlucha",
		"dedenne",
		"carbink",
		"goomy",
		"sliggoo",
		"goodra",
		"klefki",
		"phantump",
		"trevenant",
		"pumpkaboo",
		"gourgeist",
		"bergmite",
		"avalugg",
		"noibat",
		"noivern",
		"xerneas",
		"yveltal",
		"zygarde",
		"diancie",
		"hoopa",
		"volcanion"
	];

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = [
		[
			"Prof. Oak",
			"Pokémon around the world wait for you, Ash."
		],
		[
			"Prof. Oak",
			"So, tell me about yourself. Are you a boy or a girl?"
		],
		[
			"Prof. Oak",
			"I came when I heard you defeated the Elite Four"
		],
		[
			"Dark Cave lass",
			"Don't try anything funny in the dark!"
		],
		[
			"Sailor",
			"I like feisty kids like you"
		],
		[
			"Youngster",
			"I like shorts! They're comfy and easy to wear!"
		],
		[
			"Youngster Joey",
			"My Rattata is the top percentage of all Rattata!"
		],
		[
			"Barry",
			"It's a $10 million fine if you're late!"
		],
		[
			"Gary Oak",
			"Smell you Later!"
		],
		[
			"Juggler",
			"Dropped my balls!"
		],
		[
			"Mom",
			"Oh...you look tired. Why don't you take a rest?"
		],
		[
			"Blaine",
			"You better have Burn Heal"
		],
		[
			"Nurse",
			"We hope to see you again"
		],
		[
			"Team Rocket guy",
			"I Dropped The Lift Key"
		],
		[
			"Celadon old man",
			"Hehehe! This gym is full of women!"
		],
		[
			"Ash",
			"It's a secret switch! Press﻿ it? Who wouldn't?"
		],
		[
			"Team Rocket Guy",
			"Don't touch the poster at the Game Corner! There's no secret switch behind it!"
		],
		[
			"Route 3 lass",
			"You looked at me, didn't you?"
		],
		[
			"Slateport swimmer",
			"Cheeks are most prone to burning."
		],
		[
			"Red",
			"..."
		],
		[
			"Prof. Oak",
			"It's not winning if your opponent is at a disadvantage"
		],
		[
			"Young fisherman",
			"I'll beat you with the magikarp my dad gave me"
		],
		[
			"Team Rocket grunt",
			"Develop amnesia conveniently and forget everything you heard!"
		],
		[
			"Barry",
			"We need Poké balls! P-O-K-E balls!"
		],
		[
			"Youngster Kevin",
			"These are not shorts! These are half-pants!"
		],
		[
			"Prof. Oak",
			"There's a time and place for everything, but not now."
		],
		[
			"Skyla",
			"Heads up! Make sure you are ready for it!"
		],
		[
			"Nebulablue",
			"Hell no, I can't be seen with that ****."
		],
		[
			"Route 23 lass",
			"It seems it ran away crying"
		],
		[
			"Harley",
			"Gotta go powder my nose!"
		],
		[
			"A girl",
			"Oh yes, im a girl"
		],
		[
			"Old man",
			"You remind me of my lost love. Yes, spitting image"
		],
		[
			"Swimmer",
			"You have to come from SOMEWHERE, right?"
		],
		[
			"Young couple",
			"Our love didnt work?"
		],
		[
			"Old Route 111 lady",
			"There's no need to be shy about it"
		],
		[
			"Seven island guy",
			"Do the Chansey Dance!"
		],
		[
			"Six island girl",
			"Hera, hera, HERACROSS!"
		],
		[
			"Route 11 gamer",
			"Fwahaha! I've never lost!"
		],
		[
			"Rock Tunnel hiker",
			"Hit me with your best shot!"
		],
		[
			"Youngster Regis",
			"Youngster? How rude! Call me Shorts Boy!"
		],
		[
			"Battle Frontier woman",
			"Here it is a sweet kiss from my Jynx"
		],
		[
			"Mt. Chimney hiker",
			"There are many hot trainers for company!"
		]
	];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.default = getColors;
	
	var _rbg = __webpack_require__(35);
	
	var _rbg2 = _interopRequireDefault(_rbg);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getColors(id) {
	    var image = new Image();
	    image.onload = function () {
	        var colorThief = new ColorThief();
	        var plt = colorThief.getPalette(image, 4);
	        var bgChannels, primaryChannels, secondaryChannels, thirdyChannels;
	
	        var _plt = _slicedToArray(plt, 4);
	
	        bgChannels = _plt[0];
	        primaryChannels = _plt[1];
	        secondaryChannels = _plt[2];
	        thirdyChannels = _plt[3];
	
	        var bgColor = (0, _rbg2.default)(bgChannels[0], bgChannels[1], bgChannels[2]);
	        var bgColorEnd = (0, _rbg2.default)(bgChannels[0] - 20, bgChannels[1] - 20, bgChannels[2] - 20);
	        var primaryColor = (0, _rbg2.default)(primaryChannels[0], primaryChannels[1], primaryChannels[2]);
	        var secondaryColor = (0, _rbg2.default)(secondaryChannels[0], secondaryChannels[1], secondaryChannels[2]);
	        var thirdyColor = (0, _rbg2.default)(thirdyChannels[0], thirdyChannels[1], thirdyChannels[2]);
	        var css = document.createElement('style');
	        css.type = 'text/css';
	        css.innerHTML = '   .bgColor { \n                                background: linear-gradient( 0deg, ' + bgColor + ', ' + bgColorEnd + ' );\n                                     }\n                            .primaryColor { color: ' + primaryColor + '; }\n                            .secondaryColor { color: ' + secondaryColor + '; } \n                            .thirdyColor { color: ' + thirdyColor + '; }\n                            .borderColor { \n                                text-shadow: -1px 0 ' + bgColor + ', 0 1px ' + bgColor + ', 1px 0 ' + bgColor + ', 0 -1px ' + bgColor + ';\n                            }\n                            .tooltipColor {\n                                background: ' + bgColor + ';\n                                border-bottom: 56px solid ' + secondaryColor + ';\n                            }\n                            .onoffswitch-inner:before {\n                                background-color: ' + secondaryColor + ';\n                            }\n                            .onoffswitch-label, .onoffswitch-switch {\n                                border: 2px solid ' + secondaryColor + ';\n                                background-color: ' + secondaryColor + '; \n                            }\n                            .onoffswitch-inner:before {\n                                color: ' + bgColor + ';\n                            }\n                            .onoffswitch-inner:after {\n                                background-color: ' + bgColor + '; \n                            }\n                            .onoffswitch-switch {\n                                background: ' + bgColor + ';\n                            }\n                            .onoffswitch-inner:after {\n                                color: ' + thirdyColor + ';\n                            }\n                            ';
	        document.body.appendChild(css);
	        document.head.querySelectorAll('meta[name=theme-color]')[0].content = bgColor;
	    };
	    image.src = 'images/pokemons/' + id + '.svg';
	    image.crossOrigin = 'Anonymous';
	}

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = rgb;
	function rgb(r, g, b) {
	    return "rgb(" + r + ", " + g + ", " + b + ")";
	}

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = getHappiness;
	function getHappiness(base) {
	    if (base < 1) {
	        return 'but is very unhappy';
	    } else if (base < 36) {
	        return 'but is quite annoyed';
	    } else if (base < 71) {
	        return 'and is happy';
	    } else if (base < 101) {
	        return 'and is very joyful';
	    } else if (base < 150) {
	        return 'and is totally cheerful';
	    }
	}

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var recentPokemons = JSON.parse(localStorage.getItem('recents'));
	
	exports.recentPokemons = recentPokemons;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.currentPokemon = undefined;
	
	var _pokemons = __webpack_require__(32);
	
	var _pokemons2 = _interopRequireDefault(_pokemons);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var hash = window.location.hash;
	var currentPokemon = /#\/?([\w-\d]+)/.exec(hash);
	if (!currentPokemon) {
	    exports.currentPokemon = currentPokemon = generateRandPokemon();
	} else {
	    if (_pokemons2.default.indexOf(currentPokemon[1]) >= 0) {
	        exports.currentPokemon = currentPokemon = currentPokemon[1];
	    } else {
	        exports.currentPokemon = currentPokemon = generateRandPokemon();
	    }
	}
	
	console.log(currentPokemon);
	
	function generateRandPokemon() {
	    return _pokemons2.default[Math.floor(0 + Math.random() * 648)];
	}
	
	exports.currentPokemon = currentPokemon;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getMultipliers = __webpack_require__(40);
	
	var _getMultipliers2 = _interopRequireDefault(_getMultipliers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var mainPokemon = function mainPokemon($scope, $http, $rootScope, $timeout, $localStorage) {
	    'ngInject';
	
	    _classCallCheck(this, mainPokemon);
	
	    $scope.$on('init', function () {
	        if ($rootScope.currentPokemon && $rootScope.currentPokemon.types) {
	            $scope.$storage = $localStorage;
	            var types = $rootScope.currentPokemon.types.map(function (type) {
	                return type.type.name;
	            });
	            $scope.multipliers = (0, _getMultipliers2.default)(types);
	            var habitat = $rootScope.pokemonSpecie.habitat;
	            if (habitat) {
	                habitat = habitat.name;
	            }
	            $scope.imageUrl = 'images/pokemons/' + $rootScope.currentPokemon.id + '.svg';
	            $scope.habitat = habitat ? habitat : 'in your pocket';
	            $scope.unveil = function () {
	                $rootScope.loaded = true;
	                $timeout(function () {
	                    $rootScope.animationsEnded = true;
	                    $rootScope.$apply(function () {
	                        $rootScope.animationsEnded = true;
	                    });
	                }, 5000);
	            };
	
	            $scope.getRarity = function (item) {
	                var mean = 0;
	                item.version_details.forEach(function (version) {
	                    if (!mean) {
	                        mean = version.rarity;
	                    }
	                    mean = (mean + version.rarity) / 2;
	                });
	                return mean;
	            };
	            $scope.getUrlItem = function (name) {
	                return 'images/items/' + name + '.svg';
	            };
	            $scope.getUrlType = function (name) {
	                return 'images/types/' + name + '.svg';
	            };
	            $scope.typeUrls = $rootScope.currentPokemon.types.map(function (type) {
	                return 'images/types/' + type.type.name + '.svg';
	            });
	        }
	    });
	};
	mainPokemon.$inject = ["$scope", "$http", "$rootScope", "$timeout", "$localStorage"];
	
	exports.default = mainPokemon;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getMultipliers;
	
	var _all_types = __webpack_require__(41);
	
	var _all_types2 = _interopRequireDefault(_all_types);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getMultipliers(types) {
	  var multipliers = {
	    defense: {},
	    attack: {}
	  };
	  types.forEach(function (type) {
	    var damage_relations = _all_types2.default[type];
	    var no_damage_to = damage_relations.attack.zero;
	    var no_damage_from = damage_relations.defense.zero;
	    var half_damage_to = damage_relations.attack.half;
	    var half_damage_from = damage_relations.defense.half;
	    var double_damage_to = damage_relations.attack.double;
	    var double_damage_from = damage_relations.defense.double;
	    no_damage_to.forEach(function (type) {
	      if (multipliers.attack.hasOwnProperty(type)) {
	        multipliers.attack[type] = multipliers.attack[type] * 0;
	      } else {
	        multipliers.attack[type] = 0;
	      }
	    });
	    no_damage_from.forEach(function (type) {
	      if (multipliers.defense.hasOwnProperty(type)) {
	        multipliers.defense[type] = multipliers.defense[type] * 0;
	      } else {
	        multipliers.defense[type] = 0;
	      }
	    });
	    half_damage_to.forEach(function (type) {
	      if (multipliers.attack.hasOwnProperty(type)) {
	        multipliers.attack[type] = multipliers.attack[type] * 0.5;
	      } else {
	        multipliers.attack[type] = 0.5;
	      }
	    });
	    half_damage_from.forEach(function (type) {
	      if (multipliers.defense.hasOwnProperty(type)) {
	        multipliers.defense[type] = multipliers.defense[type] * 0.5;
	      } else {
	        multipliers.defense[type] = 0.5;
	      }
	    });
	    double_damage_to.forEach(function (type) {
	      if (multipliers.attack.hasOwnProperty(type)) {
	        multipliers.attack[type] = multipliers.attack[type] * 2;
	      } else {
	        multipliers.attack[type] = 2;
	      }
	    });
	    double_damage_from.forEach(function (type) {
	      if (multipliers.defense.hasOwnProperty(type)) {
	        multipliers.defense[type] = multipliers.defense[type] * 2;
	      } else {
	        multipliers.defense[type] = 2;
	      }
	    });
	  });
	  return multipliers;
	}

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = {
		"bug": {
			"attack": {
				"double": [
					"psychic",
					"grass",
					"dark"
				],
				"half": [
					"fighting",
					"fire",
					"flying",
					"ghost",
					"poison",
					"steel",
					"fairy"
				],
				"zero": []
			},
			"defense": {
				"half": [
					"fighting",
					"grass",
					"ground"
				],
				"double": [
					"fire",
					"flying",
					"rock"
				],
				"zero": []
			}
		},
		"dark": {
			"attack": {
				"double": [
					"ghost",
					"psychic"
				],
				"half": [
					"dark",
					"fighting",
					"fairy"
				],
				"zero": []
			},
			"defense": {
				"half": [
					"dark",
					"ghost"
				],
				"double": [
					"bug",
					"fighting",
					"fairy"
				],
				"zero": [
					"psychic"
				]
			}
		},
		"dragon": {
			"attack": {
				"double": [
					"dragon"
				],
				"half": [
					"steel"
				],
				"zero": [
					"fairy"
				]
			},
			"defense": {
				"half": [
					"electric",
					"fire",
					"grass",
					"water"
				],
				"double": [
					"dragon",
					"ice",
					"fairy"
				],
				"zero": []
			}
		},
		"electric": {
			"attack": {
				"double": [
					"flying",
					"water"
				],
				"half": [
					"dragon",
					"electric",
					"grass"
				],
				"zero": [
					"ground"
				]
			},
			"defense": {
				"half": [
					"electric",
					"flying",
					"steel"
				],
				"double": [
					"ground"
				],
				"zero": []
			}
		},
		"fairy": {
			"attack": {
				"double": [
					"dark",
					"dragon",
					"fighting"
				],
				"half": [
					"fire",
					"poison",
					"steel"
				],
				"zero": []
			},
			"defense": {
				"half": [
					"bug",
					"dark",
					"fighting"
				],
				"double": [
					"poison",
					"steel"
				],
				"zero": [
					"dragon"
				]
			}
		},
		"fighting": {
			"attack": {
				"double": [
					"dark",
					"ice",
					"normal",
					"rock",
					"steel"
				],
				"half": [
					"bug",
					"fairy",
					"flying",
					"poison",
					"psychic"
				],
				"zero": [
					"ghost"
				]
			},
			"defense": {
				"half": [
					"bug",
					"dark",
					"rock"
				],
				"double": [
					"fairy",
					"flying",
					"psychic"
				],
				"zero": []
			}
		},
		"fire": {
			"attack": {
				"double": [
					"bug",
					"grass",
					"ice",
					"steel"
				],
				"half": [
					"dragon",
					"fire",
					"rock",
					"water"
				],
				"zero": []
			},
			"defense": {
				"half": [
					"bug",
					"fairy",
					"fire",
					"grass",
					"ice",
					"steel"
				],
				"double": [
					"bug",
					"fire",
					"flying",
					"ice",
					"poison"
				],
				"zero": []
			}
		},
		"flying": {
			"attack": {
				"double": [
					"bug",
					"fighting",
					"grass"
				],
				"half": [
					"electric",
					"rock",
					"steel"
				],
				"zero": []
			},
			"defense": {
				"half": [
					"bug",
					"fighting",
					"grass"
				],
				"double": [
					"electric",
					"ice",
					"rock"
				],
				"zero": [
					"ground"
				]
			}
		},
		"ghost": {
			"attack": {
				"double": [
					"ghost",
					"psychic"
				],
				"half": [
					"dark"
				],
				"zero": [
					"normal"
				]
			},
			"defense": {
				"half": [
					"bug",
					"poison"
				],
				"double": [
					"ghost",
					"dark"
				],
				"zero": [
					"normal",
					"fighting"
				]
			}
		},
		"grass": {
			"attack": {
				"double": [
					"ground",
					"rock",
					"water"
				],
				"half": [
					"bug",
					"dragon",
					"fire",
					"flying",
					"grass",
					"poison",
					"steel"
				],
				"zero": []
			},
			"defense": {
				"half": [
					"electric",
					"grass",
					"ground",
					"water"
				],
				"double": [
					"bug",
					"fire",
					"flying",
					"ice",
					"poison"
				],
				"zero": []
			}
		},
		"ground": {
			"attack": {
				"double": [
					"electric",
					"fire",
					"poison",
					"rock",
					"steel"
				],
				"half": [
					"bug",
					"grass"
				],
				"zero": [
					"flying"
				]
			},
			"defense": {
				"half": [
					"poison",
					"rock"
				],
				"double": [
					"grass",
					"ice",
					"water"
				],
				"zero": [
					"electric"
				]
			}
		},
		"ice": {
			"attack": {
				"double": [
					"dragon",
					"flying",
					"grass",
					"ground"
				],
				"half": [
					"fire",
					"ice",
					"steel",
					"water"
				],
				"zero": []
			},
			"defense": {
				"half": [
					"ice"
				],
				"double": [
					"fighting",
					"fire",
					"rock",
					"steel"
				],
				"zero": []
			}
		},
		"normal": {
			"attack": {
				"double": [],
				"half": [
					"rock",
					"steel"
				],
				"zero": [
					"ghost"
				]
			},
			"defense": {
				"half": [],
				"double": [
					"fighting"
				],
				"zero": [
					"ghost"
				]
			}
		},
		"poison": {
			"attack": {
				"double": [
					"grass",
					"fairy"
				],
				"half": [
					"ghost",
					"ground",
					"poison",
					"rock"
				],
				"zero": [
					"steel"
				]
			},
			"defense": {
				"half": [
					"bug",
					"fairy",
					"fighting",
					"grass",
					"poison"
				],
				"double": [
					"ground",
					"psychic"
				],
				"zero": []
			}
		},
		"psychic": {
			"attack": {
				"double": [
					"fighting",
					"poison"
				],
				"half": [
					"psychic",
					"steel"
				],
				"zero": [
					"dark"
				]
			},
			"defense": {
				"half": [
					"fighting",
					"psychic"
				],
				"double": [
					"bug",
					"dark",
					"ghost"
				],
				"zero": []
			}
		},
		"rock": {
			"attack": {
				"double": [
					"bug",
					"fire",
					"flying",
					"ice"
				],
				"half": [
					"fighting",
					"ground",
					"steel"
				],
				"zero": []
			},
			"defense": {
				"half": [
					"fire",
					"flying",
					"normal",
					"poison"
				],
				"double": [
					"fighting",
					"grass",
					"ground",
					"steel",
					"water"
				],
				"zero": []
			}
		},
		"steel": {
			"attack": {
				"double": [
					"fairy",
					"ice",
					"rock"
				],
				"half": [
					"electric",
					"fire",
					"steel",
					"water"
				],
				"zero": []
			},
			"defense": {
				"half": [
					"bug",
					"dragon",
					"fairy",
					"flying",
					"grass",
					"ice",
					"normal",
					"psychic",
					"rock",
					"steel"
				],
				"double": [
					"fighting",
					"fire",
					"ground"
				],
				"zero": [
					"poison"
				]
			}
		},
		"water": {
			"attack": {
				"double": [
					"fire",
					"ground",
					"rock"
				],
				"half": [
					"dragon",
					"grass",
					"steel"
				],
				"zero": []
			},
			"defense": {
				"half": [
					"fire",
					"ice",
					"steel",
					"water"
				],
				"double": [
					"electric",
					"grass"
				],
				"zero": []
			}
		}
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getMemebers = __webpack_require__(43);
	
	var _getMemebers2 = _interopRequireDefault(_getMemebers);
	
	var _config = __webpack_require__(44);
	
	var _pokemons = __webpack_require__(32);
	
	var _pokemons2 = _interopRequireDefault(_pokemons);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var pokemonFamily = function pokemonFamily($scope, $rootScope, $http, $timeout) {
	    'ngInject';
	
	    _classCallCheck(this, pokemonFamily);
	
	    $scope.$on('init', function () {
	        $scope.getImageUrl = function (id) {
	            return 'images/pokemons/' + id + '.svg';
	        };
	        $scope.reloadWith = function (id) {
	            window.location.hash = '#' + _pokemons2.default[id - 1];
	            window.location.reload(true);
	        };
	        var evolutionChainId = /chain\/(\d+)\/$/.exec($rootScope.pokemonSpecie.evolution_chain.url);
	        if (evolutionChainId && evolutionChainId.length > 0) {
	            $http.get(_config.config.baseUrl + '/evolution-chain/' + evolutionChainId[1] + '/index.json').success(function (res) {
	                $scope.family = res;
	                $scope.members = (0, _getMemebers2.default)(res);
	            }).error(function (data) {
	                console.log(data);
	                Bugsnag.notify("ErrorName", "Something broke!", {
	                    special_info: {
	                        pokemon: currentPokemon
	                    }
	                });
	            });
	        }
	    });
	};
	pokemonFamily.$inject = ["$scope", "$rootScope", "$http", "$timeout"];
	
	exports.default = pokemonFamily;

/***/ },
/* 43 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = getMemebers;
	function getMemebers(json) {
	    var blob = JSON.stringify(json);
	    var myRe = /pokemon-species\/(\d+)\//g;
	    var currMatch;
	    var members = [];
	    while ((currMatch = myRe.exec(blob)) !== null) {
	        members.push(currMatch[1]);
	    }
	    return members.reverse();
	}

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var config = {};
	
	config.baseUrl = 'https://cdn.rawgit.com/Naramsim/ninjask/master/data/api/v2';
	
	exports.config = config;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _pokemons = __webpack_require__(32);
	
	var _pokemons2 = _interopRequireDefault(_pokemons);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Morph = function Morph($scope) {
		'ngInject';
	
		_classCallCheck(this, Morph);
	
		$scope.pokemons = _pokemons2.default;
		$scope.initMorph = function () {
			initMorph();
		};
	};
	Morph.$inject = ["$scope"];
	
	exports.default = Morph;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _pokemons = __webpack_require__(32);
	
	var _pokemons2 = _interopRequireDefault(_pokemons);
	
	var _recentPokemons = __webpack_require__(37);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var pokemonSearch = function pokemonSearch($scope) {
	    'ngInject';
	
	    _classCallCheck(this, pokemonSearch);
	
	    $scope.pokemons = _pokemons2.default;
	    $scope.recents = _recentPokemons.recentPokemons;
	    $scope.getImageUrl = function (id) {
	        return 'images/pokemons/' + (_pokemons2.default.indexOf(id) + 1) + '.svg';
	    };
	    $scope.saveAndReload = function (pokemon) {
	        var recents = localStorage.getItem('recents');
	        if (recents) {
	            recents = JSON.parse(recents);
	            recents.unshift(pokemon);
	            localStorage.setItem('recents', JSON.stringify(recents.slice(0, 6)));
	        } else {
	            localStorage.setItem('recents', JSON.stringify([pokemon]));
	        }
	        window.location.hash = '#' + pokemon;
	        window.location.reload(true);
	    };
	};
	pokemonSearch.$inject = ["$scope"];
	
	exports.default = pokemonSearch;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _config = __webpack_require__(44);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var pokemonAbilities = function pokemonAbilities($scope, $http) {
		'ngInject';
	
		_classCallCheck(this, pokemonAbilities);
	
		$scope.$on('init', function () {
			$scope.getAbility = function (url) {
				var id = /ability\/(\d+)\/$/.exec(url);
				if (id && id.length > 0) {
					var localAbility = localStorage.getItem('a' + id[1]);
					if (!localAbility) {
						$http.get(_config.config.baseUrl + '/ability/' + id[1] + '/index.json').success(function (res) {
							$scope.abilityDescription = res.effect_entries[0].short_effect;
							localStorage.setItem('a' + id[1], res.effect_entries[0].short_effect);
						}).error(function (data) {
							return "Nothing";
						});
					} else {
						$scope.abilityDescription = localAbility;
					}
				}
			};
		});
	};
	pokemonAbilities.$inject = ["$scope", "$http"];
	
	exports.default = pokemonAbilities;

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var pokemonMultipliers = function pokemonMultipliers($scope) {
	    'ngInject';
	
	    _classCallCheck(this, pokemonMultipliers);
	
	    $scope.$on('init', function () {
	        var multiplierAttackElement = document.getElementsByClassName('multiplierAttack')[0];
	        var multiplierDefenseElement = document.getElementsByClassName('multiplierDefense')[0];
	        angular.element(multiplierDefenseElement).ready(function () {
	            var highestMultiplierHeight = Math.max(multiplierAttackElement.clientHeight, multiplierDefenseElement.clientHeight);
	            var css = document.createElement('style');
	            css.type = 'text/css';
	            css.innerHTML = '   .pokemonMultipliers { \n                                        height: ' + (highestMultiplierHeight + 32 + 12) + 'px;\n                                            }\n                                    ';
	            document.body.appendChild(css);
	        });
	    });
	};
	pokemonMultipliers.$inject = ["$scope"];
	
	exports.default = pokemonMultipliers;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _config = __webpack_require__(44);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var pokemonHeldItems = function pokemonHeldItems($scope, $http) {
		_classCallCheck(this, pokemonHeldItems);
	
		$scope.$on('init', function () {
			'ngInject';
	
			$scope.getHeldItem = function (url) {
				var id = /item\/(\d+)\/$/.exec(url);
				if (id && id.length > 0) {
					var localHeldItem = localStorage.getItem('h' + id[1]);
					if (!localHeldItem) {
						$http.get(_config.config.baseUrl + '/item/' + id[1] + '/index.json').success(function (res) {
							$scope.heldItemDescription = res.effect_entries[0].short_effect;
							localStorage.setItem('h' + id[1], res.effect_entries[0].short_effect);
						}).error(function (data) {
							return "Nothing";
						});
					} else {
						$scope.heldItemDescription = localHeldItem;
					}
				}
			};
		});
	};
	
	exports.default = pokemonHeldItems;

/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = pokemonFilterStartFilter;
	function pokemonFilterStartFilter() {
	    return function (arr, searchString) {
	        if (!searchString) {
	            return arr.slice(0, 6);
	        }
	        if (/^\w+$/.test(searchString)) {
	            if (arr) {
	                var result = [];
	                searchString = searchString.toLowerCase();
	                arr.forEach(function (item) {
	                    if (item.indexOf(searchString) === 0) {
	                        result.push(item);
	                    }
	                });
	                return result.slice(0, 6);
	            }
	        }
	    };
	}

/***/ },
/* 51 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = pokemonFilter;
	function pokemonFilter() {
	    return function (arr, searchString) {
	        if (!searchString) {
	            return arr.slice(251, 257);
	        }
	        if (arr) {
	            var result = [];
	            if (/^\w+$/.test(searchString)) {
	                searchString = searchString.toLowerCase();
	                arr.forEach(function (item) {
	                    if (item.indexOf(searchString) >= 0) {
	                        result.push(item);
	                    }
	                });
	            }
	            if (/^\d+$/.test(searchString)) {
	                searchString = +searchString;
	                if (searchString < 751 && searchString > 0) {
	                    result.push(arr[searchString - 1]);
	                }
	            }
	            return result.slice(0, 6);
	        }
	    };
	}

/***/ },
/* 52 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = multiFilter;
	function multiFilter() {
	    return function (arr, searchString) {
	        var result = {};
	        angular.forEach(arr, function (value, key) {
	            if (value === searchString) {
	                result[key] = value;
	            }
	        });
	        return result;
	    };
	}

/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = imageonloadDirective;
	function imageonloadDirective() {
	    return {
	        restrict: 'A',
	        link: function link(scope, element, attrs) {
	            element.bind('load', function () {
	                //call the function that was passed
	                scope.$apply(attrs.imageonload);
	            });
	        }
	    };
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = getInfoFactory;
	
	var _config = __webpack_require__(44);
	
	var _pokemons = __webpack_require__(32);
	
	var _pokemons2 = _interopRequireDefault(_pokemons);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getInfoFactory($http, $q) {
	    return {
	        getPokemon: function getPokemon(currentPokemon) {
	            var deferred = $q.defer();
	            $http.get(_config.config.baseUrl + '/pokemon/' + (_pokemons2.default.indexOf(currentPokemon) + 1) + '/index.json').success(function (res) {
	                deferred.resolve(res);
	            }).error(function (data) {
	                console.log(data);
	                Bugsnag.notify("ErrorName", "Something broke!", {
	                    special_info: {
	                        pokemon: currentPokemon
	                    }
	                });
	                deferred.reject(data);
	            });
	            return deferred.promise;
	        },
	        getSpecie: function getSpecie(currentPokemon) {
	            var deferred = $q.defer();
	            $http.get(_config.config.baseUrl + '/pokemon-species/' + (_pokemons2.default.indexOf(currentPokemon) + 1) + '/index.json').success(function (res) {
	                deferred.resolve(res);
	            }).error(function (data) {
	                console.log(data);
	                Bugsnag.notify("ErrorName", "Something broke!", {
	                    special_info: {
	                        pokemon: currentPokemon
	                    }
	                });
	                deferred.reject(data);
	            });
	            return deferred.promise;
	        }
	    };
	}

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';
	
	(function (window) {
	
	    // class helper functions from bonzo https://github.com/ded/bonzo
	
	    function classReg(className) {
	        return new RegExp('(^|\\s+)' + className + '(\\s+|$)');
	    }
	
	    window.classie = {
	        has: function has(elem, c) {
	            return elem.classList.contains(c);
	        },
	        add: function add(elem, c) {
	            elem.classList.add(c);
	        },
	        remove: function remove(elem, c) {
	            elem.classList.remove(c);
	        },
	        toggle: function toggleClass(elem, c) {
	            var fn = hasClass(elem, c) ? removeClass : addClass;
	            fn(elem, c);
	        }
	    };
	})(window);

/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';
	
	(function (window) {
	    window.initMorph = function () {
	        var morphSearch = document.getElementById('morphsearch'),
	            input = morphSearch.querySelector('input.morphsearch-input'),
	            ctrlClose = morphSearch.querySelector('span.morphsearch-close'),
	            isOpen = false,
	            isAnimating = false,
	
	        // show/hide search area
	        toggleSearch = function toggleSearch(evt) {
	            // return if open and the input gets focused
	            if (evt.type.toLowerCase() === 'focus' && isOpen) return false;
	
	            if (isOpen) {
	                classie.remove(morphSearch, 'open');
	                // trick to hide input text once the search overlay closes 
	                // todo: hardcoded times, should be done after transition ends
	                if (input.value !== '') {
	                    setTimeout(function () {
	                        classie.add(morphSearch, 'hideInput');
	                        setTimeout(function () {
	                            classie.remove(morphSearch, 'hideInput');
	                            input.value = '';
	                        }, 300);
	                    }, 500);
	                }
	
	                input.blur();
	            } else {
	                classie.add(morphSearch, 'open');
	            }
	            isOpen = !isOpen;
	        };
	        // events
	        input.addEventListener('focus', toggleSearch);
	        ctrlClose.addEventListener('click', toggleSearch);
	        // esc key closes search overlay
	        // keyboard navigation events
	        document.addEventListener('keydown', function (ev) {
	            var keyCode = ev.keyCode || ev.which;
	            if (keyCode === 27 && isOpen) {
	                toggleSearch(ev);
	            }
	            if (keyCode === 70 && !isOpen) {
	                toggleSearch(ev);
	                setTimeout(function () {
	                    input.focus();
	                }, 600);
	            }
	            if (keyCode === 82 && !isOpen) {
	                window.location.hash = '';
	                window.location.reload(true);
	            }
	        });
	    };
	})(window);

/***/ },
/* 57 */
/***/ function(module, exports) {

	var appCacheIframe;
	
	function hasSW() {
	  return 'serviceWorker' in navigator &&
	    // This is how I block Chrome 40 and detect Chrome 41, because first has
	    // bugs with history.pustState and/or hashchange
	    (window.fetch || 'imageRendering' in document.documentElement.style) &&
	    (window.location.protocol === 'https:' || window.location.hostname === 'localhost')
	}
	
	function install(options) {
	  options || (options = {});
	
	  
	    if (hasSW()) {
	      var registration = navigator.serviceWorker
	        .register(
	          "sw.js"
	          
	        );
	
	      
	
	      return;
	    }
	  
	
	  
	    if (window.applicationCache) {
	      var directory = "appcache/";
	      var name = "manifest";
	
	      var doLoad = function() {
	        var page = directory + name + '.html';
	        var iframe = document.createElement('iframe');
	
	        
	
	        iframe.src = page;
	        iframe.style.display = 'none';
	
	        appCacheIframe = iframe;
	        document.body.appendChild(iframe);
	      };
	
	      if (document.readyState === 'complete') {
	        setTimeout(doLoad);
	      } else {
	        window.addEventListener('load', doLoad);
	      }
	
	      return;
	    }
	  
	}
	
	function applyUpdate(callback, errback) {
	  
	
	  
	}
	
	exports.install = install;
	exports.applyUpdate = applyUpdate;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map