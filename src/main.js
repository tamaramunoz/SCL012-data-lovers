import POKEMONS from './data/pokemon/pokemon.js';

 //mostrando todos los pokemones en su tarjeta
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
//funcion todos por id
let pokemonsHtml = ""; 

for (let i = 0; i < POKEMONS.length; i++) {
  pokemonsHtml += getPOKEMONS(POKEMONS[i])

  let pokeData = document.getElementById("info");
  pokeData.innerHTML = pokemonsHtml;
};


//filtrando por tipo
import {filterType} from './data.js';
const filtering = document.getElementById("filterType");

filtering.addEventListener("change", function() {
  //contendra el nombre del tipo seleccionado
  const selectingType = document.getElementById("filterType").value;
  //dentro de la funcion integramos el tipo seleccionado
  const resultType = filterType(selectingType);
  const containerInfo = document.getElementById("info");
  containerInfo.innerHTML = "";


  for (let i = 0; i < resultType.length; i++) {
    containerInfo.innerHTML += `${getPOKEMONS(resultType[i])}`;
  }
});


//filtrando al pokemon por nombre (en el buscador)
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

//WORKING "TODOS" BTN 
document.getElementById('showAll').addEventListener('click', () =>{
  location.reload();
});
