/* Crea un array vuoto e chiedi all’utente un numero da inserire
 nell’array. Continua a chiedere i numeri all’utente e a inserirli
  nell’array fino a quando la somma degli elementi è minore di 50.
*/

let numbers = []; //array vuoto

let sum = 0;

while (sum < 50) {
    let userInput = prompt("Inserisci un numero nell'array: ");
    userInput = parseInt(userInput);
    numbers.push(userInput);
    sum += userInput;
}
console.log(`La somma degli elementi dell'array è ${sum}`);
console.log(`L'array è ${numbers}`);