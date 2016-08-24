export default function getFavouritePokemons() {
    return JSON.parse(localStorage.getItem('favourites'));
}