const prompt = require('prompt-sync')();

let base = +prompt("Digite um Número pra base");
let expoente = +prompt("Numero para ser o expoente!")

let resultado = 0;
let base_aux = base;
for(let j = 1; j < expoente; j++){
   resultado = 0
   for(let i = 0; i < base; i++){
      resultado += base_aux
   }
   base_aux = resultado
}

console.log(resultado)