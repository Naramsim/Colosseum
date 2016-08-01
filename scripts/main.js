var App = angular.module('App', ['ngAnimate']);
var currentPokemon = 'nincada';
var baseUrl = 'https://cdn.rawgit.com/Naramsim/ninjask/master/data/api/v2';
var recentPokemons = JSON.parse(localStorage.getItem('recents'));
var pokemons = ['bulbasaur','ivysaur','venusaur','charmander','charmeleon','charizard','squirtle','wartortle','blastoise','caterpie','metapod','butterfree','weedle','kakuna','beedrill','pidgey','pidgeotto','pidgeot','rattata','raticate','spearow','fearow','ekans','arbok','pikachu','raichu','sandshrew','sandslash','nidoran-f','nidorina','nidoqueen','nidoran-m','nidorino','nidoking','clefairy','clefable','vulpix','ninetales','jigglypuff','wigglytuff','zubat','golbat','oddish','gloom','vileplume','paras','parasect','venonat','venomoth','diglett','dugtrio','meowth','persian','psyduck','golduck','mankey','primeape','growlithe','arcanine','poliwag','poliwhirl','poliwrath','abra','kadabra','alakazam','machop','machoke','machamp','bellsprout','weepinbell','victreebel','tentacool','tentacruel','geodude','graveler','golem','ponyta','rapidash','slowpoke','slowbro','magnemite','magneton','farfetchd','doduo','dodrio','seel','dewgong','grimer','muk','shellder','cloyster','gastly','haunter','gengar','onix','drowzee','hypno','krabby','kingler','voltorb','electrode','exeggcute','exeggutor','cubone','marowak','hitmonlee','hitmonchan','lickitung','koffing','weezing','rhyhorn','rhydon','chansey','tangela','kangaskhan','horsea','seadra','goldeen','seaking','staryu','starmie','mr-mime','scyther','jynx','electabuzz','magmar','pinsir','tauros','magikarp','gyarados','lapras','ditto','eevee','vaporeon','jolteon','flareon','porygon','omanyte','omastar','kabuto','kabutops','aerodactyl','snorlax','articuno','zapdos','moltres','dratini','dragonair','dragonite','mewtwo','mew','chikorita','bayleef','meganium','cyndaquil','quilava','typhlosion','totodile','croconaw','feraligatr','sentret','furret','hoothoot','noctowl','ledyba','ledian','spinarak','ariados','crobat','chinchou','lanturn','pichu','cleffa','igglybuff','togepi','togetic','natu','xatu','mareep','flaaffy','ampharos','bellossom','marill','azumarill','sudowoodo','politoed','hoppip','skiploom','jumpluff','aipom','sunkern','sunflora','yanma','wooper','quagsire','espeon','umbreon','murkrow','slowking','misdreavus','unown','wobbuffet','girafarig','pineco','forretress','dunsparce','gligar','steelix','snubbull','granbull','qwilfish','scizor','shuckle','heracross','sneasel','teddiursa','ursaring','slugma','magcargo','swinub','piloswine','corsola','remoraid','octillery','delibird','mantine','skarmory','houndour','houndoom','kingdra','phanpy','donphan','porygon2','stantler','smeargle','tyrogue','hitmontop','smoochum','elekid','magby','miltank','blissey','raikou','entei','suicune','larvitar','pupitar','tyranitar','lugia','ho-oh','celebi','treecko','grovyle','sceptile','torchic','combusken','blaziken','mudkip','marshtomp','swampert','poochyena','mightyena','zigzagoon','linoone','wurmple','silcoon','beautifly','cascoon','dustox','lotad','lombre','ludicolo','seedot','nuzleaf','shiftry','taillow','swellow','wingull','pelipper','ralts','kirlia','gardevoir','surskit','masquerain','shroomish','breloom','slakoth','vigoroth','slaking','nincada','ninjask','shedinja','whismur','loudred','exploud','makuhita','hariyama','azurill','nosepass','skitty','delcatty','sableye','mawile','aron','lairon','aggron','meditite','medicham','electrike','manectric','plusle','minun','volbeat','illumise','roselia','gulpin','swalot','carvanha','sharpedo','wailmer','wailord','numel','camerupt','torkoal','spoink','grumpig','spinda','trapinch','vibrava','flygon','cacnea','cacturne','swablu','altaria','zangoose','seviper','lunatone','solrock','barboach','whiscash','corphish','crawdaunt','baltoy','claydol','lileep','cradily','anorith','armaldo','feebas','milotic','castform','kecleon','shuppet','banette','duskull','dusclops','tropius','chimecho','absol','wynaut','snorunt','glalie','spheal','sealeo','walrein','clamperl','huntail','gorebyss','relicanth','luvdisc','bagon','shelgon','salamence','beldum','metang','metagross','regirock','regice','registeel','latias','latios','kyogre','groudon','rayquaza','jirachi','deoxys','turtwig','grotle','torterra','chimchar','monferno','infernape','piplup','prinplup','empoleon','starly','staravia','staraptor','bidoof','bibarel','kricketot','kricketune','shinx','luxio','luxray','budew','roserade','cranidos','rampardos','shieldon','bastiodon','burmy','wormadam','mothim','combee','vespiquen','pachirisu','buizel','floatzel','cherubi','cherrim','shellos','gastrodon','ambipom','drifloon','drifblim','buneary','lopunny','mismagius','honchkrow','glameow','purugly','chingling','stunky','skuntank','bronzor','bronzong','bonsly','mime-jr','happiny','chatot','spiritomb','gible','gabite','garchomp','munchlax','riolu','lucario','hippopotas','hippowdon','skorupi','drapion','croagunk','toxicroak','carnivine','finneon','lumineon','mantyke','snover','abomasnow','weavile','magnezone','lickilicky','rhyperior','tangrowth','electivire','magmortar','togekiss','yanmega','leafeon','glaceon','gliscor','mamoswine','porygon-z','gallade','probopass','dusknoir','froslass','rotom','uxie','mesprit','azelf','dialga','palkia','heatran','regigigas','giratina','cresselia','phione','manaphy','darkrai','shaymin','arceus','victini','snivy','servine','serperior','tepig','pignite','emboar','oshawott','dewott','samurott','patrat','watchog','lillipup','herdier','stoutland','purrloin','liepard','pansage','simisage','pansear','simisear','panpour','simipour','munna','musharna','pidove','tranquill','unfezant','blitzle','zebstrika','roggenrola','boldore','gigalith','woobat','swoobat','drilbur','excadrill','audino','timburr','gurdurr','conkeldurr','tympole','palpitoad','seismitoad','throh','sawk','sewaddle','swadloon','leavanny','venipede','whirlipede','scolipede','cottonee','whimsicott','petilil','lilligant','basculin','sandile','krokorok','krookodile','darumaka','darmanitan','maractus','dwebble','crustle','scraggy','scrafty','sigilyph','yamask','cofagrigus','tirtouga','carracosta','archen','archeops','trubbish','garbodor','zorua','zoroark','minccino','cinccino','gothita','gothorita','gothitelle','solosis','duosion','reuniclus','ducklett','swanna','vanillite','vanillish','vanilluxe','deerling','sawsbuck','emolga','karrablast','escavalier','foongus','amoonguss','frillish','jellicent','alomomola','joltik','galvantula','ferroseed','ferrothorn','klink','klang','klinklang','tynamo','eelektrik','eelektross','elgyem','beheeyem','litwick','lampent','chandelure','axew','fraxure','haxorus','cubchoo','beartic','cryogonal','shelmet','accelgor','stunfisk','mienfoo','mienshao','druddigon','golett','golurk','pawniard','bisharp','bouffalant','rufflet','braviary','vullaby','mandibuzz','heatmor','durant','deino','zweilous','hydreigon','larvesta','volcarona','cobalion','terrakion','virizion','tornadus','thundurus','reshiram','zekrom','landorus','kyurem','keldeo','meloetta','genesect','chespin','quilladin','chesnaught','fennekin','braixen','delphox','froakie','frogadier','greninja','bunnelby','diggersby','fletchling','fletchinder','talonflame','scatterbug','spewpa','vivillon','litleo','pyroar','flabebe','floette','florges','skiddo','gogoat','pancham','pangoro','furfrou','espurr','meowstic','honedge','doublade','aegislash','spritzee','aromatisse','swirlix','slurpuff','inkay','malamar','binacle','barbaracle','skrelp','dragalge','clauncher','clawitzer','helioptile','heliolisk','tyrunt','tyrantrum','amaura','aurorus','sylveon','hawlucha','dedenne','carbink','goomy','sliggoo','goodra','klefki','phantump','trevenant','pumpkaboo','gourgeist','bergmite','avalugg','noibat','noivern','xerneas','yveltal','zygarde','diancie','hoopa','volcanion'];
var all_types = {bug:{attack:{'double':['psychic','grass','dark'],half:['fighting','fire','flying','ghost','poison','steel','fairy'],zero:[]},defense:{half:['fighting','grass','ground'],'double':['fire','flying','rock'],zero:[]}},dark:{attack:{'double':['ghost','psychic'],half:['dark','fighting','fairy'],zero:[]},defense:{half:['dark','ghost'],'double':['bug','fighting','fairy'],zero:['psychic']}},dragon:{attack:{'double':['dragon'],half:['steel'],zero:['fairy']},defense:{half:['electric','fire','grass','water'],'double':['dragon','ice','fairy'],zero:[]}},electric:{attack:{'double':['flying','water'],half:['dragon','electric','grass'],zero:['ground']},defense:{half:['electric','flying','steel'],'double':['ground'],zero:[]}},fairy:{attack:{'double':['dark','dragon','fighting'],half:['fire','poison','steel'],zero:[]},defense:{half:['bug','dark','fighting'],'double':['poison','steel'],zero:['dragon']}},fighting:{attack:{'double':['dark','ice','normal','rock','steel'],half:['bug','fairy','flying','poison','psychic'],zero:['ghost']},defense:{half:['bug','dark','rock'],'double':['fairy','flying','psychic'],zero:[]}},fire:{attack:{'double':['bug','grass','ice','steel'],half:['dragon','fire','rock','water'],zero:[]},defense:{half:['bug','fairy','fire','grass','ice','steel'],'double':['bug','fire','flying','ice','poison'],zero:[]}},flying:{attack:{'double':['bug','fighting','grass'],half:['electric','rock','steel'],zero:[]},defense:{half:['bug','fighting','grass'],'double':['electric','ice','rock'],zero:['ground']}},ghost:{attack:{'double':['ghost','psychic'],half:['dark'],zero:['normal']},defense:{half:['bug','poison'],'double':['ghost','dark'],zero:['normal','fighting']}},grass:{attack:{'double':['ground','rock','water'],half:['bug','dragon','fire','flying','grass','poison','steel'],zero:[]},defense:{half:['electric','grass','ground','water'],'double':['bug','fire','flying','ice','poison'],zero:[]}},ground:{attack:{'double':['electric','fire','poison','rock','steel'],half:['bug','grass'],zero:['flying']},defense:{half:['poison','rock'],'double':['grass','ice','water'],zero:['electric']}},ice:{attack:{'double':['dragon','flying','grass','ground'],half:['fire','ice','steel','water'],zero:[]},defense:{half:['ice'],'double':['fighting','fire','rock','steel'],zero:[]}},normal:{attack:{'double':[],half:['rock','steel'],zero:['ghost']},defense:{half:[],'double':['fighting'],zero:['ghost']}},poison:{attack:{'double':['grass','fairy'],half:['ghost','ground','poison','rock'],zero:['steel']},defense:{half:['bug','fairy','fighting','grass','poison'],'double':['ground','psychic'],zero:[]}},psychic:{attack:{'double':['fighting','poison'],half:['psychic','steel'],zero:['dark']},defense:{half:['fighting','psychic'],'double':['bug','dark','ghost'],zero:[]}},rock:{attack:{'double':['bug','fire','flying','ice'],half:['fighting','ground','steel'],zero:[]},defense:{half:['fire','flying','normal','poison'],'double':['fighting','grass','ground','steel','water'],zero:[]}},steel:{attack:{'double':['fairy','ice','rock'],half:['electric','fire','steel','water'],zero:[]},defense:{half:['bug','dragon','fairy','flying','grass','ice','normal','psychic','rock','steel'],'double':['fighting','fire','ground'],zero:['poison']}},water:{attack:{'double':['fire','ground','rock'],half:['dragon','grass','steel'],zero:[]},defense:{half:['fire','ice','steel','water'],'double':['electric','grass'],zero:[]}}};

