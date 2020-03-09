/* eslint-disable implicit-arrow-linebreak */
import POKEMONS from './data/pokemon/pokemon.js';
import { filterType, weakness } from './data.js';

// // declarando a JSON desde la base que se encuentra en mi github
// fetch('https://raw.githubusercontent.com/tamaramunoz/SCL012-data-lovers/master/src/data/pokemon/pokemon.json')
//   .then((response) =>
//   // convirtiendo a JSON
//     response.json()).then((data) => {
//     // ahora data es un objeto JS
//     const POKEMONS = data.pokemon;
//     // console.log(POKEMONS);
//   }).catch((err) => (err));

// tarjeta de pokemones
function getPOKEMONS(POKEMONParam) {
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
let pokemonHtml = '';
// recorriendo la base de datos
for (let i = 0; i < POKEMONS.length; i += 1) {
  pokemonHtml += getPOKEMONS(POKEMONS[i]);
  // imprimiendolo en el documento
  const pokeData = document.getElementById('info');
  pokeData.innerHTML = pokemonHtml;
}


// filtrando por tipo
const filtering = document.getElementById('filterType');

filtering.addEventListener('change', () => {
  // contendra el nombre del tipo seleccionado
  const selectingType = document.getElementById('filterType').value;
  // dentro de la funcion integramos el tipo seleccionado
  const resultType = filterType(selectingType);
  const containerInfo = document.getElementById('info');
  containerInfo.innerHTML = '';
  // recorriendo la base de datos para que me imprima todos los pokemones
  // que coincidan con el filtro escogido
  for (let i = 0; i < resultType.length; i += 1) {
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
  printingInfo.innerHTML = '';

  for (let i = 0; i < resultWeak.length; i += 1) {
    printingInfo.innerHTML += `${getPOKEMONS(resultWeak[i])}`;
  }
});

// filtrando al pokemon por nombre (en el buscador)
const btnSearch = document.getElementById('search-name');
// llamado a evento click button
btnSearch.addEventListener('click', () => {
  const pokeNames = document.getElementById('barra-busqueda').value;
  const pokeData = document.getElementById('info');
  for (let i = 0; i < POKEMONS.length; i += 1) {
    if (POKEMONS[i].name === pokeNames) {
      pokeData.innerHTML = getPOKEMONS(POKEMONS[i]);
    }
  }
});

// recargando la página con el boton "todos"
document.getElementById('showAll').addEventListener('click', () => {
  location.reload();
});
