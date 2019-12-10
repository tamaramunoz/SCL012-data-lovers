import POKEMONS from './data/pokemon/pokemon.js';
//import { filterAZ } from './data.js';


function getPOKEMONS(POKEMONParam) {
  console.log(POKEMONParam)
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

for (let i = 0; i < POKEMONS.length; i++) {
  pokemonsHtml += getPOKEMONS(POKEMONS[i]);
}
const pokeData = document.getElementById('info');
pokeData.innerHTML = pokemonsHtml;


//onst selectAZ = document.getElementById("orderABC");
//selectAZ.addEventListener("change", () => {
 // document.getElementById('info').innerHTML = filterAZ();
//});

//const filterAZfunction = filterAZ();
//for (let i = 0; i < filterAZfunction.length; i++) {
 // pokemonsHtml += getPOKEMONS(filterAZfunction[i])
 
//hacer un filtro (array filtrado al for con ifs), map//buscar map y su uso 
//const filterByType = (data, type) => {p
//if (type === 'all') {
//return data;
//}