App.run(function($http, $rootScope, getInfoFactory) {
    var completed = 0;
    var hash = window.location.hash;
    currentPokemon = /#\/?([\w-\d]+)/.exec(hash);
    if (!currentPokemon) {
        currentPokemon = generateRandPokemon();
    } else {
        if (pokemons.indexOf(currentPokemon[1]) >= 0) {
            currentPokemon = currentPokemon[1];
        } else {
            currentPokemon = generateRandPokemon();
        }
    }
    console.log(currentPokemon)
    $rootScope.recentPokemons = recentPokemons;
    $rootScope.up = function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).replace('-', ' ');
    }
    $rootScope.getPokemonName = function(id) {
        return pokemons[id - 1];
    }
    $rootScope.getPokemonId = function(name) {
        return pokemons.indexOf(name) + 1;
    }
    getInfoFactory.getPokemon().then(function(res) {
        $rootScope.currentPokemon = res;
        getColors($rootScope.currentPokemon.id);
        completed += 1;
        if(completed = 2){
            $rootScope.$broadcast('init');  
        }
    });
    
    getInfoFactory.getSpecie().then(function(res) {
        $rootScope.pokemonSpecie = res;
        $rootScope.happiness = getHappiness(res.base_happiness);

        $rootScope.genere = res.genera.filter((text) => {
            if (text.language.name === 'en') {
                return true;
            } else {
                return false;
            }
        })[0].genus; 

        $rootScope.jp = res.names.filter((text) => {
            if (text.language.name === 'ja') {
                return true;
            } else {
                return false;
            }
        })[0].name;    

        $rootScope.description = res.flavor_text_entries.filter((text) => {
            if (text.language.name === 'en') {
                return true;
            } else {
                return false;
            }
        })[0].flavor_text;  
        completed += 1;
        if(completed = 2){
            $rootScope.$broadcast('init');  
        }
    });
});

