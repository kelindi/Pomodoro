let currentTimer;

window.onload = () => {
    //timer(25);
}

function timer(amount, min = amount, seconds = 60){
    currentTimer = setInterval(() => {
        if(seconds == 0){
            min -= 1;
            seconds = 59;
        }
        else{
            seconds -=1
        }
        
        console.log(`${min} ${seconds}`);
    }, 1000);
}


