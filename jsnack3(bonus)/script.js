/*
Fai inserire un numero, che chiameremo N, all’utente. Genera N array, 
ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne 
crei uno, stampalo.
*/

const inputEl = document.getElementById("input-number");
const btnEl = document.querySelector(".btn");
const btnReset = document.querySelector(".btn-reset");

const captionEl = document.querySelector(".caption");
const outputEl = document.querySelector(".output");

//numero di elementi di ciascun array
const n = 10;

btnEl.addEventListener("click", function () {
    let inputNumber = inputEl.value; //numero di array da generare
    captionEl.style.display = "block";
    
    let count = 1;
    while (count <= inputNumber) {
        let arr = []; //array che viene creato ad ogni iterazione del ciclo
        //ciclo annidato che riempie l'array sopra dichiarato con numero randomici
        for (let i = 0; i < n; i++) {
            //genera numero random tra 1 e 100
            let random_num = Math.floor(Math.random() * 100) + 1;
            arr.push(random_num);
        }
        //ora uscito da for arr conterrà 10 numeri randomici

        //stampo array su console e su elemento html
        console.log(arr);
        outputEl.innerHTML += `<span class="span-arr">Arr${count} --> [${arr}]</span>`;

        count++;
    }
});

btnReset.addEventListener("click", function () {
    outputEl.innerHTML = "";
    inputEl.value = "";
    captionEl.style.display = "none";
})