App.controller('MainPokemon', function($scope, $http, $rootScope, $timeout) {
    $scope.$on('init', function(){
        var types = $rootScope.currentPokemon.types.map((type) => {
            return type.type.name;
        })
        $scope.multipliers = getMultipliers(types);
        var habitat = $rootScope.pokemonSpecie.habitat;
        if(habitat) {
            habitat = habitat.name;
        }               
        $scope.imageUrl = `images/svgs/${$rootScope.currentPokemon.id}.svg`;
        $scope.habitat = habitat ? habitat : 'in your pocket';
        $scope.unveil = function() {
            $rootScope.loaded = true;
            $timeout(function() {
                $rootScope.animationsEnded = true;
                $rootScope.$apply(function() {
                    $rootScope.animationsEnded = true;
                })
            }, 5000)
        }
        
            
        $scope.getRarity = function(item){
            var mean = 0;
            item.version_details.forEach((version) => {
                if (!mean) {
                    mean = version.rarity
                }
                mean = (mean + version.rarity) / 2
            })
            return mean;
        }
        $scope.getUrlItem = function(name){
            return `images/items/${name}.png`;
        }
        $scope.getUrlType = function(name){
            return `images/types/${name}.png`;
        }
        $scope.typeUrls = $rootScope.currentPokemon.types.map((type) => {
            return `images/types/${type.type.name}.png`
        });
    });
});

