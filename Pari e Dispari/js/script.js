// utente scegli pari o dispari  
var pari_dispari = prompt("scegli tra pari o dispari");

while(pari_dispari !== "pari" && pari_dispari !== "dispari"){
  alert("inserisci pari o dispari");
  var pari_dispari = prompt("scegli tra pari o dispari");
}

//inserisce un numero da 1 a 5
var numero_utente = parseInt(prompt("scegli un numero da 1 a 5"));

min = 1
max = 5

//generiamo un numero random da 1 a 5 
function numero_random (min, max){
  
  return Math.floor(Math.random() * (max - min)) + min;
}

// sommiamo i due numeri

//determiniamo se la somma è pari o dispari