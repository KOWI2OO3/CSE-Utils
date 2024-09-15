const { app, BrowserWindow } = require('electron');
const express = require('express');

// Create the Express app to serve static Blazor files
const expressApp = express();
const serverPort = 3000;

// Serve static files from the 'wwwroot' folder (where Blazor outputs its files)
expressApp.use(express.static(__dirname + '\\wwwroot'));

// Start the express server
expressApp.listen(serverPort, () => {
  console.log(`Express server running at http://localhost:${serverPort}`);
});

function createWindow() {
  const mainWindow = new BrowserWindow({
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // Load the Blazor application from the local express server
  mainWindow.loadURL(`http://localhost:${serverPort}`);
}

app.on('window-all-closed', () => {
  console.log("Exiting Electron");
  app.quit();
})

app.whenReady().then(() => {
  createWindow();
});