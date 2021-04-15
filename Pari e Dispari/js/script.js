// utente scegli pari o dispari  
var pari_dispari = prompt("scegli tra pari o dispari");

while(pari_dispari !== "pari" && pari_dispari !== "dispari"){
  alert("inserisci pari o dispari");
  var pari_dispari = prompt("scegli tra pari o dispari");
}

// inserisce un numero da 1 a 5
var numero_utente = parseInt(prompt("scegli un numero da 1 a 5"));
var num_comp = numero_random(5);

// somma numero utente e computer
var sum = numero_utente + num_comp


console.log("il tuo numero è " + numero_utente);
console.log("il numero del computer è " + num_comp);
console.log("la somma è " + sum);
console.log("la somma è " + PariDispari(sum));

// utente vince o perde
if(pari_dispari === "pari" && PariDispari(sum) === "pari"){
  console.log("hai vinto");
}else if(pari_dispari === "dispari" && PariDispari(sum) === "dispari"){
  console.log("hai perso");
}else{
  console.log("hai perso")
}


function PariDispari(num){

  if(num % 2 === 0){
    return "pari"
  }else{
    return "dispari"
  }
}


function numero_random (max){
  
  var randomNum = Math.floor(Math.random() * max);
  return randomNum;
}

