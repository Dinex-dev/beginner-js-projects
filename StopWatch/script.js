let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")
time = [00,00,00]

let startButton = document.querySelector("#start")
let stopButton = document.querySelector("#stop")
let resetButton = document.querySelector("#reset")

function updateWatch(){
    if(time[2]<59){
        time[2]++;
    }
    else{
        time[2]=0
        if(time[1]<59){
            time[1]++
        }
        else{
            time[1]=0
            time[0]++
        }
    }
    hours.innerHTML = ("0" + time[0]).slice(-2);
    minutes.innerHTML= ("0" + time[1]).slice(-2);
    seconds.innerHTML = ("0" + time[2]).slice(-2);
}

resetButton.addEventListener("click",()=>{
    time = [00,00,00]
})
stopButton.addEventListener("click",()=>{
    window.clearInterval(startClock)
})

startButton.addEventListener("click",()=>{
    startClock = setInterval(updateWatch,1000)
})