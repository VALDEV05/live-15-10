
//spread

//crea array di frutta
//utilizza spread per farne una copia
/* strumenti
    -array
    -operatore spread (...) */


/* const fruits = ['mela', 'arancia', 'susina', 'fragola', 'limone'];
const fruits2 = ['kiwi', 'pesca', 'banana'];
console.log(fruits)

const clonedFruits = [...fruits, ...fruits2, ...fruits];
console.log(clonedFruits) */

//destrutting

//crea un array e utilizzo la destrutturazione per salvare i primi due elementi in 2 variabili

/* let nomi = ['luca', 'paolo', 'francesco', 'chiara'];
let [nomeStudente1, nomeStudente2] = nomi;
console.log(nomeStudente1, nomeStudente2); */

let films = ['hit', 'endgame', '007', 'dune', 'starwars'];
let [film1, , film3] = films;
console.log(film1, film3);
