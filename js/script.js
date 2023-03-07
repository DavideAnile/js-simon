
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
-visualizza in pagina 5 numeri random
-fai partire un timer di 10 secondi
-dopo i 10 secondi i numeri stampati in pagina scompaiono
-fai inserire tramite 5 input diversi i numeri visti in precedenza 


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
let secondsLeft = 10

playButtonEl.addEventListener("click", function(){

    generateRandoms()

    randomContainerEl.append(randomNumbers)


    timer = setInterval(countDown, 1000)


    
    
})
    

sendButtonEl.addEventListener("click", function(){
    
let contatore = 0
let numeriTrovati = []

    for(let i = 0; i < 5; i++){

        if(randomNumbers.includes(parseInt(inputArray[i].value))) {
            numeriTrovati.push(parseInt(inputArray[i].value))
            contatore++
            console.log("bravo ragazzo")
        

    }


    if(contatore == randomNumbers.length){

        resultEl.innerText = "Bravo ragazzo li hai trovati tutti !"

    } else {

        resultEl.innerText = `punteggio : ${contatore} 
                        numeri trovati : ${numeriTrovati}`
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
        randomContainerEl.innerText = " "
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
    
    

















