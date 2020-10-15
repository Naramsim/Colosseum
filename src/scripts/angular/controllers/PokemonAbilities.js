import { config } from '../../config/config.js'

export default class pokemonAbilities {
	constructor($scope, $http) { 'ngInject';
		$scope.$on('init', function(){
	        $scope.getAbility = function(url) {
	            var id = /ability\/(\d+)\/$/.exec(url);
	            if (id && id.length > 0) {
	            	var localAbility = localStorage.getItem('a' + id[1]);
	            	if (!localAbility) {
		                $http.get(`${config.baseUrl}/ability/${id[1]}`)
		                .success(function(res){
							const abilityDescription = res.effect_entries.filter((entry) => {
								if (entry.language.name === 'en') {
									return true;
								} else {
									return false;
								}
							})[0].short_effect;
							$scope.abilityDescription = abilityDescription;
		                    localStorage.setItem('a' + id[1], abilityDescription);
		                })
		                .error(function(data) {
		                    return "Nothing";
		                });
		            } else {
		            	$scope.abilityDescription = localAbility;
		            }
	            }
	        }
	    });
	}
}