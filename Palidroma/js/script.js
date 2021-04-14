console.log(palidroma("ciao"))

//creare funzione per parola palidroma
function palidroma (str){

  //chiediamo all'utente una parola
  var parola_utente = prompt("Inserisci una parola")

  /* dividiamo una stringa in un array con split
  con reverse invertiamo l'ordine degli elementi
  con join ritrasformiamo l'array in una stringa */
  var parola = parola_utente.split("").reverse().join("");

  //controlliamo se è palidroma
  if(parola_utente === parola){
    var output = "la parola è palidroma"
    return output;
  }else{
    var output2 = "la parola non è palidroma"
    return output2
  }
}