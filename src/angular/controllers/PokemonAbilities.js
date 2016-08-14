import { config } from '../../scripts/config.js'

export default class pokemonAbilities {
	constructor($scope, $http) { 'ngInject';
		$scope.$on('init', function(){
	        $scope.getAbility = function(url) {
	            var id = /ability\/(\d+)\/$/.exec(url);
	            if (id && id.length > 0) {
	            	var localAbility = localStorage.getItem('a' + id[1]);
	            	if (!localAbility) {
		                $http.get(`${config.baseUrl}/ability/${id[1]}/index.json`)
		                .success(function(res){
		                    $scope.abilityDescription = res.effect_entries[0].short_effect;
		                    localStorage.setItem('a' + id[1], res.effect_entries[0].short_effect);
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