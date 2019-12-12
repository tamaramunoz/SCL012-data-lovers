
/* Manejo de data */

// esta es una función de ejemplo
//export const example = () => {
 // return 'example';
//};
import POKEMON from './data/pokemon/pokemon.js';

const pokeBase = Object.values(POKEMON, info); 
console.log(pokeBase);


//function para ordenar por tipo
export function filterType(allTypes) {
  let pokeFilter = pokeBase.filter(pokemones => (pokemones.type.includes(allTypes)));
  return pokeFilter;
};