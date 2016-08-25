export default class mainPokemon {
    constructor($scope, $http, $rootScope, $timeout, $localStorage) { 'ngInject';
        $scope.$on('init', function(){
            if ($rootScope.currentPokemon && $rootScope.currentPokemon.types && $rootScope.pokemonSpecie) {
                $scope.$storage = $localStorage;
                var habitat = $rootScope.pokemonSpecie.habitat;
                if(habitat) {
                    habitat = habitat.name;
                }               
                $scope.imageUrl = `images/pokemons/${$rootScope.currentPokemon.id}.svg`;
                $scope.habitat = habitat ? habitat : 'in your pocket';
                $scope.unveil = function() {
                    $rootScope.loaded = true;
                    $timeout(function() {
                        $rootScope.animationsEnded = true;
                        $rootScope.$apply(function() {
                            $rootScope.animationsEnded = true;
                        });
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
                    return `images/items/${name}.svg`;
                }
                $scope.getUrlType = function(name){
                    return `images/types/${name}.svg`;
                }
                $scope.typeUrls = $rootScope.currentPokemon.types.map((type) => {
                    return `images/types/${type.type.name}.svg`
                });
            }
        });
    }
}