const { app, BrowserWindow } = require('electron/main');
const path = require('node:path');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        //icon: path.join(__dirname, './images/icon.png'),
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false
        }

    });

    win.setMenuBarVisibility(false);
    win.setTitle('Sleep timer');
    win.loadFile('./src/index.html');
}

app.whenReady()
    .then(() => createWindow());

app.on('window-all-closed', () => app.quit());