App.controller('PokemonFamily', function($scope, $rootScope, $http, $timeout) {
    $scope.$on('init', function(){
        $scope.getImageUrl = function(id) {
            return `images/svgs/${id}.svg`;
        }
        $scope.reloadWith = function(id) {
            window.location.hash = '#' + pokemons[id - 1];
            window.location.reload(true);
        }
        var evolutionChainId = /chain\/(\d+)\/$/.exec($rootScope.pokemonSpecie.evolution_chain.url);
        if (evolutionChainId && evolutionChainId.length > 0) {
            $http.get(`${baseUrl}/evolution-chain/${evolutionChainId[1]}/index.json`)
               .success(function(res){
                    $scope.family = res;
                    $scope.members = getMemebers(res);
                })
               .error(function(data) {
                    console.log(data)
               });
        }
        
    });
});

App.controller('Morph', function($scope) {
    $scope.initMorph = function() {
        initMorph();
    }
});

App.controller('PokemonSearch', function($scope) {
    $scope.$on('init', function(){
        $scope.pokemons = pokemons;
        $scope.recents = recentPokemons;
        $scope.getImageUrl = function(id) {
            return `images/svgs/${pokemons.indexOf(id) + 1}.svg`;
        }
        $scope.saveAndReload = function(pokemon) {
            var recents = localStorage.getItem('recents');
            if (recents) {
                recents = JSON.parse(recents);
                recents.unshift(pokemon);
                localStorage.setItem('recents', JSON.stringify(recents.slice(0, 6)))
            } else {
                localStorage.setItem('recents', JSON.stringify([pokemon]));
            }
            window.location.hash = `#${pokemon}`;
            window.location.reload(true);
        }
    });
});

