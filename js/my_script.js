
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
    studente : 1,
    nome : "Nicolo",
    cognome : "Desiato",
    },

    {
    studente : 2,
    nome : "Paolo",
    cognome : "Rossi",
    },

    {
    studente : 3,
    nome : "Mario",
    cognome : "Cinque",
    },

    
]
console.log(studenti[0]);

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

for ( let i = 0; i < studenti.length; i++) {
    console.log(studenti[i]);
    for ( let proprietà in studenti[i]) {
      console.log(studenti[i][proprietà])
    }
}

   
