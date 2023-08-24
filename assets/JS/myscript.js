/*  
    Descrizione:
    Scrivere un programma che chieda all’utente:
    -   Il numero di chilometri da percorrere
    -   Età del passeggero 
    
    Sulla base di queste informazioni si dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
    
    N.B.    Il prezzo del biglietto è definito in base ai km (0.21 € al km)
        -   va applicato uno sconto del 20% per i minorenni
        -   va applicato uno sconto del 40% per gli over 65.
        -   NON va applicato NESSUNO sconto per gli utenti compresi tra i 18 e i 65 anni
*/

/* 
    Strumenti:
    -   const/let
    -   console.log()
    -   promt/Number
    -   if/else
    -   .toFixed(2) per convertire in decimale i prezzi dei biglietti scontati
*/

// Pseudo-codice:
// Chiedere all'utente il n. di km che desidera percorrere
const userName = (prompt("Scrivi il tuo nome"));
const userSurname = (prompt("Scrivi il tuo cognome"));
const userAge = Number(prompt("Quanti anni hai?"));
const userKm = Number(prompt("Quanti km vuoi percorrere?"));

console.log(userName, userSurname, userKm, userAge);

// Prezzo del biglietto al Km percorso
const ticketPriceFor1Km = 0.21;
// console.log(ticketPriceFor1Km);

// Calcolare il prezzo STANDARD (cioè SENZA sconti) del biglietto
const ticketStandardPrice = (userKm * ticketPriceFor1Km).toFixed(2);
// console.log(ticketStandardPrice);

//  Calcolare il prezzo dei biglietti in base agli SCONTI
const userUnder18 = (ticketStandardPrice / 100 * 20).toFixed(2);
const userOver65 = (ticketStandardPrice / 100 * 40).toFixed(2);

// console.log(userUnder18, userOver65);

// Verifico le condizioni in base all'età degli utenti
if (userAge < 18) {
    console.log("Complimenti! Hai diritto ad uno sconto del 20%" + " " + "Il prezzo del biglietto è di €" + " " + userUnder18);

} else if (userAge > 65) {
    console.log("Complimenti! Hai diritto ad uno sconto del 40%" + " " + "Il prezzo del biglietto è di €" + " " + userOver65);

} else {
    console.log("Siamo spiacenti! Non hai diritto a nessuno sconto" + " " + "Il prezzo del biglietto è di €" + " " + ticketStandardPrice);
}