App.controller('PokemonAbilities', function($scope, $http) {
    $scope.$on('init', function(){
        $scope.getAbility = function(url) {
            var id = /ability\/(\d+)\/$/.exec(url);
            if (id && id.length > 0) {
            	localAbility = localStorage.getItem('a' + id[1]);
            	if (!localAbility) {
	                $http.get(`${baseUrl}/ability/${id[1]}/index.json`)
	                .success(function(res){
	                    $scope.abilityDescription = res.effect_entries[0].short_effect;
	                    localStorage.setItem('a' + id[1], res.effect_entries[0].short_effect);
	                })
	                .error(function(data) {
	                    return "Nothing";
	                });
	            } else {
	            	$scope.abilityDescription = localAbility;
	            }
            }
        }
    });
});

App.controller('PokemonHeldItems', function($scope, $http) {
    $scope.$on('init', function(){
        $scope.getHeldItem = function(url) {
            var id = /item\/(\d+)\/$/.exec(url);
            if (id && id.length > 0) {
            	localHeldItem = localStorage.getItem('h' + id[1]);
            	if (!localHeldItem) {
	                $http.get(`${baseUrl}/item/${id[1]}/index.json`)
	                .success(function(res){
	                    $scope.heldItemDescription = res.effect_entries[0].short_effect;
	                    localStorage.setItem('h' + id[1], res.effect_entries[0].short_effect);
	                })
	                .error(function(data) {
	                    return "Nothing";
	                });
	            } else {
	            	$scope.heldItemDescription = localHeldItem;
	            }
            }
        }
    });
});

App.filter('pokemonFilter', function(){
    return function(arr, searchString){
        if (!searchString){
            return arr.slice(251, 257);
        }
        if (arr) {
            var result = [];
            if(/^\w+$/.test(searchString)){
                searchString = searchString.toLowerCase();
                arr.forEach(function(item){
                    if(item.indexOf(searchString) >= 0){
                        result.push(item);
                    }
                });
            }
            if(/^\d+$/.test(searchString)){
                searchString = +searchString;
                if(searchString < 751 && searchString > 0) {
                    result.push(pokemons[searchString - 1])
                }
            }
            return result.slice(0, 6);
        }
    };
});

App.filter('pokemonFilterStart', function(){
    return function(arr, searchString){
        if(!searchString){
            return arr.slice(0, 6);
        }
        if(/^\w+$/.test(searchString)){
            if (arr) {
                var result = [];
                searchString = searchString.toLowerCase();
                arr.forEach(function(item){
                    if(item.indexOf(searchString) === 0){
                        result.push(item);
                    }
                });
                return result.slice(0, 6);
            }
        }
    };
});

App.filter('multi', function() {
  return function(arr, searchString) {
        var result = {};
        angular.forEach(arr, function(value, key) {
            if (value === searchString) {
                result[key] = value;
            }
        });
        return result;
    };
});

