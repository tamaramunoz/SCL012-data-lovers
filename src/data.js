
/* Manejo de data */

// esta es una función de ejemplo
//export const example = () => {
 // return 'example';
//};
import POKEMON from './data/pokemon/pokemon.js';

const pokeBase = Object.values(POKEMON, info); 
console.log(pokeBase);


//function para ordenar alfabeticamente A-Z
export function filterType(allTypes) {
  let pokeFilter = pokeBase.filter(pokemones => (pokemones.type.includes(allTypes)));
  return pokeFilter;
};


/*
//funcion para filtrar alfabeticamente de Z - A
export function filterZA() {
  let pokeInfo = POKEMON;
  let mapeando = pokeInfo.map(a => a > b )
  let ordenando = mapeando.sort((a,b) => a[name].localeCompare(b[name]))
  return ordenando;
};




//function para ordenar alfabeticamente A-Z
export function filterAZ() {
  let pokeInfo = POKEMON;
  let mapeando = pokeInfo.map(nombre => nombre.name)
  let ordenando = mapeando.sort()
  return ordenando;
};

*/

/*
//function para ordenar Alfabeticamente al revez Z-A
export function filterZA() {
  let pokeData = POKEMON;
  let maping = pokeData.map(element => element.name)
  let sorting = maping.sort()
  let reverting = sorting.reverse()
  return reverting;
};

*/

/*
export function filterType(POKEMON, type){
  const filtering = POKEMON.filter(element => element.type){
    let recorriendo = element.includes(type);
    return filtering;
};
*/


/*
//mostrando todos los pokemones en pantalla
let pokeData = POKEMON
let result = "";

pokeData.forEach( (element, i) => {
  let showAll = (Object.values(POKEMON[i].name));
  document.getElementById("info").innerHTML += showAll
});
*/

/*
let nombres = POKEMON
for (const datos of POKEMON) {
  console.log(Object.values(datos))
};

for (let i = 0; i < POKEMON.length; i++) {
  let pokeData = document.getElementById("info");
  pokeData.innerHTML += 
  ` <p>${POKEMON[i].num}</p>
    <p>${POKEMON[i].name}</p> 
    <p>${POKEMON[i].type}</p>
    <p>${POKEMON[i].weaknesses}</p>` 
  } 

*/

/*
export const getPOKEMON = () => {
  let pokemonsHtml = ''; 
  //hacer un filtro (array filtrado al for con ifs), map//buscar map y su uso 
  //const filterByType = (data, type) => {
  //if (type === 'all') {
  //return data;
  //}
  for (let i = 0; i < POKEMON.length; i++) {
    pokemonsHtml += getPOKEMON(POKEMON[i])
    return POKEMON[i];
  };

  */
