var App = angular.module('App', ['ngAnimate']);
var currentPokemon = 'nincada';
var baseUrl = 'https://cdn.rawgit.com/Naramsim/ninjask/master/data/api/v2';
var recentPokemons = JSON.parse(localStorage.getItem('recents'));
var pokemons = ['bulbasaur','ivysaur','venusaur','charmander','charmeleon','charizard','squirtle','wartortle','blastoise','caterpie','metapod','butterfree','weedle','kakuna','beedrill','pidgey','pidgeotto','pidgeot','rattata','raticate','spearow','fearow','ekans','arbok','pikachu','raichu','sandshrew','sandslash','nidoran-f','nidorina','nidoqueen','nidoran-m','nidorino','nidoking','clefairy','clefable','vulpix','ninetales','jigglypuff','wigglytuff','zubat','golbat','oddish','gloom','vileplume','paras','parasect','venonat','venomoth','diglett','dugtrio','meowth','persian','psyduck','golduck','mankey','primeape','growlithe','arcanine','poliwag','poliwhirl','poliwrath','abra','kadabra','alakazam','machop','machoke','machamp','bellsprout','weepinbell','victreebel','tentacool','tentacruel','geodude','graveler','golem','ponyta','rapidash','slowpoke','slowbro','magnemite','magneton','farfetchd','doduo','dodrio','seel','dewgong','grimer','muk','shellder','cloyster','gastly','haunter','gengar','onix','drowzee','hypno','krabby','kingler','voltorb','electrode','exeggcute','exeggutor','cubone','marowak','hitmonlee','hitmonchan','lickitung','koffing','weezing','rhyhorn','rhydon','chansey','tangela','kangaskhan','horsea','seadra','goldeen','seaking','staryu','starmie','mr-mime','scyther','jynx','electabuzz','magmar','pinsir','tauros','magikarp','gyarados','lapras','ditto','eevee','vaporeon','jolteon','flareon','porygon','omanyte','omastar','kabuto','kabutops','aerodactyl','snorlax','articuno','zapdos','moltres','dratini','dragonair','dragonite','mewtwo','mew','chikorita','bayleef','meganium','cyndaquil','quilava','typhlosion','totodile','croconaw','feraligatr','sentret','furret','hoothoot','noctowl','ledyba','ledian','spinarak','ariados','crobat','chinchou','lanturn','pichu','cleffa','igglybuff','togepi','togetic','natu','xatu','mareep','flaaffy','ampharos','bellossom','marill','azumarill','sudowoodo','politoed','hoppip','skiploom','jumpluff','aipom','sunkern','sunflora','yanma','wooper','quagsire','espeon','umbreon','murkrow','slowking','misdreavus','unown','wobbuffet','girafarig','pineco','forretress','dunsparce','gligar','steelix','snubbull','granbull','qwilfish','scizor','shuckle','heracross','sneasel','teddiursa','ursaring','slugma','magcargo','swinub','piloswine','corsola','remoraid','octillery','delibird','mantine','skarmory','houndour','houndoom','kingdra','phanpy','donphan','porygon2','stantler','smeargle','tyrogue','hitmontop','smoochum','elekid','magby','miltank','blissey','raikou','entei','suicune','larvitar','pupitar','tyranitar','lugia','ho-oh','celebi','treecko','grovyle','sceptile','torchic','combusken','blaziken','mudkip','marshtomp','swampert','poochyena','mightyena','zigzagoon','linoone','wurmple','silcoon','beautifly','cascoon','dustox','lotad','lombre','ludicolo','seedot','nuzleaf','shiftry','taillow','swellow','wingull','pelipper','ralts','kirlia','gardevoir','surskit','masquerain','shroomish','breloom','slakoth','vigoroth','slaking','nincada','ninjask','shedinja','whismur','loudred','exploud','makuhita','hariyama','azurill','nosepass','skitty','delcatty','sableye','mawile','aron','lairon','aggron','meditite','medicham','electrike','manectric','plusle','minun','volbeat','illumise','roselia','gulpin','swalot','carvanha','sharpedo','wailmer','wailord','numel','camerupt','torkoal','spoink','grumpig','spinda','trapinch','vibrava','flygon','cacnea','cacturne','swablu','altaria','zangoose','seviper','lunatone','solrock','barboach','whiscash','corphish','crawdaunt','baltoy','claydol','lileep','cradily','anorith','armaldo','feebas','milotic','castform','kecleon','shuppet','banette','duskull','dusclops','tropius','chimecho','absol','wynaut','snorunt','glalie','spheal','sealeo','walrein','clamperl','huntail','gorebyss','relicanth','luvdisc','bagon','shelgon','salamence','beldum','metang','metagross','regirock','regice','registeel','latias','latios','kyogre','groudon','rayquaza','jirachi','deoxys','turtwig','grotle','torterra','chimchar','monferno','infernape','piplup','prinplup','empoleon','starly','staravia','staraptor','bidoof','bibarel','kricketot','kricketune','shinx','luxio','luxray','budew','roserade','cranidos','rampardos','shieldon','bastiodon','burmy','wormadam-plant','mothim','combee','vespiquen','pachirisu','buizel','floatzel','cherubi','cherrim','shellos','gastrodon','ambipom','drifloon','drifblim','buneary','lopunny','mismagius','honchkrow','glameow','purugly','chingling','stunky','skuntank','bronzor','bronzong','bonsly','mime-jr','happiny','chatot','spiritomb','gible','gabite','garchomp','munchlax','riolu','lucario','hippopotas','hippowdon','skorupi','drapion','croagunk','toxicroak','carnivine','finneon','lumineon','mantyke','snover','abomasnow','weavile','magnezone','lickilicky','rhyperior','tangrowth','electivire','magmortar','togekiss','yanmega','leafeon','glaceon','gliscor','mamoswine','porygon-z','gallade','probopass','dusknoir','froslass','rotom','uxie','mesprit','azelf','dialga','palkia','heatran','regigigas','giratina-altered','cresselia','phione','manaphy','darkrai','shaymin-land','arceus','victini','snivy','servine','serperior','tepig','pignite','emboar','oshawott','dewott','samurott','patrat','watchog','lillipup','herdier','stoutland','purrloin','liepard','pansage','simisage','pansear','simisear','panpour','simipour','munna','musharna','pidove','tranquill','unfezant','blitzle','zebstrika','roggenrola','boldore','gigalith','woobat','swoobat','drilbur','excadrill','audino','timburr','gurdurr','conkeldurr','tympole','palpitoad','seismitoad','throh','sawk','sewaddle','swadloon','leavanny','venipede','whirlipede','scolipede','cottonee','whimsicott','petilil','lilligant','basculin-red-striped','sandile','krokorok','krookodile','darumaka','darmanitan-standard','maractus','dwebble','crustle','scraggy','scrafty','sigilyph','yamask','cofagrigus','tirtouga','carracosta','archen','archeops','trubbish','garbodor','zorua','zoroark','minccino','cinccino','gothita','gothorita','gothitelle','solosis','duosion','reuniclus','ducklett','swanna','vanillite','vanillish','vanilluxe','deerling','sawsbuck','emolga','karrablast','escavalier','foongus','amoonguss','frillish','jellicent','alomomola','joltik','galvantula','ferroseed','ferrothorn','klink','klang','klinklang','tynamo','eelektrik','eelektross','elgyem','beheeyem','litwick','lampent','chandelure','axew','fraxure','haxorus','cubchoo','beartic','cryogonal','shelmet','accelgor','stunfisk','mienfoo','mienshao','druddigon','golett','golurk','pawniard','bisharp','bouffalant','rufflet','braviary','vullaby','mandibuzz','heatmor','durant','deino','zweilous','hydreigon','larvesta','volcarona','cobalion','terrakion','virizion','tornadus-incarnate','thundurus-incarnate','reshiram','zekrom','landorus-incarnate','kyurem','keldeo-ordinary','meloetta-aria','genesect','chespin','quilladin','chesnaught','fennekin','braixen','delphox','froakie','frogadier','greninja','bunnelby','diggersby','fletchling','fletchinder','talonflame','scatterbug','spewpa','vivillon','litleo','pyroar','flabebe','floette','florges','skiddo','gogoat','pancham','pangoro','furfrou','espurr','meowstic-male','honedge','doublade','aegislash-shield','spritzee','aromatisse','swirlix','slurpuff','inkay','malamar','binacle','barbaracle','skrelp','dragalge','clauncher','clawitzer','helioptile','heliolisk','tyrunt','tyrantrum','amaura','aurorus','sylveon','hawlucha','dedenne','carbink','goomy','sliggoo','goodra','klefki','phantump','trevenant','pumpkaboo-average','gourgeist-average','bergmite','avalugg','noibat','noivern','xerneas','yveltal','zygarde','diancie','hoopa','volcanion']

