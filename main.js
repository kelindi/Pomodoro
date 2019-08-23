let currentTimer, lastMin, lastSecond, status, defaultSession = 25, defaultBreak = 5;

window.onload = () => {
    //timer(25);
    initDisplays();
    initBtns();
}

function timer(amount, min = amount, seconds = 60) {
    currentTimer = setInterval(() => {
        if (seconds == 0) {
            min -= 1;
            seconds = 59;
        }
        else {
            seconds -= 1
        }

        console.log(`${min} ${seconds}`);
    }, 1000);
}


function pauseTimer(){
    clearInterval(current);
    lastMin = min;
    lastSecond = seconds;
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
        if(defaultSession == 0){
            return
        }
        defaultSession -= 1;
        updateSession(defaultSession);
    })
    //init increase session time button
    addsession = document.querySelector('#addSession');
    addSession.addEventListener('click',()=> {
        defaultSession += 1;
        updateSession(defaultSession);
    })
    //init reduce break button
    subBreak = document.querySelector('#subBreak');
    subBreak.addEventListener('click',()=> {
        if(defaultBreak == 0){
            return
        }
        defaultBreak -= 1;
        breakMins.textContent = defaultBreak;
    })
    //init increase break button
    addBreak = document.querySelector('#addBreak');
    addBreak.addEventListener('click',()=> {
        if(defaultBreak == 0){
            return
        }
        defaultBreak += 1;
        breakMins.textContent = defaultBreak;
    })

    //init Start button
    
    
}

function updateSession(min){
    time.textContent = `${pad(min)}:00`;
    sessionMins.textContent = min;
}



function pad(number) {
    return (number < 10 ? '0' : '') + number
  
}