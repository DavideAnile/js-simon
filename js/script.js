
/* 

__________CONSEGNA_____________


Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.
Dopo 10 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, 
i numeri che ha visto precedentemente, 
tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti 
e quali dei numeri da indovinare sono stati individuati.


*/


/* 
-aggiungo evento al click del bottone
-reset dei valori già esistenti
-visualizza in pagina 5 numeri random
-fai partire un timer di 10 secondi
-dopo i 10 secondi i numeri stampati in pagina scompaiono (funzione "countDown")
-genero evento al click del bottone "CONTROLLA NUMERI"
-inizializzo contatore per punteggio finale
-inizializzo un array per memorizzare i numeri "GIUSTI" inseriti dall'utente
-fai inserire tramite 5 input diversi i numeri visti in precedenza 
? SE il valorer dell'input corrispondente a [i] è incluso nell'array di numeri generati
    °pusha il valore dentro l'array "numeriTrovati"
?SE il valore di contatore è uguale al numero di numeri generati
    °stampo in pagina "complimenti li hai trovati tutti"
:ALTRIMENTI
    °stampo in pagina quanti e quali numeri ho trovato


*/


const playButtonEl = document.getElementById("play")
const sendButtonEl = document.getElementById("send-numbers")
const randomContainerEl = document.getElementById("random-container")
const timerContainerEl = document.getElementById("timer")
const inputContainerEl = document.getElementById("input-container")
const resultEl = document.getElementById("result")
const inputArray = []
let randomNumbers ;
let inputEl;
let timer;
let secondsLeft;


// aggiungo evento al click del bottone
playButtonEl.addEventListener("click", function(){


// reset dei valori già esistenti al click    
    clearInterval(timer)
    secondsLeft = 10
    inputContainerEl.innerText = " "
    sendButtonEl.style.display = "none"
    resultEl.innerText = " "

// -visualizza in pagina 5 numeri random
    generateRandoms()

    randomContainerEl.innerText =  ` Ricorda questi numeri ! :  ${randomNumbers}  `

// setto un timer di 10 secondi
    timer = setInterval(countDown, 1000)


    
    
})
    
// genero evento al click del bottone "CONTROLLA NUMERI"
sendButtonEl.addEventListener("click", function(){
  
//inizializzo contatore per punteggio finale    
let contatore = 0

// inizializzo un array per memorizzare i numeri "GIUSTI" inseriti dall'utente
let numeriTrovati = []


//-fai inserire tramite 5 input diversi i numeri visti in precedenza 
    for(let i = 0; i < 5; i++){


// ? SE il valorer dell'input corrispondente a [i] è incluso nell'array di numeri generati
        if(randomNumbers.includes(parseInt(inputArray[i].value))) {

        // °pusha il valore dentro l'array "numeriTrovati"    
            numeriTrovati.push(parseInt(inputArray[i].value))
            contatore++
            console.log("bravo ragazzo")
        

    }

// ? SE il valore di contatore è uguale al numero di numeri generati
    if(contatore == randomNumbers.length){

        //° stampo in pagina questo
        resultEl.innerText = "Bravo ragazzo li hai trovati tutti !"

//: ALTRIMENTI        
    } else {

        //°stampo in pagina questo
        resultEl.innerText = `Punteggio : ${contatore} 
                        Numeri trovati : ${numeriTrovati}`
    }

}
});





















/*  __________FUNZIONI___________ */










function generateRandoms (){

    randomNumbers = []

    while (randomNumbers.length < 5){
     
        let randomNumber = Math.floor(Math.random() * 20 + 1 )

        if(!randomNumbers.includes(randomNumber)){

            randomNumbers.push(randomNumber)
        }
    }

    return randomNumbers
    
}





function countDown (){

    timerContainerEl.innerText = secondsLeft
   

    if(secondsLeft == 0){
      
        clearInterval(timer)
        timerContainerEl.innerText = " "
     
// -dopo i 10 secondi i numeri stampati in pagina scompaiono        
        randomContainerEl.innerText = " "
        playButtonEl.innerText = " RIGENERA NUMERI"
        sendButtonEl.style.display = "block"


        for(let i = 0;i < 5;i++){
            inputEl = document.createElement("input")
            inputArray.push(inputEl)
            inputContainerEl.append(inputEl)
        }
        console.log(inputArray)
        

        
    }
    
    secondsLeft--
}    
    
    

















