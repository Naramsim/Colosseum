import pokemons from '../../../data/pokemons.json'

import { recentPokemons } from '../../getters/recentPokemons.js'
import getFavouritePokemons from '../../getters/getFavouritePokemons.js'

export default class pokemonSearch {
    constructor($scope) { 'ngInject';
        $scope.pokemons = pokemons;
        $scope.recents = recentPokemons;
        $scope.getFavourites = function() {
            $scope.favourites = getFavouritePokemons();
        }
        $scope.getImageUrl = function(id) {
            return `images/pokemons/${pokemons.indexOf(id) + 1}.svg`;
        }
        $scope.saveAndReload = function(pokemon) {
            var recents = localStorage.getItem('recents');
            if (recents) {
                recents = JSON.parse(recents);
                recents.unshift(pokemon);
                localStorage.setItem('recents', JSON.stringify(recents.slice(0, 6)));
            } else {
                localStorage.setItem('recents', JSON.stringify([pokemon]));
            }
            window.location.hash = `#${pokemon}`;
            window.location.reload(true);
        }
        $scope.userHasTyped = function() {
            return !!document.getElementsByClassName('morphsearch-input')[0].value;
        }
    }
}