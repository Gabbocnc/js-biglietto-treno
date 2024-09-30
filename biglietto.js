/* TRACCIA
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
= L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*/



//prima fase : preparazione
/* variabile price */
let km_Price = 0.21;
/* variabile km */
let km = parseFloat(prompt('Inserisci i km da percorrere'));
/* variabile price */
let km_Total_Price = km * km_Price;
/* variabile età */
let age = parseFloat(prompt('Inserisci età passeggero'));
/* variabile sconto */
let Total_price;


//seconda fase: elaborazione dati
/* Condizione unica */
Total_price = km_Total_Price
/* Condizione Under18 */
if (age < 18) {
    Total_price = (km_Total_Price - (km_Total_Price * 0.2));
    /* Condizione Over65 */
} else if (age > 65) {
    Total_price = (km_Total_Price - (km_Total_Price * 0.4));
}
/* Imposto 2 decimali al prezzo totale */
Total_price.toFixed(2);
/* Messaggio finale */
alert(`Il prezzo totale del biglietto è: €${Total_price}`);
/*Output console */
console.log(Total_price);