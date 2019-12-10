import POKEMON from './data/pokemon/pokemon.js';//importando función

export function filterAZ() {
  let pokeData = POKEMON.filter(filterAZ => (.name));
  //console.log(pokeData);

 // console.log("POKEDATA;", pokeData)
 // let maping = pokeData.map(POKEMON[i])//revisar map
  //console.log(maping)
  //let sorting = maping.sort()
  //console.log("SORTING:", sorting);
  //console.log(sorting)
  //return sorting;
}

// todos los pokemons searching by type
 export let filterByType = (POKEMON, types) => {
  //if (type === 'grass') {
  return POKEMON.filter(pokeTypes=> pokeTypes.type.includes(types));
  }
console.log(filterByType);
// return pokeData.filter(element) => {
// return element.type.includes(type);
// };


//  Buscador  by name 
// let filterByName = (data, searchText) => {
// return data.filter(element => element.name===name)
// window.filterByType = filterByType//