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
	
	__webpack_require__(6);
	
	__webpack_require__(10);
	
	__webpack_require__(12);
	
	__webpack_require__(17);
	
	__webpack_require__(19);
	
	__webpack_require__(21);
	
	__webpack_require__(23);
	
	__webpack_require__(25);
	
	__webpack_require__(27);
	
	__webpack_require__(29);
	
	__webpack_require__(31);
	
	__webpack_require__(33);
	
	__webpack_require__(35);
	
	var _run = __webpack_require__(37);
	
	var _run2 = _interopRequireDefault(_run);
	
	var _MainPokemon = __webpack_require__(45);
	
	var _MainPokemon2 = _interopRequireDefault(_MainPokemon);
	
	var _PokemonFamily = __webpack_require__(46);
	
	var _PokemonFamily2 = _interopRequireDefault(_PokemonFamily);
	
	var _Morph = __webpack_require__(49);
	
	var _Morph2 = _interopRequireDefault(_Morph);
	
	var _PokemonSearch = __webpack_require__(50);
	
	var _PokemonSearch2 = _interopRequireDefault(_PokemonSearch);
	
	var _PokemonAbilities = __webpack_require__(52);
	
	var _PokemonAbilities2 = _interopRequireDefault(_PokemonAbilities);
	
	var _PokemonMultipliers = __webpack_require__(53);
	
	var _PokemonMultipliers2 = _interopRequireDefault(_PokemonMultipliers);
	
	var _PokemonHeldItems = __webpack_require__(56);
	
	var _PokemonHeldItems2 = _interopRequireDefault(_PokemonHeldItems);
	
	var _PokemonFavourites = __webpack_require__(57);
	
	var _PokemonFavourites2 = _interopRequireDefault(_PokemonFavourites);
	
	var _FavouriteTrash = __webpack_require__(58);
	
	var _FavouriteTrash2 = _interopRequireDefault(_FavouriteTrash);
	
	var _pokemonFilterStartFilter = __webpack_require__(59);
	
	var _pokemonFilterStartFilter2 = _interopRequireDefault(_pokemonFilterStartFilter);
	
	var _pokemonFilter = __webpack_require__(60);
	
	var _pokemonFilter2 = _interopRequireDefault(_pokemonFilter);
	
	var _multiFilter = __webpack_require__(61);
	
	var _multiFilter2 = _interopRequireDefault(_multiFilter);
	
	var _imageonloadDirective = __webpack_require__(62);
	
	var _imageonloadDirective2 = _interopRequireDefault(_imageonloadDirective);
	
	var _getInfoFactory = __webpack_require__(63);
	
	var _getInfoFactory2 = _interopRequireDefault(_getInfoFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(64);
	__webpack_require__(65);
	
	var runtime = __webpack_require__(66);
	
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
	
	angular.module('App', ['ngAnimate', 'ngStorage']).run(_run2.default).controller('MainPokemon', _MainPokemon2.default).controller('PokemonFamily', _PokemonFamily2.default).controller('Morph', _Morph2.default).controller('PokemonSearch', _PokemonSearch2.default).controller('PokemonAbilities', _PokemonAbilities2.default).controller('PokemonMultipliers', _PokemonMultipliers2.default).controller('PokemonHeldItems', _PokemonHeldItems2.default).controller('PokemonFavourites', _PokemonFavourites2.default).controller('FavouriteTrash', _FavouriteTrash2.default).filter('pokemonFilterStart', _pokemonFilterStartFilter2.default).filter('pokemonFilter', _pokemonFilter2.default).filter('multi', _multiFilter2.default).directive('imageonload', _imageonloadDirective2.default).factory('getInfoFactory', _getInfoFactory2.default);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<html lang=\"\" ng-app=\"App\">\n    <head>\n        <meta charset=\"utf-8\">\n        <meta name=\"description\" content=\"Pokemons at their maximum level\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0\">\n\n        <meta name=\"theme-color\" content=\"#282b30\">\n        <meta name=\"msapplication-navbutton-color\" content=\"#282b30\">\n        <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"#282b30\">\n\n        <meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\n        <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"#282b30\">\n        <meta name=\"apple-mobile-web-app-title\" content=\"Colosseum\">\n        <meta name=\"msapplication-TileImage\" content=\"images/icons/launcher-192.png\">\n        <meta name=\"msapplication-TileColor\" content=\"#3f51b5\">\n\n        <title>Colosseum</title>\n\n        <link rel=\"manifest\" href=\"manifest.json\">\n        <link rel=\"shortcut icon\" href=\"images/icons/favicon.ico\">\n        <link rel=\"apple-touch-icon\" href=\"images/icons/apple-touch-icon.png\">\n        <link rel=\"icon\" sizes=\"192x192\" href=\"images/icons/launcher-192.png\">\n\n        <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>\n\n        <script data-apikey=\"a5c9247914387e79f30123dac3f6835c\" src=\"https://d2wy8f7a9ursnm.cloudfront.net/bugsnag-3.min.js\" async defer></script>\n        <script src=\"https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.7/angular.min.js\"></script>\n        <script src=\"https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.7/angular-animate.min.js\"></script>\n        <script src=\"https://cdnjs.cloudflare.com/ajax/libs/ngStorage/0.3.6/ngStorage.min.js\"></script>\n        <script src=\"https://cdnjs.cloudflare.com/ajax/libs/color-thief/2.0.1/color-thief.min.js\"></script>\n    </head>\n  <body>\n    <!--[if lt IE 8]>\n        <p class=\"browserupgrade\">You are using an <strong>outdated</strong> browser. Please <a href=\"http://browsehappy.com/\">upgrade your browser</a> to improve your experience.</p>\n    <![endif]-->\n    <div class=\"container bgColor\">\n        <div class=\"loadingContainer fadeout\" ng-show=\"!loaded\">\n            <div class=\"loader\">\n                <div class=\"loader-wrapper\">\n                    <div class=\"infiniteLoader\">\n                        <div class=\"roller first\"></div>\n                        <div class=\"roller first\"></div>\n                    </div>\n                    <div id=\"loader2\" class=\"infiniteLoader\">\n                        <div class=\"roller second\"></div>\n                        <div class=\"roller second\"></div>\n                    </div>\n                    <div id=\"loader3\" class=\"infiniteLoader\">\n                        <div class=\"roller third\"></div>\n                        <div class=\"roller third\"></div>\n                    </div>\n                </div>\n                <div class=\"quote\">{{ ::quote }}</div>\n                <div class=\"quoteBy\">\n                    <i>\n                        <div class=\"by inline\">By</div>\n                        <div class=\"author inline\">@{{ ::quoteAuthor }}</div>\n                    </i>\n                </div>\n                <div class=\"status\">{{ status }}</div>\n            </div>\n        </div>\n        <div class=\"mainContainer container\" ng-class=\"{ animation : loaded && !animationsEnded, animationEnded : animationsEnded }\" ng-controller=\"MainPokemon\">\n            <div class=\"logo to-bottom-logo delay-3\">\n                <img src=\"" + __webpack_require__(2) + "\" ng-click=\"reloadHome()\">\n            </div>\n            <div class=\"innerContainer\">\n                <div class=\"pokemonImage to-scale delay-1\">\n                    <div class=\"jp thirdyColor\">{{ ::jp }}</div>\n                    <img ng-src=\"{{ ::imageUrl }}\" imageonload=\"unveil()\">\n                </div>\n                <div class=\"pokemonStats\">\n                    <div class=\"pokemonVCard to-left\">\n                        <div class=\"pokemonGenere secondaryColor\">{{ ::genere }}</div>\n                        <div class=\"pokemonName primaryColor borderColor\">\n                            <div class=\"inline\">{{ ::up(currentPokemon.name) }}</div>\n                            <div class=\"inline favouriteContainer\">" + __webpack_require__(3) + "</div>\n                        </div>\n                        <div class=\"pokemonId\">{{ ::currentPokemon.id }}</div>\n                        <div class=\"pokemonTypesContainer\">\n                            <div class=\"pokemonTypes \">\n                                <ul>\n                                    <li class=\"padded inline\" ng-repeat=\"type in typeUrls\">\n                                        <img class=\"pokemonTypeVc\" ng-src=\"{{ ::type }}\">\n                                    </li>\n                                </ul>\n                            </div>\n                            <div class=\"padded topPadded pokemonHabitat primaryColor\">Loves to stay in {{ ::habitat }}s {{ ::happiness }}</div>\n                        </div>\n                    </div>\n                    <div class=\"to-fade\">\n                        <div class=\"pokemonHeight primaryColor verticalPadded\">Height {{ currentPokemon.height/10 }} meters</div>\n                        <div class=\"pokemonWeight primaryColor\">Weight {{ currentPokemon.weight/10 }} kilograms</div>\n                        <div class=\"pokemonBaseStats mediumSize\">\n                            <ul>\n                                <li ng-repeat=\"stat in currentPokemon.stats\" class=\"liStat\">\n                                    <div class=\"inline thirdyColor\">{{ ::up(stat.stat.name) }}</div>\n                                    <div class=\"inline padded\"> - </div>\n                                    <div class=\"inline secondaryColor\">{{ ::stat.base_stat }}</div>\n                                </li>\n                            </ul>\n                        </div>\n                        <div class=\"pokemonDescription primaryColor verticalPadded\">\n                            {{ ::description }}\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"secondaryContainer\">\n                <div class=\"pokemonAbilities to-top delay-1\" ng-controller=\"PokemonAbilities\">\n                    <div class=\"secondaryColor mediumSize primaryColor\">Abilities</div>\n                    <ul>\n                        <li class=\"padded verticalPadded thirdyColor tooltip\" ng-repeat=\"ability in currentPokemon.abilities\" ng-mouseover=\"getAbility(ability.ability.url)\">\n                            <span class=\"tooltip-item\">\n                                {{ ::up(ability.ability.name) }}\n                            </span>\n                            <span class=\"tooltip-content tooltipColor tooltip-onleft\">\n                                    <div class=\"sk-three-bounce\" ng-class=\"{ hidden : abilityDescription }\">\n                                        <div class=\"sk-child sk-bounce1\"></div>\n                                        <div class=\"sk-child sk-bounce2\"></div>\n                                        <div class=\"sk-child sk-bounce3\"></div>\n                                    </div>\n                                <span class=\"tooltip-text\" ng-class=\"{ hidden : !abilityDescription }\">\n                                    {{ abilityDescription }}\n                                </span>\n                            </span>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"pokemonFamily to-top delay-2\" ng-controller=\"PokemonFamily\">\n                    <div class=\"secondaryColor mediumSize primaryColor\">Family</div>\n                    <ul>\n                        <li class=\"padded verticalPadded inline\" ng-repeat=\"pokemon in members\">\n                            <img    ng-click=\"reloadWith(pokemon)\" \n                                    title=\"{{ ::getPokemonName(pokemon) }}\" \n                                    class=\"pokemonMember to-top\" \n                                    ng-src=\"{{ getImageUrl(pokemon) }}\" \n                                    style=\"transition-delay: {{($index + 4 * 3)/10}}s;\">\n                        </li>\n                    </ul>\n                </div>\n                <div    class=\"pokemonMultipliers to-top delay-3\" \n                        ng-class=\"{ switchMultiplier : $storage.multiplier }\" \n                        ng-controller=\"PokemonMultipliers\">\n                    <div class=\"secondaryColor mediumSize primaryColor pointer inline\">Multipliers</div>\n                    <div class=\"onoffswitch inline\">\n                        <input  type=\"checkbox\" \n                                name=\"onoffswitch\" \n                                class=\"onoffswitch-checkbox\" \n                                id=\"myonoffswitch\" \n                                ng-checked=\"!$storage.multiplier\" \n                                ng-click=\"$storage.multiplier = !$storage.multiplier\">\n                        <label class=\"onoffswitch-label\" for=\"myonoffswitch\">\n                            <span class=\"onoffswitch-inner\"></span>\n                            <span class=\"onoffswitch-switch\"></span>\n                        </label>\n                    </div>\n                    <ul class=\"multiplierAttack\">\n                        <li ng-repeat=\"multiplier in [0,0.25,0.5,1,2,4]\">\n                            <ul class=\"multiplierRow\">\n                                <li class=\"padded topPadded inline\" ng-repeat=\"(name, percentage) in multipliers.attack | multi:multiplier\">\n                                    <div class=\"centerAligned\">\n                                        <img class=\"inline pokemonType\" title=\"{{ ::name }}\" ng-src=\"{{ getUrlType(name) }}\">\n                                        <div class=\"miniLabel thirdyColor\">x{{multiplier}}</div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </li>\n                    </ul>\n                    <ul class=\"multiplierDefense softHidden\">\n                        <li ng-repeat=\"multiplier in [0,0.25,0.5,1,2,4]\">\n                            <ul class=\"multiplierRow\">\n                                <li class=\"padded topPadded inline\" ng-repeat=\"(name, percentage) in multipliers.defense | multi:multiplier\">\n                                    <div class=\"centerAligned\">\n                                        <img class=\"inline pokemonType\" title=\"{{ ::name }}\" ng-src=\"{{ getUrlType(name) }}\">\n                                        <div class=\"miniLabel thirdyColor\">x{{multiplier}}</div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </li>\n                    </ul>  \n                </div>\n                <div class=\"pokemonHeldItems to-top delay-4\" ng-controller=\"PokemonHeldItems\">\n                    <div class=\"secondaryColor mediumSize primaryColor\">Held Items</div>\n                    <ul>\n                        <li class=\"padded verticalPadded thirdyColor tooltip\" ng-repeat=\"item in currentPokemon.held_items\" ng-mouseover=\"getHeldItem(item.item.url)\">\n                            <div class=\"centerAligned\">\n                                <span class=\"tooltip-item\">\n                                    <img class=\"middleRow inline\" title=\"{{ ::item.item.name }}\" ng-src=\"{{ getUrlItem(item.item.name) }}\">\n                                    <div class=\"padded inline\">\n                                        {{ ::up(item.item.name) }} with probability {{ ::getRarity(item) }}%\n                                    </div>\n                                </span>\n                                <span class=\"tooltip-content tooltipColor tooltip-onright\">\n                                    <div class=\"sk-three-bounce\" ng-class=\"{ hidden : heldItemDescription }\">\n                                        <div class=\"sk-child sk-bounce1\"></div>\n                                        <div class=\"sk-child sk-bounce2\"></div>\n                                        <div class=\"sk-child sk-bounce3\"></div>\n                                    </div>\n                                    <span class=\"tooltip-text\" ng-class=\"{ hidden : !heldItemDescription }\">\n                                        {{ heldItemDescription }}\n                                    </span>\n                                </span>\n                            </div>\n                        </li>\n                        <li class=\"padded verticalPadded thirdyColor\" ng-show=\"!currentPokemon.held_items.length\">None</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n            \n        <div ng-controller=\"Morph\">" + __webpack_require__(4) + "</div>\n        \n        <script>\n            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n            ga('create', 'UA-69090146-3', 'auto');\n            ga('send', 'pageview');\n        </script>\n    </div>\n    <!-- build:js scripts/vendor.js -->\n    <!-- bower:js -->\n    <!-- endbower -->\n    <!-- endbuild -->\n    \n    <!-- build:js scripts/main.js -->\n    <!-- <script src=\"index.js\"></script> -->\n    <!-- endbuild -->\n  </body>\n</html>\n";

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "master-ball71acd2e800d33bd5d964ec9f6fe199c7.svg";

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<div class='wrapper' ng-controller=\"PokemonFavourites\">\n  <div class='wrapper_content'>\n    <div class='wrapper_content__inner'>\n      <input id='click' type='checkbox' ng-checked=\"isFav(currentPokemon.name)\" ng-click=\"toggleFav(currentPokemon.name)\">\n      <label for='click'>\n        <div class='favourite'>\n          <div class='spinner'>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n            <div class='spinner_part'></div>\n          </div>\n          <div class='favourite_heart'>\n            <div class='favourite_heart__left'></div>\n            <div class='favourite_heart__right'></div>\n          </div>\n          <div class='favourite_text'>\n            <span>Favourite</span>\n          </div>\n        </div>\n      </label>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div id=\"morphsearch\" class=\"morphsearch\" ng-controller=\"PokemonSearch\">\n    <div class=\"container morphContainer\">\n        <div class=\"searchContainer\">\n            <form class=\"morphsearch-form\">\n                <input class=\"morphsearch-input\" type=\"search\" ng-model=\"searchString\" placeholder=\"Search...\"/ ng-click=\"getFavourites()\">\n                \n            </form>\n            <div class=\"morphsearch-content\">\n                <div class=\"dummy-column\">\n                    <h2>Starting with</h2>\n                    <ul>\n                        <li class=\"dummy-media-object\" ng-click=\"saveAndReload(pokemon)\" ng-repeat=\"pokemon in pokemons | pokemonFilterStart:searchString\">\n                            <a href=\"\">\n                                <img ng-src=\"{{getImageUrl(pokemon)}}\" alt=\"{{pokemon}}\"/>\n                                <h3 class=\"inline\">{{up(pokemon)}}</h3>\n                                <h1 class=\"inline pokemonSearchId\">{{getPokemonId(pokemon)}}</h1>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"dummy-column\" ng-class=\"{ hidden : userHasTyped() }\">\n                    <h2>Beloved ones " + __webpack_require__(5) + "</h2>\n                    <ul class =\"fullHeight\">\n                        <li class=\"dummy-media-object\" ng-click=\"saveAndReload(pokemon)\" ng-repeat=\"pokemon in favourites track by $index\">\n                            <a href=\"\">\n                                <img ng-src=\"{{getImageUrl(pokemon)}}\" alt=\"{{pokemon}}\"/>\n                                <h3 class=\"inline\">{{up(pokemon)}}</h3>\n                                <h1 class=\"inline pokemonSearchId\">{{getPokemonId(pokemon)}}</h1>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"dummy-column\" ng-class=\"{ hidden : !userHasTyped() }\">\n                    <h2>Results</h2>\n                    <li class=\"dummy-media-object\" ng-click=\"saveAndReload(pokemon)\" ng-repeat=\"pokemon in pokemons | pokemonFilter:searchString\">\n                        <a href=\"\">\n                            <img ng-src=\"{{getImageUrl(pokemon)}}\" alt=\"{{pokemon}}\"/>\n                            <h3>{{up(pokemon)}}</h3>\n                            <h1 class=\"inline pokemonSearchId\">{{getPokemonId(pokemon)}}</h1>\n                        </a>\n                    </li>\n                </div>\n                <div class=\"dummy-column\">\n                    <h2>Recent</h2>\n                    <li class=\"dummy-media-object\" ng-click=\"saveAndReload(pokemon)\" ng-repeat=\"pokemon in recents track by $index\">\n                        <a href=\"\">\n                            <img ng-src=\"{{getImageUrl(pokemon)}}\" alt=\"{{pokemon}}\"/>\n                            <h3>{{up(pokemon)}}</h3>\n                            <h1 class=\"inline pokemonSearchId\">{{getPokemonId(pokemon)}}</h1>\n                        </a>\n                    </li>\n                </div>\n            </div><!-- /morphsearch-content -->\n            <div class=\"shortcuts\">\n                <div class=\"padded verticalPadded centerHorizontally\"><kbd>F</kbd>Find a Pokémon</div>\n                <div class=\"padded verticalPadded centerHorizontally\"><kbd>Tab</kbd>Moves between search elements</div>\n                <div class=\"padded verticalPadded centerHorizontally\"><kbd>Esc</kbd>Exit the search</div>\n                <div class=\"padded verticalPadded centerHorizontally\"><kbd>R</kbd>Random Pokémon</div>\n                <div class=\"padded verticalPadded centerHorizontally\"><bold>@</bold>Powered by <a href=\"https://github.com/PokeAPI/pokeapi\">Pokéapi</a></div>\n            </div>\n            <span class=\"morphsearch-close\"></span>\n        </div>\n    </div>\n</div><!-- /morphsearch -->\n<div class=\"overlay\"></div>\n<script type=\"text/javascript\">\n    initMorph();\n</script>";

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<label class=\"inline trashCan\" ng-controller=\"FavouriteTrash\" for=\"delete\" ng-click=\"deleteFavourites(); getFavourites();\">\n    <div class=\"wrapper\">\n        <div class=\"lid\"></div>\n        <div class=\"can\"></div>\n    </div>\n</label>\n";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n    display: block;\r\n}\r\nbody {\r\n    line-height: 1;\r\n}\r\nol, ul {\r\n    list-style: none;\r\n}\r\nblockquote, q {\r\n    quotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n    content: '';\r\n    content: none;\r\n}\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}", ""]);
	
	// exports


