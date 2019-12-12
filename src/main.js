import POKEMONS from './data/pokemon/pokemon.js';

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
  pokemonsHtml += getPOKEMONS(POKEMONS[i])
}
const pokeData = document.getElementById('info');
pokeData.innerHTML = pokemonsHtml;
