export default class pokemonAbilities {
    constructor($rootScope, $scope, $http) { 'ngInject';
        $scope.$on('init', function(){
            $scope.toggleFav = function(pokemon) {
                console.log(pokemon)
                let favourites = localStorage.getItem('favourites')
                if (favourites) {
                    favourites = new Set(JSON.parse(favourites));
                    if (favourites.has(pokemon)) {
                        favourites.delete(pokemon);
                    } else {
                        favourites.add(pokemon);
                    }
                    //$rootScope.favourites = favourites;
                    localStorage.setItem('favourites', JSON.stringify(Array.from(favourites)))
                } else {
                    localStorage.setItem('favourites', JSON.stringify([]));
                }
            }
            $scope.isFav = function(pokemon) {
                let favourites = localStorage.getItem('favourites')
                if (favourites) {
                    favourites = JSON.parse(favourites);
                    if(favourites.indexOf(pokemon) > -1) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    localStorage.setItem('favourites', JSON.stringify([]));
                    return false;
                }
            }
        });
    }
}