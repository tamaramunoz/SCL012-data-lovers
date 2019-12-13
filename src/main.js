import POKEMONS from './data/pokemon/pokemon.js';
import { filterType } from './data.js';
import { weakness } from './data.js';

// tarjeta de pokemones
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
// mostrando pagina principal todos los pokemones por id
let pokemonsHtml = '';

for (let i = 0; i < POKEMONS.length; i++) {
  pokemonsHtml += getPOKEMONS(POKEMONS[i]);

  const pokeData = document.getElementById('info');
  pokeData.innerHTML = pokemonsHtml;
}


// filtrando por tipo
const filtering = document.getElementById('filterType');

filtering.addEventListener('change', function () {
  // contendra el nombre del tipo seleccionado
  const selectingType = document.getElementById('filterType').value;
  // dentro de la funcion integramos el tipo seleccionado
  const resultType = filterType(selectingType);
  const containerInfo = document.getElementById('info');
  containerInfo.innerHTML = "";

  for (let i = 0; i < resultType.length; i++) {
    containerInfo.innerHTML += `${getPOKEMONS(resultType[i])}`;
  }
});


// filtrando por debilidad
const selectingWeak = document.getElementById('filterWeakness');

selectingWeak.addEventListener('change', () => {
  const choosingWeak = document.getElementById('filterWeakness').value;
  // dentro de la funcion integramos la debilidad elegida
  const resultWeak = weakness(choosingWeak);
  const printingInfo = document.getElementById('info');
  printingInfo.innerHTML = "";

  for (let i = 0; i < resultWeak.length; i++) {
    printingInfo.innerHTML += `${getPOKEMONS(resultWeak[i])}`;
  }
});

// filtrando al pokemon por nombre (en el buscador)
const btnSearch = document.getElementById('search-name');
// llamado a evento click button
btnSearch.addEventListener('click', function () {
  const pokeNames = document.getElementById('barra-busqueda').value;
  const pokeData = document.getElementById('info');
  const findedName ='';
  for (let i = 0; i < POKEMONS.length; i++) {
    if (POKEMONS[i].name === pokeNames){
      pokeData.innerHTML = getPOKEMONS(POKEMONS[i]);
    }
  }
});

// WORKING "TODOS" BTN
document.getElementById('showAll').addEventListener('click', () => {
  location.reload();
});
