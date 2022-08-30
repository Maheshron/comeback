const start = document.querySelector(".start");
const reset = document.querySelector(".reset");

let seconds = 0;
let minutes = 0;
let hours   = 0;

let timerInterval;
let timerStatus = "stopped";


function stopWatch(){
    seconds++;
    if(seconds/60 === 1){
        seconds = 0;
        minutes++;
        if(minutes/60 === 1){
            minutes = 0;
            hours++
        }
    }

    let display = document.getElementById('timer');
    display.innerText = hours + ":" + minutes + ":" + seconds;

}

start.addEventListener("click",function(){
    if(timerStatus === "stopped"){
        timerInterval = setInterval(stopWatch,1000);
        timerStatus = "started";
        start.innerText = "paused";
    }
    else{
        window.clearInterval(timerInterval);
        start.innerText = "start";
    }
});

reset.addEventListener("click",function(){
        seconds = 0;
        minutes = 0;
        hours = 0;
        let display =  document.querySelector("#timer");
        display.innerText = hours + ":" + minutes + ":" + seconds;
       
});
