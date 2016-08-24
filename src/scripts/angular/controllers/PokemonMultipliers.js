import getMultipliers from '../../helpers/getMultipliers.js'

export default class pokemonMultipliers {
    constructor($scope, $rootScope) { 'ngInject';
        $scope.$on('init', function(){
            let types = $rootScope.currentPokemon.types.map((type) => {
                    return type.type.name;
                })
            const multipliers = getMultipliers(types);
            let multipliersAttack = new Set();
            let multipliersDefense = new Set();
            let inline = '';
            let multiplierAttackElement = document.getElementsByClassName('multiplierAttack')[0];
            let multiplierDefenseElement = document.getElementsByClassName('multiplierDefense')[0];

            Object.keys(multipliers.attack).forEach((key) => {
                multipliersAttack.add(multipliers.attack[key])
            })
            Object.keys(multipliers.defense).forEach((key) => {
                multipliersDefense.add(multipliers.defense[key])
            })

            if (multipliersAttack.size > 3 || multipliersAttack.size > 3) {
                inline = `
                        @media screen and (min-width: 900px) {
                            .multiplierRow .centerAligned {
                                align-items: center;
                                display: flex;
                                flex-direction: row-reverse;
                            }
                            .miniLabel {
                                display: inline-flex;
                                width: 40px;
                            }
                            .multiplierRow li:nth-child(n+2) .miniLabel {
                                display: none;
                            }
                            .multiplierRow > .padded {
                                padding-right: 5px;
                                padding-left: 5px;
                            }
                        }`;
            }
            $scope.multipliers = multipliers;
            
            angular.element(multiplierDefenseElement).ready(function() {
                let highestMultiplierHeight = Math.max(multiplierAttackElement.clientHeight, multiplierDefenseElement.clientHeight);
                let css = document.createElement('style');
                css.type = 'text/css';
                const diff = inline ? -70 : 44;
                css.innerHTML = `   .pokemonMultipliers { 
                                        height: ${highestMultiplierHeight + diff}px;
                                    }
                                    ${inline}
                                    `;
                document.body.appendChild(css);
            });
        });
    }
}