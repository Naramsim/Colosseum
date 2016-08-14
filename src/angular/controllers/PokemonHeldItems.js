import { config } from '../../scripts/config.js'

export default class pokemonHeldItems {
	constructor($scope, $http) {
		$scope.$on('init', function() { 'ngInject';
	        $scope.getHeldItem = function(url) {
	            var id = /item\/(\d+)\/$/.exec(url);
	            if (id && id.length > 0) {
	            	var localHeldItem = localStorage.getItem('h' + id[1]);
	            	if (!localHeldItem) {
		                $http.get(`${config.baseUrl}/item/${id[1]}/index.json`)
		                .success(function(res){
		                    $scope.heldItemDescription = res.effect_entries[0].short_effect;
		                    localStorage.setItem('h' + id[1], res.effect_entries[0].short_effect);
		                })
		                .error(function(data) {
		                    return "Nothing";
		                });
		            } else {
		            	$scope.heldItemDescription = localHeldItem;
		            }
	            }
	        }
	    });
	}
}