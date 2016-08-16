import getMemebers from '../../helpers/getMemebers.js'
import { config } from '../../config/config.js'
import pokemons from '../../../data/pokemons.json'

export default class pokemonFamily {
    constructor($scope, $rootScope, $http, $timeout) { 'ngInject';
        $scope.$on('init', function(){
            $scope.getImageUrl = function(id) {
                return `images/pokemons/${id}.svg`;
            }
            $scope.reloadWith = function(id) {
                window.location.hash = '#' + pokemons[id - 1];
                window.location.reload(true);
            }
            var evolutionChainId = /chain\/(\d+)\/$/.exec($rootScope.pokemonSpecie.evolution_chain.url);
            if (evolutionChainId && evolutionChainId.length > 0) {
                $http.get(`${config.baseUrl}/evolution-chain/${evolutionChainId[1]}/index.json`)
                   .success(function(res){
                        $scope.family = res;
                        $scope.members = getMemebers(res);
                    })
                   .error(function(data) {
                        console.log(data)
                        Bugsnag.notify("ErrorName", "Something broke!", {
                            special_info: {
                                pokemon: currentPokemon
                            }
                        })
                   });
            }
        });
    }
}