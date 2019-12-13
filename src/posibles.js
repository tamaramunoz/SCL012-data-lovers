/*
//data.js function para ordenar alfabeticamente A-Z
function filterAZ () {
  let pokeInfo = POKEMON;
  let mapeando = pokeInfo.map(nombre => nombre.name)
  let ordenando = mapeando.sort()
  return ordenando;
};
*/
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
//
for (let i = 0; i < pokemosArray.length; i++) {
  pokemonsHtml += getPOKEMONS(pokemosArray[i]);
}
const pokeData = document.getElementById('info');
pokeData.innerHTML = pokemonsHtml;
*/
//
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
//