App.run(function($http, $rootScope, getInfoFactory) {
    var completed = 0;
    var hash = window.location.hash;
    currentPokemon = /#\/?(\w+)/.exec(hash);
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

App.controller('MainPokemon', function($scope, $http, $rootScope) {
    $scope.$on('init', function(){
        var habitat = $rootScope.pokemonSpecie.habitat;
        if(habitat) {
            habitat = habitat.name;
        }               
        $scope.imageUrl = `images/svgs/${$rootScope.currentPokemon.id}.svg`;
        $scope.habitat = habitat ? habitat : 'in your pocket';
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
        $scope.typeUrls = $rootScope.currentPokemon.types.map((type) => {
            return `images/types/${type.type.name}.png`
        });
    });
});

App.controller('PokemonFamily', function($scope, $rootScope, $http, $timeout) {
    $scope.$on('init', function(){
        $scope.getImageUrl = function(id) {
            console.log(id)
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
                    $timeout( function() {
                        $rootScope.loaded = true;
                    });
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
                localStorage.setItem('recents', `["${pokemon}"]`);
            }
            window.location.hash = `#${pokemon}`;
            window.location.reload(true);
        }
    });
})

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

function getColors(id) {
    var image = new Image;
    image.onload = function() {
        var colorThief = new ColorThief();
        var plt = colorThief.getPalette(image, 4);
        var bgChannels, primaryChannels, secondaryChannels, thirdyChannels;
        [bgChannels, primaryChannels, secondaryChannels, thirdyChannels] = plt;
        var bgColor = rgb(bgChannels[0], bgChannels[1], bgChannels[2]);
        var primaryColor = rgb(primaryChannels[0], primaryChannels[1], primaryChannels[2]);
        var secondaryColor = rgb(secondaryChannels[0], secondaryChannels[1], secondaryChannels[2]);
        var thirdyColor = rgb(thirdyChannels[0], thirdyChannels[1], thirdyChannels[2]);
        var css = document.createElement('style');
        css.type = 'text/css';
        css.innerHTML = `   .bgColor { background-color: ${bgColor}; }
                            .primaryColor { color: ${primaryColor}; }
                            .secondaryColor { color: ${secondaryColor}; } 
                            .thirdyColor { color: ${thirdyColor}; }
                            .borderColor { 
                                text-shadow: -1px 0 ${bgColor}, 0 1px ${bgColor}, 1px 0 ${bgColor}, 0 -1px ${bgColor};
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

function rgb(r,g,b) {
    return `rgb(${r}, ${g}, ${b})`
}

function generateRandPokemon() {
    return pokemons[Math.floor(1 + Math.random() * 750)];
}

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
