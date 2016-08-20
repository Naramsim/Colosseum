import { config } from '../config/config.js'
import pokemons from '../../data/pokemons.json'

export default function getInfoFactory($http, $q) {
    return {
        getPokemon: function(currentPokemon) {
            var deferred = $q.defer();
            $http.get(`${config.baseUrl}/pokemon/${pokemons.indexOf(currentPokemon) + 1}/index.json`)
               .success(function(res){
                    deferred.resolve(res);
                })
               .error(function(data) {
                    console.log(data)
                    Bugsnag.notify("ErrorName", "Something broke!", {
                        special_info: {
                            pokemon: currentPokemon
                        }
                    });
                    deferred.reject(data);
               });
            return deferred.promise;
        },
        getSpecie: function(currentPokemon) {
            var deferred = $q.defer();
            $http.get(`${config.baseUrl}/pokemon-species/${pokemons.indexOf(currentPokemon) + 1}/index.json`)
                .success(function(res){
                    deferred.resolve(res);
                })
               .error(function(data) {
                    console.log(data)
                    Bugsnag.notify("ErrorName", "Something broke!", {
                        special_info: {
                            pokemon: currentPokemon
                        }
                    });
                    deferred.reject(data);
               });
            return deferred.promise;
        }
    }
}