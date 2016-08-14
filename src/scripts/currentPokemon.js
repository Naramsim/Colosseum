import pokemons from '../data/pokemons.json'

var hash = window.location.hash;
var currentPokemon = /#\/?([\w-\d]+)/.exec(hash); 
if (!currentPokemon) {
    currentPokemon = generateRandPokemon();
} else {
    if (pokemons.indexOf(currentPokemon[1]) >= 0) {
        currentPokemon = currentPokemon[1];
    } else {
        currentPokemon = generateRandPokemon();
    }
}

console.log(currentPokemon)

function generateRandPokemon() {
    return pokemons[Math.floor(0 + Math.random() * 750)];
}

export { currentPokemon }