/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
const getInitials = (names) => {
  const initials = [];

  for (let i = 0; i < names.length; i++) {
    const currentName = names[i];
    const currentInitial = currentName[0];
    initials.push(currentInitial);
  }

  return initials;
};

// Invoca la funzione qui e stampa il risultato in console

const namesInitials = getInitials(names);
console.log(namesInitials);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
