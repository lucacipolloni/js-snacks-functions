/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = "Mario";

// Dichiara la funzione qui.
function greetUser(name) {
  const greeting = "Ciao" + name;
  return greeting;
}

// Invoca la funzione qui e stampa il risultato in console
const userGreetingText = greetUser(userName);
console.log(userGreetingText);

//Risultato atteso se si passa 'Mario': // ciao Mario
