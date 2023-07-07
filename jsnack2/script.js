/* 
Crea due tag div con due id diversi. Un div avrà il testo colorato di
rosso mentre l’altro di verde. Partendo da un array di numeri, 
stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
*/
const divDispari = document.getElementById("rosso");
const divPari = document.getElementById("verde");

let numbers = [12,34,45,1,89,100,3,9,18,71,83,33,54,80,98,13];

//uso per l'es un ciclo while dato che è stato l'argomento trattato a
//lezione anche se in questo caso sarebbe stato più appropriato un for

let i = 0;

while (i < numbers.length) {
    if (numbers[i] % 2 === 1) { //il numero è dispari
        divDispari.innerHTML += `${numbers[i]} `;
    } else if (numbers[i] % 2 === 0) { //il numero è pari
        divPari.innerHTML += `${numbers[i]} `;
    } 
    i++;
}