// Richiesta all'utente il numero di chilometri e l'età
let km = parseFloat(prompt("Inserisci il numero di chilometri che vuoi percorrere:"));
let eta = parseInt(prompt("Inserisci la tua età:"));

// Calcolo del prezzo base
let prezzoBase = km * 0.21;

// Applica lo sconto in base all'età
let prezzoFinale;
if (eta < 18) {
    prezzoFinale = prezzoBase * 0.8; // Sconto del 20% per i minorenni
} else if (eta >= 65) {
    prezzoFinale = prezzoBase * 0.6; // Sconto del 40% per gli over 65
} else {
    prezzoFinale = prezzoBase; // Nessuno sconto per le altre età
}

// Arrotonda il prezzo finale a due decimali
prezzoFinale = prezzoFinale.toFixed(2);

// Mostra il risultato
alert("Il prezzo del tuo biglietto è: " + prezzoFinale + " €");