/***/ },
/* 8 */
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
/* 9 */
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, ".fadein,\r\n.fadeout {\r\n    -webkit-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s 1s;\r\n    transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s 1s;\r\n}\r\n\r\n.fadein.ng-hide-remove,\r\n.fadeout.ng-hide-add.ng-hide-add-active {\r\n    opacity: 0;\r\n}\r\n\r\n.fadeout.ng-hide-add,\r\n.fadein.ng-hide-remove.ng-hide-remove-active {\r\n  opacity: 1;\r\n}\r\n\r\n.to-left{\r\n\t-webkit-transform: translateX(150px);\r\n\t        transform: translateX(150px);\r\n\topacity: 0;\r\n}\r\n\r\n.to-top{\r\n\t-webkit-transform: translateY(150px);\r\n\t        transform: translateY(150px);\r\n\topacity: 0;\r\n}\r\n\r\n.to-bottom-logo{\r\n\t-webkit-transform: translateY(-150px);\r\n\t        transform: translateY(-150px);\r\n\topacity: 0;\r\n}\r\n\r\n.to-fade{\r\n\topacity: 0;\r\n}\r\n\r\n.to-scale{\r\n\t-webkit-transform: \tscale(.7);\r\n\t        transform: \tscale(.7);\r\n\topacity: \t0;\r\n}\r\n\r\n.animation .to-fade{\r\n\t-webkit-transition:0.5s opacity cubic-bezier(0.65, 0.18, 0.41, 1.34);\r\n\ttransition: 0.5s opacity cubic-bezier(0.65, 0.18, 0.41, 1.34);\r\n}\r\n\r\n.animation .to-left, .animation .to-scale, .animation .to-top, .animation .to-bottom-logo{\r\n\t-webkit-transition:0.3s cubic-bezier(0.65, 0.18, 0.41, 1.34);\r\n\ttransition: 0.3s cubic-bezier(0.65, 0.18, 0.41, 1.34);\r\n}\r\n\r\n.animation .to-left{\r\n\t-webkit-transition-delay: 1.4s;\r\n\t        transition-delay: 1.4s;\r\n}\r\n\r\n\r\n.animation .to-fade{\r\n\t-webkit-transition-delay: 1.6s;\r\n\t        transition-delay: 1.6s;\r\n}\r\n\r\n.animation .to-fade{\r\n\topacity: 1\r\n}\r\n\r\n.animation .to-left{\r\n\topacity: 1;\r\n\t-webkit-transform: translateX(0);\r\n\t        transform: translateX(0);\r\n}\r\n\r\n.animation .to-top{\r\n\topacity: 1;\r\n\t-webkit-transform: translateY(0);\r\n\t        transform: translateY(0);\r\n}\r\n\r\n.animation .to-bottom-logo{\r\n\topacity: 1;\r\n\t-webkit-transform: translateY(0);\r\n\t        transform: translateY(0);\r\n}\r\n\r\n.animation .to-scale{\r\n\t-webkit-transform: \tscale(1);\r\n\t        transform: \tscale(1);\r\n\topacity: \t1;\r\n\t-webkit-animation: blur 350ms;\r\n\t        animation: blur 350ms;\r\n}\r\n\r\n.animation .delay-1{\r\n\t-webkit-transition-delay: 1.5s;\r\n\t        transition-delay: 1.5s;\r\n}\r\n\r\n.animation .delay-2{\r\n\t-webkit-transition-delay: 1.6s;\r\n\t        transition-delay: 1.6s;\r\n}\r\n\r\n.animation .delay-3{\r\n\t-webkit-transition-delay: 1.7s;\r\n\t        transition-delay: 1.7s;\r\n}\r\n\r\n.animation .delay-4{\r\n\t-webkit-transition-delay: 1.8s;\r\n\t        transition-delay: 1.8s;\r\n}\r\n\r\n@-webkit-keyframes blur {\r\n\t0% { -webkit-filter: blur(0px); }\r\n\t50% { -webkit-filter: blur(1px); }\r\n\t100% { -webkit-filter: blur(0px); }\r\n}\r\n\r\n@keyframes blur {\r\n\t0% { -webkit-filter: blur(0px); }\r\n\t50% { -webkit-filter: blur(1px); }\r\n\t100% { -webkit-filter: blur(0px); }\r\n}\r\n\t\r\n.animationEnded .to-fade{\r\n\t-webkit-transition:0.5s opacity cubic-bezier(0.65, 0.18, 0.41, 1.34);\r\n\ttransition: 0.5s opacity cubic-bezier(0.65, 0.18, 0.41, 1.34);\r\n}\r\n\r\n.animationEnded .to-left, .animationEnded .to-scale, .animationEnded .to-top{\r\n\t-webkit-transition:0.3s cubic-bezier(0.65, 0.18, 0.41, 1.34);\r\n\ttransition: 0.3s cubic-bezier(0.65, 0.18, 0.41, 1.34);\r\n}\r\n\r\n.animationEnded .to-fade{\r\n\topacity: 1;\r\n}\r\n\r\n.animationEnded .to-left{\r\n\topacity: 1;\r\n\t-webkit-transform: translateX(0);\r\n\t        transform: translateX(0);\r\n}\r\n\r\n.animationEnded .to-top{\r\n\topacity: 1;\r\n\t-webkit-transform: translateY(0);\r\n\t        transform: translateY(0);\r\n}\r\n\r\n.animationEnded .to-bottom-logo{\r\n\topacity: 1;\r\n\t-webkit-transform: translateY(0);\r\n\t        transform: translateY(0);\r\n}\r\n\r\n.animationEnded .to-scale{\r\n\t-webkit-transform: \tscale(1);\r\n\t        transform: \tscale(1);\r\n\topacity: \t1;\r\n}", ""]);
	
	// exports


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n* Infinite Loader \r\n*\r\n* Author: Jonathan Silva with Naramsim\r\n* Url: http://portfolio.jonathansilva.com.br\r\n*\r\n*/\r\n/* ----- Base ----- */\r\n/* ----- Loader ----- */\r\n.loader {\r\n    line-height: 130%;\r\n}\r\n\r\n.quote {\r\n    margin-top: 60px;\r\n    color: #DCDCDC;\r\n    text-align: center;\r\n    max-width: 400px;\r\n    width: 70%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.quoteBy {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    margin-top: 5px;\r\n}\r\n\r\n.by {\r\n    color: #5A5A5A;\r\n}\r\n\r\n.author {\r\n    color: gray;\r\n}\r\n\r\n.loader-wrapper {\r\n    width: 148px;\r\n    height: 100px;\r\n    position: absolute;\r\n    margin: -50px 0 0 -74px;\r\n    left: 50%;\r\n}\r\n\r\n.infiniteLoader {\r\n    width: 148px;\r\n    height: 100px;\r\n    top: 0;\r\n    left: 0;\r\n    position: absolute;\r\n}\r\n.infiniteLoader:after {\r\n    content: \"\";\r\n    top: auto;\r\n    position: absolute;\r\n    display: block;\r\n    -webkit-animation: shadow 1.5s infinite linear;\r\n            animation: shadow 1.5s infinite linear;\r\n    -moz-animation: shadow 1.5s infinite linear;\r\n    bottom: 0em;\r\n    left: 0;\r\n    height: .25em;\r\n    width: 1em;\r\n    border-radius: 50%;\r\n    background-color: #EAEAEA;\r\n    opacity: 0.3;\r\n}\r\n\r\n.roller,\r\n.roller:last-child {\r\n    opacity: 0;\r\n    width: 70px;\r\n    height: 70px;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    -webkit-animation: rollercoaster 1.5s infinite linear;\r\n    -webkit-transform: rotate(105deg);\r\n    -moz-animation: rollercoaster 1.5s infinite linear;\r\n    -moz-transform: rotate(105deg);\r\n    animation: rollercoaster 1.5s infinite linear;\r\n    transform: rotate(105deg);\r\n}\r\n\r\n.roller:last-child {\r\n    left: auto;\r\n    right: 0;\r\n    -webkit-transform: rotate(-45deg);\r\n    -webkit-animation: rollercoaster2 1.5s infinite linear;\r\n    -moz-transform: rotate(-45deg);\r\n    -moz-animation: rollercoaster2 1.5s infinite linear;\r\n    transform: rotate(-45deg);\r\n    animation: rollercoaster2 1.5s infinite linear;\r\n}\r\n\r\n.roller:before,\r\n.roller:last-child:before {\r\n    display: block;\r\n    width: 15px;\r\n    height: 15px;\r\n}\r\n\r\n.first:before,\r\n.first:last-child:before {\r\n    -webkit-transform: scale(0.2);\r\n            transform: scale(0.2);\r\n    content: url(" + __webpack_require__(14) + ");\r\n}\r\n\r\n.second:before,\r\n.second:last-child:before {\r\n    -webkit-transform: scale(0.2);\r\n            transform: scale(0.2);\r\n    content: url(" + __webpack_require__(15) + ");\r\n}\r\n\r\n.third:before,\r\n.third:last-child:before {\r\n    -webkit-transform: scale(0.2);\r\n            transform: scale(0.2);\r\n    content: url(" + __webpack_require__(16) + ");\r\n}\r\n\r\n@-webkit-keyframes rollercoaster {\r\n    0% {\r\n        -webkit-transform: rotate(135deg);\r\n    }\r\n    8% {\r\n        -webkit-transform: rotate(240deg);\r\n    }\r\n    20% {\r\n        opacity: .8;\r\n        -webkit-transform: rotate(300deg);\r\n    }\r\n    40% {\r\n        -webkit-transform: rotate(380deg);\r\n    }\r\n    45% {\r\n        -webkit-transform: rotate(440deg);\r\n    }\r\n    50% {\r\n        -webkit-transform: rotate(495deg);\r\n        opacity: 1;\r\n    }\r\n    50.1% {\r\n        -webkit-transform: rotate(495deg);\r\n        opacity: 0;\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(495deg);\r\n        opacity: 0;\r\n    }\r\n}\r\n@-webkit-keyframes rollercoaster2 {\r\n    0% {\r\n        opacity: 0;\r\n    }\r\n    49.9% {\r\n        opacity: 0;\r\n    }\r\n    50% {\r\n        opacity: 1;\r\n        -webkit-transform: rotate(-45deg);\r\n    }\r\n    58% {\r\n        -webkit-transform: rotate(-160deg);\r\n    }\r\n    70% {\r\n        -webkit-transform: rotate(-240deg);\r\n    }\r\n    80% {\r\n        -webkit-transform: rotate(-300deg);\r\n    }\r\n    90% {\r\n        -webkit-transform: rotate(-340deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(-405deg);\r\n    }\r\n}\r\n@-webkit-keyframes shadow {\r\n    0% {\r\n        opacity: .3;\r\n        -webkit-transform: translateX(65px) scale(0.5, 0.5);\r\n    }\r\n    8% {\r\n        -webkit-transform: translateX(30px) scale(2, 2);\r\n    }\r\n    13% {\r\n        -webkit-transform: translateX(0px) scale(1.3, 1.3);\r\n    }\r\n    30% {\r\n        -webkit-transform: translateX(-15px) scale(0.5, 0.5);\r\n        opacity: 0.1;\r\n    }\r\n    50% {\r\n        -webkit-transform: translateX(60px) scale(1.2, 1.2);\r\n        opacity: 0.3;\r\n    }\r\n    60% {\r\n        -webkit-transform: translateX(130px) scale(2, 2);\r\n        opacity: 0.05;\r\n    }\r\n    65% {\r\n        -webkit-transform: translateX(145px) scale(1.2, 1.2);\r\n    }\r\n    80% {\r\n        -webkit-transform: translateX(120px) scale(0.5, 0.5);\r\n        opacity: 0.1;\r\n    }\r\n    90% {\r\n        -webkit-transform: translateX(80px) scale(0.8, 0.8);\r\n    }\r\n    100% {\r\n        -webkit-transform: translateX(60px);\r\n        opacity: 0.3;\r\n    }\r\n}\r\n/* Moz */\r\n/* No-prefix */\r\n@keyframes rollercoaster {\r\n    0% {\r\n        -webkit-transform: rotate(135deg);\r\n                transform: rotate(135deg);\r\n    }\r\n    8% {\r\n        -webkit-transform: rotate(240deg);\r\n                transform: rotate(240deg);\r\n    }\r\n    20% {\r\n        opacity: .8;\r\n        -webkit-transform: rotate(300deg);\r\n                transform: rotate(300deg);\r\n    }\r\n    40% {\r\n        -webkit-transform: rotate(380deg);\r\n                transform: rotate(380deg);\r\n    }\r\n    45% {\r\n        -webkit-transform: rotate(440deg);\r\n                transform: rotate(440deg);\r\n    }\r\n    50% {\r\n        -webkit-transform: rotate(495deg);\r\n                transform: rotate(495deg);\r\n        opacity: 1;\r\n    }\r\n    50.1% {\r\n        -webkit-transform: rotate(495deg);\r\n                transform: rotate(495deg);\r\n        opacity: 0;\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(495deg);\r\n                transform: rotate(495deg);\r\n        opacity: 0;\r\n    }\r\n}\r\n@keyframes rollercoaster2 {\r\n    0% {\r\n        opacity: 0;\r\n    }\r\n    49.9% {\r\n        opacity: 0;\r\n    }\r\n    50% {\r\n        opacity: 1;\r\n        -webkit-transform: rotate(-45deg);\r\n                transform: rotate(-45deg);\r\n    }\r\n    58% {\r\n        -webkit-transform: rotate(-160deg);\r\n                transform: rotate(-160deg);\r\n    }\r\n    70% {\r\n        -webkit-transform: rotate(-240deg);\r\n                transform: rotate(-240deg);\r\n    }\r\n    80% {\r\n        -webkit-transform: rotate(-300deg);\r\n                transform: rotate(-300deg);\r\n    }\r\n    90% {\r\n        -webkit-transform: rotate(-340deg);\r\n                transform: rotate(-340deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(-405deg);\r\n                transform: rotate(-405deg);\r\n    }\r\n}\r\n@keyframes shadow {\r\n    0% {\r\n        opacity: .3;\r\n        -webkit-transform: translateX(65px) scale(0.5, 0.5);\r\n                transform: translateX(65px) scale(0.5, 0.5);\r\n    }\r\n    8% {\r\n        -webkit-transform: translateX(30px) scale(2, 2);\r\n                transform: translateX(30px) scale(2, 2);\r\n    }\r\n    13% {\r\n        -webkit-transform: translateX(0px) scale(1.3, 1.3);\r\n                transform: translateX(0px) scale(1.3, 1.3);\r\n    }\r\n    30% {\r\n        -webkit-transform: translateX(-15px) scale(0.5, 0.5);\r\n                transform: translateX(-15px) scale(0.5, 0.5);\r\n        opacity: 0.1;\r\n    }\r\n    50% {\r\n        -webkit-transform: translateX(60px) scale(1.2, 1.2);\r\n                transform: translateX(60px) scale(1.2, 1.2);\r\n        opacity: 0.3;\r\n    }\r\n    60% {\r\n        -webkit-transform: translateX(130px) scale(2, 2);\r\n                transform: translateX(130px) scale(2, 2);\r\n        opacity: 0.05;\r\n    }\r\n    65% {\r\n        -webkit-transform: translateX(145px) scale(1.2, 1.2);\r\n                transform: translateX(145px) scale(1.2, 1.2);\r\n    }\r\n    80% {\r\n        -webkit-transform: translateX(120px) scale(0.5, 0.5);\r\n                transform: translateX(120px) scale(0.5, 0.5);\r\n        opacity: 0.1;\r\n    }\r\n    90% {\r\n        -webkit-transform: translateX(80px) scale(0.8, 0.8);\r\n                transform: translateX(80px) scale(0.8, 0.8);\r\n    }\r\n    100% {\r\n        -webkit-transform: translateX(60px);\r\n                transform: translateX(60px);\r\n        opacity: 0.3;\r\n    }\r\n}\r\n#loader2:after {\r\n    -webkit-animation-delay: 0.15s;\r\n    animation-delay: 0.15s;\r\n}\r\n#loader2 .roller {\r\n    -webkit-animation-delay: 0.15s;\r\n    animation-delay: 0.15s;\r\n}\r\n\r\n#loader3:after {\r\n    -webkit-animation-delay: 0.3s;\r\n    animation-delay: 0.3s;\r\n}\r\n#loader3 .roller {\r\n    -webkit-animation-delay: 0.3s;\r\n    animation-delay: 0.3s;\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "dive-balle69fb1c59edb845a8c726ac120f5cc2a.png";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "quick-ball4b832bf859b98e0984b901eb5fb178c1.png";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "master-ball9b4268f43fd5f71f96b9eb073a42b91d.png";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, ".logo:hover{\r\n    animation: rattle linear 0.3s;\r\n    animation-iteration-count: 1;\r\n    transform-origin: 50% 50%;\r\n    -webkit-animation: rattle linear 0.3s;\r\n    -webkit-animation-iteration-count: 1;\r\n    -webkit-transform-origin: 50% 50%;\r\n    -moz-animation: rattle linear 0.3s;\r\n    -moz-animation-iteration-count: 1;\r\n    -moz-transform-origin: 50% 50%;\r\n    -o-animation: rattle linear 0.3s;\r\n    -o-animation-iteration-count: 1;\r\n    -o-transform-origin: 50% 50%;\r\n    -ms-animation: rattle linear 0.3s;\r\n    -ms-animation-iteration-count: 1;\r\n    -ms-transform-origin: 50% 50%;\r\n}\r\n\r\n@keyframes rattle{\r\n    0% {\r\n        -webkit-transform:  translate(0px,0px)  rotate(0deg) ;\r\n                transform:  translate(0px,0px)  rotate(0deg) ;\r\n    }\r\n    24% {\r\n        -webkit-transform:  translate(2px,-1px)  rotate(10deg) ;\r\n                transform:  translate(2px,-1px)  rotate(10deg) ;\r\n    }\r\n    50% {\r\n        -webkit-transform:  translate(0px,0px)  rotate(0deg) ;\r\n                transform:  translate(0px,0px)  rotate(0deg) ;\r\n    }\r\n    71% {\r\n        -webkit-transform:  translate(-12px,0px)  rotate(-29deg) ;\r\n                transform:  translate(-12px,0px)  rotate(-29deg) ;\r\n    }\r\n    93% {\r\n        -webkit-transform:  translate(0px,0px)  rotate(0deg) ;\r\n                transform:  translate(0px,0px)  rotate(0deg) ;\r\n    }\r\n    97% {\r\n        -webkit-transform:  translate(3px,0px)  rotate(4deg) ;\r\n                transform:  translate(3px,0px)  rotate(4deg) ;\r\n    }\r\n    100% {\r\n        -webkit-transform:  translate(0px,0px)  rotate(0deg) ;\r\n                transform:  translate(0px,0px)  rotate(0deg) ;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes rattle {\r\n    0% {\r\n        -webkit-transform:  translate(0px,0px)  rotate(0deg) ;\r\n    }\r\n    24% {\r\n        -webkit-transform:  translate(2px,-1px)  rotate(10deg) ;\r\n    }\r\n    50% {\r\n        -webkit-transform:  translate(0px,0px)  rotate(0deg) ;\r\n    }\r\n    71% {\r\n        -webkit-transform:  translate(-12px,0px)  rotate(-29deg) ;\r\n    }\r\n    93% {\r\n        -webkit-transform:  translate(0px,0px)  rotate(0deg) ;\r\n    }\r\n    97% {\r\n        -webkit-transform:  translate(3px,0px)  rotate(4deg) ;\r\n    }\r\n    100% {\r\n        -webkit-transform:  translate(0px,0px)  rotate(0deg) ;\r\n    }\r\n}", ""]);
	
	// exports


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, ".onoffswitch {\r\n    position: relative; width: 108px;\r\n    -webkit-user-select:none; -moz-user-select:none; -ms-user-select: none;\r\n    vertical-align: sub;\r\n    margin-left: 10px;\r\n}\r\n.onoffswitch-checkbox {\r\n    display: none;\r\n}\r\n.onoffswitch-label {\r\n    display: block; overflow: hidden; cursor: pointer;\r\n    border-radius: 50px;\r\n}\r\n.onoffswitch-inner {\r\n    display: block; width: 200%; margin-left: -100%;\r\n    -webkit-transition: margin 0.3s ease-in 0s;\r\n    transition: margin 0.3s ease-in 0s;\r\n}\r\n.onoffswitch-inner:before, .onoffswitch-inner:after {\r\n    display: block; float: left; width: 50%; height: 27px; padding: 0; line-height: 27px;\r\n    font-size: 16px; color: white;\r\n    box-sizing: border-box;\r\n}\r\n.onoffswitch-inner:before {\r\n    content: \"Attack\";\r\n    padding-left: 10px;\r\n    text-align: left;\r\n}\r\n.onoffswitch-inner:after {\r\n    content: \"Defense\";\r\n    padding-right: 7px;\r\n    text-align: right;\r\n}\r\n.onoffswitch-switch {\r\n    display: block; \r\n    width: 31px; \r\n    height: 31px; \r\n    margin: 0px;\r\n    position: absolute; top: 0; bottom: 0;\r\n    right: 77px;\r\n    border-radius: 50px;\r\n    -webkit-transition: all 0.3s ease-in 0s;\r\n    transition: all 0.3s ease-in 0s; \r\n}\r\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {\r\n    margin-left: 0;\r\n}\r\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {\r\n    right: 0px; \r\n}", ""]);
	
	// exports


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "*, *:after, *:before { box-sizing: border-box; }\r\n.clearfix:before, .clearfix:after { content: ''; display: table; }\r\n.clearfix:after { clear: both; }\r\n\r\nbody {\r\n    font-size: 16px;\r\n    font-family: 'Montserrat', sans-serif;\r\n    background-color: #282b30;\r\n}\r\n\r\ninput {\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\na {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    outline: none;\r\n}\r\n\r\na:hover,\r\na:focus {\r\n    color: #ec5a62;\r\n}\r\n\r\na:focus {\r\n    outline: -webkit-focus-ring-color auto 5px;\r\n    outline-color: -webkit-focus-ring-color;\r\n    outline-style: auto;\r\n    outline-width: 5px;\r\n}\r\n\r\na:hover, a:active {\r\n    outline: 0;\r\n}\r\n\r\n.container {\r\n    position: relative;\r\n    height: 100%;\r\n    width: 100%;\r\n    min-height: 100%;\r\n}\r\n\r\n.mainContainer {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-user-select: none;       \r\n    -moz-user-select: none; \r\n    -ms-user-select: none;\r\n    -o-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\n.secondaryContainer {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n.innerContainer {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n    -webkit-box-flex: 5;\r\n        -ms-flex-positive: 5;\r\n            flex-grow: 5;\r\n}\r\n\r\n.pokemonImage {\r\n    position: relative;\r\n}\r\n\r\n.pokemonImage>img {\r\n    height: 45vh;\r\n    width: 45vw;\r\n    position: relative;\r\n}\r\n\r\n.pokemonStats {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center\r\n}\r\n\r\n.pokemonVCard {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.pokemonName {\r\n    font-size: 300%;\r\n    font-weight: 800;\r\n    z-index: 5;\r\n    position: relative;\r\n}\r\n\r\n.pokemonId {\r\n    font-size: 1334%;\r\n    opacity: .1;\r\n    margin-top: -149px;\r\n}\r\n\r\n.pokemonBaseStats {\r\n    padding-top: 1em;\r\n}\r\n\r\n.inline {\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n}\r\n\r\n.padded {\r\n    padding-right: 10px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.miniPadded {\r\n    padding-right: 5px;\r\n    padding-left: 5px;\r\n}\r\n\r\n.pokemonAbilities {\r\n    z-index: 10;\r\n}\r\n\r\n.verticalPadded {\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.topPadded {\r\n    padding-top: 10px;\r\n}\r\n\r\n.miniLabel {\r\n    text-align: center;\r\n    font-size: 11px;\r\n}\r\n\r\n.liStat:nth-child(even) {\r\n    padding: 5px;\r\n}\r\n\r\n.mediumSize {\r\n    font-size: 170%;\r\n}\r\n\r\n.pokemonDescription {\r\n    max-width: 40vw;\r\n    line-height: 1.5;\r\n    opacity: .8;\r\n}\r\n\r\n.pokemonTypesContainer {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n}\r\n\r\n.pokemonGenere {\r\n    margin-left: -36px;\r\n}\r\n\r\n.pokemonMember {\r\n    height: 90px;\r\n    width: 90px;\r\n    cursor: pointer;\r\n}\r\n\r\n.centerAligned {\r\n    vertical-align: middle;\r\n}\r\n\r\n.middleRow {\r\n    vertical-align: middle;\r\n    height: 40px;\r\n}\r\n\r\n.pokemonFamily {\r\n    max-width: 40%;\r\n}\r\n\r\n.pokemonFamily > ul {\r\n    text-align: center;\r\n}\r\n\r\n.pokemonAbilities, .pokemonFamily, .pokemonHeldItems {\r\n    /*flex-grow: 1;*/\r\n}\r\n\r\n.pokemonMultipliers {\r\n    -ms-flex-preferred-size: 350px;\r\n        flex-basis: 350px;\r\n}\r\n\r\n.loadingContainer {\r\n    min-height: 100%;\r\n    min-width: 100%;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #282b30;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    position: fixed;\r\n    z-index: 100;\r\n}\r\n\r\n.jp {\r\n    /*font-family: 'Noto Sans Japanese', serif;*/\r\n    font-weight: 400;\r\n    position: absolute;\r\n    top: 100%;\r\n    font-size: 1260%;\r\n    opacity: 0.1;\r\n    width: 400%;\r\n}\r\n\r\n.multiplierAttack, .multiplierDefense {\r\n    position: absolute;\r\n}\r\n\r\n.switchMultiplier > .multiplierAttack {\r\n    opacity: 0;\r\n}\r\n\r\n.switchMultiplier > .multiplierDefense {\r\n    opacity: 1;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.softHidden {\r\n    opacity: 0;\r\n}\r\n\r\n.pointer {\r\n    cursor: pointer;\r\n}\r\n\r\n.pokemonSearchId {\r\n    opacity: .2;\r\n    color: gray;\r\n    vertical-align: middle;\r\n    font-size: 30px;\r\n    margin-left: -20px;\r\n}\r\n\r\n.pokemonTypeVc {\r\n    height: 14px;\r\n}\r\n\r\n.pokemonType {\r\n    height: 14px;\r\n}\r\n\r\n.logo {\r\n    position: absolute;\r\n    top: 50px;\r\n    left: 50px;\r\n    cursor: pointer;\r\n    z-index: 1;\r\n}\r\n\r\n.logo > img {\r\n    height: 40px;\r\n}\r\n\r\n.status {\r\n    text-align: center;\r\n    margin-top: 20px;\r\n    color: #5a5a5a;\r\n    max-width: 40%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.centerHorizontally {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n}\r\n\r\n@media screen and (max-width: 1400px) {\r\n    body {\r\n        zoom: 0.8;\r\n    }\r\n    .onoffswitch-switch {\r\n        width: 30px;\r\n        height: 30px;\r\n    }\r\n}\r\n\r\n@media screen and (min-aspect-ratio: 19/9) and (min-width: 900px) {\r\n    .multiplierRow .centerAligned {\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: reverse;\r\n            -ms-flex-direction: row-reverse;\r\n                flex-direction: row-reverse;\r\n    }\r\n    .miniLabel {\r\n        display: -webkit-inline-box;\r\n        display: -ms-inline-flexbox;\r\n        display: inline-flex;\r\n    }\r\n\r\n    .multiplierRow li:nth-child(n+2) .miniLabel {\r\n        display: none;\r\n    }\r\n}", ""]);
	
	// exports


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "/* Codrops */\r\n\r\nhtml, body {\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.morphsearch {\r\n    border-radius: 23px;\r\n    width: 200px;\r\n    min-height: 40px;\r\n    background: #f1f1f1;\r\n    position: absolute;\r\n    z-index: 10000;\r\n    top: 50px;\r\n    right: 50px;\r\n    -webkit-transform-origin: 100% 0;\r\n    transform-origin: 100% 0;\r\n    -webkit-transition-property: min-height, width, top, right;\r\n    transition-property: min-height, width, top, right;\r\n    -webkit-transition-duration: 0.5s;\r\n    transition-duration: 0.5s;\r\n    -webkit-transition-timing-function: cubic-bezier(0.7,0,0.3,1);\r\n    transition-timing-function: cubic-bezier(0.7,0,0.3,1);\r\n}\r\n\r\n.morphsearch.open {\r\n    width: 100%;\r\n    min-height: 100%;\r\n    top: 0px;\r\n    right: 0px;\r\n}\r\n\r\n.morphsearch-form {\r\n    width: 100%;\r\n    height: 40px;\r\n    margin: 0 auto;\r\n    position: relative;\r\n    -webkit-transition-property: width, height, -webkit-transform;\r\n    transition-property: width, height, -webkit-transform;\r\n    transition-property: width, height, transform;\r\n    transition-property: width, height, transform, -webkit-transform;\r\n    -webkit-transition-duration: 0.5s;\r\n    transition-duration: 0.5s;\r\n    -webkit-transition-timing-function: cubic-bezier(0.7,0,0.3,1);\r\n    transition-timing-function: cubic-bezier(0.7,0,0.3,1);\r\n}\r\n\r\n.morphsearch.open .morphsearch-form {\r\n    width: 80%;\r\n    height: 100%;\r\n    -webkit-transform: translate3d(0,3em,0);\r\n    transform: translate3d(0,3em,0);\r\n}\r\n\r\n.morphsearch-input {\r\n    width: 100%;\r\n    height: 100%;\r\n    min-height: 40px;\r\n    padding: 0 10% 0 10px;\r\n    font-weight: 700;\r\n    border: none;\r\n    background: transparent;\r\n    font-size: 0.8em;\r\n    color: #ec5a62;\r\n    -webkit-transition: font-size 0.5s cubic-bezier(0.7,0,0.3,1);\r\n    transition: font-size 0.5s cubic-bezier(0.7,0,0.3,1);\r\n}\r\n\r\n.morphsearch-input::-ms-clear { /* remove cross in IE */\r\n    display: none;\r\n}\r\n\r\n.morphsearch.hideInput .morphsearch-input {\r\n    color: transparent;\r\n    -webkit-transition: color 0.3s;\r\n    transition: color 0.3s;\r\n}\r\n\r\n.morphsearch.open .morphsearch-input {\r\n    font-size: 400%;\r\n}\r\n\r\n/* placeholder */\r\n.morphsearch-input::-webkit-input-placeholder {\r\n    color: #c2c2c2;\r\n}\r\n\r\n.morphsearch-input:-moz-placeholder {\r\n    color: #c2c2c2;\r\n}\r\n\r\n.morphsearch-input::-moz-placeholder {\r\n    color: #c2c2c2;\r\n}\r\n\r\n.morphsearch-input:-ms-input-placeholder {\r\n    color: #c2c2c2;\r\n}\r\n\r\n/* hide placeholder when active in Chrome */\r\n.gn-search:focus::-webkit-input-placeholder {\r\n    color: transparent;\r\n}\r\n\r\ninput[type=\"search\"] { /* reset normalize */ \r\n    box-sizing: border-box; \r\n}\r\n\r\n.morphsearch-input:focus,\r\n.morphsearch-submit:focus {\r\n    outline: none;\r\n}\r\n\r\n.morphsearch-close {\r\n    width: 36px;\r\n    height: 36px;\r\n    position: absolute;\r\n    right: 1em;\r\n    top: 1em;\r\n    overflow: hidden;\r\n    text-indent: 100%;\r\n    cursor: pointer;\r\n    pointer-events: none;\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(0,0,1);\r\n    transform: scale3d(0,0,1);\r\n}\r\n\r\n.morphsearch.open .morphsearch-close {\r\n    opacity: 1;\r\n    pointer-events: auto;\r\n    -webkit-transform: scale3d(1,1,1);\r\n    transform: scale3d(1,1,1);\r\n    -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;\r\n    transition: opacity 0.3s, -webkit-transform 0.3s;\r\n    transition: opacity 0.3s, transform 0.3s;\r\n    transition: opacity 0.3s, transform 0.3s, -webkit-transform 0.3s;\r\n    -webkit-transition-delay: 0.5s;\r\n    transition-delay: 0.5s;\r\n}\r\n\r\n.morphsearch-close::before,\r\n.morphsearch-close::after {\r\n    content: '';\r\n    position: absolute;\r\n    width: 2px;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 50%;\r\n    border-radius: 3px;\r\n    opacity: 0.2;\r\n    background: #000;\r\n}\r\n\r\n.morphsearch-close:hover.morphsearch-close::before,\r\n.morphsearch-close:hover.morphsearch-close::after {\r\n    opacity: 1;\r\n}\r\n\r\n.morphsearch-close::before {\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n}\r\n\r\n.morphsearch-close::after {\r\n    -webkit-transform: rotate(-45deg);\r\n    transform: rotate(-45deg);\r\n}\r\n\r\n.morphsearch-content {\r\n    color: #333;\r\n    width: 100%;\r\n    height: 0;\r\n    overflow: hidden;\r\n    padding: 0 10.5%;\r\n    background: #f1f1f1;\r\n    pointer-events: none;\r\n    opacity: 0;\r\n}\r\n\r\n.shortcuts {\r\n    color: #333;\r\n    width: 100%;\r\n    height: 0;\r\n    overflow: hidden;\r\n    padding: 0 10.5%;\r\n    background: #f1f1f1;\r\n    pointer-events: none;\r\n    opacity: 0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    line-height: 16px;\r\n}\r\n\r\n.open .shortcuts {\r\n    margin-top: 1em;\r\n}\r\n\r\n.shortcuts bold {\r\n    font-size: 15px;\r\n}\r\n\r\n.shortcuts a {\r\n    color: #dc3f3f;\r\n}\r\n\r\n.shortcuts a:hover {\r\n    color: #ff4343;\r\n}\r\n\r\n.morphsearch.open .morphsearch-content {\r\n    opacity: 1;\r\n    margin-top: 4.5em;\r\n    height: 50vh;\r\n    overflow: visible; /* this breaks the transition of the children in FF: https://bugzilla.mozilla.org/show_bug.cgi?id=625289 */\r\n    pointer-events: auto;\r\n    -webkit-transition: opacity 0.3s 0.5s;\r\n    transition: opacity 0.3s 0.5s;\r\n}\r\n\r\n.morphsearch.open .shortcuts {\r\n    opacity: 1;\r\n    height: auto;\r\n    overflow: visible; /* this breaks the transition of the children in FF: https://bugzilla.mozilla.org/show_bug.cgi?id=625289 */\r\n    pointer-events: auto;\r\n    -webkit-transition: opacity 0.3s 0.5s;\r\n    transition: opacity 0.3s 0.5s;\r\n}\r\n\r\n.dummy-column {\r\n    width: 30%;\r\n    float: left;\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0,100px,0);\r\n    transform: translateY(100px);\r\n    -webkit-transition: -webkit-transform 0.5s, opacity 0.5s;\r\n    -webkit-transition: opacity 0.5s, -webkit-transform 0.5s;\r\n    transition: opacity 0.5s, -webkit-transform 0.5s;\r\n    transition: transform 0.5s, opacity 0.5s;\r\n    transition: transform 0.5s, opacity 0.5s, -webkit-transform 0.5s;\r\n}\r\n\r\n.morphsearch.open .dummy-column:first-child {\r\n    -webkit-transition-delay: 0.4s;\r\n    transition-delay: 0.4s;\r\n}\r\n\r\n.morphsearch.open .dummy-column:nth-child(2) {\r\n    -webkit-transition-delay: 0.5s;\r\n    transition-delay: 0.5s;\r\n}\r\n\r\n.morphsearch.open .dummy-column:nth-child(3) {\r\n    -webkit-transition-delay: 0.5s;\r\n    transition-delay: 0.5s;\r\n}\r\n\r\n.morphsearch.open .dummy-column:nth-child(4) {\r\n    -webkit-transition-delay: 0.6s;\r\n    transition-delay: 0.6s;\r\n}\r\n\r\n.morphsearch.open .dummy-column {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0,0,0);\r\n    transform: translate3d(0,0,0);\r\n}\r\n\r\n.dummy-column:nth-child(2) {\r\n    margin: 0 5%;\r\n}\r\n\r\n.dummy-column:nth-child(3) {\r\n    margin: 0 5%;\r\n}\r\n\r\n.dummy-column h2 {\r\n    height: 38px;\r\n    line-height: 38px;\r\n    font-size: 1em;\r\n    letter-spacing: 1px;\r\n    text-transform: uppercase;\r\n    font-weight: 800;\r\n    color: #c2c2c2;\r\n    padding: 0.5em 0;\r\n}\r\n\r\n.round {\r\n    border-radius: 50%;\r\n}\r\n\r\n.dummy-media-object {\r\n    display: block;\r\n    height: 70px;\r\n    margin: 0.3em 0;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n    background: rgba(118,117,128,0.05);\r\n}\r\n\r\n.dummy-media-object > a {\r\n    padding: 0.75em;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: block;\r\n}\r\n\r\n.dummy-media-object:hover,\r\n.dummy-media-object:focus {\r\n    background: rgba(118,117,128,0.1);\r\n}\r\n\r\n.dummy-media-object img {\r\n    display: inline-block;\r\n    width: 50px;    \r\n    height: 50px;\r\n    margin: 0 10px 0 0;\r\n    vertical-align: middle;\r\n}\r\n\r\n.dummy-media-object h3 {\r\n    vertical-align: middle;\r\n    font-size: 0.85em;\r\n    display: inline-block;\r\n    font-weight: 700;\r\n    margin: 0 0 0 0;\r\n    color: rgba(99, 99, 99, 0.7);\r\n}\r\n\r\n.dummy-media-object:hover h3 {\r\n    color: rgba(236,90,98,1);\r\n}\r\n\r\n/* Overlay */\r\n.overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0,0,0,0.5);\r\n    opacity: 0;\r\n    pointer-events: none;\r\n    -webkit-transition: opacity 0.5s;\r\n    transition: opacity 0.5s;\r\n    -webkit-transition-timing-function: cubic-bezier(0.7,0,0.3,1);\r\n    transition-timing-function: cubic-bezier(0.7,0,0.3,1);\r\n}\r\n\r\n.morphsearch.open ~ .overlay {\r\n    opacity: 1;\r\n}\r\n\r\nkbd {\r\n    -moz-border-radius:3px;\r\n    -moz-box-shadow:0 1px 0 rgba(0,0,0,0.2),0 0 0 2px #fff inset;\r\n    -webkit-border-radius:3px;\r\n    -webkit-box-shadow:0 1px 0 rgba(0,0,0,0.2),0 0 0 2px #fff inset;\r\n    background-color:#f7f7f7;\r\n    border:1px solid #ccc;\r\n    border-radius:3px;\r\n    box-shadow:0 1px 0 rgba(0,0,0,0.2),0 0 0 2px #fff inset;\r\n    color:#333;\r\n    display:inline-block;\r\n    font-family:Arial,Helvetica,sans-serif;\r\n    font-size:11px;\r\n    line-height:1.4;\r\n    margin:0 .1em;\r\n    margin-right: 5px;\r\n    padding:.1em .6em;\r\n    text-shadow:0 1px 0 #fff;\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n    .morphsearch-input {\r\n        padding: 0 25% 0 10px;\r\n    }\r\n    .morphsearch.open .morphsearch-input {\r\n        font-size: 2em;\r\n    }\r\n    .dummy-column {\r\n        float: none;\r\n        width: auto;\r\n        padding: 0 0 2em;\r\n    }\r\n    .dummy-column:nth-child(2) {\r\n        margin: 0;\r\n    }\r\n    .morphsearch.open .morphsearch-submit {\r\n        -webkit-transform: translate3d(0,-50%,0) scale3d(0.5,0.5,1);\r\n        transform: translate3d(0,-50%,0) scale3d(0.5,0.5,1);\r\n    }\r\n    .shortcuts {\r\n        display: none;\r\n    }\r\n    .morphsearch {\r\n        width: 60%;\r\n        top: 1%;\r\n        right: 10%;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 900px) {\r\n    .fullHeight {\r\n        height: 93.7%;\r\n        overflow-x: auto;\r\n    }\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, ".sk-three-bounce {\r\n    text-align: center;\r\n}\r\n.sk-three-bounce .sk-child {\r\n    width: 10px;\r\n    height: 10px;\r\n    background-color: #333;\r\n    border-radius: 100%;\r\n    display: inline-block;\r\n    -webkit-animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;\r\n    animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;\r\n}\r\n.sk-three-bounce .sk-bounce1 {\r\n    -webkit-animation-delay: -0.32s;\r\n    animation-delay: -0.32s;\r\n}\r\n.sk-three-bounce .sk-bounce2 {\r\n    -webkit-animation-delay: -0.16s;\r\n    animation-delay: -0.16s;\r\n}\r\n@-webkit-keyframes sk-three-bounce {\r\n    0%, 80%, 100% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n        opacity: 0;\r\n    }\r\n    40% {\r\n        -webkit-transform: scale(1);\r\n        transform: scale(1);\r\n        opacity: 1;\r\n    }\r\n}\r\n@keyframes sk-three-bounce {\r\n    0%, 80%, 100% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n        opacity: 0;\r\n    }\r\n    40% {\r\n        -webkit-transform: scale(1);\r\n        transform: scale(1);\r\n        opacity: 1;\r\n    }\r\n}", ""]);
	
	// exports


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "/* Codrops */\r\n\r\n.tooltip {\r\n    position: relative;\r\n    z-index: 999;\r\n}\r\n\r\n/* Trigger text */\r\n\r\n.tooltip-item {\r\n    cursor: pointer;\r\n    z-index: 100;\r\n    position: relative;\r\n    display: inline-block;\r\n    font-weight: 700;\r\n    -webkit-transition: background-color 0.3s, color 0.3s, -webkit-transform 0.3s;\r\n    transition: background-color 0.3s, color 0.3s, -webkit-transform 0.3s;\r\n    transition: background-color 0.3s, color 0.3s, transform 0.3s;\r\n    transition: background-color 0.3s, color 0.3s, transform 0.3s, -webkit-transform 0.3s;\r\n}\r\n\r\n.tooltip:hover .tooltip-item {\r\n    opacity: .9;\r\n    -webkit-transform: translate3d(0,-0.5em,0);\r\n    transform: translate3d(0,-0.5em,0);\r\n}\r\n\r\n/* Tooltip */\r\n\r\n.tooltip-content {\r\n    position: absolute;\r\n    z-index: 99;\r\n    text-align: left;\r\n    opacity: 0;\r\n    line-height: 1.5;\r\n    padding: 1.5em;\r\n    color: #fff;\r\n    cursor: default;\r\n    pointer-events: none;\r\n    border-radius: 5px;\r\n    -webkit-transform: translate3d(0,-0.5em,0);\r\n    transform: translate3d(0,-0.5em,0);\r\n    -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;\r\n    transition: opacity 0.3s, -webkit-transform 0.3s;\r\n    transition: opacity 0.3s, transform 0.3s;\r\n    transition: opacity 0.3s, transform 0.3s, -webkit-transform 0.3s;\r\n}\r\n\r\n.tooltip-onright {\r\n    width: 450px;\r\n    right: -5%;\r\n    bottom: 8px;\r\n}\r\n\r\n.tooltip-onleft {\r\n    width: 360px;\r\n    left: -10%;\r\n    bottom: -5px;\r\n}\r\n\r\n.tooltip-text {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0,1.5em,0);\r\n    transform: translate3d(0,1.5em,0);\r\n    -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;\r\n    transition: opacity 0.3s, -webkit-transform 0.3s;\r\n    transition: opacity 0.3s, transform 0.3s;\r\n    transition: opacity 0.3s, transform 0.3s, -webkit-transform 0.3s;\r\n}\r\n\r\n.tooltip:hover .tooltip-content,\r\n.tooltip:hover .tooltip-text {\r\n    pointer-events: auto;\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0,0,0);\r\n    transform: translate3d(0,0,0);\r\n}", ""]);
	
	// exports


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(30);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./fav.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./fav.css");
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

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "body .wrapper_content, body .wrapper_title, .favourite {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 18px;\r\n    top: 0;\r\n    margin: auto;\r\n}\r\n\r\nbody {\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-font-smoothing: antialiased;\r\n    -o-font-smoothing: antialiased;\r\n}\r\n\r\n/* Styles */\r\n\r\nbody .wrapper {\r\n    position: relative;\r\n    margin-left: 30px;\r\n}\r\nbody .wrapper * {\r\n    box-sizing: content-box;\r\n}\r\nbody .wrapper_content {\r\n\r\n    height: 60px;\r\n    background-color: transparent;\r\n    border-radius: 1px;\r\n}\r\nbody .wrapper_title {\r\n    float: left;\r\n    text-align: left;\r\n    right: auto;\r\n    width: 320px;\r\n    height: 230px;\r\n}\r\n\r\nbody .love {\r\n    position: absolute;\r\n    right: 20px;\r\n    bottom: 0px;\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n}\r\nbody .love p {\r\n    color: white;\r\n    font-weight: normal;\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\nbody .love a {\r\n    color: white;\r\n    font-weight: 700;\r\n    text-decoration: none;\r\n}\r\nbody .love img {\r\n    position: relative;\r\n    top: 3px;\r\n    margin: 0px 4px;\r\n    width: 10px;\r\n}\r\n\r\n.wrapper input {\r\n    display: none;\r\n}\r\n\r\n.favourite {\r\n    border-radius: 100px;\r\n    width: 16px;\r\n    overflow: visible;\r\n    height: 16px;\r\n    cursor: pointer;\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n    -webkit-animation: pop .3s;\r\n            animation: pop .3s;\r\n    -webkit-animation-delay: 4s;\r\n            animation-delay: 4s;\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n    padding: 10px;\r\n    box-shadow: 0px 0px 0px 3px white;\r\n    color: white;\r\n    -webkit-transition-property: width;\r\n    transition-property: width;\r\n    -webkit-transition-duration: .2s,.2s;\r\n            transition-duration: .2s,.2s;\r\n    -webkit-transition-delay: 2s;\r\n            transition-delay: 2s;\r\n    -webkit-transition-timing-function: cubic-bezier(0.38, -0.35, 0.265, 1.15);\r\n            transition-timing-function: cubic-bezier(0.38, -0.35, 0.265, 1.15);\r\n}\r\n\r\n.favourite:hover > .favourite_heart .favourite_heart__left {\r\n    /*transform: scale(1.1) rotate(-45deg);\r\n    transition-property: transform;\r\n    transition-duration: .1s;*/\r\n}\r\n\r\n@media screen and (min-width: 900px) {\r\n    .favourite {\r\n        top: 1px; /* HACK: to fix heart alignment*/\r\n    }\r\n\r\n    .favourite:hover > .favourite_text {\r\n        top: 1px;\r\n        opacity: 1;\r\n        -webkit-transition-property: top,opacity;\r\n        transition-property: top,opacity;\r\n        -webkit-transition-duration: 0.3s;\r\n                transition-duration: 0.3s;\r\n        -webkit-transition-delay: .3s;\r\n                transition-delay: .3s;\r\n    }\r\n\r\n    .favourite:hover {\r\n        width: 146px;\r\n        box-shadow: 0px 0px 0px 3px white;\r\n    }\r\n}\r\n\r\n.favourite:hover > .favourite_heart .favourite_heart__right {\r\n    /*transform: scale(1.1) rotate(45deg);\r\n    transition-property: transform;\r\n    transition-duration: .1s;*/\r\n}\r\n.favourite_text {\r\n    margin-left: 33px;\r\n    top: 7px;\r\n    opacity: 0;\r\n    position: relative;\r\n}\r\n.favourite_text span {\r\n    color: white;\r\n    text-transform: uppercase;\r\n    font-weight: normal;\r\n    font-size: 15px;\r\n}\r\n.favourite_heart {\r\n    position: absolute;\r\n    top: 9px;\r\n    left: 9px;\r\n    margin-right: 10px;\r\n}\r\n.favourite_heart__left {\r\n    background: #CB3D3D;\r\n    width: 10px;\r\n    height: 20px;\r\n    -webkit-transform: rotate(-45deg);\r\n            transform: rotate(-45deg);\r\n    position: absolute;\r\n    left: -1px;\r\n    top: 0px;\r\n    border-top-right-radius: 30px;\r\n    border-top-left-radius: 30px;\r\n    border-bottom-left-radius: 10px;\r\n}\r\n.favourite_heart__right {\r\n    background: #CB3D3D;\r\n    width: 10px;\r\n    height: 20px;\r\n    -webkit-transform: rotate(45deg);\r\n            transform: rotate(45deg);\r\n    position: absolute;\r\n    left: 7px;\r\n    border-top-right-radius: 30px;\r\n    border-top-left-radius: 30px;\r\n    border-bottom-right-radius: 10px;\r\n}\r\n\r\ninput[type='checkbox']:checked + label > .favourite .favourite_text {\r\n    top: 7px;\r\n    opacity: 0;\r\n    -webkit-transition-property: top,opacity;\r\n    transition-property: top,opacity;\r\n    -webkit-transition-duration: 0.3s;\r\n            transition-duration: 0.3s;\r\n    -webkit-transition-delay: .0s;\r\n            transition-delay: .0s;\r\n}\r\n\r\ninput[type='checkbox']:checked + label > .favourite {\r\n    width: 20px;\r\n    -webkit-transition-delay: 2s;\r\n            transition-delay: 2s;\r\n    box-shadow: 0px 0px 0px 0px transparent;\r\n}\r\n\r\ninput[type='checkbox']:checked + label > .favourite .favourite_heart .favourite_heart__left {\r\n    width: 6px;\r\n    height: 12px;\r\n    left: 4px;\r\n    top: 0px;\r\n    margin-top: 8px;\r\n    -webkit-transition-property: width,height,left,top,margin-top;\r\n    transition-property: width,height,left,top,margin-top;\r\n    -webkit-transition-duration: .2s;\r\n            transition-duration: .2s;\r\n    -webkit-transition-delay: 1.2s;\r\n            transition-delay: 1.2s;\r\n}\r\n\r\ninput[type='checkbox']:checked + label > .favourite .favourite_heart .favourite_heart__right {\r\n    width: 6px;\r\n    -webkit-transition-property: width,height,left,margin-top;\r\n    transition-property: width,height,left,margin-top;\r\n    -webkit-transition-duration: .2s;\r\n            transition-duration: .2s;\r\n    -webkit-transition-delay: 1.2s;\r\n            transition-delay: 1.2s;\r\n    height: 17px;\r\n    left: 10px;\r\n    margin-top: 4px;\r\n}\r\n\r\n.spinner_part {\r\n    width: 3px;\r\n    height: 3px;\r\n    opacity: 0;\r\n    background: #CB3D3D;\r\n    position: absolute;\r\n    top: 34px;\r\n    left: 8px;\r\n    -webkit-transform-origin: 11px -16px;\r\n            transform-origin: 11px -16px;\r\n}\r\n\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(1) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.702s;\r\n            transition-delay: 0.702s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(2) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.704s;\r\n            transition-delay: 0.704s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(3) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.706s;\r\n            transition-delay: 0.706s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(4) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.708s;\r\n            transition-delay: 0.708s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(5) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.71s;\r\n            transition-delay: 0.71s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(6) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.712s;\r\n            transition-delay: 0.712s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(7) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.714s;\r\n            transition-delay: 0.714s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(8) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.716s;\r\n            transition-delay: 0.716s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(9) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.718s;\r\n            transition-delay: 0.718s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(10) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.72s;\r\n            transition-delay: 0.72s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(11) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.722s;\r\n            transition-delay: 0.722s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(12) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.724s;\r\n            transition-delay: 0.724s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(13) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.726s;\r\n            transition-delay: 0.726s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(14) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.728s;\r\n            transition-delay: 0.728s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(15) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.73s;\r\n            transition-delay: 0.73s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(16) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.732s;\r\n            transition-delay: 0.732s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(17) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.734s;\r\n            transition-delay: 0.734s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(18) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.736s;\r\n            transition-delay: 0.736s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(19) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.738s;\r\n            transition-delay: 0.738s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(20) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.74s;\r\n            transition-delay: 0.74s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(21) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.742s;\r\n            transition-delay: 0.742s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(22) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.744s;\r\n            transition-delay: 0.744s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(23) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.746s;\r\n            transition-delay: 0.746s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(24) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.748s;\r\n            transition-delay: 0.748s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(25) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.75s;\r\n            transition-delay: 0.75s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(26) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.752s;\r\n            transition-delay: 0.752s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(27) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.754s;\r\n            transition-delay: 0.754s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(28) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.756s;\r\n            transition-delay: 0.756s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(29) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.758s;\r\n            transition-delay: 0.758s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(30) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.76s;\r\n            transition-delay: 0.76s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(31) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.762s;\r\n            transition-delay: 0.762s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(32) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.764s;\r\n            transition-delay: 0.764s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(33) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.766s;\r\n            transition-delay: 0.766s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(34) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.768s;\r\n            transition-delay: 0.768s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(35) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.77s;\r\n            transition-delay: 0.77s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(36) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.772s;\r\n            transition-delay: 0.772s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(37) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.774s;\r\n            transition-delay: 0.774s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(38) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.776s;\r\n            transition-delay: 0.776s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(39) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.778s;\r\n            transition-delay: 0.778s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(40) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.78s;\r\n            transition-delay: 0.78s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(41) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.782s;\r\n            transition-delay: 0.782s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(42) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.784s;\r\n            transition-delay: 0.784s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(43) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.786s;\r\n            transition-delay: 0.786s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(44) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.788s;\r\n            transition-delay: 0.788s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(45) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.79s;\r\n            transition-delay: 0.79s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(46) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.792s;\r\n            transition-delay: 0.792s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(47) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.794s;\r\n            transition-delay: 0.794s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(48) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.796s;\r\n            transition-delay: 0.796s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(49) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.798s;\r\n            transition-delay: 0.798s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(50) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.8s;\r\n            transition-delay: 0.8s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(51) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.802s;\r\n            transition-delay: 0.802s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(52) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.804s;\r\n            transition-delay: 0.804s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(53) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.806s;\r\n            transition-delay: 0.806s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(54) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.808s;\r\n            transition-delay: 0.808s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(55) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.81s;\r\n            transition-delay: 0.81s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(56) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.812s;\r\n            transition-delay: 0.812s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(57) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.814s;\r\n            transition-delay: 0.814s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(58) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.816s;\r\n            transition-delay: 0.816s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(59) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.818s;\r\n            transition-delay: 0.818s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(60) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.82s;\r\n            transition-delay: 0.82s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(61) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.822s;\r\n            transition-delay: 0.822s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(62) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.824s;\r\n            transition-delay: 0.824s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(63) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.826s;\r\n            transition-delay: 0.826s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(64) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.828s;\r\n            transition-delay: 0.828s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(65) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.83s;\r\n            transition-delay: 0.83s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(66) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.832s;\r\n            transition-delay: 0.832s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(67) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.834s;\r\n            transition-delay: 0.834s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(68) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.836s;\r\n            transition-delay: 0.836s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(69) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.838s;\r\n            transition-delay: 0.838s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(70) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.84s;\r\n            transition-delay: 0.84s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(71) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.842s;\r\n            transition-delay: 0.842s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(72) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.844s;\r\n            transition-delay: 0.844s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(73) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.846s;\r\n            transition-delay: 0.846s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(74) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.848s;\r\n            transition-delay: 0.848s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(75) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.85s;\r\n            transition-delay: 0.85s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(76) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.852s;\r\n            transition-delay: 0.852s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(77) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.854s;\r\n            transition-delay: 0.854s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(78) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.856s;\r\n            transition-delay: 0.856s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(79) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.858s;\r\n            transition-delay: 0.858s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(80) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.86s;\r\n            transition-delay: 0.86s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(81) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.862s;\r\n            transition-delay: 0.862s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(82) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.864s;\r\n            transition-delay: 0.864s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(83) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.866s;\r\n            transition-delay: 0.866s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(84) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.868s;\r\n            transition-delay: 0.868s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(85) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.87s;\r\n            transition-delay: 0.87s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(86) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.872s;\r\n            transition-delay: 0.872s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(87) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.874s;\r\n            transition-delay: 0.874s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(88) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.876s;\r\n            transition-delay: 0.876s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(89) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.878s;\r\n            transition-delay: 0.878s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(90) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.88s;\r\n            transition-delay: 0.88s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(91) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.882s;\r\n            transition-delay: 0.882s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(92) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.884s;\r\n            transition-delay: 0.884s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(93) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.886s;\r\n            transition-delay: 0.886s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(94) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.888s;\r\n            transition-delay: 0.888s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(95) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.89s;\r\n            transition-delay: 0.89s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(96) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.892s;\r\n            transition-delay: 0.892s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(97) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.894s;\r\n            transition-delay: 0.894s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(98) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.896s;\r\n            transition-delay: 0.896s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(99) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.898s;\r\n            transition-delay: 0.898s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(100) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.9s;\r\n            transition-delay: 0.9s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(101) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.902s;\r\n            transition-delay: 0.902s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(102) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.904s;\r\n            transition-delay: 0.904s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(103) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.906s;\r\n            transition-delay: 0.906s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(104) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.908s;\r\n            transition-delay: 0.908s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(105) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.91s;\r\n            transition-delay: 0.91s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(106) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.912s;\r\n            transition-delay: 0.912s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(107) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.914s;\r\n            transition-delay: 0.914s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(108) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.916s;\r\n            transition-delay: 0.916s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(109) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.918s;\r\n            transition-delay: 0.918s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(110) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.92s;\r\n            transition-delay: 0.92s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(111) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.922s;\r\n            transition-delay: 0.922s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(112) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.924s;\r\n            transition-delay: 0.924s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(113) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.926s;\r\n            transition-delay: 0.926s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(114) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.928s;\r\n            transition-delay: 0.928s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(115) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.93s;\r\n            transition-delay: 0.93s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(116) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.932s;\r\n            transition-delay: 0.932s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(117) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.934s;\r\n            transition-delay: 0.934s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(118) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.936s;\r\n            transition-delay: 0.936s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(119) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.938s;\r\n            transition-delay: 0.938s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(120) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.94s;\r\n            transition-delay: 0.94s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(121) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.942s;\r\n            transition-delay: 0.942s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(122) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.944s;\r\n            transition-delay: 0.944s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(123) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.946s;\r\n            transition-delay: 0.946s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(124) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.948s;\r\n            transition-delay: 0.948s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(125) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.95s;\r\n            transition-delay: 0.95s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(126) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.952s;\r\n            transition-delay: 0.952s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(127) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.954s;\r\n            transition-delay: 0.954s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(128) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.956s;\r\n            transition-delay: 0.956s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(129) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.958s;\r\n            transition-delay: 0.958s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(130) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.96s;\r\n            transition-delay: 0.96s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(131) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.962s;\r\n            transition-delay: 0.962s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(132) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.964s;\r\n            transition-delay: 0.964s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(133) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.966s;\r\n            transition-delay: 0.966s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(134) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.968s;\r\n            transition-delay: 0.968s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(135) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.97s;\r\n            transition-delay: 0.97s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(136) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.972s;\r\n            transition-delay: 0.972s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(137) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.974s;\r\n            transition-delay: 0.974s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(138) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.976s;\r\n            transition-delay: 0.976s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(139) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.978s;\r\n            transition-delay: 0.978s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(140) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.98s;\r\n            transition-delay: 0.98s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(141) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.982s;\r\n            transition-delay: 0.982s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(142) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.984s;\r\n            transition-delay: 0.984s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(143) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.986s;\r\n            transition-delay: 0.986s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(144) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.988s;\r\n            transition-delay: 0.988s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(145) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.99s;\r\n            transition-delay: 0.99s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(146) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.992s;\r\n            transition-delay: 0.992s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(147) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.994s;\r\n            transition-delay: 0.994s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(148) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.996s;\r\n            transition-delay: 0.996s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(149) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.998s;\r\n            transition-delay: 0.998s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(150) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 1s;\r\n            transition-delay: 1s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(151) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 1.002s;\r\n            transition-delay: 1.002s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(152) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 1.004s;\r\n            transition-delay: 1.004s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(153) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 1.006s;\r\n            transition-delay: 1.006s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(154) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 1.008s;\r\n            transition-delay: 1.008s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(155) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 1.01s;\r\n            transition-delay: 1.01s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(156) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 1.012s;\r\n            transition-delay: 1.012s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(157) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 1.014s;\r\n            transition-delay: 1.014s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(158) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 1.016s;\r\n            transition-delay: 1.016s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(159) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 1.018s;\r\n            transition-delay: 1.018s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(160) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 1.02s;\r\n            transition-delay: 1.02s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(161) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 1.022s;\r\n            transition-delay: 1.022s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(162) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 1.024s;\r\n            transition-delay: 1.024s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(163) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 1.026s;\r\n            transition-delay: 1.026s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(164) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 1.028s;\r\n            transition-delay: 1.028s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(165) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 1.03s;\r\n            transition-delay: 1.03s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(166) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 1.032s;\r\n            transition-delay: 1.032s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(167) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 1.034s;\r\n            transition-delay: 1.034s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(168) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 1.036s;\r\n            transition-delay: 1.036s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(169) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 1.038s;\r\n            transition-delay: 1.038s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(170) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 1.04s;\r\n            transition-delay: 1.04s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(171) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 1.042s;\r\n            transition-delay: 1.042s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(172) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 1.044s;\r\n            transition-delay: 1.044s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(173) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 1.046s;\r\n            transition-delay: 1.046s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(174) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 1.048s;\r\n            transition-delay: 1.048s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(175) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 1.05s;\r\n            transition-delay: 1.05s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(176) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 1.052s;\r\n            transition-delay: 1.052s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(177) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 1.054s;\r\n            transition-delay: 1.054s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(178) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 1.056s;\r\n            transition-delay: 1.056s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(179) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 1.058s;\r\n            transition-delay: 1.058s;\r\n}\r\ninput[type='checkbox']:checked + label > .favourite .spinner_part:nth-of-type(180) {\r\n    opacity: 1;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 1.06s;\r\n            transition-delay: 1.06s;\r\n}\r\n\r\n\r\n.spinner_part:nth-of-type(1) {\r\n    -webkit-transform: rotate(2deg);\r\n            transform: rotate(2deg);\r\n}\r\n.spinner_part:nth-of-type(2) {\r\n    -webkit-transform: rotate(4deg);\r\n            transform: rotate(4deg);\r\n}\r\n.spinner_part:nth-of-type(3) {\r\n    -webkit-transform: rotate(6deg);\r\n            transform: rotate(6deg);\r\n}\r\n.spinner_part:nth-of-type(4) {\r\n    -webkit-transform: rotate(8deg);\r\n            transform: rotate(8deg);\r\n}\r\n.spinner_part:nth-of-type(5) {\r\n    -webkit-transform: rotate(10deg);\r\n            transform: rotate(10deg);\r\n}\r\n.spinner_part:nth-of-type(6) {\r\n    -webkit-transform: rotate(12deg);\r\n            transform: rotate(12deg);\r\n}\r\n.spinner_part:nth-of-type(7) {\r\n    -webkit-transform: rotate(14deg);\r\n            transform: rotate(14deg);\r\n}\r\n.spinner_part:nth-of-type(8) {\r\n    -webkit-transform: rotate(16deg);\r\n            transform: rotate(16deg);\r\n}\r\n.spinner_part:nth-of-type(9) {\r\n    -webkit-transform: rotate(18deg);\r\n            transform: rotate(18deg);\r\n}\r\n.spinner_part:nth-of-type(10) {\r\n    -webkit-transform: rotate(20deg);\r\n            transform: rotate(20deg);\r\n}\r\n.spinner_part:nth-of-type(11) {\r\n    -webkit-transform: rotate(22deg);\r\n            transform: rotate(22deg);\r\n}\r\n.spinner_part:nth-of-type(12) {\r\n    -webkit-transform: rotate(24deg);\r\n            transform: rotate(24deg);\r\n}\r\n.spinner_part:nth-of-type(13) {\r\n    -webkit-transform: rotate(26deg);\r\n            transform: rotate(26deg);\r\n}\r\n.spinner_part:nth-of-type(14) {\r\n    -webkit-transform: rotate(28deg);\r\n            transform: rotate(28deg);\r\n}\r\n.spinner_part:nth-of-type(15) {\r\n    -webkit-transform: rotate(30deg);\r\n            transform: rotate(30deg);\r\n}\r\n.spinner_part:nth-of-type(16) {\r\n    -webkit-transform: rotate(32deg);\r\n            transform: rotate(32deg);\r\n}\r\n.spinner_part:nth-of-type(17) {\r\n    -webkit-transform: rotate(34deg);\r\n            transform: rotate(34deg);\r\n}\r\n.spinner_part:nth-of-type(18) {\r\n    -webkit-transform: rotate(36deg);\r\n            transform: rotate(36deg);\r\n}\r\n.spinner_part:nth-of-type(19) {\r\n    -webkit-transform: rotate(38deg);\r\n            transform: rotate(38deg);\r\n}\r\n.spinner_part:nth-of-type(20) {\r\n    -webkit-transform: rotate(40deg);\r\n            transform: rotate(40deg);\r\n}\r\n.spinner_part:nth-of-type(21) {\r\n    -webkit-transform: rotate(42deg);\r\n            transform: rotate(42deg);\r\n}\r\n.spinner_part:nth-of-type(22) {\r\n    -webkit-transform: rotate(44deg);\r\n            transform: rotate(44deg);\r\n}\r\n.spinner_part:nth-of-type(23) {\r\n    -webkit-transform: rotate(46deg);\r\n            transform: rotate(46deg);\r\n}\r\n.spinner_part:nth-of-type(24) {\r\n    -webkit-transform: rotate(48deg);\r\n            transform: rotate(48deg);\r\n}\r\n.spinner_part:nth-of-type(25) {\r\n    -webkit-transform: rotate(50deg);\r\n            transform: rotate(50deg);\r\n}\r\n.spinner_part:nth-of-type(26) {\r\n    -webkit-transform: rotate(52deg);\r\n            transform: rotate(52deg);\r\n}\r\n.spinner_part:nth-of-type(27) {\r\n    -webkit-transform: rotate(54deg);\r\n            transform: rotate(54deg);\r\n}\r\n.spinner_part:nth-of-type(28) {\r\n    -webkit-transform: rotate(56deg);\r\n            transform: rotate(56deg);\r\n}\r\n.spinner_part:nth-of-type(29) {\r\n    -webkit-transform: rotate(58deg);\r\n            transform: rotate(58deg);\r\n}\r\n.spinner_part:nth-of-type(30) {\r\n    -webkit-transform: rotate(60deg);\r\n            transform: rotate(60deg);\r\n}\r\n.spinner_part:nth-of-type(31) {\r\n    -webkit-transform: rotate(62deg);\r\n            transform: rotate(62deg);\r\n}\r\n.spinner_part:nth-of-type(32) {\r\n    -webkit-transform: rotate(64deg);\r\n            transform: rotate(64deg);\r\n}\r\n.spinner_part:nth-of-type(33) {\r\n    -webkit-transform: rotate(66deg);\r\n            transform: rotate(66deg);\r\n}\r\n.spinner_part:nth-of-type(34) {\r\n    -webkit-transform: rotate(68deg);\r\n            transform: rotate(68deg);\r\n}\r\n.spinner_part:nth-of-type(35) {\r\n    -webkit-transform: rotate(70deg);\r\n            transform: rotate(70deg);\r\n}\r\n.spinner_part:nth-of-type(36) {\r\n    -webkit-transform: rotate(72deg);\r\n            transform: rotate(72deg);\r\n}\r\n.spinner_part:nth-of-type(37) {\r\n    -webkit-transform: rotate(74deg);\r\n            transform: rotate(74deg);\r\n}\r\n.spinner_part:nth-of-type(38) {\r\n    -webkit-transform: rotate(76deg);\r\n            transform: rotate(76deg);\r\n}\r\n.spinner_part:nth-of-type(39) {\r\n    -webkit-transform: rotate(78deg);\r\n            transform: rotate(78deg);\r\n}\r\n.spinner_part:nth-of-type(40) {\r\n    -webkit-transform: rotate(80deg);\r\n            transform: rotate(80deg);\r\n}\r\n.spinner_part:nth-of-type(41) {\r\n    -webkit-transform: rotate(82deg);\r\n            transform: rotate(82deg);\r\n}\r\n.spinner_part:nth-of-type(42) {\r\n    -webkit-transform: rotate(84deg);\r\n            transform: rotate(84deg);\r\n}\r\n.spinner_part:nth-of-type(43) {\r\n    -webkit-transform: rotate(86deg);\r\n            transform: rotate(86deg);\r\n}\r\n.spinner_part:nth-of-type(44) {\r\n    -webkit-transform: rotate(88deg);\r\n            transform: rotate(88deg);\r\n}\r\n.spinner_part:nth-of-type(45) {\r\n    -webkit-transform: rotate(90deg);\r\n            transform: rotate(90deg);\r\n}\r\n.spinner_part:nth-of-type(46) {\r\n    -webkit-transform: rotate(92deg);\r\n            transform: rotate(92deg);\r\n}\r\n.spinner_part:nth-of-type(47) {\r\n    -webkit-transform: rotate(94deg);\r\n            transform: rotate(94deg);\r\n}\r\n.spinner_part:nth-of-type(48) {\r\n    -webkit-transform: rotate(96deg);\r\n            transform: rotate(96deg);\r\n}\r\n.spinner_part:nth-of-type(49) {\r\n    -webkit-transform: rotate(98deg);\r\n            transform: rotate(98deg);\r\n}\r\n.spinner_part:nth-of-type(50) {\r\n    -webkit-transform: rotate(100deg);\r\n            transform: rotate(100deg);\r\n}\r\n.spinner_part:nth-of-type(51) {\r\n    -webkit-transform: rotate(102deg);\r\n            transform: rotate(102deg);\r\n}\r\n.spinner_part:nth-of-type(52) {\r\n    -webkit-transform: rotate(104deg);\r\n            transform: rotate(104deg);\r\n}\r\n.spinner_part:nth-of-type(53) {\r\n    -webkit-transform: rotate(106deg);\r\n            transform: rotate(106deg);\r\n}\r\n.spinner_part:nth-of-type(54) {\r\n    -webkit-transform: rotate(108deg);\r\n            transform: rotate(108deg);\r\n}\r\n.spinner_part:nth-of-type(55) {\r\n    -webkit-transform: rotate(110deg);\r\n            transform: rotate(110deg);\r\n}\r\n.spinner_part:nth-of-type(56) {\r\n    -webkit-transform: rotate(112deg);\r\n            transform: rotate(112deg);\r\n}\r\n.spinner_part:nth-of-type(57) {\r\n    -webkit-transform: rotate(114deg);\r\n            transform: rotate(114deg);\r\n}\r\n.spinner_part:nth-of-type(58) {\r\n    -webkit-transform: rotate(116deg);\r\n            transform: rotate(116deg);\r\n}\r\n.spinner_part:nth-of-type(59) {\r\n    -webkit-transform: rotate(118deg);\r\n            transform: rotate(118deg);\r\n}\r\n.spinner_part:nth-of-type(60) {\r\n    -webkit-transform: rotate(120deg);\r\n            transform: rotate(120deg);\r\n}\r\n.spinner_part:nth-of-type(61) {\r\n    -webkit-transform: rotate(122deg);\r\n            transform: rotate(122deg);\r\n}\r\n.spinner_part:nth-of-type(62) {\r\n    -webkit-transform: rotate(124deg);\r\n            transform: rotate(124deg);\r\n}\r\n.spinner_part:nth-of-type(63) {\r\n    -webkit-transform: rotate(126deg);\r\n            transform: rotate(126deg);\r\n}\r\n.spinner_part:nth-of-type(64) {\r\n    -webkit-transform: rotate(128deg);\r\n            transform: rotate(128deg);\r\n}\r\n.spinner_part:nth-of-type(65) {\r\n    -webkit-transform: rotate(130deg);\r\n            transform: rotate(130deg);\r\n}\r\n.spinner_part:nth-of-type(66) {\r\n    -webkit-transform: rotate(132deg);\r\n            transform: rotate(132deg);\r\n}\r\n.spinner_part:nth-of-type(67) {\r\n    -webkit-transform: rotate(134deg);\r\n            transform: rotate(134deg);\r\n}\r\n.spinner_part:nth-of-type(68) {\r\n    -webkit-transform: rotate(136deg);\r\n            transform: rotate(136deg);\r\n}\r\n.spinner_part:nth-of-type(69) {\r\n    -webkit-transform: rotate(138deg);\r\n            transform: rotate(138deg);\r\n}\r\n.spinner_part:nth-of-type(70) {\r\n    -webkit-transform: rotate(140deg);\r\n            transform: rotate(140deg);\r\n}\r\n.spinner_part:nth-of-type(71) {\r\n    -webkit-transform: rotate(142deg);\r\n            transform: rotate(142deg);\r\n}\r\n.spinner_part:nth-of-type(72) {\r\n    -webkit-transform: rotate(144deg);\r\n            transform: rotate(144deg);\r\n}\r\n.spinner_part:nth-of-type(73) {\r\n    -webkit-transform: rotate(146deg);\r\n            transform: rotate(146deg);\r\n}\r\n.spinner_part:nth-of-type(74) {\r\n    -webkit-transform: rotate(148deg);\r\n            transform: rotate(148deg);\r\n}\r\n.spinner_part:nth-of-type(75) {\r\n    -webkit-transform: rotate(150deg);\r\n            transform: rotate(150deg);\r\n}\r\n.spinner_part:nth-of-type(76) {\r\n    -webkit-transform: rotate(152deg);\r\n            transform: rotate(152deg);\r\n}\r\n.spinner_part:nth-of-type(77) {\r\n    -webkit-transform: rotate(154deg);\r\n            transform: rotate(154deg);\r\n}\r\n.spinner_part:nth-of-type(78) {\r\n    -webkit-transform: rotate(156deg);\r\n            transform: rotate(156deg);\r\n}\r\n.spinner_part:nth-of-type(79) {\r\n    -webkit-transform: rotate(158deg);\r\n            transform: rotate(158deg);\r\n}\r\n.spinner_part:nth-of-type(80) {\r\n    -webkit-transform: rotate(160deg);\r\n            transform: rotate(160deg);\r\n}\r\n.spinner_part:nth-of-type(81) {\r\n    -webkit-transform: rotate(162deg);\r\n            transform: rotate(162deg);\r\n}\r\n.spinner_part:nth-of-type(82) {\r\n    -webkit-transform: rotate(164deg);\r\n            transform: rotate(164deg);\r\n}\r\n.spinner_part:nth-of-type(83) {\r\n    -webkit-transform: rotate(166deg);\r\n            transform: rotate(166deg);\r\n}\r\n.spinner_part:nth-of-type(84) {\r\n    -webkit-transform: rotate(168deg);\r\n            transform: rotate(168deg);\r\n}\r\n.spinner_part:nth-of-type(85) {\r\n    -webkit-transform: rotate(170deg);\r\n            transform: rotate(170deg);\r\n}\r\n.spinner_part:nth-of-type(86) {\r\n    -webkit-transform: rotate(172deg);\r\n            transform: rotate(172deg);\r\n}\r\n.spinner_part:nth-of-type(87) {\r\n    -webkit-transform: rotate(174deg);\r\n            transform: rotate(174deg);\r\n}\r\n.spinner_part:nth-of-type(88) {\r\n    -webkit-transform: rotate(176deg);\r\n            transform: rotate(176deg);\r\n}\r\n.spinner_part:nth-of-type(89) {\r\n    -webkit-transform: rotate(178deg);\r\n            transform: rotate(178deg);\r\n}\r\n.spinner_part:nth-of-type(90) {\r\n    -webkit-transform: rotate(180deg);\r\n            transform: rotate(180deg);\r\n}\r\n.spinner_part:nth-of-type(91) {\r\n    -webkit-transform: rotate(182deg);\r\n            transform: rotate(182deg);\r\n}\r\n.spinner_part:nth-of-type(92) {\r\n    -webkit-transform: rotate(184deg);\r\n            transform: rotate(184deg);\r\n}\r\n.spinner_part:nth-of-type(93) {\r\n    -webkit-transform: rotate(186deg);\r\n            transform: rotate(186deg);\r\n}\r\n.spinner_part:nth-of-type(94) {\r\n    -webkit-transform: rotate(188deg);\r\n            transform: rotate(188deg);\r\n}\r\n.spinner_part:nth-of-type(95) {\r\n    -webkit-transform: rotate(190deg);\r\n            transform: rotate(190deg);\r\n}\r\n.spinner_part:nth-of-type(96) {\r\n    -webkit-transform: rotate(192deg);\r\n            transform: rotate(192deg);\r\n}\r\n.spinner_part:nth-of-type(97) {\r\n    -webkit-transform: rotate(194deg);\r\n            transform: rotate(194deg);\r\n}\r\n.spinner_part:nth-of-type(98) {\r\n    -webkit-transform: rotate(196deg);\r\n            transform: rotate(196deg);\r\n}\r\n.spinner_part:nth-of-type(99) {\r\n    -webkit-transform: rotate(198deg);\r\n            transform: rotate(198deg);\r\n}\r\n.spinner_part:nth-of-type(100) {\r\n    -webkit-transform: rotate(200deg);\r\n            transform: rotate(200deg);\r\n}\r\n.spinner_part:nth-of-type(101) {\r\n    -webkit-transform: rotate(202deg);\r\n            transform: rotate(202deg);\r\n}\r\n.spinner_part:nth-of-type(102) {\r\n    -webkit-transform: rotate(204deg);\r\n            transform: rotate(204deg);\r\n}\r\n.spinner_part:nth-of-type(103) {\r\n    -webkit-transform: rotate(206deg);\r\n            transform: rotate(206deg);\r\n}\r\n.spinner_part:nth-of-type(104) {\r\n    -webkit-transform: rotate(208deg);\r\n            transform: rotate(208deg);\r\n}\r\n.spinner_part:nth-of-type(105) {\r\n    -webkit-transform: rotate(210deg);\r\n            transform: rotate(210deg);\r\n}\r\n.spinner_part:nth-of-type(106) {\r\n    -webkit-transform: rotate(212deg);\r\n            transform: rotate(212deg);\r\n}\r\n.spinner_part:nth-of-type(107) {\r\n    -webkit-transform: rotate(214deg);\r\n            transform: rotate(214deg);\r\n}\r\n.spinner_part:nth-of-type(108) {\r\n    -webkit-transform: rotate(216deg);\r\n            transform: rotate(216deg);\r\n}\r\n.spinner_part:nth-of-type(109) {\r\n    -webkit-transform: rotate(218deg);\r\n            transform: rotate(218deg);\r\n}\r\n.spinner_part:nth-of-type(110) {\r\n    -webkit-transform: rotate(220deg);\r\n            transform: rotate(220deg);\r\n}\r\n.spinner_part:nth-of-type(111) {\r\n    -webkit-transform: rotate(222deg);\r\n            transform: rotate(222deg);\r\n}\r\n.spinner_part:nth-of-type(112) {\r\n    -webkit-transform: rotate(224deg);\r\n            transform: rotate(224deg);\r\n}\r\n.spinner_part:nth-of-type(113) {\r\n    -webkit-transform: rotate(226deg);\r\n            transform: rotate(226deg);\r\n}\r\n.spinner_part:nth-of-type(114) {\r\n    -webkit-transform: rotate(228deg);\r\n            transform: rotate(228deg);\r\n}\r\n.spinner_part:nth-of-type(115) {\r\n    -webkit-transform: rotate(230deg);\r\n            transform: rotate(230deg);\r\n}\r\n.spinner_part:nth-of-type(116) {\r\n    -webkit-transform: rotate(232deg);\r\n            transform: rotate(232deg);\r\n}\r\n.spinner_part:nth-of-type(117) {\r\n    -webkit-transform: rotate(234deg);\r\n            transform: rotate(234deg);\r\n}\r\n.spinner_part:nth-of-type(118) {\r\n    -webkit-transform: rotate(236deg);\r\n            transform: rotate(236deg);\r\n}\r\n.spinner_part:nth-of-type(119) {\r\n    -webkit-transform: rotate(238deg);\r\n            transform: rotate(238deg);\r\n}\r\n.spinner_part:nth-of-type(120) {\r\n    -webkit-transform: rotate(240deg);\r\n            transform: rotate(240deg);\r\n}\r\n.spinner_part:nth-of-type(121) {\r\n    -webkit-transform: rotate(242deg);\r\n            transform: rotate(242deg);\r\n}\r\n.spinner_part:nth-of-type(122) {\r\n    -webkit-transform: rotate(244deg);\r\n            transform: rotate(244deg);\r\n}\r\n.spinner_part:nth-of-type(123) {\r\n    -webkit-transform: rotate(246deg);\r\n            transform: rotate(246deg);\r\n}\r\n.spinner_part:nth-of-type(124) {\r\n    -webkit-transform: rotate(248deg);\r\n            transform: rotate(248deg);\r\n}\r\n.spinner_part:nth-of-type(125) {\r\n    -webkit-transform: rotate(250deg);\r\n            transform: rotate(250deg);\r\n}\r\n.spinner_part:nth-of-type(126) {\r\n    -webkit-transform: rotate(252deg);\r\n            transform: rotate(252deg);\r\n}\r\n.spinner_part:nth-of-type(127) {\r\n    -webkit-transform: rotate(254deg);\r\n            transform: rotate(254deg);\r\n}\r\n.spinner_part:nth-of-type(128) {\r\n    -webkit-transform: rotate(256deg);\r\n            transform: rotate(256deg);\r\n}\r\n.spinner_part:nth-of-type(129) {\r\n    -webkit-transform: rotate(258deg);\r\n            transform: rotate(258deg);\r\n}\r\n.spinner_part:nth-of-type(130) {\r\n    -webkit-transform: rotate(260deg);\r\n            transform: rotate(260deg);\r\n}\r\n.spinner_part:nth-of-type(131) {\r\n    -webkit-transform: rotate(262deg);\r\n            transform: rotate(262deg);\r\n}\r\n.spinner_part:nth-of-type(132) {\r\n    -webkit-transform: rotate(264deg);\r\n            transform: rotate(264deg);\r\n}\r\n.spinner_part:nth-of-type(133) {\r\n    -webkit-transform: rotate(266deg);\r\n            transform: rotate(266deg);\r\n}\r\n.spinner_part:nth-of-type(134) {\r\n    -webkit-transform: rotate(268deg);\r\n            transform: rotate(268deg);\r\n}\r\n.spinner_part:nth-of-type(135) {\r\n    -webkit-transform: rotate(270deg);\r\n            transform: rotate(270deg);\r\n}\r\n.spinner_part:nth-of-type(136) {\r\n    -webkit-transform: rotate(272deg);\r\n            transform: rotate(272deg);\r\n}\r\n.spinner_part:nth-of-type(137) {\r\n    -webkit-transform: rotate(274deg);\r\n            transform: rotate(274deg);\r\n}\r\n.spinner_part:nth-of-type(138) {\r\n    -webkit-transform: rotate(276deg);\r\n            transform: rotate(276deg);\r\n}\r\n.spinner_part:nth-of-type(139) {\r\n    -webkit-transform: rotate(278deg);\r\n            transform: rotate(278deg);\r\n}\r\n.spinner_part:nth-of-type(140) {\r\n    -webkit-transform: rotate(280deg);\r\n            transform: rotate(280deg);\r\n}\r\n.spinner_part:nth-of-type(141) {\r\n    -webkit-transform: rotate(282deg);\r\n            transform: rotate(282deg);\r\n}\r\n.spinner_part:nth-of-type(142) {\r\n    -webkit-transform: rotate(284deg);\r\n            transform: rotate(284deg);\r\n}\r\n.spinner_part:nth-of-type(143) {\r\n    -webkit-transform: rotate(286deg);\r\n            transform: rotate(286deg);\r\n}\r\n.spinner_part:nth-of-type(144) {\r\n    -webkit-transform: rotate(288deg);\r\n            transform: rotate(288deg);\r\n}\r\n.spinner_part:nth-of-type(145) {\r\n    -webkit-transform: rotate(290deg);\r\n            transform: rotate(290deg);\r\n}\r\n.spinner_part:nth-of-type(146) {\r\n    -webkit-transform: rotate(292deg);\r\n            transform: rotate(292deg);\r\n}\r\n.spinner_part:nth-of-type(147) {\r\n    -webkit-transform: rotate(294deg);\r\n            transform: rotate(294deg);\r\n}\r\n.spinner_part:nth-of-type(148) {\r\n    -webkit-transform: rotate(296deg);\r\n            transform: rotate(296deg);\r\n}\r\n.spinner_part:nth-of-type(149) {\r\n    -webkit-transform: rotate(298deg);\r\n            transform: rotate(298deg);\r\n}\r\n.spinner_part:nth-of-type(150) {\r\n    -webkit-transform: rotate(300deg);\r\n            transform: rotate(300deg);\r\n}\r\n.spinner_part:nth-of-type(151) {\r\n    -webkit-transform: rotate(302deg);\r\n            transform: rotate(302deg);\r\n}\r\n.spinner_part:nth-of-type(152) {\r\n    -webkit-transform: rotate(304deg);\r\n            transform: rotate(304deg);\r\n}\r\n.spinner_part:nth-of-type(153) {\r\n    -webkit-transform: rotate(306deg);\r\n            transform: rotate(306deg);\r\n}\r\n.spinner_part:nth-of-type(154) {\r\n    -webkit-transform: rotate(308deg);\r\n            transform: rotate(308deg);\r\n}\r\n.spinner_part:nth-of-type(155) {\r\n    -webkit-transform: rotate(310deg);\r\n            transform: rotate(310deg);\r\n}\r\n.spinner_part:nth-of-type(156) {\r\n    -webkit-transform: rotate(312deg);\r\n            transform: rotate(312deg);\r\n}\r\n.spinner_part:nth-of-type(157) {\r\n    -webkit-transform: rotate(314deg);\r\n            transform: rotate(314deg);\r\n}\r\n.spinner_part:nth-of-type(158) {\r\n    -webkit-transform: rotate(316deg);\r\n            transform: rotate(316deg);\r\n}\r\n.spinner_part:nth-of-type(159) {\r\n    -webkit-transform: rotate(318deg);\r\n            transform: rotate(318deg);\r\n}\r\n.spinner_part:nth-of-type(160) {\r\n    -webkit-transform: rotate(320deg);\r\n            transform: rotate(320deg);\r\n}\r\n.spinner_part:nth-of-type(161) {\r\n    -webkit-transform: rotate(322deg);\r\n            transform: rotate(322deg);\r\n}\r\n.spinner_part:nth-of-type(162) {\r\n    -webkit-transform: rotate(324deg);\r\n            transform: rotate(324deg);\r\n}\r\n.spinner_part:nth-of-type(163) {\r\n    -webkit-transform: rotate(326deg);\r\n            transform: rotate(326deg);\r\n}\r\n.spinner_part:nth-of-type(164) {\r\n    -webkit-transform: rotate(328deg);\r\n            transform: rotate(328deg);\r\n}\r\n.spinner_part:nth-of-type(165) {\r\n    -webkit-transform: rotate(330deg);\r\n            transform: rotate(330deg);\r\n}\r\n.spinner_part:nth-of-type(166) {\r\n    -webkit-transform: rotate(332deg);\r\n            transform: rotate(332deg);\r\n}\r\n.spinner_part:nth-of-type(167) {\r\n    -webkit-transform: rotate(334deg);\r\n            transform: rotate(334deg);\r\n}\r\n.spinner_part:nth-of-type(168) {\r\n    -webkit-transform: rotate(336deg);\r\n            transform: rotate(336deg);\r\n}\r\n.spinner_part:nth-of-type(169) {\r\n    -webkit-transform: rotate(338deg);\r\n            transform: rotate(338deg);\r\n}\r\n.spinner_part:nth-of-type(170) {\r\n    -webkit-transform: rotate(340deg);\r\n            transform: rotate(340deg);\r\n}\r\n.spinner_part:nth-of-type(171) {\r\n    -webkit-transform: rotate(342deg);\r\n            transform: rotate(342deg);\r\n}\r\n.spinner_part:nth-of-type(172) {\r\n    -webkit-transform: rotate(344deg);\r\n            transform: rotate(344deg);\r\n}\r\n.spinner_part:nth-of-type(173) {\r\n    -webkit-transform: rotate(346deg);\r\n            transform: rotate(346deg);\r\n}\r\n.spinner_part:nth-of-type(174) {\r\n    -webkit-transform: rotate(348deg);\r\n            transform: rotate(348deg);\r\n}\r\n.spinner_part:nth-of-type(175) {\r\n    -webkit-transform: rotate(350deg);\r\n            transform: rotate(350deg);\r\n}\r\n.spinner_part:nth-of-type(176) {\r\n    -webkit-transform: rotate(352deg);\r\n            transform: rotate(352deg);\r\n}\r\n.spinner_part:nth-of-type(177) {\r\n    -webkit-transform: rotate(354deg);\r\n            transform: rotate(354deg);\r\n}\r\n.spinner_part:nth-of-type(178) {\r\n    -webkit-transform: rotate(356deg);\r\n            transform: rotate(356deg);\r\n}\r\n.spinner_part:nth-of-type(179) {\r\n    -webkit-transform: rotate(358deg);\r\n            transform: rotate(358deg);\r\n}\r\n.spinner_part:nth-of-type(180) {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n}\r\n\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(1) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.002s;\r\n            transition-delay: 0.002s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(2) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.004s;\r\n            transition-delay: 0.004s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(3) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.006s;\r\n            transition-delay: 0.006s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(4) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.008s;\r\n            transition-delay: 0.008s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(5) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.01s;\r\n            transition-delay: 0.01s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(6) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.012s;\r\n            transition-delay: 0.012s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(7) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.014s;\r\n            transition-delay: 0.014s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(8) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.016s;\r\n            transition-delay: 0.016s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(9) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.018s;\r\n            transition-delay: 0.018s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(10) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.02s;\r\n            transition-delay: 0.02s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(11) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.022s;\r\n            transition-delay: 0.022s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(12) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.024s;\r\n            transition-delay: 0.024s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(13) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.026s;\r\n            transition-delay: 0.026s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(14) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.028s;\r\n            transition-delay: 0.028s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(15) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.03s;\r\n            transition-delay: 0.03s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(16) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.032s;\r\n            transition-delay: 0.032s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(17) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.034s;\r\n            transition-delay: 0.034s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(18) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.036s;\r\n            transition-delay: 0.036s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(19) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.038s;\r\n            transition-delay: 0.038s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(20) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.04s;\r\n            transition-delay: 0.04s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(21) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.042s;\r\n            transition-delay: 0.042s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(22) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.044s;\r\n            transition-delay: 0.044s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(23) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.046s;\r\n            transition-delay: 0.046s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(24) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.048s;\r\n            transition-delay: 0.048s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(25) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.05s;\r\n            transition-delay: 0.05s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(26) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.052s;\r\n            transition-delay: 0.052s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(27) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.054s;\r\n            transition-delay: 0.054s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(28) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.056s;\r\n            transition-delay: 0.056s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(29) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.058s;\r\n            transition-delay: 0.058s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(30) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.06s;\r\n            transition-delay: 0.06s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(31) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.062s;\r\n            transition-delay: 0.062s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(32) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.064s;\r\n            transition-delay: 0.064s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(33) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.066s;\r\n            transition-delay: 0.066s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(34) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.068s;\r\n            transition-delay: 0.068s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(35) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.07s;\r\n            transition-delay: 0.07s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(36) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.072s;\r\n            transition-delay: 0.072s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(37) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.074s;\r\n            transition-delay: 0.074s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(38) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.076s;\r\n            transition-delay: 0.076s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(39) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.078s;\r\n            transition-delay: 0.078s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(40) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.08s;\r\n            transition-delay: 0.08s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(41) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.082s;\r\n            transition-delay: 0.082s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(42) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.084s;\r\n            transition-delay: 0.084s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(43) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.086s;\r\n            transition-delay: 0.086s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(44) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.088s;\r\n            transition-delay: 0.088s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(45) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.09s;\r\n            transition-delay: 0.09s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(46) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.092s;\r\n            transition-delay: 0.092s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(47) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.094s;\r\n            transition-delay: 0.094s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(48) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.096s;\r\n            transition-delay: 0.096s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(49) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.098s;\r\n            transition-delay: 0.098s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(50) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.1s;\r\n            transition-delay: 0.1s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(51) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.102s;\r\n            transition-delay: 0.102s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(52) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.104s;\r\n            transition-delay: 0.104s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(53) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.106s;\r\n            transition-delay: 0.106s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(54) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.108s;\r\n            transition-delay: 0.108s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(55) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.11s;\r\n            transition-delay: 0.11s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(56) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.112s;\r\n            transition-delay: 0.112s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(57) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.114s;\r\n            transition-delay: 0.114s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(58) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.116s;\r\n            transition-delay: 0.116s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(59) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.118s;\r\n            transition-delay: 0.118s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(60) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.12s;\r\n            transition-delay: 0.12s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(61) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.122s;\r\n            transition-delay: 0.122s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(62) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.124s;\r\n            transition-delay: 0.124s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(63) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.126s;\r\n            transition-delay: 0.126s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(64) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.128s;\r\n            transition-delay: 0.128s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(65) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.13s;\r\n            transition-delay: 0.13s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(66) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.132s;\r\n            transition-delay: 0.132s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(67) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.134s;\r\n            transition-delay: 0.134s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(68) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.136s;\r\n            transition-delay: 0.136s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(69) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.138s;\r\n            transition-delay: 0.138s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(70) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.14s;\r\n            transition-delay: 0.14s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(71) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.142s;\r\n            transition-delay: 0.142s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(72) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.144s;\r\n            transition-delay: 0.144s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(73) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.146s;\r\n            transition-delay: 0.146s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(74) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.148s;\r\n            transition-delay: 0.148s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(75) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.15s;\r\n            transition-delay: 0.15s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(76) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.152s;\r\n            transition-delay: 0.152s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(77) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.154s;\r\n            transition-delay: 0.154s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(78) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.156s;\r\n            transition-delay: 0.156s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(79) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.158s;\r\n            transition-delay: 0.158s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(80) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.16s;\r\n            transition-delay: 0.16s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(81) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.162s;\r\n            transition-delay: 0.162s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(82) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.164s;\r\n            transition-delay: 0.164s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(83) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.166s;\r\n            transition-delay: 0.166s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(84) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.168s;\r\n            transition-delay: 0.168s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(85) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.17s;\r\n            transition-delay: 0.17s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(86) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.172s;\r\n            transition-delay: 0.172s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(87) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.174s;\r\n            transition-delay: 0.174s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(88) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.176s;\r\n            transition-delay: 0.176s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(89) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.178s;\r\n            transition-delay: 0.178s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(90) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.18s;\r\n            transition-delay: 0.18s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(91) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.182s;\r\n            transition-delay: 0.182s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(92) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.184s;\r\n            transition-delay: 0.184s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(93) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.186s;\r\n            transition-delay: 0.186s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(94) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.188s;\r\n            transition-delay: 0.188s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(95) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.19s;\r\n            transition-delay: 0.19s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(96) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.192s;\r\n            transition-delay: 0.192s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(97) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.194s;\r\n            transition-delay: 0.194s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(98) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.196s;\r\n            transition-delay: 0.196s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(99) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.198s;\r\n            transition-delay: 0.198s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(100) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.2s;\r\n            transition-delay: 0.2s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(101) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.202s;\r\n            transition-delay: 0.202s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(102) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.204s;\r\n            transition-delay: 0.204s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(103) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.206s;\r\n            transition-delay: 0.206s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(104) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.208s;\r\n            transition-delay: 0.208s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(105) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.21s;\r\n            transition-delay: 0.21s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(106) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.212s;\r\n            transition-delay: 0.212s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(107) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.214s;\r\n            transition-delay: 0.214s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(108) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.216s;\r\n            transition-delay: 0.216s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(109) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.218s;\r\n            transition-delay: 0.218s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(110) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.22s;\r\n            transition-delay: 0.22s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(111) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.222s;\r\n            transition-delay: 0.222s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(112) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.224s;\r\n            transition-delay: 0.224s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(113) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.226s;\r\n            transition-delay: 0.226s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(114) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.228s;\r\n            transition-delay: 0.228s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(115) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.23s;\r\n            transition-delay: 0.23s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(116) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.232s;\r\n            transition-delay: 0.232s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(117) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.234s;\r\n            transition-delay: 0.234s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(118) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.236s;\r\n            transition-delay: 0.236s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(119) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.238s;\r\n            transition-delay: 0.238s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(120) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.24s;\r\n            transition-delay: 0.24s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(121) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.242s;\r\n            transition-delay: 0.242s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(122) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.244s;\r\n            transition-delay: 0.244s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(123) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.246s;\r\n            transition-delay: 0.246s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(124) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.248s;\r\n            transition-delay: 0.248s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(125) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.25s;\r\n            transition-delay: 0.25s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(126) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.252s;\r\n            transition-delay: 0.252s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(127) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.254s;\r\n            transition-delay: 0.254s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(128) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.256s;\r\n            transition-delay: 0.256s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(129) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.258s;\r\n            transition-delay: 0.258s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(130) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.26s;\r\n            transition-delay: 0.26s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(131) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.262s;\r\n            transition-delay: 0.262s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(132) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.264s;\r\n            transition-delay: 0.264s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(133) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.266s;\r\n            transition-delay: 0.266s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(134) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.268s;\r\n            transition-delay: 0.268s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(135) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.27s;\r\n            transition-delay: 0.27s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(136) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.272s;\r\n            transition-delay: 0.272s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(137) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.274s;\r\n            transition-delay: 0.274s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(138) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.276s;\r\n            transition-delay: 0.276s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(139) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.278s;\r\n            transition-delay: 0.278s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(140) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.28s;\r\n            transition-delay: 0.28s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(141) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.282s;\r\n            transition-delay: 0.282s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(142) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.284s;\r\n            transition-delay: 0.284s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(143) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.286s;\r\n            transition-delay: 0.286s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(144) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.288s;\r\n            transition-delay: 0.288s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(145) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.29s;\r\n            transition-delay: 0.29s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(146) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.292s;\r\n            transition-delay: 0.292s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(147) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.294s;\r\n            transition-delay: 0.294s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(148) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.296s;\r\n            transition-delay: 0.296s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(149) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.298s;\r\n            transition-delay: 0.298s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(150) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.3s;\r\n            transition-delay: 0.3s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(151) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.302s;\r\n            transition-delay: 0.302s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(152) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.304s;\r\n            transition-delay: 0.304s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(153) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.306s;\r\n            transition-delay: 0.306s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(154) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.308s;\r\n            transition-delay: 0.308s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(155) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.31s;\r\n            transition-delay: 0.31s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(156) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.312s;\r\n            transition-delay: 0.312s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(157) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.314s;\r\n            transition-delay: 0.314s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(158) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.316s;\r\n            transition-delay: 0.316s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(159) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.318s;\r\n            transition-delay: 0.318s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(160) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.32s;\r\n            transition-delay: 0.32s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(161) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.322s;\r\n            transition-delay: 0.322s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(162) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.324s;\r\n            transition-delay: 0.324s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(163) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.326s;\r\n            transition-delay: 0.326s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(164) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.328s;\r\n            transition-delay: 0.328s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(165) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.33s;\r\n            transition-delay: 0.33s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(166) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.332s;\r\n            transition-delay: 0.332s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(167) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.334s;\r\n            transition-delay: 0.334s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(168) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.336s;\r\n            transition-delay: 0.336s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(169) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.338s;\r\n            transition-delay: 0.338s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(170) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.34s;\r\n            transition-delay: 0.34s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(171) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.342s;\r\n            transition-delay: 0.342s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(172) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.344s;\r\n            transition-delay: 0.344s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(173) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.346s;\r\n            transition-delay: 0.346s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(174) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.348s;\r\n            transition-delay: 0.348s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(175) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.35s;\r\n            transition-delay: 0.35s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(176) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.352s;\r\n            transition-delay: 0.352s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(177) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.354s;\r\n            transition-delay: 0.354s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(178) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.356s;\r\n            transition-delay: 0.356s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(179) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.358s;\r\n            transition-delay: 0.358s;\r\n}\r\ninput[type='checkbox']:not(:checked) + label > .favourite .spinner_part:nth-of-type(180) {\r\n    opacity: 0;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: .1s;\r\n            transition-duration: .1s;\r\n    -webkit-transition-delay: 0.36s;\r\n            transition-delay: 0.36s;\r\n}\r\n\r\ninput[type='checkbox']:not(:checked) + label > .favourite {\r\n    -webkit-transition-property: box-shadow,width;\r\n    transition-property: box-shadow,width;\r\n    -webkit-transition-duration: .1s,.2s;\r\n            transition-duration: .1s,.2s;\r\n    -webkit-transition-delay: .1s,.2s;\r\n            transition-delay: .1s,.2s;\r\n    box-shadow: 0px 0px 0px 3px white;\r\n}\r\n\r\n/* Animations */\r\n@-webkit-keyframes pop {\r\n    0% {\r\n        -webkit-transform: scale(0);\r\n                transform: scale(0);\r\n    }\r\n    90% {\r\n        -webkit-transform: scale(1.1);\r\n                transform: scale(1.1);\r\n    }\r\n    100% {\r\n        -webkit-transform: scale(1);\r\n                transform: scale(1);\r\n    }\r\n}\r\n@keyframes pop {\r\n    0% {\r\n        -webkit-transform: scale(0);\r\n                transform: scale(0);\r\n    }\r\n    90% {\r\n        -webkit-transform: scale(1.1);\r\n                transform: scale(1.1);\r\n    }\r\n    100% {\r\n        -webkit-transform: scale(1);\r\n                transform: scale(1);\r\n    }\r\n}\r\n@-webkit-keyframes heartbeat_l {\r\n    0% {\r\n        -webkit-transform: scale(1.1);\r\n                transform: scale(1.1);\r\n        -webkit-transform: rotate(-45deg);\r\n                transform: rotate(-45deg);\r\n    }\r\n    50% {\r\n        -webkit-transform: scale(0.7);\r\n                transform: scale(0.7);\r\n        -webkit-transform: rotate(-45deg);\r\n                transform: rotate(-45deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: scale(1.1);\r\n                transform: scale(1.1);\r\n        -webkit-transform: rotate(-45deg);\r\n                transform: rotate(-45deg);\r\n    }\r\n}\r\n@keyframes heartbeat_l {\r\n    0% {\r\n        -webkit-transform: scale(1.1);\r\n                transform: scale(1.1);\r\n        -webkit-transform: rotate(-45deg);\r\n                transform: rotate(-45deg);\r\n    }\r\n    50% {\r\n        -webkit-transform: scale(0.7);\r\n                transform: scale(0.7);\r\n        -webkit-transform: rotate(-45deg);\r\n                transform: rotate(-45deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: scale(1.1);\r\n                transform: scale(1.1);\r\n        -webkit-transform: rotate(-45deg);\r\n                transform: rotate(-45deg);\r\n    }\r\n}\r\n/* Media quizzles */\r\n", ""]);
	
	// exports


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./trash.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./trash.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, ".trashCan {\r\n    zoom: 0.6;\r\n}\r\n.wrapper{\r\n    position: relative;\r\n    cursor: pointer;\r\n}\r\n.lid{\r\n    position: relative;\r\n    top: 2px;\r\n    width: 24px;\r\n    height: 6px;\r\n    border: solid 2px rgb(100,100,100);\r\n    -webkit-transition: all .2s ease-in-out;\r\n    transition: all .2s ease-in-out;\r\n    -webkit-transform-origin: left;\r\n            transform-origin: left;\r\n    -webkit-transform: rotate(0deg) translateY(0px);\r\n            transform: rotate(0deg) translateY(0px);\r\n}\r\n.lid:before,\r\n.lid:after{\r\n    content: '';\r\n    position: absolute;\r\n}\r\n.lid:before{\r\n    width: 10px;\r\n    height: 5px;\r\n    top: -5px;\r\n    left: 5px;\r\n    background: rgb(100,100,100);\r\n}\r\n.lid:after{\r\n    width: 6px;\r\n    height: 4px;\r\n    top: -3px;\r\n    left: 7px;\r\n}\r\n.can{\r\n    position: relative;\r\n    left: 2px;\r\n    width: 20px;\r\n    height: 20px;\r\n    border: solid 2px rgb(100,100,100);\r\n    border-radius: 0 0 3px 3px;\r\n}\r\n.can:before{\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 0;\r\n    height: 0;\r\n    box-shadow: 4px 5px 0px 1px rgb(100,100,100),\r\n        4px 7px 0px 1px rgb(100,100,100),\r\n        4px 9px 0px 1px rgb(100,100,100),\r\n        4px 11px 0px 1px rgb(100,100,100),\r\n        4px 13px 0px 1px rgb(100,100,100),\r\n        8px 5px 0px 1px rgb(100,100,100),\r\n        8px 7px 0px 1px rgb(100,100,100),\r\n        8px 9px 0px 1px rgb(100,100,100),\r\n        8px 11px 0px 1px rgb(100,100,100),\r\n        8px 13px 0px 1px rgb(100,100,100),\r\n        12px 5px 0px 1px rgb(100,100,100),\r\n        12px 7px 0px 1px rgb(100,100,100),\r\n        12px 9px 0px 1px rgb(100,100,100),\r\n        12px 11px 0px 1px rgb(100,100,100),\r\n        12px 13px 0px 1px rgb(100,100,100);\r\n}\r\n.wrapper:hover .lid{\r\n    -webkit-transform: rotate(-30deg) translateY(-2px);\r\n            transform: rotate(-30deg) translateY(-2px);\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(34);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "@media screen and (max-width: 900px) {\r\n    html, body {\r\n        overflow-x: hidden;\r\n        font-size: 16px;\r\n    }\r\n\r\n    .container {\r\n        height: initial;\r\n        min-height: initial;\r\n    }\r\n\r\n    .innerContainer, .secondaryContainer, .pokemonTypesContainer {\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: column;\r\n                flex-direction: column;\r\n    }\r\n\r\n    .innerContainer {\r\n        padding-top: 50px;\r\n    }\r\n\r\n    .secondaryContainer, .pokemonVCard {\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                    -ms-grid-row-align: center;\r\n                align-items: center;\r\n    }\r\n\r\n    .mediumSize {\r\n        margin-top: 70px;\r\n    }\r\n\r\n    .pokemonHeight, .pokemonWeight, .mediumSize, .pokemonHabitat, .multiplierRow, .pokemonDescription, .pokemonHeldItems > ul, .pokemonAbilities > ul, .pokemonMultipliers {\r\n        text-align: center;\r\n    }\r\n\r\n    .pokemonDescription {\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .pokemonStats, .pokemonFamily {\r\n        max-width: 90%;\r\n    }\r\n\r\n    .pokemonDescription {\r\n        max-width: 80%;\r\n    }\r\n\r\n    .morphsearch.open .morphsearch-form {\r\n        height: 70px;\r\n    }\r\n\r\n    .jp {\r\n        font-size: 200%;\r\n        top: 10%;\r\n        opacity: .7;\r\n        position: relative;\r\n        margin-bottom: -35px;\r\n        margin-top: 23px;\r\n    }\r\n\r\n    .tooltip-onleft {\r\n        width: 239%;\r\n        left: -65%;\r\n        bottom: -2px;\r\n    }\r\n\r\n    .tooltip-onright {\r\n        width: 100%;\r\n        left: 0%;\r\n    }\r\n\r\n    .multiplierAttack, .multiplierDefense {\r\n        position: relative;\r\n    }\r\n\r\n    .softHidden {\r\n        display: none;\r\n    }\r\n\r\n    .switchMultiplier > .multiplierAttack {\r\n        display: none;\r\n    }\r\n\r\n    .switchMultiplier > .multiplierDefense {\r\n        display: block;\r\n    }\r\n\r\n    .pokemonHeldItems {\r\n        margin-bottom: 50px;\r\n    }\r\n\r\n    .secondaryContainer > .pokemonMultipliers {\r\n        -ms-flex-preferred-size: 1px;\r\n            flex-basis: 1px;\r\n        height: auto;\r\n    }\r\n\r\n    .logo {\r\n        top: 1%;\r\n        left: 10%;\r\n    }\r\n\r\n    .pokemonImage>img {\r\n        width: 55vw;\r\n    }\r\n\r\n    .favouriteContainer {\r\n        display: block;\r\n        position: absolute;\r\n        right: 56px;\r\n        top: -8px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 350px) {\r\n    .liStat {\r\n        font-size: 72%;\r\n    }\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(36);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "@media screen and (min-width: 900px) {\r\n    ::-webkit-scrollbar-track { \r\n        background-color:   transparent;\r\n    }\r\n\r\n    ::-webkit-scrollbar {\r\n        width: 8px;\r\n        background-color:   transparent;\r\n    }\r\n\r\n    ::-webkit-scrollbar-thumb {\r\n        background-color:   #555;\r\n        border-radius:      4px;\r\n    }\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = run;
	
	var _pokemons = __webpack_require__(38);
	
	var _pokemons2 = _interopRequireDefault(_pokemons);
	
	var _quotes = __webpack_require__(39);
	
	var _quotes2 = _interopRequireDefault(_quotes);
	
	var _getColors = __webpack_require__(40);
	
	var _getColors2 = _interopRequireDefault(_getColors);
	
	var _getHappiness = __webpack_require__(42);
	
	var _getHappiness2 = _interopRequireDefault(_getHappiness);
	
	var _recentPokemons = __webpack_require__(43);
	
	var _currentPokemon = __webpack_require__(44);
	
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
/* 38 */
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
/* 39 */
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.default = getColors;
	
	var _rbg = __webpack_require__(41);
	
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
	
	        var bgColor = (0, _rbg2.default)(bgChannels[0] + 30, bgChannels[1] + 30, bgChannels[2] + 30);
	        var bgColorEnd = (0, _rbg2.default)(bgChannels[0] - 30, bgChannels[1] - 30, bgChannels[2] - 30);
	        var primaryColor = (0, _rbg2.default)(primaryChannels[0], primaryChannels[1], primaryChannels[2]);
	        var secondaryColor = (0, _rbg2.default)(secondaryChannels[0], secondaryChannels[1], secondaryChannels[2]);
	        var thirdyColor = (0, _rbg2.default)(thirdyChannels[0], thirdyChannels[1], thirdyChannels[2]);
	        var invertedColor = (0, _rbg2.default)(255 - thirdyChannels[0], 255 - thirdyChannels[1], 255 - thirdyChannels[2]);
	        var css = document.createElement('style');
	        css.type = 'text/css';
	        css.innerHTML = '   .bgColor { \n                                background: linear-gradient( -45deg, ' + bgColor + ', ' + bgColorEnd + ' );\n                                     }\n                            .primaryColor { color: ' + primaryColor + '; }\n                            .secondaryColor { color: ' + secondaryColor + '; } \n                            .thirdyColor { color: ' + thirdyColor + '; }\n                            .borderColor { \n                                text-shadow: -1px 0 ' + bgColor + ', 0 1px ' + bgColor + ', 1px 0 ' + bgColor + ', 0 -1px ' + bgColor + ';\n                            }\n                            .tooltipColor {\n                                background: ' + bgColor + ';\n                                border-bottom: 56px solid ' + secondaryColor + ';\n                            }\n                            .onoffswitch-inner:before {\n                                background-color: ' + secondaryColor + ';\n                            }\n                            .onoffswitch-label, .onoffswitch-switch {\n                                border: 2px solid ' + secondaryColor + ';\n                                background-color: ' + secondaryColor + '; \n                            }\n                            .onoffswitch-inner:before {\n                                color: ' + bgColor + ';\n                            }\n                            .onoffswitch-inner:after {\n                                background-color: ' + bgColor + '; \n                            }\n                            .onoffswitch-switch {\n                                background: ' + bgColor + ';\n                            }\n                            .onoffswitch-inner:after {\n                                color: ' + thirdyColor + ';\n                            }\n                            .invertedColor {\n                                background: ' + invertedColor + '\n                            }\n                            ';
	        document.body.appendChild(css);
	        document.head.querySelectorAll('meta[name=theme-color]')[0].content = bgColor;
	    };
	    image.src = 'images/pokemons/' + id + '.svg';
	    image.crossOrigin = 'Anonymous';
	}

/***/ },
/* 41 */
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
/* 42 */
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
/* 43 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var recentPokemons = JSON.parse(localStorage.getItem('recents'));
	
	exports.recentPokemons = recentPokemons;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.currentPokemon = undefined;
	
	var _pokemons = __webpack_require__(38);
	
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
/* 45 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var mainPokemon = function mainPokemon($scope, $http, $rootScope, $timeout, $localStorage) {
	    'ngInject';
	
	    _classCallCheck(this, mainPokemon);
	
	    $scope.$on('init', function () {
	        if ($rootScope.currentPokemon && $rootScope.currentPokemon.types && $rootScope.pokemonSpecie) {
	            $scope.$storage = $localStorage;
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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getMemebers = __webpack_require__(47);
	
	var _getMemebers2 = _interopRequireDefault(_getMemebers);
	
	var _config = __webpack_require__(48);
	
	var _pokemons = __webpack_require__(38);
	
	var _pokemons2 = _interopRequireDefault(_pokemons);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var pokemonFamily = function pokemonFamily($scope, $rootScope, $http, $timeout) {
	    'ngInject';
	
	    _classCallCheck(this, pokemonFamily);
	
	    $scope.$on('init', function () {
	        if ($rootScope.pokemonSpecie) {
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
	        }
	    });
	};
	pokemonFamily.$inject = ["$scope", "$rootScope", "$http", "$timeout"];
	
	exports.default = pokemonFamily;

/***/ },
/* 47 */
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
/* 48 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var config = {};
	
	config.baseUrl = 'https://cdn.rawgit.com/Naramsim/ninjask/master/data/api/v2';
	
	exports.config = config;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _pokemons = __webpack_require__(38);
	
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
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _pokemons = __webpack_require__(38);
	
	var _pokemons2 = _interopRequireDefault(_pokemons);
	
	var _recentPokemons = __webpack_require__(43);
	
	var _getFavouritePokemons = __webpack_require__(51);
	
	var _getFavouritePokemons2 = _interopRequireDefault(_getFavouritePokemons);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var pokemonSearch = function pokemonSearch($scope) {
	    'ngInject';
	
	    _classCallCheck(this, pokemonSearch);
	
	    $scope.pokemons = _pokemons2.default;
	    $scope.recents = _recentPokemons.recentPokemons;
	    $scope.getFavourites = function () {
	        $scope.favourites = (0, _getFavouritePokemons2.default)();
	    };
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
	    $scope.userHasTyped = function () {
	        return !!document.getElementsByClassName('morphsearch-input')[0].value;
	    };
	};
	pokemonSearch.$inject = ["$scope"];
	
	exports.default = pokemonSearch;

/***/ },
/* 51 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = getFavouritePokemons;
	function getFavouritePokemons() {
	    return JSON.parse(localStorage.getItem('favourites'));
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _config = __webpack_require__(48);
	
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
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getMultipliers = __webpack_require__(54);
	
	var _getMultipliers2 = _interopRequireDefault(_getMultipliers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var pokemonMultipliers = function pokemonMultipliers($scope, $rootScope) {
	    'ngInject';
	
	    _classCallCheck(this, pokemonMultipliers);
	
	    $scope.$on('init', function () {
	        if ($rootScope.currentPokemon) {
	            (function () {
	                var types = $rootScope.currentPokemon.types.map(function (type) {
	                    return type.type.name;
	                });
	                var multipliers = (0, _getMultipliers2.default)(types);
	                var multipliersAttack = new Set();
	                var multipliersDefense = new Set();
	                var inline = '';
	                var multiplierAttackElement = document.getElementsByClassName('multiplierAttack')[0];
	                var multiplierDefenseElement = document.getElementsByClassName('multiplierDefense')[0];
	
	                Object.keys(multipliers.attack).forEach(function (key) {
	                    multipliersAttack.add(multipliers.attack[key]);
	                });
	                Object.keys(multipliers.defense).forEach(function (key) {
	                    multipliersDefense.add(multipliers.defense[key]);
	                });
	
	                if (multipliersAttack.size > 3 || multipliersAttack.size > 3) {
	                    inline = '\n                            @media screen and (min-width: 900px) {\n                                .multiplierRow .centerAligned {\n                                    align-items: center;\n                                    display: flex;\n                                    flex-direction: row-reverse;\n                                }\n                                .miniLabel {\n                                    display: inline-flex;\n                                    width: 40px;\n                                }\n                                .multiplierRow li:nth-child(n+2) .miniLabel {\n                                    display: none;\n                                }\n                                .multiplierRow > .padded {\n                                    padding-right: 5px;\n                                    padding-left: 5px;\n                                }\n                            }';
	                }
	                $scope.multipliers = multipliers;
	
	                angular.element(multiplierDefenseElement).ready(function () {
	                    var highestMultiplierHeight = Math.max(multiplierAttackElement.clientHeight, multiplierDefenseElement.clientHeight);
	                    var css = document.createElement('style');
	                    css.type = 'text/css';
	                    var diff = inline ? -70 : 44;
	                    css.innerHTML = '   .pokemonMultipliers { \n                                            height: ' + (highestMultiplierHeight + diff) + 'px;\n                                        }\n                                        ' + inline + '\n                                        ';
	                    document.body.appendChild(css);
	                });
	            })();
	        }
	    });
	};
	pokemonMultipliers.$inject = ["$scope", "$rootScope"];
	
	exports.default = pokemonMultipliers;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getMultipliers;
	
	var _all_types = __webpack_require__(55);
	
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
/* 55 */
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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _config = __webpack_require__(48);
	
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
/* 57 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var pokemonAbilities = function pokemonAbilities($rootScope, $scope, $http) {
	    'ngInject';
	
	    _classCallCheck(this, pokemonAbilities);
	
	    $scope.$on('init', function () {
	        $scope.toggleFav = function (pokemon) {
	            console.log(pokemon);
	            var favourites = localStorage.getItem('favourites');
	            if (favourites) {
	                favourites = new Set(JSON.parse(favourites));
	                if (favourites.has(pokemon)) {
	                    favourites.delete(pokemon);
	                } else {
	                    favourites.add(pokemon);
	                }
	                //$rootScope.favourites = favourites;
	                localStorage.setItem('favourites', JSON.stringify(Array.from(favourites)));
	            } else {
	                localStorage.setItem('favourites', JSON.stringify([]));
	            }
	        };
	        $scope.isFav = function (pokemon) {
	            var favourites = localStorage.getItem('favourites');
	            if (favourites) {
	                favourites = JSON.parse(favourites);
	                if (favourites.indexOf(pokemon) > -1) {
	                    return true;
	                } else {
	                    return false;
	                }
	            } else {
	                localStorage.setItem('favourites', JSON.stringify([]));
	                return false;
	            }
	        };
	    });
	};
	pokemonAbilities.$inject = ["$rootScope", "$scope", "$http"];
	
	exports.default = pokemonAbilities;

/***/ },
/* 58 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var FavouriteTrash = function FavouriteTrash($scope) {
	    'ngInject';
	
	    _classCallCheck(this, FavouriteTrash);
	
	    $scope.$on('init', function () {
	        $scope.deleteFavourites = function (url) {
	            localStorage.setItem('favourites', JSON.stringify([]));
	        };
	    });
	};
	FavouriteTrash.$inject = ["$scope"];
	
	exports.default = FavouriteTrash;

/***/ },
/* 59 */
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
/* 60 */
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
/* 61 */
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
/* 62 */
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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = getInfoFactory;
	
	var _config = __webpack_require__(48);
	
	var _pokemons = __webpack_require__(38);
	
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
/* 64 */
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
/* 65 */
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
/* 66 */
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