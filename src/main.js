import POKEMONS from './data/pokemon/pokemon.js'

 //console.log(POKEMON);
 
 //console.log(POKEMON[5]);

 console.log("hola");
/*
function getPOKEMONS(POKEMONParam) {
return `<div class="wrap">
        <div class="card-wrap">
            <div class="card">
            <div class="front">
             <h4>${POKEMONParam.name}</h4>
             <img src="${POKEMONParam.img}" alt="imagen pokemon">
             <p>${POKEMONParam.num}</p>
            </div>
           <div class="back"> 
           <lo> 
              <li>Number: ${POKEMONParam.num}</li>
              <li>Type: ${POKEMONParam.type} </li>  
              <li>Height: ${POKEMONParam.height}</li>
              <li>Weight : ${POKEMONParam.weight} </li>
              <li>Weaknesses: ${POKEMONParam.weaknesses}</li>
            </lo>
           </div>
         </div>
         </div>
     </div>`;
}
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



import {filterType} from './data.js';
const pokeFilter = POKEMONS.filter((pkm, kind) => (pkm.type === kind));
  
const chooseType = document.getElementById("filterType").value;
document.getElementById("info").innerHTML = chooseType;

console.log(pokeFilter);








//llamado al btn buscar 
const btnSearch = document.getElementById('search-name');
//llamado a evento click button 
btnSearch.addEventListener('click', function() {
    const pokeNames=document.getElementById('barra-busqueda').value;
    console.log(pokeNames);
    
    let findedName='';
    for (let i= 0; i< POKEMONS.length; i++){

        if (POKEMONS[i].name ===pokeNames){

         // findedName.push(POKEMONS[i])
         pokeData.innerHTML = getPOKEMONS(POKEMONS[i])
        }
    }
    console.log(findedName);

});



 /*
//mostrando todos los pokemones un una tarjeta
function card(POKEMONParam) {
  let cardPkm =
`<div class="wrap">
        <div class="card-wrap">
            <div class="card">
            <div class="front">
             <h4>${POKEMONParam.name}</h4>
             <img class="imagen" src="${POKEMONParam.img}" alt="imagen POKEMONParam">
             <p>${POKEMONParam.num}</p>
            </div>
           <div class="back"> 
           <lo> 
              <li>Type: ${POKEMONParam.type} </li>  
              <li>Height: ${POKEMONParam.height}</li>
              <li>Weight : ${POKEMONParam.weight} </li>
              <li>Weaknesses: ${POKEMONParam.weaknesses}</li>
            </lo>
           </div>
         </div>
         </div>
     </div>`;
  let placeCard = document.createElement('div');
      placeCard.innerHTML = cardPkm;
      document.body.appendChild(placeCard);

};


import {filterAZ} from './data.js';
const selectABC = document.getElementById("orderABC");

selectABC.addEventListener("change", () => {
  const pressAZ = selectABC.selectedIndex;
  const takingAZ = selectABC.children[pressAZ].innerHTML.trim();
  const result = filterAZ(takingAZ);
  card(result);
  
})
*/


/*
//funcion todos
let pokemonsHtml = ""; 

for (let i = 0; i < POKEMON.length; i++) {
  pokemonsHtml += getPOKEMON(POKEMON[i])
  let pokeData = document.getElementById("info");
  pokeData.innerHTML = pokemonsHtml;
}
*/


/*
import {filterType} from './data.js';
const filtering = document.getElementById("filterType");

filtering.addEventListener("change", () => {
  const takingType = filtering.selectedIndex;
  const pressingType = filtering.children[takingType].innerHTML.trim();
  const result = filterType(pressingType);
  getPOKEMONS(result);
})
*/




 /*
 import {filterZA} from './data.js';
const selectZA = document.getElementById("orderABC");
 selectZA.addEventListener("change", () => {
   //let showZA= selectZA.options[selectZA.selectedIndex].text;
   document.getElementById("info").innerHTML = filterZA();
});



/* 
import {filterType} from './data.js';
 const selectType = document.getElementById("filterType");
  selectType.addEventListener("change", () =>{
    let condition = selectType.options[selectType.selectedIndex].text;
    document.getElementById("info").innerHTML = filterType();
  });
*/