const { app, BrowserWindow, ipcMain } = require("electron/main");
const path = require("path");

function createWindow() {
	const win = new BrowserWindow({
		width: 250,
		height: 220,
		icon: path.join(__dirname, "./images/icon.png"),
		transparent: true,
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
			nodeIntegration: true,
			contextIsolation: false,
		},
		frame: false,
		titleBarStyle: "hidden",
	});

	win.setMenuBarVisibility(false);
	win.loadFile("./src/index.html");

	ipcMain.on("closeApp", () => {
		app.quit();
	});

	ipcMain.on("minimizeApp", () => {
		win.minimize();
	});
}

app.whenReady().then(() => {
	createWindow();

	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});
