/*
//funcion en orden de A - Z
let pokemonsHtml = '';

let pokemosArray = POKEMONS.sort(function(primero, segundo){
  if(primero.name < segundo.name){
    return -1
  }
  if(segundo.name < primero.name){
    return 1
  }
  return 0;
});


for (let i = 0; i < pokemosArray.length; i++) {
  pokemonsHtml += getPOKEMONS(pokemosArray[i]);
}
const pokeData = document.getElementById('info');
pokeData.innerHTML = pokemonsHtml;
*/


/* 
// DOM filtrando por alfabeto de a - Z
import {filterAZ} from './data.js';
const selectAZ = document.getElementById("orderABC");

selectAZ.addEventListener("change", () => {
  const choosingAZ = document.getElementById("orderABC").value;
  //dentro de la funcion integramos el tipo seleccionado
  const resultAZ = filterAZ(choosingAZ);
  const printingInfo = document.getElementById("info")


  for (let i = 0; i < resultAZ.length; i++) {
    printingInfo.innerHTML += `${getPOKEMONS(resultAZ[i])}`;
  }
});
*/

/*
//data.js function para ordenar alfabeticamente A-Z
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
//funcion para filtrar alfabeticamente de Z - A
export function filterZA() {
  let pokeInfo = POKEMON;
  let mapeando = pokeInfo.map(a => a > b )
  let ordenando = mapeando.sort((a,b) => a[name].localeCompare(b[name]))
  return ordenando;
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