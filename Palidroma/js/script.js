console.log(palindroma("ciao"))

//creare funzione per parola palindroma
function palindroma (str){

  //chiediamo all'utente una parola
  var parola_utente = prompt("Inserisci una parola")

  /* dividiamo una stringa in un array con split
  con reverse invertiamo l'ordine degli elementi
  con join ritrasformiamo l'array in una stringa */
  var parola = parola_utente.split("").reverse().join("");

  //controlliamo se è palindroma
  if(parola_utente === parola){
    var output = "la parola è palindroma"
    return output;
  }else{
    var output2 = "la parola non è palindroma"
    return output2
  }
}