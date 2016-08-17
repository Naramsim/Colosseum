import '../include/index.html'

import '../styles/reset.css'
import '../styles/animations.css'
import '../styles/loading.css'
import '../styles/logo.css'
import '../styles/main.css'
import '../styles/morph.css'
import '../styles/switch.css'
import '../styles/tooltipLoader.css'
import '../styles/tooltips.css'
import '../styles/mobile.css'
import '../styles/desktop.css'

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

require('./defer/classie.js')
require('./defer/morph.js')

const runtime = require('offline-plugin/runtime');

runtime.install({
  onUpdating: () => {
    console.log('SW Event:', 'onUpdating');
  },
  onUpdateReady: () => {
    console.log('SW Event:', 'onUpdateReady');
    // Tells to new SW to take control immediately
    runtime.applyUpdate();
  },
  onUpdated: () => {
    console.log('SW Event:', 'onUpdated');
    // Reload the webpage to load into the new version
    window.location.reload();
  },

  onUpdateFailed: () => {
    console.log('SW Event:', 'onUpdateFailed');
  }
});

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
