import pokemons from '../../../data/pokemons.json'

export default class Morph {
	constructor($scope) { 'ngInject';
		$scope.pokemons = pokemons;
		$scope.initMorph = function() {
	        initMorph();
	    }
	}
}