const conejos = document.querySelectorAll(".conejos")
const contador = document.getElementById("count")
const record = document.getElementById("record")
const time = document.getElementById("time")
const startButton = document.getElementById("startButton")

let recordsPoints = localStorage.record || 0
let seconds = 1
let count = 0

function start(){
    interval()
    contador.innerText = `Scores: ${count}`
conejos.forEach(conejo => {
    conejo.addEventListener("click", ()=>{
        count++
        contador.innerText = `Scores: ${count}`

    })
}) 


   function interval(){
    time.innerText = `Time left: ${seconds}`
    let intervalGame = setInterval(() => {
        if(seconds === 0){
            clearInterval(intervalGame)
            endGame()
            return
        }
        seconds--
        time.innerText = `Time left: ${seconds}`
    }, 1000)

    return intervalGame
}   }

function endGame(){
    const resetButton = document.createElement("button")
    resetButton.innerText = "Restart!"
    resetButton.id = "restartButton"
    time.innerText = ""
    time.append(resetButton)
    recordsPoints = count
    conejos.forEach(conejo => {
        conejo.classList.add("stop")
    })
    seconds = 0
    resetButton.addEventListener("click", () =>{
        location.reload()
    })
    
    if(localStorage.getItem("record") === null){
       return localStorage.setItem("record", recordsPoints)
    }
    if(Number(localStorage.getItem("record")) < recordsPoints){
       return localStorage.setItem("record", recordsPoints)
    }

}

startButton.addEventListener("click",start)



record.innerText = `Your record is: ${recordsPoints}`

