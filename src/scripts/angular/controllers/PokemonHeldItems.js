import { config } from '../../config/config.js'

export default class pokemonHeldItems {
	constructor($scope, $http) {
		$scope.$on('init', function() { 'ngInject';
	        $scope.getHeldItem = function(url) {
	            var id = /item\/(\d+)\/$/.exec(url);
	            if (id && id.length > 0) {
	            	var localHeldItem = localStorage.getItem('h' + id[1]);
	            	if (!localHeldItem) {
		                $http.get(`${config.baseUrl}/item/${id[1]}`)
		                .success(function(res){
							const heldItemDescription = res.effect_entries.filter((entry) => {
								if (entry.language.name === 'en') {
									return true;
								} else {
									return false;
								}
							})[0].short_effect;
		                    $scope.heldItemDescription = heldItemDescription;
		                    localStorage.setItem('h' + id[1], heldItemDescription);
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