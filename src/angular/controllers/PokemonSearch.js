import pokemons from '../../data/pokemons.json'

import { recentPokemons } from '../../scripts/recentPokemons.js'

export default class pokemonSearch {
    constructor($scope) { 'ngInject';
        $scope.$on('init', function(){
            $scope.pokemons = pokemons;
            $scope.recents = recentPokemons;
            $scope.getImageUrl = function(id) {
                return `images/pokemons/${pokemons.indexOf(id) + 1}.svg`;
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
    }
}