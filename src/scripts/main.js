const { exec } = require('child_process');
//const { error } = require('console');

const formInput = window.document.querySelector('.form__input'); 
const startButton = window.document.querySelector('.form__button');
const textTime = window.document.querySelector('.input-value');

function countdownTime() {
    formInput.value = formInput.value - 1;
    textTime.textContent = formInput.value + ' min';

    if(formInput.value > 0) {
        setTimeout(() => countdownTime(), 1000);
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
formInput.addEventListener('mousemove', () => textTime.textContent = formInput.value + ' min');
