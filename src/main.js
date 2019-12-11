import POKEMON from './data/pokemon/pokemon.js'

 //console.log(POKEMON);
 
 //console.log(POKEMON[5]);

 //mostrando todos los pokemones un una tarjeta
 function getPOKEMON(POKEMONParam) {
  //console.log(POKEMONParam);
  return `<div class="wrap">
        <div class="card-wrap">
            <div class="card">
            <div class="front">
             <h4>${POKEMONParam.name}</h4>
             <img class="imagen" src="${POKEMONParam.img}" alt="imagen pokemon">
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
}
let pokemonsHtml = ""; 

for (let i = 0; i < POKEMON.length; i++) {
  pokemonsHtml += getPOKEMON(POKEMON[i])
  let pokeData = document.getElementById("info");
  pokeData.innerHTML = pokemonsHtml;
}


 import {filterAZ} from './data.js';
 const selectAZ = document.getElementById("orderABC");
  selectAZ.addEventListener("change", () => {
    //let showAZ= selectAZ.options[selectAZ.selectedIndex].value;
    document.getElementById("info").innerHTML 
    getPOKEMON(filterAZ())
 });





 /*
 import {filterZA} from './data.js';
const selectZA = document.getElementById("orderABC");
 selectZA.addEventListener("change", () => {
   //let showZA= selectZA.options[selectZA.selectedIndex].text;
   document.getElementById("info").innerHTML = filterZA();
});




 import {getPOKEMON} from './data.js';
  const btnAll = document.getElementById("showAll");
  btnAll.addEventListener("click", function() {
    document.getElementById("info").innerHTML += getPOKEMON();
  });


/* 
import {filterType} from './data.js';
 const selectType = document.getElementById("filterType");
  selectType.addEventListener("change", () =>{
    let condition = selectType.options[selectType.selectedIndex].text;
    document.getElementById("info").innerHTML = filterType();
  });
*/



 /*
let card = `<div class="wrap">
<div class="card-wrap">
    <div class="card">
    <div class="front">
     <h4>${POKEMON.name}</h4>
     <img src="${POKEMON.img}" alt="imagen pokemon">
     <p>${POKEMON.num}</p>
    </div>
   <div class="back"> 
   <lo> 
      <li>Type: ${POKEMON.type} </li>  
      <li>Height: ${POKEMON.height}</li>
      <li>Weight : ${POKEMON.weight} </li>
      <li>Weaknesses: ${POKEMON.weaknesses}</li>
    </lo>
   </div>
 </div>
 </div>
</div>`;
*/

/*
function getPOKEMONS(POKEMONParam) {
  console.log(POKEMONParam);
  return `<div class="wrap">
        <div class="card-wrap">
            <div class="card">
            <div class="front">
             <h4>${POKEMONParam.name}</h4>
             <img class="imagen" src="${POKEMONParam.img}" alt="imagen pokemon">
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
}
let pokemonsHtml = ''; 
//hacer un filtro (array filtrado al for con ifs), map//buscar map y su uso 
//const filterByType = (data, type) => {
//if (type === 'all') {
//return data;
//}

for (let i = 0; i < POKEMONS.length; i++) {
  pokemonsHtml += getPOKEMONS(POKEMONS[i])
}
const pokeData = document.getElementById('info');
pokeData.innerHTML = pokemonsHtml;








*/