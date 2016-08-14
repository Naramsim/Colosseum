export default class pokemonMultipliers {
    constructor($scope) { 'ngInject';
        $scope.$on('init', function(){
            var multiplierAttackElement = document.getElementsByClassName('multiplierAttack')[0];
            var multiplierDefenseElement = document.getElementsByClassName('multiplierDefense')[0];
            angular.element(multiplierDefenseElement).ready(function() {
                var highestMultiplierHeight = Math.max(multiplierAttackElement.clientHeight, multiplierDefenseElement.clientHeight);
                var css = document.createElement('style');
                css.type = 'text/css';
                css.innerHTML = `   .pokemonMultipliers { 
                                        height: ${highestMultiplierHeight + 32 + 12}px;
                                            }
                                    `;
                document.body.appendChild(css);
            });
        });
    }
}