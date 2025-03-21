let idadeMinima = true;
let tituloEleitor =true;

let podeVotar = idadeMinima && tituloEleitor;
console.log("Pode Votar? " + podeVotar)

let podeViajar = !podeVotar;
console.log("Pode Viajar? " + podeViajar)