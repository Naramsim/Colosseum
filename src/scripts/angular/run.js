import pokemons from '../../data/pokemons.json'
import quotes from '../../data/quotes.json'

import getColors from '../helpers/getColors.js'
import getHappiness from '../helpers/getHappiness.js'

import { recentPokemons } from '../getters/recentPokemons.js'
import { currentPokemon } from '../getters/currentPokemon.js'

let isOffline = false;

function hasCompleted(completed, $rootScope) {
    if(completed = 2){
        setTimeout(() => {$rootScope.status = 'READY'},300);
        $rootScope.$broadcast('init');  
    }
}

function handleErrors($rootScope) {
    if (!isOffline) {
        $rootScope.status = 'SOMETHING BROKE :(';
        setTimeout(() => {$rootScope.status = 'RELODING'},300);
        setTimeout(() => {location.reload(1)},600);
    }
}

export default function run($http, $rootScope, getInfoFactory) {
    var quoteId = quotes[Math.floor(Math.random()*quotes.length)];
    $rootScope.quote = quoteId[1];
    $rootScope.quoteAuthor = quoteId[0];
    if (isOffline) {
        $rootScope.status = 'You are OFFLINE\nNo problem, you can safely search for Pokémons you already searched';
    } else {
        $rootScope.status = 'FETCHING';
    }
    $rootScope.reloadHome = function(id) {
        window.location.hash = '';
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
        hasCompleted(completed, $rootScope)        
    }).catch(function(err) {
        handleErrors($rootScope);
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
        })[0].flavor_text
            .replace('\f','\n')
            .replace(/\u00ad\n/g, '')
            .replace(/\u00ad/g, '')
            .replace(' -\n',  ' - ')
            .replace('-\n', '-')
            .replace('\n', ' ');
        completed += 1;
        hasCompleted(completed, $rootScope);
    }).catch(function(err) {
        handleErrors($rootScope);
    });

    if('serviceWorker' in navigator){
        // Handler for messages coming from the service worker
        navigator.serviceWorker.addEventListener('message', function(event){
            var offlineInterval = null;
            if (event.data === 'OFFLINE') {
                isOffline = true;
                offlineInterval = setInterval(() => {
                    $rootScope.$apply(() => {
                        $rootScope.status = 'You are OFFLINE\nNo problem, you can safely search for Pokémons you already searched';
                    });
                },1000);
            }
            if (event.data === 'ONLINE') {
                isOffline = false;
            }
        });
    }
}