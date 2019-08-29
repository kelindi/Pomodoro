let currentTimer, lastMin, lastSecond, defaultSession = 25, defaultBreak = 5, activeTimer = false;
let sessionSeconds = 0, timerStarted = false, breakSeconds = 0;
window.onload = () => {
    //timer(25);
    initDisplays();
    initBtns();
}

function timer() {
    stat.textContent = "Session";
    activeTimer = true;
    currentTimer = setInterval(() => {
        if(defaultSession == 0 && sessionSeconds == 0){
            changeTimer();
        }
        else if (sessionSeconds == 0) {
            defaultSession -= 1;
            sessionSeconds = 59;
            time.textContent = `${pad(defaultSession)}:${pad(sessionSeconds)}`
        }
        else {
            sessionSeconds -= 1
            time.textContent = `${pad(defaultSession)}:${pad(sessionSeconds)}`
        }

    }, 1000);
    console.log('timer finished');
}

function breakTimer() {
    stat.textContent = "Break";
    activeTimer = true;
    currentTimer = setInterval(() => {
        if(defaultBreak == 0 && breakSeconds == 0){
            changeTimer();
        }
        
        else if (breakSeconds == 0) {
            defaultBreak -= 1;
            breakSeconds = 59;
            time.textContent = `${pad(defaultBreak)}:${pad(breakSeconds)}`
        }
        else {
            breakSeconds -= 1
            time.textContent = `${pad(defaultBreak)}:${pad(breakSeconds)}`
        }
    }, 1000);
}



function pauseTimer() {
    clearInterval(currentTimer);
    if (stat.textContent == "Session") {
        lastMin = defaultSession;
        lastSecond = sessionSeconds;
    }
    else {
        lastMin = defaultBreak;
        lastSecond = breakSeconds;
    }
    timerStarted = false;
};


function initDisplays() {
    sessionMins = document.querySelector('#sessionMins')
    sessionMins.textContent = 25;
    breakMins = document.querySelector('#breakMins')
    breakMins.textContent = 5;
    time = document.querySelector("#time");
    time.textContent = `25:00`;
    stat = document.querySelector("#status");
    stat.textContent = "Session";
}
function initBtns() {
    //init reduce session time button
    subSession = document.querySelector('#subSession');
    subSession.addEventListener('click', () => {
        if (defaultSession == 1 || activeTimer) {
            return
        }

        defaultSession -= 1;
        updateSession(defaultSession);
    })
    //init increase session time button
    addsession = document.querySelector('#addSession');
    addSession.addEventListener('click', () => {
        if (activeTimer) {
            return
        }
        defaultSession += 1;
        updateSession(defaultSession);
    })
    //init reduce break button
    subBreak = document.querySelector('#subBreak');
    subBreak.addEventListener('click', () => {
        if (defaultBreak == 1 || activeTimer) {
            return
        }
        defaultBreak -= 1;
        breakMins.textContent = defaultBreak;
    })
    //init increase break button
    addBreak = document.querySelector('#addBreak');
    addBreak.addEventListener('click', () => {
        if (activeTimer) {
            return
        }
        defaultBreak += 1;
        breakMins.textContent = defaultBreak;
    })

    //init Start button
    start = document.querySelector('#start');
    start.addEventListener('click', () => {
        if (!timerStarted) {
            timer();
        }
    })

    //init pause button
    pause = document.querySelector('#pause');
    pause.addEventListener('click', () => {
        pauseTimer();
    })

    //init refresh button
    refresh = document.querySelector('#refresh');
    refresh.addEventListener('click', () => {
        clearInterval(currentTimer);
        defaultBreak = 5;
        defaultSession = 25;
        time.textContent = '25:00'
        breakMins.textContent = 5;
        sessionMins.textContent = 25;
        activeTimer = false;
        stat.textContent = "Session";
    })
    //init StopClock
    stopClock = document.querySelector('#stopClock');
    stopClock.addEventListener('click', () => {
        clearInterval(currentTimer);
        og_min = sessionMins.textContent;
        time.textContent = `${og_min}:00`
        activeTimer = false;
        stat.textContent == 'Session'
        
    })
}



function updateSession(min) {
    if (!activeTimer) {
        time.textContent = `${pad(min)}:00`;
    }
    sessionMins.textContent = min;
}



function pad(number) {
    return (number < 10 ? '0' : '') + number

}

function changeStatus() {
    if (stat.textContent == "Session") {
        stat.textContent = "Break";
    }
    else {
        stat.textContent = "Session";
    }
}

function changeTimer() {
    if  (stat.textContent == "Session") {
        defaultSession = sessionMins.textContent;
        sessionSeconds = 0;
        clearInterval(currentTimer);
        breakTimer();
    }
    else if (stat.textContent == "Break") {
        defaultBreak = breakMins.textContent;
        breakSeconds = 0;
        clearInterval(currentTimer);
        timer();
    }
}