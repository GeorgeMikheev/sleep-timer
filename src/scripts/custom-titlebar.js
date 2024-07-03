const { ipcRenderer } = require('electron');

document.getElementById('close-button').addEventListener('click', () => {
    ipcRenderer.send('closeApp');
});

document.getElementById('minimize-button').addEventListener('click', () => {
    ipcRenderer.send('minimizeApp');
});
