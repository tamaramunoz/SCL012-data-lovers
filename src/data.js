/* Manejo de data */

// esta es una función de ejemplo
// export const example = () => {
// return 'example'
// };
import POKEMON from './data/pokemon/pokemon.js';

const pokeBase = Object.values(POKEMON);

// function para ordenar por tipo
export function filterType(allTypes) {
  const pokeFilter = pokeBase.filter((pokemones) => (pokemones.type.includes(allTypes)));
  return pokeFilter;
}

// function para ordenar por debilidad
export function weakness(allData) {
  const pokeWeak = pokeBase.filter((pkmns) => (pkmns.weaknesses.includes(allData)));
  return pokeWeak;
}