function getColors(id) {
    var image = new Image;
    image.onload = function() {
        var colorThief = new ColorThief();
        var plt = colorThief.getPalette(image, 4);
        var bgChannels, primaryChannels, secondaryChannels, thirdyChannels;
        [bgChannels, primaryChannels, secondaryChannels, thirdyChannels] = plt;
        var bgColor = rgb(bgChannels[0], bgChannels[1], bgChannels[2]);
        var bgColorEnd = rgb(bgChannels[0] - 20, bgChannels[1] - 20, bgChannels[2] - 20);
        var primaryColor = rgb(primaryChannels[0], primaryChannels[1], primaryChannels[2]);
        var secondaryColor = rgb(secondaryChannels[0], secondaryChannels[1], secondaryChannels[2]);
        var thirdyColor = rgb(thirdyChannels[0], thirdyChannels[1], thirdyChannels[2]);
        var css = document.createElement('style');
        css.type = 'text/css';
        css.innerHTML = `   .bgColor { 
                                background: linear-gradient( 0deg, ${bgColor}, ${bgColorEnd} );
                                     }
                            .primaryColor { color: ${primaryColor}; }
                            .secondaryColor { color: ${secondaryColor}; } 
                            .thirdyColor { color: ${thirdyColor}; }
                            .borderColor { 
                                text-shadow: -1px 0 ${bgColor}, 0 1px ${bgColor}, 1px 0 ${bgColor}, 0 -1px ${bgColor};
                            }
                            .tooltipColor {
                                background: ${bgColor};
                                border-bottom: 56px solid ${secondaryColor};
                            }`;
        document.body.appendChild(css);
    }
    image.src = 'images/svgs/'+ id + '.svg';
    image.crossOrigin = 'Anonymous';
}    

function getHappiness(base) {
    if(base < 1) {
        return 'but is very unhappy';               
    } else if (base <36) {
        return 'but is quite annoyed';              
    } else if (base < 71) {     
        return 'and is happy';
    } else if (base < 101) {
        return 'and is very joyful';                
    } else if (base < 150) {
        return 'and is totally cheerful';               
    }
}

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

function getMultipliers(types) {
    var multipliers = {
        defense: {},
        attack: {}
    }
    types.forEach( (type) => {
        var damage_relations = all_types[type]
        var no_damage_to = damage_relations.attack.zero
        var no_damage_from = damage_relations.defense.zero
        var half_damage_to = damage_relations.attack.half
        var half_damage_from = damage_relations.defense.half
        var double_damage_to = damage_relations.attack.double
        var double_damage_from = damage_relations.defense.double
        no_damage_to.forEach((type) => {
          if(multipliers.attack.hasOwnProperty(type)){multipliers.attack[type] = multipliers.attack[type] * 0}
          else{multipliers.attack[type] = 0}
        })
        no_damage_from.forEach((type) => {
          if(multipliers.defense.hasOwnProperty(type)){multipliers.defense[type] = multipliers.defense[type] * 0}
          else{multipliers.defense[type] = 0}
        })
        half_damage_to.forEach((type) => {
          if(multipliers.attack.hasOwnProperty(type)){multipliers.attack[type] = multipliers.attack[type] * 0.5}
          else{multipliers.attack[type] = 0.5}
        })
        half_damage_from.forEach((type) => {
          if(multipliers.defense.hasOwnProperty(type)){multipliers.defense[type] = multipliers.defense[type] * 0.5}
          else{multipliers.defense[type] = 0.5}
        })
        double_damage_to.forEach((type) => {
          if(multipliers.attack.hasOwnProperty(type)){multipliers.attack[type] = multipliers.attack[type] * 2}
          else{multipliers.attack[type] = 2}
        })
        double_damage_from.forEach((type) => {
          if(multipliers.defense.hasOwnProperty(type)){multipliers.defense[type] = multipliers.defense[type] * 2}
          else{multipliers.defense[type] = 2}
        })
    })
    return multipliers
}

function rgb(r,g,b) {
    return `rgb(${r}, ${g}, ${b})`
}

function generateRandPokemon() {
    return pokemons[Math.floor(0 + Math.random() * 750)];
}

App.directive('imageonload', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.bind('load', function() {
                    //call the function that was passed
                    scope.$apply(attrs.imageonload);
                });
            }
        };
    })

App.factory('getInfoFactory', ['$http', '$q',
    function($http, $q) {
        return {
            getPokemon: function() {
                var deferred = $q.defer();
                $http.get(`${baseUrl}/pokemon/${pokemons.indexOf(currentPokemon) + 1}/index.json`)
                   .success(function(res){
                        deferred.resolve(res);
                    })
                   .error(function(data) {
                        console.log(data)
                   });
                return deferred.promise;
            },
            getSpecie: function(element) {
                var deferred = $q.defer();
                $http.get(`${baseUrl}/pokemon-species/${pokemons.indexOf(currentPokemon) + 1}/index.json`)
                    .success(function(res){
                        deferred.resolve(res);
                    })
                   .error(function(data) {
                        console.log(data)
                   });
                return deferred.promise;
            }
        }
    }
]);
