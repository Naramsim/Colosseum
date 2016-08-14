import pokemons from '../data/pokemons.json'
import quotes from '../data/quotes.json'

import getColors from '../scripts/getColors.js'
import getHappiness from '../scripts/getHappiness.js'

import { recentPokemons } from '../scripts/recentPokemons.js'
import { currentPokemon } from '../scripts/currentPokemon.js'


export default function run($http, $rootScope, getInfoFactory) {
    var quoteId = quotes[Math.floor(Math.random()*quotes.length)]
    $rootScope.quote = quoteId[1]
    $rootScope.quoteAuthor = quoteId[0]
    $rootScope.status = 'FETCHING'
    $rootScope.reloadHome = function(id) {
            window.location.hash = ''
            window.location.reload(true);
        }

    var completed = 0;
    $rootScope.currentPokemon = currentPokemon;
    $rootScope.recentPokemons = recentPokemons;

    $rootScope.up = function(string) {
        if (string) {
            return string.charAt(0).toUpperCase() + string.slice(1).replace('-', ' ');
        }
    }
    $rootScope.getPokemonName = function(id) {
        return pokemons[id - 1];
    }
    $rootScope.getPokemonId = function(name) {
        return pokemons.indexOf(name) + 1;
    }
    getInfoFactory.getPokemon(currentPokemon).then(function(res) {
        $rootScope.currentPokemon = res;
        getColors($rootScope.currentPokemon.id);
        completed += 1;
        if(completed = 2){
            setTimeout(() => {$rootScope.status = 'READY'},300)
            $rootScope.$broadcast('init');  
        }
    });
    
    getInfoFactory.getSpecie(currentPokemon).then(function(res) {
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
        if(completed = 2) {
            setTimeout(() => {$rootScope.status = 'READY'},300)
            $rootScope.$broadcast('init');  
        }
    });
}