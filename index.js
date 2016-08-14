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
	
	var _run = __webpack_require__(3);
	
	var _run2 = _interopRequireDefault(_run);
	
	var _MainPokemon = __webpack_require__(9);
	
	var _MainPokemon2 = _interopRequireDefault(_MainPokemon);
	
	var _PokemonFamily = __webpack_require__(11);
	
	var _PokemonFamily2 = _interopRequireDefault(_PokemonFamily);
	
	var _Morph = __webpack_require__(14);
	
	var _Morph2 = _interopRequireDefault(_Morph);
	
	var _PokemonSearch = __webpack_require__(15);
	
	var _PokemonSearch2 = _interopRequireDefault(_PokemonSearch);
	
	var _PokemonAbilities = __webpack_require__(16);
	
	var _PokemonAbilities2 = _interopRequireDefault(_PokemonAbilities);
	
	var _PokemonMultipliers = __webpack_require__(17);
	
	var _PokemonMultipliers2 = _interopRequireDefault(_PokemonMultipliers);
	
	var _PokemonHeldItems = __webpack_require__(18);
	
	var _PokemonHeldItems2 = _interopRequireDefault(_PokemonHeldItems);
	
	var _pokemonFilterStartFilter = __webpack_require__(19);
	
	var _pokemonFilterStartFilter2 = _interopRequireDefault(_pokemonFilterStartFilter);
	
	var _pokemonFilter = __webpack_require__(24);
	
	var _pokemonFilter2 = _interopRequireDefault(_pokemonFilter);
	
	var _multiFilter = __webpack_require__(20);
	
	var _multiFilter2 = _interopRequireDefault(_multiFilter);
	
	var _imageonloadDirective = __webpack_require__(21);
	
	var _imageonloadDirective2 = _interopRequireDefault(_imageonloadDirective);
	
	var _getInfoFactory = __webpack_require__(22);
	
	var _getInfoFactory2 = _interopRequireDefault(_getInfoFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	console.log("hi");
	
	console.log(_getInfoFactory2.default);
	
	angular.module('App', ['ngAnimate', 'ngStorage']).run(_run2.default).controller('MainPokemon', _MainPokemon2.default).controller('PokemonFamily', _PokemonFamily2.default).controller('Morph', _Morph2.default).controller('PokemonSearch', _PokemonSearch2.default).controller('PokemonAbilities', _PokemonAbilities2.default).controller('PokemonMultipliers', _PokemonMultipliers2.default).controller('PokemonHeldItems', _PokemonHeldItems2.default).filter('pokemonFilterStart', _pokemonFilterStartFilter2.default).filter('pokemonFilter', _pokemonFilter2.default).filter('multi', _multiFilter2.default).directive('imageonload', _imageonloadDirective2.default).factory('getInfoFactory', _getInfoFactory2.default);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.currentPokemon = undefined;
	
	var _pokemons = __webpack_require__(2);
	
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
	    return _pokemons2.default[Math.floor(0 + Math.random() * 750)];
	}
	
	exports.currentPokemon = currentPokemon;

/***/ },
/* 2 */
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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = run;
	
	var _pokemons = __webpack_require__(2);
	
	var _pokemons2 = _interopRequireDefault(_pokemons);
	
	var _quotes = __webpack_require__(4);
	
	var _quotes2 = _interopRequireDefault(_quotes);
	
	var _getColors = __webpack_require__(5);
	
	var _getColors2 = _interopRequireDefault(_getColors);
	
	var _getHappiness = __webpack_require__(7);
	
	var _getHappiness2 = _interopRequireDefault(_getHappiness);
	
	var _recentPokemons = __webpack_require__(8);
	
	var _currentPokemon = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function run($http, $rootScope, getInfoFactory) {
	    var quoteId = _quotes2.default[Math.floor(Math.random() * _quotes2.default.length)];
	    $rootScope.quote = quoteId[1];
	    $rootScope.quoteAuthor = quoteId[0];
	    $rootScope.status = 'FETCHING';
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
	        if (completed = 2) {
	            setTimeout(function () {
	                $rootScope.status = 'READY';
	            }, 300);
	            $rootScope.$broadcast('init');
	        }
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
	        if (completed = 2) {
	            setTimeout(function () {
	                $rootScope.status = 'READY';
	            }, 300);
	            $rootScope.$broadcast('init');
	        }
	    });
	}

/***/ },
/* 4 */
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
			"Youngster joey",
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
			"Oh...you look tired. why don't you take a rest?"
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
		]
	];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.default = getColors;
	
	var _rbg = __webpack_require__(6);
	
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
	    };
	    image.src = 'images/pokemons/' + id + '.svg';
	    image.crossOrigin = 'Anonymous';
	}

/***/ },
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var recentPokemons = JSON.parse(localStorage.getItem('recents'));
	
	exports.recentPokemons = recentPokemons;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getMultipliers = __webpack_require__(10);
	
	var _getMultipliers2 = _interopRequireDefault(_getMultipliers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var mainPokemon = function mainPokemon($scope, $http, $rootScope, $timeout, $localStorage) {
	    'ngInject';
	
	    _classCallCheck(this, mainPokemon);
	
	    $scope.$on('init', function () {
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
	    });
	};
	mainPokemon.$inject = ["$scope", "$http", "$rootScope", "$timeout", "$localStorage"];
	
	exports.default = mainPokemon;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getMultipliers;
	
	var _all_types = __webpack_require__(23);
	
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getMemebers = __webpack_require__(12);
	
	var _getMemebers2 = _interopRequireDefault(_getMemebers);
	
	var _config = __webpack_require__(13);
	
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
	            window.location.hash = '#' + pokemons[id - 1];
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
/* 12 */
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
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var config = {};
	
	config.baseUrl = 'https://cdn.rawgit.com/Naramsim/ninjask/master/data/api/v2';
	
	exports.config = config;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _pokemons = __webpack_require__(2);
	
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _pokemons = __webpack_require__(2);
	
	var _pokemons2 = _interopRequireDefault(_pokemons);
	
	var _recentPokemons = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var pokemonSearch = function pokemonSearch($scope) {
	    'ngInject';
	
	    _classCallCheck(this, pokemonSearch);
	
	    $scope.$on('init', function () {
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
	    });
	};
	pokemonSearch.$inject = ["$scope"];
	
	exports.default = pokemonSearch;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _config = __webpack_require__(13);
	
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
/* 17 */
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _config = __webpack_require__(13);
	
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
/* 19 */
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
/* 20 */
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
/* 21 */
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = getInfoFactory;
	
	var _config = __webpack_require__(13);
	
	var _pokemons = __webpack_require__(2);
	
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
	            });
	            return deferred.promise;
	        }
	    };
	}

/***/ },
/* 23 */
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
/* 24 */
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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map