
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
/*
let films = ['hit', 'endgame', '007', 'dune', 'starwars'];
let [film1, , film3] = films;
console.log(film1, film3);
 */

//misto 

/* creiamo 2 array
    selezioniamo dal 1 array il 1^ e il 4^ elemento
    copio la 2^ array
    uniamo la copia con i valori della 1 e 4 della 1^ array */

/* strumenti
    -array
    -spread
    -destructuring */

const nomiM = ['pablo', 'valerio', 'luigi', 'franco', 'giovanni'];
const nomiF = ['vale', 'chiara', 'doina', 'simla', 'alessia'];


const [, nome1, , , nome4] = nomiM;
console.log(nome1, nome4);

const clonedF = [...nomiF]
console.log(clonedF);

const className = [...clonedF, nome1, nome4]
console.log(className);

const nomeSimla = className[3]
console.log(nomeSimla);