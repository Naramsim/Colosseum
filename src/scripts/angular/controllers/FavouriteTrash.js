export default class FavouriteTrash {
    constructor($scope) { 'ngInject';
        $scope.$on('init', function(){
            $scope.deleteFavourites = function(url) {
                localStorage.setItem('favourites', JSON.stringify([]));
            }
        });
    }
}