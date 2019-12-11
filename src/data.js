import POKEMONS from './data/pokemon/pokemon.js';//importando función

export function pokemosArray(){
  let pokemosArray = POKEMONS.sort(function(primero, segundo){
  if(primero.name<segundo.name){
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
//llamo al botón buscar  
 //const btnsearch
 //btnsearch = document.getElementById
//llamado al evento
 //btnsearch


  let filterByType = (POKEMON, types) => {
  //if (type === 'grass') {
  //return POKEMON.filter(pokeTypes=> pokeTypes.type.includes(types));
  
//console.log(filterByType);
// return pokeData.filter(element) => {
// return element.type.includes(type);
// };


//  Buscador  by name 
// let filterByName = (data, searchText) => {
// return data.filter(element => element.name===name)
// window.filterByType = filterByType//