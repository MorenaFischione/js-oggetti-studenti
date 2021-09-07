
/*
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente 
inserendo nell’ordine: nome, cognome e età.
*/

// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
let studente = {
    nome : "Morena",
    cognome : "Fischione",
    età : 37,
};

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for ( let proprietà in studente) {
    console.log(studente[proprietà]);
}

// Creare un array di oggetti di studenti.

let studenti = 
[
    {
    "nome" : "Nicolo",
    "cognome" : "Desiato",
    "età" : 10,
    },

    {
    "nome" : "Paolo",
    "cognome" : "Rossi",
    "età" : 10,
    },

    {
    "nome" : "Mario",
    "cognome" : "Cinque",
    "età" : 10,
    },

    
]
console.log(studenti[0]);

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

for ( let i = 0; i < studenti.length; i++) {
    let studenteAttuale = studenti[i];
    // console.log(studenteAttuale);
    let nomeStudenteAttuale = studenteAttuale["nome"];
    let cognomeStudenteAttuale = studenteAttuale["cognome"];
    console.log(nomeStudenteAttuale + " " + cognomeStudenteAttuale);
}

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente 
// inserendo nell’ordine: nome, cognome e età.

let studenteNuovo = {
    nome : prompt("Inserisci il nome del nuovo studente"),
    cognome : prompt("Inserisci il cognome del nuovo studente"),
    età : prompt("Inserisci l'età del nuovo studente"),
};

studenti.push(studenteNuovo);
console.log(studenti);