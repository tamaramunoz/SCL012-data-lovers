/**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */
 import POKEMON from './data/pokemon/pokemon.js'

 console.log(POKEMON);
 
 console.log(POKEMON[4]);

/*
 * console.log(POKEMON);
 * console.log(LoL);
 * console.log(POTTER)
*/
for (let i = 0; i < POKEMON.length; i++) {
  let pokeData = document.getElementById("info");
  pokeData.innerHTML += 
  ` <p>${POKEMON[i].num}</p>
    <p>${POKEMON[i].name}</p> `
  
}
/*
function loadDoc() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
      } 
    };
    xhttp.open("GET", "pokemon.js", true);
    xhttp.send();
  }
  */