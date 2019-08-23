let currentTimer, lastMin, lastSecond, status, defaultSession = 25, defaultBreak = 5, activeTimer = false;
let seconds = 60, timerStarted = false;
window.onload = () => {
    //timer(25);
    initDisplays();
    initBtns();
}

function timer() {
    activeTimer = true;
    currentTimer = setInterval(() => {
        if(defaultSession == 0)
        
        if (seconds == 0) {
            defaultSession -= 1;
            seconds = 59;
            time.textContent = `${pad(defaultSession)}:${pad(seconds)}`
        }
        else {
            seconds -= 1
            time.textContent = `${pad(defaultSession)}:${pad(seconds)}`
        }

    }, 1000);
}


function pauseTimer(){
    clearInterval(currentTimer);
    lastMin = defaultSession;
    lastSecond = seconds;
    timerStarted =false;
};

function stopTimer(){
    clearInterval(current)
}
function initDisplays(){
    sessionMins = document.querySelector('#sessionMins')
    sessionMins.textContent = 25;
    breakMins = document.querySelector('#breakMins')
    breakMins.textContent = 5;
    time = document.querySelector("#time");
    time.textContent = `25:00`
    status = document.querySelector("#status")
    status.textContent = "Session"
}   
function initBtns(){
    //init reduce session time button
    subSession = document.querySelector('#subSession');
    subSession.addEventListener('click',()=> {
        if(defaultSession == 1 || activeTimer){
            return
        }

        defaultSession -= 1;
        updateSession(defaultSession);
    })
    //init increase session time button
    addsession = document.querySelector('#addSession');
    addSession.addEventListener('click',()=> {
        if(activeTimer){
            return
        }
        defaultSession += 1;
        updateSession(defaultSession);
    })
    //init reduce break button
    subBreak = document.querySelector('#subBreak');
    subBreak.addEventListener('click',()=> {
        if(defaultBreak == 1 || activeTimer){
            return
        }
        defaultBreak -= 1;
        breakMins.textContent = defaultBreak;
    })
    //init increase break button
    addBreak = document.querySelector('#addBreak');
    addBreak.addEventListener('click',()=> {
        if(activeTimer){
            return
        }
        defaultBreak += 1;
        breakMins.textContent = defaultBreak;
    })

    //init Start button
    start = document.querySelector('#start');
    start.addEventListener('click',()=>{
        if(!timerStarted){
            timer();
        }
    })
    
    //init pause button
    pause = document.querySelector('#pause');
    pause.addEventListener('click',()=>{
        pauseTimer();
    })

    //init refresh button
    refresh = document.querySelector('#refresh');
    refresh.addEventListener('click',()=>{
        clearInterval(currentTimer);
        defaultBreak = 5;
        defaultSession = 25;
        time.textContent = '25:00'
        breakMins.textContent = 25;
        sessionMins.textContent = 5
        activeTimer = false;
    })
    //init StopClock
    stopClock = document.querySelector('#stopClock');
    stopClock.addEventListener('click',() =>{
        clearInterval(currentTimer);
        og_min = sessionMins.textContent;
        time.textContent = `${og_min}:00`
        activeTimer = false;
    })
}



function updateSession(min){
    if(!activeTimer){
        time.textContent = `${pad(min)}:00`;
    }
    sessionMins.textContent = min;
}



function pad(number) {
    return (number < 10 ? '0' : '') + number
  
}