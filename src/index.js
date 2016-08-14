import run from './angular/run.js'
import MainPokemon from './angular/controllers/MainPokemon.js'
import PokemonFamily from './angular/controllers/PokemonFamily.js'
import Morph from './angular/controllers/Morph.js'
import PokemonSearch from './angular/controllers/PokemonSearch.js'
import PokemonAbilities from './angular/controllers/PokemonAbilities.js'
import PokemonMultipliers from './angular/controllers/PokemonMultipliers.js'
import PokemonHeldItems from './angular/controllers/PokemonHeldItems.js'
import pokemonFilterStartFilter from './angular/pokemonFilterStartFilter.js'
import pokemonFilter from './angular/pokemonFilter.js'
import multiFilter from './angular/multiFilter.js'
import imageonloadDirective from './angular/imageonloadDirective.js'
import getInfoFactory from './angular/getInfoFactory.js'
console.log("hi")


console.log(getInfoFactory)

angular.module('App', ['ngAnimate', 'ngStorage'])
	.run(run)
	.controller('MainPokemon', MainPokemon)
	.controller('PokemonFamily', PokemonFamily)
	.controller('Morph', Morph)
	.controller('PokemonSearch', PokemonSearch)
	.controller('PokemonAbilities', PokemonAbilities)
	.controller('PokemonMultipliers', PokemonMultipliers)
	.controller('PokemonHeldItems', PokemonHeldItems)
	.filter('pokemonFilterStart', pokemonFilterStartFilter)
	.filter('pokemonFilter', pokemonFilter)
	.filter('multi', multiFilter)
	.directive('imageonload', imageonloadDirective)
	.factory('getInfoFactory', getInfoFactory)
