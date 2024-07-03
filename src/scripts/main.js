const { exec } = require('child_process');
//const { error } = require('console');

const formInput = window.document.querySelector('.form__input'); 
const startButton = window.document.querySelector('.form__button');
const textTime = window.document.querySelector('.input-value');

let seconds = 59;

function countdownTime() {

    if(formInput.value > 0) {
        textTime.textContent = `${formInput.value - 1}:${seconds}`;

        setTimeout(() => {
            if(seconds > 0) {
                seconds -= 1;
            } else {
                formInput.value -= 1;
                seconds = 60;
            }
            
            countdownTime();
        }, 1000);
    } else {
        offPC();
    }
}

function offPC() {
    exec('shutdown /s /t 0', (error, stdout, stderr) => {

        if(error) {
            console.error(`exec error: ${error}`);
            return;
        }

        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });

    console.log('PC off');
}

startButton.addEventListener('click', () => countdownTime(formInput, textTime));
formInput.addEventListener('mouseup', () => textTime.textContent = `${formInput.value}:00`);
