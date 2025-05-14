
const getPokemonId = (id) => {
     const url =`https://pokeapi.co/api/v2/pokemon/3`;
  return fetch(url)
    .then((resp) => resp.json())

    .then((pokemon) =>  pokemon.name) 
    
}
module.exports = getPokemonId;
